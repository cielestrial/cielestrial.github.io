import { sections } from "../pages/Portfolio";
import { stateContextType } from "./ContextProvider";

export function focusTrap(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>
) {
  if (event.shiftKey && event.key === "Tab") {
    if (openedRef.current !== "Home") {
      if (
        document.getElementById("Home Section Label") === document.activeElement
      ) {
        event.preventDefault();
        if (openedRef.current === "Contact")
          document.getElementById("Form Submit Button")?.focus();
        else document.getElementById("Contact Section Label")?.focus();
      }
    } else {
      if (
        document.getElementById("Grace Hopper Quote") === document.activeElement
      ) {
        event.preventDefault();
        document.getElementById("Contact Section Label")?.focus();
      }
    }
  } else if (event.key === "Tab") {
    if (openedRef.current !== "Contact") {
      if (
        document.getElementById("Contact Section Label") ===
        document.activeElement
      ) {
        event.preventDefault();
        if (openedRef.current === "Home")
          document.getElementById("Grace Hopper Quote")?.focus();
        else document.getElementById("Home Section Label")?.focus();
      }
    } else {
      if (
        document.getElementById("Form Submit Button") === document.activeElement
      ) {
        event.preventDefault();
        document.getElementById("Home Section Label")?.focus();
      }
    }
  }
}

export function sectionNavigation(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>,
  setOpened: (section: sections) => void
) {
  switch (openedRef.current) {
    case "Home":
      if (event.key === "ArrowDown") {
        setOpened("About");
      }
      break;

    case "About":
      if (event.key === "ArrowUp") {
        setOpened("Home");
      } else if (event.key === "ArrowDown") {
        setOpened("Projects");
      }
      break;

    case "Projects":
      if (event.key === "ArrowUp") {
        setOpened("About");
      } else if (event.key === "ArrowDown") {
        setOpened("Testimonials");
      }
      break;

    case "Testimonials":
      if (event.key === "ArrowUp") {
        setOpened("Projects");
      } else if (event.key === "ArrowDown") {
        setOpened("Contact");
      }
      break;

    case "Contact":
      if (event.key === "ArrowUp") {
        setOpened("Testimonials");
      }
      break;
  }
}

export function aboutSectionNavigation(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>,
  context: stateContextType
) {
  if (openedRef.current === "About") {
    switch (context.aboutOpenedRef.current) {
      case "Profile":
        if (event.key === "ArrowLeft") {
          document
            .getElementById("Philosophy Button")
            ?.dispatchEvent(context.clickEvent);
        } else if (event.key === "ArrowRight") {
          document
            .getElementById("Bio Button")
            ?.dispatchEvent(context.clickEvent);
        }
        break;

      case "Bio":
        if (event.key === "ArrowLeft") {
          document
            .getElementById("Profile Button")
            ?.dispatchEvent(context.clickEvent);
        } else if (event.key === "ArrowRight") {
          document
            .getElementById("Philosophy Button")
            ?.dispatchEvent(context.clickEvent);
        }
        break;

      case "Philosophy":
        if (event.key === "ArrowLeft") {
          document
            .getElementById("Bio Button")
            ?.dispatchEvent(context.clickEvent);
        } else if (event.key === "ArrowRight") {
          document
            .getElementById("Profile Button")
            ?.dispatchEvent(context.clickEvent);
        }
        break;
    }
  }
}
/*
export function ProjectViewNavigation(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>,
  context: stateContextType
) {
  if (openedRef.current === "Projects") {
    if (event.key === "ArrowLeft" && !context.hideLeftArrowRef.current) {
      document.getElementById("Left Arrow")?.dispatchEvent(context.clickEvent);
    } else if (
      event.key === "ArrowRight" &&
      !context.hideRightArrowRef.current
    ) {
      document.getElementById("Right Arrow")?.dispatchEvent(context.clickEvent);
    } else if (event.key === "Escape") {
      document
        .getElementById("Close Button")
        ?.dispatchEvent(context.clickEvent);
    }
  }
}
*/
