interface Props {
  text: string;
}

const Button = (props: Props) => {
  return (
    <button className="bg-primary-600 hover:bg-primary-400 text-gray-100 font-semibold py-2 px-4 rounded shadow">
      {props.text}
    </button>
  );
};

export { Button };
