import type { ComponentProps } from "react";

type RootProps = {} & ComponentProps<"div">;

export const Root = ({ ...rest }: RootProps) => {
  return <div {...rest} />;
};
