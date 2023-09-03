# Instructions for setting up and running the application
<hr>
<h2>Clone the repo</h2>

step 1: use below cammand to clone the repo

<pre>
git clone https://github.com/shashanknaik0/zuper-gamification-system.git
</pre>


step 2: get into the directory
<pre>
cd zuper-gamification-system
</pre>

<hr>
<h2>Install dependecies</h2>

step 1: use below cammand install dependecies from <code>package.json</code>
<pre>
npm install
</pre>

<hr>
<h2>Seed some data to database</h2>
<pre>
npm run seed
</pre>

<hr>
<h2>Run the project</h2>

use below cammand to run app in localhost.
<pre>
npm start
</pre>

<hr>
<h2>API end points</h2>
<p>
    (post) '/employee' - create employee - req body format = JSON {name:string, email:string}
    (get) '/employee' - list all employee 
    (put) '/employee/:id' - update employee - req body format = JSON {name:string, email:string}
    (delete) '/employee/:id' - delete employee
    
    (post) '/activity' -  create activity - req body format = JSON {name:string, points:number}
    (get) '/activity' -  list all employee 
    (put) '/activity/:id' -  update employee - req body format = JSON {name:string, points:number}
    (delete) '/activity/:id' - delete employee

    (post) '/employeeActivity' - create employee activity - req body format = JSON {employeeId:ObjectID, activityId:ObjectID}
    (get) '/employeeActivity/:year/:month' - employee leaderboard by month and year
    (get) '/employeeActivity/:year/:month/:empId' -  get all activity done by perticular employee
    (patch) '/employeeActivity/:id' -  upadate date feild for mentioned employeeActivity id
</p>