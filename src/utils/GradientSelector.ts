import { SectionsType } from './dataTypes';

export const transitionClass = 'transition duration-75 custom-ease-out ';

export function getWinterNavGradient(opened: SectionsType) {
  let gradient = '';
  switch (opened) {
    case 'Home':
      gradient = 'bg-gradient-to-t from-[#E1F5FF]/95 from-60% to-[#E7F5FF] ';
      break;
    case 'About':
      gradient = 'bg-gradient-to-b from-[#E1F5FF] from-50% to-transparent ';
      break;
    case 'Projects':
      gradient =
        'bg-gradient-to-b from-[#E1F5FF] via-[#D2E9FF] to-transparent ';
      break;
    case 'Testimonials':
      gradient =
        'bg-gradient-to-b from-[#D2E9FF] via-[#C3E6FF] to-transparent ';
      break;
    case 'Contact':
      gradient =
        'bg-gradient-to-b from-[#C3E6FF] via-[#B4E3FF] to-transparent ';
      break;
  }
  return gradient;
}

export function getWinterFootGradient(opened: SectionsType) {
  let gradient = '';
  switch (opened) {
    case 'Home':
      gradient = 'bg-gradient-to-b from-[#F0FBFF]/25 to-[#A8B0BF] to-50% ';
      break;
    case 'Contact':
      gradient = 'bg-gradient-to-b from-[#a7afbe]/50 to-[#a7afbe] to-50% ';
      break;
    default:
      gradient = 'bg-gradient-to-b from-transparent to-[#A8B0BF] to-50% ';
  }
  return gradient;
}

/**
 * Display Winter gradient colors
 * @param label current section label
 * @param opened currently opened section
 * @returns string, tailwind gradient
 * 
export function displayWinterGradient(
  opened: SectionsType
) {
  let gradient = '';
  switch (label) {
    case 'Home':
      gradient =
        opened === 'Home'
          ? 'bg-gradient-to-b from-[#E1F5FF] from-50% to-[#E1F5FF]/95 '
          : 'bg-gradient-to-b from-[#F0FBFF] to-[#E1F5FF]/95 ';
      break;
    case 'About':
      gradient =
        opened === 'Home'
          ? 'bg-gradient-to-b from-[#F0FBFF]/90 to-[#E1F5FF]/90 '
          : 'bg-gradient-to-b from-[#E1F5FF]/90 to-[#D2E9FF]/90 ';
      break;
    case 'Projects':
      gradient =
        opened === 'Home' || opened === 'About'
          ? 'bg-gradient-to-b from-[#E1F5FF]/90 to-[#D2E9FF]/90 '
          : 'bg-gradient-to-b from-[#D2E9FF]/90 to-[#C3E6FF]/90 ';
      break;
    case 'Testimonials':
      gradient =
        opened === 'Contact'
          ? 'bg-gradient-to-b from-[#C3E6FF]/90 to-[#B4E3FF]/90 '
          : 'bg-gradient-to-b from-[#D2E9FF]/90 to-[#C3E6FF]/95 ';

      break;
    case 'Contact':
      gradient = 'bg-gradient-to-b from-[#C3E6FF]/95 to-[#B4E3FF] ';
      break;
  }
  return gradient;
}
  */

/**
 * Display Spring gradient colors
 * @param label current section label
 * @param opened currently opened section
 * @returns string, tailwind gradient
 
export function displaySpringGradient(label: SectionsType, opened: SectionsType) {
  let gradient = '';
  switch (label) {
    case 'Home':
      gradient = 'bg-gradient-to-b from-amber-100 to-slate-300';
      break;
    case 'About':
      gradient =
        opened === 'Home'
          ? 'bg-gradient-to-b from-amber-100 to-slate-200 '
          : 'bg-gradient-to-b from-slate-200 to-slate-300 ';
      break;
    case 'Projects':
      gradient =
        opened === 'Contact' || opened === 'Testimonials'
          ? 'bg-gradient-to-b from-slate-200 to-slate-300 '
          : opened === 'Home'
            ? 'bg-gradient-to-b from-slate-200 via-slate-200/75 to-slate-300/50 '
            : 'bg-gradient-to-b from-slate-200/50 to-slate-300/50 ';
      break;
    case 'Testimonials':
      gradient =
        opened === 'Contact'
          ? 'bg-gradient-to-b from-slate-200 to-slate-300 '
          : 'bg-gradient-to-b from-slate-200/50 to-slate-300/50 ';
      break;
    case 'Contact':
      gradient =
        'bg-gradient-to-b from-slate-200/50 via-slate-300/50 to-sky-400 ';
      break;
  }
  return gradient;
}
*/
