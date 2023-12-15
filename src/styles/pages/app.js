import styled from "styled-components";

export const StyledApp = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    .styledContainer{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        min-width: clamp(100px, 100%, 370px);

    }

    section{
        min-width: clamp(100px, 100%, 600px);

    }

    section, .styledContainer{
        flex-grow: 1;
    }
`