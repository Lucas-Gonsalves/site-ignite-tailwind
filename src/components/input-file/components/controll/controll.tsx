"use client";

import type { ChangeEvent, ComponentProps } from "react";

import { useInputFile } from "../root";

type ControllProps = {} & ComponentProps<"input">;

export const Controll = ({ multiple = false, ...rest }: ControllProps) => {
  const { onFilesSelect } = useInputFile();

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return;
    }

    const files = Array.from(event.target.files);
    onFilesSelect(files, multiple);
  };

  return (
    <input
      type="file"
      onChange={handleFilesSelected}
      className="sr-only"
      multiple={multiple}
      {...rest}
    />
  );
};
