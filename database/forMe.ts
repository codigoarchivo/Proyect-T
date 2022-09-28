import { connect, disconnect } from './db';

import { IforMe } from '../interfaces';

import { FormMe } from '../models';

export const getForMe = async (): Promise<IforMe[]> => {

  await connect();
  const forMe = await FormMe.find().lean();
  await disconnect();


  return JSON.parse(JSON.stringify(forMe));
}
