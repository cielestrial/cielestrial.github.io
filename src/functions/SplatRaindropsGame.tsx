import { stateContextType } from "./ContextProvider";

export const raindropValue = 100;

// passdown cd timer
export async function splatRaindrops(
  mouseBoundaries: DOMRect,
  context: stateContextType
) {
  for (let i = 7; i > -1; i--) {
    const raindrop = document.getElementById("raindrop " + i);
    if (raindrop !== null) {
      await checkCollision(mouseBoundaries, raindrop, context);
    }
  }
}

async function checkCollision(
  mouse: DOMRect,
  raindropElement: HTMLElement,
  context: stateContextType
) {
  const raindrop = raindropElement.getBoundingClientRect();
  if (raindropElement.style.opacity === "1") {
    const lowerXBound = mouse.x - mouse.width / 2;
    const upperXBound = mouse.x + mouse.width / 2;
    const lowerYBound = mouse.y - mouse.height / 2;
    const upperYBound = mouse.y + mouse.height / 2;
    // left x
    if (
      (within(raindrop.x - raindrop.width / 2, lowerXBound, upperXBound) ||
        // right x
        within(raindrop.x + raindrop.width / 2, lowerXBound, upperXBound)) &&
      // up y
      // within(raindrop.y - raindrop.height / 2, lowerYBound, upperYBound);
      // down y
      within(raindrop.y + raindrop.height / 2, lowerYBound, upperYBound)
    ) {
      raindropElement.style.opacity = "0";
      context.scoreRef.current += raindropValue;
      context.setScore(context.scoreRef.current);
      if (context.scoreRef.current > context.highScore)
        context.setAndSaveHighScore(context.scoreRef.current);
    }
  }
}

function within(number: number, lowerBound: number, upperBound: number) {
  if (lowerBound <= number && number <= upperBound) return true;
  else return false;
}
