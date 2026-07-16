import { useEffect } from "react";

const BASE_TITLE = "GSAPLATFORM";
const DEFAULT_DESCRIPTION =
  "GSAPLATFORM oferece plataformas empresariais angolanas para compliance, operações, logística, hospitalar, procurement e agro. Soluções para empresas que querem automação e controlo.";
const DEFAULT_IMAGE = "/icon.png";
const DEFAULT_KEYWORDS =
  "GSAPLATFORM, plataformas empresariais, Angola, compliance, logística, hospitalar, procurement, agro, software corporativo, engenharia de software, soluções empresariais, automação de processos, otimização de operações, tecnologia angolana, inovação tecnológica, transformação digital, sistemas empresariais, integração de sistemas, segurança da informação, dados em solo nacional, suporte técnico, desenvolvimento de software, plataformas verticais, soluções para empresas angolanas";

const upsertMeta = (attribute, name, content) => {
  if (!content) return;

  const selector = `meta[${attribute}="${name}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonical = (href) => {
  let canonical = document.head.querySelector("link[rel=canonical]");

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.href = href;
};

const insertJsonLd = ({
  pageUrl,
  titleText,
  pageDescription,
  origin,
  pageImage,
}) => {
  const id = "seo-json-ld";
  let script = document.head.querySelector(`script[id="${id}"]`);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: BASE_TITLE,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "pt-AO",
      },
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: BASE_TITLE,
        url: origin,
        logo: `${origin}/icon.png`,
        sameAs: [],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: titleText,
        description: pageDescription,
        inLanguage: "pt-AO",
        isPartOf: {
          "@id": `${origin}/#website`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: pageImage,
        },
      },
    ],
  };

  script.textContent = JSON.stringify(jsonLd);
};

export default function useSeo({
  title,
  description,
  url,
  image,
  type = "website",
}) {
  useEffect(() => {
    const titleText = title
      ? `${title} | ${BASE_TITLE}`
      : `${BASE_TITLE} | Plataformas Tecnológicas para Angola`;
    document.title = titleText;

    const origin = window.location.origin;
    const pageUrl = url
      ? `${origin}${url}`
      : `${origin}${window.location.pathname}${window.location.search}`;

    const pageImage = image || DEFAULT_IMAGE;
    const pageDescription = description || DEFAULT_DESCRIPTION;

    upsertMeta("name", "description", pageDescription);
    upsertMeta("name", "keywords", DEFAULT_KEYWORDS);
    upsertMeta("name", "robots", "index, follow");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", titleText);
    upsertMeta("name", "twitter:description", pageDescription);
    upsertMeta("name", "twitter:image", pageImage);

    upsertMeta("property", "og:site_name", BASE_TITLE);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", titleText);
    upsertMeta("property", "og:description", pageDescription);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:image", pageImage);
    upsertMeta("property", "og:locale", "pt-AO");

    setCanonical(pageUrl);
    insertJsonLd({ pageUrl, titleText, pageDescription, origin, pageImage });
  }, [title, description, url, image, type]);
}
