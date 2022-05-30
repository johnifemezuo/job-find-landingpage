import Link from 'next/link';
import React from 'react'
import { StyledLogo } from './style/StyledLogo';

function Logo() {
  return (
    <div className='pt-6 md:pt-0'>
      <Link href={`/`}>
        <StyledLogo>Findjob!</StyledLogo>
      </Link>
    </div>
  );
}

export default Logo