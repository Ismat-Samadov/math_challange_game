export type Difficulty = 'easy' | 'medium' | 'hard';

export type Operation = '+' | '-' | '*' | '/';

export interface Question {
  num1: number;
  num2: number;
  operation: Operation;
  correctAnswer: number;
}

export interface GameState {
  difficulty: Difficulty | null;
  currentQuestion: Question | null;
  score: number;
  questionNumber: number;
  totalQuestions: number;
  gameStatus: 'menu' | 'playing' | 'finished';
  timeLeft: number;
  streak: number;
}

export interface GameStats {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  streak: number;
  difficulty: Difficulty;
}
