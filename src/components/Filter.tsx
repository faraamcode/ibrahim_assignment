import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import close from '../assets/close.svg'
import arrow from '../assets/arrow.svg'
import { SmallButton } from './Buttons'



const FilterWrapper  = styled.div`
   width: 100vw;
   height: 100vh;
   max-width: 500px;
   max-height: 900px;
   background: white;
   margin: auto auto;
   border-radius: 15px;
   box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
   position: relative;
   padding: 50px 30px;
   p{
    font-weight: 500;
   }

`

const  DateWrapper = styled.div`
padding: 5px 5px;
margin-top: 20px;
display:flex;
justify-content: space-between;
`
const  InputWrapper = styled.div`
padding: 5px 5px;
margin-top: 20px;
display:flex;
justify-content: space-between;
input{
  padding :10px;
  border : none;
}

`

const FilterHeaderStyle = styled.div`
display: flex;
justify-content : space-between;
`
const FilterHeading = styled.p`
  margin-top: 30px;
  font-weight: 700 !important;
 font-size: 16px;
`

const getDate = ():string=>{
const date = new Date(); // Replace this with your Date object

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(date.getDate()).padStart(2, '0');

return `${year}-${month}-${day}`
} 


const MultiSelectionStyle = styled.div`
  border: 4px solid black;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  ` 
  const CheckboxWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
input:checked {
  background-color: black; 
}

input:checked {
  border: 2px solid black; 
}

`

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 0;
  bottom: 10px;
  width: 100%;
  padding: 10px;
  height: 100px;
  button{
    width: 40%;
  }
`

interface FilterProps{
   closeModal ?: ()=> void
}

export const Filter: React.FC<FilterProps> = ({closeModal})=> {
  const [startDate, setStartDate] =  useState(getDate())
  const clear1 = useRef<HTMLInputElement | null>(null)
  const clear2 = useRef<HTMLInputElement | null>(null)
  const clear3 = useRef<HTMLInputElement | null>(null)
  const clear4 = useRef<HTMLInputElement | null>(null)
  const clear5 = useRef<HTMLInputElement | null>(null)
  const clear6 = useRef<HTMLInputElement | null>(null)
  const clear7 = useRef<HTMLInputElement | null>(null)
  const clear8 = useRef<HTMLInputElement | null>(null)
  const clear9 = useRef<HTMLInputElement | null>(null)
  const [transactionStatus, setTransactionStatus] = useState([])
  const [transactionType, setTransactionType] = useState([])
   
  const [endDate, setEndDate] = useState(getDate())
  const handleChange = (e:any)=>{
     if(e.target.name == 'startDate'){
        setStartDate(e.target.value)
      }else{
       setEndDate(e.target.value)
     }
  } 

  const clearFilter = ()=>{
    if(clear1.current)  clear1.current.checked = false;
    if(clear2.current)  clear2.current.checked = false;
    if(clear3.current)  clear3.current.checked = false;
    if(clear4.current)  clear4.current.checked = false;
    if(clear5.current)  clear5.current.checked = false;
    if(clear6.current)  clear6.current.checked = false;
    if(clear7.current)  clear7.current.checked = false;
    if(clear8.current)  clear8.current.checked = false;
    if(clear9.current)  clear9.current.checked = false;

  setStartDate(getDate())
  setEndDate(getDate())
   setTransactionStatus([])
   setTransactionType([])
 }
 const handleCheckChange = (e:any)=>{
     const {id, checked, name} = e.target
 
     if(id == "transactionStatus" ){
       if(checked){
        setTransactionStatus((prev):any=>([...prev, name]))
      }else{
        setTransactionStatus((prev):any=>([...prev.filter(item => item !== name)]))
       }

     }else if(id == "transactionType"){
             if(checked){
        setTransactionType((prev):any=>([...prev, name]))
      }else{
        setTransactionType((prev):any=>([...prev.filter(item => item !== name)]))
       }
     }
   
  }

  return (
    <FilterWrapper>
      <FilterHeaderStyle>
        <h3>Filter</h3>
        <img onClick = {closeModal} src={close} style={{cursor: 'pointer'}}/>
      </FilterHeaderStyle>
      <DateWrapper>
        <p>Today</p>
        <p>Last 7 days</p>
        <p>This month</p>
        <p>Last 3 months</p>
      </DateWrapper>
      <FilterHeading>Date Range</FilterHeading>
      <InputWrapper>
        <input type='date' style={{background: 'none'}} name='startDate' value={startDate} onChange={handleChange}/>
        <input type='date' name='endDate' value={endDate} onChange={handleChange}/>
      </InputWrapper>
      <FilterHeading>Transaction Type</FilterHeading>
      <MultiSelectionStyle>
               <p>{transactionType.map(item=>item).join(", ").length < 45 ? transactionType.map(item=>item).join(", ") : `${transactionType.map(item=>item).join(", ").slice(0,45)}...`}</p>

        <img src={arrow}/>
      </MultiSelectionStyle>
        <CheckboxWrapper>
          <div>
          <input ref={clear1} onChange={handleCheckChange} type='checkbox' id='transactionType' name='Cashbacks'/>  <label>Cashbacks</label>
            
          </div>
          <div>
          <input ref={clear2} type='checkbox' onChange={handleCheckChange} id='transactionType' name='Earn & Refer'/> <label>Earn & Refer</label>

          </div>
          <div>
          <input ref={clear3} type='checkbox' onChange={handleCheckChange} id='transactionType' name='Chargebacks'/> <label>Chargebacks</label>

          </div>
          <div>
          <input ref={clear4} type='checkbox' onChange={handleCheckChange} id='transactionType' name='Withdrawal'/> <label>Withdrawal</label>

          </div>
          <div>
          <input ref={clear5} type='checkbox'  onChange={handleCheckChange} id='transactionType' name='Get Tipped'/> <label>Get Tipped</label>

          </div>
          <div>

          <input ref={clear6} type='checkbox'  onChange={handleCheckChange} id='transactionType' name='Store Transaction'/> <label>Store Transaction</label>
          </div>
        </CheckboxWrapper>
      <FilterHeading>Transaction Status</FilterHeading>
          <MultiSelectionStyle>
        <p>{transactionStatus.map(item=>item).join(", ").length < 45 ? transactionStatus.map(item=>item).join(", ") : `${transactionStatus.map(item=>item).join(", ").slice(0,45)}...`}</p>
        <img src={arrow}/>
      </MultiSelectionStyle>
        <CheckboxWrapper>
          <div>
          <input  ref={clear7} type='checkbox' onChange={handleCheckChange} id='transactionStatus' name='Successful'/> <label>Successful</label>
          </div>
          <div>
          <input ref={clear8} type='checkbox' onChange={handleCheckChange} id='transactionStatus' name='Pending'/> <label>Pending</label>

          </div>
          <div>
          <input ref={clear9} type='checkbox' onChange={handleCheckChange} id='transactionStatus' name='Failed'/> <label>Failed</label>

          </div>
        </CheckboxWrapper>

        <ButtonWrapper>
          <SmallButton onClick={clearFilter} text='Clear' color='black' background='transparent'/>
          <SmallButton  text='Apply'  background={transactionStatus.length && transactionType.length ? "" : "rgba(0,0,0,0.2)"} />
        </ButtonWrapper>
    </FilterWrapper>
  )
}




