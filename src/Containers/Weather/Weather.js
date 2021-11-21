import axios from 'axios';
import React, {Component} from 'react';
import Title from '../../Components/Title/Title';
import FormInput from '../FormInput/FormInput';
import Temp from './Temp/Temp';

class Weather extends Component {
    state= {
        weather: ""
    }


    handleLoadData = async (cityName) => {
        const URL = "https://api.openweathermap.org/data/2.5/weather";
        const APIKEY = "e7f6eab6c0d5777e0ce75fbaf3afc843";
        await axios.get(URL, {
            params: {
                q: cityName,
                units: "metrics",
                lang: "fr",
                appid: APIKEY
            }
        })
            .then(response => {
                // console.log(response);
                this.setState({weather: response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <main className="container-fluid p-2">
                <Title>Météo-App</Title>
                <FormInput loadData = {this.handleLoadData}/>
                <Temp/>
            </main>
        )
    };
}

export default Weather;