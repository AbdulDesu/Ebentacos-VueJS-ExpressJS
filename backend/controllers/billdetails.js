import prisma from "../config/prisma.js";
import * as apiHelper from "../helper/APIHelper.js";

export const createBillDetails = apiHelper.handleErrorAsync(async (req, res, next) => {
    if (apiHelper.isEmptyObj(req.body)) return apiHelper.APIResponseBR(res, false, "Data detail tagihan tidak boleh kosong", null);

    const newDetail = await prisma.billDetails.create({
        data: req.body
    });
    return apiHelper.APIResponseOK(res, true, "Berhasil menambahkan detail tagihan", newDetail);
});

export const getBillDetailsById = apiHelper.handleErrorAsync(async (req, res, next) => {
    const details = await prisma.billDetails.findMany({
        where: { bill_id: Number(req.params.id) }
    });
    if (details.length === 0) return apiHelper.APIResponseNF(res, false, "Detail tagihan tidak ditemukan", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil memuat detail tagihan", details);
});