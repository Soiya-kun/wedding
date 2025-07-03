# wedding

## セットアップ
```
npm install
cd infra, npx cdk bootstrap --profile seiya
$Env:CDK_DOMAIN   = "seiya-and-yuki.wedding"
$Env:CDK_ZONE_ID  = "Z02120881HGQ7S9O4T4S0"
$Env:CDK_CERT_ARN = "arn:aws:acm:us-east-1:658167518751:certificate/f5daa263-407a-43e9-9517-d0326473c6a1"
npm run build
cd infra, npm run deploy -- `
  --context domain=$Env:CDK_DOMAIN `
  --context zoneId=$Env:CDK_ZONE_ID `
  --context certArn=$Env:CDK_CERT_ARN
node scripts/generate-env.mjs   # API URL を .env.local に書き込み
npm run build -w frontend
aws s3 sync frontend/dist s3://wedding-frontend-658167518751-ap-northeast-1/ --delete --profile seiya
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

