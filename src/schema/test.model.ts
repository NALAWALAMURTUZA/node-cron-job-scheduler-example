import * as mongoose from 'mongoose';
import Test from './test.interface';
const schema = new mongoose.Schema({
    code: Number,
}, {
    timestamps: true,
});

const testModel = mongoose.model<Test & mongoose.Document>('Test', schema);

export default testModel;