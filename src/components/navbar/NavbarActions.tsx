import React from 'react';
import NotifButton from '../widgets/NotifButton';
import CoinButton from '../widgets/CoinButton';
import ProfileButton from '../widgets/ProfileButton';

export default function NavbarActions() {
  return (
    <div className=' flex items-center gap-x-2'>
      <NotifButton />
      <CoinButton />
      <ProfileButton />
    </div>
  );
}
