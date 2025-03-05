FROM openjdk:8-jdk-alpine

VOLUME /tmp

#ARG JAR_FILE

COPY target/bookstore-eureka-discovery-service-0.0.1-SNAPSHOT.jar eureka-app.jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/eureka-app.jar"]