
import React from 'react';
import Page from "../common/components/Page";
import './general.css';
import { useState, useEffect } from 'react';
import Card from '../common/components/Card';
import img5 from '../common/assets/img5.png';
import axios from 'axios';
import CreditCard from '../common/components/CreditCard';

export default function Home() {

    const [homeInfo, setHomeInfo] = useState({
        user_name: '',
        recycles: [],
        points: 0
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    // useEffect(() => {
    //   setIsLoading(true);
    //   const instance = axios.create({
    //     baseURL: 'http://localhost:5000',
    //     timeout: 1000,
    //     headers: {'X-Custom-Header': 'foobar'}
    //     });

    //     instance.get('/home').then(response => {
    //       setHomeInfo(response.data);
    //       console.log(response.data);
  
    //       setIsError(false);
    //       setIsLoading(false);
    //     })
    //     .catch(() => {
    //       setIsError(true);
    //       setIsLoading(false);
    //     });
    // }, []);
    useEffect(() => {
        setIsLoading(true);
        
        fetch('http://localhost:5000/home', {
          method: 'GET',
          headers: {
            'X-Custom-Header': 'foobar',
            'Content-Type': 'application/json' // This is not necessary for GET requests, but is useful to include if you're also sending data
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setHomeInfo(data);
          console.log(data);
          setIsError(false);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        });
      
      }, []); 

    
    let sum = 0;
    homeInfo.recycles.forEach((recycle) => {
        sum += recycle.points;
    });
   

    return (
        <Page>
            <div className='mx-5'>
                
                <div className='mt-3'>
                    <h1 className='text-2xl hello'>Hello, {homeInfo.user_name}</h1>
                </div>     
                
                <div className=' h-full mt-7 '>

                    <div className=''>
                        <div className='flex proba h-32 border-b-2 items-center justify-center'>
                            <div className=''>
                                <h1 className='text-4xl text-white'>{sum} points</h1>
                            </div>
                        </div>

                        <div className='flex flex-row bg-whitus h-32 absolute items-center justify-around text-white'>
                            
                                <div className='mt-10 flex flex-col items-center justify-center '>
                                    <h1 className='text-xl'> </h1>
                                    <p className='text-sm'>5 trees</p>
                                </div>
                                <div className=' mt-10 flex flex-col items-center justify-center'>
                                    <h1 className='text-sm'>saved today</h1>
                                    <p className='text-sm'>2kg CO2</p>
                                </div>
                                <div className='mt-10  flex flex-col items-center justify-center'>
                                    <h1 className='text-xl'></h1>
                                    <p className='text-sm'>1l water</p>
                                </div>
                            
                        </div>

                    </div>
                    
                    
                </div>

                <div className='mt-5'>
                    <h1 className='text-xl recycle'>Recicle history</h1>
                </div>

                

            {!isLoading ? (
            !isError  ? (
                <div className='flex  justify-center items-center mt-5'>
                    <div className='flex flex-col align-center justify-center w-full '>
                        {homeInfo.recycles.map((home) => (
                        <Card
                            key={home.index}
                            icon={img5}
                            material={home.material}
                            date={home.date}
                            points={home.points}
                            
                        />
                        ))}


                    </div>
                </div>
                ) : (
                  <p>Esti prost</p>
                )
              ) : (
                <p>Bravo</p>
            )}
            

                <div className='mt-5'>
                    <h1 className='text-xl hello'>Cashback card</h1>
                </div>

                {/* <div className='flex flex-col w-full h-64 hello-bg mb-28 mt-5 rounded-xl' ></div> */}
                <CreditCard  nume={homeInfo.user_name}/>

                


                
            </div>


        </Page>
    );
    }