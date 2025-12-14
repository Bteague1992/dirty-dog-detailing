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
    "https://app.squareup.com/appointments/book/57g7r1ig5r0r0c/LTT9N9N1KFG1Z/start",
  tagline: "Mean on dirt. Clean on paint.",
};

// Service area constants
export const primaryServiceArea = "Newton, NC";
export const serviceAreaShort = "Newton, NC and nearby areas";
export const serviceAreaLong = "Newton, NC";
