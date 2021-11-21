import React, {Component} from 'react';
import Title from '../../Components/Title/Title';
import FormInput from '../FormInput/FormInput';

class Weather extends Component {
    render() {
        return (
            <main className="container-fluid p-2">
                <Title>Météo-App</Title>
                <FormInput/>
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