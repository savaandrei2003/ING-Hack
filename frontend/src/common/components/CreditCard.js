import React from 'react';
import img6 from '../assets/img10.png';


const CreditCard = (props) =>{
    const { nume} = props;
    return (

        <div className='flex flex-col w-full h-64 bg-gradient-to-br from-orange-600 to-blue-100 mb-28 mt-5 rounded-xl shadow-xl p-8 text-white'>
  <div className='flex justify-between'>
    <div className='flex flex-col'>
      <span className='text-xs font-semibold'>Titular card</span>
      <span className='text-lg font-bold mt-1'>{nume}</span>
    </div>
    <div className='flex items-center'>
      <img src={img6} alt="Logo Banca" className='h-8'/> {/* Înlocuiește sursa imaginii cu logo-ul băncii */}
    </div>
  </div>
  <div className='flex flex-col justify-end h-full'>
    <div>
      <span className='text-xs font-semibold'>Număr card</span>
      <div className='flex space-x-3 mt-2'>
        <span className='text-lg font-bold'>1234</span>
        <span className='text-lg font-bold'>5678</span>
        <span className='text-lg font-bold'>9012</span>
        <span className='text-lg font-bold'>3456</span>
      </div>
    </div>
    <div className='flex justify-between mt-4'>
      <div>
        <span className='text-xs font-semibold'>Expiră</span>
        <span className='text-sm font-bold block mt-1'>01/25</span>
      </div>
      <div>
        <span className='text-xs font-semibold'>CVV</span>
        <span className='text-sm font-bold block mt-1'>123</span>
      </div>
    </div>
  </div>
</div>

    );

}
export default CreditCard;