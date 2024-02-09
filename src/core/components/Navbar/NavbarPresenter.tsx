'use client'

import React, { useEffect, useState } from 'react'
import Navbar, { menuType } from './Navbar'
import useLoginAdapter from '@/features/auth/adapters/login'
import { usePathname, useRouter } from 'next/navigation'


const menusState: menuType[] = [
  {
    text: 'Home',
    href: '/',
    isActive: false
  },
  {
    text: 'Product',
    href: '/products',
    isActive: false
  },
  {
    text: 'Your Cart',
    href: '#',
    isActive: false
  },
  {
    text: 'History',
    href: '#',
    isActive: false
  },
]

export default function NavbarPresenter() {

  const pathName = usePathname()
  const { token, logout } = useLoginAdapter()
  const [menus, setMenus] = useState(menusState)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    setMenus(prevMenus => {
      return prevMenus.map(menu => {
        // Example: Change path based on some condition
        if (menu.href === pathName) {
          return { ...menu, isActive: true };
        }
        // If no change is needed, return the menu as is
        return menu;
      });
    })
  }, [pathName])

  return (
    <Navbar
      isLogged={token.access ? true : false}
      isModalMobileOpen={openModal}
      logoutHandler={() => logout()}
      modalHandler={() => setOpenModal(!openModal)}
      menus={menus}
    />
  )
}
