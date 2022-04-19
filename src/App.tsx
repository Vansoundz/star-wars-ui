import React, { useEffect, useState } from 'react';
import Appbar from './components/Appbar';
import AppRoutes from './routes/Index';

export const PageContext = React.createContext({
  page: 1,
  next: () => {},
  prev: () => {},
  set: (p: number) => {}
})

function App() {
  const [page, setPage] = useState(1)

  const nextPage = () => setPage(page + 1)
  const setPageNumber = (p: number) => setPage(p)
  const prevPage = () => {
    if(page > 1){
      setPage(page - 1)
    }
  }

  useEffect(() => {
    window.scrollTo(0,0)
  }, [page])

  return (
    <PageContext.Provider value={{page, next: nextPage, prev: prevPage, set: setPageNumber}}>
      <Appbar />
      <AppRoutes />
      <div className="footer">

      </div>
    </PageContext.Provider>
  )
}

export default App
