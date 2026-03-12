export interface User {
  id: string;
  email: string;
  createdAt: string;
}

export interface userProfiles {
  userId: string;
  goal: "cut" | "bulk" | "recomp" | "strength" | "endurance";
  experience: "beginner" | "intermediate" | "advanced";
  daysPerWeek: number;
  sessionLength: number;
  equipment: "fullGym" | "home" | "dumbbells";
  injuries?: string;
  preferredSplit: "fullBody" | "upper_lower" | "ppl" | "custom";
  updatedAt: string;
}
