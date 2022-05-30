#defining our base docker image :
FROM openjdk:8-alpine

#LABEL maintainer="zarkaoui.com"

WORKDIR /app

COPY . .

#Add the jarfile generated :
ADD target/evoting-0.0.1-SNAPSHOT.jar evoting-app.jar

#How the app is going to run in a docker container :
ENTRYPOINT ["java", "-jar", "evoting-app.jar"]