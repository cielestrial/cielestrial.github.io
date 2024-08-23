import About from '../components/layout/sections/About';
import Contact from '../components/layout/sections/Contact';
import Home from '../components/layout/sections/Home';
import Projects from '../components/layout/sections/Projects';
import Testimonials from '../components/layout/sections/Testimonials';

import { SectionsType } from '~/utils/dataTypes';

export function getSection(section: SectionsType | null, withEffect: boolean) {
  switch (section) {
    case 'Contact':
      return <Contact />;
    case 'Testimonials':
      return <Testimonials showTemplate={false} />;
    case 'Projects':
      return <Projects withEffect={withEffect} />;
    case 'About':
      return <About withEffect={withEffect} />;
    case 'Home':
    default:
      return <Home withEffect={withEffect} />;
  }
}
