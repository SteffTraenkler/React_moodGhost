import { Ghost } from 'react-kawaii';
import React, { useState } from 'react';

const Mood = () => {
    const [isHappy, setMood] = useState(true)
    const mood = () => setMood(!isHappy)
    return (
        <div className='ghosty'>
            <Ghost size={600} mood={isHappy ? "blissful" : "sad"} color="#E0E4E8" />
            <button onClick={mood}>Change Mood</button>
        </div>
    )
}
export default Mood

/* <Ghost size={600} mood="lovestruck" color="#E0E4E8" /> */ 