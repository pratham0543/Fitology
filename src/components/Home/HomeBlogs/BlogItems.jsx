function BlogItem(props){
    return(
        <div className="home-blog-items" onClick={props.click}>
                <div className="home-blog-item-container1"><img className={props.classname} src={props.imageurl}/></div>
                <h4 className="home-blog-card-heading1">{props.blogheadingcontent}</h4><br />
                <span className="home-blog-span">Fitology</span>

        </div>
    )
}
export default BlogItem;