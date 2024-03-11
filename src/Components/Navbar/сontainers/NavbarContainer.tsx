import React, { useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { sidebarData } from '../сontants';
import { sideBarRender } from '../modules/sideBarFunctions';
import Navbar from '../сomponents/navbar';
import { logout } from '../../../reducers/auth';
import { authSelector } from '../selectors';

export function NavbarContainer() {
  const dispatch = useDispatch();
  const currentUser = useSelector(authSelector);

  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);
  const upLinks = sideBarRender(sidebarData, false);
  const sideLinks = sideBarRender(sidebarData);

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Navbar
      currentUser={currentUser}
      showSideBar={showSideBar}
      onLogout={onLogout}
      sidebar={sidebar}
      upLinks={upLinks}
      sideLinks={sideLinks}
    />
  );
}
