import React from 'react'
import styled from 'styled-components'
import redArrow from '../assets/redArrow.svg'
import greenArrow from '../assets/greenArrow.svg'
const SingleTransactionWrapper = styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 15px;
`
const ArrowWrapper = styled.div`
background: #F9E3E0;
background: #C4C4C4;


`

interface SingleTransactionProp{
    deposit?: string;
    amount: string;
    date: string;
    title: string;
    description : string;

}
export const SingleTransaction: React.FC<SingleTransactionProp> =({deposit, title, amount, date, description})=> {
  return (
    <SingleTransactionWrapper>
        <div style={{display: 'flex', gap: '10px', cursor: 'pointer'}}>
            <div style={{display: 'flex', width: '50px', height: '50px', borderRadius: '50%', background : deposit ? '#F9E3E0' : '#C4C4C4', alignItems: 'center', justifyContent :'center' }}>
               <img src={deposit != 'deposit' ? redArrow : greenArrow } style={{width: '30%', height:'30%', objectFit: 'cover'}}/>
            </div>
            <div>
                <ArrowWrapper></ArrowWrapper>
                <h4>{title}</h4>
                {description == "successful" ? <p style={{color: 'green'}}>{description}</p> :  description == "pending"  ? <p style={{color: 'red'}}>{description}</p> : <p>{description}</p>  }
            </div>
        </div>
        <div>
            <h3>{amount}</h3>
            <p>{date}</p>
        </div>
      
    </SingleTransactionWrapper>
  )
}
