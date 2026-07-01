# Beeceptor HTTP Callout Automation using Playwright

## Overview

This project automates the complete Beeceptor HTTP Callout workflow using Playwright (JavaScript).

The automation performs the following tasks:

- Login to Beeceptor
- Reuse an existing endpoint (`demo-test`)
- Open Mock Rules
- Create an HTTP Callout Rule
- Configure the rule
- Save the rule
- Trigger the API request
- Verify the API response
- Demonstrate the end-to-end workflow

---

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Dotenv

---

## Project Structure

```
beeceptor-assignment
│
├── pages
│   ├── LoginPage.js
│   ├── HttpCalloutPage.js
│
├── tests
│   ├── login.spec.js
│
├── .env
├── package.json
├── playwright.config.js
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/vijaydarshana/beeceptor-assignment
```

Go to project

```bash
cd beeceptor-assignment
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Environment Variables

Create a `.env` file.

```env
EMAIL=your_beeceptor_email
PASSWORD=your_beeceptor_password
```

---

## Running the Test

Run the automation

```bash
npx playwright test --headed
```

Generate HTML Report

```bash
npx playwright show-report
```

---

## Test Flow

The automation performs the following steps.

1. Launch Beeceptor
2. Login using credentials
3. Open the existing endpoint
4. Open Mock Rules
5. Create HTTP Callout Rule
6. Configure

- Request Method : POST
- Request Path : /create
- Response : Instant Mock Response

7. Save the Rule
8. Trigger

```
POST https://demo-test.free.beeceptor.com/create
```

9. Verify

- HTTP Status 200
- Request received successfully

---

## Features

✔ Page Object Model

✔ Environment Variables

✔ End-to-End Automation

✔ API Verification

✔ Reusable Components

✔ Playwright Best Practices

---

## Project Highlights

- Automated complete Beeceptor workflow
- Used Playwright Page Object Model
- Reused existing endpoint
- Automated HTTP Callout Rule creation
- Triggered endpoint using API request
- Verified successful execution

---

## Future Improvements

- Dynamic endpoint creation
- Automatic rule cleanup
- Better reporting
- CI/CD using GitHub Actions
- Cross-browser execution

---

## Author

Darshana Vijay

