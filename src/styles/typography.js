import styled, {css} from "styled-components"

export const HeadlineOneFormStyles = css`
    font-family: var(--Font-Primary);
    font-size: 16px;
    font-weight: 700;
`
export const HeadlineTwoStyles = css`
    font-family: var(--Font-Secundary);
    font-size: 16px;
    font-weight: 700;
`
export const HeadlineThreeFormStyles = css`
    font-family: var(--Font-Primary);
    font-size: 22px;
    font-weight: 700;
    `
export const ParagraphyOne = css`
    font-family: var(--Font-Primary);
    font-size: 12px;
    font-weight: 400;

    margin-top:20px;
    margin-bottom: 10px;
    `
export const ParagraphyTwo = css`
    font-family: var(--Font-Secundary);
    font-size: 12px;
    font-weight: 400;
`

export const ParagraphyThree = css`
font-family: var(--Font-Secundary);
font-size: 12px;
font-weight: 400;
color: var(--Color-Grey-2);

margin-top: 5px;
`

export const NumberOne = css`
    font-family: var(--Font-Secundary);
    font-size: 16px;
    font-weight: 700;
    color: var(--Color-Pink-1);
`

export const TittleForm = styled.label`
    ${HeadlineOneFormStyles};
`
export const TittleRelease = styled.label`
    ${HeadlineTwoStyles};
`
export const TittleReleaseBig = styled.h1`
    ${HeadlineThreeFormStyles};
`
export const ParagraphyForm = styled.p`
    ${ParagraphyOne};
`
export const ParagraphyFormTwo = styled.p`
    ${ParagraphyThree};
`
export const ParagraphyRelease = styled.p`
${ParagraphyTwo};
`
export const NumeberTotalMoney = styled.span`
    ${NumberOne};
`