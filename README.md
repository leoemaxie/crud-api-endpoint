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
2. Create a `.env` file and fill in the url to your Mongodb atlas database or any other database cloud provider.
   ```bash
   echo "MONGO_URI=<your cloud database url>" >> .env
	```
	Alternatively, you can use a local database by using `mongod` and connecting to the local database server.

3. Start the server:
   ```bash
   npm run start
   ```

## Endpoints
* `/api` -> POST request endpoint. Creates a new person (user) in the database.
* `/api:id` -> GET request endpoint. Reads the attribute of a person. `id` params can be the name or id of a person.
* `/api:id` -> PUT request endpoint. Updates the attribute of a person. `id` params can be the name or id of a person.
* `/api:id` -> PATCH request endpoint. Updates the attribute of a person. `id` params can be the name or id of a person.
* `/api:id` -> DELETE request endpoint. Deletes a user (Person resource). `id` params can be the name or id of a person.
* `/api-docs` -> Documentation endpoint. Detailed explanation of this API can be found at this endpoint.

## Requests
- Accepts JSON only.
- Request body can only contain a `name` attribute which must be a string, unique and have more than one character.
- Example request:
```json
{
    "name": "LeoEmaxie"
}
```

## Responses
* Returns JSON.
* For a `GET` request:
  - A unique `id` and `name`  attribute is returned. `id` is an 8 bits number that can be used to fetch a user. However, it is **readonly**
    ```json
    {
       "id": 10468932,
       "name": "LeoEmaxie"
    }
    ```
  - If an error occurs, an error message and the appropriate status code is returned.
* For a `POST` request:
  - On Successful creation, a unique `id` attribute is automatically generated. This `id` and the `name` of the newly created user is returned.
  - If an error occurs, an error message and the appropriate status code is returned.
* For `PATCH` and `PUT` request:
  - On Successful update, the `id` and `name` of the updated user is returned.
  - If a user doesn't exist or if other errors occurs, an error message and the appropriate status code is returned.
* For a `DELETE` request:
  - On successful deletion, a success message is returned
    ```json
    { "message": "User Successfully Deleted" }
    ```
     **Deleting a nonexistent user is considered successful**
  - The only error that can occur is server side error and an error message and status code `500` is returned.

## Testing
Tests can be carried out locally by running:
```bash
npm run test
```
Alternatively, online API testing tools such as Postman can be used to test the endpoints.

## Error Statuses
* 200 - OK: User has been successfully updated.
* 201 - Created: User has been successfully created.
* 400 - Bad Request:
  - Request body has more than one attribute.
  - Invalid content-Type.
* 404 - User Not Found.
* 500 - Internal Server Error.

## Links
[CRUD API Endpoint](https://crud-api-endpoint.onrender.com/api)
[Database ER
Diagram](https://lucid.app/lucidchart/34722ac3-c282-4f2e-b61f-7c199e68c5a8/edit?view_items=yRKqh-dGCGV0&invitationId=inv_845ad99c-824c-4057-b17a-71e1119c1681)

## Author
[Leo Emaxie](https://github.com/leoemaxie)
