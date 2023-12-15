import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { StyleInput, StyleSelect } from "./../../../styles/form"
import { ParagraphyForm, ParagraphyFormTwo } from "./../../../styles/typography"
import { StyledButton } from "./../../../styles/button"
import { StyledForm } from "./style";


export const Form = ({setFinanceList}) =>{
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("")

    const createFinancialRelease = () => {
        const newRelease = {
            id: uuidv4(), 
            description,
            value, 
            type
        }
        if(newRelease.type == "saida"){
            newRelease.value = -newRelease.value
        }

        setFinanceList( (fianceList) => [...fianceList, newRelease]);
        console.log(newRelease)
    }


    const submit = (e) =>{
        e.preventDefault();
        createFinancialRelease()
        setDescription("")
        setValue("")
        setType("")
    }

    return(
        <StyledForm onSubmit={submit}>
            <ParagraphyForm htmlFor="">Descrição</ParagraphyForm>
            <StyleInput
            type="text" 
            placeholder="Digite aqui sua descrição" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required
            />
            <ParagraphyFormTwo>
                Ex: Compra de roupas
            </ParagraphyFormTwo>
            <ParagraphyForm 
                htmlFor="">Valor(R$)
            </ParagraphyForm>
            <StyleInput 
                type="number" 
                placeholder="Digite um valor" 
                value={value} 
                onChange={(e) => setValue(parseInt(e.target.value))} 
                required
            />
            <ParagraphyForm 
                htmlFor="">Tipo de valor
            </ParagraphyForm>
            <StyleSelect
            value={type} 
            onChange={(e) => setType(e.target.value)} required>
                <option value="">Selecionar valor</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Despesa</option>
            </StyleSelect>
            <StyledButton type="submit">Inserir Valor</StyledButton>
        </StyledForm>
    )
}