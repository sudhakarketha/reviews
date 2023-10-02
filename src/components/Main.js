import React, { useState, useEffect } from 'react'

import Reviews from './Reviews'
import './Main.css'


const Main = () => {


    const [progressBars, setProgressBars] = useState([
        { label: '5star', width: '90%', count: '14,325' },
        { label: '4star', width: '80%', count: '10,000' },
        { label: '3star', width: '50%', count: '5,000' },
        { label: '2star', width: '40%', count: '3,000' },
        { label: '1star', width: '30%', count: '1,000' },

        // Add more progress bars
    ]);
    return (
        <div>
            <div className='main'>
                <div className='main1'>
                    <div className='lside'>
                        <img src="https://ignorelimits.com/wp-content/uploads/2016/06/hitch-your-wagon-to-a-star.jpg" className='star-img' alt="" />
                        <p className='star-title'>Averqage Rating</p>
                        <span>based on the 23.980 ratings</span>
                    </div>
                    <div className='rside'>
                        {/* <div className='progress-contrainer'>
                            <p>5star</p>
                            <div className='progress-bar'>
                                <span style={{ width: '90%' }}>90</span>
                             
                            </div>
                            <p>14,325</p>
                        </div>
                        <div className='progress-contrainer'>
                            <p>4star</p>
                            <div className='progress-bar'>
                                <span data-width='90%'>90</span>
                            </div>
                            <p>14,325</p>
                        </div>
                        <div className='progress-contrainer'>
                            <p>3star</p>
                            <div className='progress-bar'>
                                <span data-width='90%'>90</span>
                            </div>
                            <p>14,325</p>
                        </div>
                        <div className='progress-contrainer'>
                            <p>2star</p>
                            <div className='progress-bar'>
                                <span data-width='90%'>90</span>
                            </div>
                            <p>14,325</p>
                        </div>
                        <div className='progress-contrainer'>
                            <p>1star</p>
                            <div className='progress-bar'>
                                <span data-width='90%'>90</span>
                            </div>
                            <p>14,325</p>
                        </div> */}

                        {progressBars.map((bar, index) => (
                            <div key={index} className='progress-contrainer'>
                                <p>{bar.label}</p>
                                <div className='progress-bar'>
                                    <span style={{ width: bar.width }}>{bar.count}</span>
                                </div>
                                <p className='count'>{bar.count}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Reviews />
        </div>
    )
}

export default Main