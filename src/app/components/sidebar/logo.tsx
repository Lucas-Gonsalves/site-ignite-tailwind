import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
      <Image
        src="/logomark.svg"
        alt="Logomark do Ignite Shop"
        width={32}
        height={32}
      />
      <span className="sr-only">Untitled UI</span>
    </div>
  );
}
