const express = require('express');
const cors = require('cors');
const { runInNewContext } = require('vm');

const app = express();

//MIDDLEWARE

app.use(express.json()); //used for body
app.use(cors());

const inventory = ['voltron lego', 'card', 'Wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'Desk'];

app.get('/api/inventory', (req, res) => {
    if(req.query.item){
        const filteredItems = inventory.filter(invItems => {
            return invItems.toLowerCase().includes(req.query.item.toLowerCase());
        });
        res.status(200).send(filteredItems)
    } else {
    res.status(200).send(inventory)
    }
});

app.get("/api/inventory/:id", (req, res) => {
    res.status(200).send(inventory[+req.params.id])
});

app.listen(5050, () => console.log('Server up and running, my boy!'));


