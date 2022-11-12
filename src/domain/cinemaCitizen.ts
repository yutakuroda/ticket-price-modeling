export const CINEMA_CITIZEN = {
  Member: "member",
  Guest: "guest",
} as const;

export type CINEMA_CITIZEN = typeof CINEMA_CITIZEN[keyof typeof CINEMA_CITIZEN];
