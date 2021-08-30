# ADMIN

## Setup

Clear all existing data in database and initialize the default value (list of colors and senpais).

```
PATCH http://localhost:8081/admin/setup
```

```json
{
	"colors": [
		{
			"codes": "#4f5b66",
			"name": "Space Grey"
		}
	],
	"senpais": [
		{
			"email": "bhumjate.s@mail.kmutt.ac.th"
		},
		{
			"email": "apisit.mixko@mail.kmutt.ac.th"
		},
		{
			"email": "sirawit.cssit@mail.kmutt.ac.th"
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
