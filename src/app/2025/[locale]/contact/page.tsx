"use client";

import { translate } from "@/lib";
import ContactForm from "./components/contact-form";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLoadingStore } from "@/store";
import Image from "next/image";
import { RlLogoDark, RlLogoLight } from "@/assets";

export default function Page() {
  const { t } = useTranslation();
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.5,
      }}
      className="flex gap-6 items-center md:flex-row flex-col"
    >
      <section
        id="contact-banner-section"
        className="bg-amethyst-200 dark:bg-woodsmoke-900 flex flex-col basis-1/2 p sm:pt-16 xs:pt-9 xs:p-4 py-0 px-4 items-center xl:gap-4 gap-2 rounded-lg sm:text-start text-center"
      >
        <Image
          className="justify-center py-16 align-self-center dark:block hidden"
          src={RlLogoDark}
          alt="roch"
        />
        <Image
          className="justify-center py-16 align-self-center dark:hidden block"
          src={RlLogoLight}
          alt="roch"
        />
        <h1 className="xl:text-h1 lg:text-h2 sm:text-h3 text-h4 items-self-start font-bold text-woodsmoke-700 dark:text-woodsmoke-50 xl:leading-20.25 lg:leading-[61.7px] md:leading-11.5">
          {translate(t, "contact.banner.title")}
        </h1>
        <p className="xl:text-large text-normal text-woodsmoke-500 dark:text-woodsmoke-200">
          {translate(t, "contact.banner.subtitle")}
        </p>
      </section>
      <section
        id="contact-form-section"
        className="flex flex-col basis-1/2 w-full"
      >
        <div className="flex flex-col gap-2 mb-8 xs:text-start text-center">
          <h2 className="xl:text-h2 lg:text-h3 sm:text-h4 xs:text-h5 font-bold">
            {translate(t, "contact.form.title")}
          </h2>
          <p className="text-large font-medium">
            {translate(t, "contact.form.subtitle")}
          </p>
        </div>
        <ContactForm />
      </section>
    </motion.div>
  );
}
