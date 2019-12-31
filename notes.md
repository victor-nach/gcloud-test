# cloud shell
- on the online console of the gcloud shell, you have access to multiple project files asides from the cloud platform project that has been specified for that particular session

# steps to run an app on gcloud console from github
- pull the repo using git clone then cd into the project directory
- run npm install to install dependencies
- you can start the app on the gcloud console in the same way as you would start the app locally
- and then click on the browser icon to open a browser on a specific port, the default is (8080)
- you do not need an app.yaml file for this

# deploy to app engine
- first you need to create the app and select a region using the `gcloud app create` command
- next deploy the app using the `gclopud app deploy` command
- if you don't specify and app.yaml file it would look for a file named app.yaml in the root directory where the command is being run and deploy
- without an app.yaml the deployment won't work