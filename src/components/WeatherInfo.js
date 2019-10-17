import React from 'react';

class WeatherInfo extends React.Component {
    render() {
        return (
            <div className="weather-info">
                {
                    this.props.zipcode && 
                    <p className="weather__key">
                        City:
                        <span className="weather__value">
                            {this.props.city}
                        </span>
                    </p>
                }
                {
                    this.props.temperature &&
                    <p className="weather__key">
                        Temperature:
                        <span className="weather__value">
                            {this.props.temperature}
                        </span>
                    </p>
                }
                {
                    this.props.humidity &&
                    <p className="weather__key">
                        Humidity:
                        <span className="weather__value">
                            {this.props.humidity}
                        </span>
                        %
                    </p>
                }
                {
                    this.props.conditions &&
                    <p className="weather__key">
                        Conditions:
                        <span className="weather__value">
                            {this.props.conditions}
                        </span>
                    </p>
                }
                {
                    this.props.error &&
                    <p className="weather__error">
                        {this.props.error}
                    </p>
                }
            </div>
        )
    }
}

export default WeatherInfo;