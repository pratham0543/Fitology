const Caritems=(props)=>
{
    const a=`carousel-item `+props.active;
    return(
<div className={a}>
            <p class="test_pic pt-3"><i className={props.smile}></i></p>
            <p className="mx-auto carousel-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quo! Deserunt laudantium illo quia magnam aspernatur ullam placeat excepturi architecto sit nobis quae praesentium quas ipsam officiis eius id, modi voluptate dolor nihil porro.
              Veritatis doloribus quis velit! Hic debitis quidem commodi quasi, aliquam veniam unde nostrum assumenda laborum ea?<br/>
              <p className="pt-2 star"><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
            
            </p>
            </div>
)
}
Caritems.defaultProps={
    active:"",

}
export default Caritems;