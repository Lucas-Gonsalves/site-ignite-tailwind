import { Trash2Icon, UploadCloudIcon } from "lucide-react";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

import { Button } from "@/components/button";
import { formatBytes } from "@/utils/conversion/format-bytes";

const fileItem = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
    icon: "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600",
    deleteButton: "",
  },
  variants: {
    state: {
      progress: {
        container: "border-violet-500",
      },
      error: {
        container: "bg-error-25 border-error-300",
        icon: "border-error-50 bg-error-100 text-error-600",
        deleteButton: "text-error-700 hover:text-error-900",
      },
    },
  },

  defaultVariants: {
    state: "progress",
  },
});

type FileItemProps = {
  file: File;
} & ComponentProps<"div"> &
  VariantProps<typeof fileItem>;

export const FileItem = ({ file, state }: FileItemProps) => {
  const { container, icon, deleteButton } = fileItem({ state });
  const isStateError = state === "error";

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloudIcon className="h-4 w-4" />
      </div>

      {isStateError ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">
              Upload failed, please try again.
            </span>
            <span className="text-error-600 text-sm">{file.name}</span>
          </div>

          <button
            type="button"
            className="text-error-700 hover:text-error-900 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">
              {file.name}
            </span>
            <span className="text-sm text-zinc-500">
              {formatBytes(file.size)}
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div className="h-2 w-4/5 rounded-full bg-violet-600" />
            </div>
            <span className="text-sm font-medium text-zinc-700">80%</span>
          </div>
        </div>
      )}

      <Button type="button" variant="ghost" className={deleteButton()}>
        <Trash2Icon className="h-5 w-5" />
      </Button>
    </div>
  );
};
