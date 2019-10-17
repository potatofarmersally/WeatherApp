import React from 'react';

class Form extends React.Component {
    render() {
        return (
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text"
                           name="zipCode"/>
                    <input type="submit"/>
                </form>
        )
    }
}

export default Form;