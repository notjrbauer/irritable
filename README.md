# irritable

[![NPM][irritable-icon]][irritable-url]  
> [Iterable](https://iterable.com/) API request wrapper for client && node.js  


## Install

```sh
$ npm install irritable --save
```

## Usage

```js
// Send event to Iterable
var token = process.env.ITERABLE_TOKEN
var Irritable = require('irritable')({
    token: token //API Token
})

Irritable.Events.track({
  eventName: 'test',
  email: 'test@test.com'
}).then(console.log)

```

## TODO
- [X] [Add events](https://app.iterable.com/api/docs#!/events) 
- [ ] [Add Lists](https://app.iterable.com/api/docs#!/lists)  
- [ ] [Add users](https://app.iterable.com/api/docs#!/users)  
- [ ] [Add push](https://app.iterable.com/api/docs#!/push)  
- [ ] [Add sms](https://app.iterable.com/api/docs#!/sms)  
- [ ] [Add campaigns](https://app.iterable.com/api/docs#!/campaigns)  
- [ ] [Add commerce](https://app.iterable.com/api/docs#!/commerce)  
- [ ] [Add email](https://app.iterable.com/api/docs#!/email)  
- [ ] [Add export](https://app.iterable.com/api/docs#!/export)  
- [ ] [Add workflows](https://app.iterable.com/api/docs#!/workflows)  

## API

#### `irritable(options)` -> `object`
##### options
###### token

*Required*  
Type: `string` or `process.env.ITERABLE_TOKEN`

Token / key used to communicate with **Iterable API**

###### baseURL

*Optional*
Type: `string`
Default: `http://api.iterable.com/api/`

Base URL of iterable api. 

###### timeout

*Optional*
Type: `number`
Default: `3000 ms`

Timeout of request life sent to iterable
###### responseType
*Optional*
Type: `string`
Default: `json`

Response type sent back from iterable

#### `irritable.Events` -> `object`

returns event handler object:
```js
{
  track: <fn>,
  trackPushOpen: <fn>,
  trackConversion: <fn>
}
```

#### `irritable.Events.track(eventObject)` -> `promise`
Sends a validated event object to Iterable.

##### eventObject
###### email

*optional*  
Type: `string` 

Email associated with the event.

###### eventName

*required*  
Type: `string` 

eventName associated with the event.

###### createdAt

*optional*  
Type: `string` 

date / unix timestamp of the associated event.

###### dataFields

*optional*  
Type: `object` 

Metadata for the event.

###### campaignId

*optional*  
Type: `number` 

campaignId of the event.

###### templateId

*optional*  
Type: `number` 

templateId of the event.


#### `irritable.Events.trackConversion(eventObject)` -> `promise`
Sends a validated trackConversion event object to Iterable.

##### eventObject
###### email

*required*  
Type: `string` 

Email associated with the event.

###### campaignId

*required*  
Type: `number` 

campaignId of the event.


###### createdAt

*optional*  
Type: `string` 

date / unix timestamp of the associated event.

###### dataFields

*optional*  
Type: `object` 

Metadata for the event.


###### templateId

*optional*  
Type: `number` 

templateId of the event.

#### `irritable.Events.trackPushOpen(eventObject)` -> `promise`
Sends a validated trackPushOpen event object to Iterable.

##### eventObject
###### email

*required*  
Type: `string` 

Email associated with the event.

###### userId

*required*  
Type: `string` 

UserId associated with the event.
###### campaignId

*required*  
Type: `number` 

campaignId of the event.


###### createdAt

*optional*  
Type: `string` 

date / unix timestamp of the associated event.

###### dataFields

*optional*  
Type: `object` 

Metadata for the event.


###### templateId

*optional*  
Type: `number` 

templateId of the event.

[irritable-icon]: https://nodei.co/npm/irritable.png?downloads=true
[irritable-url]: https://npmjs.org/package/irritable
