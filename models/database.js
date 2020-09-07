import mongoose from "mongoose";
import transaction from "./transactionModel.js";

const db = {
    url: process.env.MONGODB,
    mongoose: mongoose,
    transaction: transaction(mongoose)
};

export { db };