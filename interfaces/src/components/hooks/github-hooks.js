import { useContext } from "react";
import { GitHubContext } from "../providers/github-providers";

function useGithub(){
const {githubState, getUser,getUserRepos, getUserStarred} = useContext(GitHubContext)

return{githubState, getUser, getUserRepos,getUserStarred}
}

export default useGithub;