import Image from "next/image";

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse: string;
};

export default function VerticalFeatureRow(props: IVerticalFeatureRowProps) {
  return (
    <div className={`mt-20 flex flex-wrap items-center ${props.reverse}`}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-800 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <Image
          src={`${props.image}`}
          alt={props.imageAlt}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
