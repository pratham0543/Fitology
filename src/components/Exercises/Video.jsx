import { Component } from "react"
class Video extends Component {
        constructor(props)
        {
            super(props)  
            this.state={

            }  
        }


    render() {
       console.log(this.props.vname);
        let src=`https://www.youtube.com/embed/${this.props.vid}`
        return (
            <div className="container-fluid text-center mt-4 mb-4">
                <h1 className="video-heading mb-3">Exercise Tutorial</h1>
           <div className="ratio ratio-16x9">    
           <iframe src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
           </div>
           <h3 className="video-heading mt-3 text-start">{this.props.vname}</h3>
        </div>
        )
    }
}

export default Video