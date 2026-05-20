
import express from "express";
import {
    showFoods,
    showFoodById,
    createFood,
    updateFood,
    deleteFood,
} from "../controllers/food.js";

import {
    showAUser,
    createAccount
} from "../controllers/user.js";

import {
    addItems,
    getItem,
    updateItem,
    allItems,
    deleteItem,
    deleteItems
} from "../controllers/cart.js";

import {
    createBooking
} from "../controllers/booktable.js";

import {
    createBillDetails,getBillDetailsById
} from "../controllers/billdetails.js";

import {
    showNewestStatusId,
    createBillStatus, 
    getAllBillsByUser,
    getAllBillsByBill,
    getAllBills,
    updateBillStatus,
    updateBillPaid,
    cancelBillStatus
} from "../controllers/billstatus.js";

const router = express.Router();

router.get("/api/foods", showFoods);
router.get("/api/foods/:id", showFoodById);
router.post("/api/foods", createFood);
router.put("/api/foods/:id", updateFood);
router.delete("/api/foods/:id", deleteFood);

router.get("/api/users/:email", showAUser);
router.post("/api/users/", createAccount);


router.post("/api/cartItem", addItems);
router.get("/api/cartItem/:user_id/:food_id", getItem);
router.get("/api/cartItem/:id", allItems);
router.put("/api/cartItem/", updateItem);
router.delete("/api/cartItem/:user_id/:food_id", deleteItem);
router.delete("/api/cartItem/:id", deleteItems);

router.post("/api/booking", createBooking);

router.post("/api/billdetails", createBillDetails);
router.get("/api/billdetails/:id", getBillDetailsById);
router.get("/api/billstatus/new", showNewestStatusId);
router.post("/api/billstatus", createBillStatus);
router.get("/api/billstatus/user/:id", getAllBillsByUser);
router.get("/api/billstatus/bill/:id", getAllBillsByBill);
router.get("/api/billstatus", getAllBills);
router.put("/api/billstatus/:id", updateBillStatus);
router.put("/api/billstatus/paid/:id", updateBillPaid);
router.put("/api/billstatus/cancel/:id", cancelBillStatus);

export default router;