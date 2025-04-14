# Serverless TypeScript Project

This project is a serverless application built with TypeScript, utilizing AWS services. It demonstrates how to create AWS Lambda functions with middleware and a repository layer.

## Project Structure

```
svlesstemplate
├── src
│   ├── handlers
│   │   ├── exampleHandlerOne.ts
│   │   └── exampleHandlerTwo.ts
│   ├── middleware
│   │   └── exampleMiddleware.ts
│   ├── repository
│   │   └── exampleRepository.ts
│   └── utils
│       └── logger.ts
├── .env
├── serverless.yml
├── package.json
├── tsconfig.json
└── README.md
```

## Prerequisites

- Node.js (v14.x or later)
- AWS CLI configured with your credentials
- Serverless Framework installed globally (`npm install -g serverless`)

## Possible AWS CLI Errors and Solutions

### 1. Missing or Incorrect Credentials

**Error:** `Unable to locate credentials` or `InvalidClientTokenId`  
**Solution:**  
- Run `aws configure` and make sure to enter valid Access Key, Secret Key, and region.
- If using a `.env` file, verify that the keys are correctly defined and loaded.

### 2. Insufficient Permissions

**Error:** `AccessDenied` or `is not authorized to perform`  
**Solution:**  
- Ensure your IAM user/role has the correct permissions to deploy resources (Lambda, API Gateway, etc.).
- Validate any custom policies attached to your AWS identity.

### 3. Incorrect AWS Region

**Error:** `The specified region is not valid`  
**Solution:**  
- Double-check your region in `~/.aws/config` or your `.env` file.
- Confirm the region supports the services your project uses.

### 4. Conflicts from Multiple AWS Profiles

**Issue:** Incorrect credentials due to active profile mismatch.  
**Solution:**  
- Specify the correct profile with `--profile <profile-name>` when running commands.
- Or set the `AWS_PROFILE` environment variable accordingly.

### 6. Network or Connectivity Issues

**Error:** `Connection timed out` or unexpected connection failures.  
**Solution:**  
- Ensure you're connected to the internet and can reach AWS endpoints.
- Check firewalls or proxies that might block outbound traffic.

## Setup Instructions

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd svlesstemplate
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add your AWS credentials and any other necessary configuration settings.

4. **Compile TypeScript**:
   Ensure TypeScript is compiled before running or deploying:
   ```bash
   npm run build
   ```

## Local Execution

To test the Lambda functions locally, you can use the Serverless Framework's offline plugin. First, install the plugin:

```bash
npm install serverless-offline --save-dev
```

Then, add the following to your `serverless.yml` under `plugins`:

```yaml
plugins:
  - serverless-offline
```

Now you can run the application locally:

```bash
serverless offline
```

## Deployment to AWS

To deploy the application to AWS, run the following command:

```bash
serverless deploy
```

This command will package your application and deploy it to AWS, creating the necessary resources.