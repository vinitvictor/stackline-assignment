### Project URL - http://retail-sales-app-bucket.s3-website-us-east-1.amazonaws.com/
---

## Given:
1.	A JSON file to be used as the data source to populate the web page
2.	A wire mockup of what your final web page should look like.  You only need to implement the page with the graph and/or table.
3.	SVG of the Stackline logo

## Project Requirement
1.	A solution that resembles the provided mockup closely and implements AT LEAST ONE of either the graph or table as seen in the mockup
2.	A working solution that takes the provided JSON file as output from a mock API call
3.	A solution that implements React and Redux best practices and patterns
4.	Clean, easy to follow code


## Features Completed
1. Stackline Logo Added
2. Added support for multiple product scalability
3. Sorting in the table
4. Based on selected sorting the chart also changes against Retail Sales.
5. The application is hosted using serverless framework and deployed in static website s3 bucket.

## Installation Instructions

Follow these instructions to get a development environment up and running.

Clone the repository

```
gh repo clone vinitvictor/stackline-assignment
```

Install dependencies

```
# cd into root directory
npm install
```

Build the app in development mode

```
npm run build
```

Run the app in development mode

```
npm run start
```

## Deploment Instructions

Follow these instructions to deploy the app using serverless

Install Serverless Framework

```
npm install -g serverless

```

Add AWS access key and secrets

```
aws configure
```

Deploy application

```
serverless deploy
```

