import Link from 'next/link';

import Icon from '~components/Icon';
import config from '~site/config';

const page = () => {
  return (
    // TODO: 有时list-disc 不显示
    <div className="mx-2 flex justify-center items-center space-x-2">
      {config.sections.map((section) => (
        <Link
          key={section.link}
          className="space-x-2"
          href={section.link}
          target="_blank"
          rel="noopener noreferrer"
          title={section.name}
        >
          {section.name}
          {/* NOTE: IOS 不显示 */}
          <Icon icon={section.icon} className="h-4 w-4 mx-1" />
        </Link>
      ))}
    </div>
  );
};

export default page;
