FROM openjdk:8u131-jdk-alpine

EXPOSE 8080

WORKDIR /usr/local/bin

COPY ./target/demo-0.0.1-SNAPSHOT.jar webapp.jar

CMD ["java", "-jar", "webapp.jar"]