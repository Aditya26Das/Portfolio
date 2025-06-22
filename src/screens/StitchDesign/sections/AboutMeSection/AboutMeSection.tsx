import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../../../../components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export const AboutMeSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Profiles", href: "#profiles" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Account for fixed header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 border-b border-[#383d60] w-full relative sticky top-0 bg-[#111421] z-50">
      {/* Logo and Title */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-start">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full" />
        </div>
        <h1 className="font-bold text-white text-sm sm:text-base md:text-lg leading-tight font-['Inter',Helvetica]">
          Aditya's Portfolio
        </h1>
      </div>

      {/* Desktop Navigation and Avatar */}
      <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex gap-4 xl:gap-6">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-medium text-white text-sm leading-[21px] font-['Inter',Helvetica] hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 rounded-[20px]">
          <AvatarImage src="/api/placeholder/40/40" alt="Profile" />
          <AvatarFallback className="bg-[#0c164c] text-white font-bold text-sm">
            AD
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Mobile/Tablet Menu Button and Avatar */}
      <div className="flex lg:hidden items-center gap-3">
        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 rounded-[20px]">
          <AvatarImage src="/api/placeholder/40/40" alt="Profile" />
          <AvatarFallback className="bg-[#0c164c] text-white font-bold text-sm">
            AD
          </AvatarFallback>
        </Avatar>
        
        <button
          onClick={toggleMenu}
          className="text-white p-1 hover:bg-[#1c1e30] rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Mobile/Tablet Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#111421] border-b border-[#383d60] lg:hidden z-50">
          <nav className="flex flex-col py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 sm:px-6 py-3 text-white text-sm font-medium hover:bg-[#1c1e30] hover:text-blue-400 transition-colors font-['Inter',Helvetica]"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};