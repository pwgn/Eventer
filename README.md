# Eventer

Tool to generate events according to a specification and publish them to somewhere.

## install

```
npm install
```

## config

Config is stored in `config.json`.

### eventSpec

Describes the event that will be generated.

It is possible to build the event by adding new keys, [fakerjs](https://github.com/Marak/faker.js/tree/v5.1.0) is used to generate the value. 

A new event property can be added on the using the following format:
```
"column-name": "{{faker API method}}"
```

Here are the available [faker API methods](https://github.com/Marak/faker.js/tree/v5.1.0#api-methods).

Example `eventSpec`:
```
    "eventSpec": {
        "name": "{{name.firstName}} {{name.lastName}}",
        "email": "{{internet.email}}"
    },
```

Simply set the properties (keys) and faker methods (values) to match your expected schema.

### distributor

Currently only kafka output is supported:

```
    "distributor": {
        "clientId": "eventer",
        "brokers": ["<broker url>"],
        "topic": "<topic to publish to>"
    },
```

### engine

The engine distributes the events according to the specifid pattern. Currently it is only possible to configure the number of events to send and the delay between the events.

```
    "engine": {
        "count": Number of events to send. If count is set to -1 events will be sent until the app is interrupted
        "delay": The delay between the messages
    }
```

## run

```
npm start
```