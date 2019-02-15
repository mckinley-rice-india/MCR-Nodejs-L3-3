import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlanetSchema = new Schema({
    Name: {
        type: String
    },
    Climate: {
        type: String
    },
    Terrain: {
        type: String
    },
    Film: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

