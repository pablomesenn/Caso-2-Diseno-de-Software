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

## Frontend design specifications"

### Authentication platform

The Authentication platform our team decide to use for the purpose of the current case was "Firebase Authentication". This platform is a service that is a part of the catalog services that Firebase offers. Firebase is a mobile and web development platform created by Google, and it provides a comprehensive suite of tools to simplify authentication and user management. We descibre the multiple reasons why we think this tool is suficcient for the needed to complete task in the following point:

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
