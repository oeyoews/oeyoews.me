import { Suspense } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import { getArticleBySlug } from '@/utils/getArticles';

import ArticleInfo from '@/components/ArticleInfo';
import Fancybox from '@/components/Fancybox';
import { Button } from '@/components/ui/button';

import usePasswordStore from '@/lib/PasswordStore';
import getBase64 from '@/lib/getLocalBase64';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slug = headers().get('x-next-article-slug') as string;
  const article = await getArticleBySlug(slug);
  const { metadata } = article;
  const image = metadata?.image;

  const imageType = image?.toString().startsWith('http') ? 'online' : 'static';
  const blurData = imageType === 'static' ? '' : await getBase64(image || '');

  const passwordStore = usePasswordStore();
  const handlePasswordSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredPassword = event.target[0].value; // 假设密码输入框在第一个位置
    const savedPassword = passwordStore.getPasswordFromLocalStorage();
    if (enteredPassword === savedPassword) {
      passwordStore.setPasswordValidation(true);
    }
  };

  return (
    <article className="lg:prose-md prose mx-auto p-4 dark:prose-invert prose-img:rounded-md">
      {
        <div className="flex justify-center">
          <Fancybox>
            <Image
              data-fancybox="gallery"
              data-caption={`${metadata?.title} | oeyoews`}
              className="rounded-md aspect-video cursor-pointer"
              src={image || '/image.png'}
              width={1080}
              height={960}
              placeholder={imageType === 'online' ? 'blur' : 'empty'}
              blurDataURL={blurData}
              // placeholder={placeholder}
              alt={String(metadata?.title)}
              priority
              quality={100}
            />
          </Fancybox>
        </div>
      }
      <h1>{String(metadata?.title)}</h1>
      <ArticleInfo article={article} className="inline px-1 text-sm" />
      <Suspense
        fallback={<div className="flex justify-center my-2">Loading...</div>}
      >
        {metadata?.password ? (
          <div>
            <form onSubmit={handlePasswordSubmit}>
              <input type="password" placeholder="Enter password" />
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          children
        )}
        {/* <BackToTop /> */}
      </Suspense>
      <div className="flex justify-end print:hidden">
        <Button variant="ghost" asChild>
          <Link href="/">
            <FiArrowLeft className="inline" /> Back Home
          </Link>
        </Button>
      </div>
    </article>
  );
}
