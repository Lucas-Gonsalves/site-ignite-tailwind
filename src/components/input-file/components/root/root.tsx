"use client";

import type { ReactNode } from "react";
import {
  type ComponentProps,
  createContext,
  useContext,
  useState,
} from "react";

type RootProps = {
  children: ReactNode;
} & ComponentProps<"div">;

type InputFileContextType = {
  files: File[];
  onFilesSelect: (files: File[], multiple: boolean) => void;
};

const InputFileContext = createContext({} as InputFileContextType);

export const Root = ({ children, ...rest }: RootProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const onFilesSelect = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((prevState) => [...prevState, ...files]);
    } else {
      setFiles(files);
    }
  };

  return (
    <InputFileContext.Provider value={{ files, onFilesSelect }}>
      <div {...rest}>{children}</div>
    </InputFileContext.Provider>
  );
};

export const useInputFile = () => useContext(InputFileContext);
