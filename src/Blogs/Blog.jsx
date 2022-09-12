import './Blog.css';
import BlogItem from './BlogItems.jsx';
function Blog(){
    return(
            <div className="main-container">
                <h2 className="blog-heading">BLOGS</h2>
                <h4 className="blog-subheading1">Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts.</h4>
                <h4 className="blog-subheading2">We give you the right features to hit your goals.</h4>
                <div className="blog-container">

                <BlogItem classname="blog-item1" imageurl={require('./nutrition.png')} blogheadingcontent="Healthy Breakfast Recipes in 15 Minutes">
                </BlogItem>

                <BlogItem classname="blog-item2" imageurl={require('./yoga.png')} blogheadingcontent="Health Benefits Of Yoga">
                </BlogItem>

                <BlogItem classname="blog-item3" imageurl={require('./fitness.png')} blogheadingcontent="The Problem With Cheat Days">
                </BlogItem>

                </div>
            </div>
            
    )
}
export default Blog;