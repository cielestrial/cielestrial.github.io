import { sectionsArray } from './constants';

export type sections = (typeof sectionsArray)[number];
export type aboutTabs = 'Profile' | 'Bio' | 'Philosophy';

export type coordinate = { x: number; y: number };

export type themeType = 'light' | 'dark';
