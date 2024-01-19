const database = require("./DatabaseService")




class ProductsService {

    async getAll() {

        return new Promise((resolve, reject) => {

            database.connection.query(`
                SELECT * from products
            `, (err, result) => {

                if(err) {
                    reject(err)
                }

                resolve(result)

            })

        })

    }

}

module.exports = new ProductsService();