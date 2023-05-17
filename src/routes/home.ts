import { Router, Request, Response } from 'express';
import ejs from 'ejs';
let router = Router();

router.get('/', (req: any, res: any) => {
    res.json({
        message: 'home page!'
      });
});

router.get('/example', async (req: Request, res: Response) => {

    let people = {people: ['geddy', 'neil', 'alex2'] };
    let html = await ejs.renderFile(`${__dirname}/../templates/example.ejs`, people);
    res.send(html);

});

module.exports = router;