import Features from '../Features/Features';
import './Navbar.css';
import './category.css';
import Company from '../Company/Company';

export default function Navbar(props) {
   return (
      <nav className={props.menuVisibility ? 'navbar'
      : 'navbar navbar--invisible'
      }>
         <button 
            className='navbar__button button' 
            aria-label='Close menu button'
            onClick={()=> props.toggleVisibility('menuVisibility')} 
         />
         <ul className='navbar__list'>
            <li className='navbar__item'>
               <button className='navbar__item__button button' onClick={()=> props.toggleVisibility('featuresVisibility')}>
                  <span className='navbar__item__text'>Features</span>
                  <i className={props.featuresVisibility 
                  ? 'navbar__item__button__icon navbar__item__button__icon--open'
                  : 'navbar__item__button__icon navbar__item__button__icon--closed' } 
                  />
               </button>
               {props.featuresVisibility && <Features />}
            </li>
            <li className="navbar__item">
               <button className="navbar__item__button button" onClick={()=> props.toggleVisibility('companyVisibility')}>
                  <span className='navbar__item__text'>Company</span>
                  <i className={props.companyVisibility 
                  ? 'navbar__item__button__icon navbar__item__button__icon--open'
                  : 'navbar__item__button__icon navbar__item__button__icon--closed' } 
                  />
               </button>
               {props.companyVisibility && <Company />}
            </li>
            <li className='navbar__item'>
               <span className='navbar__item__text'>Careers</span>
            </li>
            <li className='navbar__item'>
               <span className='navbar__item__text'>About</span>
            </li>
         </ul>
         <a href='#0' className='navbar__login'>Login</a>
         <a href='#0' className='navbar__register'>Register</a>
      </nav>
   )
}