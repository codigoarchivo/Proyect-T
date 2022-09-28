import mongoose, { Schema, model, Model } from 'mongoose';

import { IforMe } from '../interfaces';

const formMeSchema = new Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    videos: [{ type: String }],
    slug: { type: String, required: true },
    inLike: { type: String, required: true },
    inSend: { type: String, required: true },
    inSave: { type: String, required: true },
    inShare: { type: String, required: true },

}, {
    timestamps: true,
})

const FormMe: Model<IforMe> = mongoose.models.FormMe || model('FormMe', formMeSchema);

export default FormMe;