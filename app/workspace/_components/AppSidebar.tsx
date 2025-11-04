"use client"
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Book,
  Compass,
  LayoutDashboard,
  PencilRulerIcon,
  UserCircle,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AddNewCourse } from "./AddNewCourse";


export function AppSidebar() {
  const path = usePathname()

  const items = [
    {
      title: "Dashboard",
      url: "/workspace",
      icon: LayoutDashboard,
    },
    {
      title: "My Learning",
      url: "#",
      icon: Book,
    },
    {
      title: "Exloar Course",
      url: "#",
      icon: Compass,
    },
    {
      title: "Ai Tools",
      url: "#",
      icon: PencilRulerIcon,
    },
    {
      title: "Billing",
      url: "#",
      icon: Wallet,
    },
    {
      title: "Profile",
      url: "#",
      icon: UserCircle,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <Image alt="logo" src={"/logo.svg"} width={150} height={120}></Image>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <AddNewCourse>
            <Button>Create New Course</Button>
          </AddNewCourse>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={` ${path.includes(item.url) && "text-primary bg-gray-200"}`}>
                      <item.icon className="h-7 w-7" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
