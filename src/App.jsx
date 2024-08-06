import { useNavigate } from "react-router-dom";
import { Header } from "./components/header"
import { Tasks } from "./components/tasks";
import './index.css'
import store from "./utils";
import { useEffect } from "react";

function App() {

  const navigate = useNavigate();
  
  useEffect(() => {
    try{
      const token = store.get("token");

      if(!token){
        console.log("token", token);
        
        navigate('/login');
        // return <Login />;
      }
    }catch(error){
      console.log("App page login error", error);
    }
  
    
  }, []);
  

  

  return (
    <>
      <Header/>
      <Tasks/>
    </>
  );
}

export default App;
