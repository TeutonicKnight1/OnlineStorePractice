const productsService = require("../services/ProductsService")



class ProductsController {


    async getAll(req, res) {

        const result = await productsService.getAll();

        res.json(result)

    }


}

module.exports = new ProductsController();