import prisma from "../config/prisma.js";
import * as apiHelper from "../helper/APIHelper.js";

export const allItems = apiHelper.handleErrorAsync(async (req, res, next) => {
    const items = await prisma.cart.findMany({
        where: { user_id: Number(req.params.id) }
    });
    if (items.length === 0) return apiHelper.APIResponseNF(res, false, "Keranjang belanja kosong", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil memuat keranjang", items);
});

export const getItem = apiHelper.handleErrorAsync(async (req, res, next) => {
    const item = await prisma.cart.findUnique({
        where: {
            user_id_food_id: {
                user_id: Number(req.params.user_id),
                food_id: Number(req.params.food_id)
            }
        }
    });
    if (!item) return apiHelper.APIResponseNF(res, false, "Item tidak ditemukan di keranjang", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil mendapatkan detail item", item);
});

export const addItems = apiHelper.handleErrorAsync(async (req, res, next) => {
    if (apiHelper.isEmptyObj(req.body)) return apiHelper.APIResponseBR(res, false, "Data keranjang tidak boleh kosong", null);

    const newItem = await prisma.cart.create({
        data: {
            user_id: Number(req.body.user_id),
            food_id: Number(req.body.food_id),
            item_qty: Number(req.body.item_qty)
        }
    });
    return apiHelper.APIResponseOK(res, true, "Item berhasil ditambahkan ke keranjang", newItem);
});

export const updateItem = apiHelper.handleErrorAsync(async (req, res, next) => {
    if (apiHelper.isEmptyObj(req.body)) return apiHelper.APIResponseBR(res, false, "Data update tidak boleh kosong", null);

    const updatedItem = await prisma.cart.update({
        where: {
            user_id_food_id: {
                user_id: Number(req.body.user_id),
                food_id: Number(req.body.food_id)
            }
        },
        data: { item_qty: Number(req.body.item_qty) }
    });
    return apiHelper.APIResponseOK(res, true, "Berhasil mengubah jumlah pesanan", updatedItem);
});

export const deleteItem = apiHelper.handleErrorAsync(async (req, res, next) => {
    await prisma.cart.delete({
        where: {
            user_id_food_id: {
                user_id: Number(req.params.user_id),
                food_id: Number(req.params.food_id)
            }
        }
    });
    return apiHelper.APIResponseOK(res, true, "Berhasil menghapus item dari keranjang", null);
});

export const deleteItems = apiHelper.handleErrorAsync(async (req, res, next) => {
    await prisma.cart.deleteMany({
        where: { user_id: Number(req.params.id) }
    });
    return apiHelper.APIResponseOK(res, true, "Berhasil mengosongkan keranjang", null);
});