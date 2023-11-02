import React from 'react'
import styled from 'styled-components'
import { SmallButton } from './Buttons'
import {useQuery} from 'react-query'
import { fetchTransaction, fetchWallet } from '../utils/api'


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { Ledger } from './Ledger'
import { Transaction } from './Transaction'

const DashboardStyle = styled.div`
  width: 90vw;
  z-index: -1;
  max-width: 1260px;
  padding: 50px 30px;
  min-height: 100vh;
  padding-bottom: 0;
  margin: 0 auto;
`

const BalanceStyle = styled.div`
  max-width: 450px;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 14px;
  }
  h3 {
    font-size: 36px;
  }
`

const SectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
`

interface DashboardProps {
  openModal?: () => void
}
export const Dashboard: React.FC<DashboardProps> = ({ openModal }) => {
  const {  data: wallet, isLoading: walletLoading, isError:walletError } = useQuery('wallet', fetchWallet);
  const {  data: transactions, isLoading, isError } : any = useQuery('transaction', fetchTransaction);

  if (walletLoading) {
    return <div>Loading...</div>;
  }

  if (walletError) {
    return <div>Error fetching data</div>;
  }


  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }
  const data = transactions.map((item: any)=> ({y: item.amount, x: item.date}))
  console.log(data)
  return (
    <DashboardStyle>
      <SectionStyle>
        <div>
          <BalanceStyle>
            <div>
              <p>Available balance</p>
              <h3>USD {wallet.balance}</h3>
            </div>
            <div style={{ alignSelf: 'flex-end' }}>
              <SmallButton text='withdraw' />
            </div>
          </BalanceStyle>
          <LineChart width={600} height={300} data={data}>
            <XAxis dataKey='x' type='category' />
            <Legend />
            <Line type='monotone' dataKey='y' stroke='#FF5403' />
          </LineChart>
        </div>
        <Ledger data={wallet}/>
      </SectionStyle>

      <Transaction transactions={transactions} openModal={openModal} />
    </DashboardStyle>
  )
}
