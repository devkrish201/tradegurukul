import Link from 'next/link';

export default function MobileMenuItems() {

  const multiPageMenu = [
    { href: '/', label: 'Home' },
    { href: '/course', label: 'Courses' },
    { href: '/mentorship', label: 'Mentorship' },
    { href: '/prop-funding', label: 'Prop Funding' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/testimonial', label: 'Testimonials' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];
 
  const menuItems =  multiPageMenu;

  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}