import React from 'react'
import styled from 'styled-components'
import { Filter } from './Filter'

const ModalWrapper = styled.div`
background: rgba(0, 0, 0, 0.7);
width: 100vw;
height: 100vh;
position: fixed;
top:0;
left: 0;
z-index: 2;
display: flex;
`
interface ModalProps{
   closeModal ?: ()=> void
}

export const Modal: React.FC<ModalProps> =  ({closeModal})=> {
  return (
    <ModalWrapper>
      <Filter closeModal={closeModal}/>
    </ModalWrapper>
  )
}
