# Zathura - personal AI and voice recognition assistant

Members: Pablo Mesén, Alonso Duran, Ana Hernández Muñoz, Jesus Valverde

## Description: Write a brief description of the system, highlighting its strengths"

The system is an AI-powered task recording and assistance platform designed to enhance real-time guidance within applications. Users can record tasks through voice commands and on-screen actions, creating a structured knowledge base. The platform leverages AI to analyze and replicate workflows, offering real-time assistance when users perform similar tasks.

Strengths:

- Cross-Platform Compatibility – Supports Windows, macOS, iOS, Android, and web-based interactions.
- AI-Driven Workflow Automation – Uses machine learning to extract key steps and optimize task execution.
- Scalable Cloud Infrastructure – Handles a growing user base efficiently with cloud-based storage and processing.
- Flexible Monetization Model – Offers free trials and scalable subscription plans for businesses.

## Stack: write down the final stack to be use decided for the group"
**Frontend:**
- Mobile: Flutter (Android & iOS) – Ensures efficient background processing and real-time assistance.

- Web: React – Provides high performance and scalability for web interactions.

**Backend:**
- Node.js: Manages multiple connections efficiently and integrates with the frontend.

- Python: Specializes in AI-based processing and task automation.

- REST & GraphQL: REST handles traditional backend operations, while GraphQL optimizes queries for efficient data retrieval.

**Database:**
- PostgreSQL: Chosen for its robust compatibility with the selected technologies.

**AI & Machine Learning:**
- TensorFlow: Powers voice command processing and automated task generation.

**Cloud & Hosting:**
- Google Cloud Platform (GCP): Ensures seamless integration with Firebase and scalable cloud services.

**DevOps & CI/CD:**
- GitHub Actions: Automates integration and deployment workflows.

**Quality Assurance:**
- pytest, flutter test, react testing library: Covers unit and integration testing for different platforms.
- Appium: Enables mobile automation testing, especially for third-party app interactions.

## Frontend design specifications

### Authentication platform

The Authentication platform our team decided to use for the purpose of the current case was "Firebase Authentication". This platform is a service that is part of the catalog services that Firebase offers. Firebase is a mobile and web development platform created by Google, and it provides a comprehensive suite of tools to simplify authentication and user management. We describe the multiple reasons why we think this tool is sufficient to complete the tasks in the following points:

a) Login and password:

Firebase Authentication supports authentication using email and password.

b) Login and password automatic screen generation or SDK for screen generation:

Firebase provides libraries and SDKs (like FirebaseUI) that automatically generate login screens in a customizable way. This makes integration into mobile and web applications easier without needing to create the screens from scratch.

c) Compatible with your FE programming language:

Firebase Authentication is compatible with multiple frontend technologies, this includes includes our selected FrontEnd language JavaScript/TypeScript(using React framework) and Dart (using Flutter framework). In addition to this, Firebase also is compatible with:

- Android (Java/Kotlin)

- iOS (Swift/Objective-C)

- Other modern frameworks like Angular, and Vue can also easily use Firebase.

d) Access by API available:

Firebase Authentication provides access through a REST API, allowing you to manage users, sign in, sign out, and perform other authentication processes from any client or server compatible with HTTP.

e) MFA and a sandbox for testing purposes:

Firebase Authentication supports Multi-Factor Authentication (MFA) using verifications like SMS or app-based authentication (such as Google Authenticator).
Additionally, you can perform tests in a development environment or use the Firebase Emulator Suite, which includes a testing environment for authentication without affecting production data.

### Demo code devolpment documentation

#### Firebase Authentication platform implementation

The authentication system is built using Firebase’s SDK and React components, structured to handle user flows seamlessly. Here’s how the main parts of the code were structured for the implementation to work:  

##### Firebase.js

The Firebase setup begins by initializing a connection to the backend using credentials unique to the project. The firebaseConfig object contains API keys and identifiers (e.g., apiKey, projectId) provided by Firebase Console, ensuring the app communicates with the correct Firebase project. The initializeApp function establishes this connection, and getAuth creates an authentication instance (auth) that is exported for use across components. This centralizes Firebase authentication logic and avoids redundant initializations.

