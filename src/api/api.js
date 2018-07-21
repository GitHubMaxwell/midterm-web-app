'use strict';

import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get('/', (req,res) => {
  fs.readFile(__dirname + '/../public/index.html', (err, data) => {
    if(err) throw err;
    res.status(200);
    res.write(data);
    res.end();
  });
});

export default router;