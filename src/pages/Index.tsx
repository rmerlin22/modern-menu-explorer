import { useState } from "react";
import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminContent } from "@/components/AdminContent";

const Index = () => {
  const [activeSection, setActiveSection] = useState("admin");
  const [activeItem, setActiveItem] = useState("Dashboard Overview");

  const handleSectionChange = (sectionId: string, itemName: string) => {
    setActiveSection(sectionId);
    setActiveItem(itemName);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <AdminHeader />
      <div className="flex h-[calc(100vh-4rem)]">
        <AdminSidebar 
          activeSection={activeSection}
          activeItem={activeItem}
          onSectionChange={handleSectionChange}
        />
        <AdminContent 
          activeSection={activeSection}
          activeItem={activeItem}
        />
      </div>
    </div>
  );
};

export default Index;
