import { useState } from "react";
import { questions } from "./data/questions";
import type { AnsweredRecord } from "./types";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";

type Stage = "start" | "quiz" | "results";

export default function App() {
  const [stage, setStage] = useState<Stage>("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnsweredRecord[]>([]);

  const handleStart = () => {
    setStage("quiz");
    setCurrentIndex(0);
    setAnswers([]);
  };

  const handleAnswered = (chosenIndex: number, correct: boolean) => {
    const q = questions[currentIndex];
    setAnswers((prev) => [
      ...prev,
      { questionId: q.id, chosenIndex, correct },
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setStage("results");
    }
  };

  return (
    <div className="app-shell">
      {stage === "start" && (
        <StartScreen questions={questions} onStart={handleStart} />
      )}
      {stage === "quiz" && (
        <QuestionCard
          key={questions[currentIndex].id}
          question={questions[currentIndex]}
          index={currentIndex}
          total={questions.length}
          onAnswered={handleAnswered}
          onNext={handleNext}
          isLast={currentIndex === questions.length - 1}
        />
      )}
      {stage === "results" && (
        <ResultScreen
          questions={questions}
          answers={answers}
          onRestart={handleStart}
        />
      )}
    </div>
  );
}
