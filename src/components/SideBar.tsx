import React from 'react'
import styled from 'styled-components'
import sidebar1 from "../assets/sidebar1.svg"
import sidebar2 from "../assets/sidebar2.svg"
import sidebar3 from "../assets/sidebar3.svg"
import sidebar4 from "../assets/sidebar4.svg"
const SideBarStyle = styled.div`
width: 48px;
min-height: 220px;
top: 310px;
left: 16px;
padding: 4px;
position: fixed;
border-radius: 100px;
display:flex;
flex-direction: column;
box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1);
gap: 4px;
`
export const  SideBar = () => {
  return (
    <SideBarStyle>
      <img src={sidebar1} alt='side1' width={50} height={50} style={{cursor: 'pointer'}}/>
      <img src={sidebar2} alt= 'side2' width={40} height={40} style={{cursor: 'pointer'}}/>
      <img src={sidebar3} alt='side3' width={40} height={40} style={{cursor: 'pointer'}}/>
      <img src={sidebar4} alt='side4' width={40} height={40} style={{cursor: 'pointer'}}/>
    </SideBarStyle>
  )
}
