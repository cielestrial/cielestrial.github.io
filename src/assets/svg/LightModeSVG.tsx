import SpringRainSVG from './SpringRainSVG';
import WinterWonderSVG from './WinterWonderSVG';

import { season } from '~/utils/constants';

const LightModeSVG = () => {
  switch (season) {
    case 'Winter':
      return <WinterWonderSVG />;
    case 'Spring':
      return <SpringRainSVG />;
    default:
      console.error('Invalid season');
      return null;
  }
};

export default LightModeSVG;
