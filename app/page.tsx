'use client';

import { useState, useEffect, useCallback } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import GameScreen from '@/components/GameScreen';
import ResultsScreen from '@/components/ResultsScreen';
import { GameState, Difficulty, GameStats } from '@/types/game';
import {
  generateQuestion,
  calculateScore,
  TOTAL_QUESTIONS,
  TIME_PER_QUESTION,
} from '@/utils/gameLogic';

export default function Home() {
  const [gameState, setGameState] = useState<GameState>({
    difficulty: null,
    currentQuestion: null,
    score: 0,
    questionNumber: 0,
    totalQuestions: TOTAL_QUESTIONS,
    gameStatus: 'menu',
    timeLeft: TIME_PER_QUESTION,
    streak: 0,
  });

  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Timer effect
  useEffect(() => {
    if (gameState.gameStatus !== 'playing') return;

    const timer = setInterval(() => {
      setGameState((prev) => {
        if (prev.timeLeft <= 1) {
          return prev;
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.gameStatus, gameState.questionNumber]);

  const startGame = useCallback((difficulty: Difficulty) => {
    const firstQuestion = generateQuestion(difficulty);
    setGameState({
      difficulty,
      currentQuestion: firstQuestion,
      score: 0,
      questionNumber: 1,
      totalQuestions: TOTAL_QUESTIONS,
      gameStatus: 'playing',
      timeLeft: TIME_PER_QUESTION,
      streak: 0,
    });
    setCorrectAnswers(0);
  }, []);

  const handleAnswer = useCallback(
    (userAnswer: number) => {
      if (!gameState.currentQuestion || !gameState.difficulty) return;

      const isCorrect =
        Math.abs(userAnswer - gameState.currentQuestion.correctAnswer) < 0.01;
      const newStreak = isCorrect ? gameState.streak + 1 : 0;
      const points = calculateScore(isCorrect, gameState.timeLeft, gameState.streak);

      setGameState((prev) => {
        const newQuestionNumber = prev.questionNumber + 1;

        if (newQuestionNumber > TOTAL_QUESTIONS) {
          return {
            ...prev,
            score: prev.score + points,
            gameStatus: 'finished',
            streak: newStreak,
          };
        }

        return {
          ...prev,
          currentQuestion: generateQuestion(prev.difficulty!),
          score: prev.score + points,
          questionNumber: newQuestionNumber,
          timeLeft: TIME_PER_QUESTION,
          streak: newStreak,
        };
      });

      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      }
    },
    [gameState.currentQuestion, gameState.difficulty, gameState.streak, gameState.timeLeft]
  );

  const handleTimeout = useCallback(() => {
    handleAnswer(NaN); // Wrong answer on timeout
  }, [handleAnswer]);

  const resetGame = useCallback(() => {
    setGameState({
      difficulty: null,
      currentQuestion: null,
      score: 0,
      questionNumber: 0,
      totalQuestions: TOTAL_QUESTIONS,
      gameStatus: 'menu',
      timeLeft: TIME_PER_QUESTION,
      streak: 0,
    });
    setCorrectAnswers(0);
  }, []);

  const playAgain = useCallback(() => {
    if (gameState.difficulty) {
      startGame(gameState.difficulty);
    }
  }, [gameState.difficulty, startGame]);

  if (gameState.gameStatus === 'menu') {
    return <WelcomeScreen onStartGame={startGame} />;
  }

  if (gameState.gameStatus === 'playing' && gameState.currentQuestion) {
    return (
      <GameScreen
        question={gameState.currentQuestion}
        questionNumber={gameState.questionNumber}
        totalQuestions={gameState.totalQuestions}
        score={gameState.score}
        streak={gameState.streak}
        timeLeft={gameState.timeLeft}
        onAnswer={handleAnswer}
        onTimeout={handleTimeout}
      />
    );
  }

  if (gameState.gameStatus === 'finished' && gameState.difficulty) {
    const stats: GameStats = {
      score: gameState.score,
      totalQuestions: gameState.totalQuestions,
      correctAnswers,
      streak: gameState.streak,
      difficulty: gameState.difficulty,
    };

    return (
      <ResultsScreen
        stats={stats}
        onPlayAgain={playAgain}
        onMainMenu={resetGame}
      />
    );
  }

  return null;
}
