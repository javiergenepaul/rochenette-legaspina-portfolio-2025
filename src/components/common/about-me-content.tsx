import { AboutMeContentInterface } from "@/config";
import Image from "next/image";

export default function AboutMeContent({
  title,
  subTitle,
  description,
  image,
  imageAlt,
}: AboutMeContentInterface) {
  return (
    <div className="flex flex-col SM:flex-row gap-6 py-6 items-center">
      <Image
        className="object-contain XL:h-36 XL:w-36 LG:h-28 LG:w-28 MD:h-24 MD:w-24 SM:h-20 SM:w-20 w-16 h-16 shadow-[0_0_14.98px_rgba(0,0,0,0.14)] rounded-2xl bg-scorpion-50 leading-[1.1875rem]"
        src={image}
        alt={imageAlt}
      />
      <div className="flex flex-col gap-2 items-center SM:items-start">
        <span className="XL:text-large text-normal font-bold text-scorpion-700">
          {title}
        </span>
        <span className="XL:text-large text-normal font-medium text-scorpion-600 leading-[1.1875rem]">
          {subTitle}
        </span>
        <p className="XL:text-large text-normal text-scorpion-500 leading-[1.1875rem] text-center SM:text-left">
          {description}
        </p>
      </div>
    </div>
  );
}
