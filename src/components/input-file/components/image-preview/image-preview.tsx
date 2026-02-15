"use client";

import { UserIcon } from "lucide-react";
import Image from "next/image";
import { type ComponentProps, useMemo } from "react";

import { useInputFile } from "../root";

type ImagePreviewProps = {} & ComponentProps<"div">;

export const ImagePreview = ({}: ImagePreviewProps) => {
  const { files } = useInputFile();

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  const previewExists = previewURL !== null;

  if (!previewExists) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <UserIcon className="h-8 w-8 text-violet-500" />
      </div>
    );
  } else {
    return (
      <Image
        src={previewURL}
        alt="user file"
        width={64}
        height={64}
        className="rounded-full object-cover"
      />
    );
  }
};
