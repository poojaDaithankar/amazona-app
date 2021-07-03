# AMAMZONA

# How to run backend? 


1. open a command prompt or powershell and clone the repo
````
https://github.com/poojaDaithankar/amazona-app.git
cd amazona-app
````

2. run the backend server
````
npm i
npm run start
````

3. Please add db connect string  in ``backend/db.js`` on line no 4. // Follow this tutorial to create a free monodb atlas account - 
https://www.youtube.com/watch?v=rPqRyYJmx2g

4. To enter seed data - In browser or postman tool,  go to http://localhost:5000/api/products/seed

5. To check if data is entered - In browser or postman tool,  go to http://localhost:5000/api/products
you can also check in atlast mongodb website under collections.

Let this command prompt keep running, dont close this command prompt, just minimize it. 

6. Open a new command prompt or powershell and run - navigate to  amazona-app folder then run 
````
cd frontend
npm  i
npm run start
````

7. open browser - http://localhost:3000/

you should see the products page with all details. 
