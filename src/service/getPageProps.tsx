type pageData = {
  url: string;
  title: string;
  desription: string;
};

export async function getPageMetadata(url: string) {
  const pageData = await require("content/metadata.json");
  const meta = pageData.filter((data: pageData) => data["url"] === url);
  return meta;
}
