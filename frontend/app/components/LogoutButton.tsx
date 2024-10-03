'use client';

import { useRouter } from "next/navigation";
import { resetAuthCookies } from '../lib/actions';
import MenuLink from "./navbar/MenuLink";
import React from "react";



const LogoutButton: React.FC = () => {
    console.log('logout button clicked')
    const router = useRouter();
    const submitLogout = async () => {
        resetAuthCookies();

        router.push('/')
    }
  return (
    <MenuLink
        label="Logout"
        onClick={submitLogout} 
    />
  )
}

export default LogoutButton