'use client';

import { useState, useEffect, useRef } from 'react';
import { Question } from '@/types/game';

interface GameScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  streak: number;
  timeLeft: number;
  onAnswer: (answer: number) => void;
  onTimeout: () => void;
}

export default function GameScreen({
  question,
  questionNumber,
  totalQuestions,
  score,
  streak,
  timeLeft,
  onAnswer,
  onTimeout,
}: GameScreenProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUserAnswer('');
    setFeedback(null);
    inputRef.current?.focus();
  }, [question]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout();
    }
  }, [timeLeft, onTimeout]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer === '') return;

    const answer = parseFloat(userAnswer);
    const isCorrect = Math.abs(answer - question.correctAnswer) < 0.01;

    setFeedback(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => {
      onAnswer(answer);
      setFeedback(null);
    }, 800);
  };

  const timePercentage = (timeLeft / 15) * 100;
  const timeColor =
    timePercentage > 60
      ? 'bg-green-500'
      : timePercentage > 30
      ? 'bg-yellow-500'
      : 'bg-red-500';

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header Stats */}
        <div className="flex justify-between items-center mb-8 text-white">
          <div className="glass-morphism rounded-xl px-6 py-3">
            <p className="text-sm opacity-80">Question</p>
            <p className="text-2xl font-bold">
              {questionNumber} / {totalQuestions}
            </p>
          </div>

          <div className="glass-morphism rounded-xl px-6 py-3">
            <p className="text-sm opacity-80">Score</p>
            <p className="text-2xl font-bold">{score}</p>
          </div>

          {streak > 0 && (
            <div className="glass-morphism rounded-xl px-6 py-3 animate-pulse-slow">
              <p className="text-sm opacity-80">Streak</p>
              <p className="text-2xl font-bold">🔥 {streak}</p>
            </div>
          )}
        </div>

        {/* Timer Bar */}
        <div className="mb-8">
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className={`h-full ${timeColor} transition-all duration-1000 ease-linear`}
              style={{ width: `${timePercentage}%` }}
            />
          </div>
          <p className="text-white text-center mt-2 text-lg font-semibold">
            {timeLeft}s
          </p>
        </div>

        {/* Question Card */}
        <div
          className={`glass-morphism rounded-3xl p-12 text-white text-center mb-8
                     transform transition-all duration-300 ${
                       feedback === 'correct'
                         ? 'scale-105 bg-green-500/30'
                         : feedback === 'wrong'
                         ? 'animate-wiggle bg-red-500/30'
                         : ''
                     }`}
        >
          <div className="text-7xl font-bold mb-8 animate-scale-in">
            {question.num1} {question.operation} {question.num2} = ?
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              ref={inputRef}
              type="number"
              step="any"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full text-center text-5xl font-bold bg-white/20
                       border-4 border-white/40 rounded-2xl py-6 px-8
                       focus:outline-none focus:border-white focus:bg-white/30
                       transition-all duration-300 placeholder-white/50"
              placeholder="?"
              disabled={feedback !== null}
              autoFocus
            />

            <button
              type="submit"
              disabled={userAnswer === '' || feedback !== null}
              className="w-full bg-white text-purple-600 rounded-2xl py-6
                       text-2xl font-bold hover:bg-white/90 transform
                       hover:scale-105 transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed
                       disabled:hover:scale-100 shadow-xl"
            >
              {feedback === 'correct'
                ? '✓ Correct!'
                : feedback === 'wrong'
                ? '✗ Wrong!'
                : 'Submit Answer'}
            </button>
          </form>
        </div>

        {/* Feedback Messages */}
        {feedback && (
          <div
            className={`text-center text-2xl font-bold animate-bounce ${
              feedback === 'correct' ? 'text-green-300' : 'text-red-300'
            }`}
          >
            {feedback === 'correct'
              ? '🎉 Awesome! Keep going!'
              : `💭 It was ${question.correctAnswer}`}
          </div>
        )}
      </div>
    </div>
  );
}
