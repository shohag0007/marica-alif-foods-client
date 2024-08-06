import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle
                subHeading="check it out"
                heading="Featured Item"
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus tenetur aut laborum voluptate dolore sapiente sit hic distinctio neque porro tempora natus assumenda nisi dolores, totam iure atque repudiandae mollitia officia dolor reiciendis omnis eligendi? Dolorum ipsum omnis quasi fugit nemo! Dolor, iste consequuntur? Ab reprehenderit voluptatem odit quasi.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;