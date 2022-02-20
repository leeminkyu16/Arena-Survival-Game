# **Arena Survival Game Database**

## **Table of Contents**

| Name | Description | Link |
| - | - | - |
| Quick Start | Set up the project quickly | [Click me](#quick-start) |
| Configurations | Configurations that may be changed for customized behaviour | [Click me](#configurations) |
| Schemata | Explains the various schematas used in the database | [Click me](#schemata) |
| Authentication | Explains the authentication mechanism | [Click me](#authentication) |

<br>

## **Quick Start**

Steps:

- Ensure that [MongoDB](https://www.mongodb.com/) is installed
- Add a `.env` file in this directory with a `REFRESH_SECRET` and `ACCESS_SECRET`
  
  ```bash
  REFRESH_SECRET=REPLACE_THIS_WITH_SECRET
  ACCESS_SECRET=REPLACE_THIS_WITH_SECRET
  ```

- Run `npm i` in this directory
- Run `npm run serve` in this directory

<br>

## **Configurations**

### [**Database Settings**](./app/config/db.config.js)

| Setting | Type | Description | Default |
| - | - | - | - |
| url | String | The MongoDB database URL | `"mongodb://localhost:27017/arena_survival_game_db"` |
| port | Number | The port that the express.js will run on. | `3000` |
| allowlist | String[] | An array of URLs on the CORS's allowlist | `["http://localhost:8080"]` |

---

### [**Account Settings**](./app/config/account.config.js)

| Setting | Type | Description | Default |
| - | - | - | - |
| accessExpires | Number | The amount of time before the access tokens expire | 1000 \* 60 \* 15 (15 minutes) |
| refreshExpires | Number | The amount of time before the refresh tokens expire | 1000 \* 60 \* 60 \* 24 \* 7 |

<br>

## **Schemata**

### [**Account**](./app/models/account.model.js)

**Description:**

This schema deals with accounts and the various tokens associated with them.

**Properties:**

| Name | Type | Description | Example |
| - | - | - | - |
| username | String | The account's username | `testUser` |
| password | String | The account's password | `password` |
| accessTokens | {String, Date} | The value and date of the access token. <br> Used to authenticate most actions. | `{testToken, Date("1970-01-01")}` |
| refreshTokens | {String, Date} | The value and date of the refresh token. <br> Used to get a new access token. | `{testToken, Date("1970-01-01")}` |

---

### [**Leaderboard**](./app/models/leaderboard.model.js)

**Description:**

This schema deals with leaderboard entries for singleplayer games.

**Properties:**

| Name | Type | Description | Example |
| - | - | - | - |
| playerName | String | The name associated with the leaderboard entry. | `testName` |
| score | Number | The score associated with the leaderboard entry. | `100` |
| createdAt | Date | The time that the leaderboard entry was created. | `Date("1970-01-01")` |
| updatedAt | Date | The time that the leaderboard entry was last updated. | `Date("1970-01-01")` |

---

### [**Save**](./app/models/save.model.js)

**Description:**

This schema deals with singleplayer saves.

**Properties:**

| Name | Type | Description | Example |
| - | - | - | - |
| name | String | The save's name. | `testSave` |
| saveData | String | The save's data. | `{...}` |
| score | Number | The score in the save. | `100` |
| owner | ObjectId | The owner of the save, i.e. the account that made the save. | `ObjectId("...")` |

<br>

## **Authentication**

### JSON Web Tokens

Authentication is done through refresh and access tokens, both are [JSON Web Tokens](https://jwt.io/).

### Token Use

The refresh token is used to get an access token which is used to authenticate most actions in this API.

### Expiration

Access tokens have a shorter expiration period and are stored in memory, meaning that they disappear when the user leaves the page.

Refresh tokens have a longer expriation period and are stored in a [HttpOnly](https://owasp.org/www-community/HttpOnly) [Secure](https://owasp.org/www-community/controls/SecureCookieAttribute) cookie.

### Security

This implementation minimizes the vulnerability to:

- [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)
- [Cross Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)
