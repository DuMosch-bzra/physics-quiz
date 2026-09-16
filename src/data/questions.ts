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
    topic: "Free Falls and Throws",
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
    topic: "Statics",
    prompt:
      "A picture frame hangs motionless from a single nail on the wall. What must be true about the forces acting on it?",
    options: [
      "There are no forces acting on it",
      "The net force and net torque on it are both zero",
      "Only the net force is zero; torque can be non-zero",
      "Gravity is temporarily switched off while it hangs",
    ],
    correctIndex: 1,
    explanation:
      "An object at rest is in static equilibrium: the vector sum of all forces (weight and the nail's reaction/tension) is zero, and the sum of torques about any point is also zero, otherwise the frame would translate or rotate.",
    wrongAnswerVideos: {
      0: "statics-a.mp4",
      2: "statics-c.mp4",
      3: "statics-d.mp4",
    },
  },
  {
    id: 4,
    topic: "Circular Motion",
    prompt:
      "An object completes 5 full revolutions around a circle in 10 seconds at constant speed. What is its period T and is its velocity constant?",
    options: [
      "T = 2 s; velocity is constant because speed is constant",
      "T = 2 s; velocity is not constant because direction keeps changing",
      "T = 0.5 s; velocity is constant",
      "T = 50 s; velocity is not constant",
    ],
    correctIndex: 1,
    explanation:
      "Period T = total time / number of revolutions = 10 / 5 = 2 s. Velocity is a vector, so even at constant speed, its direction changes continuously in circular motion, meaning the velocity is not constant — this is exactly why a centripetal acceleration exists.",
    wrongAnswerVideos: {
      0: "circular-motion-a.mp4",
      2: "circular-motion-c.mp4",
      3: "circular-motion-d.mp4",
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
