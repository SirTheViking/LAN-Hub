# LAN Entertainment Hub

## Usage


There will be a possibility of creating multiple users, for different people in the building.

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

`GET localhost:6000`

**Response**

- `200 OK` on success

```json
[
    {
        "username": "Longy",
        "profile_picture": "localhost:65535/rocket.png"
    },
    {
        "username": "Pancake",
        "profile_picture": "localhost:65535/keys.png"
    }
]
```
**Above Data will definitely change as the other services get built**

### Registering a new user

**Definition**

`POST localhost:6000`

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

### Deleting a user

**Definition**

`DELETE localhost:6000/<username>`

**Response**

- `404 Not Found` if the user doesn't exist
- `200 OK` on success


## Login Service

## User Data Service

## Resource Delivery Service (for js files and fonts and similar things)