![image](https://github.com/user-attachments/assets/433655be-9a3d-4b4d-ba8e-82222f03deeb)

(Image for illustrative purpose, empty information)

With this in mind all that is left is to ensure correct communication with the authentication service we just initialize and the frontend of our project. By combining Firebase’s authentication methods with React’s state management and routing, the code creates a cohesive system. Firebase handles backend tasks (credential validation, session persistence), while React components manage UI, state, and user interactions. This separation of concerns ensures scalability—additional features (e.g., social logins) can be added without disrupting core logic.

#### FrontEnd design and customizablity

##### Completly independent UI

If you are willing to spend the time and thinking it needs, it is viable with Firebase Authentication that you build the authentication UI from scratch using React components (in this case React components to be consistent with the technologies stack stablished earlier), giving you full control over the design and user experience. In this approach Firebase only handles the backend logic (user creation, credential validation, session management).

###### Pros

- Full Creative Control: Match your app’s branding perfectly.

- Flexible UX: Add animations, multi-step forms, or password strength indicators.

- No Dependencies: Avoid third-party UI libraries.

###### Cons

- Development Time: Requires building all UI components.

##### Using FirebaseUI Resources

FirebaseUI is a library from Firebase that provides pre-built, customizable authentication components, making it easier to integrate sign-in flows into applications. It supports multiple authentication methods, including email/password, phone authentication, and third-party providers like Google and Facebook. While it is ideal for rapid development due to its simplicity and ease of use, it offers less design flexibility compared to fully custom authentication implementations, still being customizable.

###### Pros

- Rapid Setup: Pre-built forms for email, Google, Facebook, etc.

- Consistent Behavior: Firebase manages error messages and loading states.

- Mobile-Friendly: Responsive design out-of-the-box.

###### Cons

- Limited Customization: Hard to match unique branding.

- CSS Conflicts: Requires !important overrides for styling.

### Firebase API calls to simulate authentication with MFA

This document describes the process of simulating authentication with Firebase Multi-Factor Authentication (MFA) using Postman. The simulation includes verifying the user, signing in with a password, triggering MFA, and verifying the MFA code.

#### Postman Collection
A Postman collection has been created to facilitate the API calls required for the simulation. You can find the collection at:

[Postman Collection - MFA_Firebase](MFA-firebase-simulation\MFA_Firebase.postman_collection.json)

#### Setup
1. **Enable MFA in Firebase**
   - Navigate to the Firebase console.
   - Go to `Authentication > Sign-in method`.
   - Enable SMS Multi-Factor Authentication.

![Image](https://github.com/user-attachments/assets/fe334ca8-c852-4ced-a80d-6817feb20521)
![Image](https://github.com/user-attachments/assets/bb536052-13e3-4eea-89b9-b72cffaff2c4)


2. **Postman API Calls**
   - All API calls require an API key and authentication token.
   - Firebase requires an email verification step before proceeding.

#### API Call Steps
##### 1. Verify User (Email Verification)
- **Endpoint:** `POST https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=YOUR_API_KEY`
- **Request Body:**
  ```json
  {
    "requestType": "VERIFY_EMAIL",
    "idToken": "YOUR_ID_TOKEN"
  }
  ```

##### 2. Sign in with Password
- **Endpoint:** `POST https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_API_KEY`
- **Request Body:**
  ```json
  {
    "email": "your-email@gmail.com",
    "password": "your-password",
    "returnSecureToken": true
  }
  ```
- **Response:** Contains `mfaPendingCredential` and `mfaEnrollmentID`.
![Image](https://github.com/user-attachments/assets/13da4fff-c339-41ff-83d3-7a336859712e)

##### 3. Request MFA Verification Code
- **Endpoint:** `POST https://identitytoolkit.googleapis.com/v2/accounts/mfaSignIn:start?key=YOUR_API_KEY`
- **Request Body:**
  ```json
  {
    "mfaPendingCredential": "PENDING_CREDENTIAL",
    "mfaEnrollmentId": "ENROLLMENT_ID",
    "phoneSignInInfo": {}
  }
  ```
- **Response:** Contains `sessionInfo`.

⚠ **Issue:** Firebase requires a `recaptchaToken` to send the SMS code, which cannot be obtained via Postman. However, by adding a test phone number in Firebase, the verification code is always the same, making reCAPTCHA unnecessary.

![Image](https://github.com/user-attachments/assets/5177f129-4b67-4252-85e0-3b9f179e48eb)


##### 4. Verify the MFA Code
- **Endpoint:** `POST https://identitytoolkit.googleapis.com/v2/accounts/mfaSignIn:finalize?key=YOUR_API_KEY`
- **Request Body:**
  ```json
  {
    "mfaPendingCredential": "PENDING_CREDENTIAL",
    "phoneVerificationInfo": {
      "sessionInfo": "SESSION_INFO",
      "code": "RECEIVED_CODE"
    }
  }
  ```

![Image](https://github.com/user-attachments/assets/d2f52fb4-476f-42ed-aa55-3fd090ab336e)

### Client Architecture

Architecture: N-layer

Technology Stack:

- Mobile Frontend: Flutter (Hybrid): Chosen for its background processing capabilities and consistent real-time assistance across Android and iOS.
- Web Frontend: React (Likely Client-Side Rendering (CSR)) - Selected for performance and scalability, with the possibility of using Vite as the build tool.
- Backend: Python (for AI), Node.js (for handling multiple connections and frontend communication), REST (API).
- Database: PostgreSQL - Chosen for compatibility with other technologies.
- AI Development: TensorFlow - For voice command processing and data flow generation.
- Hosting: Firebase
- CI/CD:  GitHub Actions - For automating integration and deployment.
- QA: pytest, flutter test, React Testing Library, Appium - For comprehensive testing.
Web App Rendering: Primarily Client-Side Rendering (CSR).
Mobile Development: Hybrid (Flutter).

Key Points:

- The team has opted for an N-layer architecture.
- Flutter is the chosen technology for mobile development.
- React is selected for the web frontend, with Vite used as the build tool.
- Python will handle the backend API endpoints and application logic.
- Python will also be used for AI development.
- Firebase will be used for hosting the application.


### Visual Components

Patterns:

1. Component-Based Architecture (Must):
  - Since Tailwind CSS is utility-first. We can organize UI into reusable functional components.
  - Maintain separation between presentational and container components.
2. MVP (Android), MVVM (React and Flutter) (Must):
  - React Web → MVVM with Redux
  - Flutter Mobile → MVVM with Provider or Riverpod

Principles:
1. SOLID (Must): Ensures modular, maintainable, and flexible code.
2. DRY (Must): Prevents UI code duplication.
3. Separation of Concerns (Must): Keeps logic separate from presentation and state management.
4. Responsive Design (Must): 
  - Uses Flexbox and CSS Grid in React and MediaQuery in Flutter to ensure responsiveness.
  - Material Design for Android (since Flutter natively supports Material) and Web. Apple HIG for iOS.
   
Toolkits and standards:
1. UI Components
   - Web (React): Tailwind CSS
   - Mobile (Flutter): Material Design (Android), Cupertino (iOS)

2. Frameworks and Standards
   - Storybook (Web and Mobile): To document and test UI components in isolation.
   - Material Design 3: Focus on accessibility and modern design.
   - Apple Human Interface Guidelines: To follow iOS standards.


### Object Design Patterns

![UML class (3)](https://github.com/user-attachments/assets/d7fe7242-5131-46d0-ae20-d9c4af49e7a3)

### External Services
![External Services](https://github.com/user-attachments/assets/3a04f940-356a-4a3c-abd7-304a380bbc00)

### Project Structure

![Captura de pantalla 2025-04-02 213716](https://github.com/user-attachments/assets/287aea21-230b-4085-8635-6742b702287c)

**Authentication & Authorization**
Service Used: Firebase Authentication
- Provides secure user authentication via email, phone, and third-party providers (Google, Facebook, etc.).
- Handles session management and token-based authentication for protected actions.

**Integration with SaaS & Cloud Services**
- Google Cloud Storage: Stores user-generated data, such as voice recordings and AI-processed workflows.

**External APIs & Services**
- TensorFlow Serving (AI Model): Processes voice commands and generates step-by-step guides.
- Third-Party Integrations (ERP, SaaS apps, Web apps): Connects with services like SAP, banking apps, Netflix, etc., to guide users through automated tasks.
- Payment Gateway (Stripe, PayPal): Handles subscriptions and payments for premium plans.

### Final FE architecture diagram

## Backend Design Specifications

### Proof of Concepts

#### POC Step 1 - Handler Responsibilities (SOLID & Cohesion Principle)

##### Challenged Faced

The original template both handlers are almost identical, both use the same middleware and the same repository, and both of them use the same processing flow. the only difference is the calling of saveData and getData, so lets take that as base line do differenciate them.

- There are unclear responsabilities
- Each handler directly imports and instatiates its dependencies
- Poor separation of concerns due to mix of HTTP concerns with business logic.

It's not clear why `exampleHandlerOne` and `exampleHandlerTwo` are different, both are doing too many things parsing, validation, business logic (via repository), and formatting a response.

##### Solution Chosen

To solve this problem we must refractor the structure using SOLID principles, specially Single Responsability Principle, and Dependecy Inversion, and also the DRY principle:

First create a type.ts file as a central place for interface definitions, by centralizing these interfaces, we establish a clear set of expectations for how components should interact. This follows the Dependency Inversion Principle, allowing handlers and other high level modules to depend on abstractions. Amongst other purposes:

- It serves as self-documentating code clarifying what operations repositories should suppert
- How event processing should work and what a standard HTTP response looks like. 
- If there is a need to change there is one place to do it, and TS will help identify all places to be updated.
- Modularization (Decoupling)
- It's easier to create doubles for testing that implement these interfaces without needing the actual implementations.

```
// types.ts
export interface EventProcessor {
  process(event: any): any;
}

export interface DataRepository {
  saveData(data: any): Promise<any>;
  getData(query: any): Promise<any>;
}

export interface HttpResponse {
  statusCode: number;
  body: string;
  headers?: Record<string, string>;
}
```

Taking as a fact that errors and response formatting will be a common thing with handlers, then it would be only logical to create a module that handles that `baseHandler.ts`:

```
import { EventProcessor, DataRepository, HttpResponse } from '../types';

export abstract class BaseHandler {
  constructor(
    protected eventProcessor: EventProcessor,
    protected repository: DataRepository
  ) {}

  protected abstract executeOperation(processedEvent: any): Promise<any>;

  protected createSuccessResponse(data: any): HttpResponse {
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  protected createErrorResponse(error: Error): HttpResponse {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error occurred',
        error: error.message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  public async handle(event: any): Promise<HttpResponse> {
    try {
      const processedEvent = this.eventProcessor.process(event);
      const result = await this.executeOperation(processedEvent);
      return this.createSuccessResponse(result);
    } catch (error) {
      return this.createErrorResponse(error as Error);
    }
  }
}
```

Taking the above mentioned principles the improve structure for `exampleHandlerOne.ts` would look like this `saveDataHandler.ts`:

```
import { BaseHandler } from './baseHandler';

export class SaveDataHandler extends BaseHandler {
  protected async executeOperation(processedEvent: any): Promise<any> {
    const result = await this.repository.saveData(processedEvent);
    return {
      message: 'Data saved successfully',
      data: result
    };
  }
}
```

And the same for `exampleHandleTwo.ts` as `getDataHandler.ts`:

```
import { BaseHandler } from './baseHandler';

export class GetDataHandler extends BaseHandler {
  protected async executeOperation(processedEvent: any): Promise<any> {
    return await this.repository.getData(processedEvent);
  }
}
```

In this new design the the handlers are actually using the middleware, but indirectly through the EventProcessor interface. The middleware is injected into the handlers when they're instantiated.

Here is the refractor `exampleMiddleWare.ts` and `exampleRepository.ts`:

```
import { EventProcessor } from '../types';

export class ExampleMiddleware implements EventProcessor {
  process(event: any): any {
    // Process the event
    return {
      ...event,
      // Add any necessary transformations
      timestamp: new Date().toISOString()
    };
  }
}
```

```
import { DataRepository } from '../types';

export class ExampleRepository implements DataRepository {
  async saveData(data: any): Promise<any> {
    // Implementation for saving data
    return { id: '123', ...data };
  }

  async getData(query: any): Promise<any> {
    // Implementation for retrieving data
    return { id: '123', name: 'Example', ...query };
  }
}
```

And finally how to implement the handlers:

```
export const exampleHandlerOne = async (event: any) => {
  const middleware = new ExampleMiddleware();
  const repository = new ExampleRepository();
  const handler = new SaveDataHandler(middleware, repository);
  
  return await handler.handle(event);
};

export const exampleHandlerTwo = async (event: any) => {
  const middleware = new ExampleMiddleware();
  const repository = new ExampleRepository();
  const handler = new GetDataHandler(middleware, repository);
  
  return await handler.handle(event);
};
```

##### Advantages over the original template

###### There are now clear responsabilities 
Between the handlers and a sigle one for each:
- `SaveDataHandler` handles saving data
- `GetDataHandler` handles only retrieving data
- `BaseHandler` handles common logic for errors and response formatting

###### Dependencies are now injected 
rather than imported and instantiated:
- Handlers depend on `EventProcessor` and `DataRepository` 
- This makes testing easier as dependencies can be mocked

###### There is now less duplication
Common code has been extracted to the `BaseHandler` class following DRY principle.

###### Better Separations of concern
- HTTP-specific concerns are separated from bussiness logic
- Error handling is centralized in the `BaseHandler`
- Business logic is only in the `excecuteOperation` method for each hendler

#### POC Step 2 - README.md Fixes & Adjustments

##### Challenge faced
The original template’s README lacked documentation on common AWS CLI errors and their possible solutions. This led to confusion during deployment and issues related to AWS functionality within the project.

##### Solution chosen

Additional documentation was added to the README to address these common AWS CLI errors and provide guidance on how to resolve them.

##### Advantages over original template

The updated README offers clearer and more comprehensive information, helping users troubleshoot AWS-related issues more effectively and improving the overall deployment experience.

#### POC Step 3 - Logger Improvements (Design Pattern Required)

##### Challenge faced

The original template used console.log() for logging, which is inadequate for production environments. It lacks features like log levels, structured formatting, and integration with centralized logging systems, making debugging and monitoring difficult in deployed applications.

##### Solution Chosen

We implemented a Logger interface and a CloudWatchLogger class, utilizing the AWS SDK to send logs to CloudWatch Logs. This adheres to the Strategy pattern, allowing for different logging implementations in the future.

##### Advantages over the original template

1. Provides structured logging with log levels (info, error, etc.) for better filtering and analysis.

2. Integrates seamlessly with AWS CloudWatch for centralized log management, enabling efficient monitoring and troubleshooting in production.

3. The Logger interface promotes flexibility, allowing for easy switching to other logging services or methods (e.g., file logging) without modifying the application's core logic.

4. Improves maintainability by encapsulating logging logic within dedicated classes.

#### POC Step 4 - Optional & Mandatory Middleware (Design Pattern Required)

##### Challenge faced

The challenge lies in designing a flexible and extensible middleware architecture that supports both optional and mandatory components. Middleware should be easily chainable, allowing developers to attach multiple layers of logic such as logging, validation, or transformation. However, certain middleware—like authentication or security checks—must always be executed to ensure the integrity and safety of the system. 

The core problem is finding a way to enforce the presence of these mandatory middleware components without compromising the modularity and reusability of the middleware chain. This requires applying an appropriate design pattern that guarantees required middleware are included, while still supporting the dynamic composition of optional middleware.

##### Solution chosen

###### Here is the system flow:
  A request comes in to `exampleHandlerOne`

  **The handler**:

  1. Creates a repository instance
  2. Creates a SaveDataHandler with the repository
  3. Calls handle on the handler with the event


  **The `SaveDataHandler`**:

  1. Inherits from AuthenticatedHandler which requires authentication middleware
  2. Configures its middleware chain with logging, validation, and authentication


  **The `handle` method**:

  1. Processes the event through the middleware chain
  2. The chain verifies all mandatory middleware (authentication) is present
  3. Each middleware processes the event in sequence
  4. The handler executes its operation using the processed event
  5. The handler returns a success or error response



###### Key Design Patterns Used

  1. **Chain of Responsibility**: Middleware components form a chain that processes events in sequence.
  2. **Template Method**: `BaseHandler` defines the algorithm structure while subclasses implement specific steps.
  3. **Composition**: Handlers compose middleware chains rather than inheriting behavior.
  4. **Factory Method**: Each handler creates and configures its own middleware chain.

##### Advantages over original template

  - Flexibility: Each handler can have its own middleware configuration.
  - Extensibility: New middleware can be added without changing existing code.
  - Enforcement: Mandatory middleware can be enforced for specific handler types.
  - Separation of Concerns: Each component has a clear, single responsibility.
  - Testability: Components can be tested in isolation with mock dependencies.

  ###### Common Workflows
    #### Adding a New Middleware

    1. Create a new class that extends `BaseMiddleware`
    2. Implement the `processEvent` method
    3. Add a new type to `MiddlewareType` if needed

    #### Creating a New Handler

    1. Decide if it needs authentication:

      If yes, extend `AuthenticatedHandler`
      If no, extend `BaseHandler`
    2. Configure its middleware chain in the constructor
    3. Implement the `executeOperation` method

    #### Making a Middleware Mandatory

      Pass its type in the constructor of handlers that require it:

      ```
      super(repository, [MiddlewareType.YOUR_MIDDLEWARE]);
      ```
     This can is used in `authenticatedHandler.ts`.

#### POC Step 5 - Repository Layer Improvements (Decoupling & Reusability)

##### Challenge faced

In the original state of the template provided previously in the documentation there are 2 main problems:

- Handlers consume directly the repositories, generating a strong coupling. This means that any changes to the logic of accesing the data or in the data source force changes to the handler code as well.

- There is no middle layer for business logic. The handler assumes all extra responsabilities while processing directly the request and delegating data persistence without applying a separate layer for business logic. This means that validation, transformation, or any other logic inherent to information processing is directly integrated into the routing and event handling logic.

This 2 main problems derivate other drawbacks such as the level of difficulty to implement different types of repositories, in the next sections it will be explain how to solve this situation efficiently.

##### Solution chosen

**Handlers Should Not Directly Access Repositories**

Handlers delegate all data-related operations to a dedicated business logic layer (the DataService). The handlers simply:

- Process and validate incoming events using middleware.

- Call the corresponding method on the service layer (e.g., saveData() or getData()).

- Return a formatted response.

This separation means handlers are now free of any direct dependency on repository implementations.

**Introduce a Business Logic Layer Between Handlers and Repositories**

Layered Architecture:
- The code now have a DataService that encapsulates all business rules and data transformations. This service performs any necessary logic before delegating calls to the repository.

Decoupling:
- The service layer acts as a mediator between the handlers and the repositories. Any change in business logic or validation is handled within the service, thereby isolating the HTTP or event-handling details in the handlers.

**Support Multiple Repositories**

Repository Interface:
- A common interface (DataRepository) defines the methods (saveData, getData, etc.) that all repository implementations must adhere to.

Repository Factory (Factory Method Pattern):
- The RepositoryFactory allows to decide at runtime (or via configuration) which concrete repository implementation to instantiate—whether it be a database repository (DBRepository), an API-based repository (APIRepository), or any other.

Flexibility & Extensibility:
- With this setup, the DataService only interacts with the repository through the common interface. Adding or switching repository types requires no changes to the handlers or even to the service layer logic.

**Ensure Transparency for Handlers**  

Thin, Focused Handlers:
- Handlers now perform only the minimal duties necessary for processing events: running middleware, delegating to the service, and formatting responses. They are completely agnostic about where or how the data is stored.

Modular, Decoupled Components:
- The three layers (handlers, service, repositories) form clear boundaries. This modular design is ideal for serverless environments:

- Handlers can be deployed as individual functions (e.g., AWS Lambda).

- Service layers encapsulate the business rules so they can be independently maintained or even moved to separate microservices if needed.

##### Advantages over the original template

The more notorious advantages or benefits compared to the original template are: 

- Decoupling:
By separating business logic from data access, the direct dependency between layers is reduced. This makes maintenance, unit testing, and code evolution easier.

- Flexibility:
With dependency injection and the use of interfaces, the system can support different repositories (multiple data sources) without modifying the core logic.

- Reusability and Scalability:
Business logic encapsulated in services can be reused across other handlers or processes, and adding new features becomes simpler.

- Readiness for Serverless and Microservices Environments:
A decoupled architecture allows individual parts of the system to be deployed and scaled independently, aligning with the ephemeral and distributed nature of these environments.

#### POC Step 6 - Deployment & Testing

##### Challenge faced
The original template lacked robust testing and deployment procedures. This can lead to increased risk of bugs in production and make it difficult to automate the deployment process.

##### Solution chosen
We implemented unit tests using Jest to verify handler logic. For handlers interacting with the database, we outlined the structure for integration tests, emphasizing the importance of using a separate test database. We also detailed how to use the Serverless Framework for deployment and Postman for API testing.

##### Advantages over the original template

1. Increases code reliability by implementing automated unit tests that catch bugs early in the development cycle.
2. Provides a clear strategy for integration testing, ensuring that handlers interact correctly with external resources like the database.
3. Leverages the Serverless Framework to streamline deployment to AWS, automating the packaging and deployment of code.
4. Utilizes Postman to simplify API testing, enabling developers to easily send requests and verify responses.
5. Improves the overall development workflow by introducing best practices for testing and deployment.

### Backend Architecture

#### 1. REST, GraphQL, gRPC, Monolithic, or Monolithic-MVC?

This project will approach a Monolithic-MVC architecture with a hybrid REST/GraphQL API. The reason for this approach is first because Zathura plans to implement a hybrid approach using both REST and GraphQL. REST handles traditional backend operations, while GraphQL optimizes queries for efficient data retrieval.
In this hybrid model, both would coexist and hadle different types of operations:

1. REST for Traditional Operations
- CRUD operations
- File uploads like voice recordings, training data
- Authentication and user management
- Webhook (a way for one software system to automatically notify another system when a specific event happens) for external service integration

2. GraphQL for Data Retrieval
- Complex dashboard data aggregation
- Customized user-specific views
- Optimized mobile queries to reduce bandwidth usage
- Real time data needs via subcriptions

The devolpment team is just of 4 members and has decided to implement a single-service architectue, which makes much sense to make a monolithic approach than microservices.

##### Internal Layers Handling Requests/Responses
Similar to the PoC, the defined layers are:

1. Handler Layer (Controller in terms of MVC)
- Entry point for all the HTTP resquests (REST) and GraphQL operations.
- Delegates business logic to the Service Layer
- Applies middleware for cross-cutting concerns
- Returns formatted HTTP responses

2. Middleware Layer
- Pre-/post-processing for handlers 
- Authentication, logging, request parsing
- Could be optional or mandatory depending of context

3. Service Layer
- Contains core business logic CRUD and others
- Coordinates between repositories and other services
- Validations and transformations

4. Repository Layer
- Abstracts data access operations
- Implements interfaces for different data sources
- Handles persistence logic

5. AI Layer
- Process voice commands with TensorFlow
- Generated automated tasks
Interfaces with the service layer

##### How do object design patterns interact with requests or any other triger

1. Factory Pattern
    Used in the Repository layer to dynamically create appropriate repository instances and triggered during request handling to select the correct data source

2. Repository Pattern
    Abstracts data source operations behind interfaces. Allows handlers/services to work with data without knowing storage details

3. Template Method Pattern
    Evident in the BaseHandler abstract class, defines the skeleton of request handling while allowing subclasses to override specific steps

4. Strategy Pattern
    Applied to middleware components, allowing different processing strategies to be applied to requests
    and supports both optional and mandatory middleware

5. Dependency Injection
    Services receive repositories through construction. Handlers receive services through construction, and facilitates testing and loose coupling

6. Event-Driven Pattern
    After handling synchronous aspects of requests, events are published via Google Cloud Pub/Sub
    These events trigger asynchronous processing for time-consuming operations

7. Pub/Sub Pattern
    When certain actions are triggered (like task recording), multiple subscribers can react
    Allows for extensibility without modifying existing code


This architecture provides a clean separation of concerns, enables efficient request handling, and maintains flexibility for future growth while keeping the system manageable for the current team size and development stage.

#### 2. Serverless, Cloud, On-Premise, or Hybrid?

This project is designed for a cloud based infraestructure with serverless component in a hybrid approach. Google Cloud Platform has been chosen as cloud provider for Firebase and scalable cloud services for core fuctionability.

##### Hardware Semands and Cloud Machine Types
1. Compute resourses
  - AI and Machine Learning processing: TensoFlow workloads for voice command processing require GPU-accerated instances, meaning the employment of a graphics processing unit (GPU) along with a computer processing unit (CPU).
  - Backend services are needed, standard compute instances for Node.js and Python services.
  - Virtual machines from Google Cloud Platform like `n1-standard` for the Node.js services, `n1-highmem` for Pyhton AI processing, and `t2d-standard` for cost-efficient background processing.

2. Storage Requirements
  - Database: PostgreSQL requires persistent SSD storage
  - Voice Recordings: Cloud Storage buckets for user-generated content
  - GCP Storage Types:

    Cloud SQL with SSD persistent disks for PostgreSQL

    Standard storage class in Cloud Storage for voice recordings

    Nearline storage for older, less frequently accessed data

3. Network Requirements

  - Content delivery network for global user base "global availability
  - API Gateway: For securing and managing API endpoints
  - GCP Network Services related to this:

    Cloud CDN for content delivery
    Cloud Load Balancing for distributing traffic

4. Serverless Components

  - Firebase
    Authentication service
    Real-time database for specific use cases
    Hosting for web applications

  - Cloud Functions
    Event-driven processing for voice command analysis
    Webhook handlers for third-party integrations

  - Cloud Run
    Containerized microservices for core business logic
    Scales automatically based on demand

##### Impacts frameworks, libraries, and programming languages.

1. Programming Languages

  **Node.js**: It's a efficient languaje able to handle multiple connections, event-driven architecture which aligns with serverless model, it has a rich ecosystem of libraries too. It has very good support with GCP cloud functions and cloud run (deployment). 
  **Python**: It has impressive campabilities for ML and AI through TensorFlow, ectensive data processing libraries which is a important key for Zathura.
  On cloud it has native support in GCP's AI platform, with integration with BigQuery for analytics

2. Frontend Frameworks

  **Flutter**: Its crossplataform compability reduces development effort and time, and has a efficient background processing.
  Works well with Firebase services (Authentication and cloud messaging), meaning there is compability between them.

  **React**: This framework has high performance, component reusability, and a large ecosystem.
  It is optimized for Firebase hosting, and integrates well with most GCP services.

3. Database Technologies

  **PostgresSQL**: It is a robust relational database, ACID complience, poweful capabilities.
  It is fully managed in Cloud SQL, reucing operational overhead.

  **Firebase**: It has real time updates, offline support, serverless operations.
  Also native with GCP.

4. DevOps & CI/CD
  
  **Github Actions**: Makes automated workfows, community-built actions. 
  It also has a strong integration with GCP deployment targets.

5. AI/ML Frameworks
  
  **TensoFlow**: For now the industry leading ML framework, with extensice model options. 
  Ptimized performance on GCP AI platform, and TPU (hardware accelerator specialized in AI) support.

6. Libraries:
  **React Testing Library**: Provides testing for react components
  **Flutter Test**: Provides testing for flutter apps.
  **pytest**: Useful for backend unit and integration testing.
  **Appium**: For automation testing for third party app interactions. 

#### 3. Service vs Microservice
Zathura is still an early in development application, taking this into account chosing to implement the single-service architecture is a strategic and realistic decision. This decision is justified by the following reasons:

##### 1. Operational Simplicity

- A single service means one codebase and one deployment pipeline.

- There's no need for complex infrastructure such as service mesh, load balancers, or distributed monitoring.

- It simplifies debugging, testing, and deployments.

##### 2. Faster Development

- Changes to business logic, database structure, or UI can be implemented, tested, and released much faster.

- No communication overhead between distributed components or teams.

##### 3. Cost Efficiency

- Avoids the early cost and infrastructure overhead of managing microservices.

- The team can stay focused on building core features rather than solving distributed system problems prematurely.

##### 4. Sufficient Scalability

- Internal modularity (handlers, services, repositories) ensures code maintainability and room for performance tuning.

- Vertical scaling is feasible for expected traffic in the short term.

- When necessary, you can extract services in the future thanks to the layered architecture already in place.

##### Logical division for workload distribution

Now, talking about logical distribution, even with a single service, clear internal separation of concerns is crucial to enable effective workload distribution and code scalability. The logical division for workload distribution are:

| Layer         | Responsability                                        |
|---------------|-------------------------------------------------------|
| Handlers      | Handle HTTP request and delegate to services          |
| Services      | Contain business logic and coordinate repositories    |
| Respositories | Data acces layer (DB, external sources)               |
| AI/ML Layer   | Voice recognition, workflow generation via TensorFlow |
| Middleware    | Request parsing, validation, logging, etc..           |

##### Code organization

For purposes of being in agreement with the logical division set the code organization will be the one described in the following image:

![image](https://github.com/user-attachments/assets/9281a40c-2e92-41d8-851e-7aa8d6c086c5)

##### Team collaboration

Given the 4-member team, this section describes a practical distribution of roles based on expertise and responsibilities:

| Member        | Main Role                     | Responsabilities                                    |  
|---------------|-------------------------------|-----------------------------------------------------|
| Pablo         | Architecture & Core Backend   | Services layer, repository design, logic decoupling |       
| Alonso        | AI / ML Processing            | TensorFlow integration, voice command workflows     |
| Ana           | Frontend & Authentication     | Firebase Auth, UI integration (Flutter & React)     |   
| Jesus         | QA & DevOps                   | GitHub Actions, CI/CD setup, testing strategy       |

#### 4. Event-Driven, Queues, Brokers, Producer/Consumer, Pub/Sub

Below in this section is a detailed explanation on how the architectures named in the title can be applied to the application, along with the proposed cloud services to implement each of the achitectures and a proposal of integration layers with their respective classes.

##### a) Event-Driven architecture (Google Cloud Pub/Sub)

When a user completes a voice recording or triggers an action, an event is generated to start downstream processing. For example, after recording a voice command, an event can trigger asynchronous analysis using AI (TensorFlow) and then update the knowledge base or prepare guidance steps.

**BENEFITS**

- Decouples the initiation of an action from its processing.
- Enables reactive, real-time adjustments and asynchronous workflows. 

##### b) Queues and Producer/Consumer Pattern (Google Cloud Pub/Sub and Google Cloud Tasks)

Some processes, such as processing audio files and running heavy AI computations, can be time-consuming. Instead of blocking the user request, these tasks are added to a queue to be processed later by a dedicated consumer service.

**BENEFITS**

- Improves system responsiveness by offloading heavy or long duration tasks.
- Enables load leveling so that peaks of incoming requests are buffered (temporarily storing or "buffering" these requests).
  
##### c) Brokers and Pub/Sub (Google Cloud Pub/Sub)

Messaging brokers support Pub/Sub systems where an event (like “Task Recorded” or “Workflow Analyzed”) is published, and various subscribers (e.g., logging, analytics, notification services) can react independently. This makes it easier to expand functionalities without tightly coupling components. In a more specific way, the broker (which supports the Publish/Subscribe model), lets the producer publishes an event once and the broker then reliably distributes that event to multiple subscribers. For example, multiple services can subscribe to the “Task Recorded” event and perform different actions (e.g., update the workflow database, trigger notifications, log activity for auditing) without interfering with each other. 

**BENEFITS**

- Scalability and flexibility by allowing multiple services to subscribe to the same events.
- Centralized message management with robust delivery guarantees.

##### Integration Layers

**Messaging Integration Layer:**
Contains the EventPublisher and EventSubscriber classes; handles Pub/Sub topics and subscriptions for event-driven processing.

**Queue Integration Layer:**
Contains the TaskQueueManager class; encapsulates asynchronous task submission using Cloud Tasks. You might also include retry logic and schedule management here.

**Service/Business Layer Integration:**
Your existing service classes (e.g., ExampleService) will call these messaging utilities to publish events or queue tasks. For example, after processing a voice command, ExampleService will call EventPublisher.publishEvent('voiceCommandTopic', payload) to trigger downstream processing without blocking user interaction.

**Controller/Handler Layer:**
Handlers (such as API endpoints) receive HTTP requests and delegate to the service layer, which in turn uses the messaging integrations.

#### 5. API Gateway (Security & Scalability)?

An API Gateway will not be used in this project because the application is designed as a single-service architecture. Since all logic and functionality are encapsulated within a single backend service, introducing an API Gateway would add unnecessary complexity and overhead without providing significant benefits. Features commonly handled by an API Gateway—such as request routing between multiple services, load balancing, or service aggregation—are not applicable in this context. As a result, direct communication between the client and the service is sufficient and more efficient for the current scope of the application.

### Data Layer Design for Zathura

**I. Structural - Infrastructure, Architecture, DevOps, DataOps**

* **a) Data Topology:**
    * Begin with a managed PostgreSQL service configured for high availability with a primary instance and read replicas.
* **b) Big Data Repository:**
    * Implement a data lake using Google Cloud Storage to store raw data from user interactions and AI processing. Integrate this with BigQuery for analytical purposes.
* **c) Relational or NoSQL:**
    * Primarily use PostgreSQL for the core application data. Supplement this with Cloud Firestore for specific needs:
        * PostgreSQL: For structured data requiring ACID properties and complex queries.
        * Cloud Firestore: For real-time updates, user presence.
* **d) Tenancy, Permissions, Privacy, and Security:**
    * Leverage Firebase Authentication for user authentication and authorization.
    * Use PostgreSQL's role-based access control to manage data access within the database.
    * Enforce encryption at rest using Cloud SQL's encryption features and in transit.
    * Implement regular security audits and vulnerability scanning.
* **e) Recovery and Fault Tolerance:**
    * Utilize the automated backup and recovery features of Google Cloud SQL.
    * Implement cross-region replication for disaster recovery.
    * Establish clear Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO).

**II. Object-Oriented Design - Programming**

* **a) Transactional via Statements or Stored Procedures:**
    * Use a combination of both:
        * Statements: For simple, dynamic queries and ORM interactions.
        * Stored Procedures: For complex, performance-critical operations and reusable database logic.
* **b) Use of ORM:**
    * Employ an ORM.
    * This will significantly improve development speed and maintainability.
    * Choose an ORM that supports asynchronous operations and connection pooling.
* **c) Layers for Control:**
    * Strictly adhere to a layered architecture:
        * DAL: Abstract database interactions.
        * BLL: Enforce business rules and logic.
        * Presentation Layer: Handle UI and user input.
        * Implement connection pooling, transaction management, and robust error handling within the DAL.
* **d) Use of Cache:**
    * Integrate a caching layer using Cloud Memorystore (Redis).
    * Use the cache-aside pattern for most data access.
    * Consider caching frequently accessed data, API responses, and results of expensive computations.
