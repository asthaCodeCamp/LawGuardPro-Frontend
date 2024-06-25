import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getSession, useSession } from 'next-auth/react';

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
  const [userData, setUserData] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    // phoneNumber: '',
  });
  const { data: session } = useSession();

  const [fetchedUserData, setFetchedUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (session && session.user) {
          console.log('Session data:', session.user);

          setUserData({
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            email: session.user.email as string,
            // phoneNumber: session.user.phoneNumber || '',
          });

          const response = await fetch(`http://54.203.205.46:5140/api/usersauth/getuserinfo?Email=${session.user.email}`, {
            headers: {
              'Authorization': `Bearer ${session.accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const user = await response.json();
          console.log(user, "sabbir");
          setFetchedUserData(user);
        } else {
          console.log('No session found');
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        toast.error('Failed to fetch user data');
      }
    };

    fetchUser();
  }, []);

  const updateUser = async (userData: User) => {
    try {
      const response = await fetch('http://54.203.205.46:5140/api/usersauth/updateuserinfo', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast.success('User Update Successful');
    } catch (error) {
      console.error('Failed to update user:', error);
      toast.error('Failed to update user');
    }
  };

  return { userData, fetchedUserData, setUserData, updateUser };
};

export default useUserData;
