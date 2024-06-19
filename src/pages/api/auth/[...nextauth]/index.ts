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
      name: "credentials",
      credentials: {
        userName: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        console.log(credentials, "cred from our sign in");
        let user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        let token = "";
        await logIn({
          userName: credentials?.userName,
          password: credentials?.password,
        }).then((data) => {
          console.log("at the handle login", data.data.user);
          user = data?.data?.user;
          token = data?.data?.token;
        });
        console.log(token, "token from authorize");

        if (user && token) {
          return {
            ...user,
            accessToken: token,
          } as User;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log(token?.accessToken, "token from jwt");
      console.log(user, "user from jwt");
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      console.log(session, "session from session");
      console.log(token, "token from session");
      if (token) {
        session.accessToken = token.accessToken;
      }
      console.log(session, "session from session after accesstoken");
      return session;
    },
  },
});
