import { Request, Response } from 'express';

export const indexWelcom = (req: Request, res: Response): Response => {
  return res.json('Welcom to my API');
};
