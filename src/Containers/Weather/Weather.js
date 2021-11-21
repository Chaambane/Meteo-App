import React, {Component} from 'react';
import Title from '../../Components/Title/Title';

class Weather extends Component {
    render() {
        return (
            <main className="container-fluid p-2">
                <Title>Météo-App</Title>
                <div>Input</div>
                <div>
                    box card :
                    <div> - card Temp</div>
                    <div> - card Détails</div>
                </div>
            </main>
        )
    };
}

export default Weather;