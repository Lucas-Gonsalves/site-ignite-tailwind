import { Tabs } from "@/components/tabs";
import { SETTINGS_TABS_ROUTES } from "@/utils/info/settings-tabs-routes";

import { Form } from "./components/form";

export const HomeTemplate = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <Tabs tabsList={SETTINGS_TABS_ROUTES} />
      <Form />
    </div>
  );
};
