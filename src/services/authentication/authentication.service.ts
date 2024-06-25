import { access } from "fs";
import { useSession } from "next-auth/react";

export async function fetchDataWithSession(url: string): Promise<any> {
  try {
    // Get the session using NextAuth.js getSession function

    const session: any = {
      accessToken: "",
    };

    // Check if session exists
    if (!session) {
      throw new Error("User session not found");
    }

    // Make the API request with the session as a bearer token
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });

    // Parse the response as JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function logIn(cred: {
  userName: string;
  password: string;
}): Promise<any> {
  try {
    // Get the session using NextAuth.js getSession function
    // console.log("login here", cred);

    // const session = useSession();
    // const { data: session, status } = useSession();

    // console.log("Status == ", status);
    // const session: any = {
    //   accessToken: "",
    // };

    // Check if session exists
    // console.log("login here", cred);

    // if (!session) {
    //   throw new Error("User session not found");
    // }

    // Make the API request with the session as a bearer token
    const response = await fetch(
      "http://54.203.205.46:5140/api/UsersAuth/login",
      {
        method: "POST",
        headers: {
          // Authorization: `Bearer ${session.data?.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cred),
      }
    );

    // Parse the response as JSON
    const data = await response.json();
    console.log(data, "token");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
}
