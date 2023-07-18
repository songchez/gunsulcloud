interface Props {
  text: string;
  onClick?(): void;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-primary hover:bg-primary-focus text-primary-content font-semibold py-2 px-4 rounded-lg md:text-lg"
    >
      {props.text}
    </button>
  );
};

export { Button };
