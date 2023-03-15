export default function Header() {
  return (
    <header className="bg-green-500 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-2xl">
              GreenGenie
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-white hover:text-green-100 font-medium text-lg"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-green-100 font-medium text-lg"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-green-100 font-medium text-lg"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white hover:text-green-100 font-medium text-lg"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
