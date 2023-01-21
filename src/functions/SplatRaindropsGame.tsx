// passdown cd timer
export async function splatRaindrops(mouseBoundaries: DOMRect) {
  for (let i = 7; i > -1; i--) {
    const raindrop = document.getElementById("raindrop " + i);
    if (raindrop !== null) checkCollision(mouseBoundaries, raindrop);
  }
}

async function checkCollision(mouse: DOMRect, raindropElement: HTMLElement) {
  const raindrop = raindropElement.getBoundingClientRect();
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
    console.log("splat");
    raindropElement.style.opacity = "0";
  }
  return true;
}

function within(number: number, lowerBound: number, upperBound: number) {
  if (lowerBound <= number && number <= upperBound) return true;
  else return false;
}