* **e) Drivers:**
    * Use the recommended drivers for PostgreSQL:
        * pg (Node.js)
        * psycopg2 (Python)
    * Ensure the drivers are up-to-date and configured for optimal performance.
* **f) Data Design:**
    * Prioritize database normalization to maintain data integrity.
    * Use appropriate data types and indexing to optimize query performance.
    * Design the database schema to be scalable and flexible to accommodate future changes.

## Architecture Design

## Architecture Compliance Matrix



|                            | N-layer Architecture | Flutter Mobile | React Web | Firebase Auth | Monolithic-MVC with Hybrid REST/GraphQL | PostgreSQL | TensorFlow | GCP Cloud Infrastructure | SOLID & Design Patterns |
|----------------------------|----------------------|----------------|-----------|---------------|----------------------------------------|------------|------------|--------------------------|-------------------------|
| **Non-Functional Requirements** |                  |                |           |               |                                        |            |            |                          |                         |
| Scalability                |                     | ❌             | ❌        | ❌            | ❌                                     | ❌         | ❌         | ❌                       | ❌                      |
| Security                   |                     |               |          | ❌            | ❌                                     | ❌         |           | ❌                       | ❌                      |
| Performance                | ❌                   | ❌             | ❌        |              | ❌                                     | ❌         | ❌         | ❌                       | ❌                      |
| Compatibility              | ❌                   | ❌             | ❌        | ❌            | ❌                                     | ❌         |           | ❌                       | ❌                      |
| Usability                  |                     | ❌             | ❌        | ❌            |                                       |           |           |                        |                        |
| **Top Functional Requirements** |                 |                |           |               |                                        |            |            |                          |                         |
| Task Recording             | ❌                   | ❌             | ❌        |             | ❌                                     | ❌         | ❌         | ❌                       | ❌                      |
| Real-Time Assistance       | ❌                   | ❌             | ❌        |              | ❌                                     |           | ❌         | ❌                       | ❌                      |
| Enterprise & User Management | ❌                |               |          | ❌            | ❌                                     | ❌         |           | ❌                       | ❌                      |



