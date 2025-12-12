export interface CompanyInfo {
  name: string;
  phone: {
    display: string;
    tel: string; // For tel: links (digits only with +)
  };
  email: string;
  bookingUrl: string;
  tagline: string;
}

export const companyInfo: CompanyInfo = {
  name: "Dirty Dog Detailing",
  phone: {
    display: "(828) 261-6906",
    tel: "+18282616906",
  },
  email: "dirtydogdetailing@proton.me",
  bookingUrl:
    "https://clienthub.getjobber.com/hubs/1960ae80-924e-4efb-8087-3ecb1a0e5004/public/requests/2112808/new",
  tagline: "Mean on dirt. Clean on paint.",
};

