const { Router } = require('express');
const  DevController = require('./controllers/DevController')
const  SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

routes.delete('devs/:name', (req, res)=>{
    console.log(request.params);
    return console.log('deleted') 
})


module.exports = routes;