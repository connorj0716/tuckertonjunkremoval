import { faqs, services, site, towns } from "@/lib/site";

export default function JsonLd() {
  const businessId = `${site.url}/#business`;

  const localBusiness = {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: [
      "Tuckerton Junk Removal NJ",
      "Ocean County Junk Removal",
      "Junk Removal Tuckerton NJ",
    ],
    description:
      "Tuckerton Junk Removal provides same-day junk removal, furniture removal, appliance removal, estate cleanouts, construction debris hauling, and yard waste removal in Tuckerton, NJ and the surrounding Ocean County towns.",
    url: site.url,
    telephone: "+1-609-703-2115",
    email: site.email,
    priceRange: "$$",
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.svg`,
    parentOrganization: {
      "@type": "Organization",
      name: site.parent,
      url: "https://oceancountyjunkremoval.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.6023,
      longitude: -74.3407,
    },
    areaServed: towns.map((t) => ({
      "@type": "City",
      name: t === "Radio Road" ? "Radio Road, Little Egg Harbor" : t,
      address: {
        "@type": "PostalAddress",
        addressRegion: "NJ",
        addressCountry: "US",
      },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 39.6023,
        longitude: -74.3407,
      },
      geoRadius: "25000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.ratingValue,
      bestRating: 5,
      worstRating: 1,
      reviewCount: site.reviewCount,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Junk Removal Services in Tuckerton, NJ",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${s.title} in Tuckerton, NJ`,
          description: s.blurb,
          areaServed: {
            "@type": "City",
            name: "Tuckerton",
          },
          provider: { "@id": businessId },
        },
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": businessId },
    inLanguage: "en-US",
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: "Tuckerton Junk Removal | Same-Day Hauling in Tuckerton, NJ",
    description:
      "Local junk removal in Tuckerton, NJ. Same-day furniture, appliance, estate cleanout, and debris hauling across Tuckerton, Little Egg Harbor, Mystic Island, and Manahawkin.",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": businessId },
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [localBusiness, website, webPage, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
