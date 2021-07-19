import { useState,useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Photos from './components/Photos'
function App() {
  const[photos,setPhotos]=useState([])
  const[id,setId]=useState(0)
  //getAlbumId from the Form
  const getAlbumId=(id)=>{
    setId(id)
  }

//fetchTheAlbumPhotos
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then(res=>res.json())
    .then(data=>{
        setPhotos(data)
    })

},[id])
  return (
    <div>
      <Header/>
      <Form onSearch={getAlbumId}/>
      <Photos photos={photos} />
    </div>
  );
}

export default App;
