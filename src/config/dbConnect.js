import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:2kZORJxnhIkvz7uz@alura.hotqt.mongodb.net/alura-node?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;

