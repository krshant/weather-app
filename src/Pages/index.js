import React, { useEffect, useState } from "react";
import SearchComponent from './Components/search'

function Pages() {

    const [cityName, setCityName] = useState({ id: '', name: 'kolkata' })
    const [citySelectedData, setCitySelectedData] = useState({})

    useEffect(() => {
        getWeather(cityName)
    }, []);

    const getWeather = async (value) => {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value?.name},india&appid=c9e665c7ee66f8e8f8f64cc1fcdc165b`);
        const json = await res.json();
        setCitySelectedData(json)
        console.log('json', json)
    }
    return (
        <div>
            <h1>Weather App</h1>
            <SearchComponent
                isSelected={cityName}
                setIsSelected={setCityName}
                getWeather={getWeather}
            />
            <div>
                <p>City Name: {citySelectedData?.name}</p>
                <p>Temprature: {citySelectedData?.main?.temp}</p>
                <p>Sunrise: {citySelectedData?.sys?.sunrise}</p>
                <p>Sunset: {citySelectedData?.sys?.sunset}</p>
                {/* <p>Description: {citySelectedData?.weather[0]?.description}</p> */}
            </div>
        </div>
    )

}
export default Pages;