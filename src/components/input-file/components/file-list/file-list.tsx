"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { FileItem } from "../file-item";
import { useInputFile } from "../root";

export const FileList = () => {
  const { files } = useInputFile();
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="flex flex-col gap-3">
      {files.map((file, index) => (
        <FileItem
          key={`key-of-file-${file.name}-index-${index}`}
          state="progress"
          file={file}
        />
      ))}
    </div>
  );
};
