import Fancybox from '@/components/Fancybox';

export default function page() {
  return (
    <Fancybox options={{}}>
      <img
        src="https://lipsum.app/id/64/200x150"
        width="200"
        height="150"
        data-fancybox="gallery"
        className="cursor-pointer"
      />
    </Fancybox>
  );
}
