import styled from "styled-components"

const InputPersonalizado = styled.input`
    border: 1px solid #FFF;
    background: transparent;
    padding: 20px 40px;
    border-radius: 50px;
    width: 300px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #FFF;
        font-size: 14px;
    }
`

export default function Input({type, placeholder, onChange}){
    return(
        <InputPersonalizado 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange} 
        />
    )
}