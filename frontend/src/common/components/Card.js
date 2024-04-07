import React from 'react';
import './page.css';
export default function Card({ icon, material, date, points }) {
  return (
    <div className='flex flex-row items-center justify-around bg-white  shadow-xl p-4 recycle-border recycle'>
        <img src={icon} alt='icon' className='bottleicon' />
        <h1 className='text-small  mt-1'>{material}</h1>
        <h1 className='text-small  mt-1'>{date}</h1>
        <p className='text-center mt-2 green'>{points}pt</p>
    </div>
  );
}