import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { platformsData } from "../config/platforms";

export function useLocalizedPlatforms() {
  const { t } = useTranslation();

  return useMemo(() => {
    return platformsData.items.map((item) => ({
      ...item,
      title: t(`platforms.items.${item.slug}.title`, {
        defaultValue: item.title,
      }),
      tag: t(`platforms.items.${item.slug}.tag`, {
        defaultValue: item.tag,
      }),
      headline: t(`platforms.items.${item.slug}.headline`, {
        defaultValue: item.headline,
      }),
      desc: t(`platforms.items.${item.slug}.desc`, {
        defaultValue: item.desc,
      }),
      whatDo: t(`platforms.items.${item.slug}.whatDo`, {
        defaultValue: item.whatDo,
      }),
      forWho: t(`platforms.items.${item.slug}.forWho`, {
        defaultValue: item.forWho,
      }),
      slogan: t(`platforms.items.${item.slug}.slogan`, {
        defaultValue: item.slogan,
      }),
      whyNeed: Array.isArray(item.whyNeed)
        ? item.whyNeed.map((entry, index) => ({
            ...entry,
            title: t(`platforms.items.${item.slug}.whyNeed.${index}.title`, {
              defaultValue: entry.title,
            }),
            description: t(
              `platforms.items.${item.slug}.whyNeed.${index}.description`,
              {
                defaultValue: entry.description,
              },
            ),
          }))
        : item.whyNeed,
      features: Array.isArray(item.features)
        ? item.features.map((feature, index) =>
            t(`platforms.items.${item.slug}.features.${index}`, {
              defaultValue: feature,
            }),
          )
        : item.features,
    }));
  }, [t]);
}

export function useLocalizedPlatformsSection() {
  const { t } = useTranslation();
  const items = useLocalizedPlatforms();

  return useMemo(
    () => ({
      label: t("platforms.section.label", {
        defaultValue: platformsData.label,
      }),
      title: t("platforms.section.title", {
        defaultValue: platformsData.title,
      }),
      description: t("platforms.section.description", {
        defaultValue: platformsData.description,
      }),
      items,
    }),
    [t, items],
  );
}
