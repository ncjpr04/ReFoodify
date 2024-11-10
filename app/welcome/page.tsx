// app/welcome/page.tsx
'use client'
import { LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

const WelcomePage = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('userName'); // Clear user's name from localStorage
      router.push('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    setUserName(storedName);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome{userName ? `, ${userName}!` : '!'}
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We&apos;re glad to have you here. Explore and make the most of our platform!
      </p>
      <button
        onClick={handleLogout}
        className="mt-6 flex items-center px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition"
      >
        <LogOut className="mr-2 h-5 w-5" />
        Log Out
      </button>
    </div>
  );
};

export default WelcomePage;
