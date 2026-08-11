export const MODES = {
  HOME: "home",
  ABOUT: "about",
  EXPERIENCE: "experience",
  RESUME: "resume",
} as const;

export type Mode = (typeof MODES)[keyof typeof MODES];
