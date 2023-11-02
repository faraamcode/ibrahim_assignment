import React from 'react'
import styled from 'styled-components';
import { SmallButton, NavLink } from '../components/Buttons';
import { useQuery } from 'react-query';
import logo from "../assets/logo.svg"
import home from "../assets/home.svg"
import group from "../assets/group.svg"
import menu from "../assets/menu.svg"
import analytics from "../assets/analytics.svg"
import revenue from "../assets/revenue.svg"


import notification from "../assets/notification.svg"
import bars from "../assets/bars.svg"
import message from "../assets/message.svg"
import { fetchUserData } from '../utils/api';




const HeaderStyled = styled.header`
  width: 98%;
  margin: 4px auto;
  height: 64px;
 border-radius: 100px;
 box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
 display:flex;
 align-items:center;
 justify-content: space-between;
 padding : 0 25px;
 position: sticky;
 top: 0;
 background: white;
`
const AppIconGroupStyle = styled.div`
display: flex;
height: 100%;
min-width: 180px;
gap: 5px;
`
const NavLinksStyle = styled.div`
display:flex;
height: 100%;
width: 581px;
justify-content: space-between;
align-items: center;
`
const ProfileStye = styled.div`
 width: 60px;
 height: 60px;
 border-radius: 50%;
 background: linear-gradient(138.98deg, #5C6670 2.33%, #131316 96.28%);
 color: white;
 display: flex;
 align-items:center;
 justify-content:center;
 cursor : pointer;
`
const IconStyle = styled.img`
align-self: center;
`
export const  Header = () => {
  const { data, isLoading, isError } = useQuery('userData', fetchUserData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <HeaderStyled>
        <IconStyle width={30} height={30} src={logo} />
        <NavLinksStyle>
            <NavLink text='home' Icon={<img alt='home' src={home}/>}/>
            <NavLink text='analytics' Icon={<img  alt="analytics" src={analytics}/>}/>
            <SmallButton text='revenue' Icon={<img src={revenue} alt='revenue'/>}/>
            <NavLink text='CRM' Icon={<img src={group} alt='crm'/>}/>
            <NavLink text='apps' Icon={<img src={menu} alt='apps'/>}/>
        </NavLinksStyle>
        <AppIconGroupStyle>
          <img src={notification} style={{cursor: 'pointer'}} alt='notification'/>
          <img src={message} style={{cursor: 'pointer'}} alt='message'/>
          <ProfileStye>{data.first_name[0]+data.last_name[0]}</ProfileStye>
          <img src={bars} style={{cursor: 'pointer'}} alt='bars'/>

        </AppIconGroupStyle>
    </HeaderStyled>
  )
}



