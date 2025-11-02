const request = require('supertest');
const express = require('express');

// Create a separate app instance for testing
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

describe('Server', () => {
    test('GET / should return Hello World!', async () => {
        const response = await request(app)
            .get('/')
            .expect(200);
        
        expect(response.text).toBe('Hello World!');
    });

    test('GET / should have correct content type', async () => {
        const response = await request(app)
            .get('/')
            .expect(200);
        
        expect(response.headers['content-type']).toMatch(/text\/html/);
    });
});