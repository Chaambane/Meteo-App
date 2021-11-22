import React, {Component} from 'react';

class FormInput extends Component {
    state= {
        cityName: ""
    }

    handleSubmitCity = async(e) => {
        if(e.key === "Enter") {
            await this.props.loadData(this.state.cityName);
            this.setState({cityName: ""})
        }
    }

    render() {
        return (
            <div className="mt-4 title">
                <input type="text" 
                    className="form-control w-50 p-4 text-center fw-bold rounded-pill fw-bold fs-2" 
                    placeholder="Saisissez une ville"
                    onChange={(e) => this.setState({cityName: e.target.value})}
                    value={this.state.cityName}
                    onKeyPress={this.handleSubmitCity}
                />
            </div>
        )
    };
}

export default FormInput;