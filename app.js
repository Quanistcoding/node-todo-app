const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();

const port = process.env.PORT || 3000;

// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes
    //api calls to todos
const todos = require('./routes/todos');
app.use('/api/todos', todos);


// middleware after
    //Custom page not found error messgage
const page_not_found = require('./middleware/page_not_found');
app.use(page_not_found);

// DB connection and Server Startup
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

