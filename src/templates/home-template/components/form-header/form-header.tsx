import { Button } from "@/components/button";

export const FormHeader = () => {
  return (
    <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
      <div className="space-y-1">
        <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
        <span className="text-small text-zinc-500">
          Update your photo and personal details here.
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button type="button" title="Cancel" variant="empty" />
        <Button id="settings" type="submit" title="Save" />
      </div>
    </div>
  );
};
