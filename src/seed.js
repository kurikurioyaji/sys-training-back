require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const main = async () => {
  // カテゴリを作成
  const category = await prisma.category.create({
    data: {
      name: 'Math',
      Questions: {
        create: [
          {
            text: '2 + 2 = ?',
            choices: JSON.stringify(['2', '3', '4', '5']),
            correctAnswer: '4',
          },
          {
            text: '3 * 3 = ?',
            choices: JSON.stringify(['6', '7', '8', '9']),
            correctAnswer: '9',
          },
        ],
      },
    },
  });

  console.log('Test data created:', category);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
