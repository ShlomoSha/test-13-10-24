import swaggerJsdoc from "swagger-jsdoc"

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Green Eye',
            version: '1.0.0',
            descriptio: 'A simple Green Eye Express API'
        },
    },
    apis: []
}

export const specs = swaggerJsdoc(options)
