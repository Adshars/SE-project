
1. Software Description

a. Short name
KYB Gateway

b. Full name
Entity and Individual Verification System for Financial Institutions Based on Microservices and OpenSanctions

c. Short description with goals
The system allows financial institutions to conduct basic verification of counterparties or individuals against sanction lists or as Politically Exposed Persons (PEP). Users log in to the system and access an organization panel, where they can enter personal data (first name, last name, date of birth) for verification. The system communicates with the OpenSanctions microservice to search data from available sanction sources.

The main objectives of the project are:
- secure and flexible access control (authentication and authorization),
- simplified integration with external systems via API Gateway,
- modular microservice-based architecture allowing for scalability and expansion,
- compliance with audit requirements (query logging, user-organization separation).

2. Copyright

a. Authors
- Adam Węglewski
- Patryk Tarmasewicz

b. License conditions for the software produced by the group
The project will be released under the MIT license, allowing free use, modification, and distribution, provided that the original authorship and license information are preserved. External components used in the project (e.g., OpenSanctions) comply with their respective original licenses.

3. Requirements Specification

Id: F1
Name: User Registration
Description: The user can create an account by providing login credentials.
Priority: 1
Category: Functional

Id: F2
Name: Login and Authentication
Description: The system allows login and returns a JWT token upon successful authentication.
Priority: 1
Category: Functional

Id: F3
Name: Organization Assignment
Description: Each user belongs to an organization that groups their activity.
Priority: 1
Category: Functional

Id: F4
Name: Person Data Entry
Description: The user can enter a person's name and date of birth for verification.
Priority: 1
Category: Functional

Id: F5
Name: Person Verification via OpenSanctions
Description: The system queries the OpenSanctions service and returns search results.
Priority: 1
Category: Functional

Id: F6
Name: Query History
Description: The user can view the history of queries made by their organization.
Priority: 2
Category: Functional

Id: F7
Name: External API Integration
Description: The API Gateway provides external systems with integration capabilities.
Priority: 2
Category: Functional

Id: F8
Name: Audit Logging
Description: All requests are logged for audit and compliance purposes.
Priority: 2
Category: Functional

Id: NF1
Name: JWT Security
Description: All requests require valid JWT token authorization.
Priority: 1
Category: Non-functional

Id: NF2
Name: Microservice Performance
Description: Microservices must handle concurrent users efficiently.
Priority: 2
Category: Non-functional

Id: NF3
Name: Scalability
Description: The architecture should support easy addition of new services.
Priority: 3
Category: Non-functional

Id: NF4
Name: Error Handling
Description: The system should notify users of input or server errors.
Priority: 2
Category: Non-functional

4. System Architecture

a. Development Architecture – Technology Stack

Name: Node.js
Purpose: Backend for API Gateway, Auth Service, User/Organization Service
Version: 20.x

Name: Express.js
Purpose: HTTP framework for Node.js microservices
Version: 4.x

Name: Python
Purpose: Wrapper for OpenSanctions, verification microservice
Version: 3.11

Name: FastAPI
Purpose: Lightweight REST API framework for Python
Version: 0.110+

Name: React
Purpose: Frontend application
Version: 18.x

Name: Tailwind CSS
Purpose: Frontend styling
Version: 3.x

Name: MongoDB
Purpose: User, token, and log storage
Version: 6.x

Name: PostgreSQL
Purpose: Relational data for organizations and query history
Version: 15.x

Name: Docker
Purpose: Microservice containerization
Version: 24.x

Name: GitHub Actions
Purpose: CI/CD automation
Version: latest

b. Runtime Architecture – Technology Stack

Name: Docker Compose
Purpose: Local orchestration and container management
Version: 2.x

Name: Nginx (optional)
Purpose: Reverse proxy for API Gateway or frontend
Version: 1.25+

Name: Node.js
Purpose: Run backend microservices
Version: 20.x

Name: Python
Purpose: Run OpenSanctions wrapper
Version: 3.11

Name: MongoDB
Purpose: Store user data and logs
Version: 6.x

Name: PostgreSQL
Purpose: Store query history and organizational data
Version: 15.x

Name: OpenSanctions
Purpose: Sanctions and PEP data source
Version: latest (2024)

5. Tests

a. Test Scenarios

Test ID: T1
Description: User Registration
Steps:
  1. Go to the registration page.
  2. Enter a unique email, password, and organization name.
  3. Click "Register".
Expected Result: The account is created, and a confirmation is returned.

Test ID: T2
Description: Login and JWT retrieval
Steps:
  1. Go to the login page.
  2. Enter valid login credentials.
  3. Click "Login".
Expected Result: A JWT token is returned.

Test ID: T3
Description: Entering person data for verification
Steps:
  1. Log in and open the verification form.
  2. Enter first name, last name, and date of birth.
  3. Click "Check".
Expected Result: Data is sent to the OpenSanctions microservice.

Test ID: T4
Description: Receiving verification results
Steps:
  1. Send query with person data.
  2. Microservice queries OpenSanctions data.
  3. Returns matching result.
Expected Result: User sees if the person is on the sanctions/PEP list.

Test ID: T5
Description: Organization Query History
Steps:
  1. Log in as a user assigned to an organization.
  2. Navigate to the "History" section.
  3. View recent query list.
Expected Result: List with date, status, and person is displayed.

Test ID: T6
Description: Missing authorization
Steps:
  1. Attempt API query without JWT token.
Expected Result: HTTP 401 Unauthorized is returned.

Test ID: T7
Description: External API Integration
Steps:
  1. Send a valid request from an external system with JWT.
  2. Person data is forwarded to API Gateway.
Expected Result: The result is returned as for internal users.

b. Test Execution Report
All test scenarios were executed in a local environment using Postman (for backend) and browser (for frontend). Tests T1–T4 and T6 passed successfully. Scenarios T5 and T7 depend on features under development (history and public API), planned for next project stages.
