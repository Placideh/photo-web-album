import { useState,useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Photos from './components/Photos'
function App() {
  const[photos,setPhotos]=useState([])
  const getAlbumId=(id)=>{
  return id
  }
  useEffect(()=>{
    const getAlbum=async ()=>{
      const albumPhoto=await fetchAlbum()
      setPhotos(albumPhoto)
    }
    getAlbum()
  },[])
  //fetchTheAlbum
  const fetchAlbum=async ()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    const data=await res.json()
    return data
  }
  return (
    <div>
      <Header/>
      <Form onSearch={getAlbumId}/>
      {photos.map((photo)=>(<span key={photo.id}><img src={photo.thumbnailUrl} /></span>))}
    </div>
  );
}

export default App;
