import { useState } from "react";
import { ChevronDown, ChevronRight, Shield, Eye, ExternalLink, Cog, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarSection {
  id: string;
  title: string;
  icon: React.ElementType;
  items: string[];
}

const sidebarSections: SidebarSection[] = [
  {
    id: "admin",
    title: "Admin Panel",
    icon: Shield,
    items: ["Dashboard Overview", "System Status", "Admin Settings", "Security Logs"]
  },
  {
    id: "perspective",
    title: "Perspective Demo",
    icon: Eye,
    items: ["Demo Configuration", "Preview Settings", "Test Data", "Performance Metrics"]
  },
  {
    id: "external",
    title: "External Services",
    icon: ExternalLink,
    items: ["Get Account", "Update Account", "Service Status", "API Configuration"]
  },
  {
    id: "integration",
    title: "Integration Actions",
    icon: Cog,
    items: ["Create Spot", "Add to Network", "Manage Restrictions", "Export Data", "Import Data", "Network Settings"]
  },
  {
    id: "users",
    title: "User Actions",
    icon: Users,
    items: ["Get User", "Update User", "Delete User", "User Emails", "User Permissions"]
  }
];

interface AdminSidebarProps {
  activeSection: string;
  activeItem: string;
  onSectionChange: (sectionId: string, itemName: string) => void;
}

export const AdminSidebar = ({ activeSection, activeItem, onSectionChange }: AdminSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set([activeSection]));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleItemClick = (sectionId: string, itemName: string) => {
    onSectionChange(sectionId, itemName);
    if (!expandedSections.has(sectionId)) {
      setExpandedSections(prev => new Set(prev).add(sectionId));
    }
  };

  return (
    <aside className="w-80 bg-sidebar-bg border-r border-sidebar-border h-full overflow-y-auto">
      <div className="p-4">
        <nav className="space-y-2">
          {sidebarSections.map((section) => {
            const isExpanded = expandedSections.has(section.id);
            const Icon = section.icon;
            
            return (
              <div key={section.id} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeSection === section.id
                      ? "bg-sidebar-item-active-bg text-sidebar-item-active"
                      : "text-foreground hover:bg-sidebar-item-hover"
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{section.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="ml-6 space-y-1 animate-accordion-down">
                    {section.items.map((item) => (
                      <button
                        key={item}
                        onClick={() => handleItemClick(section.id, item)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200",
                          activeSection === section.id && activeItem === item
                            ? "bg-sidebar-item-active text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-sidebar-item-hover"
                        )}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};