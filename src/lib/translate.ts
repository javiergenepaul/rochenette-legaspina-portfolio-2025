import { TxKeyPath } from "@/i18n";
import { TFunction } from "i18next";

export const translate = (
  t: TFunction,
  key: TxKeyPath,
  options?: Record<string, string | number>
): string => {
  return key ? String(t(key, options as never)) : "";
};
