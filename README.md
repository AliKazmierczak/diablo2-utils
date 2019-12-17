# Setup
## Requirements
- docker
- docker-compose (included with docker desktop)

## Installation
There are two steps to run this application

### 1. Run install
This step will:
- create webclient dockr image
- install all npm dependencies for the project

Just run:
```
./run.sh install
```

### 2. Run dev
This step will:
- run index.js of webclient, running the HTTP server

Just run:
```
./run.sh dev
```

# Tip and tricks
You should **never** run NPM or node in any form on your host machine. Thus you should execute all commands on the docker container of d2speedrun-utils, eg.

## SSH to container
This will:
- login you into d2speedrun-utils container


Just execute (for Mac/Linux)
```
docker-exec -it d2speedrun-utils /bin/bash
```
For Windows:
```
winpty docker exec -it d2speedrun-utils bash
```