import React from 'react'

import { useState, useEffect } from 'react';

import './Reviews.css';

const Reviews = () => {


    const [progressBarWidths, setProgressBarWidths] = useState([]);

    useEffect(() => {
        const spans = document.querySelectorAll('.progress-bar span');
        spans.forEach((span, index) => {
            span.style.width = '${progressBarWidths[index]}%'
        });
    }, [progressBarWidths]);

    useEffect(() => {
        const widths = [90, 80, 70]; // Example widths, replace with your actual data
        setProgressBarWidths(widths);

        // Calculate and set the progress bar widths based on your data

    }, []);
    return (
        <div>
            <div className='acc'>
                <div className='acc1'>
                    <div>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.7-OosZjhsaQHlYpemNsLpwAAAA&pid=Api&P=0&h=180" alt="" />
                    </div>
                    <div className='details'>
                        <h4 className='name'>Barbara Hines</h4>
                        <span className='stars'>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>

                        </span>
                        <p className='content'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ut aliquam ab error vitae dolorum animi culpa fuga corporis officia?</p>
                    </div>
                </div>
                <hr />
                <div className='acc1'>
                    <div>
                        <img src="https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg" alt="" />
                    </div>
                    <div className='details'>
                        <h4 className='name'>Nancy Shepardson</h4>
                        <span className='stars'>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-regular fa-star fa-sm"></i>

                        </span>
                        <p className='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ut aliquam ab error vitae dolorum animi culpa fuga corporis officia?</p>
                    </div>
                </div>

                <hr />
                <div className='acc1'>
                    <div>
                        <img src="https://ttcu.ru/images/company/person.jpg" alt="" />
                    </div>
                    <div className='details'>
                        <h4 className='name'>Troy I. Kyels</h4>
                        <span className='stars'>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star-half-stroke fa-sm"></i>

                        </span>
                        <p className='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ut aliquam ab error vitae dolorum animi culpa fuga corporis officia?</p>
                    </div>
                </div>

            </div>
        </div>
    )
}





export default Reviews