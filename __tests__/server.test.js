const request = require('supertest');
const app = require('../server');

describe('GET /weather', () => {
    it('debe devolver error si no hay ciudad', async () => {
        const response = await request(app).get('/weather');
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBeDefined();
    });

    it('debe devolver error si no hay API key', async () => {
        // Simulamos que no hay clave
        const originalKey = process.env.WEATHER_API_KEY;
        delete process.env.WEATHER_API_KEY;

        const response = await request(app).get('/weather?city=Madrid');
        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBeDefined();

        
        process.env.WEATHER_API_KEY = originalKey;
    });

    
});