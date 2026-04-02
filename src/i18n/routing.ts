// Legacy file — next-intl routing replaced by i18next + custom middleware.
// Re-export standard Next.js navigation so any stale imports still compile.
export { default as Link } from "next/link";
export { redirect, usePathname, useRouter } from "next/navigation";

export const getPathname = (args: { href: string }) => args.href;
