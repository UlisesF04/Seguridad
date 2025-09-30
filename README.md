# CI/CD Seguro con GitHub Actions y Render

## 🛡️ Gestión de Secretos

- La clave de OpenWeatherMap **nunca está en el código**.
- En desarrollo: se carga desde `.env` (ignorado por Git).
- En CI (GitHub Actions): se inyecta solo durante los tests mediante `secrets.WEATHER_API_KEY`.
- En producción (Render): se configura directamente en la UI de Render, **fuera de GitHub**.

## 🚀 Despliegue

- Usamos **Render** en lugar de Heroku por su plan gratuito actual.
- El despliegue es **automático al hacer `git push`**, sin necesidad de GitHub Actions.
- Esto reduce la necesidad de almacenar `HEROKU_API_KEY` en GitHub, mejorando la seguridad.

## 🔁 Rotación de Claves

- Se incluye un script de **simulación** (`npm run rotate-keys`).
- En producción real, se usaría **HashiCorp Vault** o **AWS Secrets Manager** para:
  - Generar nuevas claves
  - Actualizarlas en la API y en el entorno de producción
  - Auditar el acceso

## ✅ Mejores Prácticas Implementadas

- ✅ Nunca hardcodear secretos
- ✅ Usar variables de entorno
- ✅ Limitar el alcance de los secretos (solo en tests)
- ✅ Evitar secretos en logs
- ✅ Separar CI (GitHub Actions) de CD (Render)
- ✅ Simular rotación como ejercicio de seguridad