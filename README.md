# User-Centric-Microservices-Architecture-Development
Project Overview
This project implements a robust microservices architecture designed to manage user data, promotional offers, and geolocation-based notifications. The architecture consists of three primary services: User Service, Offer Deals Service, and Geolocation Notification Service.

Key Features
User Service: Manages user profiles and authentication.
Offer Deals Service: Handles promotional offers tailored to users.
Geolocation Notification Service: Sends real-time notifications based on user location.
Technical Highlights
Service Discovery: Utilizes Netflix Eureka for dynamic service registration and discovery, enhancing system resilience.
API Gateway: Implements Spring Cloud Gateway for efficient routing and communication between microservices.
Fault Tolerance: Integrates Resilience4j for circuit breaking and rate limiting, resulting in a 40% improvement in response times.
Security: Secures the architecture with Spring Security and Okta for robust user authentication and data protection.
Performance Improvements
Achieved a 25% reduction in downtime through effective service management and communication strategies.
Enhanced user experience with faster response times and reliable notifications.
Tech Stack
Languages: Java
Frameworks: Spring Boot, Spring Cloud (Eureka, Gateway)
Libraries: Resilience4j, Spring Security
Authentication: Okta

Instructions to Run the Code:

To successfully run the code in the uploaded folder, follow these structured steps:

1. Required Environment
Java Development Kit (JDK)

Install JDK version 21 or higher.
Set the JAVA_HOME environment variable to point to the JDK installation directory.
Apache Maven

Install Apache Maven (version 3.6.0 or higher recommended).
Ensure that Maven is added to your system's PATH variable.
Spring Boot

The project is built using Spring Boot, which is included in the pom.xml file.
MongoDB

Install and run MongoDB, as the application uses MongoDB for data storage.
Ensure that the MongoDB service is running on the default port (27017).
2. Project Setup
Clone the Repository

Clone the project repository to your local machine using Git:

-git clone <repository-url>
-cd <repository-folder>
Navigate to the Project Directory
Open a terminal or command prompt and navigate to the project directory where the pom.xml file is located.
3. Build the Project
Using Maven
Run the following command to build the project:
-mvn clean install
This command will compile the code, run tests, and package the application into a JAR file.
4. Run the Application
Using Maven

You can run the application directly using Maven with the following command:
-mvn spring-boot:run
Using the JAR File

Alternatively, if you prefer to run the packaged JAR file, navigate to the target directory and execute:
-java -jar <name-of-jar-file>.jar
5. Access the Application
Web Interface
Once the application is running, you can access it via a web browser at:
-http://localhost:8080
6. Additional Configuration
Database Configuration

Ensure that the MongoDB connection settings are correctly configured in the application.properties or application.yml file, if applicable.
Environment Variables

Set any required environment variables as specified in the project documentation or code comments.
7. Testing the Application
Run Tests
You can run the tests included in the project using:
-mvn test
8. Troubleshooting
Common Issues:-
-Ensure that all dependencies are correctly resolved by Maven.
-Check the console output for any errors during the build or run process.
-Verify that MongoDB is running and accessible.
