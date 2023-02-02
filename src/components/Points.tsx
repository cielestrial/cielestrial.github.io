export const raindropValue = 100;

export function displayPoints(x: number, y: number) {
  const points = document.createElement("div");
  points.className =
    "points " +
    "fixed whitespace-nowrap text-sky-500 animate-float-up " +
    "title font-semibold text-[3.5vmin] sm:text-[2.625vmin] text-center ";
  points.appendChild(document.createTextNode("+" + raindropValue));
  points.style.left = x + "px";
  points.style.top = y + "px";

  // listeners
  points.addEventListener("animationcancel", () => {
    points.onanimationend = null;
    points.onanimationcancel = null;
    points.remove();
  });
  points.addEventListener("animationend", () => {
    points.onanimationend = null;
    points.onanimationcancel = null;
    points.remove();
  });

  document.getElementById("the background")?.appendChild(points);
}
