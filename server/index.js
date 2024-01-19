const express = require('express');
const app = express();
const port = 3307;

const db = require('./db');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  next();
})

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.get('/users', (req, res) => {
  // Выполняем запрос к базе данных
  db.query('SELECT * FROM user', (error, results, fields) => {
    if (error) {
      console.error('Ошибка выполнения запроса:', error);
      return;
    }
    
    // Выводим результаты запроса
    res.json(results);
  });
});

app.get('/products', (req, res) => {
  // Выполняем запрос к базе данных
  db.query('SELECT * FROM products', (error, results, fields) => {
    if (error) {
      console.error('Ошибка выполнения запроса:', error);
      return;
    }
    
    // Выводим результаты запроса
    res.json(results);
  });
})


app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});