const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const individualSchema = new Schema({
    userId: Number,
    username: String,
    mobileNo: String,
    password: String,
    email: String,
    expenses: [{
        catogory: String,
        product_name: String,
        product_amount: Number,
        description: String,
        date: Date,
        created_on: Date,
    }],
    incomes: [{
        source: String,
        amount: Number,
        currency_code: String,
        description: String,
        date: Date,
        created_on: Date,
    }],
    groups: [{
        group_id: Number,
        members: [{userId: Number,amount: Number,status: Boolean,payment_description: String}],
        due_date: Date,
    }],
});

const Individual = mongoose.model('Individual',individualSchema);

const ManagementShema = new Schema({
    username: String,
    mobileNo: String,
    password: String,
    email: String,
});

const Management = mongoose.model('Management',ManagementShema);

module.exports = {Individual,Management}