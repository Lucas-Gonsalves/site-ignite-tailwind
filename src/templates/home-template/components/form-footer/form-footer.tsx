import { Button } from "@/components/button";

export const FormFooter = () => {
  return (
    <div className="flex items-center justify-end gap-2 pt-5">
      <Button type="button" title="Cancel" variant="empty" />
      <Button type="submit" title="Save" />
    </div>
  );
};
