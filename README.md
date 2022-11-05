# flights-api

## description

A flight record/booking API

## usage

`baseURL` = [https://flights-api-58qh.onrender.com](https://flights-api-58qh.onrender.com)

### get all flights

- to get all flights record
  send a get request to `baseURL/flights`

- to get all flights at specific time (say 5pm)
  send a get request with time as query parameter `baseURL/flights?time=5pm`
  
### get a single flight record

- send a get request to `baseURL/flight/flightID` 

  e.g for a flight with ID = **ganacho**, send a request to base URL/flights/ganacho

### add flight

- send a post request to `baseURL/flights`, passing **title** , **time** , **price** and **date** as properties of the request body
- for an example of request body, check below: 

  ``` javascript
  {
    "title" : "flight to Ghana",
    "time" : "1am",
    "price" : 27000,
    "date" : "25-12-2022
  }
  ```

### update a single flight record

- send a put request to `baseURL/flight/flightID`, where flightID is the ID of the flight record you wish to update
- the request body shoud have the properties you wish to update,

  e.g 
  ```javascript
     { "title" : "hahahahaha", "price" : 35900 }
  ```

### delete a flight record

- to delete a flight record, send a delete request to `baseURL/flight/flightID`, where flightID is the ID of the flight record you wish to delete
