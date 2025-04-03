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

## Frontend design specifications"

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
