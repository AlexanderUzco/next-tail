import { IncomingMessage, ServerResponse } from "http";
import DB from '@database';

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
    const db = new DB();
    const allData = await db.getAll();

    response.statusCode = 200;
    response.setHeader('Content-type','application/json');
    response.end(JSON.stringify({
        length: allData.length,
        data: allData
    }));
};

export default allAvos;
