import SingleTestimonialTwo from '@/components/Testimonial/Two';
import Testimonials from '@/data/testimonials';

export default function TestimonialArea() {
  return (
    <div className="it-testimonial-5-area it-testimonial-style-2 p-relative pt-60 pb-60">
      <div className="container">
        <div className="row">
          {Testimonials.map((testimonial) => {
            return (
              <div key={testimonial.id} className="col-xl-6 col-lg-6 mb-30">
                <SingleTestimonialTwo
                  authorName={testimonial.authorName}
                  authorImg={testimonial.image}
                  designation={testimonial.designation}
                  description={testimonial.bio}
                />
              </div>
            );
          }).slice(0, 6)}
        </div>
      </div>
    </div>
  );
}
