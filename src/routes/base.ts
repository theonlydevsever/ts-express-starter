import { Request, Response, Router } from "express";

const baseRouter = Router({ caseSensitive: true });

baseRouter.route("/").get((req: Request, res: Response) => {
    return res.status(200).send("Ping!");
});

export default baseRouter;
export { baseRouter };
