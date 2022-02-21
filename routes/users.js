import express from "express";
import { createUsers, getUsers,getUserById,deleteUserById, updateUserById } from "../controllers/users.js"; 


const router= express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUsers);
router.delete('/:id', deleteUserById);
router.patch('/:id', updateUserById);

export default router;