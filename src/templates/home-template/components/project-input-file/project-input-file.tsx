import { InputFile } from "@/components/input-file";

export const ProjectInputFile = () => {
  return (
    <div className="grid-cols-settings-form grid gap-3 pb-5">
      <label
        htmlFor="project-file"
        className="text-sm font-medium text-zinc-700"
      >
        Portfolio projects
        <span className="mt-0.5 block text-sm font-normal text-zinc-500">
          Share a few snippets of your work.
        </span>
      </label>
      <InputFile.Root className="flex items-start gap-5">
        <InputFile.Trigger htmlFor="project-file" />
        <InputFile.Controll id="project-file" multiple />
      </InputFile.Root>
    </div>
  );
};
