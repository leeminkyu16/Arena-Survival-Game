# **Arena Survival Game WebSocket**

## **Table of Contents**

| Name | Description | Link |
| - | - | - |
| Quick Start | Set up the project quickly | [Click me](#quick-start) |
| Configurations | Configurations that may be changed for customized behaviour | [Click me](#configurations)

<br>

## **Quick Start**

Steps:

- Run `npm i` in this directory
- Run `npm run serve` in this directory

<br>

## **Configurations**

### [**WebSocket Settings**](websocket.config.js)

| Setting | Type | Description | Default |
| - | - | - | - |
| port | Number | The port that the express.js server will run on. | `3001` |
| allowlist | String[] | An array of URLs on the CORS's allowlist | `["http://localhost:8080"]` |
