import styles from './App.module.css'
import Form from './components/Form/Form'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import { useWeather } from './hooks/useWeather'
import Spinner from './components/Spinner/Spinner'
import Alert from './components/Alert/Alert'

const App = () => {

  const { fetchWeather, weather, loading, hasWeatherData, notFound } = useWeather()
  
  return(
    <>
    {/* <div className={styles.container_title}>
      <h1 className={styles.title}>Clima App</h1>
    </div> */}
      <div className={styles.container}>
            <Form
              fetchWeather={fetchWeather} />
              { loading && <Spinner />}
            { hasWeatherData &&
              <WeatherDetail
                weather={ weather } />
            }
            {
              notFound && <Alert>ciudad no encontrada</Alert>
            }
      </div>
    </>
  )
}

export default App