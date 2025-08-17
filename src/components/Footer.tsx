import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold">Brew & Bean</span>
            </div>
            <p className="text-gray-400">
              Crafting exceptional coffee experiences since 2018. 
              Every cup tells a story.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Brew & Bean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}