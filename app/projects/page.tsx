import Image from "next/image";
export default function Project() {
	return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
		<div>
			<Image src="https://cdn.jsdelivr.net/gh/oeyoews/nvim@main/snapshot.png" alt="nvim" width={1980} height={1980} data-fancybox="gallary" />
		</div>

		<div>
			<Image src="https://cdn.jsdelivr.net/gh/oeyoews/neotw@main/img/snapshot.png" alt="neotw" width={1980} height={1980} data-fancybox="gallary" />
		</div>

		<div className="border-2 border-gray-200 rounded-lg">
			<Image src="https://cdn.jsdelivr.net/gh/oeyoews/nextjs-mdx-blog@main/public/next-mdx.png" alt="nextjs-mdx" width={1980} height={1980} data-fancybox="gallary" />
		</div>
	</div>;
}