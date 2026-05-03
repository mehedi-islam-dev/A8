import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

// Create SQLite database connection
const db = new Database("suncart.db");

export const auth = betterAuth({
    database: db,
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    }
});