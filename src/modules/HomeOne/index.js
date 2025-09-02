import Banner from './Banner';
import Funfact from './Funfact';
import Testimonial from './Testimonial';
import ScrollTop from '@/components/ScrollTop';
import Pricing from './Pricing';
import WhyChoose from './WhyChoose';
import Course from './Course';

export default function HomeOneModules() {
  return (
    <main>
      <Banner />
      <WhyChoose />
      <Course/>
      <Pricing /> 
      <Funfact />
      <Testimonial />
      <ScrollTop />
    </main>
  );
}
