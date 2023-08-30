import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { promises as fs } from "fs";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

type Frontmatter = {
  title: string;
  date: string;
};

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  // Read the file from the filesystem
  const raw = await fs.readFile(filepath, "utf-8");

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkToc, remarkBreaks, remarkGfm],
      rehypePlugins: [
        [
          rehypeSlug,
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
  });
  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter as Frontmatter;

  // Return the serialized content and frontmatter
  return {
    frontmatter,
    serialized,
  };
}
