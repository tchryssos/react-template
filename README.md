# Troy's React / Typescript template

## Setup
1. clone the repo
1. `npm install`
1. edit the meta properties
  - name, version, description, author, and deploy command in package.json
  - title and meta description in app.html
  - change the favicon in the static folder

## Running Locally

There are 2 ways to run the app locally:

- `npm run start`
- `npm run start:build`

`start` uses a `development` node env and webpack dev server. This is what should be used for regular development (defaults to port 3000).

`start:build` runs the `build` command to create a production build of the app, then serves that build via a local server (defaults to port 3003). This should be used for things like lighthouse score, etc.


## Deploying

Per the setup instructions, you should have modified your deployment command based on your host. My deploy command is built assuming a deployment to a DigitalOcean Ubuntu server built with the following guides:

- [Deploy a Create React App Website to Digital Ocean](https://coderrocketfuel.com/article/deploy-a-create-react-app-website-to-digitalocean#deploy-website-to-your-server)
- [How to set up up nginx with http2 support on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-with-http-2-support-on-ubuntu-18-04)

If you have followed these guides, then you only need to modify the deploy command to include your server username, IP, and domain.