import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import UserContext from './utils/context'
import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Dashboard } from './components/Dashboard'
import { Modal } from './components/modal'

function App () {
  const queryClient = new QueryClient()
  const [modal, setModal] = useState(false)
  const openModal = () => {
     console.log("HIIII")
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
   const contextValue = {
    modal,
    openModal,
    closeModal
  }; 

  return (
    <UserContext.Provider value={contextValue}>

    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header />
        <SideBar />
        <Dashboard openModal={openModal} />
        {modal && <Modal closeModal={closeModal} />}
      </div>
    </QueryClientProvider>
    </UserContext.Provider>
  )
}

export default App
