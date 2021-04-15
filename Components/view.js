const express = require('express')
const Router = express.Router()
const model = require('./model')

exports.getAllEntry = async(req, res)=>{
    const wears = await model.find();
    res.status(200).json({
        developer: "AminatCanCode",
        report: true,
        totalData: wears.length,
        data: wears
    }) 
}