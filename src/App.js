import {useState} from 'react'
import Header from './components/Header'
import Form from './components/Form'
function App() {
  const[photos,setPhotos]=useState([])
  const getAlbumId=(id)=>{
  return id
  }
  return (
    <div>
      <Header/>
      <Form onSearch={getAlbumId}/>
    </div>
  );
}

export default App;
