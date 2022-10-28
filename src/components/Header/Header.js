import './Header.css';
import logoImg from '../../images/logo.svg';
import Navbar from '../Navbar/Navbar';

export default function Header(props) {
   return (
      <header className='header'>
         <img src={logoImg} alt='Snap logo' className='header__logo' />
         <button onClick={() => props.toggleVisibility('menuVisibility')} className='header__button button' aria-label='Open menu button' />
         <Navbar 
            menuVisibility={props.menuVisibility}
            toggleVisibility={props.toggleVisibility} featuresVisibility={props.featuresVisibility} companyVisibility={props.companyVisibility} 
         />
      </header>
   )
};