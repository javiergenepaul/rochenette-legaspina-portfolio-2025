"use client";

import { translate } from "@/lib";
import ContactForm from "./components/contact-form";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLoadingStore } from "@/store";

export default function Page() {
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    setLoading(false);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.5,
      }}
      className="flex gap-6 items-center MD:flex-row flex-col"
    >
      <section
        id="contact-banner-section"
        className="bg-amethyst-200 dark:bg-woodsmoke-900 flex flex-col basis-1/2 p SM:pt-16 XS:pt-9 XS:p-4 py-0 px-4 justify-end XL:gap-4 gap-2 rounded-lg XL:h-[724px] LG:h-[554px] MD:h-[526px] SM:h-[182px] h-[149px] SM:text-start text-center"
      >
        <h1 className="XL:text-h1 LG:text-h2 SM:text-h3 text-h4 font-bold text-woodsmoke-700 dark:text-woodsmoke-50 XL:leading-[81px] LG:leading-[61.7px] MD:leading-[46px]">
          {translate(useTranslations(), "contact.banner.title")}
        </h1>
        <p className="XL:text-large text-normal text-woodsmoke-500 dark:text-woodsmoke-200">
          {translate(useTranslations(), "contact.banner.subtitle")}
        </p>
      </section>
      <section id="contact-form-section" className="flex flex-col basis-1/2 w-full">
        <div className="flex flex-col gap-2 mb-8 XS:text-start text-center">
          <h2 className="XL:text-h2 LG:text-h3 SM:text-h4 XS:text-h5 font-bold">
            {translate(useTranslations(), "contact.form.title")}
          </h2>
          <p className="text-large font-medium">
            {translate(useTranslations(), "contact.form.subtitle")}
          </p>
        </div>
        <ContactForm />
      </section>
    </motion.div>
  );
}
