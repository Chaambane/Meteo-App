import React, {Component} from 'react';

class Weather extends Component {
    render() {
        return (
            <div className="container">
                <div>Titre</div>
                <div>Input</div>
                <div>
                    box card :
                    <div> - card Temp</div>
                    <div> - card Détails</div>
                </div>
            </div>
        )
    };
}

export default Weather;