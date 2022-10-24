import {Link} from 'react-router-dom'
function BlogItem(props){
    return(
        <div className="home-blog-items" >
            <Link to={props.path}>
                <div className="home-blog-item-container1"><img className={props.classname} src={props.imageurl} alt="..."/></div>
                <h4 className="home-blog-card-heading1">{props.blogheadingcontent}</h4>
                <span className="home-blog-span">Fitology</span>
                </Link>
        </div>
    )
}
export default BlogItem;