
import React from 'react';
import Page from "../common/components/Page";
import './general.css';
import { useState, useEffect } from 'react';
import Card from '../common/components/Card';
import img5 from '../common/assets/img5.png';

export default function Home() {

    // const [homeInfo, setHomeInfo] = useState({
    //     user_name: '',
    //     location_home: '',
    //     index_home: 0,
    //     cards: [],
    // });

    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);
  
    // useEffect(() => {
    //   setIsLoading(true);
  
    //   getHome()
    //     .then(response => {
    //       setHomeInfo(response.data);
  
    //       setIsError(false);
    //       setIsLoading(false);
    //     })
    //     .catch(() => {
    //       setIsError(true);
    //       setIsLoading(false);
    //     });
    // }, []);
    const homeInfo = [
        {
          icon: img5,  
          material: "plastic",
          date: "05.04.2024",
          points: "50 points"
        },
        {
            icon: img5,  
            material: "plastic",
            date: "05.04.2024",
            points: "50 points"
          },
          {
            icon: img5,  
            material: "plastic",
            date: "05.04.2024",
            points: "50 points"
          }
      ];

    return (
        <Page>
            <div className='mx-10'>
                
                <div className='mt-3'>
                    <h1 className='text-2xl hello'>Hello, Eduard</h1>
                </div>     
                
                <div className=' h-full mt-7 '>

                    <div className=''>
                        <div className='flex proba h-32 border-b-2 items-center justify-center'>
                            <div className=''>
                                <h1 className='text-4xl text-white'>500 points</h1>
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

                

            {/* {!isLoading ? (
            !isError && homeInfo.cards.length !== 0 ? (
              <div >
                {homeInfo.cards.map((home) => (
                  <Card
                    title= {home.title}
                    description={home.description}
                    image={home.image}
                    
                  />
                ))}
              </div>
                ) : (
                  <p>Esti prost</p>
                )
              ) : (
                <p>Bravo</p>
            )} */}
            <div className='flex  justify-center items-center mt-5'>
                <div className='flex flex-col align-center justify-center w-full '>
                    {homeInfo.map((home) => (
                    <Card
                        icon={home.icon}
                        material={home.material}
                        date={home.date}
                        points={home.points}
                        
                    />
                    ))}

                </div>
            </div>

                <div className='mt-5'>
                    <h1 className='text-xl hello'>Cashback card</h1>
                </div>

                <div className='flex flex-col w-full h-64 hello-bg mb-28 mt-5 rounded-xl' ></div>

                


                
            </div>


        </Page>
    );
    }