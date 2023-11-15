# example-do-app
A simple to do application to test openshift 4.12 

```sh
python -m venv todo
source todo/bin/activate
```

**Thoughts**

Source to image and OC new app sort of does this work below that I did previously using pod man on my laptop. 

**Datbase are handles outside of new-app**

In OpenShift, you'd typically set up a database as a separate service.

**Practices on my laptop first: Podman, Compose, Nodejs, Postgresl - laptop**

```bash

podman-compose build

podman-compose up

```