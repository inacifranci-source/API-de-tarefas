import swaggerjsdoc from "swagger-jsdoc";
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "api de gerenciamento de tarefas",
            version: "1.2.0",
            description: "api de gerenciamento de tarefas com objetivo de ajudar os users a registrarem as tarefas"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
    },
    apis: ["./src/routes/*.ts"]
};
export const swaggerSpec = swaggerjsdoc(options);
//# sourceMappingURL=swagger.js.map