import React, { useState } from "react";
import useGithub from "../hooks/github-hooks";
import * as S from "./styled"

function Header(){
    
    const {getUser}= useGithub();
    const [usernameForSearch, setUserNameForSearch] = useState()

    const submitGetUSer = () =>{
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    };
    
    return(
        <header>
        <S.Wrapper>
            <input placeholder="Digite um username para pesquisa" type="text" onChange={(event)=>setUserNameForSearch(event.target.value)}/>
            <button type="submit" onClick={submitGetUSer}>buscar</button>
        </S.Wrapper>
        </header>
    )
}


export default Header;