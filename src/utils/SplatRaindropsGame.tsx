import { coordinate, stateContextType } from "./ContextProvider";

/**
 * Amount of points gained for catching a raindrop.
 */
export const raindropValue = 100;

/**
 * Checks all the raindrops for collision.
 * @param mouseBoundaries Dimensions and position of the bucket.
 * @param context Global context object.
 */
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

/**
 * Checks for collision.
 * Runs additional game logic when a collision is detected.
 * @param mouse Dimensions and position of the bucket.
 * @param raindropElement Dimensions and position of the raindrop.
 * @param context Global context object.
 */
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

/**
 * Checks to see if a given point is within a given set of boundaries.
 * @param point
 * @param lowerBound
 * @param upperBound
 * @returns true, if point is within the bounds. Otherwise, false.
 */
function within(point: number, lowerBound: number, upperBound: number) {
  if (lowerBound <= point && point <= upperBound) return true;
  else return false;
}

/**
 * Displays a visual effect when points are gained.
 * @param coord The coordinates the effect will be displayed at.
 */
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

/**
 * Displays a visual effect where a collision occured.
 * @param coord The coordinates the effect will be displayed at.
 * @param w The width of the hitbox.
 * @param h The height of the hitbox.
 */
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
