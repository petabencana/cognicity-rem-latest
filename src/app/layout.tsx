'use client';
//import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar';
import React, { useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
//import awsExports from "../aws-exports";

const MainComponent = () => {
 
  /*
  const [userEmail, setUserEmail] = useState('user@example.com');

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('User logged in');
  };
*/
const { authStatus } = useAuthenticator(context => [context.authStatus]);
  return (

    <>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' ? <Authenticator /> : <Navbar />}
    </>
    
    // You can include the rest of the MainComponent content here
  );
};

const inter = Inter({ subsets: ['latin'] })

/*export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}
)

{
    return (
    <html lang="en">
      <body className={inter.className}>
        <Authenticator>
      <MainComponent></MainComponent>
        {children}</Authenticator></body>
    </html>
  )
}
