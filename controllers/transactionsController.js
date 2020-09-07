import { db } from "../models/database.js";

const Transaction = db.transaction;

const getAll = async (_, response) => {
    try {
        const data = await Transaction.find();

        response.status(200).send(data);
    } catch (error) {
        response.status(500).send(error.message);
    }
}

export { getAll };