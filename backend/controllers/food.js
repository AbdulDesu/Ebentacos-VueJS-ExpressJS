import prisma from "../config/prisma.js";
import * as apiHelper from "../helper/APIHelper.js";

export const showFoods = apiHelper.handleErrorAsync(async (req, res, next) => {
    const foods = await prisma.food.findMany();
    if (foods.length === 0) return apiHelper.APIResponseNF(res, false, "Tidak ada data makanan", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil memuat daftar makanan", foods);
});

export const showFoodById = apiHelper.handleErrorAsync(async (req, res, next) => {
    const food = await prisma.food.findUnique({
        where: { food_id: Number(req.params.id) }
    });
    if (!food) return apiHelper.APIResponseNF(res, false, "Makanan tidak ditemukan", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil mendapatkan detail makanan", food);
});

export const createFood = apiHelper.handleErrorAsync(async (req, res, next) => {
    if (apiHelper.isEmptyObj(req.body)) return apiHelper.APIResponseBR(res, false, "Data makanan tidak boleh kosong", null);

    const newFood = await prisma.food.create({
        data: req.body
    });
    return apiHelper.APIResponseOK(res, true, "Berhasil menambahkan makanan baru", newFood);
});

export const updateFood = apiHelper.handleErrorAsync(async (req, res, next) => {
    const foodId = Number(req.params.id);
    const existingFood = await prisma.food.findUnique({ where: { food_id: foodId } });
    if (!existingFood) return apiHelper.APIResponseNF(res, false, "Makanan tidak ditemukan", null);

    const updatedFood = await prisma.food.update({
        where: { food_id: foodId },
        data: {
            food_name: req.body.food_name,
            food_price: Number(req.body.food_price)
        }
    });
    return apiHelper.APIResponseOK(res, true, "Berhasil mengupdate data makanan", updatedFood);
});

export const deleteFood = apiHelper.handleErrorAsync(async (req, res, next) => {
    const foodId = Number(req.params.id);
    const existingFood = await prisma.food.findUnique({ where: { food_id: foodId } });
    if (!existingFood) return apiHelper.APIResponseNF(res, false, "Makanan tidak ditemukan", null);

    await prisma.food.delete({
        where: { food_id: foodId }
    });
    return apiHelper.APIResponseOK(res, true, "Berhasil menghapus makanan", null);
});