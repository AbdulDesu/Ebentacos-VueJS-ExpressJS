import prisma from "../config/prisma.js";
import * as apiHelper from "../helper/APIHelper.js";

export const createBooking = apiHelper.handleErrorAsync(async (req, res, next) => {
    if (apiHelper.isEmptyObj(req.body)) return apiHelper.APIResponseBR(res, false, "Data booking tidak boleh kosong", null);

    const newBooking = await prisma.bookTable.create({
        data: req.body
    });
    return apiHelper.APIResponseOK(res, true, "Berhasil melakukan pemesanan meja", newBooking);
});