import { debugMode, maxScore } from './constants';
import { coordinate } from './types';

/**
 * Amount of points gained for catching a particle.
 */
export const particleValue = 100;

/**
 * Checks all the particles for collision.
 * @param mouseBoundaries Dimensions and position of the bucket.
 */
export async function catchParticles(
  mouseBoundaries: DOMRect,
  scoreRef: Readonly<React.MutableRefObject<number>>,
  highScore: Readonly<number>,
  setScore: (newScore: number) => void,
  setAndSaveHighScore: (newScore: number) => void
) {
  for (let i = 7; i > 0; i--) {
    const particle = document.getElementById('particle' + i);
    if (particle !== null)
      await checkCollision(
        mouseBoundaries,
        particle,
        scoreRef,
        highScore,
        setScore,
        setAndSaveHighScore
      );
  }
}

/**
 * Checks for collision.
 * Runs additional game logic when a collision is detected.
 * @param mouse Dimensions and position of the bucket.
 * @param particleElement Dimensions and position of the particle.
 * @param context Global context object.
 */
async function checkCollision(
  mouse: DOMRect,
  particleElement: HTMLElement,
  scoreRef: Readonly<React.MutableRefObject<number>>,
  highScore: Readonly<number>,
  setScore: (newScore: number) => void,
  setAndSaveHighScore: (newScore: number) => void
) {
  const particle = particleElement.getBoundingClientRect();
  if (particleElement.style.opacity === '1') {
    const mouseBottomCenter: coordinate = {
      x: mouse.x + mouse.width / 2,
      y: mouse.y + mouse.height
    };
    const particleBottomCenter: coordinate = {
      x: particle.x + particle.width / 2,
      y: particle.y + particle.height
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
      within(particleBottomCenter.x, lowerXBound, upperXBound) &&
      // y
      within(particleBottomCenter.y, lowerYBound, upperYBound)
    ) {
      // Visuals
      particleElement.style.opacity = '0';
      displayPoints({ x: particle.x, y: particle.y });

      // Debug
      if (debugMode) {
        // Bucket Hitbox
        displayHitbox(
          mouseBottomCenter,
          upperXBound - lowerXBound,
          upperYBound - lowerYBound
        );
        // Particle Focal Point
        displayFocalPoint(particleBottomCenter);
      }

      // Score
      if (scoreRef.current < maxScore) {
        // Add score
        if (scoreRef.current + particleValue < maxScore)
          setScore(scoreRef.current + particleValue);
        else setScore(maxScore);
        if (scoreRef.current > highScore) setAndSaveHighScore(scoreRef.current);
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
  const points = document.createElement('div');

  points.className =
    'dirt fixed bg-transparent text-sky-500 select-none ' +
    'whitespace-nowrap animate-float-up transform-gpu ' +
    'title font-semibold text-[4vmin] sm:text-[3vmin] text-center ';
  points.appendChild(document.createTextNode('+' + particleValue));

  points.style.left = coord.x + 'px';
  points.style.top = coord.y + 'px';

  // listeners
  points.addEventListener(
    'animationcancel',
    () => {
      points.onanimationend = null;
      points.onanimationcancel = null;
      points.remove();
    },
    { once: true }
  );
  points.addEventListener(
    'animationend',
    () => {
      points.onanimationend = null;
      points.onanimationcancel = null;
      points.remove();
    },
    { once: true }
  );

  document.getElementById('theBackground')?.appendChild(points);
}

/**
 * Displays a visual effect where a collision occured.
 * @param coord The coordinates the effect will be displayed at.
 * @param w The width of the hitbox.
 * @param h The height of the hitbox.
 */
function displayHitbox(coord: coordinate, w: number, h: number) {
  let hitbox = document.getElementById('hitbox');
  if (hitbox !== null) hitbox.remove();

  hitbox = document.createElement('div');
  hitbox.id = 'hitbox';
  hitbox.className =
    'dirt fixed bg-transparent border border-yellow-400 ' +
    'translate-x-[-50%] translate-y-[-100%] border-[0.4vmin] ';

  hitbox.style.left = coord.x + 'px';
  hitbox.style.top = coord.y + 'px';
  hitbox.style.width = w + 'px';
  hitbox.style.height = h + 'px';

  document.getElementById('theBackground')?.appendChild(hitbox);
}

function displayFocalPoint(coord: coordinate) {
  let focalPoint = document.getElementById('focalPoint');
  if (focalPoint !== null) focalPoint.remove();

  focalPoint = document.createElement('div');
  focalPoint.id = 'focalPoint';
  focalPoint.className =
    'dirt fixed bg-transparent border border-red-400 ' +
    'translate-x-[-50%] translate-y-[-50%] border-[0.4vmin] ';

  focalPoint.style.left = coord.x + 'px';
  focalPoint.style.top = coord.y + 'px';
  focalPoint.style.width = '1px';
  focalPoint.style.height = '1px';

  document.getElementById('theBackground')?.appendChild(focalPoint);
}
