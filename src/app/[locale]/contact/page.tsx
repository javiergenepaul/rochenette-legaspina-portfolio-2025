"use client";

import { translate } from "@/lib";
import ContactForm from "./components/contact-form";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.5,
      }}
      className="flex gap-6 items-center"
    >
      <section
        id="contact-banner"
        className="bg-amethyst-200 dark:bg-woodsmoke-900 flex flex-col basis-1/2 p-4 justify-end gap-4 rounded-lg h-[724px]"
      >
        <h1 className="text-h1 font-bold text-woodsmoke-700 dark:text-woodsmoke-50 leading-[81px]">
          {translate(useTranslations(), "contact.banner.title")}
        </h1>
        <p className="text-large text-woodsmoke-500 dark:text-woodsmoke-200">
          {translate(useTranslations(), "contact.banner.subtitle")}
        </p>
      </section>
      <section id="id-form" className="flex flex-col basis-1/2 w-full">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-h2 font-bold">
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
