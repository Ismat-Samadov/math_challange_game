import { GameStats } from '@/types/game';

interface ResultsScreenProps {
  stats: GameStats;
  onPlayAgain: () => void;
  onMainMenu: () => void;
}

export default function ResultsScreen({
  stats,
  onPlayAgain,
  onMainMenu,
}: ResultsScreenProps) {
  const percentage = Math.round((stats.correctAnswers / stats.totalQuestions) * 100);

  const getGrade = () => {
    if (percentage >= 90) return { emoji: '🌟', text: 'Outstanding!', color: 'text-yellow-300' };
    if (percentage >= 70) return { emoji: '🎉', text: 'Great Job!', color: 'text-green-300' };
    if (percentage >= 50) return { emoji: '👍', text: 'Good Effort!', color: 'text-blue-300' };
    return { emoji: '💪', text: 'Keep Practicing!', color: 'text-orange-300' };
  };

  const grade = getGrade();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full animate-fade-in">
        {/* Trophy/Result Icon */}
        <div className="text-center mb-8">
          <div className="text-9xl mb-4 animate-bounce-slow">{grade.emoji}</div>
          <h1 className={`text-5xl font-bold mb-2 ${grade.color}`}>
            {grade.text}
          </h1>
          <p className="text-white/80 text-xl">
            You completed the {stats.difficulty} level!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="glass-morphism rounded-2xl p-6 text-center animate-slide-up">
            <div className="text-5xl mb-2">📊</div>
            <p className="text-white/80 text-sm mb-1">Final Score</p>
            <p className="text-white text-4xl font-bold">{stats.score}</p>
          </div>

          <div className="glass-morphism rounded-2xl p-6 text-center animate-slide-up"
               style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl mb-2">✓</div>
            <p className="text-white/80 text-sm mb-1">Accuracy</p>
            <p className="text-white text-4xl font-bold">{percentage}%</p>
          </div>

          <div className="glass-morphism rounded-2xl p-6 text-center animate-slide-up"
               style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl mb-2">🎯</div>
            <p className="text-white/80 text-sm mb-1">Correct</p>
            <p className="text-white text-4xl font-bold">
              {stats.correctAnswers}/{stats.totalQuestions}
            </p>
          </div>

          <div className="glass-morphism rounded-2xl p-6 text-center animate-slide-up"
               style={{ animationDelay: '0.3s' }}>
            <div className="text-5xl mb-2">🔥</div>
            <p className="text-white/80 text-sm mb-1">Best Streak</p>
            <p className="text-white text-4xl font-bold">{stats.streak}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="glass-morphism rounded-2xl p-6 mb-8 animate-slide-up"
             style={{ animationDelay: '0.4s' }}>
          <div className="flex justify-between text-white mb-2">
            <span className="font-semibold">Your Performance</span>
            <span className="font-bold">{percentage}%</span>
          </div>
          <div className="h-4 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-blue-500
                       transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={onPlayAgain}
            className="w-full bg-white text-purple-600 rounded-2xl py-6
                     text-2xl font-bold hover:bg-white/90 transform
                     hover:scale-105 transition-all duration-300 shadow-xl
                     animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            🔄 Play Again
          </button>

          <button
            onClick={onMainMenu}
            className="w-full glass-morphism text-white rounded-2xl py-6
                     text-xl font-semibold hover:bg-white/20 transform
                     hover:scale-105 transition-all duration-300
                     animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            🏠 Main Menu
          </button>
        </div>

        {/* Motivational Message */}
        <div className="text-center mt-8 text-white/80 text-lg animate-fade-in"
             style={{ animationDelay: '0.7s' }}>
          {percentage === 100 ? (
            <p>🏆 Perfect score! You&apos;re a math genius!</p>
          ) : percentage >= 70 ? (
            <p>Keep up the amazing work! 🚀</p>
          ) : (
            <p>Practice makes perfect! Try again! 💪</p>
          )}
        </div>
      </div>
    </div>
  );
}
