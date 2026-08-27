"use client";

const posts = [
  {
    category: "AI & DEVELOPMENT",
    title: "Building Production-Ready RAG Applications with LLMs",
    excerpt:
      "A practical guide to designing reliable RAG pipelines using embeddings, vector databases, retrieval strategies, and LLMs.",
    date: "Aug 20, 2026",
    readTime: "7 min read",
    tags: ["LLM", "RAG", "AI"],
    image: "/blog1.png",
    featured: true,
  },

  {
    category: "FULL-STACK",
    title: "Designing Scalable Full-Stack Applications with Next.js",
    excerpt:
      "How I structure modern full-stack applications for performance, maintainability, and long-term scalability.",
    date: "Aug 12, 2026",
    readTime: "6 min read",
    tags: ["Next.js", "React", "Node.js"],
    image: "/blog2.png",
  },

  {
    category: "PERFORMANCE",
    title: "Practical Techniques for Faster Web Applications",
    excerpt:
      "Database optimization, caching, lazy loading, API improvements, and other techniques for reducing application latency.",
    date: "Aug 05, 2026",
    readTime: "5 min read",
    tags: ["Performance", "PostgreSQL", "Redis"],
    image: "/blog3.png",
  },

  {
    category: "AI ENGINEERING",
    title: "When Should You Fine-Tune an LLM?",
    excerpt:
      "Understanding the difference between prompting, RAG, fine-tuning, and when each approach makes sense.",
    date: "Jul 28, 2026",
    readTime: "8 min read",
    tags: ["LLM", "Fine-tuning", "AI"],
    image: "/blog4.png",
  },

  {
    category: "BACKEND",
    title: "Building Reliable REST APIs with Node.js",
    excerpt:
      "Architecture patterns and practical techniques for creating secure, maintainable, and scalable Node.js APIs.",
    date: "Jul 19, 2026",
    readTime: "6 min read",
    tags: ["Node.js", "API", "TypeScript"],
    image: "/blog5.png",
  },

  {
    category: "DATABASE",
    title: "PostgreSQL Query Optimization: What Actually Matters",
    excerpt:
      "A practical look at indexing, query planning, database design, and techniques for improving production performance.",
    date: "Jul 10, 2026",
    readTime: "7 min read",
    tags: ["PostgreSQL", "SQL", "Backend"],
    image: "/blog6.png",
  },
];

export default function Blog() {
  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <section
      id="blog"
      className="bg-black px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.35em] text-purple-400">
              INSIGHTS
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Latest{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Thoughts, technical guides, and lessons from building
              full-stack applications, scalable systems, and AI-powered
              products.
            </p>
          </div>

          <button
            type="button"
            className="hidden text-sm text-gray-400 transition hover:text-white sm:block"
          >
            View all →
          </button>
        </div>

        {/* =========================================================
            FEATURED ARTICLE
        ========================================================= */}
        {featuredPost && (
          <article
            className="
              group mb-8 overflow-hidden rounded-3xl
              border border-white/10
              bg-gradient-to-br from-purple-500/10 via-black to-black
              transition duration-500
              hover:border-purple-400/40
            "
          >
            <div className="grid lg:grid-cols-2">

              {/* -------------------------------------------------
                  FEATURED IMAGE
                  ------------------------------------------------- */}
              <div
                className="
                  relative
                  h-[280px]
                  w-full
                  overflow-hidden
                  sm:h-[340px]
                  lg:h-[430px]
                "
              >
                {/* Image */}
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Dark overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-purple-900/10
                  "
                />

                {/* Purple glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_65%)]
                  "
                />

                {/* Image label */}
                <div className="absolute bottom-5 left-5">
                  <span
                    className="
                      rounded-full
                      border border-white/10
                      bg-black/50
                      px-4 py-2
                      text-xs
                      font-medium
                      tracking-wider
                      text-purple-300
                      backdrop-blur-md
                    "
                  >
                    AI ENGINEERING
                  </span>
                </div>
              </div>

              {/* -------------------------------------------------
                  FEATURED CONTENT
                  ------------------------------------------------- */}
              <div
                className="
                  flex
                  flex-col
                  justify-center
                  p-8
                  sm:p-10
                  lg:p-12
                "
              >
                <span
                  className="
                    mb-4
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                    text-purple-400
                  "
                >
                  {featuredPost.category}
                </span>

                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  {featuredPost.title}
                </h3>

                <p className="mt-5 max-w-xl leading-7 text-gray-400">
                  {featuredPost.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/5
                        px-3 py-1
                        text-xs
                        text-gray-300
                        transition
                        hover:border-purple-400/40
                        hover:text-purple-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    gap-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div className="text-xs text-gray-500">
                    {featuredPost.date} · {featuredPost.readTime}
                  </div>

                  <button
                    type="button"
                    className="
                      w-fit
                      rounded-full
                      bg-white
                      px-5 py-2.5
                      text-sm
                      font-semibold
                      text-black
                      transition
                      duration-300
                      hover:bg-purple-300
                      hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
                    "
                  >
                    Read article →
                  </button>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* =========================================================
            BLOG GRID
        ========================================================= */}
        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {regularPosts.map((post) => (
            <article
              key={post.title}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/[0.02]
                transition
                duration-500
                hover:-translate-y-1
                hover:border-purple-400/40
                hover:bg-purple-500/[0.04]
              "
            >
              {/* -------------------------------------------------
                  CARD IMAGE
                  ------------------------------------------------- */}
              <div
                className="
                  relative
                  h-[190px]
                  w-full
                  overflow-hidden
                "
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="
                      rounded-full
                      border border-white/10
                      bg-black/50
                      px-3 py-1.5
                      text-[10px]
                      font-semibold
                      tracking-[0.15em]
                      text-purple-300
                      backdrop-blur-md
                    "
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* -------------------------------------------------
                  CARD CONTENT
                  ------------------------------------------------- */}
              <div className="flex flex-1 flex-col p-6">

                <h3
                  className="
                    text-xl
                    font-bold
                    leading-snug
                    transition
                    duration-300
                    group-hover:text-purple-300
                  "
                >
                  {post.title}
                </h3>

                <p
                  className="
                    mt-3
                    flex-1
                    text-sm
                    leading-6
                    text-gray-400
                  "
                >
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border border-white/10
                        px-2.5 py-1
                        text-[11px]
                        text-gray-400
                        transition
                        hover:border-purple-400/30
                        hover:text-purple-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/10
                    pt-5
                  "
                >
                  <span className="text-xs text-gray-500">
                    {post.date} · {post.readTime}
                  </span>

                  <button
                    type="button"
                    className="
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:text-purple-400
                    "
                  >
                    Read →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================
            MOBILE VIEW ALL
        ========================================================= */}
        <div className="mt-10 text-center sm:hidden">
          <button
            type="button"
            className="
              text-sm
              text-gray-400
              transition
              hover:text-white
            "
          >
            View all articles →
          </button>
        </div>
      </div>
    </section>
  );
}