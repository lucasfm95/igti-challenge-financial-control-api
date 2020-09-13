import { db } from "../models/database.js";

const Transaction = db.transaction;

const getByYearMonth = async (request, response) => {
    try {
        const { monthYear } = request.query;

        const data = await Transaction.find({ yearMonth: monthYear }).sort({ day: 1 });

        response.status(200).send(data);
    } catch (error) {
        response.status(500).send(error.message);
    }
}

const insert = async (request, response) => {
    try {
        const transaction = new Transaction(request.body);

        const data = await transaction.save();

        response.status(200).send(data);
    } catch (error) {
        response.status(500).send(error.message);
    }
}

const update = async (request, response) => {
    try {
        const id = request.headers.id;

        const data = await Transaction.findByIdAndUpdate({ _id: id }, request.body, {
            new: true,
        });

        if (!data) {
            response.status(404).send("Transaction not found to update");
        } else {
            response.status(200).send(data);
        }

    } catch (error) {
        response.status(500).send(error.message);
    }
}

const remove = async (request, response) => {
    try {
        const id = request.headers.id;

        const data = await Transaction.findByIdAndRemove({ _id: id });

        if (!data) {
            response.status(404).send("Transaction not found to remove");
        } else {
            response.status(200).send("delete successfully");
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
}

export { getByYearMonth, insert, update, remove };