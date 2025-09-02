import { Award, Languages, BadgeCheck, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="it-about-4-area inner-about-style pt-60 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-4-thumb-wrap d-flex align-items-center justify-content-center justify-content-lg-end">
              <div className="it-about-4-thumb-double d-flex flex-column">
                <Image
                  className="mb-20"
                  src="/img/about/thumb12.jpg"
                  alt="Trading Gurukul students"
                  width={236}
                  height={350}
                  style={{ height: 'auto' }}
                />
                <Image
                  src="/img/about/thumb15.jpg"
                  alt="Trading Gurukul mentorship session"
                  width={236}
                  height={350}
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-about-4-thumb-single">
                <Image
                  src="/img/about/thumb13.jpg"
                  alt="Trading Gurukul platform"
                  width={304}
                  height={600}
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-3-title-box">
              <h2 className="it-section-title-3 pb-30">
                Who We <span>Are</span>
              </h2>
              <p>
                TheTradingGurukul is a Raipur-based trading education platform focused on real-world financial skill-building. We teach students how to trade in global Forex and Crypto markets using professional strategies.
              </p>
            </div>

            <div className="it-about-3-mv-box">
              <div className="it-about-3-mv-item">
                <span className="it-about-3-mv-title mb-20">
                  What Makes Us Different?
                </span>
                {/* The list has been updated to use the icon-based layout */}
                <div className="row">
                    <div className="col-12 mb-15">
                        <div className="it-about-4-list-wrap d-flex align-items-start">
                            <div className="it-about-4-list-icon"><span><Award /></span></div>
                            <div className="it-about-3-mv-item"><span className="it-about-3-mv-title fs-6">Real funding opportunities post-training</span></div>
                        </div>
                    </div>
                    <div className="col-12 mb-15">
                        <div className="it-about-4-list-wrap d-flex align-items-start">
                            <div className="it-about-4-list-icon"><span><Languages /></span></div>
                            <div className="it-about-3-mv-item"><span className="it-about-3-mv-title fs-6">Practical, Hindi-friendly instruction</span></div>
                        </div>
                    </div>
                    <div className="col-12 mb-15">
                        <div className="it-about-4-list-wrap d-flex align-items-start">
                            <div className="it-about-4-list-icon"><span><BadgeCheck /></span></div>
                            <div className="it-about-3-mv-item"><span className="it-about-3-mv-title fs-6">Proven track record with funded traders</span></div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="it-about-4-list-wrap d-flex align-items-start">
                            <div className="it-about-4-list-icon"><span><Users /></span></div>
                            <div className="it-about-3-mv-item"><span className="it-about-3-mv-title fs-6">Community-driven mentorship approach</span></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="it-about-3-title-box mt-40">
              <h3 className="it-section-title-3 pb-20" style={{ fontSize: '24px' }}>
                Our Goal
              </h3>
              <p>
                To transform beginners into independent, funded traders — even if they start with zero experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
