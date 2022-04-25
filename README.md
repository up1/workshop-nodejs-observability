# Workshop Node.js Observability
* Centralize logging
* Distributed tracing
* Application metric
* Health check

### Run server 1 and service 2
```
$npm install

// Start service 1
$npm run service1

// Start service 2
$npm run service2
```
### Start Tracing server :: Zipkin
```
$docker container run -d -p 9411:9411 openzipkin/zipkin
```

Open url = `http://localhost:9411` in web browser


### Reference websites
* [Opentelemetry with NodeJS](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/)
* [OpenTelemetry with Go](https://opentelemetry.io/docs/instrumentation/go/)
