 const Photo = ({ photo }) => {
    return (
        <div className="thumbnail">
          <img  src={photo.thumbnailUrl} alt=""/>
          <h3>{photo.title}</h3>
        </div>
    )
}
export default Photo;
