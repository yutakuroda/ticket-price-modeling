# ticket-price-modeling

## お題

https://cinemacity.co.jp/ticket/

この料金表に基づいて映画料金を決定するドメインモデルを作る。
料金表は 2022/11/12 時点のものを参照した。

## 考慮しないもの

- 同伴者
- ※特別興行の場合は上記の限りではございません。
- ※【極上爆音上映】はレイトショー割適用外です。
- ※パーク 80 の割引は終了しました。すでに券をお持ちの方は有効期限までお使いいただけます。

## 本質的な部分

### 宣言的なプラン適応条件と料金

プランごとに class を作り、「顧客の属性からそのプランを利用できるか判断するメソッド」と「日時から料金を計算するメソッド」を持たせる設計とした。
プランごとの class を見るだけで、そのプランの適応条件と料金を把握できるようになっている。

```TypeScript
export const CinemaCitizenPlan: Plan = class {
  static planName(): string {
    return "シネマシティズン";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.age.value >= 60) return false;
    if (cunstomer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.Member)
      return false;

    return true;
  }

  static price(date: Date): number {
    if ([1, 2, 3, 4, 5].includes(date.getDay())) return 1000; // 平日
    if (date.getHours() >= 20) return 1000; // 20時以降
    if (date.getDate() === 1) return 1200; // 映画の日(毎月1日)

    return 1300;
  }
};

```

### 直感的に理解しやすい料金判定ロジック

料金判定ロジックでは、「顧客属性から利用できるプランの一覧を取得する」「利用できるプランのうち、現在日時から最も価格が安くなるプランを取得する」という二段階に分けて処理を実行している。
実際に人間が料金計算する際の思考に近いロジックとしたため、直感的に理解しやすい。

```TypeScript
// src/domain/bestPlanCalculator.ts
export class BestPlanCalculator {
  static calculate(cunstomer: Customer, date: Date): Plan {
    const availablePlans = this.filterAvailablePlans(allPlans, cunstomer);
    if (availablePlans.length === 0)
      throw new Error("利用できるプランがありません");

    return this.findBestPricePlan(availablePlans, date);
  }

  private static filterAvailablePlans(
    allPlans: Plan[],
    cunstomer: Customer
  ): Plan[] {
    return allPlans.filter((plan) => plan.isAvailable(cunstomer));
  }

  private static findBestPricePlan(availablePlans: Plan[], date: Date): Plan {
    return availablePlans.reduce((prev, current) => {
      return prev.price(date) <= current.price(date) ? prev : current;
    });
  }
}
```

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

## 注意点

- 祝日には対応していない
- テストケースは網羅的ではない
- 小学生以下で障がい者手帳を持つ場合の判定ができていない
