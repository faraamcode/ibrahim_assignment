import React , {useContext} from 'react'
import styled from 'styled-components'
import download from '../assets/download.svg'
import UserContext from '../utils/context'
import arrow from '../assets/arrow.svg'
import { SingleTransaction } from './SingleTransaction'

interface TransactHeaderProps{
  total : number
  openModal ?: ()=> void
}
const SectionTransactionStyle = styled.div`
  margin-top: 50px;

`
const TransactHeaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button{
    border: none;
    background: transparent;
    display: flex;
    gap: 5px;
    font-size: 16px;
    font-weight: 600px;
  }
  `
  const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
`

const TransactionsStyle = styled.div`
width:100%;
margin-top: 60px;


`

interface TransactionProps{
  openModal ?: ()=> void
  transactions?: any;
}
export const Transaction: React.FC<TransactionProps> = ({openModal, transactions})=> {

  return (
    <SectionTransactionStyle>
      <TransactHeader total={transactions.length} openModal = {openModal}/>
      <TransactionsStyle>
        {
          transactions.map((item: any)=>{
            const {date, amount, payment_reference, status, type, metadata } = item
            return (
              <SingleTransaction date={date} title={metadata?.type ? metadata?.type : type} description={metadata?.name ? metadata?.name:  status} deposit={type} amount={`USD ${amount}`} key={payment_reference} />

            )
          })
        }
      </TransactionsStyle>
      
    </SectionTransactionStyle>
  )
}

export const TransactHeader:React.FC<TransactHeaderProps> = ({total})=>{
const data = useContext(UserContext)
  return (
    <TransactHeaderStyle>
      <div>
        <h3>
          {total} Transactions
        </h3>
        <p>your transaction for the last 7 days</p>
      </div>
      <ButtonWrapper>
        <button onClick={()=> data?.openModal()}>
          Filter
          <img src={arrow} alt='open'/>
        </button>
        <button >
          Export list
          <img src={download} alt='close'/>
        </button>
      </ButtonWrapper>

    </TransactHeaderStyle>
  )
}


