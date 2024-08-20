import { useContextSelector } from '@fluentui/react-context-selector';

import { StateContext } from '~/utils/ContextProvider';

export default function Score() {
  const hideContent = useContextSelector(
    StateContext,
    (state) => state.hideContent
  );
  const score = useContextSelector(StateContext, (state) => state.score);
  const highScore = useContextSelector(
    StateContext,
    (state) => state.highScore
  );

  return (
    <div
      className={
        'whitespace-nowrap title font-semibold py-[0.6em] ' +
        'text-[3.5vmin] sm:text-[2.625vmin] ' +
        (!hideContent ? 'invisible ' : 'visible ')
      }
    >
      <p className="inline text-slate-600 ">Hi-Score:&#32;</p>
      <p className="inline text-yellow-600 ">{highScore}</p>
      <br />
      <p className="inline text-slate-600 ">Score:&#32;</p>
      <p className="inline text-sky-500 ">{score}</p>
    </div>
  );
}
