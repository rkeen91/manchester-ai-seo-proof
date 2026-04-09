import Link from "next/link";
import placesData from "@/data/places.json";

const SITE = "https://manchester-sandwich-finder.vercel.app";
const PAGE_PATH = "/vegan-sandwiches-manchester";
const PAGE_URL = `${SITE}${PAGE_PATH}`;

export const metadata = {
  title: "Vegan sandwiches in Manchester | Manchester Sandwich Finder",
  description:
    "A practical shortlist of vegan-friendly sandwich, deli and lunch options in Manchester, built from open directory data and explained with simple matching signals.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Vegan sandwiches in Manchester | Manchester Sandwich Finder",
    description:
      "A practical shortlist of vegan-friendly sandwich, deli and lunch options in Manchester.",
    url: PAGE_URL,
    siteName: "Manchester Sandwich Finder",
    type: "article",
  },
};

function sortPlaces(a, b) {
  return (a.name || "").localeCompare(b.name || "");
}

function toAbsoluteUrl(url) {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}

function getPhoneHref(phone) {
  if (!phone) return null;
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function getVeganSignals(place) {
  const text = `${place.name || ""} ${place.address || ""} ${place.website || ""}`.toLowerCase();
  const signals = [];

  if (text.includes("vegan")) signals.push("explicit vegan mention");
  if (text.includes("vegetarian")) signals.push("vegetarian cue");
  if (text.includes("deli")) signals.push("deli");
  if (text.includes("bakery") || text.includes("bakes")) signals.push("bakery");
  if (text.includes("middle eastern")) signals.push("middle eastern");
  if (text.includes("falafel")) signals.push("falafel");
  if (text.includes("salad")) signals.push("salad / lunch");
  if (text.includes("artisan")) signals.push("artisan / made-to-order");

  return [...new Set(signals)];
}

function looksPossiblyVeganFriendly(place) {
  return getVeganSignals(place).length > 0;
}

function isManchesterAddress(place) {
  const address = (place.address || "").toLowerCase();
  return /\bm\d{1,2}\b/i.test(place.address || "") || address.includes("manchester");
}

function PlaceCard({ place }) {
  const websiteUrl = toAbsoluteUrl(place.website);
  const phoneHref = getPhoneHref(place.phone);
  const signals = getVeganSignals(place);

  return (
    <li
      style={{
        listStyle: "none",
        marginBottom: 18,
        padding: 16,
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 12,
      }}
    >
      <h3 style={{ margin: "0 0 8px" }}>{place.name}</h3>

      {signals.length > 0 ? (
        <p style={{ margin: "0 0 10px", fontSize: 14, opacity: 0.8 }}>
          <strong>Possible signals:</strong> {signals.join(", ")}.
        </p>
      ) : null}

      {place.address ? (
        <p style={{ margin: "0 0 8px" }}>
          <strong>Address:</strong> {place.address}
        </p>
      ) : null}

      {websiteUrl ? (
        <p style={{ margin: "0 0 8px" }}>
          <a href={websiteUrl} target="_blank" rel="noreferrer">
            Visit website
          </a>
        </p>
      ) : null}

      {place.phone ? (
        <p style={{ margin: 0 }}>
          <strong>Phone:</strong>{" "}
          {phoneHref ? <a href={phoneHref}>{place.phone}</a> : place.phone}
        </p>
      ) : null}
    </li>
  );
}

export default function VeganSandwichesManchesterPage() {
  const allPlaces = placesData.places || [];

  const likelyPlaces = allPlaces
    .filter(looksPossiblyVeganFriendly)
    .sort(sortPlaces)
    .slice(0, 25);

  const manchesterPlaces = likelyPlaces.filter(isManchesterAddress);
  const nearbyPlaces = likelyPlaces.filter((place) => !isManchesterAddress(place));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Vegan sandwiches in Manchester",
        item: PAGE_URL,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vegan-friendly sandwich shortlist in Manchester",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: likelyPlaces.length,
    itemListElement: likelyPlaces.map((place, index) => {
      const websiteUrl = toAbsoluteUrl(place.website);

      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "LocalBusiness",
          name: place.name,
          ...(websiteUrl ? { url: websiteUrl } : {}),
          ...(place.address ? { address: place.address } : {}),
          ...(place.phone ? { telephone: place.phone } : {}),
        },
      };
    }),
  };

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "0 16px",
        fontFamily: "system-ui",
        lineHeight: 1.6,
      }}
    >
      <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 14 }}>
        <Link href="/">Home</Link> {" / "} <span>Vegan sandwiches in Manchester</span>
      </nav>

      <h1>Vegan sandwiches in Manchester</h1>

      <p>
        This page is a practical guide for people searching for{" "}
        <strong>vegan-friendly sandwich options in Manchester</strong>. It is not a
        certified vegan directory and it does not claim that every listing is fully
        vegan. The goal is simpler: help you build a better shortlist faster.
      </p>

      <p>
        The listings on this page come from open directory data. That means the
        smartest way to use this page is as a starting point, then confirm the latest
        menu, ingredients, substitutions and preparation details directly with the
        business before ordering.
      </p>

      <section
        style={{
          marginTop: 28,
          padding: 16,
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 12,
        }}
      >
        <h2 style={{ marginTop: 0 }}>What this page is best for</h2>
        <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
          <li>Finding a fast vegan-friendly lunch shortlist in Manchester</li>
          <li>Spotting deli, bakery and lunch places that may offer vegan fillings</li>
          <li>Comparing Manchester addresses with nearby-area options</li>
          <li>Jumping quickly to business websites before you visit</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>How the shortlist works</h2>
        <p>
          Instead of pretending to know every live menu, this page uses simple
          relevance signals from the available data. A place may appear here because
          its name, address or website suggests terms such as vegan, vegetarian, deli,
          bakery, falafel, salad or similar lunch cues.
        </p>
        <p>
          That does <strong>not</strong> guarantee a dedicated vegan menu. It does make
          the list more useful than a generic directory dump, because you can see why a
          place was included and decide whether it is worth checking next.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Manchester shortlist</h2>
        <p>
          We found <strong>{likelyPlaces.length}</strong> likely matches in the current
          dataset.
        </p>

        {likelyPlaces.length === 0 ? (
          <p>
            No likely matches were found in the current dataset. You can still browse
            the full directory on the homepage.
          </p>
        ) : (
          <>
            {manchesterPlaces.length > 0 ? (
              <section style={{ marginTop: 24 }}>
                <h3>Manchester addresses first</h3>
                <p>
                  These are the places in the current shortlist whose address data most
                  clearly points to Manchester.
                </p>
                <ul style={{ paddingLeft: 0 }}>
                  {manchesterPlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} />
                  ))}
                </ul>
              </section>
            ) : null}

            {nearbyPlaces.length > 0 ? (
              <section style={{ marginTop: 24 }}>
                <h3>Nearby-area options</h3>
                <p>
                  These places still matched the vegan-friendly signals, but their
                  address data points to nearby areas rather than a clearly Manchester
                  address.
                </p>
                <ul style={{ paddingLeft: 0 }}>
                  {nearbyPlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} />
                  ))}
                </ul>
              </section>
            ) : null}
          </>
        )}
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>What makes a place useful for vegan sandwich searches?</h2>
        <p>
          The most useful places are usually ones that either explicitly mention vegan
          options, sit within vegetarian-friendly categories, or operate in formats
          where flexible fillings are more common, such as deli counters, bakeries,
          falafel spots and lunch-led food businesses.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Related pages</h2>
        <p>
          For broader browsing, go back to the{" "}
          <Link href="/">Manchester Sandwich Finder homepage</Link>.
        </p>
        <p>
          If location matters most, visit{" "}
          <Link href="/sandwich-shops-manchester-city-centre">
            Sandwich shops in Manchester city centre
          </Link>
          .
        </p>
        <p>
          If you are ordering for a team or office, visit{" "}
          <Link href="/sandwich-catering-manchester">
            Sandwich catering in Manchester
          </Link>
          .
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Frequently asked questions</h2>

        <h3>Are all listings on this page fully vegan?</h3>
        <p>
          No. This is a practical shortlist, not a certified vegan directory. Always
          check the latest menu directly with the business.
        </p>

        <h3>Why are some listings included even if vegan is not in the business name?</h3>
        <p>
          Because open directory data is limited, this page uses practical matching
          signals rather than strict category labels alone.
        </p>

        <h3>Should I still check the menu before visiting?</h3>
        <p>
          Yes. Menus, substitutions, allergens, preparation practices and opening
          hours can change.
        </p>
      </section>

      <section style={{ marginTop: 32, fontSize: 14, opacity: 0.85 }}>
        <p>
          <strong>Method note:</strong> this page is built from open directory data and
          light relevance filtering. It is intended as a useful shortlist, not a final
          judgement, review or ranking.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </main>
  );
}