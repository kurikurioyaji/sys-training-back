const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seed = async () => {
  // 数学カテゴリ
  await prisma.category.create({
    data: {
      name: 'Math',
      Questions: {
        create: [
          {
            text: '2 + 2 = ?',
            choices: JSON.stringify(['1', '2', '3', '4']),
            correctAnswer: '4',
            explanation: '2 + 2は4です。', // 2 + 2は4です。
          },
          {
            text: '3 * 3 = ?',
            choices: JSON.stringify(['6', '7', '8', '9']),
            correctAnswer: '9',
            explanation: '3かける3は9です。', // 3かける3は9です。
          },
          {
            text: '5 - 3 = ?',
            choices: JSON.stringify(['1', '2', '3', '4']),
            correctAnswer: '2',
            explanation: '5引く3は2です。', // 5引く3は2です。
          },
          {
            text: '10 / 2 = ?',
            choices: JSON.stringify(['2', '3', '4', '5']),
            correctAnswer: '5',
            explanation: '10割る2は5です。', // 10割る2は5です。
          },
          {
            text: '4 * 4 = ?',
            choices: JSON.stringify(['12', '14', '16', '18']),
            correctAnswer: '16',
            explanation: '4かける4は16です。', // 4かける4は16です。
          },
        ],
      },
    },
  });

  // 科学カテゴリ
  await prisma.category.create({
    data: {
      name: 'Science',
      Questions: {
        create: [
          {
            text: '水の化学記号は何ですか？',
            choices: JSON.stringify(['H2O', 'O2', 'CO2', 'NaCl']),
            correctAnswer: 'H2O',
            explanation: '水の化学記号はH2Oです。', // 水の化学記号はH2Oです。
          },
          {
            text: '赤い惑星として知られるのはどの惑星ですか？',
            choices: JSON.stringify(['地球', '火星', '木星', '金星']),
            correctAnswer: '火星',
            explanation: '火星は赤みがかった外観から赤い惑星として知られています。', // 火星は赤みがかった外観から赤い惑星として知られています。
          },
          {
            text: '植物が大気から吸収する気体は何ですか？',
            choices: JSON.stringify(['酸素', '窒素', '二酸化炭素', '水素']),
            correctAnswer: '二酸化炭素',
            explanation: '光合成中に植物は大気中の二酸化炭素を吸収します。', // 光合成中に植物は大気中の二酸化炭素を吸収します。
          },
          {
            text: '海面での水の沸点は何度ですか？',
            choices: JSON.stringify(['50°C', '75°C', '100°C', '125°C']),
            correctAnswer: '100°C',
            explanation: '海面での水の沸点は100°Cです。', // 海面での水の沸点は100°Cです。
          },
          {
            text: '私たちを地面に留める力は何ですか？',
            choices: JSON.stringify(['磁力', '重力', '摩擦', '張力']),
            correctAnswer: '重力',
            explanation: '重力が私たちを地面に留める力です。', // 重力が私たちを地面に留める力です。
          },
        ],
      },
    },
  });

  // 歴史カテゴリ
  await prisma.category.create({
    data: {
      name: 'History',
      Questions: {
        create: [
          {
            text: 'アメリカ合衆国の初代大統領は誰でしたか？',
            choices: JSON.stringify(['トーマス・ジェファーソン', 'エイブラハム・リンカーン', 'ジョージ・ワシントン', 'ジョン・アダムズ']),
            correctAnswer: 'ジョージ・ワシントン',
            explanation: 'ジョージ・ワシントンはアメリカ合衆国の初代大統領でした。', // ジョージ・ワシントンはアメリカ合衆国の初代大統領でした。
          },
          {
            text: '第二次世界大戦は何年に終了しましたか？',
            choices: JSON.stringify(['1942', '1943', '1944', '1945']),
            correctAnswer: '1945',
            explanation: '第二次世界大戦は1945年に終了しました。', // 第二次世界大戦は1945年に終了しました。
          },
          {
            text: 'ピラミッドを建設した古代文明はどこですか？',
            choices: JSON.stringify(['ローマ人', 'ギリシャ人', 'エジプト人', 'マヤ人']),
            correctAnswer: 'エジプト人',
            explanation: '古代エジプト人がピラミッドを建設しました。', // 古代エジプト人がピラミッドを建設しました。
          },
          {
            text: 'アメリカ大陸を発見したのは誰ですか？',
            choices: JSON.stringify(['クリストファー・コロンブス', 'マルコ・ポーロ', 'フェルディナンド・マゼラン', 'ジェームズ・クック']),
            correctAnswer: 'クリストファー・コロンブス',
            explanation: 'クリストファー・コロンブスは1492年にアメリカ大陸を発見しました。', // クリストファー・コロンブスは1492年にアメリカ大陸を発見しました。
          },
          {
            text: '南北戦争はアメリカ合衆国のどの地域同士の戦争でしたか？',
            choices: JSON.stringify(['第一次世界大戦', '第二次世界大戦', '南北戦争', 'アメリカ独立戦争']),
            correctAnswer: '南北戦争',
            explanation: '南北戦争はアメリカ合衆国の北部と南部の地域同士の戦争でした。', // 南北戦争はアメリカ合衆国の北部と南部の地域同士の戦争でした。
          },
        ],
      },
    },
  });

  // 地理カテゴリ
  await prisma.category.create({
    data: {
      name: 'Geography',
      Questions: {
        create: [
          {
            text: '世界で最長の川は何ですか？',
            choices: JSON.stringify(['アマゾン川', 'ナイル川', '長江', 'ミシシッピ川']),
            correctAnswer: 'ナイル川',
            explanation: 'ナイル川が世界で最長の川です。', // ナイル川が世界で最長の川です。
          },
          {
            text: 'フランスの首都は何ですか？',
            choices: JSON.stringify(['ローマ', 'マドリード', 'パリ', 'ベルリン']),
            correctAnswer: 'パリ',
            explanation: 'パリはフランスの首都です。', // パリはフランスの首都です。
          },
          {
            text: '陸地面積が最も大きい大陸は何ですか？',
            choices: JSON.stringify(['アフリカ', 'アジア', '北アメリカ', 'ヨーロッパ']),
            correctAnswer: 'アジア',
            explanation: 'アジア大陸が陸地面積で最も大きいです。', // アジア大陸が陸地面積で最も大きいです。
          },
          {
            text: '世界で最小の国は何ですか？',
            choices: JSON.stringify(['モナコ', 'ナウル', 'バチカン市国', 'サンマリノ']),
            correctAnswer: 'バチカン市国',
            explanation: 'バチカン市国が世界で最小の国です。', // バチカン市国が世界で最小の国です。
          },
          {
            text: '世界で最も人口の多い国は何ですか？',
            choices: JSON.stringify(['インド', 'アメリカ合衆国', 'インドネシア', '中国']),
            correctAnswer: '中国',
            explanation: '中国が世界で最も人口の多い国です。', // 中国が世界で最も人口の多い国です。
          },
        ],
      },
    },
  });

  // 文学カテゴリ
  await prisma.category.create({
    data: {
      name: 'Literature',
      Questions: {
        create: [
          {
            text: '「ロミオとジュリエット」を書いたのは誰ですか？',
            choices: JSON.stringify(['ウィリアム・シェイクスピア', 'ジェイン・オースティン', 'チャールズ・ディケンズ', 'マーク・トウェイン']),
            correctAnswer: 'ウィリアム・シェイクスピア',
            explanation: 'ウィリアム・シェイクスピアが「ロミオとジュリエット」を書きました。', // ウィリアム・シェイクスピアが「ロミオとジュリエット」を書きました。
          },
          {
            text: '「ハリー・ポッター」シリーズの第1巻のタイトルは何ですか？',
            choices: JSON.stringify(['炎のゴブレット', '賢者の石', '秘密の部屋', 'アズカバンの囚人']),
            correctAnswer: '賢者の石',
            explanation: '「ハリー・ポッター」シリーズの第1巻のタイトルは「賢者の石」です。', // 「ハリー・ポッター」シリーズの第1巻のタイトルは「賢者の石」です。
          },
          {
            text: '「1984」を書いたのは誰ですか？',
            choices: JSON.stringify(['オルダス・ハクスリー', 'ジョージ・オーウェル', 'レイ・ブラッドベリ', 'J.R.R.トールキン']),
            correctAnswer: 'ジョージ・オーウェル',
            explanation: 'ジョージ・オーウェルが「1984」を書きました。', // ジョージ・オーウェルが「1984」を書きました。
          },
          {
            text: '「プライドと偏見」の著者は誰ですか？',
            choices: JSON.stringify(['ジェイン・オースティン', 'シャーロット・ブロンテ', 'エミリー・ブロンテ', 'ルイザ・メイ・オルコット']),
            correctAnswer: 'ジェイン・オースティン',
            explanation: 'ジェイン・オースティンが「プライドと偏見」を書きました。', // ジェイン・オースティンが「プライドと偏見」を書きました。
          },
          {
            text: '「白鯨」で白鯨の名前は何ですか？',
            choices: JSON.stringify(['ジョーズ', 'ネモ', 'モビー', 'モビーディック']),
            correctAnswer: 'モビーディック',
            explanation: '「白鯨」で白鯨の名前はモビーディックです。', // 「白鯨」で白鯨の名前はモビーディックです。
          },
        ],
      },
    },
  });
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
