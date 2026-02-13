import { SettingsTabs } from "./components";
import { Form } from "./components/form";

export const HomeTemplate = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <Form />
    </div>
  );
};
