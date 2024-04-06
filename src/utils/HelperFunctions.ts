import { sections } from "../pages/Portfolio";
import { stateContextType } from "./ContextProvider";

/**
 * Adds keyboard interaction for project view.
 * @param event Keyboard event.
 * @param openedRef Which accordion section is opened.
 * @param context Global context object.
 */
export function exitProjectView(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>,
  context: stateContextType,
) {
  if (event.key === "Escape") {
    event.stopPropagation(); // Prevents modal not found error.
    if (openedRef.current === "Projects") {
      document.getElementById("closeButton")?.dispatchEvent(context.clickEvent);
    }
  }
}

/**
 * Keeps focus within the portfolio when utilizing tab navigation.
 * @param event Keyboard event.
 * @param openedRef Which accordion section is opened.
 */
export function trapFocus(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>,
) {
  if (event.shiftKey && event.key === "Tab") {
    if (openedRef.current !== "Home") {
      if (document.getElementById("Home") === document.activeElement) {
        event.preventDefault();
        if (openedRef.current === "Contact")
          document.getElementById("finalTab")?.focus();
        else document.getElementById("Contact")?.focus();
      }
    } else {
      if (
        document.getElementById("GraceHopperQuote") === document.activeElement
      ) {
        event.preventDefault();
        document.getElementById("Contact")?.focus();
      }
    }
  } else if (event.key === "Tab") {
    if (openedRef.current !== "Contact") {
      if (document.getElementById("Contact") === document.activeElement) {
        event.preventDefault();
        if (openedRef.current === "Home")
          document.getElementById("GraceHopperQuote")?.focus();
        else document.getElementById("Home")?.focus();
      }
    } else {
      if (document.getElementById("finalTab") === document.activeElement) {
        event.preventDefault();
        document.getElementById("Home")?.focus();
      }
    }
  }
}

/*
 * Blocks wheel event from triggering navigation when inside scrollable area.
 * Navigation still triggers when an additional wheel event is detected at
 *   the very top or bottom of the scroll area.
 */
export function trapScroll(
  event: React.WheelEvent<HTMLElement>,
  scrollBoundHit: React.MutableRefObject<boolean>,
) {
  if (
    !(
      (Math.round(event.currentTarget.scrollTop) === 0 && event.deltaY < 0) ||
      (Math.round(event.currentTarget.scrollTop + 1) +
        event.currentTarget.offsetHeight >=
        event.currentTarget.scrollHeight &&
        event.deltaY > 0)
    )
  ) {
    scrollBoundHit.current = false;
    event.stopPropagation();
  } else if (!scrollBoundHit.current) {
    scrollBoundHit.current = true;
    event.stopPropagation();
  } else scrollBoundHit.current = false;
}

/**
 * Navigates the accordion in response to keyboard events.
 * @param event Keyboard event.
 * @param openedRef Which accordion section is opened.
 * @param setOpened A function that sets which accordion section is opened.
 */
export function navigateSections(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>,
  setOpened: (section: sections) => void,
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

/**
 * Navigates the about section tabs in response to keyboard events.
 * @param event Keyboard event.
 * @param openedRef Which accordion section is opened.
 * @param context Global context object.
 */
export function navigateAboutTabs(
  event: KeyboardEvent,
  openedRef: React.MutableRefObject<sections>,
  context: stateContextType,
) {
  if (openedRef.current === "About") {
    switch (context.aboutOpenedRef.current) {
      case "Profile":
        if (event.key === "ArrowLeft") {
          document
            .getElementById("philosophyButton")
            ?.dispatchEvent(context.clickEvent);
        } else if (event.key === "ArrowRight") {
          document
            .getElementById("bioButton")
            ?.dispatchEvent(context.clickEvent);
        }
        break;

      case "Bio":
        if (event.key === "ArrowLeft") {
          document
            .getElementById("profileButton")
            ?.dispatchEvent(context.clickEvent);
        } else if (event.key === "ArrowRight") {
          document
            .getElementById("philosophyButton")
            ?.dispatchEvent(context.clickEvent);
        }
        break;

      case "Philosophy":
        if (event.key === "ArrowLeft") {
          document
            .getElementById("bioButton")
            ?.dispatchEvent(context.clickEvent);
        } else if (event.key === "ArrowRight") {
          document
            .getElementById("profileButton")
            ?.dispatchEvent(context.clickEvent);
        }
        break;
    }
  }
}
