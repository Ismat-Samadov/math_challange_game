import { Difficulty } from '@/types/game';

interface WelcomeScreenProps {
  onStartGame: (difficulty: Difficulty) => void;
}

export default function WelcomeScreen({ onStartGame }: WelcomeScreenProps) {
  const difficulties: { level: Difficulty; emoji: string; description: string }[] = [
    { level: 'easy', emoji: '😊', description: 'Addition & Subtraction (1-10)' },
    { level: 'medium', emoji: '🤔', description: 'Basic Operations (1-20)' },
    { level: 'hard', emoji: '🔥', description: 'All Operations (Advanced)' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full animate-fade-in">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6 animate-bounce-slow">🧮</div>
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Math Challenge
          </h1>
          <p className="text-xl text-white/90 font-medium">
            Test your skills and become a math master!
          </p>
        </div>

        {/* Difficulty Selection */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Choose Your Difficulty
          </h2>

          {difficulties.map((diff, index) => (
            <button
              key={diff.level}
              onClick={() => onStartGame(diff.level)}
              className="w-full glass-morphism rounded-2xl p-6 text-white
                       hover:scale-105 hover:shadow-2xl hover:bg-white/20
                       transform transition-all duration-300 group
                       animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl group-hover:animate-wiggle">
                    {diff.emoji}
                  </span>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold capitalize mb-1">
                      {diff.level}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {diff.description}
                    </p>
                  </div>
                </div>
                <svg
                  className="w-8 h-8 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-10 glass-morphism rounded-2xl p-6 text-white/90 text-center">
          <p className="text-lg">
            <span className="font-bold">10 Questions</span> •
            <span className="font-bold"> 15 Seconds Each</span> •
            <span className="font-bold"> Build Your Streak!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
