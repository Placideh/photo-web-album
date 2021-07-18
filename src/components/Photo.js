 const Photo = ({ photo }) => {
    return (
        <div>
            <h3>{photo.title}</h3>
            <img src={photo.thumbnailUrl}/>
        </div>
    )
}
export default Photo;
