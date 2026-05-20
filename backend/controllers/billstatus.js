

import {
    getNewestId,
    insertBillStatus,
    getBillsByUser,
    getBillsByBill,
    getAll,
    updateStatus,
    updatePaid,
    cancelStatus
} from "../models/BillStatusModel.js";

// GET tagihan terbaru
export const showNewestStatusId=(req,res)=>{
    getNewestId((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// CREATE status tagihan
export const createBillStatus=(req,res)=>{
    const data = req.body;
    insertBillStatus(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// GET Semua tagihan by user
export const getAllBillsByUser=(req,res)=>{
    getBillsByUser(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// GET status Tagihan (By Tagihan ID)
export const getAllBillsByBill=(req,res)=>{
    getBillsByBill(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// GET semua tagihan
export const getAllBills=(req,res)=>{
    getAll((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// UPDATE status tagihan
export const updateBillStatus=(req,res)=>{
    updateStatus(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// UPDATE tagihan ke status bayar
export const updateBillPaid=(req,res)=>{
    updatePaid(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// UPDATE tagihan ke status Cancel
export const cancelBillStatus=(req,res)=>{
    cancelStatus(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};