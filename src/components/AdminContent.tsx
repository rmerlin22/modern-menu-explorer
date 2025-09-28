import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface AdminContentProps {
  activeSection: string;
  activeItem: string;
}

const getContentForSection = (sectionId: string, itemName: string) => {
  switch (sectionId) {
    case "admin":
      return {
        title: "Admin Panel - " + itemName,
        description: "Manage administrative functions and system settings",
        content: (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">System Status</CardTitle>
                  <CardDescription>Current system health and performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Server Status:</span>
                      <span className="text-green-600 font-medium">Online</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Database:</span>
                      <span className="text-green-600 font-medium">Connected</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Update:</span>
                      <span className="text-muted-foreground">2 minutes ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                  <CardDescription>Frequently used administrative tools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Generate Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Clear Cache
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Backup Data
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      };
      
    case "perspective":
      return {
        title: "Perspective Demo - " + itemName,
        description: "Configure and manage perspective demonstration features",
        content: (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Demo Configuration</CardTitle>
                <CardDescription>Set up your demonstration environment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Demo Title</label>
                  <Input placeholder="Enter demo title" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea placeholder="Enter demo description" className="mt-1" />
                </div>
                <Button className="bg-gradient-primary hover:bg-primary-hover">
                  Save Configuration
                </Button>
              </CardContent>
            </Card>
          </div>
        )
      };
      
    case "external":
      return {
        title: "External Services - " + itemName,
        description: "Manage external service integrations and connections",
        content: (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Service Integration</CardTitle>
                <CardDescription>Connect and manage external services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">API Service</h4>
                    <p className="text-sm text-muted-foreground">Status: Connected</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Configure
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Database Service</h4>
                    <p className="text-sm text-muted-foreground">Status: Online</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Manage
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      };
      
    case "integration":
      return {
        title: "Integration Actions - " + itemName,
        description: "Perform integration operations and data management",
        content: (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Integration Tools</CardTitle>
                <CardDescription>Manage data flow and integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <span className="font-medium">Create</span>
                    <span className="text-sm text-muted-foreground">New Integration</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <span className="font-medium">Import</span>
                    <span className="text-sm text-muted-foreground">Data</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <span className="font-medium">Export</span>
                    <span className="text-sm text-muted-foreground">Data</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      };
      
    case "users":
      return {
        title: "User Management - " + itemName,
        description: "Manage user accounts, permissions, and data",
        content: (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">User Operations</CardTitle>
                <CardDescription>Perform user management tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Input placeholder="Search users..." className="flex-1" />
                  <Button className="bg-gradient-primary hover:bg-primary-hover">
                    Search
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">john@example.com</p>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Delete</Button>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-sm text-muted-foreground">jane@example.com</p>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Delete</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      };
      
    default:
      return {
        title: "Welcome to Admin Panel",
        description: "Select an option from the sidebar to get started",
        content: (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Choose a section from the sidebar to view its content.</p>
            </CardContent>
          </Card>
        )
      };
  }
};

export const AdminContent = ({ activeSection, activeItem }: AdminContentProps) => {
  const content = getContentForSection(activeSection, activeItem);
  
  return (
    <main className="flex-1 bg-content-bg p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">{content.title}</h1>
          <p className="text-muted-foreground mt-2">{content.description}</p>
        </div>
        
        {content.content}
      </div>
    </main>
  );
};