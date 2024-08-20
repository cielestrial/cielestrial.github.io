export const sectionsArray = [
  'Home',
  'About',
  'Projects',
  'Testimonials',
  'Contact'
] as const;
export const maxScore = 99999;

const seasons = ['Winter', 'Spring', 'Summer', 'Fall'] as const;
export let season: (typeof seasons)[number];
const envSeason: any = import.meta.env.VITE_SEASON;
if (envSeason !== undefined && seasons.includes(envSeason)) season = envSeason;
else season = 'Spring';

export const clickEvent = new MouseEvent('click', { bubbles: true });
export const leftArrowEvent = new KeyboardEvent('keydown', {
  key: 'ArrowLeft',
  bubbles: true
});
export const rightArrowEvent = new KeyboardEvent('keydown', {
  key: 'ArrowRight',
  bubbles: true
});

/**Whether the current device being used is a touch device.*/
export let touchDevice: boolean = false;
export function setTouchDevice(flag: boolean) {
  touchDevice = flag;
}

export const deadzoneX = 0.05;
export const deadzoneY = 0.1;
export const vMax = Math.max(window.outerHeight, window.outerWidth);
export const vMin = Math.min(window.outerHeight, window.outerWidth);

/**Displays hitbox during game mode.*/
export let debugMode: boolean = false;
export function setDebugMode(flag: boolean) {
  debugMode = flag;
}
