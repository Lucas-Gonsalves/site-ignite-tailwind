import { LogOutIcon } from "lucide-react";
import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://github.com/Lucas-Gonsalves.png"
        alt="Profile Picture"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex max-w-45 flex-col">
        <span className="truncate text-sm font-semibold text-ellipsis text-zinc-700">
          Lucas Gonçalves da Luz
        </span>
        <span className="truncate text-sm text-zinc-500">
          lucasluz1710@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto cursor-pointer rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:text-violet-500"
      >
        <LogOutIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
