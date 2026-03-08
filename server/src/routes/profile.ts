import { Router, type Request, type Response } from "express";

export const profileRouter = Router();

profileRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { userId, ...profileData } = req.body;
  } catch (err) {
    console.log("Error saving profile", err);
    res.status(500).json({ err: "Failed to save profile" });
  }
});
