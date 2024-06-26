import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { logIn } from "@/services/authentication/authentication.service";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials: any) => {
        try {
          const loginResult = await logIn({
            userName: credentials?.userName,
            password: credentials?.password,
          });
          return loginResult?.data;
        } catch (error: any) {
          throw new Error(
            error?.data?.messages || error?.response?.data?.messages
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt(jwtData: any) {
      if (jwtData.user) {
        jwtData.token.user = jwtData.user?.user;
        jwtData.token.accessToken = jwtData.user?.token;
      }
      return jwtData.token;
    },
    async session(sessionData: any) {
      sessionData.session = sessionData.token;
      return sessionData.session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
