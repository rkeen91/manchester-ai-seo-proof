import Link from "next/link";
import placesData from "@/data/places.json";

const SITE = "https://manchester-sandwich-finder.vercel.app";
const PAGE_PATH = "/sandwich-catering-manchester";
const PAGE_URL = `${SITE}${PAGE_PATH}`;

export const metadata = {
  title: "Sandwich catering in Manchester | Manchester Sandwich Finder",
  description:
    "A practical guide to sandwich catering options in Manchester, built from open directory data and simple business-use signals.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Sandwich catering in Manchester | Manchester Sandwich Finder",
    description:
      "A practical guide to sandwich catering options in Manchester.",
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

function getCateringSignals(place) {
  const text = `${place.name || ""} ${place.address || ""} ${place.website || ""}`.toLowerCase();
  const signals = [];

  if (text.includes("catering")) signals.push("catering");
  if (text.includes("corporate")) signals.push("corporate");
  if (text.includes("office")) signals.push("office");
  if (text.includes("events")) signals.push("events");
  if (text.includes("platters")) signals.push("platters");
  if (text.includes("buffet")) signals.push("buffet");
  if (text.includes("deli")) signals.push("deli");
  if (text.includes("bakery") || text.includes("bakes")) signals.push("bakery");
  if (text.includes("sandwich")) signals.push("sandwich");
  if (text.includes("lunch")) signals.push("lunch");

  return [...new Set(signals)];
}

function looksPossiblyUsefulForCatering(place) {
  const signals = getCateringSignals(place);
  return signals.length > 0;
}

function isManchesterAddress(place) {
  const address = (place.address || "").toLowerCase();
  return /\bm\d{1,2}\b/i.test(place.address || "") || address.includes("manchester");
}

function PlaceCard({ place }) {
  const websiteUrl = toAbsoluteUrl(place.website);
  const phoneHref = getPhoneHref(place.phone);
  const signals = getCateringSignals(place);

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
          <strong>Possible catering signals:</strong> {signals.join(", ")}.
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

export default function SandwichCateringManchesterPage() {
  const allPlaces = placesData.places || [];
  const likelyPlaces = allPlaces
    .filter(looksPossiblyUsefulForCatering)
    .sort(sortPlaces)
    .slice(0, 30);

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
        name: "Sandwich catering in Manchester",
        item: PAGE_URL,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sandwich catering options in Manchester",
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
        <Link href="/">Home</Link> {" / "} <span>Sandwich catering in Manchester</span>
      </nav>

      <h1>Sandwich catering in Manchester</h1>

      <p>
        This page is a practical guide for people looking for
        <strong> sandwich catering in Manchester</strong>, whether that means
        office lunches, team orders, client meetings, training days or informal events.
      </p>

      <p>
        It is not a hand-checked ranking of the best caterers in Manchester.
        Instead, it is a faster way to build a shortlist from open directory data,
        then move quickly to the business website or phone number to confirm menus,
        minimum order sizes, delivery coverage and lead times.
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
          <li>Building a fast shortlist for office or team lunch orders</li>
          <li>Finding Manchester businesses that may handle platter or group orders</li>
          <li>Jumping quickly to websites and contact details</li>
          <li>Comparing Manchester-based options with nearby-area listings</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>How the catering shortlist works</h2>
        <p>
          This page uses practical matching signals from the available open data.
          A place may appear here because its name, address or website includes
          wording linked to catering, office orders, events, platters, buffets,
          deli service, lunch or sandwiches.
        </p>
        <p>
          That does not guarantee a dedicated catering menu. It does make the page
          more useful than a generic directory list, because it helps you narrow
          the field before checking the important details directly with the business.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Manchester catering shortlist</h2>
        <p>
          We found <strong>{likelyPlaces.length}</strong> likely matches in the current dataset.
        </p>

        {likelyPlaces.length === 0 ? (
          <p>
            No likely catering matches were found in the current dataset. You can
            still browse the full directory on the homepage.
          </p>
        ) : (
          <>
            {manchesterPlaces.length > 0 ? (
              <section style={{ marginTop: 24 }}>
                <h3>Manchester-based listings first</h3>
                <p>
                  These are the places in the shortlist whose address data most clearly
                  points to Manchester.
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
                <h3>Nearby-area listings</h3>
                <p>
                  These places still matched the catering-style signals, but their
                  address data points to nearby areas rather than a clearly Manchester address.
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
        <h2>What to check before ordering</h2>
        <p>
          Before placing a catering order, check the current menu, minimum order value,
          delivery area, notice period, dietary options and whether the business handles
          platters, boxed lunches or larger group requests.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Related pages</h2>
        <p>
          Browse the full directory on the{" "}
          <Link href="/">Manchester Sandwich Finder homepage</Link>.
        </p>
        <p>
          Need an individual lunch stop instead of catering? Visit{" "}
          <Link href="/sandwich-shops-manchester-city-centre">
            Sandwich shops in Manchester city centre
          </Link>
          .
        </p>
        <p>
          Need plant-based options too? Visit{" "}
          <Link href="/vegan-sandwiches-manchester">
            Vegan sandwiches in Manchester
          </Link>
          .
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Frequently asked questions</h2>

        <h3>Are all listings on this page dedicated catering companies?</h3>
        <p>
          No. This is a practical shortlist of businesses that may be useful for
          sandwich catering searches, not a certified catering-only directory.
        </p>

        <h3>Why are some listings included even if catering is not in the business name?</h3>
        <p>
          Because open directory data is limited, this page uses practical relevance
          signals such as deli, lunch, sandwich, platter and event-related wording.
        </p>

        <h3>Should I still confirm order details directly?</h3>
        <p>
          Yes. Menus, lead times, minimum orders, delivery coverage and dietary
          options can all change.
        </p>
      </section>

      <section style={{ marginTop: 32, fontSize: 14, opacity: 0.85 }}>
        <p>
          <strong>Method note:</strong> this page is built from open directory data
          and light relevance filtering. It is intended as a useful shortlist, not
          a final judgement, review or ranking.
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