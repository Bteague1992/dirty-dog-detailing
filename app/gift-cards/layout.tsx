import type { Metadata } from "next";
import { companyInfo, primaryServiceArea } from "@/data/company-info";

export const metadata: Metadata = {
  title: "Gift Cards | Dirty Dog Detailing",
  description: `Give the gift of a clean car! Purchase gift cards for professional mobile auto detailing services in ${primaryServiceArea}. Perfect for birthdays, holidays, or any occasion.`,
  keywords: [
    "gift cards",
    "auto detailing gift card",
    "car detailing gift card",
    "mobile detailing gift card",
    "Newton NC gift cards",
    "Dirty Dog Detailing gift card",
  ],
  openGraph: {
    title: "Gift Cards | Dirty Dog Detailing",
    description:
      "Give the gift of a clean car! Purchase gift cards for professional mobile auto detailing services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Cards | Dirty Dog Detailing",
    description:
      "Give the gift of a clean car! Perfect for birthdays, holidays, or any occasion.",
  },
  alternates: {
    canonical: "https://dirtydogmobiledetailing.com/gift-cards",
  },
};

export default function GiftCardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

