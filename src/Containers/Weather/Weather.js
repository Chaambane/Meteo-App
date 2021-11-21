import React, {Component} from 'react';
import Title from '../../Components/Title/Title';
import FormInput from '../FormInput/FormInput';
import Temp from './Temp/Temp';

class Weather extends Component {
    render() {
        return (
            <main className="container-fluid p-2">
                <Title>Météo-App</Title>
                <FormInput/>
                <Temp/>
            </main>
        )
    };
}

export default Weather;