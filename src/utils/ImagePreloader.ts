// About Section
import myLogo from '~/assets/general/my-logo.png';
import myPic from '~/assets/general/selfie.png';
// Projects section
import junkyard from '~/assets/junkyard-of-shangri-la/junkyard-of-shangri-la_light_mode.jpg';
import rightdrive from '~/assets/rightdrive-dev-test/rightdrive-dev-test_page1.jpg';
import wbtracker from '~/assets/wbtracker/wbtracker_home.png';
import yspm from '~/assets/yspm/yspm_landing_page_light_mode.png';

const images = [myPic, myLogo, junkyard, rightdrive, yspm, wbtracker];

export function preloadImages() {
  for (let i = 0, len = images.length; i < len; i++) {
    const dummyImg = new Image();
    dummyImg.src = images[i];
  }
}
