import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-800">Brew & Bean</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-800 transition-colors">
              Home
            </a>
            <a href="#menu" className="text-gray-700 hover:text-amber-800 transition-colors">
              Menu
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-800 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-800 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-amber-800 hover:bg-amber-900">
            Order Online
          </Button>
        </div>
      </div>
    </header>
  );
}