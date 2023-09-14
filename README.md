# CRUD API Endpoint
An API endpoint that performs CRUD operations on a person (user) resource.

## Tools & Tech Stack
* NodeJS
* ExpressJS
* Mongodb

## Requirements
This project requires nodejs version >= 18.0.0 and npm package manager.

## Running Locally
1. Clone this repository by running:
   ```bash
   git clone https://github.com/leoemaxie/crud-api-endpoint.git
   cd crud-api-endpoint
   ```
2. Create a `.env` file and fill in the url to your Mongodb atlas database or any other cloud provider.
   ```bash
   echo "MONGI_URI=<your cloud database url>" >> .env
	```
	Alternatively, you can use a local database by using `mongod` and connecting to the local database server.

3. Start the server:
   ```bash
   npm run start
   ```

## Requests
- Accepts JSON only.
- Request body can only contain a `name` attribute which must be a string, unique and have more than a character.
- Example request:
```json
{
    "name": "Leo Emaxie"
}
```

## Response
- Returns JSON.
- Example response:
```json
{
    "id": "axeff554673ddfabed",
    "name": "Leo Emaxie"
}
```

## Endpoints
* `/api` -> POST request endpoint. Creates a new person (user) in the database.
* `/api:id` -> GET request endpoint. Reads the attribute of a person. `id` params can be the name or id of a person.
* `/api:id` -> PUT request endpoint. Updates the attribute of a person. `id` params can be the name or id of a person.
* `/api:id` -> PATCH request endpoint. Updates the attribute of a person. `id` params can be the name or id of a person.
* `/api:id` -> DELETE request endpoint. Deletes the attribute of a person. `id` params can be the name or id of a person.

## Error Statuses
* 200 - OK: User has been successfully updated.
* 201 - Created: User has been successfully created.
* 400 - Bad Request: Request body has more than one attribute.
* 404 - User Not Found.
* 500 - Internal Server Error.

## Live Site Url
[CRUD API Endpoint](https://crud-api-endpoint.onrender.com/api)

## Author
[Leo Emaxie](https://github/com/leoemaxie)
