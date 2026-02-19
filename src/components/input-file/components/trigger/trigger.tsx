import { UploadCloudIcon } from "lucide-react";
import type { ComponentProps } from "react";

type TriggerProps = {} & ComponentProps<"label">;

export const Trigger = ({ ...rest }: TriggerProps) => {
  return (
    <label
      className="group hover:bg-violet-25 flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm transition-colors duration-200 hover:border-violet-200 hover:text-violet-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300"
      {...rest}
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 transition-colors duration-200 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-800 dark:bg-zinc-700 dark:group-hover:border-zinc-700 dark:group-hover:bg-zinc-600">
        <UploadCloudIcon className="h-5 w-5 text-zinc-600 transition-colors duration-200 group-hover:text-violet-600 dark:text-zinc-400 dark:group-hover:text-violet-300" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <strong className="font-semibold text-violet-700 dark:text-violet-300">
            Click to upload
          </strong>{" "}
          or drag and drop
        </span>
        <span className="text-sm">SVG, PNG, JPG, or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
};
