import Link from 'next/link';

export default function OurPlan() {
  return (
    <div className="it-price-area">
      <div className="container">
        <div className="it-testimonial-title-box text-center">
          <span className="it-section-subtitle">Pricing</span>
          <h2 className="it-section-title-3 pb-30">
            Our <span>Plans</span> 
          </h2>
        </div>

        <div className="row mt-50 justify-content-center">
          {/* ₹50,000 Plan */}
          <div className="col-xl-5 col-lg-6 col-md-6 mb-60">
            <div className="it-price-item-wrap">
              <div className="it-price-category text-center">
                <span>🔹 ₹50,000 Plan</span>
              </div>
              <div className="it-price-item">
                <div className="it-price-category-wrap">
                  <div className="it-price-month text-center">
                    <span>
                      ₹50,000
                    </span>
                  </div>
                </div>
                <div className="it-price-list text-center">
                  <ul>
                    <li><i className="fa-light fa-check"></i>Full Trading Course Access</li>
                    <li><i className="fa-light fa-check"></i>Demo Prop Account for Practice</li>
                    <li><i className="fa-light fa-check"></i>Weekly Group Mentorship</li>
                    <li><i className="fa-light fa-check"></i>Certificate on Completion</li>
                  </ul>
                </div>
                <Link className="it-btn w-100 text-center" href="/contact">
                  <span>
                    Enroll Now
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 7.24023H16"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ₹70,000 Plan */}
          <div className="col-xl-5 col-lg-6 col-md-6 mb-60">
            <div className="it-price-item-wrap active">
              <div className="it-price-category text-center">
                <span>🔸 ₹70,000 Plan</span>
              </div>
              <div className="it-price-item">
                <div className="it-price-category-wrap">
                  <div className="it-price-month text-center">
                    <span>
                       ₹70,000
                    </span>
                  </div>
                </div>
                <div className="it-price-list text-center">
                  <ul>
                    <li><i className="fa-light fa-check"></i>Full Course + 1:1 Mentorship</li>
                    <li><i className="fa-light fa-check"></i>$10,000 Real Funded Prop Account</li>
                    <li><i className="fa-light fa-check"></i>Profit Sharing System</li>
                    <li><i className="fa-light fa-check"></i>Lifetime Access to Community Support</li>
                  </ul>
                </div>
                <Link className="it-btn w-100 text-center" href="/contact">
                  <span>
                    Enroll Now
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 7.24023H16"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Compare Button */}
         <div className="col-12 text-center mt-4 mb-60">
  <Link className="it-btn me-3" href="/pricing">
    <span>
      Compare Full Plans
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
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 7.24023H16"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </Link>

  <Link className="it-btn" href="/pricing">
    <span>
      Enroll Now
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
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 7.24023H16"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}
