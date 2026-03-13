import type { userProfiles } from "../types";


async function post(path:string, body: object ) {}
async function get() {}

export const api = {
     saveProfile: (userId: string, profile: Omit<userProfiles, "userId"> | "updatedAt") => {

     }
}