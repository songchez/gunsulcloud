import { getPost } from "@/service/getMdx/getPost";
import { MdxContent } from "@/service/getMdx/mdx-content";
import { getPageMetadata } from "@/service/getPageProps";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const meta = await getPageMetadata(slug);

  return {
    title: meta[0].title,
    description: meta[0].description,
  };
}

export default async function Slug({ params: { slug } }: Props) {
  const postPath: string = `content/${slug}/main.mdx`;
  const { serialized } = await getPost(postPath);

  return (
    <div className="prose dark:prose-dark m-10">
      <div className="js-toc-content">
        <MdxContent source={serialized} />
      </div>
    </div>
  );
}
