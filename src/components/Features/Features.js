import './Features.css';

export default function Features() {
   return (
      <ul className='category features'>
         <li className='category__item features__item'>
            <a href="#0" className="category__item__link">
               <i className='features__icon features__icon--todo-list' /> 
               Todo List
            </a> 
         </li>
         <li className='category__item features__item'>
            <a href="#0" className="category__item__link">
               <i className='features__icon features__icon--calendar' /> 
               Calendar
            </a> 
         </li>
         <li className='category__item features__item'>
            <a href="#0" className="category__item__link">
               <i className='features__icon features__icon--reminders' /> 
               Reminders
            </a> 
         </li>
         <li className='category__item features__item'>
            <a href="#0" className="category__item__link">
               <i className='features__icon features__icon--planning' /> 
               Planning
            </a> 
         </li>
      </ul>
   )
}