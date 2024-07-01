import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefItems from "../ChefItems/ChefItems";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Contact></Contact>
            <ChefItems></ChefItems>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;