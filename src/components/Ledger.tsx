import React from 'react'
import styled from 'styled-components'
import info from '../assets/info.svg'


const LedgerContainerStyle = styled.div`
  display:flex;
  flex-direction: column;
  gap: 5px;
`
const LedgerStyle = styled.div`
display:flex;
justify-content: space-between;
max-width: 250px;
margin-bottom: 20px;
 p{
    font-size: 14px;
    margin-bottom: 10px;
}
h3{
    font-size: 26px;
 }
`



interface LedgerProps{
    title: string;
    amount: string;
}
interface MainLedgerProps{
    data: any;
}
export const Ledger : React.FC<MainLedgerProps> = ({data})=> {

  return (
    <LedgerContainerStyle>
        <SingleLedger title='Ledger balance' amount={`USD ${data.ledger_balance}`}/> 
        <SingleLedger title='Total Payout' amount={`USD ${data.total_payout}`}/> 
        <SingleLedger title='Balance' amount={`USD ${data.balance}`}/> 
        <SingleLedger title='Pending Payout' amount={`USD ${data.pending_payout}`}/> 
    </LedgerContainerStyle>
  )
}

export const SingleLedger: React.FC<LedgerProps> = ({title, amount})=>{
    return(
        <LedgerStyle>
            <div>
                <p>{title}</p>
                <h3>{amount}</h3>
            </div>
            <img src={info} style={{alignSelf: 'flex-start'}}/>
        </LedgerStyle>
    )
}



