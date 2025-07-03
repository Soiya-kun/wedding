# wedding

## セットアップ
```
npm install
cd infra && npx cdk bootstrap
npm run build
npm run deploy          # API, Lambda, DynamoDB, S3/CloudFront, 静的ファイルを一括生成
node scripts/generate-env.mjs   # API URL を .env.local に書き込み
npm run build -w frontend && aws s3 sync frontend/dist s3://<bucket>/ --delete
```

## 開発用ローカルサーバ
```
cd frontend
npm run dev
```

## クリーンアップ
```
cd infra && npx cdk destroy
```

## 注意
- Node.js 20 以上必須 (.nvmrc 参照)。
- ACM 証明書と HostedZone は事前に用意し、CDK context か環境変数で渡す。

