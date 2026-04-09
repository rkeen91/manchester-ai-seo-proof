import Link from "next/link";
import placesData from "@/data/places.json";

const SITE = "https://manchester-sandwich-finder.vercel.app";
const PAGE_PATH = "/sandwich-shops-manchester-city-centre";
const PAGE_URL = `${SITE}${PAGE_PATH}`;

export const metadata = {
  title: "Sandwich shops in Manchester city centre | Manchester Sandwich Finder",
  description:
    "A practical guide to sandwich and deli spots in Manchester city centre, using open directory data and simple location-based filtering.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Sandwich shops in Manchester city centre | Manchester Sandwich Finder",
    description:
      "A practical guide to sandwich and deli spots in Manchester city centre.",
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

function getAreaSignals(place) {
  const address = (place.address || "").toLowerCase();
  const signals = [];

  if (/\bm1\b/i.test(place.address || "")) signals.push("M1 postcode");
  if (/\bm2\b/i.test(place.address || "")) signals.push("M2 postcode");
  if (/\bm3\b/i.test(place.address || "")) signals.push("M3 postcode");
  if (/\bm4\b/i.test(place.address || "")) signals.push("M4 postcode");

  if (address.includes("piccadilly")) signals.push("Piccadilly");
  if (address.includes("deansgate")) signals.push("Deansgate");
  if (address.includes("northern quarter")) signals.push("Northern Quarter");
  if (address.includes("spinningfields")) signals.push("Spinningfields");
  if (address.includes("oxford road")) signals.push("Oxford Road");
  if (address.includes("ancoats")) signals.push("Ancoats");
  if (address.includes("castlefield")) signals.push("Castlefield");

  return [...new Set(signals)];
}

function isCityCentrePlace(place) {
  const address = (place.address || "").toLowerCase();

  const cityCentrePostcode = /\bm[1-4]\b/i.test(place.address || "");

  const cityCentreArea =
    address.includes("manchester") &&
    (
      address.includes("piccadilly") ||
      address.includes("deansgate") ||
      address.includes("northern quarter") ||
      address.includes("spinningfields") ||
      address.includes("oxford road") ||
      address.includes("ancoats") ||
      address.includes("castlefield")
    );

  return cityCentrePostcode || cityCentreArea;
}

function isCorePostcode(place) {
  return /\bm[1-4]\b/i.test(place.address || "");
}

function PlaceCard({ place }) {
  const websiteUrl = toAbsoluteUrl(place.website);
  const phoneHref = getPhoneHref(place.phone);
  const areaSignals = getAreaSignals(place);

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

      {areaSignals.length > 0 ? (
        <p style={{ margin: "0 0 10px", fontSize: 14, opacity: 0.8 }}>
          <strong>Central-area signals:</strong> {areaSignals.join(", ")}.
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

export default function ManchesterCityCentreSandwichGuidePage() {
  const allPlaces = placesData.places || [];
  const cityCentrePlaces = allPlaces.filter(isCityCentrePlace).sort(sortPlaces);

  const corePostcodePlaces = cityCentrePlaces.filter(isCorePostcode);
  const nearbyCentralPlaces = cityCentrePlaces.filter((place) => !isCorePostcode(place));

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
        name: "Sandwich shops in Manchester city centre",
        item: PAGE_URL,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sandwich shops in Manchester city centre",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: cityCentrePlaces.length,
    itemListElement: cityCentrePlaces.map((place, index) => {
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
        <Link href="/">Home</Link> {" / "} <span>Sandwich shops in Manchester city centre</span>
      </nav>

      <h1>Sandwich shops in Manchester city centre</h1>

      <p>
        This page is a practical guide to finding sandwich and deli spots in
        <strong> Manchester city centre</strong>. Instead of making exaggerated
        “best of” claims, it focuses on a simpler and more useful question:
        where can you quickly find relevant sandwich options in central Manchester?
      </p>

      <p>
        For this guide, city centre mainly means businesses with addresses in core
        Manchester postcodes such as <strong>M1, M2, M3 and M4</strong>, plus nearby
        central areas when the address clearly points to a city-centre location.
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
          <li>Finding central Manchester lunch options quickly</li>
          <li>Checking M1 to M4 sandwich and deli locations first</li>
          <li>Planning around stations, offices and walkable city-centre areas</li>
          <li>Jumping to business websites before you visit</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>How the city-centre shortlist works</h2>
        <p>
          This page filters the wider directory into places that look most relevant
          for central Manchester. The strongest signals are city-centre postcodes
          such as M1, M2, M3 and M4, plus address mentions tied to central areas
          like Piccadilly, Deansgate, Northern Quarter, Spinningfields, Oxford Road,
          Ancoats and Castlefield.
        </p>
        <p>
          It is not a review ranking and it does not claim every listing is perfect.
          It is designed to give you a cleaner starting point than a broad directory
          dump, especially if location matters more than anything else.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>City-centre listings</h2>
        <p>
          We found <strong>{cityCentrePlaces.length}</strong> likely city-centre matches
          in the current dataset.
        </p>

        {cityCentrePlaces.length === 0 ? (
          <p>
            No city-centre matches were found in the current dataset. You can still
            browse the full directory on the homepage.
          </p>
        ) : (
          <>
            {corePostcodePlaces.length > 0 ? (
              <section style={{ marginTop: 24 }}>
                <h3>Core M1 to M4 listings</h3>
                <p>
                  These are the places in the current shortlist with the clearest
                  city-centre postcode signals.
                </p>
                <ul style={{ paddingLeft: 0 }}>
                  {corePostcodePlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} />
                  ))}
                </ul>
              </section>
            ) : null}

            {nearbyCentralPlaces.length > 0 ? (
              <section style={{ marginTop: 24 }}>
                <h3>Nearby central-area listings</h3>
                <p>
                  These places still look central based on the address data, but
                  the signal comes from area wording rather than a clear M1 to M4
                  postcode match.
                </p>
                <ul style={{ paddingLeft: 0 }}>
                  {nearbyCentralPlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} />
                  ))}
                </ul>
              </section>
            ) : null}
          </>
        )}
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Quick tips before you choose</h2>
        <p>
          Need something fast? Start with places near your route, station or office.
          Need dietary options? Always confirm directly with the business before
          travelling. Need a group order instead of an individual lunch stop? The
          catering guide is the better next step.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Related pages</h2>
        <p>
          Browse the full directory on the{" "}
          <Link href="/">Manchester Sandwich Finder homepage</Link>.
        </p>
        <p>
          Looking for plant-based options too? Visit{" "}
          <Link href="/vegan-sandwiches-manchester">
            Vegan sandwiches in Manchester
          </Link>
          .
        </p>
        <p>
          Ordering for a team or office? Visit{" "}
          <Link href="/sandwich-catering-manchester">
            Sandwich catering in Manchester
          </Link>
          .
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Frequently asked questions</h2>

        <h3>What counts as Manchester city centre on this page?</h3>
        <p>
          Mainly M1, M2, M3 and M4 addresses, plus clearly central areas where the
          address strongly suggests a city-centre location.
        </p>

        <h3>Are these businesses ranked from best to worst?</h3>
        <p>
          No. This is a practical discovery page, not a scored ranking.
        </p>

        <h3>Is the data always up to date?</h3>
        <p>
          Not always. The page uses open data and should be treated as a starting
          point. Always confirm details before visiting.
        </p>
      </section>

      <section style={{ marginTop: 32, fontSize: 14, opacity: 0.85 }}>
        <p>
          <strong>Method note:</strong> this page is built from open directory data
          and location-based filtering. It is intended as a useful shortlist, not a
          final judgement, review or ranking.
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