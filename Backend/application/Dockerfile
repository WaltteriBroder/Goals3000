FROM openjdk:8u131-jdk-alpine

EXPOSE 8080

WORKDIR /usr/local/bin

COPY ./target/application-1.jar application.jar

CMD ["java", "-jar", "application.jar"]