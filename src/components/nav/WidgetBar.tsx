import Score from './Score';
import GameButton from '../background/GameButton';
import MySwitch from '../background/MySwitch';

export default function WidgetBar() {
  return (
    <div
      className={
        'flex flex-row view-width gap-[0.7em] px-[4vmin] ' +
        'items-center justify-between '
      }
    >
      <Score />
      <div className="flex flex-row gap-[0.7em] items-center ">
        <GameButton />
        <MySwitch hide />
      </div>
    </div>
  );
}
