export const DISABILITY = {
  Handicapped: "handicapped",
  None: "none",
} as const;

export type DISABILITY = typeof DISABILITY[keyof typeof DISABILITY];
