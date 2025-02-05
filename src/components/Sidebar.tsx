import { Home, Map, Calendar, Users, Settings, Menu } from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Home, label: "Tableau de bord", href: "/" },
  { icon: Map, label: "Points de collecte", href: "/points" },
  { icon: Calendar, label: "Tâches", href: "/tasks" },
  { icon: Users, label: "Collecteurs", href: "/collectors" },
  { icon: Settings, label: "Paramètres", href: "/settings" },
];

const Sidebar = () => {
  return (
    <ShadcnSidebar>
      <SidebarContent>
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold">EcoTri</span>
          <SidebarTrigger>
            <Menu className="h-6 w-6" />
          </SidebarTrigger>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;