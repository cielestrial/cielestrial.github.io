import { useContextSelector } from '@fluentui/react-context-selector';
import { useRef, useState } from 'react';

import ProjectCard from './ProjectCard';

import { StateContext } from '~/utils/ContextProvider';
import { trapScroll } from '~/utils/helperFunctions';
import { projects } from '~/utils/projectList';

type propsType = {
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
  withEffect: boolean;
};

const ProjectGrid = (props: propsType) => {
  const touchStartReset = useContextSelector(
    StateContext,
    (state) => state.touchStartReset
  );
  const [effect, setEffect] = useState<'fade-out' | 'none'>('none');
  const [scrollable, setScrollable] = useState(false);
  const cardCount = useRef(0);
  const scrollBoundHit = useRef(false);

  return (
    <div className="h-full w-full flex flex-col py-8 ">
      <p
        className={
          'text-[5.175vmin] sm:text-[3.88vmin] font-semibold mx-auto pt-[4vmin] ' +
          (effect === 'fade-out' ? 'animate-fade-out ' : '')
        }
        onAnimationEnd={() => {
          props.setShowProjectView(true);
          setEffect('none');
        }}
      >
        Click on a project to see more!
      </p>

      <div
        className={
          'px-[4vmin] scroll-smooth flex flex-row overflow-y-auto ' +
          'h-full items-center justify-center pb-[3vh]  ' +
          (scrollable ? 'overflow-x-auto ' : 'overflow-x-hidden ')
        }
        onAnimationEnd={(event) => {
          if (event.animationName === 'fade-in-right') cardCount.current++;
          if (cardCount.current === 4) {
            cardCount.current = 0;
            setScrollable(true);
          }
        }}
        onScroll={touchStartReset}
        onWheel={(event) => trapScroll(event, scrollBoundHit)}
      >
        <div
          className={
            'h-max w-max flex flex-row flex-wrap m-auto pb-8 items-center justify-center ' +
            (effect === 'fade-out' ? 'animate-fade-out ' : '')
          }
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              image={project.image}
              link={project.link}
              status={project.status}
              order={i}
              setGridEffect={setEffect}
              setShowProjectView={props.setShowProjectView}
              setSelectedProject={props.setSelectedProject}
              withEffect={props.withEffect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
