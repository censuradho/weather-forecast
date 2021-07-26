## Endpoints 
baseURL: host/api/*

method GET: /weather

request queries.
- lang: 
Lingua em que a API vai retornar os placeholders. Opções disponiveis na documentação da própria API na seção [Request Parameters](https://www.weatherapi.com/docs#intro-request)
- query: 
Estou utilizando as cordenadas na seguinte order (latitude,longitude), mas na API na seção [Request Params]([Request Parameters](https://www.weatherapi.com/docs#intro-request) existem outras formas de query. Por default setei pt (português).
- days:
Número de dias de previsão que a API vai retornar. Por default setei 7.

## .env vars

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variaveis.

- WEATHER_API_KEY: [Weather API](https://www.weatherapi.com/)
- ADDRESS_API_KEY: [Positionstack](https://positionstack.com/)
