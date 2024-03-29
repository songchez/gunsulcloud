import TableOfContents from "@/components/TableOfContents";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-start gap-10">
      {children}
      <TableOfContents />
    </div>
  );
}
