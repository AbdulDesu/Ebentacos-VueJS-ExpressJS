
import {
    insertBillDetails,
    getBillDetails
} from "../models/BillDetailsModel.js";


// CREATE Detail Tagihan
export const createBillDetails=(req,res)=>{
    const data = req.body;
    insertBillDetails(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// READ Detail Tagihan
export const getBillDetailsById=(req,res)=>{
    getBillDetails(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};