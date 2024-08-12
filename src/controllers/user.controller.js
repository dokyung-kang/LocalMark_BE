import { registerUserService, verifyUserEmail, findUsernameByEmailService, getOrdersService, getOrderItemNumberService, getOrderItemsService, updateUserService, updatePasswordService, updatePasswordEmailService, resetPassword, deleteUser } from '../services/user.service.js';
import { response, errResponse } from '../../config/response.js';
import { status } from "../../config/response.status.js";

export const registerUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await registerUserService(userData);
        return res.status(201).json(response({ isSuccess: true, code: 201, message: 'User registered successfully' }, newUser));
    } catch (error) {
        return res.status(400).json(errResponse({ isSuccess: false, code: 400, message: error.message }));
    }
};
export const verifyEmail = async (req, res) => {
    const { email } = req.query;
    try{
        await verifyUserEmail(email);
        return res.status(201).json(response({ isSuccess: true, code: 201, message: 'Email verified successfully!' }));
    } catch (error) {
        return res.status(400).json(errResponse({ isSuccess: false, code: 400, message: error.message }));
    }
};

export const findUsername = async (req, res) => {
    const { email } = req.body;
    try {
        const result = await findUsernameByEmailService(email);
        if (result) {
            return res.status(201).json(response({ isSuccess: true, code: 201, message: 'Username has been sent to your email' }, result));
        } else {
            return res.status(400).json(errResponse({ isSuccess: false, code: 400, message: 'Email not found' }));
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getOrderItems = async (req, res) => {
    const userId = req.currentId;
    try {
        const ids = await getOrdersService(userId);
        if (ids) {
            const itemNumber = await getOrderItemNumberService(ids);
            const items = await getOrderItemsService(itemNumber);
            return res.status(201).json(response({ isSuccess: true, code: 201, message: 'Order items are found' }, items));
        } else {
            return res.status(201).json(response({ isSuccess: true, code: 201, message: 'No orders' }));
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateUser = async (req, res) => {
    const userId = req.currentId;
    const userData = req.body;
    try {
        await updateUserService(userId, userData);
        return res.status(200).json(response({ isSuccess: true, code: 200, message: 'User updated successfully' }));
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updatePassword = async (req, res) => {
    const userId = req.currentId;
    const newPassword = req.body;
    try {
        await updatePasswordService(userId, newPassword);
        return res.status(200).json(response({ isSuccess: true, code: 200, message: 'User password updated successfully' }));
    } catch (error) {
        return res.status(400).json(errResponse({ isSuccess: false, code: 400, message: error.message }));
    }
};

export const updatePasswordEmail = async (req, res)=>{
    const userId = req.currentId;
    try {
        const respon = await updatePasswordEmailService(userId);
        if(respon){
            return res.status(201).json(response({ isSuccess: true, code: 201, message: 'The page to change the password has been sent to your email' }));
        }
        else{
            return res.status(400).json(errResponse({ isSuccess: false, code: 400, message: 'Sending email is failed' }));
        }
    } catch (error) {
        return res.status(400).json(errResponse({ isSuccess: false, code: 400, message: error.message }));
    }

}

export const findPassword = async (req, res, next) => {
    console.log("비밀번호 찾기 요청입니다.");

    const { loginId, email } = req.body;
    const result = await resetPassword(loginId, email);
    res.send(response(status.SUCCESS, result));
};

export const removeUser = async (req, res, next) => {
    const result = await deleteUser(req.currentId);
    if (result == 1) {
        req.headers["Authorization"] = null;
        res.clearCookie("refreshToken");
        res.send(response(status.SUCCESS, "회원 탈퇴가 완료되었습니다."));
    } else if (result == 2) {
        res.send(response(status.SUCCESS, "회원 탈퇴 취소가 완료되었습니다."));
    }
};
