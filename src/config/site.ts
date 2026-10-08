export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Bunny Mummy Wiki",
  shortName: "Bunny Mummy",
  logoText: "BM",
  tagline: "Complete Guides, Characters, Items & Gameplay",
  description: "Your ultimate fan guide to Bunny Mummy! Explore beginner guides, characters, items, gameplay mechanics, secrets and progression tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bunny-mummy.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bunny-mummy.top").hostname.replace(/^www\./, "")}`,
  heroVideoId: "98h-44YRJj0", // Bunny Mummy Quest Pack gameplay
  social: {},
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
