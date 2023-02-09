import './counting.css';
import React, { useState, useEffect } from 'react';

function Counting(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    useEffect(() => {
        const intervalId1 = setInterval(() => {
            if (count1 === 6) {
                clearInterval(intervalId1);
            } else {
                setCount1(count1 + 1);
            }
        }, 75);
        const intervalId2 = setInterval(() => {
            if (count2 === 19) {
                clearInterval(intervalId2);
            } else {
                setCount2(count2 + 1);
            }
        }, 50);
        const intervalId3 = setInterval(() => {
            if (count3 === 31) {
                clearInterval(intervalId3);
            } else {
                setCount3(count3 + 1);
            }
        }, 35);
        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
        };
    }, [count1,count2, count3]);
    function pad(n) {
        return n < 10 ? "0" + n : n;
        }
    return(
        <section className="container">
            <div className="text-ux">
                <div className="logo"><i class="fa-solid fa-pen-nib"></i></div>
                <div className="text">
                    <div className="text-a">UX Strategy / Visual Design / Social Media</div>
                    <div className="text-a">Front-End Development</div>
                </div>
            </div>
            <div className="counting">
                <div className="contain">
                    <div className="number">{pad(count1)}</div>
                    <div className="text-counting">
                        <div className="text-cnt">Design</div>
                        <div className="text-cnt1 underline">Award So Far</div>
                    </div>
                </div>
                <div className="contain">
                    <div className="number">{pad(count2)}</div>
                    <div className="text-counting">
                        <div className="text-cnt">International</div>
                        <div className="text-cnt1 underline">Client Countries</div>
                    </div>
                </div>
                <div className="contain">
                    <div className="number">{pad(count3)}</div>
                    <div className="text-counting">
                        <div className="text-cnt">Projects for</div>
                        <div className="text-cnt1">Startup & Fortune 500</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Counting;