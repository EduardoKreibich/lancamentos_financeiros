import { Card } from "./Card"
import { TittleRelease, TittleReleaseBig } from "./../../../styles/typography"
import { StyledContainer } from "../../../styles/grid";
import { StyledTittleList } from "./../../Sections/FinanceList/style"

export const FinanceList = ({financeList, setFinanceList}) =>{

    const removeFinanceRelease = (releaseId) => {
        if(confirm("Você deseja excluir esse lançamento financeiro?")){
            setFinanceList((financeList) => financeList.filter(release => release.id !== releaseId));
        }
    }
    

   return(
    <section>
        <StyledContainer>
        <StyledTittleList>
            <TittleRelease>Resumo financeiro</TittleRelease>
        </StyledTittleList>
        <ul>
                {financeList.length > 0 ? (
                    financeList.map((release) => <Card key={release.id} release={release} removeFinanceRelease={removeFinanceRelease}/> )    
                ) : (
                <TittleReleaseBig>Você ainda não possui nenhum lançamento</TittleReleaseBig>
                )}
        </ul>
        </StyledContainer>
    </section>

   ) 
}