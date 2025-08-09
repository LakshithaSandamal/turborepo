import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from './prisma/prisma';
const prisma = new PrismaClient();
export const auth: ReturnType<typeof betterAuth> = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
  },
  trustedOrigins: process.env.CROSS_ORIGIN?.split(',') || [],
});