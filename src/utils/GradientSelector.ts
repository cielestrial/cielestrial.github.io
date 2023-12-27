import { sections } from "~/pages/Portfolio";

export const transitionClass = "transition duration-75 custom-ease-out ";

/**
 * Display Winter gradient colors
 * @param label current section label
 * @param opened currently opened section
 * @returns string, tailwind gradient
 */
export function displayWinterGradient(label: sections, opened: sections) {
  let gradient = "";
  switch (label) {
    case "Home":
      gradient = "bg-gradient-to-b from-[#F0FBFF] to-[#E1F5FF]/95 ";
      break;
    case "About":
      opened === "Home"
        ? (gradient = "bg-gradient-to-b from-[#F0FBFF]/90 to-[#E1F5FF]/90 ")
        : (gradient = "bg-gradient-to-b from-[#E1F5FF]/90 to-[#D2E9FF]/90 ");
      break;
    case "Projects":
      opened === "Home" || opened === "About"
        ? (gradient = "bg-gradient-to-b from-[#E1F5FF]/90 to-[#D2E9FF]/90 ")
        : (gradient = "bg-gradient-to-b from-[#D2E9FF]/90 to-[#C3E6FF]/90 ");
      break;
    case "Testimonials":
      opened === "Contact"
        ? (gradient = "bg-gradient-to-b from-[#C3E6FF]/90 to-[#B4E3FF]/90 ")
        : (gradient = "bg-gradient-to-b from-[#D2E9FF]/90 to-[#C3E6FF]/95 ");

      break;
    case "Contact":
      gradient = "bg-gradient-to-b from-[#C3E6FF]/95 to-[#B4E3FF] ";
      break;
  }
  return gradient;
}

/**
 * Display Spring gradient colors
 * @param label current section label
 * @param opened currently opened section
 * @returns string, tailwind gradient
 */
export function displaySpringGradient(label: sections, opened: sections) {
  let gradient = "";
  switch (label) {
    case "Home":
      gradient = "bg-gradient-to-b from-amber-100 to-slate-300";
      break;
    case "About":
      opened === "Home"
        ? (gradient = "bg-gradient-to-b from-amber-100 to-slate-200 ")
        : (gradient = "bg-gradient-to-b from-slate-200 to-slate-300 ");
      break;
    case "Projects":
      opened === "Contact" || opened === "Testimonials"
        ? (gradient = " bg-gradient-to-b from-slate-200 to-slate-300 ")
        : opened === "Home"
        ? (gradient =
            "bg-gradient-to-b from-slate-200 via-slate-200/75 to-slate-300/50 ")
        : (gradient = "bg-gradient-to-b from-slate-200/50 to-slate-300/50 ");
      break;
    case "Testimonials":
      opened === "Contact"
        ? (gradient = "bg-gradient-to-b from-slate-200 to-slate-300 ")
        : (gradient = "bg-gradient-to-b from-slate-200/50 to-slate-300/50 ");
      break;
    case "Contact":
      gradient =
        "bg-gradient-to-b from-slate-200/50 via-slate-300/50 to-sky-400 ";
      break;
  }
  return gradient;
}
