import { Router, Request, Response } from 'express';
import ejs from 'ejs';
let router = Router();

router.get('/', async (req: any, res: any) => {
    let user = {firstName: "Joe"};
    let html = await ejs.renderFile(`${__dirname}/../templates/example.ejs`, user);
    res.send(html);
});

module.exports = router;