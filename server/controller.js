module.exports ={

    createHouse: (req, res) => {
        const db = req.app.get('db'),
        {name, address, city, state, zip_code, image_url, monthly_morgage, rent} = req.body
    
        db.create_house(name, address, city, state, zip_code, image_url, monthly_morgage, rent)
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(`create: ${error}`))
    },

    getHouse: (req, res) => {
        const db = req.app.get('db'),
        {id} = req.params;
     
        db.get_house()
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).send(`get: ${error}`))
        },
    

    deleteHouse: (req, res, next) => {
        const db = req.app.get('db'),
        {id} = req.params

        db.delete_house(id)
    .then(() => res.sendStatus(200))
    .catch(error => res.status(500).send(`delete: ${error}`))
    },

    updateHouse:(req,res) => {
        const db = req.app.get('db'),
        {name, address, city, state, zip_code, image_url, monthly_morgage, rent} = req.body,
        { id } = req.params
     
     db.update_house(id, name, address, city, state, zip_code, image_url, monthly_morgage, rent)
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).send(`update: ${error}`))
     }
}