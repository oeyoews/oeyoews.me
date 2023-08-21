import Icon from '@/components/Icon';

function About() {
  return (
    <div className="prose">
      <h4 className="text-xs my-2">
        <span className="bg-black text-white font-semibold px-1 rounded-sm py-1">
          About
        </span>
      </h4>

      <p className="indent-4 my-2">
        Coming
        <Icon icon="svg-spinners:3-dots-bounce" className="mx-2 text-black" />
      </p>

      <h4 className="text-xs my-2">
        <span className="bg-black text-white font-semibold px-1 rounded-sm py-1">
          Skills
        </span>
      </h4>
      <div className="flex space-x-1 my-4 justify-center">
        <Icon icon="skill-icons:nextjs-dark" />
        <Icon icon="skill-icons:react-dark" />
        <Icon icon="skill-icons:tailwindcss-dark" />
      </div>
    </div>
  );
}

export default About;