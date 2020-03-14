import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TSCallSignatureDeclaration, TSImportEqualsDeclaration } from 'babel-types';

// my api key
const api_key = '68bb3929b7da22171b348bd3e352da18';

class App extends Component {

    /** Initialize the component */
    constructor(props) {
        super(props);
        this.state = {
            city: 'Barcelona',
            description: '',
            tempK: '',
            tempC: '',
            humidity: ''
        }
    }

    /** Called when the component is rendered */
    componentDidMount() {
        this.grabWeather(this.state.city);
    }

    /** get the weather from the API */
    grabWeather(city) {
        console.log("grabWeather1:");
        console.log(this);
        // fetch returns a promise
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
                description: json.weather[0].description,
                tempK: json.main.temp,
                tempC: this.kelvinToCelsius(json.main.temp),
                humidity: json.main.humidity
            })
        });
        console.log("grabWeather2:");
        console.log(this);
    }

    /** Returns the kelvin grades in celsius format */
    kelvinToCelsius(kelvin_grades) {
        return (kelvin_grades - 273.15).toFixed(2);
    }

    /** Component Render in HTML */
    render() {
        return (
            <div align="center" className="container">
                <h3>Wheather Report for: {this.state.city}</h3>
                <br></br>                            
                <ul className="list-group">
                    <li className="list-group-item">Description: {this.state.description}</li>
                    <li className="list-group-item">Temp: {this.state.tempK}ºK / {this.state.tempC}ºC</li>
                    <li className="list-group-item">Humidity: {this.state.humidity}%</li>                    
                </ul>
                <br></br>                
                <form className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <input className="form-control" id="newCity" placeholder="Check anohter city" type="text"></input>
                    </div>    
                    <button className="btn btn-dark mb-2" type="button" onClick={()=>{
                        let newCity = document.getElementById("newCity").value;
                        if (typeof newCity !== 'undefined' && newCity.trim() != "") {            
                            this.state.city = newCity
                            this.componentDidMount()
                        }
                    }
                    }>Check</button>
                </form>                
            </div>
        )
    }
}

// The component tag name App is the class name, and the second argument is the element to replace
ReactDOM.render(<App/>, document.getElementById('root'));
