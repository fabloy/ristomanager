const VideoComponent = (video)=>{
    return (
      <video  id="myVideo" loop autoPlay muted >
       <source src={video} type="video/mp4"/>
      </video>
    )
}

export default VideoComponent