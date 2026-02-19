import Image from "next/image";

export const Logo = () => {
  return (
    <div className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
      <Image
        src="/logomark.svg"
        alt="Logomark do Ignite Shop"
        width={32}
        height={32}
      />
      <span className="text-lg font-semibold">Untitled UI</span>
    </div>
  );
};
