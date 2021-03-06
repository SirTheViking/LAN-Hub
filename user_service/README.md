# LAN Entertainment Hub

## User Creation Service usage

Responses will have the form

```json
{
    "data": "Mixed type holding whatever needs sending back",
    "message": "Maybe more details on the status, not that necessary"
}
```

### List all registered users

**Definition**

`GET localhost:1337`

**Response**

- `200 OK` on success

```json
[
    {
        "id": 1,
        "username": "Longy",
        "profile_picture": "localhost:65535/rocket.png"
    },
    {
        "id": 2,
        "username": "Pancake",
        "profile_picture": "localhost:65535/keys.png"
    }
]
```
**Above Data will definitely change as the other services get built**

### Registering a new user

**Definition**

`POST localhost:1337/register`

**Arguments**

- `"username":string` whatever the user would like to be called (may include filtering)
- `"password":string` the user's password for the profile

**If a user with the given name already exists the registration should fail(not implemented yet)**

**Response**

- `201 Created` on success
- `400 Bad Request` on empty strings

```json
{
    "message": "A status message of what's happened"
}
```

### Loging in as an existing user

**Definition**

`POST localhost:1337/login`

**Arguments**

- `"username":string` whatever user avatar was clicked on
- `"password":string` the user's password for the profile

**Response**

- `202 Accepted` on successful authentication
- `401 Unauthorized` on wrong password

```json
{
    "message": "A status message of what's happened
}
```

### Deleting a user

**Definition**

`DELETE localhost:1377/all/<username>`

**Response**

- `404 Not Found` if the user doesn't exist
- `200 OK` on success


## User Data Service
