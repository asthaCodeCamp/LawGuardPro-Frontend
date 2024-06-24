import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { logIn } from "@/services/authentication/authentication.service";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials: any) => {
        console.log(credentials, "cred from our sign in");

        try {
          const loginResult = await logIn({
            userName: credentials?.userName,
            password: credentials?.password,
          });
          console.log(loginResult?.data, "token from authorize");
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
      // console.log(jwtData.token, "token from jwt");
      if (jwtData.user) {
        jwtData.token.user = jwtData.user?.user;
        jwtData.token.accessToken = jwtData.user?.token;
      }
      return jwtData.token;
    },
    async session(sessionData: any) {
      // console.log(sessionData.session, "session from session");
      console.log(sessionData, "token from session");
      sessionData.session = sessionData.token;

      return sessionData.session;
    },
  },
});
