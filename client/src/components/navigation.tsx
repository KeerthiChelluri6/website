import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-primary">Sai Kusuma Keerthi Chelluri</div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors duration-200">About</a>
            <a href="#experience" className="text-gray-600 hover:text-primary transition-colors duration-200">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-primary transition-colors duration-200">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-primary transition-colors duration-200">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-200">Contact</a>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-gray-600"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors duration-200 py-2">About</a>
              <a href="#experience" className="text-gray-600 hover:text-primary transition-colors duration-200 py-2">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-primary transition-colors duration-200 py-2">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-primary transition-colors duration-200 py-2">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-200 py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
