# End point


### [GET][users] https://607fda4ca5be5d00176dc644.mockapi.io/api/v1/users :

##### Response :
``` javascript
[{
    "id": "1",
    "createdAt": "2021-04-20T12:28:39.710Z",
    "city": "city 1",
    "company": "company 1",
    "email": "email 1",
    "password": "password 1"
},
{
    "id": "2",
    "createdAt": "2021-04-20T12:28:39.710Z",
    "city": "city 2",
    "company": "company 2",
    "email": "email 2",
    "password": "password 2"
}],
```

### [POST][users] https://607fda4ca5be5d00176dc644.mockapi.io/api/v1/users :

##### Body data:

``` javascript 
JSON.stringify({
id: "1",
createdAt: "2021-04-20T12:28:39.710Z",
city : "city 1", 
company: "company 2", 
email: "email 2",
password: "password 2",
})
```

### [PATCH][user] https://607fda4ca5be5d00176dc644.mockapi.io/api/v1/users/:id


### [GET][coffee-items] https://607fda4ca5be5d00176dc644.mockapi.io/api/v1/coffee-items

##### Response 
``` javascript
[{
    "id": "2",
    "createdAt": "2021-04-21T08:43:06.555Z",
    "alt": "dasdasds",
    "title": "title",
    "src": "base64",
    "userId": "2"
}]
```

### [POST][coffee items] https://607fda4ca5be5d00176dc644.mockapi.io/api/v1/coffee-items :

##### Body data:

``` javascript 
JSON.stringify({
id: "2",
createdAt: "2021-04-21T08:43:06.555Z",
alt: "alt 1",
src: "base64",
userId: "2"
})
```

### [PATCH][coffee items] https://607fda4ca5be5d00176dc644.mockapi.io/api/v1/coffee-items/:id


## Guide
This link will help you how to use HTTP request :

[https://jsonplaceholder.typicode.com/guide/](https://jsonplaceholder.typicode.com/guide/) 