### Non-Functional Requirements
#### Scalability

  **N-layer Architecture**: While the separation of concerns enables some scalability, the monolithic nature may limit horizontal scaling beyond a certain point. Even with separation of concerns, everything is still tightly bundled. This causes issues when trying to scale horizontally (i.e., adding more machines to handle more load).

  **Flutter Mobile**: Efficient background processing capabilities support handling increased user load without performance degradation.
  **React Web**: React's virtual DOM and component architecture enable efficient rendering even with large amounts of data.
  **Firebase Auth**: Firebase Authentication is designed to handle millions of users with automatic scaling.
  **Monolithic-MVC with Hybrid REST/GraphQL**: GraphQL optimizes data retrieval, reducing bandwidth and enabling selective data fetching for better scaling.
  **PostgreSQL**: Supports both vertical scaling and read replicas for handling increased load.
  **TensorFlow**: Capable of distributed processing and hardware acceleration for scaling machine learning tasks.
  **GCP Cloud Infrastructure**: Provides auto-scaling capabilities for handling the required growth from 900 to 500,000 users.
  **SOLID & Design Patterns**: Promotes loose coupling and high cohesion, facilitating easier scaling and maintenance.

#### Security

  **N-layer Architecture**: Provides some security through separation of concerns, but requires additional security measures at each layer.
  **Flutter Mobile**: Offers some built-in security features but requires additional implementation for encryption and secure storage.
  **React Web**: Similar to Flutter, needs additional security implementations for client-side security.
  **Firebase Auth**: Fully supports 2FA, secure session management, and complies with security standards.
  **Monolithic-MVC with Hybrid REST/GraphQL**: The MVC pattern allows for centralized security controls and GraphQL enables fine-grained access control.
  **PostgreSQL**: Provides strong data encryption, role-based access control, and audit logging capabilities.
  **TensorFlow**: Limited built-in security features; requires additional measures to secure AI/ML pipelines.
  **GCP Cloud Infrastructure**: Offers comprehensive security features including encryption at rest and in transit.
  **SOLID & Design Patterns**: Design patterns like Strategy for authentication enable flexible security implementation.

