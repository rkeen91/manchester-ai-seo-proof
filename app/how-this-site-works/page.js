import Link from "next/link";

const SITE = "https://manchester-sandwich-finder.vercel.app";
const PAGE_PATH = "/how-this-site-works";
const PAGE_URL = `${SITE}${PAGE_PATH}`;

export const metadata = {
  title: "How this site works | Manchester Sandwich Finder",
  description:
    "A plain-English explanation of how Manchester Sandwich Finder is built, why the pages are structured the way they are, and what this project is trying to prove about search and AI-ready local content.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How this site works | Manchester Sandwich Finder",
    description:
      "A plain-English explanation of how this proof-of-concept local search site is built and what it is designed to test.",
    url: PAGE_URL,
    siteName: "Manchester Sandwich Finder",
    type: "article",
  },
};

export default function HowThisSiteWorksPage() {
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
        name: "How this site works",
        item: PAGE_URL,
      },
    ],
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
        <Link href="/">Home</Link> {" / "} <span>How this site works</span>
      </nav>

      <h1>How this site works</h1>

      <p>
        Manchester Sandwich Finder is a small proof-of-concept site built to test a
        simple question: can a local site become easier for search engines and AI
        systems to understand when its pages are organised around clear user
        intent?
      </p>

      <p>
        This project is not trying to prove instant rankings or make exaggerated
        claims. It is designed to show what a clean, structured, internally linked
        local site can look like when the content is built for both people and
        machines to understand more easily.
      </p>

      <section
        style={{
          marginTop: 28,
          padding: 16,
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 12,
        }}
      >
        <h2 style={{ marginTop: 0 }}>What this project is trying to prove</h2>
        <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
          <li>That local pages can be built around real search intent</li>
          <li>That a small site can still be crawlable and indexable with simple structure</li>
          <li>That internal linking helps make page relationships clearer</li>
          <li>That focused topic pages are easier to understand than one vague catch-all page</li>
          <li>That a small demo site can act as a useful AI-search and SEO proof of concept</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Why build a site like this at all?</h2>
        <p>
          Many local sites try to say everything on one page. That usually makes
          the content weaker, less specific and harder to interpret. This site
          takes the opposite approach. It starts with one broad directory, then
          breaks the topic into smaller pages based on common user needs.
        </p>
        <p>
          That structure is useful for human visitors, but it also makes the site
          easier for search systems to parse. Instead of one vague page about
          sandwiches in Manchester, the site now has clearer paths for city-centre
          intent, vegan intent and catering intent.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Where the data comes from</h2>
        <p>
          The directory is built from open listing data stored directly inside the
          project. That keeps the site simple to deploy and avoids relying on live
          third-party fetches at build time.
        </p>
        <p>
          Because the source data is open and lightweight, it may be incomplete,
          simplified or out of date. That is why the guide pages are written as
          practical shortlists rather than definitive rankings or claims about the
          best businesses in Manchester.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>What makes a page more AI-ready or search-ready?</h2>
        <p>
          For this project, that means something very practical. A page should have
          a clear purpose, a clear title, useful supporting copy, relevant internal
          links and content that explains what the page is actually for.
        </p>
        <p>
          The goal is not to “hack” search. The goal is to reduce ambiguity. When a
          page is focused and well connected to related pages, it becomes easier
          for search engines and AI systems to understand what it covers and when
          it may be useful.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>How the pages are structured</h2>
        <p>
          The site uses one homepage plus several focused guide pages. Each guide
          targets a different type of search intent.
        </p>
        <ul style={{ paddingLeft: 18 }}>
          <li>
            <Link href="/sandwich-shops-manchester-city-centre">
              Sandwich shops in Manchester city centre
            </Link>{" "}
            is focused on central-location intent.
          </li>
          <li>
            <Link href="/vegan-sandwiches-manchester">
              Vegan sandwiches in Manchester
            </Link>{" "}
            is focused on plant-based and menu-flexibility intent.
          </li>
          <li>
            <Link href="/sandwich-catering-manchester">
              Sandwich catering in Manchester
            </Link>{" "}
            is focused on office, event and group-order intent.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>What this site does not claim</h2>
        <p>
          This project does not claim that a structure like this guarantees top
          rankings. It also does not claim that every listing is perfect or that
          every business included is the best option for every user.
        </p>
        <p>
          The point is to show a repeatable process: choose a local topic, split it
          into useful search-intent pages, connect those pages clearly, and make
          the site easier for both users and machines to understand.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Why this matters as a demo</h2>
        <p>
          This site is meant to be more than a toy project. It can also act as a
          simple example for future demos, webinars or client conversations about
          what “AI-ready” or “SEO-ready” local content can look like in practice.
        </p>
        <p>
          That makes it useful even before it earns meaningful traffic. It shows
          the method, the structure and the logic behind the approach.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Related pages</h2>
        <p>
          Start from the <Link href="/">homepage directory</Link> or browse one of
          the focused guides.
        </p>
        <ul style={{ paddingLeft: 18 }}>
          <li>
            <Link href="/sandwich-shops-manchester-city-centre">
              Sandwich shops in Manchester city centre
            </Link>
          </li>
          <li>
            <Link href="/vegan-sandwiches-manchester">
              Vegan sandwiches in Manchester
            </Link>
          </li>
          <li>
            <Link href="/sandwich-catering-manchester">
              Sandwich catering in Manchester
            </Link>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 32, fontSize: 14, opacity: 0.85 }}>
        <p>
          <strong>Method note:</strong> this page explains the structure and
          purpose of the site. It is part of a proof-of-concept project focused on
          crawlability, indexability, internal linking and clearer local-topic
          organisation.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}