// components/Footer.js

import Image from 'next/image';
import Link from 'next/link';

export default function Footer(props) {
  const { footerLogo } = props;
  const footerStyle = { backgroundImage: `url('/img/footer/bg-1-1.jpg')` };

  // New link data
  const quickLinks = [
    { href: '/course', label: 'Course' },
    { href: '/mentorship', label: 'Mentorship' },
    { href: '/prop-funding', label: 'Prop Funding' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/testimonial', label: 'Testimonial' },
  ];

  const resources = [
    { href: '/about-us', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
  ];

  return (
    <footer>
      <div
        className="it-footer-area it-footer-bg black-bg relative pt-120 pb-90"
        style={footerStyle}
      >
        <div className="container">
          <div className="row">
            {/* Column 1: Logo and About */}
            <div className="col-xl-5 col-lg-4 col-md-6 mb-50">
              <div className="it-footer-widget footer-col-1">
                <div className="it-footer-logo pb-25">
                  <Link href="/">
                    <Image
                      src={`/img/logo/${footerLogo || 'logo-white.png'}`}
                      alt="TheTradingGurukul Logo"
                      width={151}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="it-footer-text pb-5">
                  <p>
                    TheTradingGurukul™ <br /> Learn. Trade. Get Funded.
                  </p>
                </div>
                <div className="it-footer-social">
                  <a href="#" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="#" aria-label="Telegram">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="it-footer-widget footer-col-2">
                <h4 className="it-footer-title">Quick Links:</h4>
                <div className="it-footer-list">
                  <ul>
                    {quickLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>
                          <i className="fa-regular fa-angle-right"></i>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 3: Resources */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="it-footer-widget footer-col-3">
                <h4 className="it-footer-title">Resources:</h4>
                <div className="it-footer-list">
                  <ul>
                    {resources.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>
                          <i className="fa-regular fa-angle-right"></i>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Copyright Area --- */}
      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-copyright-text text-center">
                <p>
                  © {new Date().getFullYear()} TheTradingGurukul. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}