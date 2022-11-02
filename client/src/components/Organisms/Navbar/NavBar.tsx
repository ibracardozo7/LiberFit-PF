import React from 'react'
import NavForm from '../../Molecules/NavForm/NavForm'

interface Props {
  dashboard : boolean
}


function NavBar({dashboard}:Props) {
  return (
    <header>
        <div className='w-custom_3 h-16 border-b border-redGray'>
          <NavForm dashboard={dashboard} />
        </div>
    </header>
  )
}

export default NavBar