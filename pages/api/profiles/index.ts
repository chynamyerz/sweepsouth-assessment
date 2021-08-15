import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { EXTERNAL_API_URL } from '../../../src/utils/constants';

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const response = await axios.get(EXTERNAL_API_URL);
    res.status(response.status).json(response.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default handler;
