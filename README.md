1. npx create-react-app hr-react-app
2. create subfolder for backend
3. backend: 
- .env (own connection string with auth and db-name and port)
- server.js
- api_routes(folder)
	-api_someNameOfTable
	-api_someNameOfTable2
- models(folder)
	-someName.model.js
	-someName2.model.js
4. import all libraries

- Backend folder:
    - npm install mongoose (for a mongodb)
    - npm install express (for an easier back-routing and modeling)
    - npm install nodemon (live node server)
    - npm install dotenv --save (to load settings from env file)

- Whole project:
    - npm install axios (for a easier web connection)
    - npm install react-router-dom (front-routing and other react stuff)
    - npm install cors (to have 2 servers in the same browser)
    - npm install react-bootstrap bootstrap (to have some style)
5. create db, tables/collections

//TODO