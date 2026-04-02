"use client";

import * as Icon from "@/assets";
import { AnimatedTooltip } from "@/components/2025/ui/animated-tooltip";
import { FlipWords } from "@/components/2025/ui/flip-words";
import { OrbitingCircles } from "@/components/2025/ui/orbiting-circles";
import { TxKeyPath } from "@/i18n";
import { translate } from "@/lib";
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const words = [];
  words.push(translate(t, `home.hero.banner.title.1` as TxKeyPath));
  words.push(translate(t, `home.hero.banner.title.2` as TxKeyPath));
  words.push(translate(t, `home.hero.banner.title.3` as TxKeyPath));
  words.push(translate(t, `home.hero.banner.title.4` as TxKeyPath));
  words.push(translate(t, `home.hero.banner.title.5` as TxKeyPath));
  words.push(translate(t, `home.hero.banner.title.6` as TxKeyPath));

  return (
    <span className="pointer-events-none select-none whitespace-pre-wrap bg-clip-text text-center xl:text-[89.25px] lg:text-[66.76px] xs:text-[48.03px] text-[39.26px] font-semibold text-woodsmoke-400 dark:text-woodsmoke-300 z-30">
      <FlipWords
        className="text-center xl:text-[89.25px] lg:text-[66.76px] xs:text-[48.03px] text-[39.26px] font-semibold text-woodsmoke-400 dark:text-woodsmoke-300"
        words={words}
      />
    </span>
  );
};

export default function OrbitComponent(props: OrbitComponentInterface) {
  const { t } = useTranslation();
  const { id, height, hiddenClass, orbitProperties } = props;

  return (
    <>
      <div
        id={id}
        style={{ height: props.fixedHeight }}
        className={`${hiddenClass} relative h-[${height}] md:w-full sm:w-125 xs:w-100 w-87.5 flex-col items-center justify-center`}
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
                  t,
                  "home.hero.banner.icons.edit.title"
                ),
                designation: translate(
                  t,
                  "home.hero.banner.icons.edit.designation"
                ),
                image: Icon.EditIcon,
                height: orbitProperties[1].iconSize,
                width: orbitProperties[1].iconSize,
                leftClass: "left-[-35px]",
                imageAlt: "Edit Icon Logo",
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
                name: translate(
                  t,
                  "home.hero.banner.icons.crop.title"
                ),
                designation: translate(
                  t,
                  "home.hero.banner.icons.crop.designation"
                ),
                image: Icon.CropIcon,
                height: orbitProperties[3].iconSize,
                width: orbitProperties[3].iconSize,
                leftClass: "left-[-30px]",
                imageAlt: "Crop Icon",
              },
            ]}
          />

          {/* Copy Link */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(
                  t,
                  "home.hero.banner.icons.copyLink.title"
                ),
                designation: translate(
                  t,
                  "home.hero.banner.icons.copyLink.designation"
                ),
                image: Icon.CopyLinkIcon,
                height: orbitProperties[3].iconSize,
                width: orbitProperties[3].iconSize,
                leftClass: "left-[-30px]",
                imageAlt: "Copy Link Icon",
              },
            ]}
          />

          {/* Component Icon */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(
                  t,
                  "home.hero.banner.icons.component.title"
                ),
                designation: translate(
                  t,
                  "home.hero.banner.icons.component.designation"
                ),
                image: Icon.ComponentIcon,
                height: orbitProperties[3].iconSize,
                width: orbitProperties[3].iconSize,
                leftClass: "left-[-30px]",
                imageAlt: "Component Icon",
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
                name: translate(
                  t,
                  "home.hero.banner.icons.move.title"
                ),
                designation: translate(
                  t,
                  "home.hero.banner.icons.move.designation"
                ),
                image: Icon.MoveIcon,
                height: orbitProperties[4].iconSize,
                width: orbitProperties[4].iconSize,
                leftClass: "left-[-20px]",
                imageAlt: "Move Icon",
              },
            ]}
          />

          {/* Text Icon */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(
                  t,
                  "home.hero.banner.icons.text.title"
                ),
                designation: translate(
                  t,
                  "home.hero.banner.icons.text.designation"
                ),
                image: Icon.TextIcon,
                height: orbitProperties[4].iconSize,
                width: orbitProperties[4].iconSize,
                leftClass: "left-[-20px]",
                imageAlt: "Text Icon",
              },
            ]}
          />

          {/* Ruler Icon */}
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translate(
                  t,
                  "home.hero.banner.icons.ruler.title"
                ),
                designation: translate(
                  t,
                  "home.hero.banner.icons.ruler.designation"
                ),
                image: Icon.RulerIcon,
                height: orbitProperties[4].iconSize,
                width: orbitProperties[4].iconSize,
                leftClass: "left-[-20px]",
                imageAlt: "Ruler icon",
              },
            ]}
          />
        </OrbitingCircles>
      </div>
    </>
  );
}
