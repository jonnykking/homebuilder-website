"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
  mobile?: boolean;
  onItemClick?: () => void;
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ items, className, mobile = false, onItemClick }, ref) => {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

    const isActive = (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    };

    if (mobile) {
      return (
        <nav ref={ref} className={cn("flex flex-col gap-2", className)}>
          {items.map((item) => (
            <MobileNavItem
              key={item.href}
              item={item}
              isActive={isActive(item.href)}
              onItemClick={onItemClick}
            />
          ))}
        </nav>
      );
    }

    return (
      <nav ref={ref} className={cn("flex items-center gap-1", className)}>
        {items.map((item) => (
          <DesktopNavItem
            key={item.href}
            item={item}
            isActive={isActive(item.href)}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />
        ))}
      </nav>
    );
  }
);

Navigation.displayName = "Navigation";

// Desktop Navigation Item
interface DesktopNavItemProps {
  item: NavItem;
  isActive: boolean;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
}

function DesktopNavItem({
  item,
  isActive,
  openDropdown,
  setOpenDropdown,
}: DesktopNavItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = openDropdown === item.href;

  return (
    <div
      className="relative"
      onMouseEnter={() => hasChildren && setOpenDropdown(item.href)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <Link
        href={item.href}
        className={cn(
          "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          isActive
            ? "text-primary-600"
            : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
        )}
        aria-current={isActive ? "page" : undefined}
        aria-haspopup={hasChildren ? "true" : undefined}
        aria-expanded={hasChildren ? isOpen : undefined}
      >
        {item.label}
        {hasChildren && (
          <svg
            className={cn(
              "ml-1 inline-block w-4 h-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
        {isActive && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
            initial={false}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>

      {hasChildren && isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-50"
        >
          <div className="py-2">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600",
                  "focus:outline-none focus:bg-gray-50"
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Mobile Navigation Item
interface MobileNavItemProps {
  item: NavItem;
  isActive: boolean;
  onItemClick?: () => void;
}

function MobileNavItem({ item, isActive, onItemClick }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onItemClick}
          className={cn(
            "flex-1 py-3 px-4 text-base font-medium rounded-lg transition-colors duration-200",
            isActive
              ? "text-primary-600 bg-primary-50"
              : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
          )}
          aria-current={isActive ? "page" : undefined}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            className="p-3 text-gray-500 hover:text-gray-700"
            aria-expanded={isOpen}
            aria-label={`Toggle ${item.label} submenu`}
          >
            <svg
              className={cn(
                "w-5 h-5 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>
      {hasChildren && isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden pl-4"
        >
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onItemClick}
              className="block py-2 px-4 text-sm text-gray-600 hover:text-primary-600"
            >
              {child.label}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export { Navigation };
