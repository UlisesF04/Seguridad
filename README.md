# Seguridad
Seguridad - Trabajo Práctico: Implementación de CI/CD Seguro con GitHub Actions y
Gestión de Claves Privadas

#Objetivo:
Crear un pipeline CI/CD utilizando GitHub Actions, implementando prácticas seguras de gestión
de claves privadas, incluyendo el acceso a una API externa.
Requisitos previos:
Conocimientos básicos de Git y GitHub
Familiaridad con JavaScript/Node.js
Cuenta en GitHub.com


#Herramientas de Gestión de Claves Privadas:
HashiCorp Vault: Sistema de gestión de secretos empresarial.
AWS Key Management Service (KMS): Servicio de gestión de claves en la nube.
Azure Key Vault: Servicio de gestión de secretos de Microsoft Azure.
GitGuardian: Herramienta de escaneo y protección de secretos en el código.
Doppler: Plataforma de gestión de secretos para equipos de desarrollo.
Para este ejercicio, utilizaremos los Secrets de GitHub integrados, pero mencionaremos cómo se
podría integrar una herramienta más avanzada como HashiCorp Vault.


Tareas:
1. Configuración del Proyecto:
Crear un nuevo repositorio en GitHub para una aplicación Node.js simple (será desarrollada
en clases).
Inicializar con un package.json y una estructura básica de archivos.
Crear un directorio .github/workflows.

2. Implementación de la Aplicación Básica:
Desarrollar una aplicación Node.js que haga llamadas a una API externa (por ejemplo, una
API de clima).
Implementar pruebas unitarias básicas.

3.Configuración del Pipeline CI/CD Básico:
Crear un archivo ci-cd.yml en .github/workflows.
Configurar jobs para build y test.

4. Gestión Segura de Claves de API:
Registrarse en una API que requiera una clave (por ejemplo, OpenWeatherMap).
Configurar la clave API como un Secret en GitHub.
Modificar la aplicación y el workflow para usar el secret de forma segura.

5.Implementación de Despliegue Seguro:
Configurar el despliegue a Heroku o similar.
Implementar rotación automática de claves (simulado con un script).

6. Documentación y Mejores Prácticas:
 Documentar el proceso de gestión de secretos en el README.
 Implementar y documentar mejores prácticas de seguridad.
