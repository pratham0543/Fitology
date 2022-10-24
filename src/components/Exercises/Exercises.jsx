import axios from "axios"
import { Component } from "react"
import './exercises.css'
import Nvideos from "./Nvideos"
import { Link } from "react-router-dom"

class Exercises extends Component {
    constructor() {
        super()
        this.state = {
            videos: null,
            showLoader: false,
            vname:null
        }

    }
    onFetchVideos = () => {
        this.setState({ showLoader: true })
        let name=document.querySelector(".exercises-inp").value
        let val = document.querySelector(".exercises-inp").value + " exercise";
        
        let url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCKMP2L7dpNlXVHWJ42idrxR-DvFWfmpDE&part=snippet&q=${val} curls&maxResults=50`
        axios.get(url)
            .then((response) => {
                this.setState({ videos: response.data.items, showLoader: false, vname:name })
            })
            .catch((error) => {
                console.log(error);
            })
    }




    render() {

        let video = <p></p>
        if (this.state.showLoader)
            video = (<div className="text-center">
                <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>)
        if (this.state.videos !== null && this.state.showLoader === false) {
            video=(
                this.state.videos.map((vid)=>
                <Link className="nav-link"  to="/video" onClick={()=>this.props.clicked([vid.id.videoId,this.state.vname])}><Nvideos url={vid.snippet.thumbnails.high.url} desc={vid.snippet.description} title={vid.snippet.title} key={vid.id.videoId}/>
               </Link>
                )
            )
        }
        return (
            <div className="container-fluid exercises mt-5 animate__animated animate__fadeInUp">
                <h1 className="exerc-head">Search Exercises</h1>
                <p>Learn how to perform exercises using correct technique. Search different exercises based on name of any muscle group. Our database has a wide variety of exercises wirth written as well as video demonstration</p>
                <div class="input-group">
                    <input type="text" className="form-control exercises-inp" placeholder="Search Exercises" aria-label="Username" aria-describedby="basic-addon1" required />
                    <span className="input-group-text" id="basic-addon1" onClick={this.onFetchVideos}><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <div className="videos-links mt-3 mb-3">
                    
                    {video}
                </div>
               
            </div>

        )
    }
}

export default Exercises