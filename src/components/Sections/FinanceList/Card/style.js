import styled from "styled-components";

export const StyledCard = styled.li`
    border-left: 4px solid ${({type}) => 
    type == "entrada" ? "var(--Color-Gree)" : "var(--Color-Grey-3)"
};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    

    background-color:var(--Color-Grey-4);
    margin-bottom:.625rem;
    padding: .625rem .9375rem;
    height: 5.4375rem;

    border-radius: 4px;

    .type{
        display:flex;
        flex-direction: column;
        gap: 1.25rem
    }

    .value{
        display:flex;
        flex-direction: column;
        justify-content:center;
        gap: .3125rem
    }
`