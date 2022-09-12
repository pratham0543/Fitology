function BlogItem(props){
    return(
        <div className="blog-items" onClick={props.click}>
                <div className="blog-item-container1"><img className={props.classname} src={props.imageurl}/></div>
                <h4 className="blog-card-heading1">{props.blogheadingcontent}</h4><br />
                <span className="blog-span">Fitology</span>

        </div>
    )
}
export default BlogItem;