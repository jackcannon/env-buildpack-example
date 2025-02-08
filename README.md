# heroku-buildpack-env-example

An example of [heroku-buildpack-env](https://github.com/jackcannon/heroku-buildpack-env) in use.

## Notes

- Loads the Environment Variables with [heroku-buildpack-env](https://github.com/jackcannon/heroku-buildpack-env).
- Logs out the appropriate environment variables via a Node.js build step.
- Runs an nginx server, serving whatever the value of `NGINX_ROOT` is.

## Alternative

Remove `https://github.com/jackcannon/heroku-buildpack-nginx` from `.buildpacks` to run the node.js server, which will print out the environment variables at runtime.


## Build log

```
-----> Cleaning up...
-----> Building env-example from herokuish
-----> Adding BUILD_ENV to build environment...
       BUILD_ENV added successfully
-----> Warning: Multiple default buildpacks reported the ability to handle this app. The first buildpack in the list below will be used.
       Detected buildpacks: multi nodejs static
-----> Multipack app detected
=====> Downloading Buildpack: https://github.com/jackcannon/heroku-buildpack-env
=====> Detected Framework:
-----> Looking for environment files
-----> Found .env.dokku, loading environment variables
       Setting NGINX_ROOT
       Setting EXAMPLE_ENV_1
       Setting EXAMPLE_ENV_2
       Setting EXAMPLE_ENV_3
-----> Environment loading complete
=====> Downloading Buildpack: https://github.com/jackcannon/heroku-buildpack-node
=====> Detected Framework: Node.js

-----> Creating runtime environment

       NPM_CONFIG_LOGLEVEL=error
       NODE_VERBOSE=false
       NODE_ENV=production
       NODE_MODULES_CACHE=true

-----> Installing binaries
       engines.node (package.json):   unspecified
       engines.npm (package.json):    unspecified (use default)

       Resolving node version 22.x...
       Downloading and installing node 22.13.1...
       Using default npm version: 10.9.2

-----> Restoring cache
       - node_modules (not cached - skipping)

-----> Installing dependencies
       Installing node modules (package.json)

       up to date, audited 1 package in 534ms

       found 0 vulnerabilities

-----> Build
       Running build

       > heroku-buildpack-env-example@1.0.0 build
       > node print-env.js

       ┌───────────────┬─────────────┐
       │ (index)       │ Values      │
       ├───────────────┼─────────────┤
       │ NGINX_ROOT    │ 'sites/bar' │
       │ EXAMPLE_ENV_1 │ 'foo'       │
       │ EXAMPLE_ENV_2 │ 'bar'       │
       │ EXAMPLE_ENV_3 │ 'baz'       │
       └───────────────┴─────────────┘

-----> Caching build
       - node_modules (nothing to cache)

-----> Pruning devDependencies

       up to date, audited 1 package in 359ms

       found 0 vulnerabilities

-----> Build succeeded!
=====> Downloading Buildpack: https://github.com/jackcannon/heroku-buildpack-nginx
=====> Detected Framework: .static
-----> Copy static files to www
-----> Reusing nginx binary from cache
-----> Using default app-nginx.conf.sigil
-----> Using default mime.types
       Using release configuration from last framework (.static).
-----> Discovering process types
       Default types for  -> web
-----> Releasing env-example...
-----> Checking for predeploy task
       No predeploy task found, skipping
-----> Checking for release task
       No release task found, skipping
=====> Processing deployment checks
 !     No healthchecks found in app.json for web process type
       No web healthchecks found in app.json. Simple container checks will be performed.
       For more efficient zero downtime deployments, add healthchecks to your app.json. See https://dokku.com/docs/deployment/zero-downtime-deploys/ for examples
-----> Deploying env-example via the docker-local scheduler...
-----> Deploying web (count=1)
       Attempting pre-flight checks (web.1)
-----> Executing 2 healthchecks
       Running healthcheck name='default' type='uptime' uptime=10
       Running healthcheck name='port listening check' attempts=3 port=5000 retries=2 timeout=5 type='listening' wait=5
       Healthcheck succeeded name='port listening check'
       Healthcheck succeeded name='default'
       All checks successful (web.1)
=====> Start of env-example container output (abcdefghijkl web.1)
=====> End of env-example container output (abcdefghijkl web.1)
       Scheduling old container shutdown in 60 seconds (web.1)
=====> Triggering early nginx proxy rebuild
-----> Ensuring network configuration is in sync for env-example
-----> Configuring env-example.XXXXXXXXXXX.co.uk...(using built-in template)
-----> Creating http nginx.conf
       Reloading nginx
-----> Running post-deploy
-----> Ensuring network configuration is in sync for env-example
-----> Configuring env-example.XXXXXXXXXXX.co.uk...(using built-in template)
-----> Creating http nginx.conf
       Reloading nginx
-----> Renaming containers
       Found previous container(s) (nopqrstuvwxy) named env-example.web.1
       Renaming container (nopqrstuvwxy) env-example.web.1 to env-example.web.1.1234567890
       Renaming container env-example.web.1.upcoming-1234 (abcdefghijkl) to env-example.web.1
-----> Checking for postdeploy task
       No postdeploy task found, skipping
-----> Shutting down old containers in 60 seconds
=====> Application deployed:
       http://env-example.XXXXXXXXXXX.co.uk
```
