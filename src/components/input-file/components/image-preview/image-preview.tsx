import { UserIcon } from "lucide-react";
import type { ComponentProps } from "react";

type ImagePreviewProps = {} & ComponentProps<"div">;

export const ImagePreview = ({}: ImagePreviewProps) => {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
      <UserIcon className="h-8 w-8 text-violet-500" />
    </div>
  );
};
