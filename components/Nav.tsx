import Link from 'next/link';

const Nav = () => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Uses', link: '/uses' },
    { name: 'Reading', link: '/books' },
    { name: 'Newsletter', link: '/newsletter' },
    // { name: 'Tech stack', link: '/tech' },
    // { name: 'About', link: '/about' },
    // { name: 'Contact', link: '/contact' },
  ];

  return (
    <nav>
      <ul className='flex'>
        {navItems.map(({ name, link }) => (
          <li className='p-4' key={name}>
            <Link href={link}>
              <span className='text-metal-500 hover:text-white'>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
