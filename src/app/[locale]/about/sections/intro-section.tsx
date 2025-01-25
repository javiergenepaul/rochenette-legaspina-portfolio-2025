import { RochenetteLegaspinaImage } from "@/assets";
import { style } from "@/config";
import { TxKeyPath } from "@/i18n";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function IntroSection() {
  const t = useTranslations();
  return (
    <section
      id="intro-section"
      className={twMerge(
        "w-full h-full flex flex-col LG:gap-10 gap-8",
        style.sectionContainerPaddingX
      )}
    >
      <h2 className="XL:text-h1 LG:text-h2 SM:text-h3 text-h4 font-bold text-scorpion-600 text-center">
        {translate(t, "about.intro.title")}
      </h2>
      <div className="flex LG:flex-row flex-col gap-4 items-center">
        <div className="XL:basis-3/12 LG:basis-5/12 LG:w-full h-full MD:w-6/12 XS:w-4/12 w-6/12 flex justify-center LG:block">
          <Image
            className="object-fill"
            src={RochenetteLegaspinaImage}
            alt="Rochenette Legaspina"
          />
        </div>
        <div className="LG:basis-7/12 XL:basis-9/12">
          {Array.from({ length: 5 }, (_, i) =>
            translate(t, `about.intro.paragraph.${i + 1}` as TxKeyPath)
          ).map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 text-justify LG:text-normal XL:text-large text-scorpion-600 LG:leading-[1.21rem] XL:leading-[1.375rem]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
