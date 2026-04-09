const SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "AI SEO for Local Businesses in Manchester",
  description:
    "AI SEO for local businesses in Manchester. Learn how to improve visibility in Google Search, AI Overviews, ChatGPT search, and other AI-assisted search experiences with a clearer local search structure.",
  alternates: {
    canonical: SITE,
  },
  openGraph: {
    title: "AI SEO for Local Businesses in Manchester",
    description:
      "A focused page explaining AI SEO for local businesses in Manchester and how to improve visibility in Google and AI-assisted search.",
    url: SITE,
    siteName: "Manchester AI SEO",
    type: "website",
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI SEO for local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI SEO for local businesses means making a website easier for search engines and AI-assisted search systems to crawl, understand and surface. In practice, that usually means clearer service pages, better internal linking, stronger local relevance, and content that directly answers real search questions.",
        },
      },
      {
        "@type": "Question",
        name: "Is AI SEO different from normal SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The foundations are very similar. Good technical SEO, useful content, clear page structure and strong relevance still matter most. The difference is that AI-assisted search experiences also reward pages that are easier to interpret, summarise and cite.",
        },
      },
      {
        "@type": "Question",
        name: "Who is this page for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This page is for Manchester businesses that want to improve visibility in both traditional search results and newer AI-assisted search experiences such as Google AI features and ChatGPT search.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Manchester AI SEO",
    areaServed: "Manchester",
    serviceType: "AI SEO for local businesses",
    url: SITE,
    description:
      "AI SEO and search visibility support for local businesses in Manchester.",
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
      <h1>AI SEO for Local Businesses in Manchester</h1>

      <p>
        If you run a local business in Manchester, it is no longer enough to think
        only about old-style blue-link rankings. People now discover businesses
        through Google Search, AI Overviews, ChatGPT search and other AI-assisted
        search experiences.
      </p>

      <p>
        This page explains what <strong>AI SEO for local businesses in Manchester</strong>
        actually means in practical terms: making your website easier to crawl,
        easier to understand, and easier to surface when people search for what
        you do.
      </p>

      <section
        style={{
          marginTop: 28,
          padding: 16,
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 12,
        }}
      >
        <h2 style={{ marginTop: 0 }}>What AI SEO means in practice</h2>
        <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
          <li>Clear service pages built around real search intent</li>
          <li>Better internal linking so page relationships are easier to follow</li>
          <li>Stronger local relevance for Manchester searches</li>
          <li>Cleaner headings, titles and supporting copy</li>
          <li>Content that answers questions directly enough to be cited or surfaced</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Why local businesses in Manchester need this now</h2>
        <p>
          Search is changing. Businesses still need traditional SEO, but they also
          need pages that make sense inside AI-assisted search journeys. That does
          not mean chasing gimmicks. It means reducing ambiguity so your website is
          easier for search systems to interpret.
        </p>
        <p>
          For a Manchester business, that often means improving how your services,
          locations, customer questions and commercial pages are structured rather
          than just publishing more generic blog content.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>What I would improve on a local business site</h2>
        <p>
          The biggest opportunities usually come from simplifying the site
          structure and matching pages to real search intent.
        </p>
        <ul style={{ paddingLeft: 18 }}>
          <li>Separate service pages instead of one vague catch-all page</li>
          <li>Location-aware pages where local intent actually exists</li>
          <li>Clearer headings and on-page explanations</li>
          <li>Better internal linking between related pages</li>
          <li>Cleaner crawl and indexing setup</li>
          <li>Pages designed to answer the question the searcher actually has</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>AI SEO vs traditional SEO</h2>
        <p>
          The foundations are mostly the same. Strong technical SEO, clear content,
          sensible page targeting and useful information still matter. The added
          focus is on making pages easier to summarise, easier to cite and easier
          to map to specific user questions.
        </p>
        <p>
          That is why a local AI SEO strategy usually starts with the same
          essentials: crawlability, indexability, clear service pages, internal
          links and useful content.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Who this is for</h2>
        <p>
          This is aimed at local businesses in Manchester that want to improve
          visibility in both standard search and newer AI-assisted search
          experiences.
        </p>
        <ul style={{ paddingLeft: 18 }}>
          <li>local service businesses</li>
          <li>professional services firms</li>
          <li>multi-service local companies</li>
          <li>businesses with weak page structure but real demand</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Frequently asked questions</h2>

        <h3>What is AI SEO for local businesses?</h3>
        <p>
          It means making a site easier for search engines and AI-assisted search
          systems to crawl, understand and surface when people search for relevant
          services.
        </p>

        <h3>Is AI SEO completely different from normal SEO?</h3>
        <p>
          No. The fundamentals are still strong SEO fundamentals. The difference is
          that clearer, more directly useful pages are more likely to be surfaced
          or cited in newer search experiences.
        </p>

        <h3>Why focus on Manchester?</h3>
        <p>
          Because local relevance matters. A page that clearly speaks to Manchester
          businesses has a better chance of matching local commercial intent than a
          generic national page.
        </p>
      </section>

      <section style={{ marginTop: 32, fontSize: 14, opacity: 0.85 }}>
        <p>
          <strong>Method note:</strong> this page is designed as a focused proof
          page for a narrow commercial query. The goal is to test whether one clear
          offer page can get indexed, earn impressions and begin ranking for a
          realistic AI-search-related local query.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </main>
  );
}