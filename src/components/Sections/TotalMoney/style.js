import styled from "styled-components";

export const StyledTotalMoney = styled.section`
    border: 1px solid var(--Color-Grey-3);
    border-radius: 4px;
    padding: 1.25rem 1.875rem;
    margin-top: 30px;
    
    

    display: flex;
    flex-direction: column;
    justify-content: center;


    .container{
        display: flex;
        flex-direction: column;
        gap: .625rem;
    }

    .total__value{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
    }

`