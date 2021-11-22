import React from 'react';
import DetailsTemp from './DetailsTemp/DetailsTemp';

const temp = (props) => (
    <>
        <div className="container title temp border rounded-3 w-25">
            <div className="text-center">
                <h2 className="fw-bold lh-lg">{props.name}</h2>
                <h3 className="fw-bold fs-1 text-success">{Math.round(props.main.temp)}°</h3>
                <div className="p-2">
                    <p className="fs-5">{props.weather[0].description}</p>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <DetailsTemp {...props}/>
    </>
);

export default temp;