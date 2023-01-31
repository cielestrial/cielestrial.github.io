import { displayPoints, raindropValue } from "../components/Points";
import { stateContextType } from "./ContextProvider";

// passdown cd timer
export async function splatRaindrops(
  mouseBoundaries: DOMRect,
  context: stateContextType
) {
  for (let i = 7; i > -1; i--) {
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
    // left
    const lowerXBound = mouse.x - mouse.width / 3;
    // right
    const upperXBound = mouse.x + mouse.width / 3;
    // up
    const lowerYBound = mouse.y - mouse.height / 2;
    // down
    const upperYBound = mouse.y - mouse.height / 6;

    if (
      // x
      within(raindrop.x - raindrop.width / 2, lowerXBound, upperXBound) &&
      // y
      within(raindrop.y, lowerYBound, upperYBound)
    ) {
      // Visuals
      raindropElement.style.opacity = "0";
      displayPoints(raindrop.x, raindrop.y);

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

function within(number: number, lowerBound: number, upperBound: number) {
  if (lowerBound <= number && number <= upperBound) return true;
  else return false;
}
