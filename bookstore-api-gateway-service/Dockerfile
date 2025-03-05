FROM openjdk:8-jdk-alpine

VOLUME /tmp

#ARG JAR_FILE

COPY target/bookstore-api-gateway-service-0.0.1-SNAPSHOT.jar gateway-server.jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/gateway-server.jar"]