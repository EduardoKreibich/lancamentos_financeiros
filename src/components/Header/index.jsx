import logo from "../../assets/img/logo.png"
import { StyledContainer } from "../../styles/grid"
import { StyledHeader } from "./style"


export const Header = () => {
    return(
        <StyledHeader>
            <StyledContainer>
                <img src={logo} alt="Logo marca da NU Kenzie" />    
            </StyledContainer>
        </StyledHeader>
    )
}