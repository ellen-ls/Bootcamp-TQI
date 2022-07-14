import React, {createContext, useCallback, useState} from "react";
import api from "../../service/api";


export const GitHubContext = createContext({
    loading:false,
    user:{},
    repositories:[],
    starred:[],
})

function GitHubProviders({children}){
    const [githubState,setGithub]= useState({
        loading:false,
        user:{
         id:undefined,
         avatar:undefined,
         login:undefined,
         name:undefined,
         html_url:undefined,
         blog:undefined,
         company:undefined,
         location:undefined,
         followers:0,
         following:0,
         public_gists:0,
         public_repos:0,
        },
        repositories:[],
        starred:[],
        
    });

    const getUser= (username) =>{
        setGithub((prevState) =>({
            ...prevState,
            loading: !prevState.loading,
        }))
        
        api.get(`users/${username}`)
        .then(({data})=>{
            setGithub((prevState)=>({
                ...prevState,
                
                user:{
                    id:data.id,
                    avatar:data.avatar_url,
                    login:data.login,
                    name:data.name,
                    html_url:data.html_url,
                    blog:data.blog,
                    company:data.company,
                    location:data.location,
                    followers:data.followers,
                    following:data.following,
                    public_gists:data.public_gists,
                    public_repos:data.public_repos,
                },
            }))
        }).finally(()=>{
            setGithub((prevState)=>({
                ...prevState,
                loading: !prevState.loading,
            }));
        })
    }

    const getUserRepos= (username) =>{
        setGithub((prevState)=>({
            ...prevState,
            loading: !prevState.loading,
        }))
        
        api.get(`users/${username}/repos`)
        .then(({data})=>{

            setGithub((prevState)=>({
                ...prevState,
                repositories:data,
                
    }));
        })
    }

    const getUserStarred=(username) =>{
        setGithub((prevState)=>({
            ...prevState,
            loading: !prevState.loading,
        }))
        
        api.get(`users/${username}/starred`)
        .then(({data})=>{

            setGithub((prevState)=>({
                ...prevState,
                starred:data,
                
    }));
        })
    }
    const contextValue = {
        githubState,
        getUser:useCallback((username)=> getUser(username),[]),
        getUserRepos:useCallback((username)=> getUserRepos(username),[]),
        getUserStarred:useCallback((username)=> getUserStarred(username),[])
    }


    return(
        <GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>
    )
    
    }


export default GitHubProviders;