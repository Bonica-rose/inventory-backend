# Simple Inventory Management API

A simple Inventory Management REST API built with Express.js using mock data stored in memory.

## Features

- Get all inventory items
- Get a single item by ID
- Create a new item
- Update an item (PUT)
- Partially update an item (PATCH)
- Delete an item
- Search items by name
- Filter items by category and quantity
- Request validation middleware
- Express built-in middleware (`express.json()`)
- CORS middleware (`cors()`) to allow requests from different origins
- Global error handling
- Custom 404 route handler
- Static file serving using Express `express.static()`
- RESTful API design
- In-memory mock data storage (no database required)

## Installation

```bash
npm install
```

## Run

```bash
npm run dev
```

Server:

```load html file
http://localhost:5000
```

## API Endpoints

### Get Items

```http
GET /api/items
```

### Test Global Error handler

```http
GET /api/items/test-error
```
### Test Custom 404 route handler

```http
POST /api/items/test-error
```
Or

```http
GET /api/itemsss
```

### Get Item

```http
GET /api/items/:id
```

### Create Item

```http
POST /api/items
```

### Update Item

```http
PUT /api/items/:id
```

### Partial Update

```http
PATCH /api/items/:id
```

### Delete Item

```http
DELETE /api/items/:id
```

### Search

```http
GET /api/items/search?name=laptop
```

### Filter

```http
GET /api/items/filter?category=Electronics
```

```http
GET /api/items/filter?quantity=10
```

## Tech Stack

- Node.js
- Express.js
- JavaScript