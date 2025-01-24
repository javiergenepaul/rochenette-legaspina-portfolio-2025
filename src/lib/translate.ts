import { TxKeyPath } from "@/i18n";
import { useTranslations } from "next-intl";

/**
 * Translates text.
 *
 * @param key The i18n key.
 * @param options The options object containing dynamic values.
 */
export const translate = (key: TxKeyPath, options?: Record<string, any>) => {
  const t = useTranslations();
  return key ? t(key, options) : "";
};