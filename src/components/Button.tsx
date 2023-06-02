interface ButtonProps {
  text: string | number;
  id: string;
  onClick: (parameter: string | number) => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <div
      onClick={() => props.onClick(props.text)}
      id={props.id}
      className={`bg-gray-400 w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 active:bg-slate-200
    `}
    >
      <span className={`text-black text-[22px] font-bold`}>{props.text}</span>
    </div>
  );
};
