import React from 'react'

    const detailsTemp = (props) => (
        <div className="container temp w-50 detailsTemp rounded">
            <div className="container d-flex mt-4">
                <div className="col-6">
                    <p>Température Ressentie: <span className="fs-4">{props.main.feels_like}°</span></p>
                    <p>Température maximale: <span className="fs-4">{props.main.temp_max}°</span></p>
                    <p>Température minimale: <span className="fs-4">{props.main.temp_min}°</span></p>
                </div>
                <div className="col-6">
                    <p>Vent: <span className="fs-4">{props.wind.speed} Km/h</span></p>
                    <p>Humidité: <span className="fs-4">{props.main.humidity}</span></p>
                    <p>Pression: <span className="fs-4">{props.main.pressure} Pa</span></p>
                </div>
            </div>
        </div>
    );

export default detailsTemp;