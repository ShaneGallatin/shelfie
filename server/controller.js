function getInventory(req, res){
    const db = req.app.get("db");
    db.get_inventory()
    .then(products => {
        console.log(products);
        res.status(200).json(products);
    })
}

function createProduct(req, res){
    const {name, price, image_url} = req.body;
    const db = req.app.get("db");
    db.create_product([name, price, image_url])
    .then( () => {
        res.sendStatus(200)
    })
}

function deleteProduct(req, res){
    const db = req.app.get("db");
    const {id} = req.params;
    db.delete_product(id)
    .then(() => {
        res.sendStatus(200)
    })
}

function updateProduct(req, res){
    const db = req.app.get("db");
    const {id} = req.params;
    const {name, price, image_url} = req.body;
    db.update_product([id, name, price, image_url])
    .then(() => {
        res.sendStatus(200)
    })
}

module.exports = {
    getInventory,
    createProduct,
    deleteProduct,
    updateProduct
}