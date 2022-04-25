# Workshop Node.js Observability with [OpenTelemetry](https://opentelemetry.io/)
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


### Working with application metric
```
$npm install

// Start service 3
$node service3.js
```
Run
* Open url of service = `http://localhost:3002/movies` in web browser
* Open url of application metric = `http://localhost:9464/metrics` in web browser


### Start [Prometheus server](https://prometheus.io/) :: Zipkin
```
$docker containerrun --name prometheus -d -p 9090:9090 prom/prometheus
```

Open url = `http://localhost:9090` in web browser

### Reference websites
* [Opentelemetry with NodeJS](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/)
* [OpenTelemetry with Go](https://opentelemetry.io/docs/instrumentation/go/)
