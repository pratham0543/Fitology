import './homeblogs.css'
import BlogItem from './BlogItems.jsx';
function HomeBlog() {
    return (
        <>

            <div className="home-blog-parent-container">

                <h2 className="home-blog-heading">Inspirations</h2>
                <p className="home-blog-subheading1">Get nutritionist-approved recipes and motivational workout tips from Fitology experts.</p>
                <p className="home-blog-subheading2">We give you the right features to hit your goals.</p>
                <div className="home-blog-container">

                    <BlogItem classname="home-blog-item1" path='/nutrition' imageurl={require('./nutrition.png')} blogheadingcontent="Healthy Breakfast Recipes in 15 Minutes">
                    </BlogItem>
                    <BlogItem classname="home-blog-item2"path='/exercises' imageurl={require('./yoga.png')} blogheadingcontent="Health Benefits Of Yoga">
                    </BlogItem>

                    <BlogItem classname="home-blog-item3"path='/contactUs' imageurl={require('./fitness.png')} blogheadingcontent="The Problem With Cheat Days">
                    </BlogItem>

                </div>
            </div>
        </>
    )
}
export default HomeBlog;