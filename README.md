# Ahorra Real

Ahorra Real es un prototipo de una plataforma chilena para encontrar ofertas reales, comparar precios y revisar si una oportunidad vale la pena según el historial observado.

Este repositorio contiene el demo para Chile, incluyendo su interfaz, el Worker/API, el esquema de historial de precios, las migraciones y la configuración de despliegue.

## Demo

Preview: [ahorra-real-chile.ivo-banned-in-dc.chatgpt.site](https://ahorra-real-chile.ivo-banned-in-dc.chatgpt.site/)

Los productos mostrados en la vista pública son ilustrativos. Las credenciales de Mercado Libre no forman parte del repositorio: deben configurarse como secretos o variables de entorno del entorno de ejecución.

## Estructura principal

- `dist/index.html`: interfaz estática del demo.
- `worker/index.js`: Worker y lógica de la aplicación.
- `dist/server/index.js`: salida empaquetada del servidor.
- `db/schema.ts` y `drizzle/`: esquema y migraciones del historial de precios.
- `.openai/hosting.json`: configuración del proyecto de Sites.

