import { InputFile } from "@/components/input-file";

export const PhotoInputFile = () => {
  return (
    <div className="grid-cols-settings-form grid gap-3 pb-5">
      <label htmlFor="file-photo" className="text-sm font-medium text-zinc-700">
        Your photo
        <span className="mt-0.5 block text-sm font-normal text-zinc-500">
          This will be displayed on your profile.
        </span>
      </label>
      <InputFile.Root className="flex items-start gap-5">
        <InputFile.ImagePreview />
        <InputFile.Trigger htmlFor="file-photo" />
        <InputFile.Controll id="file-photo" />
      </InputFile.Root>
    </div>
  );
};
