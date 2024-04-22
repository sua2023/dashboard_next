import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 px-2 md:px-0 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-base font-semibold text-black dark:text-white capitalize">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li className="font-base">
            <Link className="font-base" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-base text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
