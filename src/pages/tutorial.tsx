import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import { getPostsData } from '../lib/post';
import Link from 'next/link';

type PostData = {
  slug: string;
  description: string;
  date: string;
  title: string;
  author: string;
  category: string;
  tags: string[];
};

type Props = {
  allPostsData: PostData[];
};

// SSGのの場合は、getStaticPropsを使用する
export const getStaticProps = async () => {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData: allPostsData,
    },
  };
};

const TutorialPage: NextPageWithLayout<Props> = ({ allPostsData }) => {
  console.log(allPostsData);
  return (
    <>
      <NextSeo title="Tutorial" description="Tutorial - AutoHotKey" />
      {allPostsData.map(
        ({ slug, description, date, title, author, category, tags }) => (
          <div key={slug}>
            <Link href={`/posts/${slug}`} className="text-red-500">
              {slug}
            </Link>
            <div>{description}</div>
            <div>{date}</div>
            <div>{title}</div>
            <div>{author}</div>
            <div>{category}</div>
            <div>{tags}</div>
            <br />
          </div>
        )
      )}
    </>
  );
};

TutorialPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default TutorialPage;
