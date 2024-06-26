import { useState, useEffect } from "react";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import useUserNameStore from "@/utilites/store";
import { toast } from "sonner";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

interface Session {
  user: User;
  expires: string;
}

const useUserData = () => {
  const { data: sessionData } = useSession();
  const [userData, setUserData] = useState<User>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const setName = useUserNameStore((state) => state.setName);

  const [fetchedUserData, setFetchedUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const session = (await getSession()) as Session | null;
        if (session && session.user) {
          console.log("Session data:", session.user);

          setUserData({
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            phoneNumber: session.user.phoneNumber || "",
            email: session.user.email,
          });

          const response = await axios.get(
            `https://lawguardpro-api.saams.xyz/api/usersauth/getuserinfo?Email=${session.user.email}`,
            {
              headers: {
                Authorization: `Bearer ${sessionData?.accessToken}`,
              },
            }
          );
          const user = response?.data?.data;
          console.log(user, "sabbir");
          setFetchedUserData(user);
          setName(user.firstName + " " + user.lastName);
        } else {
          console.log("No session found");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        // toast.error("Failed to fetch user data");
      }
    };

    fetchUser();
  }, [1]);

  const updateUser = async (userData: User) => {
    try {
      const res = await axios.patch(
        "https://lawguardpro-api.saams.xyz/api/usersauth/updateuserinfo",
        userData,
        {
          headers: {
            Authorization: `Bearer ${sessionData?.accessToken}`,
          },
        }
      );
      // console.log(res);
      toast.success("User Update Successful");
      return res.data.data;
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update user");
    }
  };

  return { userData, fetchedUserData, setUserData, updateUser };
};

export default useUserData;
