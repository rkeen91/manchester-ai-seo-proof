import Link from "next/link";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const PAGE_PATH = "/ai-seo-audit-manchester";
const PAGE_URL = `${SITE}${PAGE_PATH}`;

export const metadata = {
  title: "AI SEO Audit Manchester | Search Visibility Review",
  description:
    "A practical AI SEO audit for Manchester businesses, covering indexing, page targeting, structure, internal links and readiness for Google and AI-assisted search.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AI SEO Audit Manchester",
    description:
      "A focused commercial page explaining what an AI SEO audit looks at for Manchester businesses.",
    url: PAGE_URL,
    siteName: "Manchester AI SEO",
    type: "article",
  },
};

export default function AiSeoAuditManchesterPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "AI SEO for Local Businesses in Manchester",
        item: SITE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI SEO Audit Manchester",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an AI SEO audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI SEO audit is a practical review of whether a website is crawlable, indexable, clearly structured and easy for search systems to understand. It looks at traditional SEO foundations as well as how clearly pages answer commercial and local search intent.",
        },
      },
      {
        "@type": "Question",
        name: "Who needs an AI SEO audit in Manchester?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manchester businesses that rely on local discovery, enquiries or service searches can use an AI SEO audit to find weak pages, unclear targeting, indexing problems and internal linking gaps before investing in more content.",
        },
      },
      {
        "@type": "Question",
        name: "Does an AI SEO audit guarantee rankings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No audit can guarantee rankings. The purpose is to identify the practical changes that make a site easier to crawl, understand and match to relevant searches in Google and AI-assisted search experiences.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI SEO Audit Manchester",
    serviceType: "AI SEO audit",
    areaServed: {
      "@type": "City",
      name: "Manchester",
    },
    provider: {
      "@type": "ProfessionalService",
      name: "Manchester AI SEO",
      url: SITE,
    },
    url: PAGE_URL,
    description:
      "A practical AI SEO audit for Manchester businesses covering crawlability, indexing, page targeting, content structure and internal linking.",
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
        <Link href="/">AI SEO Manchester</Link> {" / "} <span>AI SEO audit</span>
      </nav>

      <h1>AI SEO Audit Manchester</h1>

      <p>
        An <strong>AI SEO audit for Manchester businesses</strong> is a practical
        review of whether your website is clear enough to be crawled, indexed,
        understood and matched to the searches that could lead to enquiries.
      </p>

      <p>
        The goal is not to chase vague AI buzzwords. The goal is to find the
        structural and content issues that stop a useful local business website
        from earning visibility in Google Search and newer AI-assisted search
        experiences.
      </p>

      <section
        style={{
          marginTop: 28,
          padding: 16,
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 12,
        }}
      >
        <h2 style={{ marginTop: 0 }}>What the audit checks</h2>
        <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
          <li>Whether important pages can be crawled and indexed</li>
          <li>Whether each page targets a clear commercial or local search intent</li>
          <li>Whether headings, titles and copy make the page purpose obvious</li>
          <li>Whether internal links explain the relationship between pages</li>
          <li>Whether service, location and FAQ content answer real search questions</li>
          <li>Whether the site is structured well enough for AI-assisted search systems to interpret</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Why a Manchester business might need one</h2>
        <p>
          Many local business websites have real services, real customers and
          genuine commercial demand, but the website does not make that clear
          enough. One broad services page may be trying to rank for every offer.
          Important pages may not be linked clearly. Some pages may be indexed,
          while better commercial pages are missing altogether.
        </p>
        <p>
          For a Manchester business, that can mean losing visibility on searches
          where the intent is already strong, such as people comparing local
          providers, looking for a service in the city, or checking whether a
          company is relevant to their specific problem.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Issues an AI SEO audit can uncover</h2>
        <p>
          A useful audit should lead to practical decisions, not a long report
          full of jargon. The most valuable findings are usually the ones that
          show which page should exist, which page should be improved, and which
          links should make the site easier to follow.
        </p>
        <ul style={{ paddingLeft: 18 }}>
          <li>Important services hidden inside generic copy</li>
          <li>Pages that are crawlable but not focused enough to deserve rankings</li>
          <li>Missing child pages for specific commercial searches</li>
          <li>Thin FAQ content that does not answer buying-stage questions</li>
          <li>Weak links between broad parent pages and focused service pages</li>
          <li>Titles and descriptions that do not match the page intent</li>
          <li>Indexing signals that do not support the pages you actually want found</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>How this differs from buzzword content</h2>
        <p>
          AI SEO is often described as if it needs a completely new playbook. In
          practice, the work still starts with strong search fundamentals:
          crawlability, indexation, page targeting, internal linking and useful
          answers. The difference is that pages also need to be easy to interpret,
          summarise and connect to specific user questions.
        </p>
        <p>
          That means a Manchester AI SEO audit should not recommend publishing
          more vague articles just because AI search is popular. It should identify
          the pages and improvements most likely to make the business clearer to
          both people and search systems.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Why structure and internal links matter</h2>
        <p>
          Search systems need to understand which page is broad, which page is
          specific, and which page best answers a query. A broad homepage can set
          the topic, but narrower child pages are often better suited to
          commercial searches.
        </p>
        <p>
          That is why this audit page sits underneath the broader{" "}
          <Link href="/">AI SEO for local businesses in Manchester</Link> page.
          The parent page explains the wider topic. This page focuses on the
          specific audit service and the problems it is meant to uncover.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>What a practical audit should produce</h2>
        <p>
          The output should be a short, prioritised set of actions that can be
          implemented and tested. For a proof-of-concept or small business site,
          that usually means improving a few high-intent pages before expanding
          into a larger content plan.
        </p>
        <ul style={{ paddingLeft: 18 }}>
          <li>A clear view of which pages should be indexed and targeted</li>
          <li>Recommended page titles, headings and page roles</li>
          <li>Internal link improvements between parent and child pages</li>
          <li>Content gaps linked to real commercial questions</li>
          <li>Technical crawl and sitemap checks</li>
          <li>A small next-step plan that can be measured in Search Console</li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Frequently asked questions</h2>

        <h3>What is an AI SEO audit?</h3>
        <p>
          It is a review of how clearly a website can be crawled, indexed,
          understood and matched to relevant searches. It covers traditional SEO
          basics and the extra clarity needed for AI-assisted search experiences.
        </p>

        <h3>Is this only for large websites?</h3>
        <p>
          No. Small Manchester business sites often benefit most because a few
          clearer pages and stronger internal links can make the whole site easier
          to understand.
        </p>

        <h3>Will this guarantee first-page rankings?</h3>
        <p>
          No. The audit is designed to find practical improvements and reduce
          ambiguity. Rankings still depend on competition, authority, relevance,
          implementation quality and time.
        </p>

        <h3>How does this support AI-assisted search visibility?</h3>
        <p>
          AI-assisted search systems need pages that are easy to parse and
          summarise. Clear page roles, direct answers, useful FAQs and sensible
          internal links can make a site easier to understand alongside standard
          Google visibility work.
        </p>
      </section>

      <section style={{ marginTop: 32, fontSize: 14, opacity: 0.85 }}>
        <p>
          <strong>Method note:</strong> this page is the focused proof page for a
          narrow commercial query. The aim is to test whether a clear child page
          can be indexed, earn impressions and start to compete for local AI SEO
          audit searches without making exaggerated ranking claims.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
