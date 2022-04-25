## Quiz

### เขียน Dockerfile และ docker compose สำหรับการ run project นี้
ประกอบไปด้วย
* Service 1
* Service 2
* Service 3
* Prometheus
* Grafana
* Zipkin

### การตรวจ จะ run ด้วยคำสั่ง
```
$docker compose build
$docker compose up -d
```

### Run service for Distributed tracing
* http://localhost:3000/dashboard

Open Zipkin URL 
* http://localhost:9411


### Run service for Application metric
* http://localhost:3002/movies

Open Prometheus URL 
* http://localhost:9090

`มี metric name ที่ขึ้นต้นด้วย รหัสนักศึกษาของแต่ละคน เช่น 1234_api_count เป็นต้น`

Path in [Prometheus Dcoker image](https://prometheus.io/docs/prometheus/latest/installation/)
* /etc/prometheus/prometheus.yml

Open Grafana URL 
* http://localhost:9999

`เจอ dashboard จาก metric จาก Prometheus`

Path in [Grafana Docker Container](https://grafana.com/docs/grafana/latest/installation/docker/)
* /etc/grafana/provisioning/datasource.yml
* /etc/grafana/provisioning/dashboards/dashboard.yml

