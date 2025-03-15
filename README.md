# BookStoreApp-Application

Using the opensource: [BookStoreApp-Distributed-Application](https://github.com/devdcores/BookStoreApp-Distributed-Application)
<hr>

## About this project
Students will build and deploy an online bookstore that automatically scales during traffic
spikes, recovers from failures, and deploys updates with zero downtime. The system will
include:

Microservices:
- Frontend: User interface (React/Node.js)
- Catalog Service: Manages book listings (Python/Flask).
- Cart Service: Handles shopping carts (Java/Spring Boot).
- Database: PostgreSQL for storing orders and inventory.

Key DevOps Goals:
- Scale services during peak traffic (e.g., Black Friday sales).
- Recover from database crashes or node failures.
- Deploy updates to the catalog service without downtime.

Achievement:
- Scalability
  - Horizontal Pod Autoscaling (HPA): Configure HPA for the Catalog Service (scale pods when CPU > 60%)
  - Cluster Autoscaling: Use Azure Kubernetes Service Cluster Autoscaler to add worker nodes when pods can’t schedule
  - Load Testing: Simulate traffic with k6 (e.g., ramp up to 500 users over 5 minutes)
- Recovery
  - Liveness/Readiness Probes: Add probes to the Cart Service to restart unresponsive pods
  - Database Backups: Use Velero to back up PostgreSQL daily to Azure
  - StatefulSet for PostgreSQL: Deploy PostgreSQL as a StatefulSet with PersistentVolumes
- Deployment
  - Blue-Green Deployment: Deploy the new Catalog Service version alongside the old one; Use a Kubernetes Service to switch traffic from "blue" (v1) to "green" (v2)
  - CI/CD Pipeline with Rollback: Use GitHub Actions to: Build and test the Catalog Service; Push Docker images to Azure; Deploy to Kubernetes; Roll back if tests fail

Implementation Phases:
- Phase 1: Baseline Deployment
  - Develop and deploy the bookstore microservices on Kubernetes (cloud).
  - Set up a basic CI/CD pipeline for the Frontend.
- Phase 2: Scaling
  - Configure HPA for the Catalog Service.
  - Test scaling by simulating traffic with k6.
- Phase 3: Resilience
  - Add probes, deploy PostgreSQL as a StatefulSet, and configure Velero backups.
  - Simulate a database crash and restore from S3.
- Phase 4: Zero-Downtime Deployments
  - Implement blue-green deployments for the Catalog Service.
  - Demo a failed deployment followed by a rollback.


<hr>

## Run this project in Local Machine

>Frontend App

Navigate to `bookstore-frontend-react-app` folder
Run below commands to start Frontend React Application

```
npm install
npm start
```

>Backend Services
>
To Start Backend Services follow below steps.
>Using Intellij/Eclipse or Command Line

Import this project into IDE and run all Spring boot projects or
build all the jars running `mvn clean install` command in root parent pom, which builds all jars.
All services will be up in the below mentioned ports.

Firstly, you need to install PostgreSQL in docker(Recommended) or in local.
```
docker pull postgres
docker pull dpage/pgadmin4
docker run -d -p 5432:5432 --name postgresql -v pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=root postgres
docker run -d -p 5433:80 --name pgadmin4 -e PGADMIN_DEFAULT_EMAIL=test@123.com -e PGADMIN_DEFAULT_PASSWORD=123456 dpage/pgadmin4
docker ps
```

But running this way we wont get monitoring of microservices.
So if monitoring needed to see metrics like jvm memory, tomcat error count and other metrics.

> Using Docker(Recommended)

Start Docker Engine in your machine.

Run ` mvn clean package -DskipTests` at root of project to build all the microservices jars.

Run `docker-compose build --no-cache` to build all the images. You can use the command: `docker images` to find the images.

Run `docker-compose up -d` to start all the containers.

Use the Postman Api collection in the Postman directory. To make request to various services.

Services will be exposed in this ports

```aiignore
bookstore-catalog-service       : 6001
bookstore-account-service       : 4001
bookstore-payment-service       : 8001
bookstore-api-gateway-server    : 8765
bookstore-consul-discovery      : 8500
bookstore-billing-service       : 6001
bookstore-order-service         : 7001
bookstore-pgsql-db              : 5432
bookstore-graphana              : 3030
bookstore-influxdb              : 8086
bookstore-chronograf            : 8888
bookstore-zipkin                : 9411
bookstore-prometheus            : 9090
bookstore-telegraf              : 8125
```

### Service Discovery
This project uses Eureka or Consul as Discovery service.

While running services in local, then using eureka as service discovery.

While running using docker, then consul is the service discovery.

Reason to use Consul is it has better features and support compared to Eureka. Running services individually in local uses Eureka as service discovery because dont want to run consul agent and set it up as it becomes extra overhead to manage. Since docker-compose manages all consul stuff hence using Consul while running services in docker.

<hr>

### Troubleshooting
> About backend

if run the command `mvn clean install` occurs like `class lombok.javac.apt.LombokProcessor` error, please try to switch java version to 8 or 11.

> About fronted

Node.js version must is 16 or 14.

> Account Service

To Get `access_token` for the user, you need `clientId` and `clientSecret`

```
clientId : '93ed453e-b7ac-4192-a6d4-c45fae0d99ac'
clientSecret : 'client.devd123'
```

There are 2 users in the system currently.
ADMIN, NORMAL USER

```
Admin 
userName: 'admin.admin'
password: 'admin.devd123'
```

```
Normal User 
userName: 'devd.cores'
password: 'cores.devd123'
```

*To get the accessToken (Admin User)*

```curl 93ed453e-b7ac-4192-a6d4-c45fae0d99ac:client.devd123@localhost:4001/oauth/token -d grant_type=password -d username=admin.admin -d password=admin.devd123```

<hr>
