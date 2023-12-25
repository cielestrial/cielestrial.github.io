// About Section
import myLogo from "~/assets/general/my-logo.png";
import myPic from "~/assets/general/profile1.jpg";
// Projects section
import ev_dashboard from "~/assets/ev-dashboard/ev-dashboard_tab1.jpg";
import junkyard from "~/assets/junkyard-of-shangri-la/junkyard-of-shangri-la_light_mode.jpg";
import rightdrive from "~/assets/rightdrive-dev-test/rightdrive-dev-test_page1.jpg";
import wbtracker from "~/assets/wbtracker/wbtracker_home.png";
import yspm from "~/assets/yspm/yspm_landing_page_light_mode.jpg";

export function preloadImages() {
  const images = [
    myPic,
    myLogo,
    junkyard,
    rightdrive,
    yspm,
    ev_dashboard,
    wbtracker,
  ];

  for (let i = 0, len = images.length; i < len; i++) {
    const dummyImg = new Image();
    dummyImg.src = images[i];
  }
}
