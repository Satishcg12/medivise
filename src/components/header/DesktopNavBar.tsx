import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { features } from "@/app/(normal)/landing/Features";

// Define types for NavMenuLink props
interface NavMenuLinkProps {
  href: string;
  title: string;
  description?: string; // Optional description
}

export function DesktopNavBar() {
  return (
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-4  w-[36rem] grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <NavMenuLink
                  href={feature.href}
                  title={feature.title}
                  description={feature.description}
                />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  );
}

const NavMenuLink = ({ href, title, description }: NavMenuLinkProps) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className="block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-lg font-medium">{title}</div>
          {description && (
            <p className="text-sm leading-tight text-muted-foreground">
              {description}
            </p>
          )}
        </NavigationMenuLink>
      </Link>
    </li>
  );
};
