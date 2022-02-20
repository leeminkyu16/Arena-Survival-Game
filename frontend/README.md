# **Arena Survival Game Frontend**

## **Table of Contents**

| Name | Description | Link |
| - | - | - |
| Quick Start | Set up the project quickly | [Click me](#quick-start) |
| Configurations | Configurations that may be changed for customized behaviour | [Click me](#configurations) |

<br>

## **Quick Start**

Steps:

- Run `npm i` in this directory
- Run `npm run serve` in this directory

<br>

## **Configurations**

### [**Database Settings**](./src/config/database.config.js)

| Setting | Type | Description | Default |
| - | - | - | - |
| baseURL | String | The URL of the database express.js server | `"http://localhost:3000/api"` |

---

### [**WebSocket Settings**](./src/config/websocket.config.js)

| Setting | Type | Description | Default |
| - | - | - | - |
| url | String | The URL of the websocket express.js server | `"http://localhost:3001"` |
