import './Hero.css';
import mobileImage from '../../images/image-hero-mobile.png';
import desktopImage from '../../images/image-hero-desktop.png';
import databizImage from '../../images/client-databiz.svg';
import audiophileImage from '../../images/client-audiophile.svg';
import meetImage from '../../images/client-meet.svg';
import makerImage from '../../images/client-maker.svg';

export default function Hero() {
   return (
      <main className='hero'>
         <picture>
            <source media='(min-width:1080px)' srcSet={desktopImage} />
            <img src={mobileImage} className='hero__image' alt='Man with a laptop on center and random geometric shapes around' />
         </picture>
         <h1 className='hero__title'>Make remote work</h1>
         <p className='hero__text'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
         <button className='hero__button button'>Learn more</button>
         <ul className='hero__clients'>
            <li className='hero__client'>
               <a href='#0'>
                  <img className='hero__client__image' src={databizImage} alt='databiz' />
               </a>
            </li>
            <li className='hero__client'>
               <a href='#0' >
                  <img className='hero__client__image' src={audiophileImage} alt='audiophile' />
               </a>
            </li>
            <li className='hero__client'>
               <a href='#0'>
                  <img className='hero__client__image' src={meetImage} alt='meet' />
               </a>
            </li>
            <li className='hero__client'>
               <a href='#0'>
                  <img className='hero__client__image' src={makerImage} alt='maker' />
               </a>
            </li>
         </ul>
      </main>
   )
}