import { coordinate, stateContextType } from "./ContextProvider";

export const raindropValue = 100;

export async function splatRaindrops(
  mouseBoundaries: DOMRect,
  context: stateContextType
) {
  for (let i = 7; i > 0; i--) {
    const raindrop = document.getElementById("raindrop " + i);
    if (raindrop !== null)
      await checkCollision(mouseBoundaries, raindrop, context);
  }
}

async function checkCollision(
  mouse: DOMRect,
  raindropElement: HTMLElement,
  context: stateContextType
) {
  const raindrop = raindropElement.getBoundingClientRect();
  if (raindropElement.style.opacity === "1") {
    const mouseBottomCenter: coordinate = {
      x: mouse.x + mouse.width / 2,
      y: mouse.y + mouse.height,
    };
    const raindropBottomCenter: coordinate = {
      x: raindrop.x + raindrop.width / 2,
      y: raindrop.y + raindrop.height,
    };
    // left
    const lowerXBound = mouseBottomCenter.x - mouse.width / 3;
    // right
    const upperXBound = mouseBottomCenter.x + mouse.width / 3;
    // up
    const lowerYBound = mouseBottomCenter.y - mouse.height / 2;
    // down
    const upperYBound = mouseBottomCenter.y;

    if (
      // x
      within(raindropBottomCenter.x, lowerXBound, upperXBound) &&
      // y
      within(raindropBottomCenter.y, lowerYBound, upperYBound)
    ) {
      // Visuals
      raindropElement.style.opacity = "0";
      displayPoints({ x: raindrop.x, y: raindrop.y });

      // Debug
      if (context.debugMode.current) {
        // Bucket Hitbox
        displayHitbox(
          mouseBottomCenter,
          upperXBound - lowerXBound,
          upperYBound - lowerYBound
        );
        // Raindrop Focal Point
        displayFocalPoint(raindropBottomCenter);
      }

      // Score
      if (context.scoreRef.current < context.maxScore) {
        // Add score
        if (context.scoreRef.current + raindropValue < context.maxScore)
          context.scoreRef.current += raindropValue;
        else context.scoreRef.current = context.maxScore;
        // Update scores
        context.setScore(context.scoreRef.current);
        if (context.scoreRef.current > context.highScore)
          context.setAndSaveHighScore(context.scoreRef.current);
      }
    }
  }
}

function within(point: number, lowerBound: number, upperBound: number) {
  if (lowerBound <= point && point <= upperBound) return true;
  else return false;
}

function displayPoints(coord: coordinate) {
  const points = document.createElement("div");

  points.className =
    "dirt fixed bg-transparent " +
    "whitespace-nowrap text-sky-500 animate-float-up " +
    "title font-semibold text-[4vmin] sm:text-[3vmin] text-center ";
  points.appendChild(document.createTextNode("+" + raindropValue));

  points.style.left = coord.x + "px";
  points.style.top = coord.y + "px";

  // listeners
  points.addEventListener(
    "animationcancel",
    () => {
      points.onanimationend = null;
      points.onanimationcancel = null;
      points.remove();
    },
    { once: true }
  );
  points.addEventListener(
    "animationend",
    () => {
      points.onanimationend = null;
      points.onanimationcancel = null;
      points.remove();
    },
    { once: true }
  );

  document.getElementById("the background")?.appendChild(points);
}

function displayHitbox(coord: coordinate, w: number, h: number) {
  let hitbox = document.getElementById("hitbox");
  if (hitbox !== null) hitbox.remove();

  hitbox = document.createElement("div");
  hitbox.id = "hitbox";
  hitbox.className =
    "dirt fixed bg-transparent border border-yellow-400 " +
    "translate-x-[-50%] translate-y-[-100%] border-[0.4vmin] ";

  hitbox.style.left = coord.x + "px";
  hitbox.style.top = coord.y + "px";
  hitbox.style.width = w + "px";
  hitbox.style.height = h + "px";

  document.getElementById("the background")?.appendChild(hitbox);
}

function displayFocalPoint(coord: coordinate) {
  let focalPoint = document.getElementById("focalPoint");
  if (focalPoint !== null) focalPoint.remove();

  focalPoint = document.createElement("div");
  focalPoint.id = "focalPoint";
  focalPoint.className =
    "dirt fixed bg-transparent border border-red-400 " +
    "translate-x-[-50%] translate-y-[-50%] border-[0.4vmin] ";

  focalPoint.style.left = coord.x + "px";
  focalPoint.style.top = coord.y + "px";
  focalPoint.style.width = "1px";
  focalPoint.style.height = "1px";

  document.getElementById("the background")?.appendChild(focalPoint);
}
