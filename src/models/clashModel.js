import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ClashSchema = new Schema({
    UserName: {
        type: String
    },
    Victories: {
        type: String
    },
    Loses: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
