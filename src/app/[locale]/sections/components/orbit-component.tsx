"use client";

import {
  ComponentIcon,
  CopyLinkIcon,
  CropIcon,
  EditIcon,
  MoveIcon,
  RulerIcon,
  TextIcon,
} from "@/assets";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import React from "react";

interface OrbitComponentInterface {
  id: string;
  height: string;
  hiddenClass: string;
  orbitProperties: {
    1: {
      iconSize: number;
      radius: number;
      speed: number;
    };
    2: {
      iconSize?: number;
      radius: number;
      speed?: number;
    };
    3: {
      iconSize: number;
      radius: number;
      speed: number;
    };
    4: {
      iconSize: number;
      radius: number;
      speed: number;
    };
  };
  fixedHeight?: string;
}

const BannerTitle = () => {
  return (
    <span className="pointer-events-none select-none whitespace-pre-wrap bg-clip-text text-center XL:text-[89.25px] LG:text-[66.76px] XS:text-[48.03px] text-[39.26px] font-semibold text-woodsmoke-400 dark:text-woodsmoke-300 z-30">
      {translate(useTranslations(), "home.hero.banner.title")}
    </span>
  );
};

export default function OrbitComponent(props: OrbitComponentInterface) {
  const { id, height, hiddenClass, orbitProperties } = props;

  return (
    <>
      <div
        id={id}
        style={{ height: props.fixedHeight }}
        className={`${hiddenClass} relative h-[${height}] MD:w-full SM:w-[500px] XS:w-[400px] w-[350px] flex-col items-center justify-center`}
      >
        <BannerTitle />

        <OrbitingCircles
          className="orbit-circle"
          iconSize={orbitProperties[1].iconSize}
          radius={orbitProperties[1].radius}
          speed={orbitProperties[1].speed}
        >
          {/* Edit Icon */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(
                  useTranslations(),
                  "home.hero.banner.icons.edit.title"
                ),
                designation: translate(
                  useTranslations(),
                  "home.hero.banner.icons.edit.designation"
                ),
                image: EditIcon,
                height: orbitProperties[1].iconSize,
                width: orbitProperties[1].iconSize,
              },
            ]}
          />
        </OrbitingCircles>

        <OrbitingCircles
          iconSize={orbitProperties[2].iconSize}
          radius={orbitProperties[2].radius}
          speed={orbitProperties[3].speed}
        />

        <OrbitingCircles
          className="orbit-circle"
          iconSize={orbitProperties[3].iconSize}
          radius={orbitProperties[3].radius}
          speed={orbitProperties[3].speed}
          reverse
        >
          {/* Crop Icon */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(useTranslations(), "home.hero.banner.icons.crop.title"),
                designation: translate(useTranslations(), "home.hero.banner.icons.crop.designation"),
                image: CropIcon,
                height: orbitProperties[3].iconSize,
                width: orbitProperties[3].iconSize,
              },
            ]}
          />

          {/* Copy Link */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(useTranslations(), "home.hero.banner.icons.copyLink.title"),
                designation: translate(useTranslations(), "home.hero.banner.icons.copyLink.designation"),
                image: CopyLinkIcon,
                height: orbitProperties[3].iconSize,
                width: orbitProperties[3].iconSize,
              },
            ]}
          />

          {/* Component Icon */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(useTranslations(), "home.hero.banner.icons.component.title"),
                designation: translate(useTranslations(), "home.hero.banner.icons.component.designation"),
                image: ComponentIcon,
                height: orbitProperties[3].iconSize,
                width: orbitProperties[3].iconSize,
              },
            ]}
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="orbit-circle"
          iconSize={orbitProperties[4].iconSize}
          radius={orbitProperties[4].radius}
          speed={orbitProperties[4].speed}
        >
          {/* Move Icon */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(useTranslations(), "home.hero.banner.icons.move.title"),
                designation: translate(useTranslations(), "home.hero.banner.icons.move.designation"),
                image: MoveIcon,
                height: orbitProperties[4].iconSize,
                width: orbitProperties[4].iconSize,
              },
            ]}
          />

          {/* Text Icon */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(useTranslations(), "home.hero.banner.icons.text.title"),
                designation: translate(useTranslations(), "home.hero.banner.icons.text.designation"),
                image: TextIcon,
                height: orbitProperties[4].iconSize,
                width: orbitProperties[4].iconSize,
              },
            ]}
          />

          {/* Ruler Icon */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(useTranslations(), "home.hero.banner.icons.ruler.title"),
                designation: translate(useTranslations(), "home.hero.banner.icons.ruler.designation"),
                image: RulerIcon,
                height: orbitProperties[4].iconSize,
                width: orbitProperties[4].iconSize,
              },
            ]}
          />
        </OrbitingCircles>
      </div>
    </>
  );
}
