export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: number
  image: string
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why Your Business Must Be Online Today",
    excerpt:
      "Over 80% of customers search online before making a purchase. If your business isn't visible online, you're already losing potential sales.",
    content: `Over 80% of customers search online before making a purchase. If your business isn't visible online, you're already losing potential sales. A simple Google search often decides which brand a customer will trust.

From a professional website to local SEO and social media presence, being online is no longer optional — it's essential. In 2025, even small shops are leveraging Instagram shops, WhatsApp marketing, and Google My Business to grow.

Your business deserves the same opportunity. The earlier you start, the faster you grow.`,
    category: "Digital Marketing",
    author: "AI Ad Service Team",
    date: "2024-12-15",
    readTime: 3,
    image: "/business-online-digital-presence.jpg",
    slug: "why-your-business-must-be-online-today",
  },
  {
    id: "2",
    title: "The Magic of Digital Marketing for Local Business Owners",
    excerpt:
      "Imagine someone searching 'best salon near me'. If your salon doesn't show up, you just lost a customer. This is where Local SEO works wonders.",
    content: `Imagine someone searching "best salon near me". If your salon doesn't show up, you just lost a customer. This is where Local SEO, WhatsApp marketing, and Meta Ads work wonders.

Digital marketing for local businesses helps you:
• Appear in "near me" searches
• Get more walk-ins & calls
• Build trust with online reviews
• Stay ahead of nearby competitors

Local shops, gyms, restaurants, salons, and tuition centers are scaling their sales daily with these simple tools.`,
    category: "Local SEO",
    author: "AI Ad Service Team",
    date: "2024-12-12",
    readTime: 4,
    image: "/local-business-digital-marketing.jpg",
    slug: "digital-marketing-for-local-business-owners",
  },
  {
    id: "3",
    title: "Why Most Businesses Waste Money on Ads (and How to Fix It)",
    excerpt:
      "Running ads without strategy is like throwing money in the air. Most businesses fail because they target the wrong audience or use poor creatives.",
    content: `Running ads without strategy is like throwing money in the air. Most businesses fail because they target the wrong audience, use poor creatives, or don't track performance.

With AI-powered ad campaigns, you can:
• Target the right audience
• Track ROI in real-time
• Optimize every rupee spent
• Get consistent leads and sales

Ads should bring profit, not losses. With the right setup, your money works smarter.`,
    category: "Paid Advertising",
    author: "AI Ad Service Team",
    date: "2024-12-10",
    readTime: 5,
    image: "/digital-advertising-strategy-money-optimization.jpg",
    slug: "why-businesses-waste-money-on-ads",
  },
  {
    id: "4",
    title: "How AI is Transforming the Future of Marketing",
    excerpt:
      "AI is no longer the future — it's the present. From SEO automation to predictive analytics, AI is helping businesses make smarter decisions.",
    content: `AI is no longer the future — it's the present. From SEO automation to predictive analytics, AI is helping businesses make smarter decisions.

AI can:
• Automate repetitive tasks like keyword research
• Personalize ads for every customer
• Improve lead nurturing with chatbots
• Predict what customers want next

Businesses using AI grow faster because they make data-driven decisions. The question is — are you ready to adapt?`,
    category: "AI & Automation",
    author: "AI Ad Service Team",
    date: "2024-12-08",
    readTime: 4,
    image: "/artificial-intelligence-marketing-automation.jpg",
    slug: "ai-transforming-future-of-marketing",
  },
  {
    id: "5",
    title: "Why a Website is the Strongest Salesman for Your Business",
    excerpt:
      "Your website works 24/7 — no breaks, no holidays. It tells your story, builds trust, and converts visitors into customers.",
    content: `Your website works 24/7 — no breaks, no holidays. It tells your story, builds trust, and converts visitors into customers.

A great website is:
• Mobile-friendly & responsive
• Fast-loading and easy to navigate
• SEO-ready to rank on Google
• Professional, secure, and trustworthy

Think of your website as your best employee — one that never stops selling. If you don't have one, you're missing sales every day.`,
    category: "Web Development",
    author: "AI Ad Service Team",
    date: "2024-12-05",
    readTime: 3,
    image: "/professional-website-design-development.jpg",
    slug: "website-strongest-salesman-for-business",
  },
  {
    id: "6",
    title: "Success Story: How a Small Local Store Tripled Its Sales",
    excerpt:
      "A small bakery in Delhi was struggling to get customers. We optimized their Google My Business, ran local Meta Ads, and set up WhatsApp ordering.",
    content: `A small bakery in Delhi was struggling to get customers. We optimized their Google My Business, ran local Meta Ads, and set up a simple WhatsApp ordering system.

In just 6 months, their monthly sales tripled. Customers started ordering online, reviews boosted visibility, and ads brought new faces every day.

Proof that digital marketing isn't just for big brands. Even the smallest business can grow big with the right strategy.`,
    category: "Case Studies",
    author: "AI Ad Service Team",
    date: "2024-12-03",
    readTime: 4,
    image: "/local-bakery-success-story-business-growth.jpg",
    slug: "small-local-store-tripled-sales",
  },
  {
    id: "7",
    title: "The Biggest Mistake in Digital Marketing",
    excerpt:
      "Many business owners try to 'do everything themselves.' From creating ads to writing blogs, they end up wasting time and money.",
    content: `Many business owners try to "do everything themselves." From creating ads to writing blogs, they end up wasting time and money.

The truth? Digital marketing requires:
• The right tools
• Constant learning
• Data-driven strategies

Instead of struggling, businesses should focus on what they do best and let experts handle marketing. Outsourcing saves money, time, and delivers better results.

Don't try to be a "jack of all trades" — focus on growth, let us handle the rest.`,
    category: "Strategy",
    author: "AI Ad Service Team",
    date: "2024-12-01",
    readTime: 3,
    image: "/digital-marketing-mistakes-business-strategy.jpg",
    slug: "biggest-mistake-in-digital-marketing",
  },
  {
    id: "8",
    title: "Knowledge is Power: Why We Share Insights",
    excerpt:
      "At AI Ad Service, we don't just run campaigns — we educate and empower businesses. Because informed clients make better decisions.",
    content: `At AI Ad Service, we don't just run campaigns — we educate and empower businesses.

Why? Because informed clients make better decisions. When you understand how strategies work, you trust the process more.

That's why our blog exists — to give you clarity, confidence, and real steps toward growth. Because your success is our success.`,
    category: "Company Insights",
    author: "AI Ad Service Team",
    date: "2024-11-28",
    readTime: 2,
    image: "/knowledge-sharing-business-education-insights.jpg",
    slug: "knowledge-is-power-why-we-share-insights",
  },
]

export const categories = [
  "All",
  "Digital Marketing",
  "Local SEO",
  "Paid Advertising",
  "AI & Automation",
  "Web Development",
  "Case Studies",
  "Strategy",
  "Company Insights",
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts
  return blogPosts.filter((post) => post.category === category)
}

export function searchBlogs(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.category.toLowerCase().includes(lowercaseQuery),
  )
}
