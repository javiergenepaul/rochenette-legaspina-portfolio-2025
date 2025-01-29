import { AboutMeContentInterface } from "@/config";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

export default function AboutMeContent({
  title,
  subTitle,
  description,
  image,
  imageAlt,
  backgroundColor,
}: AboutMeContentInterface) {
  return (
    <div
      className={twJoin(
        "flex flex-col SM:flex-row gap-6 p-6 items-start rounded-lg dark:bg-woodsmoke-900",
        backgroundColor
      )}
    >
      <Image
        className="object-contain XL:h-36 XL:w-36 LG:h-28 LG:w-28 MD:h-24 MD:w-24 SM:h-20 SM:w-20 w-16 h-16 shadow-[0_0_14.98px_rgba(0,0,0,0.14)] rounded-2xl bg-scorpion-50 leading-[1.1875rem]"
        src={image}
        alt={imageAlt}
      />
      <div className="flex flex-col gap-2 items-center SM:items-start mt-6">
        <span className="XL:text-large text-normal font-bold text-scorpion-700 dark:text-woodsmoke-50">
          {title}
        </span>
        <span className="XL:text-large text-normal font-medium text-scorpion-600 dark:text-woodsmoke-50 leading-[1.1875rem]">
          {subTitle}
        </span>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          {description.map((item, index) => (
            <li
              className="XL:text-large text-normal text-scorpion-500 dark:text-woodsmoke-300 leading-[1.1875rem] text-center SM:text-left"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
