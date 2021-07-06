const { send } = require('process');
const houses = require('./db.json')
let houseId = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        const{ id } = req.params

        const index = houses.findIndex(house => {
            return house.id === +id;
        });

        if (id === -1) {
            res.status(400).send({error: 'there is no such id'})
        } else {
            houses.splice(index, 1)
            res.status(200).send(houses)
        }
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body;
        price = +price
        // console.log(typeof price)
        const newHouse = { id: houseId, address, price, imageURL }
        houses.push(newHouse)
        houseId++
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;
    
        const index = houses.findIndex(house => {
            return house.id === +id;
        });
        if (type === 'plus'){
            houses[index].price += 1000;
            res.status(200).send(houses)

        } else if (type === 'minus'){
            houses[index].price -= 1000;
            res.status(200).send(houses)
        }
    }
} 