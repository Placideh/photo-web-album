 const Photo = ({ photo }) => {
    return (
        <div className="thumbnail">
          <h3>{photo.title}</h3>
          <img  src={photo.thumbnailUrl} alt=""/>
        </div>
    )
}
export default Photo;
