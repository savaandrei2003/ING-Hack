
import React from 'react';
import Page from "../common/components/Page";
import './general.css';
export default function Home() {
    return (
        <Page>
            <div>
                <div className='flex flex-col mx-10 '>
                    <div className='mt-3'>
                        <h1 className='text-2xl hello'>Hello, Eduard</h1>
                    </div>     
                </div>
                    <div className=' mx-5 h-64 mt-7 '>
                        <div className='proba h-32 border-b-2 items-center justify-center'>
                            <div className=''>
                                <h1 className='text-2xl '>Today</h1>
                            </div>


                        </div>
                        <div className='bg-white h-32 absolute  w-full'></div>
                    </div>
                
                </div>


        </Page>
    );
    }