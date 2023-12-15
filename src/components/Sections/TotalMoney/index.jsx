import { TittleRelease, ParagraphyRelease, NumeberTotalMoney } from "./../../../styles/typography"
import { StyledTotalMoney } from "./style"

export const TotalMoney = ({financeList}) => {

let total = financeList.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)

    return(
       <StyledTotalMoney>
           <div className="container">
            <div className="total__value">
               <TittleRelease>Valor Total:</TittleRelease>
               <NumeberTotalMoney>{`R$ ${total.toFixed(2)}`}</NumeberTotalMoney>
            </div>
               <ParagraphyRelease>O valor se refere a saldo</ParagraphyRelease>
           </div>
       </StyledTotalMoney>
    )
}