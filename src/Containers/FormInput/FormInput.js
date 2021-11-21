import React, {Component} from 'react';

class FormInput extends Component {
    state= {
        cityName: ""
    }
    render() {
        return (
            <div className="mt-4 title">
                <input type="text" className="form-control w-50 p-4 text-center fw-bold rounded-pill fw-bold fs-2" placeholder="Entrez la ville Exp: Montpellier"/>
            </div>
        )
    };
}

export default FormInput;