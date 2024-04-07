import React from 'react';
import './page.css';

// import { faHamburger, faHome, faMap, faSearch } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/Vector.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import {  Link } from 'react-router-dom';


export default function Page({ children }) {

  const icons = [
    { icon: img1, label: '' },
    { icon: img2, label: 'camera' },
    { icon: img3, label: 'map' },
    { icon: img4, label: 'validation' }
  ];

  return (
    <div className='page flex flex-col'>
      <div className='no-shrink flex flex-col sm:flex-col-reverse'>
        <div className='flex items-center justify-center text-center pt-8 sm:pt-5 navbar'>
          <div className='flex flex-row sm:pl-5'>
            <h1 className='green text-3xl sm:text-xl'>ING</h1>
            <h1 className='wave text-3xl sm:text-xl'>reen</h1>
          </div>
        </div>
        
      </div>   
      <div className="pt-20">{children}</div>

      <div className='flex flex-row justify-center items-center w-3/4'>
        <div className='flex flex-row  h-16 side justify-around items-center  sm:w-3/4 lg:w-1/3 sm:rounded-2xl'>
          {icons.map((icon, index) => (
            <div className='flex flex-col items-center justify-center' key={index}>
              <Link to={`/${icon.label.toLowerCase()}`}> 
                {/* <FontAwesomeIcon icon={icon.icon} className='text-orange' /> */}
                <img src={icon.icon } alt='icon' className='homeicon' />
                {/* <p className='text-xs'>{icon.label}</p> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
