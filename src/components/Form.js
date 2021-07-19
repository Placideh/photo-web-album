 import {useState} from 'react'
 const Form = ({onSearch}) => {
   const [albumId,setAlbumId]=useState('')
   const onSubmit=(e)=>{
     e.preventDefault()
     if(!albumId){
       alert("Please Enter the Id!")
       return
     }
     onSearch(albumId)
     setAlbumId('')
   }
    return (
        <form className="my-form" onSubmit={onSubmit}>
            <input type="search" value={albumId} onChange={(e)=>setAlbumId(e.target.value)} className="inputText"placeholder="Enter Album Id"/>
            <button  className="btn">Get Album Photos By Id</button>
        </form>
    )
}
export default Form;
