import './App.css';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import GitHubProviders from './components/providers/github-providers';
import ResetCSS from './global/resetCSS';


function App() {
  return (
    <main>
      <GitHubProviders>

      <ResetCSS/>
        
     <Layout>
      <Profile/>
      
      <Repositories/>
            
     </Layout>
     </GitHubProviders>
     
    </main>
  );
}

export default App;
