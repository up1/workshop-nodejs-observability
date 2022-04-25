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
### Start Tracing server :: [Zipkin](https://zipkin.io/)
```
$docker container run -d -p 9411:9411 openzipkin/zipkin
```

Open url = `http://localhost:9411` in web browser


### Start [Prometheus server](https://prometheus.io/) :: Zipkin
```
$docker containerrun --name prometheus -d -p 9090:9090 prom/prometheus
```

Open url = `http://localhost:9090` in web browser

### Reference websites
* [Opentelemetry with NodeJS](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/)
* [OpenTelemetry with Go](https://opentelemetry.io/docs/instrumentation/go/)
