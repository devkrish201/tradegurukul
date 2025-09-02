import Link from 'next/link';

export default function MenuItems() {
  // Define the navigation links in an array for easy management.
  // This matches the site structure we planned.
  const menuLinks = [
    { href: '/', label: 'Home' },
    { href: '/course', label: 'Course' },
    { href: '/mentorship', label: 'Mentorship' },
    { href: '/prop-funding', label: 'Prop Funding' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/testimonial', label: 'Testimonial' },
    { href: '/about-us', label: 'About Us' },
  ];

  return (
    <ul >
      {/* Map over the array to create the list items */}
      {menuLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}