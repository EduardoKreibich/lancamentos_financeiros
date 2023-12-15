import { useState } from "react"
import { Header } from "./components/Header"
import { FinanceList } from "./components/Sections/FinanceList/index"
import { Form } from "./components/Sections/Form/index"
import { TotalMoney } from "./components/Sections/TotalMoney"
import { Reset } from "./styles/reset"
import { GlobalStyle } from "./styles/global"
import { StyledContainer } from "./styles/grid"
import { StyledApp } from "./styles/pages/app"


const App = () => {

  const [financeList, setFinanceList] = useState([])

  
  return(
    <div className="App">
      <Reset />
      <GlobalStyle />
      <Header />
      <main>
        
        <StyledContainer>
          <StyledApp>
            <div className="styledContainer">
              <Form setFinanceList={setFinanceList} />
              {financeList.length > 0 ? (
                <TotalMoney financeList={financeList}/>
              ) : null}
            </div>
            <FinanceList financeList={financeList} setFinanceList={setFinanceList} />
            </StyledApp>         
        </StyledContainer>
      </main>
    </div>
  )
}

export default App

