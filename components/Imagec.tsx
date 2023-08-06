import Image, { ImageProps } from 'next/image';

function Imagec({ ...props }: ImageProps) {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Image
          src={props.src}
          className="rounded bg-neutral-100 shadow-lg p-4"
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
        <figcaption className="mt-2 text-center uppercase">
          {props.alt}
        </figcaption>
      </div>
    </div>
  );
}

export default Imagec;
