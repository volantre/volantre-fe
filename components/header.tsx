"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Bell, User, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { LeagueMegaMenu } from "@/components/league-mega-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const serviceButtons = [
  { name: "뉴스", href: "/news" },
  { name: "클럽", href: "/boards" },
  { name: "데이터", href: "/data" },
  { name: "채팅", href: "/chat" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header className="relative z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Main Header */}
      <div className="container mx-auto px-4 pt-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col gap-4 mx-6 py-4">
                  <SheetHeader className="p-2">
                    <SheetTitle>
                      <Link
                        href="/"
                        className="text-2xl font-bold text-primary"
                      >
                        Volantre
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="flex flex-col gap-2">
                    {serviceButtons.map((button) => (
                      <Link
                        key={button.name}
                        href={button.href}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {button.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Volantre</span>
            </Link>
          </div>

          {/* Center: Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="구단, 선수, 뉴스 검색..."
                className="pl-10 pr-4 h-10 rounded-2xl border-2 focus:border-primary"
              />
            </div>
          </div>

          {/* Right: User Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                3
              </Badge>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>로그인</DropdownMenuItem>
                <DropdownMenuItem>회원가입</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Service Button Bar (Desktop) */}
        <div className="hidden md:block">
          <Collapsible open={isMegaMenuOpen} onOpenChange={setIsMegaMenuOpen}>
            <div className="flex items-center justify-center py-2 gap-1">
              <nav className="flex items-center gap-1">
                {serviceButtons.map((button) => (
                  <Link key={button.name} href={button.href}>
                    <Button
                      variant="ghost"
                      className="rounded-2xl px-4 py-2 text-sm font-medium"
                    >
                      {button.name}
                    </Button>
                  </Link>
                ))}
              </nav>

              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="rounded-2xl px-4 py-2 text-sm font-medium data-[state=open]:bg-accent/50"
                >
                  더보기
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isMegaMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="absolute left-0 right-0 top-full z-50 bg-popover/100 backdrop-blur shadow-xl">
              <div className="container mx-auto px-4 pb-3">
                <LeagueMegaMenu />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="구단, 선수, 뉴스 검색..."
              className="pl-10 pr-4 h-10 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
