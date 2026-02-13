import type { ComponentProps } from "react";

type ControllProps = {} & ComponentProps<"input">;

export const Controll = ({ ...rest }: ControllProps) => {
  return <input type="file" className="sr-only" {...rest} />;
};
