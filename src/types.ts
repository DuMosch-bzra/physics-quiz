export interface Question {
  id: number;
  topic: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /**
   * Explainer video shown when the user picks a wrong option, keyed by
   * that option's index (never by correctIndex). Value is just the mp4
   * filename — the actual file lives in src/assets/videos/. Leave an
   * index out until you have a real clip for that wrong answer.
   */
  wrongAnswerVideos?: Partial<Record<number, string>>;
}

export interface AnsweredRecord {
  questionId: number;
  chosenIndex: number;
  correct: boolean;
}
