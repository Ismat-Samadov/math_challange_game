import { Difficulty, Operation, Question } from '@/types/game';

export const TOTAL_QUESTIONS = 10;
export const TIME_PER_QUESTION = 15; // seconds

export function generateQuestion(difficulty: Difficulty): Question {
  let num1: number, num2: number, operation: Operation;

  switch (difficulty) {
    case 'easy':
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      operation = Math.random() > 0.5 ? '+' : '-';
      if (operation === '-' && num1 < num2) {
        [num1, num2] = [num2, num1]; // Ensure positive result
      }
      break;

    case 'medium':
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 20) + 1;
      const mediumOps: Operation[] = ['+', '-', '*'];
      operation = mediumOps[Math.floor(Math.random() * mediumOps.length)];
      if (operation === '-' && num1 < num2) {
        [num1, num2] = [num2, num1];
      }
      if (operation === '*') {
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
      }
      break;

    case 'hard':
      const allOps: Operation[] = ['+', '-', '*', '/'];
      operation = allOps[Math.floor(Math.random() * allOps.length)];

      if (operation === '/') {
        // Generate division that results in whole number
        num2 = Math.floor(Math.random() * 12) + 1;
        const multiplier = Math.floor(Math.random() * 15) + 1;
        num1 = num2 * multiplier;
      } else if (operation === '*') {
        num1 = Math.floor(Math.random() * 15) + 1;
        num2 = Math.floor(Math.random() * 15) + 1;
      } else {
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        if (operation === '-' && num1 < num2) {
          [num1, num2] = [num2, num1];
        }
      }
      break;

    default:
      num1 = 1;
      num2 = 1;
      operation = '+';
  }

  const correctAnswer = calculateAnswer(num1, num2, operation);

  return { num1, num2, operation, correctAnswer };
}

export function calculateAnswer(num1: number, num2: number, operation: Operation): number {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return Math.round(num1 / num2);
    default:
      return 0;
  }
}

export function getOperationSymbol(operation: Operation): string {
  return operation;
}

export function calculateScore(isCorrect: boolean, timeLeft: number, streak: number): number {
  if (!isCorrect) return 0;

  const baseScore = 100;
  const timeBonus = Math.floor(timeLeft * 5);
  const streakBonus = streak * 20;

  return baseScore + timeBonus + streakBonus;
}
