require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

app.get('/weather', async (req, res) => {
    // Validar si la clave de la API está presente
    if (!WEATHER_API_KEY) {
        return res.status(500).json({ error: 'La clave de la API del clima no está configurada en el servidor.' });
    }

    // Limpiar y validar la entrada del usuario.
    const city = req.query.city ? req.query.city.trim() : '';

    if (!city) {
        return res.status(400).json({ error: 'Por favor, proporciona una ciudad en el query param ?city=nombre' });
    }

    try {
        // Petición a la API de OpenWeatherMap
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: WEATHER_API_KEY,
                units: 'metric', // Para obtener la temperatura en Celsius
                lang: 'es' // Para obtener la descripción en español
            }
        });

        const data = response.data;
        res.json({
            ciudad: data.name,
            pais: data.sys.country,
            temperatura_c: data.main.temp,
            condicion: data.weather[0].description,
            icono: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` // URL completa del icono
        });

    } catch (error) {
        // Manejo de errores específicos de OpenWeatherMap
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ error: 'Ciudad no encontrada. Por favor, verifica el nombre.' });
        }

        console.error('Error al obtener el clima:', error.response ? error.response.data : error.message);
        return res.status(500).json({ error: 'No se pudo obtener el clima en este momento.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});