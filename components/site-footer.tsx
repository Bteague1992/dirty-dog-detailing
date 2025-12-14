import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { serviceAreas } from "@/data/service-area";
import { companyInfo, primaryServiceArea } from "@/data/company-info";

export function SiteFooter() {
  return (
    <footer className="border-t border-dirtydog-silver/20 bg-dirtydog-gray">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold tracking-tight text-dirtydog-offwhite">
              <span className="text-dirtydog-green">DD</span> {companyInfo.name}
            </h3>
            <p className="text-sm text-dirtydog-silver">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-dirtydog-offwhite mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-dirtydog-silver hover:text-dirtydog-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/mobile-auto-detailing-newton"
                  className="text-sm text-dirtydog-silver hover:text-dirtydog-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
                >
                  Mobile Auto Detailing in Newton, NC
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-sm text-dirtydog-silver hover:text-dirtydog-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-sm text-dirtydog-silver hover:text-dirtydog-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-dirtydog-silver hover:text-dirtydog-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-dirtydog-offwhite mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone
                  className="h-4 w-4 text-dirtydog-green mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${companyInfo.phone.tel}`}
                  className="text-sm text-dirtydog-silver hover:text-dirtydog-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
                >
                  {companyInfo.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail
                  className="h-4 w-4 text-dirtydog-green mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-dirtydog-silver hover:text-dirtydog-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  className="h-4 w-4 text-dirtydog-green mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-dirtydog-silver">
                  Mobile service in {primaryServiceArea}
                </span>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-sm font-semibold text-dirtydog-offwhite mb-4">
              Service Area
            </h4>
            <ul className="space-y-1">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-dirtydog-silver">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-dirtydog-silver/20 pt-8 text-center">
          <p className="text-xs text-dirtydog-silver">
            © {new Date().getFullYear()} Dirty Dog Detailing. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
