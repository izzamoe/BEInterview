// swagger.js
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Library API',
            version: '1.0.0',
        },
    },
    apis: ['./Routes/*.js'], // files containing annotations as above
};

const specs = swaggerJsdoc(options);

export default {
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(specs),
};