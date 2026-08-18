// src/routes/products.ts
import { Router } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { authMiddleware } from '../middlewares/auth';

const router = Router();
const DB_PATH = './src/db/data.json';

function readDB() {
  return JSON.parse(readFileSync(DB_PATH, 'utf-8'));
}
function saveDB(data: any) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

router.get('/', (req, res) => {
  const db = readDB();
  res.json(db.products);
});

router.post('/', authMiddleware, (req, res) => {
  const db = readDB();
  const newProduct = { id: Date.now(), ...req.body };

  db.products.push(newProduct);
  saveDB(db);

  res.status(201).json(newProduct);
});

export default router;