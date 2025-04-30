import { useState } from 'react';

import ProjectView, { ProjectType } from './ProjectView';

import { clickEvent, touchDevice } from '~/utils/dataConstants';
import { transitionClass } from '~/utils/gradientSelector';

type StatusType = 'Release' | 'Prerelease' | 'Development' | 'Hiatus';

export type CardType = ProjectType & {
  image: string;
  status: StatusType;
  order: number;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
  setGridEffect: React.Dispatch<React.SetStateAction<'fade-out' | 'none'>>;
  withEffect: boolean;
};

export default function ProjectCard({
  order,
  setGridEffect,
  setSelectedProject,
  withEffect,
  setShowProjectView,
  ...project
}: CardType) {
  const [effect, setEffect] = useState<'slide-in' | 'none'>(
    withEffect ? 'slide-in' : 'none'
  );
  const label =
    'text-center font-semibold bg-slate-200 border-[0.625vmin] border-solid border-black ' +
    'whitespace-nowrap ';

  return (
    <div
      id={'projectCard' + order}
      tabIndex={0}
      onKeyUp={(event) => {
        if (event.key === 'Enter' || event.key === ' ')
          event.currentTarget.dispatchEvent(clickEvent);
      }}
      onClick={(event) => {
        event.currentTarget.blur();
        setGridEffect('fade-out');
        setSelectedProject(
          <ProjectView
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
            setShowProjectView={setShowProjectView}
          />
        );
      }}
      className={
        'flex flex-col flex-nowrap w-[35.56vmin] sm:w-[28.45vmin] shadow-md m-[5vmin] ' +
        'saturate-[.75] active:scale-95 outline-none outline-[0.4vmin] ' +
        'focus-visible:saturate-150 focus-visible:outline-amber-500 ' +
        transitionClass +
        (!touchDevice ? 'hover:saturate-150 hover:outline-amber-500 ' : '') +
        'cursor-pointer ' +
        (effect === 'slide-in'
          ? order === 0
            ? 'animate-[fade-in-right_0.7s_cubic-bezier(.38,0,.64,1)_both] '
            : order === 1
              ? 'animate-[fade-in-right_0.7s_.35s_cubic-bezier(.38,0,.64,1)_both] '
              : order === 2
                ? 'animate-[fade-in-right_0.7s_.7s_cubic-bezier(.38,0,.64,1)_both] '
                : order === 3
                  ? 'animate-[fade-in-right_0.7s_1.05s_cubic-bezier(.38,0,.64,1)_both] '
                  : 'animate-[fade-in-right_0.7s_1.4s_cubic-bezier(.38,0,.64,1)_both] '
          : '')
      }
      onAnimationEnd={() => {
        setEffect('none');
      }}
    >
      <p aria-label={project.title + '.'} className={label}>
        {project.title}
      </p>
      <img
        id={project.title}
        aria-label="preview image."
        src={project.image}
        loading="eager"
        alt={project.title + ' preview image'}
        className="origin-top aspect-video border-x-[0.625vmin] border-solid border-black "
        draggable="false"
      />
      <p aria-label={project.status + '.'} className={label}>
        {project.status}
      </p>
    </div>
  );
}
