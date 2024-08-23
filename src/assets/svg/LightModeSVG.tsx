import SpringRainSvg from './SpringRainSvg';
import WinterWonderSvg from './WinterWonderSvg';

import { season } from '~/utils/dataConstants';

export default function LightModeSvg() {
  switch (season) {
    case 'Winter':
      return <WinterWonderSvg />;
    case 'Spring':
      return <SpringRainSvg />;
    default:
      console.error('Invalid season');
      return null;
  }
}
