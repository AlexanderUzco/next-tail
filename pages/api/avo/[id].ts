//import { IncomingMessage, ServerResponse } from "http";
import {NextApiRequest,NextApiResponse} from 'next';
import DB from '@database';

const avoFromId = async (request: NextApiRequest, response: NextApiResponse) => {
    const { id } = request.query;

    const db = new DB();
    const avoData = await db.getById(<string>id);

    response.status(200).json(avoData);
};

export default avoFromId;