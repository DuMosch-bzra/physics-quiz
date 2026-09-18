import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: 1,
    topic: "Kinematics",
    prompt:
      "A position–time graph for an object shows a straight line with a constant negative slope. What does this tell you about the object's motion?",
    options: [
      "It is speeding up while moving forward",
      "It is at rest",
      "It is moving at a constant velocity in the negative direction",
      "It is accelerating in the negative direction",
    ],
    correctIndex: 2,
    explanation:
      "The slope of a position–time graph is velocity. A straight line means the slope (velocity) does not change, so the object moves at constant velocity; the negative sign only shows the direction, not acceleration.",
    wrongAnswerVideos: {
      0: "kinematics-a.mp4",
      1: "kinematics-b.mp4",
      3: "kinematics-d.mp4",
    },
  },
  {
    id: 2,
    topic: "Free Falls 1",
    prompt:
      "A ball is thrown horizontally off a cliff at 15 m/s. Compared to a second ball simply dropped from the same height at the same moment, which ball reaches the ground first?",
    options: [
      "The thrown ball, because it moves faster overall",
      "The dropped ball, because it has no horizontal motion to slow it down",
      "They land at the same time",
      "It depends on the height of the cliff",
    ],
    correctIndex: 2,
    explanation:
      "Horizontal and vertical motion are independent. Both balls have the same initial vertical velocity (zero) and the same vertical acceleration (g), so they fall the same vertical distance in the same time, regardless of horizontal speed.",
    wrongAnswerVideos: {
      0: "free-falls-a.mp4",
      1: "free-falls-b.mp4",
      3: "free-falls-d.mp4",
    },
  },
  {
    id: 3,
    topic: "Free Falls 2",
    prompt:
      "A stone is dropped from rest from a height and hits the ground after 2 s. Using g = 9.81 m/s² and ignoring air resistance, how far did it fall?",
    options: [
        "39.24 m",
        "19.62 m",
        "9.81 m",
        "4.90 m",
    ],
    correctIndex: 0,
    explanation:
      "Using the equation for free fall: d = ½gt², where g = 9.81 m/s² and t = 2 s, we get d = ½(9.81)(4) = 19.62 m.",
    wrongAnswerVideos: {
      0: "free-falls-a-2.mp4",
      2: "free-falls-c-2.mp4",
      3: "free-falls-d-2.mp4",
    },
  },
  {
    id: 4,
    topic: "Statics",
    prompt:
      "A uniform seesaw is balanced with a 40 kg child sitting 1.5 m from the pivot. Where must a 30 kg child sit on the other side to balance it?",
    options: [
      "1.0 m from the pivot",
      "1.5 m from the pivot",
      "2.0 m from the pivot",
      "2.5 m from the pivot",
    ],
    correctIndex: 1,
    explanation:
      "For the seesaw to be balanced, the torques about the pivot must be equal and opposite. Using τ = F × r, we have 40 kg × 1.5 m = 30 kg × r, so r = (40 × 1.5) / 30 = 2.0 m.",
    wrongAnswerVideos: {
      0: "statics-a.mp4",
      2: "statics-c.mp4",
      3: "statics-d.mp4",
    },
  },
  {
    id: 5,
    topic: "Work, Energy and Power",
    prompt:
      "A 1000 W motor lifts a load at a constant speed, doing 15,000 J of work. How long does this take, and what does this reveal about the relationship between power and time for a fixed amount of work?",
    options: [
      "15 s; power and time are directly proportional",
      "15 s; power and time are inversely proportional for fixed work",
      "0.067 s; power and time are directly proportional",
      "150 s; power and time are inversely proportional for fixed work",
    ],
    correctIndex: 1,
    explanation:
      "Power P = W/t, so t = W/P = 15,000 / 1000 = 15 s. Since W = P × t is fixed, increasing power decreases the time needed and vice versa — an inverse relationship, not a direct one.",
    wrongAnswerVideos: {
      0: "work-energy-power-a.mp4",
      2: "work-energy-power-c.mp4",
      3: "work-energy-power-d.mp4",
    },
  },
  {
    id: 6,
    topic: "Electrical Circuits",
    prompt:
      "You have two resistors already connected in parallel across a battery. You add a third resistor in parallel with them, without changing the voltage. What happens to the total resistance and the total current drawn from the battery?",
    options: [
      "Total resistance increases; total current decreases",
      "Total resistance decreases; total current increases",
      "Total resistance stays the same; total current stays the same",
      "Total resistance decreases; total current decreases",
    ],
    correctIndex: 1,
    explanation:
      "Adding another parallel branch gives current more paths to flow through, so the equivalent resistance 1/R_total = 1/R1 + 1/R2 + 1/R3 always decreases as branches are added. Since V is constant, I = V/R_total must then increase.",
    wrongAnswerVideos: {
      0: "electrical-circuits-a.mp4",
      2: "electrical-circuits-c.mp4",
      3: "electrical-circuits-d.mp4",
    },
  },
];
