import { useContextSelector } from '@fluentui/react-context-selector';
import { BsPlayFill, BsStopFill } from 'react-icons/bs';

import { StateContext } from '~/utils/ContextProvider';
import { transitionClass } from '~/utils/gradientSelector';

export default function GameButton() {
  const hideContent = useContextSelector(
    StateContext,
    (state) => state.hideContent
  );
  const switchToBackground = useContextSelector(
    StateContext,
    (state) => state.switchToBackground
  );
  const switchToForeground = useContextSelector(
    StateContext,
    (state) => state.switchToForeground
  );

  return (
    <button
      type="button"
      aria-label={!hideContent ? 'Play' : 'Stop'}
      className={'text-[2.25em] active:scale-95 ' + transitionClass}
      onClick={(event) => {
        event.currentTarget.blur();
        if (!hideContent) switchToBackground();
        else switchToForeground();
      }}
    >
      {!hideContent ? (
        <BsPlayFill
          aria-hidden="true"
          className={'text-green-800 hover:text-green-600 ' + transitionClass}
        />
      ) : (
        <BsStopFill
          aria-hidden="true"
          className={
            'text-red-800 hover:text-red-600 cursor-none ' + transitionClass
          }
        />
      )}
    </button>
  );
}
