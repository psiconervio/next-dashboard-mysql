'use client';

import { useEffect, useState } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch('/api/weather');
        const data = await response.json();
        if (response.ok) {
          setWeatherData(data);
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError('Error al llamar a la API');
      }
    }

    // Fetch data immediately on component mount
    fetchWeatherData();

    // Set interval to fetch data every 60 seconds
    const interval = setInterval(fetchWeatherData, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const actualizarVideoYDescripcion = (descripcionCielo) => {
    let videoSrc;
    let descripcionTexto;

    switch (descripcionCielo) {
      case 'overcast clouds':
        videoSrc = 'resources/videos/nublado.mp4';
        descripcionTexto = 'Nubes superpuestas';
        break;
      case 'clear sky':
        videoSrc = 'resources/videos/blue_sky.mp4';
        descripcionTexto = 'Cielo Limpio';
        break;
      case 'broken clouds':
        videoSrc = 'resources/videos/pocasnubess.mp4';
        descripcionTexto = 'Nubes rotas';
        break;
      case 'thunderstorm with rain':
        videoSrc = 'resources/videos/storm.mp4';
        descripcionTexto = 'Tormenta con lluvia';
        break;
      case 'light rain':
        videoSrc = 'resources/videos/lluvialigera1.mp4';
        descripcionTexto = 'lluvia ligera';
        break;
      case 'few clouds':
        videoSrc = 'resources/videos/pocasnubess.mp4';
        descripcionTexto = 'Pocas Nubes';
        break;
      case 'scattered clouds':
        videoSrc = 'resources/videos/nubesdispersas.mp4';
        descripcionTexto = 'Nubes Dispersas';
        break;
      case 'light intensity shower rain':
        videoSrc = 'resources/videos/rainn.mp4';
        descripcionTexto = 'Nubes Dispersas';
        break;
      default:
        videoSrc = '';
        descripcionTexto = '';
    }

    return { videoSrc, descripcionTexto };
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Cargando...</div>;
  }

  const {
    main: { temp, feels_like, pressure },
    weather,
    wind: { speed, gust },
    clouds: { all },
    visibility,
  } = weatherData;

  const descripcionCielo = weather[0].description;
  const temperaturaExacta = temp - 273.15;
  const sensaciontermica = feels_like - 273.15;
  const velocidaddeviento = speed * 1.609;
  const rafagadeviento = gust * 1.609;
  const visibilidad = visibility / 1000;

  const { videoSrc, descripcionTexto } = actualizarVideoYDescripcion(descripcionCielo);

  return (
    <div>
      <div id="presion">Presión: {pressure} hPa</div>
      <div id="iddescripcioncielo">Descripción: {descripcionTexto}</div>
      <div id="sensaciontermica">Sensación térmica: {sensaciontermica.toFixed(1)}°C</div>
      <div id="rafagadeviento">Ráfaga de viento: {rafagadeviento.toFixed(0)} km/h</div>
      <div id="nubosidad">Nubosidad: {all}%</div>
      <div id="visibilidad">Visibilidad: {visibilidad.toFixed(1)} km</div>
      <video id="miVideo" src={videoSrc} autoPlay muted loop />
    </div>
  );
};

export default Weather;
