import { Button } from "@/components/ui/button";
import { Home, Settings, LogOut } from "lucide-react";

export const AdminHeader = () => {
  return (
    <header className="h-16 bg-header-bg border-b border-header-border px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <h1 className="text-xl font-semibold text-foreground">AdminPanel</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <Home className="w-4 h-4 mr-2" />
          Home
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </header>
  );
};