import prisma from "../config/prisma.js";
import * as apiHelper from "../helper/APIHelper.js";

export const allUsers = apiHelper.handleErrorAsync(async (req, res, next) => {
    const users = await prisma.user.findMany();
    if (users.length === 0) return apiHelper.APIResponseNF(res, false, "Tidak ada data pengguna", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil mengambil data pengguna", users);
});

export const showAUser = apiHelper.handleErrorAsync(async (req, res, next) => {
    const user = await prisma.user.findUnique({
        where: { user_email: req.params.email },
        select: { user_id: true, user_name: true, user_password: true }
    });
    if (!user) return apiHelper.APIResponseNF(res, false, "Pengguna tidak ditemukan", null);

    return apiHelper.APIResponseOK(res, true, "Berhasil mendapatkan detail pengguna", user);
});

export const createAccount = apiHelper.handleErrorAsync(async (req, res, next) => {
    if (apiHelper.isEmptyObj(req.body)) return apiHelper.APIResponseBR(res, false, "Data pendaftaran tidak boleh kosong", null);

    const newUser = await prisma.user.create({
        data: req.body
    });
    return apiHelper.APIResponseOK(res, true, "Berhasil membuat akun baru", newUser);
});