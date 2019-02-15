import { 
    addNewClash, 
    getClashs, 
    getClashWithID, 
    updateClash,
    deleteClash 
} from '../controllers/clashController';

const routes = (app) => {
    app.route('/clash')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getClashs)
    
    // POST endpoint
    .post(addNewClash);

    app.route('/clash/:clashId')
    // get specific clash
    .get(getClashWithID)
    
    // put request
    .put(updateClash)

    // delete request
    .delete(deleteClash);
}

export default routes;
