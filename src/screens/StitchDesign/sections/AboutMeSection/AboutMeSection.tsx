import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../../../../components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const AboutMeSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex items-center justify-between px-10 py-3 border-b border-[#383d60] w-full">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <div className="flex items-start">
          <div className="w-4 h-4 bg-blue-500 rounded-full" />
        </div>
        <h1 className="font-bold text-white text-lg leading-[23px] font-['Inter',Helvetica]">
          Aditya's Portfolio
        </h1>
      </div>

      {/* Navigation and Avatar */}
      <div className="flex items-center justify-end gap-8 flex-1">
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex gap-9">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-medium text-white text-sm leading-[21px] font-['Inter',Helvetica] hover:text-gray-200 transition-colors"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Avatar className="w-10 h-10 rounded-[20px]">
          <AvatarImage src="/api/placeholder/40/40" alt="Profile" />
          <AvatarFallback className="bg-[#0c164c] text-white font-bold">
            AD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};