import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getSession } from 'next-auth/react';

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
    phoneNumber: '',
  });

  const [fetchedUserData, setFetchedUserData] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const session = await getSession() as Session | null;
        if (session && session.user) {
          console.log('Session data:', session.user);

          setUserData({
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            email: session.user.email,
            phoneNumber: session.user.phoneNumber || '',
          });

          const response = await axios.get(`http://54.203.205.46:5140/api/usersauth/getuserinfo?Email=${session.user.email}`);
          const user = response.data;
          setFetchedUserData(user)
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
      await axios.patch('http://54.203.205.46:5140/api/usersauth/updateuserinfo', userData);
      toast.success('User Update Successful');
    } catch (error) {
      console.error('Failed to update user:', error);
      toast.error('Failed to update user');
    }
  };

  return { userData, fetchedUserData, setUserData, updateUser };
};

export default useUserData;
