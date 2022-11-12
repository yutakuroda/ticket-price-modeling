# ticket-price-modeling

## お題

https://cinemacity.co.jp/ticket/

この料金表に基づいて映画料金を決定するドメインモデルを作る。
料金表は 2022/11/12 時点のものを参照した。

## 考慮しないもの

- 祝日
- 同伴者
- ※特別興行の場合は上記の限りではございません。
- ※【極上爆音上映】はレイトショー割適用外です。
- ※パーク 80 の割引は終了しました。すでに券をお持ちの方は有効期限までお使いいただけます。

## Prerequisites

Node.js

## Getting Started

```bash
$ git clone git@github.com:yutakuroda/ticket-price-modeling.git
$ cd ticket-price-modeling
$ npm i
```

## Usage

```bash
# 現在日時を元に最適なプランを選択して表示する
$ npx ts-node src/index.ts
```

## Commands for Development

```bash
$ npm run format
$ npm test
```
