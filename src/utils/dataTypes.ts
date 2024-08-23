import { sectionsArray } from './dataConstants';

export type SectionsType = (typeof sectionsArray)[number];
export type AboutTabsType = 'Profile' | 'Bio' | 'Philosophy';

export type CoordinateType = { x: number; y: number };

export type ThemeType = 'light' | 'dark';
