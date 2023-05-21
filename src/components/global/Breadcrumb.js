import Link from "next/link";

const Breadcrumb = ({ data:product }) => {
  const crumbs = [
    { title: "home", path: "/" },
    { title: product?._category_?.main_category?.name, path: "/category/" + product?._category_?.main_category?.category_id },
    { title: product?.name},
  ]


  return (
    <nav className="flex mb-4 w-full" aria-label="Breadcrumb">
      <ol className="flex  w-full overflow-x-auto no-scroll">
        {crumbs.map(({ title, path }, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <div className="mt-2 mx-2 h-[2px] w-2 bg-gray-400"/>
            )}
            {path ? (
              <Link href={path} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  {title}
              </Link>
            ) : (
              <div className="text-sm font-medium text-gray-500">
                {title}
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;