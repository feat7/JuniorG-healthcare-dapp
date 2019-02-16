# JuniorG-healthcare-dapp

# Auth API endpoints

### Register

```
Endpoint: [POST] /api/users
Request JSON:
{
 	"user": {
     	"email": "vinaykhobragade99@gmail.com",
      	"password": "qwertyuiop"
    }
}
```

### Login
API
```
Endpoint: [POST] /api/users/login
Request JSON:
{
 	"user": {
     	"email": "vinaykhobragade99@gmail.com",
      	"password": "qwertyuiop"
    }
}
```

Store token with you.

### For the Routes with requrie AUTH

Send Authorization header:

```
Bearer your_token_obtained_when_logged_in
```
