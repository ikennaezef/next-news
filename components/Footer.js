import Link from 'next/link';
import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <Link href='/'>
          <h2 className={footerStyles.logo}>
            <span>News</span>Inc
          </h2>
        </Link>
        <ul className={footerStyles.links}>
          <li>Links</li>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/sports'>Sports</Link>
          </li>
          <li>
            <Link href='/entertainment'>Entertainment</Link>
          </li>
          <li>
            <Link href='/technology'>Technology</Link>
          </li>
        </ul>
        <ul className={footerStyles.links}>
          <li>Company</li>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <a href='#'>Careers</a>
          </li>
          <li>
            <a href='#'>Sources</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div className={footerStyles.socials}>
          <p>Follow Us</p>
          <div className={footerStyles.socialLinks}>
            <a href='#'>
              <img src='/images/facebook.png' />
            </a>
            <a href='#'>
              <img src='/images/twitter.png' />
            </a>
            <a href='#'>
              <img src='/images/instagram.png' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer