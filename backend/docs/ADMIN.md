# ADMIN

## Setup

Clear all existing data in database and initialize the default value (list of insanes and colines).

```
PATCH http://localhost:8081/admin/setup
```

```json
{
	"colines": [
		{
			"name": "Chicken",
			"line_url": "https://line.me/ti/p/Snd7P0wuS3",
			"icon": "https://storage.googleapis.com/helloxxii/icon/chicken.svg"
		},
		{
			"name": "Owl",
			"line_url": "https://line.me/ti/p/v2daSsyry7",
			"icon": "https://storage.googleapis.com/helloxxii/icon/owl.svg"
		}
	],
	"insanes": [
		{
			"email": "bhumjate.s@mail.kmutt.ac.th",
			"coname": "Chicken"
		},
		{
			"email": "apisit.mixko@mail.kmutt.ac.th",
			"coname": "Owl"
		},
		{
			"email": "sirawit.cssit@mail.kmutt.ac.th",
			"coname": "Owl"
		}
	]
}
```

## Op

Op an existing insane (`usertype 2`) to opped insane (`usertype 3`).

```
PATCH http://localhost:8081/admin/op
```

```json
{
	"list": [
		"kasemtan.kmutt@mail.kmutt.ac.th",
		"monthara.k@mail.kmutt.ac.th",
		"patiphon.k@mail.kmutt.ac.th",
		"athippat.athip@mail.kmutt.ac.th",
		"jirayu.camera1482@mail.kmutt.ac.th"
	]
}
```
