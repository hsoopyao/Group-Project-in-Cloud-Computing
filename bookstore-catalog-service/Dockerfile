FROM openjdk:8-jdk-alpine

VOLUME /tmp

#ARG JAR_FILE

COPY target/bookstore-catalog-service-0.0.1-SNAPSHOT.jar catalog-service.jar

#Using Dokerize to check whether db is up, if it is then start this service.
COPY dockerize dockerize

COPY ./images /images

CMD ./dockerize -wait tcp://bookstore-pgsql-db:5432 -timeout 15m java -Djava.security.egd=file:/dev/./urandom -jar /catalog-service.jar