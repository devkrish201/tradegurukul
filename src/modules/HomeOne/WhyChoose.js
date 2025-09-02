import Image from 'next/image';
import Link from 'next/link';
import { Check, Briefcase, Users, BarChart3 } from 'lucide-react';

export default function WhyChoose() {
  return (
    <div className="it-about-4-area inner-about-style pt-60 pb-60">
      <div className="container">
        <div className=" align-items-center">
         

            <div className="it-about-3-title-box">
              <span className="it-section-subtitle">
                <Image
                  src="/img/category/inner.svg"
                  alt=""
                  width={18}
                  height={18}
                />{' '}
                why choose us
              </span>
              <h2 className="it-section-title-3 pb-30">
                Why Choose <span>TheTradingGurukul</span>?
              </h2>
              <p className="it-section-subtitle-3">

                We are India's premier trading education platform, focused on transforming
                beginners into funded professional traders through structured learning and mentorship.
              </p>
            </div>
            <div className="it-about-3-mv-box">
              <div className="row">

                {/* Item 1 */}
                <div className="col-md-6 mb-4">
                  <div className="it-about-4-list-wrap d-flex align-items-start">
                    <div className="it-about-4-list-icon">
                      <span>
                        <Check size={24} />
                      </span>
                    </div>
                    <div className="it-about-3-mv-item">
                      <span className="it-about-3-mv-title">
                        Structured Training in Forex & Crypto
                      </span>
                      <p>
                        Comprehensive trading education with proven methodologies,
                        covering both Forex and Cryptocurrency markets with practical strategies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="col-md-6 mb-4">
                  <div className="it-about-4-list-wrap d-flex align-items-start">
                    <div className="it-about-4-list-icon">
                      <span>
                        <Briefcase size={24} />
                      </span>
                    </div>
                    <div className="it-about-3-mv-item">
                      <span className="it-about-3-mv-title">
                        Prop Funded Accounts up to $10,000
                      </span>
                      <p>
                        Access real trading capital after completing training and evaluation.
                        Trade with our money and keep up to 80% of your profits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="col-md-6 mb-4">
                  <div className="it-about-4-list-wrap d-flex align-items-start">
                    <div className="it-about-4-list-icon">
                      <span>
                        <Users size={24} />
                      </span>
                    </div>
                    <div className="it-about-3-mv-item">
                      <span className="it-about-3-mv-title">
                        Live Mentorship & Personal Guidance
                      </span>
                      <p>
                        Weekly live sessions, 1:1 mentorship calls, and continuous support
                        from experienced trading professionals throughout your journey.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="col-md-6 mb-4">
                  <div className="it-about-4-list-wrap d-flex align-items-start">
                    <div className="it-about-4-list-icon">
                      <span>
                        <BarChart3 size={24} />
                      </span>
                    </div>
                    <div className="it-about-3-mv-item">
                      <span className="it-about-3-mv-title">
                        Emotion-Free, Strategy-Based Trading
                      </span>
                      <p>
                        Learn systematic, data-driven trading approaches that eliminate
                        emotional decisions and focus on consistent, profitable strategies.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="it-about-3-btn-box p-relative">
              <Link className="it-btn" href="/pricing">
                <span>
                  View Our Plans
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1.24023L16 7.24023L11 13.2402"
                      stroke="currentcolor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 7.24023H16"
                      stroke="currentcolor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <div className="it-about-3-left-shape-3 d-none d-xl-block">
                <Image
                  src="/img/about/about-3-shap-3.png"
                  alt=""
                  width={266}
                  height={52}
                />
              </div>
            </div>
        
        </div>
      </div>
    </div>
  );
}
