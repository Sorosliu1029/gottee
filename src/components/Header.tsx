export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-800">Gottee</h1>
          <nav className="hidden md:flex space-x-8 pr-48">
            <a
              href="#home"
              className="text-gray-700 hover:text-amber-800 transition-colors"
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-gray-700 hover:text-amber-800 transition-colors"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-amber-800 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-800 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