#### Performance

  **N-layer Architecture**: Clean separation enables optimizing each layer independently for performance.
  **Flutter Mobile**: Native-like performance and efficient background processing capabilities.
  **React Web**: Virtual DOM minimizes DOM operations for responsive UI performance.
  **Firebase Auth**: While generally fast, network latency can occasionally exceed the 3-second response time requirement.
  **Monolithic-MVC with Hybrid REST/GraphQL**: GraphQL optimizes network requests by fetching only needed data.
  **PostgreSQL**: Provides indexing and query optimization for fast data retrieval.
  **TensorFlow**: GPU acceleration enables high-performance AI processing without affecting device performance.
  **GCP Cloud Infrastructure**: High-performance compute resources and global CDN ensure fast response times.
  **SOLID & Design Patterns**: Patterns like Repository pattern enable caching and optimized data access.

#### Compatibility

  **N-layer Architecture**: Platform-agnostic design enables consistent functionality across different environments.
  **Flutter Mobile**: Single codebase supports both iOS and Android platforms.
  **React Web**: Works across all modern browsers supporting the compatibility requirement.
  **Firebase Auth**: Available on all required platforms (Web, iOS, Android, macOS, Windows).
  **Monolithic-MVC with Hybrid REST/GraphQL**: Standard protocols ensure compatibility with various clients.
  **PostgreSQL**: Available on all major platforms with consistent behavior.
  **TensorFlow**: Some platform-specific optimizations may be required for consistent performance.
  **GCP Cloud Infrastructure**: Platform-agnostic cloud services accessible from any environment.
  **SOLID & Design Patterns**: Abstraction principles ensure consistency across platforms.

