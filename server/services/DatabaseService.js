const mysql = require('mysql2');

class DatabaseService {

    constructor() {
        this.connection = mysql.createConnection({
            host: '5.35.82.107',
            user: 'robert',
            password: 'Serafim1115!',
            database: 'online_store'
        });
    }c

    async connect() {

        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if (err) {
                    console.error('Ошибка подключения к базе данных:', err);
                    reject(err)
                return;
                }
                console.log('Подключение к базе данных успешно установлено.');
                resolve()
            });
        })


  
    }

}

module.exports = new DatabaseService();