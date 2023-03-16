import Link from "next/link";
import * as prismicH from "@prismicio/helpers";

export default function Header({ settings }) {
  return (
    <header className="bg-green-700 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-2xl">
              {settings.data.website_name}
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              {/* map through the pages */}
              {settings.data.navigation.map(({ label, page }) => (
                <Link
                  href={prismicH.asLink(page)}
                  key={label}
                  className="text-white hover:text-green-100 font-medium text-lg"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
