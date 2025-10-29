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

export function AppSidebar() {
  const items = [
    {
      title: "Dashboard",
      url: "#",
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
        <SidebarGroup />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
