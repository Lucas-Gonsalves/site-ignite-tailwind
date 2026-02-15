"use client";

import {
  type ComponentProps,
  createContext,
  useContext,
  useState,
} from "react";

type RootProps = {} & ComponentProps<"div">;

type InputFileContextType = {
  files: File[];
  onFilesSelect: (files: File[]) => void;
};

const InputFileContext = createContext({} as InputFileContextType);

export const Root = ({ ...rest }: RootProps) => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <InputFileContext.Provider value={{ files, onFilesSelect: setFiles }}>
      <div {...rest} />
    </InputFileContext.Provider>
  );
};

export const useInputFile = () => useContext(InputFileContext);
