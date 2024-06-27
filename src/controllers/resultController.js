const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const submitResults = async (req, res) => {
  const { userId, userName, categoryId, answers } = req.body;

  const correctAnswers = await prisma.question.findMany({
    where: { categoryId: parseInt(categoryId) },
    select: { id: true, text: true, correctAnswer: true },
  });

  let score = 0;
  const resultDetails = correctAnswers.map((question) => {
    const userAnswer = answers[question.id];
    const isCorrect = userAnswer === question.correctAnswer;
    if (isCorrect) score += 1;
    return {
      questionId: question.id,
      questionText: question.text,  // 質問のテキストを含む
      yourAnswer: userAnswer,
      correctAnswer: question.correctAnswer,
    };
  });

  // console.log(resultDetails);  // レスポンスをログに出力

  const user = await prisma.user.upsert({
    where: { userId: parseInt(userId) },
    update: {},
    create: { userId: parseInt(userId), userName },
  });

  const result = await prisma.testResult.create({
    data: {
      userId: user.id,
      categoryId: parseInt(categoryId),
      answers: JSON.stringify(answers),
      score,
    },
  });

  res.json(resultDetails);
};

module.exports = {
  submitResults,
};
