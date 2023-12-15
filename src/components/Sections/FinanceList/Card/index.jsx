import { TittleRelease, ParagraphyRelease } from "./../../../../styles/typography"
import { StyledButtonRemove } from "./../../../../styles/button"
import { StyledCard } from "./style"


export const Card = ({release, removeFinanceRelease}) => {
    return(
        <StyledCard type={release.type}>
            <div className="type">
                <TittleRelease>{release.description}</TittleRelease>
                <ParagraphyRelease>{release.type}</ParagraphyRelease>
                
            </div>
            <div className="value">
                <ParagraphyRelease   ParagraphyRelease>{`R$ ${Math.abs(release.value).toFixed(2)}`}</ParagraphyRelease>
                <StyledButtonRemove onClick={() => removeFinanceRelease(release.id)}>Excluir</StyledButtonRemove>
            </div>
        </StyledCard>
    )
}