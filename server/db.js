const mysql = require('mysql2');

// Создаем подключение к базе данных
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Serafim1112!',
  database: 'online_store'
});

// Подключаемся к базе данных
connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Подключение к базе данных успешно установлено.');
});

module.exports = connection;