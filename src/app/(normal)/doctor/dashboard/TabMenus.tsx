import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
import Doctor from "./tabs/doctorTab/Doctor";
import User from "./tabs/userTab/UserTable";

interface Tab {
  label: string;
  Component: React.FC;
}

function TabMenus({ children }: { children?: React.ReactNode }) {
  const tabs: Tab[] = [
    { label: "about", Component: Doctor },
    { label: "appointment", Component: Doctor },
    { label: "user", Component: User },
  ];

  return (
    <Tabs defaultValue="about" className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-center mb-5 gap-4">
        <TabsList>
          {tabs.map(({ label }) => (
            <TabsTrigger key={label} value={label} className="capitalize">
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* If children should be rendered outside the tab content, it can be placed here */}
        {children}
      </div>

      {tabs.map(({ label, Component }) => (
        <TabsContent key={label} value={label}>
          <Component />
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default TabMenus;