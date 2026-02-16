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
  onFilesSelect: (files: File[]) => void;
};

const InputFileContext = createContext({} as InputFileContextType);

export const Root = ({ children, ...rest }: RootProps) => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <InputFileContext.Provider value={{ files, onFilesSelect: setFiles }}>
      <div {...rest}>{children}</div>
    </InputFileContext.Provider>
  );
};

export const useInputFile = () => useContext(InputFileContext);
