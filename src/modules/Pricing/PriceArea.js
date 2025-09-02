export default function PriceArea() {
  // The 'Link' component from 'next/link' is not available in this environment.
  // It has been replaced with a standard HTML '<a>' tag to ensure compatibility.
  // Added h-100 and d-flex to the card wrappers to ensure they are the same height.
  return (
    <div className="it-price-area pt-60 pb-60">
      <div className="container">
        {/* The row is centered to better handle two cards instead of three */}
        <div className="row justify-content-center">
          {/* Card 1: Starter Plan */}
          <div className="col-xl-4 col-lg-6 col-md-6 mb-60 d-flex">
            <div className="it-price-item-wrap w-100 d-flex flex-column">
              <div className="it-price-category text-center">
                <span>🟠 Starter Plan</span>
              </div>
              <div className="it-price-item flex-grow-1 d-flex flex-column">
                <div className="it-price-category-wrap">
                  <div className="it-price-month text-center">
                    <span>
                      ₹50,000
                    </span>
                  </div>
                </div>
                <div className="it-price-list text-center">
                  <p>For beginners wanting to learn and practice without risking real money.</p>
                  <ul>
                    <li>
                      <i className="fa-light fa-check"></i>
                      Complete Forex & Crypto course
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      Weekly group mentorship
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      Demo Prop Account Access
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      Certificate on completion
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      Community support
                    </li>
                    <li>
                      <i className="fa-light fa-times"></i> {/* Using a cross icon for consistency */}
                      No real money funded account
                    </li>
                     {/* Added invisible placeholders to balance the height */}
                    <li className="invisible"><i className="fa-light fa-check"></i>Placeholder</li>
                    <li className="invisible"><i className="fa-light fa-check"></i>Placeholder</li>
                  </ul>
                </div>
                <a className="it-btn w-100 text-center mt-auto" href="/contact">
                  <span>
                    Purchase now
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
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Pro Plan */}
          <div className="col-xl-4 col-lg-6 col-md-6 mb-60 d-flex">
            {/* The 'active' class highlights this card */}
            <div className="it-price-item-wrap active w-100 d-flex flex-column">
              <div className="it-price-category text-center">
                <span>🔵 Pro Plan</span>
              </div>
              <div className="it-price-item flex-grow-1 d-flex flex-column">
                <div className="it-price-category-wrap">
                  <div className="it-price-month text-center">
                    <span>
                      ₹70,000
                    </span>
                  </div>
                </div>
                <div className="it-price-list text-center">
                  <p>For traders ready to manage real capital after completing training.</p>
                  <ul>
                    <li>
                      <i className="fa-light fa-check"></i>
                      Complete Forex & Crypto course
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      1:1 personal mentorship
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      $10,000 Funded Prop Account
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      Profit withdrawal eligibility
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      80% profit sharing
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      Lifetime access to support groups
                    </li>
                     <li>
                      <i className="fa-light fa-check"></i>
                      Completion certificate
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i> {/* Using a check icon for consistency */}
                      Ideal for serious traders
                    </li>
                  </ul>
                </div>
                <a className="it-btn w-100 text-center mt-auto" href="/contact">
                  <span>
                    Purchase now
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
