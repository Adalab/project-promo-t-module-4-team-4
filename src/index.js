// imports
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// server
const server = express();
server.set('view engine', 'ejs');

// listen to the server
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// server configuration
server.use(cors());
dotenv.config();
server.use(express.json({ limit: '25mb' }));

// connection to database
async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.MAYORUSER,
    password: process.env.PASS,
  });
  await connection.connect();
  console.log(
    `Connection successful with database (identifier=${connection.threadId})`
  );
  return connection;
}

const SIZE_PAGE = 4;
// endpoints
server.get('/api/projects', async (req, res) => {
  console.log('Retrieving Projects data from database');
  const connection = await getConnection();
  const allProjects = `SELECT * FROM projects`;
  const [allResults] = await connection.query(allProjects);
  const numResults = parseInt(allResults.length);
  console.log(numResults);
  const numPages = Math.ceil(numResults / SIZE_PAGE);
  const currentPage = parseInt(req.query.page) || 0;
  let sql = `SELECT * FROM projects JOIN users ON projects.fk_author = users.idAuthor LIMIT ? OFFSET ?`;
  const [results, fields] = await connection.query(sql, [
    SIZE_PAGE,
    currentPage * SIZE_PAGE,
  ]);
  res.json({
    info: {
      page: currentPage,
      pageCount: numResults,
      next:
        currentPage === numPages - 1
          ? null
          : `https://project-promo-t-module-4-team-4.onrender.com/api/projects?page=${
              currentPage + 1
            }`,
      prev:
        currentPage === 0
          ? null
          : `https://project-promo-t-module-4-team-4.onrender.com/api/projects?page=${
              currentPage - 1
            }`,
    },
    results,
  });
  connection.end();
});

server.post('/api/projects/add', async (req, res) => {
  const body = req.body;
  
    if (
      body.autor !== '' &&
      body.intention !== '' &&
      body.job !== '' &&
      body.image !== '' &&
      body.name !== '' &&
      body.slogan !== '' &&
      body.type !== '' &&
      body.desc !== '' &&
      body.photo !== ''
    ) {
      try {
      let insertAuthors =
        'INSERT INTO users (nameAuthor, intentionAuthor, jobAuthor, photoAuthor) VALUES (?,?,?,?)';
      const connect = await getConnection();
      const [result] = await connect.query(insertAuthors, [
        body.autor,
        parseInt(body.intention) || 0,
        body.job,
        body.image,
      ]);
      console.log(result);
      const idAuthor = result.insertId;
      let insertProject =
        'INSERT INTO projects (nameProject, sloganProject, URLProject, budgetProject, typeProject, descProject, imageProject, fk_author) VALUES (?,?,?,?,?,?,?,?)';
      const [resultProject] = await connect.query(insertProject, [
        body.name,
        body.slogan,
        body.link,
        parseInt(body.budget) || 0,
        body.type,
        body.desc,
        body.photo,
        idAuthor,
      ]);
      connect.end();
      res.json({
        success: true,
        cardURL: `https://project-promo-t-module-4-team-4.onrender.com/project/${resultProject.insertId}`,
      });
    } catch (e) {
      res.json({
        success: false,
        message: 'No se ha podido crar la tarjeta: ' + e,
      });
    }
    } else {
      res.json({
        success: false,
        message: 'Faltan campos por rellenar',
      });
    }
  
});

// Detalle proyecto motor de plantillas
server.get('/project/:idProject', async (req, res) => {
  const id = req.params.idProject;
  const query =
    'SELECT * FROM users INNER JOIN projects ON fk_author = idAuthor WHERE idproject = ?';
  const connect = await getConnection();
  const [results] = await connect.query(query, id);
  if (results.length < 1) {
    res.render('notFound');
    connect.end();
  } else {
    res.render('projectDetail', results[0]);
    connect.end();
  }
});

// estáticos
const pathServerPublicStyles = './src/public-css';
server.use(express.static(pathServerPublicStyles));
server.use(express.static('./src/public'));
