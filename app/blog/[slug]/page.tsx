import { Suspense } from 'react';

import { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

import MDX from '~app/blog/Mdx';
import { getBlogPosts } from '~app/blog/db/blog';
import PasswordProtectedContent from '~ui/PasswordPost';
import Spinner from '~ui/Spinner';

// export default function Page({ params }: { params: Params }) {
//   const { slug } = params;
//   const post = getBlogPosts().find((post) => post.slug === slug);
//   if (!post) {
//     notFound();
//   }
//   return (
//     <div className="prose">
//       <Suspense fallback={<Spinner center={true} size={88} />}>
//         <h2>{post?.metadata.title}</h2>
//         <article>
//           <MDX source={post?.content} />
//         </article>
//       </Suspense>
//     </div>
//   );
// }

function getPostFromParams(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: { params: Params }) {
  const post = await getPostFromParams(params.slug);
  return {
    title: post?.slug,
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  // @ts-ignore
  return posts.map((posts) => ({ slug: posts.metadata.slug }));
}

export default async function PostPage({ params }: { params: Params }) {
  const post = getPostFromParams(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose max-w-none prose-img:rounded-md">
      {/* @ts-ignore */}
      <h1 className="mb-2 text-3xl">{post.slug}</h1>
      <hr className="my-4 border-2 border-gray-100 rounded-full" />
      <PasswordProtectedContent post={post}>
        <Suspense fallback={<Spinner center={true} size={88} />}>
          <article>
            {/* @ts-ignore */}
            <MDX source={post?.content} />
          </article>
        </Suspense>
      </PasswordProtectedContent>
    </article>
  );
}
