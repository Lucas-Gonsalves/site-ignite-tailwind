import { LogOutIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/button";

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
        <span className="truncate text-sm font-semibold text-ellipsis text-zinc-700 dark:text-zinc-100">
          Lucas Gonçalves da Luz
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          lucasluz1710@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOutIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};
