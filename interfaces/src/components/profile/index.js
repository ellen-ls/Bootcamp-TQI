import React from "react";
import * as S from "./styled";
import useGithub from "../hooks/github-hooks";

function Profile(){

  const {githubState} = useGithub();

    return(
        <S.Wrapper>
        <S.WrapperImg src={githubState.user.avatar} alt='Avatar of user'/>
        <S.WrapperInfoUser>
        <div>
         <h1>{githubState.user.name}</h1>
        <S.WrapperuserName>
        <h3>Username:</h3>
        <a href={githubState.user.html_url} target="_blank" rel="noreferrer">{githubState.user.login}</a>
        </S.WrapperuserName>
        <S.WrapperuserName>
        <h3>Company:</h3>
        <span>{githubState.user.company}</span>
        </S.WrapperuserName>
        <S.WrapperuserName>
        <h3>Location:</h3>
        <span>{githubState.user.location}</span>
        </S.WrapperuserName>
        <S.WrapperuserName>
        <h3>Blog:</h3>
        <a href={githubState.user.blog} target="_blank" rel="noreferrer">{githubState.user.blog}</a>
        </S.WrapperuserName>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gistis</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
        </S.WrapperInfoUser>
        </S.Wrapper>
    )


}

export default Profile;