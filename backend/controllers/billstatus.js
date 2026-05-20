import prisma from "../config/prisma.js";
import * as apiHelper from "../helper/APIHelper.js";

export const showNewestStatusId = apiHelper.handleErrorAsync(async (req, res, next) => {
    const newestBill = await prisma.billStatus.findFirst({
        orderBy: { bill_id: 'desc' },
        select: { bill_id: true }
    });
    if (!newestBill) return apiHelper.APIResponseNF(res, false, "Tidak ada data tagihan", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil mendapatkan tagihan terbaru", newestBill);
});

export const createBillStatus = apiHelper.handleErrorAsync(async (req, res, next) => {
    if (apiHelper.isEmptyObj(req.body)) return apiHelper.APIResponseBR(res, false, "Data tagihan tidak boleh kosong", null);

    const newStatus = await prisma.billStatus.create({
        data: req.body
    });
    return apiHelper.APIResponseOK(res, true, "Berhasil membuat tagihan baru", newStatus);
});

export const getAllBillsByUser = apiHelper.handleErrorAsync(async (req, res, next) => {
    const bills = await prisma.billStatus.findMany({
        where: { user_id: Number(req.params.id) }
    });
    if (bills.length === 0) return apiHelper.APIResponseNF(res, false, "Tidak ada tagihan untuk pengguna ini", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil memuat tagihan pengguna", bills);
});

export const getAllBillsByBill = apiHelper.handleErrorAsync(async (req, res, next) => {
    const bills = await prisma.billStatus.findMany({
        where: { bill_id: Number(req.params.id) }
    });
    if (bills.length === 0) return apiHelper.APIResponseNF(res, false, "Tagihan tidak ditemukan", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil memuat detail tagihan", bills);
});

export const getAllBills = apiHelper.handleErrorAsync(async (req, res, next) => {
    const bills = await prisma.billStatus.findMany();
    if (bills.length === 0) return apiHelper.APIResponseNF(res, false, "Tidak ada data tagihan", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil memuat semua tagihan", bills);
});

export const updateBillStatus = apiHelper.handleErrorAsync(async (req, res, next) => {
    const updatedBill = await prisma.billStatus.update({
        where: { bill_id: Number(req.params.id) },
        data: { bill_status: { increment: 1 } }
    });
    return apiHelper.APIResponseOK(res, true, "Status tagihan berhasil diperbarui", updatedBill);
});

export const updateBillPaid = apiHelper.handleErrorAsync(async (req, res, next) => {
    const paidBill = await prisma.billStatus.update({
        where: { bill_id: Number(req.params.id) },
        data: { bill_paid: "true" }
    });
    return apiHelper.APIResponseOK(res, true, "Tagihan berhasil dibayar", paidBill);
});

export const cancelBillStatus = apiHelper.handleErrorAsync(async (req, res, next) => {
    const canceledBill = await prisma.billStatus.update({
        where: { bill_id: Number(req.params.id) },
        data: {
            bill_status: 0,
            bill_paid: "false"
        }
    });
    return apiHelper.APIResponseOK(res, true, "Tagihan berhasil dibatalkan", canceledBill);
});