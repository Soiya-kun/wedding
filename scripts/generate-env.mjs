// scripts/generate-env.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const outFile = 'infra/cdk-outputs.json';
const outputs = JSON.parse(readFileSync(outFile, 'utf8'));

const apiUrl = outputs.BackendStack.HttpApiUrl;
writeFileSync('frontend/.env.local', `VITE_API_URL=${apiUrl}\n`);
console.log(`✅ frontend/.env.local を生成しました → ${apiUrl}`);
