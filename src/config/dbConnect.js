import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:j8CRzrFTXDHA5bsr@autenticacao.p7lhz.mongodb.net/autenticacao?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;

