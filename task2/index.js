import fs from "fs";
import path from "path";
import { combine, getMatrices } from "./matrix.js";

const input = fs.readFileSync(path.join(path.resolve(), "/task2/input"), "utf-8");

const width = 25;
const height = 6;

const matrices = getMatrices(input, width, height);
const result = combine(matrices, width, height);

result.forEach(row => {
  row.forEach(element => {
    if (element === '0') {
      process.stdout.write('  ');
    }
    if (element === '1') {
      process.stdout.write('# ');
    }
    if (element === '2') {
      process.stdout.write('  ');
    }
  });
  process.stdout.write('\n')
});
