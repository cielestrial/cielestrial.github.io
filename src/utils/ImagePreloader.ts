// About Section
import myPic from "~/assets/general/profile1.jpg";
import myLogo from "/assets/logo-coloured/android-chrome-512x512.png";
// Projects section
import junkyard_light from "~/assets/junkyard-of-shangri-la/junkyard-of-shangri-la_light_mode.jpg";
import rightdrive_page_1 from "~/assets/rightdrive-dev-test/rightdrive-dev-test_page1.jpg";
import yspm_light_1 from "~/assets/yspm/yspm_landing_page_light_mode.jpg";
import dashboard_tab_1 from "~/assets/ev-dashboard/ev-dashboard_tab1.jpg";
import wbtracker_1 from "~/assets/wbtracker/wbtracker_home.png";

export function preloadImages() {
  const images = [
    myPic,
    myLogo,
    junkyard_light,
    rightdrive_page_1,
    yspm_light_1,
    dashboard_tab_1,
    wbtracker_1,
  ] as const;
  const dummyImg = new Image();
  for (let i = 0, len = images.length; i < len; i++) {
    dummyImg.src = images[i];
  }
  dummyImg.remove();
}
