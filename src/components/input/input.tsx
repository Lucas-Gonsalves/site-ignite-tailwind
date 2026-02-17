import type { ComponentProps, ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

type InputProps = {
  icon?: ComponentType<IconProps>;
} & ComponentProps<"input">;

export const Input = ({ icon: Icon, ...rest }: InputProps) => {
  return (
    <div className="group flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm transition-colors duration-200 focus-within:border-violet-500 hover:border-violet-500">
      {Icon && (
        <Icon className="h-5 w-5 text-zinc-500 transition-colors duration-200 group-focus-within:text-violet-500" />
      )}
      <input
        className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
        {...rest}
      />
    </div>
  );
};
