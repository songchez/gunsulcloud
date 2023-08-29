import { getPost } from "@/components/getMdx/getPost";
import { MdxContent } from "@/components/getMdx/mdx-content";
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
  const postPath: string = `content/${slug}.mdx`;
  const { serialized } = await getPost(postPath);

  return (
    <div>
      <hr />
      <MdxContent source={serialized} />
    </div>
  );
}