#### Usability

  **N-layer Architecture**: Indirectly affects usability through system responsiveness but doesn't directly address user experience.
  **Flutter Mobile**: Rich UI components and consistent cross-platform experience enhance usability.
  **React Web**: Component-based architecture facilitates creating intuitive interfaces.
  **Firebase Auth**: Provides pre-built, user-friendly authentication flows.
  **Monolithic-MVC with Hybrid REST/GraphQL**: Impacts UI responsiveness but doesn't directly address user experience design.
  **PostgreSQL**: Database choice doesn't directly impact usability.
  **TensorFlow**: ML framework doesn't directly impact user interface usability.
  **GCP Cloud Infrastructure**: Can impact performance and thus indirectly affect usability, but no direct impact on UI/UX.
  **SOLID & Design Patterns**: Can facilitate better code organization but doesn't directly improve end-user experience.

### Top Functional Requirements
#### Task Recording

  **N-layer Architecture**: Separation of concerns enables efficient recording, processing, and storage of tasks.
  **Flutter Mobile**: Background processing capabilities enable recording voice and screen interactions.
  **React Web**: Supports recording tasks through web interfaces effectively.
  **Firebase Auth**: Provides user identification for recordings but no direct support for the recording functionality.
  **Monolithic-MVC with Hybrid REST/GraphQL**: REST endpoints efficiently handle recording submissions while GraphQL optimizes retrieval.
  **PostgreSQL**: Structured storage for recorded tasks and associated metadata.
  **TensorFlow**: Processes voice recordings and extracts key actions for workflow generation.
  **GCP Cloud Infrastructure**: Cloud storage and processing power for handling recordings.
  **SOLID & Design Patterns**: Factory and Strategy patterns enable flexible recording implementation across platforms.

