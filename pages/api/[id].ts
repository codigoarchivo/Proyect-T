import type { NextApiRequest, NextApiResponse } from 'next'
import { isValidObjectId } from 'mongoose';

import { FormMe } from '../../models';
import { IforMe } from '../../interfaces';
import { connect, disconnect } from '../../database/db';

type Data =
    | { message: string }
    | IforMe

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'POST':
            return postEntry(req, res)
        default:
            return res.status(400).json({ message: 'Bad request' });
    }


}



const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id = '' } = req.query

    console.log(id);
    console.log(req.body);


    try {
        await connect()
        const entryToUpdate = await FormMe.findById(id);


        if (!entryToUpdate) {
            await disconnect();
            return res.status(400).json({ message: 'No hay esntradas con este id ' + id })
        }


        const data = await FormMe.findByIdAndUpdate(id, req.body);

        await disconnect()

        return res.status(201).json(data!)

    } catch (error) {

        await disconnect()

        console.log(error);

        res.status(400).json({ message: 'Algo salio mal,revisar consola del servidor' })
    }
}
