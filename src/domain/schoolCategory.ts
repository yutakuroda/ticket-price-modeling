export const SCHOOL_CATEGORY = {
  University: "university",
} as const;

export type SCHOOL_CATEGORY =
  typeof SCHOOL_CATEGORY[keyof typeof SCHOOL_CATEGORY];
