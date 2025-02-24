import { Request, Response } from "express";
import { fetchAndTransformUsers } from "../services/userService";

export const getUsersGroupedByDepartment = async (req: Request, res: Response) => {
    try {
        const transformedData = await fetchAndTransformUsers();
        res.json(transformedData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};
