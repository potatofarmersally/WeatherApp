import React from 'react';

class Form extends React.Component {
    render() {
        return (
                <form onSubmit={this.props.loadWeather}>
                    <input type="text"
                           name="zipCode"/>
                    <button>Submit</button>
                </form>
        )
    }
}

export default Form;