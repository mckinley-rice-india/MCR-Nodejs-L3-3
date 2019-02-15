import mongoose from 'mongoose';
import { ClashSchema } from '../models/clashModel';

const Clash = mongoose.model('Clash', ClashSchema);

export const addNewClash = (req, res) => {
    let newClash = new Clash(req.body);

    newClash.save((err, clash) => {
        if (err) {
            res.send(err);
        }
        res.json(clash);
    });
};

export const getClashs = (req, res) => {
    Clash.find({}, (err, clash) => {
        if (err) {
            res.send(err);
        }
        res.json(clash);
    });
};

export const getClashWithID = (req, res) => {
    Clash.findById(req.params.clashId, (err, clash) => {
        if (err) {
            res.send(err);
        }
        res.json(clash);
    });
}

export const updateClash = (req, res) => {
    Clash.findOneAndUpdate({ _id: req.params.clashId}, req.body, { new: true }, (err, clash) => {
        if (err) {
            res.send(err);
        }
        res.json(clash);
    })
}

export const deleteClash = (req, res) => {
    Clash.remove({ _id: req.params.clashId }, (err, clash) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted clash'});
    })
}