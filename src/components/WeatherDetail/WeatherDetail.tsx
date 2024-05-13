import { Weather } from "../../hooks/useWeather"
import { formatTemp } from "../../helpers"
import styles from './WeatherDetail.module.css'

type WeatherProps ={ 
    weather: Weather
}

const WeatherDetail = ({ weather }: WeatherProps) => {
    return (
        <div className={styles.container}>
            <h2>
                Clima de: {weather.name}
            </h2>
            <p className={styles.current}>{formatTemp(weather.main.temp)}&deg;C</p>
            <div className={styles.temperatures}>
                <p>Min: <span>{formatTemp(weather.main.temp_min)}&deg;C</span></p>
                <p>Max: <span>{formatTemp(weather.main.temp_max)}&deg;C</span></p>
            </div>
        </div>
    )
}

export default WeatherDetail