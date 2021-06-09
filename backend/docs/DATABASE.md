# Database

## User

- **\_id**: ObjectID (user_id)
- **name**: String
- **nickname**: String
- **email**: String
- **avatar**: String
- **usertype**: enum(1,2,3)

#### Usage

> Import the model

```js
const User = require("@model/user");
```

> Insert data to table

```js
const newUser = new User({
	name: "<String>",
	nickname: "<String>",
	email: "<String>",
	avatar: "<String>",
	usertype: "<Number>",
});
newUser.save();
```

```js
// an alternating way
const newUser = new User();
newUser.name = "<String>";
newUser.nickname = "<String>";
newUser.email = "<String>";
newUser.avatar = "<String>";
newUser.usertype = "<Number>";
newUser.save();
```

> Insert data to table using anonymous class

```js
new User({
	name: "<String>",
	nickname: "<String>",
	email: "<String>",
	avatar: "<String>",
	usertype: "<Number>",
}).save();
```

## Insane

- **\_id**: ObjectID (user_id)
- **name**: String (Peer name)
- **pair**: String (Peer paring code)
- **code**: String (Peer commit code)
- **hints**: Array
- **co**: ObjectID (co_id)

## Noob

- **\_id**: ObjectID (user_id)
- **paired**: Boolean
- **pair**: ObjectID (user_id of Insane)
- **quota**: Number (default: 5)
- **attempt**: Array

## Coline

- **\_id**: ObjectID (co_id)
- **name**: String
- **line_url**: String
- **icon**: String (Google Cloud Storage URL)
