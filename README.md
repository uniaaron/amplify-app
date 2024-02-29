# Access Wagg.ly

Wagg.ly is already deployed on AWS Amplify and can be accessed through this link: [Wagg.ly](https://main.d34qoqmokmze25.amplifyapp.com/)

## Deploying Wagg.ly on AWS

If you wish to deploy this application on AWS Amplify yourself follow these instructions:

1. Go to [Amplify Hosting](https://eu-west-2.console.aws.amazon.com/amplify/)

2. Select: *New app* --> *Host web app* --> *GitHub* --> *Continue*

3. Authorise your GitHub account to AWS Amplify 

4. Select the repository which holds your React application

5. Select the branch which will be used for the deployment of the application (e.i. main or master)

6. Tick "Allow AWS Amplify to automatically deploy all files hosted in your project root directory" and click next

7. Lastly, save and deploy - once deployed you can access the web application via the link given


## Deploying Wagg.ly Locally

Wagg.ly can also be deployed locally with the APIs still available to use

1. Create new folder

2. `git clone https://github.com/uniaaron/amplify-app.git` - clones the repo into  the folder

3. `cd amplify-app` - make cloned repo the current directory

4. `npm install` - install node

5. `npm start` - runs the application on `localhost:3000`