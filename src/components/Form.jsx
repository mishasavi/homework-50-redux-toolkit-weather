import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../slices/weatherSlice.js';

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchWeather(city));
        setCity('');
    };

    return (
        <div>
            <input onChange={e => setCity(e.target.value)} type='text' value={city} placeholder='City' />
            <button onClick={handleClick}>Get weather</button>
        </div>
    );
};

export default Form;