#### Real-Time Assistance

  **N-layer Architecture**: Service layer can efficiently detect tasks and provide assistance.
  **Flutter Mobile**: Supports background monitoring and real-time notifications.
  **React Web**: Supports real-time assistance through responsive UI updates.
  **Firebase Auth**: Ensures only authorized users receive assistance but doesn't provide assistance functionality.
  **Monolithic-MVC with Hybrid REST/GraphQL**: GraphQL subscriptions can enable real-time assistance features.
  **PostgreSQL**: Stores assistance data but may require additional caching for real-time performance.
  **TensorFlow**: AI capabilities identify when users need assistance and generate guidance.
  **GCP Cloud Infrastructure**: Pub/Sub enables real-time event processing for timely assistance.
  **SOLID & Design Patterns**: Observer pattern facilitates event-based assistance triggers.

#### Enterprise & User Management

  **N-layer Architecture**: Clear separation allows for comprehensive user and role management.
  **Flutter Mobile**: Provides UI for user management but requires backend integration for enterprise features.
  **React Web**: Similar to Flutter, provides UI but depends on backend for complete enterprise management.
  **Firebase Auth**: Fully supports user authentication, roles, and permissions management.
  **Monolithic-MVC with Hybrid REST/GraphQL**: Facilitates complex user and permission queries required for enterprise management.
  **PostgreSQL**: Relational database well-suited for modeling complex organizational hierarchies and permissions.
  **TensorFlow**: AI framework has no direct role in user management functionality.
  **GCP Cloud Infrastructure**: Provides secure, scalable infrastructure for enterprise user management.
  **SOLID & Design Patterns**: Patterns like Role-Based Access Control can be implemented effectively.


<br><br><br><br><br><br>

<p align="center">End of document.</p>
