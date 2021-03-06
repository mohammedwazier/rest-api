# CRUD REST API
Demo app with basic REST API.

## REST API
##### List of basic routes:

| Route | HTTP | Description |
|:-----:|:----:|:-----------:|
| `/api/hello?name={name}` | GET | Print hello,`{name}`! |

##### List of user routes:

| Route | HTTP | Description |
|:-----:|:----:|:-----------:|
| `/api/users` | GET | Get all the users |
| `/api/users/:id` | GET | Get a single user |
| `/api/users` | GET | Create a user |
| `/api/users/:id` | GET | Delete a user |
| `/api/users/:id` | GET | Update a user with new info |
| `/api/users/:id` | GET | Update a user with specific new info |

##### List of filter routes:
| Route | HTTP | Description |
|:-----:|:----:|:-----------:|
| `/api/hello?name={name}` | GET | Get `{name}` match in users |
| `/api/hello?name={na}` | GET | Get `{na}` like in users |

## Usage
With only npm:

```
npm install
npm start
npm run dev
```

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`
