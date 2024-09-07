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
            <Link href="/doctors" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <NavMenuLink
                  href="getting-started/installation"
                  title="Installation"
                  description="Get up and running in minutes."
                />
                <NavMenuLink
                  href="getting-started/usage"
                  title="Usage"
                  description="Learn how to use the library."
                />
                <NavMenuLink
                  href="getting-started/faq"
                  title="FAQ"
                />
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
