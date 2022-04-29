import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";

function App() {

  const [word, setWord] = useState()
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")
  
  useEffect(()=>{

    const dictionaryAPi = async () => {
      try {
        const data = await axios.get(
          "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
        );
        setMeanings(data.data)
        console.log(data)
      } 
     
      catch (error) {console.log(error)}
    };
  
    dictionaryAPi()
  },[])
  return <div className="App" style={{
    height: "100vh",
    backgroundColor:"black",
    color: "white",

  }}>
  <Container  maxWidth="md"
  style={{
    display: "flex",
    flexDirection:"coloumn",
    height:"100vh",
    justifyContent:"center",
  }}
  >
<Header category={category} setCategory={setCategory} word={word } setWord={setWord}/>
  </Container>


  </div>;
}

export default App;
