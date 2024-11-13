import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

function TrafficLight() {
    const [light, setLight] = useState('red');

    useEffect(() => {
        const interval = setInterval(() => {
            setLight(prevLight => {
                if (prevLight === 'red') return 'yellow';
                if (prevLight === 'yellow') return 'green';
                if (prevLight === 'green') return 'red';
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="traffic-light">
            <div className={`light ${light === 'red' ? 'light-red' : ''}`}></div>
            <div className={`light ${light === 'yellow' ? 'light-yellow' : ''}`}></div>
            <div className={`light ${light === 'green' ? 'light-green' : ''}`}></div>
        </div>
    );
}

export default TrafficLight;
