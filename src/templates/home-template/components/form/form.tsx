import { Button } from "@/components/button";

export const Form = () => {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-small text-zinc-500">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" title="Cancel" variant="empty" />
          <Button type="button" title="Save" />
        </div>
      </div>
      <form
        action=""
        id="settings"
        className="mt-6 flex w-full flex-col"
      ></form>
    </div>
  );
};
