# Seguridad

# 🌤️ Weather API Segura con Node.js

Este proyecto implementa una API REST segura para obtener el clima usando OpenWeatherMap, con buenas prácticas de seguridad y CI/CD.

# pasos a seguir

Paso 2: Configurar Secretos en GitHub
Ve a tu repositorio → Settings → Secrets and variables → Actions

WEATHER_API_KEY -> Tu clave de OpenWeatherMap
HEROKU_API_KEY -> Clave de Heroku
HEROKU_APP_NAME -> Nombre de tu app en Heroku

Implementación de Despliegue Seguro (Heroku)
heroku create tu-nombre-app
Paso 2: Configura las variables de entorno en Heroku
heroku config:set WEATHER_API_KEY=tu_clave_aqui

Paso 3: Rotación Automática de Claves (Simulada)
script  simple que “rota” la clave:

--
#!/bin/bash
echo "Rotando clave de API..."

# Genera una clave ficticia (simulación)
NEW_KEY="SIMULATED_$(date +%s)"
echo "Nueva clave generada: $NEW_KEY"

# Actualiza el archivo .env (solo para desarrollo local)
sed -i "s/^WEATHER_API_KEY=.*/WEATHER_API_KEY=$NEW_KEY/" .env

echo "✅ Clave rotada. Recuerda actualizar el secreto en GitHub y Heroku."
--


hacerlo ejecutable chmod +x rotate-key.sh

Para testear con: npm test
Rotacion de claves con: ./rotate-key.sh
Despliegue en Heroku: 
heroku create tu-app-name
heroku config:set WEATHER_API_KEY=tu_clave
git push heroku main


## 🛠️ Requisitos

- Node.js >= 18
- NPM
- Cuenta en [OpenWeatherMap](https://openweathermap.org/api)
- Cuenta en [Heroku](https://heroku.com) (opcional)

## 🚀 Instalación

```bash
git clone <tu-repositorio>
cd weather-api-secure
npm install
cp .env.example .env
npm start

