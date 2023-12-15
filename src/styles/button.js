import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: var(--Color-Pink-1);
    color: var(--Color-White);

    font-family: var(--Font-Primary);
    font-size: 1rem;
    font-weight: 500;

    width: 100%;
    padding: 13px 20px;
    margin-top: 30px;
    border-radius: 8px;

    :hover{
        background-color: var(--Color-Pink-2);
        color: var(--Color-Grey-4);
    }
`
export const StyledButtonRemove = styled.button`
    background-color: var(--Color-Grey-3);
    color: var(--Color-Grey-1);

    width: 49px;
    height: 19px;

    border-radius: 2px;

    font-family: var(--Font-Secundary);
    font-size: .625rem;

    :hover{
        background-color: var(--Color-Grey-1);
        color: var(--Color-Grey-3);
    }

`