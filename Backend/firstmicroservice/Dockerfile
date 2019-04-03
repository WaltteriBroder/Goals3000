FROM openjdk:8u131-jdk-alpine

EXPOSE 8081

WORKDIR /usr/local/bin

COPY ./target/firstmicroservice-1.jar firstmicroservice.jar

CMD ["java", "-jar", "firstmicroservice.jar"]