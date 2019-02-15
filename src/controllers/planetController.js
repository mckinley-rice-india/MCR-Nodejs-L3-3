import mongoose from 'mongoose';
import { PlanetSchema } from '../models/planetModel';
const fetch = require("node-fetch");
const request = require("request");


const Planet = mongoose.model('Planet', PlanetSchema);

export const addNewPlanet = (req, res) => {
    let newPlanet = new Planet(req.body);

    newPlanet.save((err, planet) => {
        if (err) {
            res.send(err);
            return false;
        }
        res.json(planet);
    });
};

export const getPlanets = (req, res) => {
    Planet.find({}, (err, planet) => {
        if (err || !planet) {
            if (err) {
                res.send(err);
            }
            else if (!planet) {
                res.send("No Planet to be shown!");
            }
            return false;
        }
        res.json(planet);
    });
};

export const getPlanetWithID = (req, res) => {
    Planet.findById(req.params.planetId, (err, planet) => {
        if (err || !planet) {
            if (err) {
                res.send(err);
            }
            else if (!planet) {
                res.send("No Planet to be shown!");
            }
            return false;
        }

        request({
            uri: "https://swapi.co/api/planets",
            method: "GET"
        }, function (error, response, body) {
            var objectValue = JSON.parse(body);
         for (var i = 0; i < objectValue['results'].length; i++) {
                if (objectValue['results'][i]['name'] == planet.Name) {
                    //Alderaan
                    // planet.Name = (objectValue['results'][i]['name']);
                    // planet.Climate = (objectValue['results'][i]['climate']);
                    // planet.Terrain = (objectValue['results'][i]['terrain']);
                      var filmsresults= 'Appearance in ' + objectValue['results'][i]['films'].length + ' films.';
                    planet.Film = filmsresults
    }
            }
        return res.json(planet);
    });
    });
}

export const updatePlanet = (req, res) => {
    Planet.findOneAndUpdate({ _id: req.params.planetId }, req.body, { new: true }, (err, planet) => {
        if (err) {
            res.send(err);
            return false;
        }
        res.json({ planet, message: 'Successfully updated' });
    })
}

export const deletePlanet = (req, res) => {
    Planet.remove({ _id: req.params.planetId }, (err, planet) => {
        if (err) {
            res.send(err);
            return false;
        }
        res.json({ message: 'Successfully deleted planet' });
    })
}

export const getPlanetWithName = (req, res) => {
    var newobjplanet = new Planet();
    var lstOfPlanets = [];

    Planet.find({ _id: req.params.name }, (req, res) => {
        console.log('--------------req----------------------');
        console.log(req)
        console.log('------------req.params------------------');
        console.log(req.params)
        console.log('----------req.params.name--------------------');
        console.log(req.params.name)
        console.log('-------------------------------------------');
        if (err || !planet) {
            if (err) {
                res.send(err);
            }
            else if (!planet) {
                res.send("No Planet to be shown!");
            }
            return false;
        }
        res.json(planet);
    });
}


// export const getAllPlanetsFromExtApi = (req, res) => {
//     try {
//         var newobjplanet = new Planet();
//         var lstOfPlanets = [];
//         request({
//             uri: "https://swapi.co/api/planets",
//             method: "GET"
//         }, function (error, res, body) {
//             if (error) {
//                 res.send(error);
//                 return false;
//             }
//             var objectValue = JSON.parse(body);
//             for (var i = 0; i < objectValue['results'].length; i++) {
//                 if (objectValue['results'][i]['name'] != null) {
//                     //Alderaan
//                     newobjplanet.Name = objectValue['results'][i]['name'];
//                     newobjplanet.Climate = objectValue['results'][i]['climate'];
//                     newobjplanet.Terrain = objectValue['results'][i]['terrain'];
//                     newobjplanet.Film = objectValue['results'][i]['films'].length;
//                     lstOfPlanets.push(newobjplanet)
//                 }
//             }

//         });
//     } catch (err) {
//         console.error(err)
//     }
//     res.json(lstOfPlanets);
// };

// const url = "https://swapi.co/api/planets";
// var resultbody = [];
// const getData = async url => {
//     try {
//         const response = await fetch(url);
//         const json = await response.json();
//         resultbody = json;
//     } catch (error) {
//         console.log(error);
//     }
//     return resultbody.results;
// };
