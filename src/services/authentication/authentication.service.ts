export async function fetchDataWithSession(url: string): Promise<any> {
  try {
    const session: any = {
      accessToken: "",
    };
    if (!session) {
      throw new Error("User session not found");
    }
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function logIn(cred: {
  userName: string;
  password: string;
}): Promise<any> {
  try {
    // Make the API request with the session as a bearer token
    const response = await fetch(
      "https://lawguardpro-api.saams.xyz/api/UsersAuth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cred),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
