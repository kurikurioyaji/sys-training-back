const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getQuestions = async (req, res) => {
  // console.log('DATABASE_URL:', process.env.DATABASE_URL);  // 
  const { categoryId } = req.query;
  const questions = await prisma.question.findMany({
    where: { categoryId: parseInt(categoryId) },
  });
  res.json(questions);
};

module.exports = {
  getQuestions,
};
