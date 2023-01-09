import { sections } from "../pages/Portfolio";

type propsType = {
  label: sections;
  opened: sections;
  setOpened: React.Dispatch<React.SetStateAction<sections>>;
  content: React.ReactNode;
};

const Accordian = (props: propsType) => {
  function displayLabel() {
    if (props.label === props.opened) return null;
    return (
      <div
        className="w-screen font-bold text-center py-3.5 cursor-pointer "
        onClick={() => props.setOpened(props.label)}
      >
        {props.label}
      </div>
    );
  }

  function displayContent() {
    if (props.opened === props.label)
      return (
        <div className="flex grow flex-col flex-nowrap cursor-default ">
          {props.content}
        </div>
      );
    return null;
  }

  return (
    <>
      {displayLabel()}
      {displayContent()}
    </>
  );
};

export default Accordian;
