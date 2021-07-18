import { useState,useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Photos from './components/Photos'
function App() {
  const[photos,setPhotos]=useState([])
  const [id,setId]=useState(0)
  //getAlbumId from the Form
  const getAlbumId=(id)=>{
    setId(id)
  }
  useEffect(()=>{
    const getAlbum=async ()=>{
      const albumPhoto=await fetchAlbum()
      setPhotos(albumPhoto)
    }
    getAlbum()
  },[id])
  //fetchTheAlbumPhotos
  const fetchAlbum=async ()=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    const data=await res.json()
    return data
  }
  return (
    <div>
      <Header/>
      <Form onSearch={getAlbumId}/>
      <Photos photos={photos}/>

    </div>
  );
}

export default App;
