import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='text-metal-500 text-sm bg-midnight-500 pt-10 px-10 pb-8 border-gray-800'>
      <div className='max-w-xl mx-auto mb-6'>
        <h5 className='font-semibold text-gray-100'>About me</h5>
        <p className='text-metal-500'>
          Hi, my name is Chris. My day-to-day role is Head of Engineering,
          I&apos;m an avid developer and I have a passion for developing both
          people and products.
        </p>
        <h5 className='font-semibold text-gray-100 mt-4'>Social links</h5>
        <p>Find me here...</p>
        <nav>
          <ul className='flex flex-row gap-x-5'>
            <li>
              <Link href='https://twitter.com/Chris_GBR' passHref>
                <a target='_blank'>
                  <FaTwitter size='30px' className='hover:text-white' />
                </a>
              </Link>
            </li>
            <li>
              <Link
                href='https://www.linkedin.com/in/chris-barber-riley/'
                passHref
              >
                <a target='_blank'>
                  <FaLinkedin size='30px' className='hover:text-white' />
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://github.com/ChrisBarberRiley' passHref>
                <a target='_blank'>
                  <FaGithub size='30px' className='hover:text-white' />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className='text-center'>
        All rights reserved &copy; Chris Barber-Riley {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
