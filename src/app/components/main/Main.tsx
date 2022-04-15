import React from 'react'
import './main.scss'
import Settings from '../../atoms/Settings'
import PwdLength from '../../atoms/PwdLength'
import AdditionalLength from '../../atoms/AdditionalLength'
import Password from '../../atoms/Password'

const Main: React.FC = () => {
  return (
    <header className="main">
      <Password />
      <PwdLength />
      <Settings />
      <AdditionalLength />
    </header>
  )
}

export default Main
