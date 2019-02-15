import { 
    addNewPlanet, 
    getPlanets, 
    getPlanetWithID, 
    updatePlanet,
    deletePlanet ,
    getPlanetWithName
} from '../controllers/planetController';

const routes = (app) => {

    app.route('/api/v1/planet')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getPlanets)
    // POST endpoint
    .post(addNewPlanet);

    app.route('/api/v1/planet/:planetId')
    // get specific planet /api/v1/planet/:planetId
    .get(getPlanetWithID)

    // put request
    .put(updatePlanet)

    // delete request
    .delete(deletePlanet);

    app.route('/api/v1/planet/:name')
    .get(getPlanetWithName);


}

export default routes;

