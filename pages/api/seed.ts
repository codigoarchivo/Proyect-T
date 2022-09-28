import type { NextApiRequest, NextApiResponse } from 'next'

import { seeDatabase } from '../../database';

import { connect, disconnect } from '../../database/db';

import { FormMe } from '../../models';

type Data = { message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'No tiene acceso a este API' });
    }

    await connect();
     
    // FormMe
    await FormMe.deleteMany();
    await FormMe.insertMany(seeDatabase.initialData.dataFor);

    await disconnect();


    res.status(200).json({ message: 'Proceso realizado correctamente' });
}