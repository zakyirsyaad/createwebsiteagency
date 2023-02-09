import React, { useState } from 'react';
import './faq.css';

function Faq() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    return (
        <div className='container-faq'>
            <div className="box-faq">
                <div className='header-faq'>01. What is our design proccess?</div>
                <button class="btn-faq" onClick={() => setExpanded1(!expanded1)}>
                    {expanded1}
                    Answer
                </button>
                <div className="answer-faq">{expanded1
                    ? 'Design Thinking, according to d.school, are as Follows: Emphatise.'
                    : ''}
                </div>
            </div>
            <div className="box-faq">
                <div className='header-faq'>02. Timeline distribution proccess</div>
                <button class="btn-faq" onClick={() => setExpanded2(!expanded2)}>
                    {expanded2}
                    Answer
                </button>
                <div className="answer-faq">{expanded2
                    ? 'We are timeline distribuion proccess is'
                    : ''}
                </div>
            </div>
            <div className="box-faq">
                <div className='header-faq'>03. Do you Code in React?</div>
                <button class="btn-faq" onClick={() => setExpanded3(!expanded3)}>
                    {expanded3}
                    Answer
                </button>
                <div className="answer-faq">{expanded3
                    ? 'Yes, we are code in react'
                    : ''}
                </div>
            </div>
        </div>
    );
}

export default Faq;