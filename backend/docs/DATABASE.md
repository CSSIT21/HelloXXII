# Database

#### User
- _id: ObjectID (user_id)
- name: String
- nickname: String
- email: String
- avatar: String
- usertype: enum(1,2,3)

#### Insane
- _id: ObjectID (user_id)
- name: String (Peer name)
- pair: String (Peer paring code)
- code: String (Peer commit code)
- hints: Array
- co: ObjectID (co_id)

#### Noob
- _id: ObjectID (user_id)
- paired: Boolean
- pair: ObjectID (user_id of Insane)
- quota: Number (default: 5)
- attempt: Array
- 

#### Coline
- _id: ObjectID (co_id)
- name: String
- line_url: String
- icon: String (Google Cloud Storage URL)

#### 