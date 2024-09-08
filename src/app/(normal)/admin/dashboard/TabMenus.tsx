import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
import ScheduleForm from "./tabs/ScheduleTab/scheduleForm";
import aboutDoctor from "./tabs/AboutTab/aboutDoctor";
import AppointmentGrid from "./tabs/AppointmentTab/AppointmentGrid";

interface Tab {
  label: string;
  Component: React.FC;
}

function TabMenus({ children }: { children?: React.ReactNode }) {
  const tabs: Tab[] = [
    { label: "about me", Component: aboutDoctor },
    { label: "appointment", Component: AppointmentGrid },
    { label: "schedule", Component: ScheduleForm },
  ];

  return (
    <Tabs defaultValue="about me" className="space-y-4 lg:space-y-6">
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
