// imports
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// server
const server = express();

// listen to the server
const port = 4000;
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// server configuration

server.use(cors());
server.use(express.json({ limit: '25mb' }));

// endpoints
server.get('/', function (req, res) {
  res.send('This is a landing page');
});

server.get('/api/projects', async (req, res) => {
  console.log('Retrieving Projects data from database');
  let sql = 'SELECT * FROM projects JOIN users ON projects.fk_author = users.idAuthor;';
  const connection = await getConnection();
  const [results, fields] = await connection.query(sql);
  res.json(results);
  connection.end();
});

// connection to database
async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    database: 'freedb_projectTown-adalab',
    user: 'freedb_mayor',
    password: 'zW#87qcc4PT5u#b',
  });
  await connection.connect();
  console.log(`Connection successful with database (identifier=${connection.threadId})`);
  return connection;
}

server.post('/api/projects/add', async (req, res) => {
  const body = req.body;
  console.log(body)

  let insertAuthors = 'INSERT INTO users (nameAuthor, intentionAuthor, jobAuthor, photoAuthor) VALUES (?,?,?,?)';
  const connect = await getConnection();
  const [result] = await connect.query(insertAuthors, [
    body.autor,
    body.intention,
    body.job,
    body.photo
  ]);
  const idAuthor = result.insertId;

  let insertProject = 'INSERT INTO projects (nameProject, sloganProject, URLProject, budgetProject, typeProject, descProject, imageProject, fk_author) VALUES (?,?,?,?,?,?,?,?)';

  const [resultProject] = await connect.query(insertProject, [
    body.name,
    body.slogan,
    body.link,
    body.budget,
    body.type,
    body.desc,
    body.image,
    idAuthor
  ]);


  res.json({
    success: true,
    cardURL: `http://localhost:4000/project/${resultProject.insertId}`
  })

})

