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
- during deployment a PORT variable is automatically set to 8080, this is the exposed port on appspot...
- also you can deploy any branch you are on, on the gcloud console

# viewing logs
- you can view logs using the `gcloud app logs read` to read the logs for the current app
- you can alos get a stream of recent logs using `tail` instead of `read` as `gcloud app logs tail`

# environment variables
- env variables specified in app.yaml are not available when testing on gcloud but are available when you deploy
- you can define environment variables in app.yaml under the `env_variables:` property

# debugging an instance
- go to the instances pages, you would see a list of all the instances
- click on ssh to put that instance in debug mode and open an ssh terminal in a new window
- run `sudo docker ps` to see a list of all the containers
- look for the container that has your project-id attached to it
- run `sudo docker exec -it CONTAINER_ID /bin/bash` to open an interactive terminal for the deployment of that container

# github app triggers
- you can use triggers under gcloud build / trigger

# cloud storage
- To create a new bucket, go to storage / storage / browser. you would see a list of all the buckets you have there
- click on the create bucket icon and create the bucket. note that the bucket namespace is global