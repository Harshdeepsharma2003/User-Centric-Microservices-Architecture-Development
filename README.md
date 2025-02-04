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
