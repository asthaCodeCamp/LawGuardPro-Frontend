import NextAuth from "next-auth";
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
      credentials: {},
      async authorize(credentials: any, req) {
        // Add logic here to look up the user from the credentials supplied
        // console.log(credentials, "cred from our sign in");
        let user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        let token = "";
        await logIn({
          userName: credentials?.userName,
          password: credentials?.password,
        }).then((data) => {
          // console.log("at the handle login", data.data.user);
          user = data.data.user;
          token = data.data.token;
        });
        console.log(token, "token from authorize");
        // apnara be theke nicher data paben
        // {
        //   "data": {
        //     "user": {
        //       "firstName": "mr",
        //       "lastName": "ashik",
        //       "email": "b@b.com"
        //     },
        //     "role": "user",
        //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImQ1ZDlkMjFkLTE2YjEtNDAwNi1hZTlmLTMxNjkxNjJhNjJiNSIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJiQGIuY29tIiwibmJmIjoxNzE4Mjc4MDE1LCJleHAiOjE3MTg4ODI4MTUsImlhdCI6MTcxODI3ODAxNX0.knP1MPq2XL1LEOZeEsvW4RyttMhmKVCZjeeD8Kcexj8"
        //   },
        //   "statusCode": 200,
        //   "errors": []
        // }
        if (user && token) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            ...user,
            accessToken: token,
          };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log(token.accessToken, "token from jwt");
      console.log(user, "user from) jwt");
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
