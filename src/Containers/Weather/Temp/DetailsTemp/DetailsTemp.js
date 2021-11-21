import React from 'react'

    const detailsTemp = (props) => (
        <div className="container temp w-50 detailsTemp">
            <div className="container d-flex mt-4">
                <div className="col-6">
                    <p>Température Ressenti: </p>
                    <p>Température maximale: </p>
                    <p>Température minimale: </p>
                </div>
                <div className="col-6">
                    <p>Vent: </p>
                    <p>Humidité: </p>
                    <p>Pression: </p>
                </div>
            </div>
        </div>
    );

export default detailsTemp;