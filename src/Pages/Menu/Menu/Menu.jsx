import { Helmet } from "react-helmet";
import MenuCover from "../../Shared/Cover/MenuCover";
import menuImg from "../../../assets/menu/banner3.jpg"
import desertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import SectionTitle from "../../../Components/SectionTitle";
import LoadMenu from "../../Shared/MenuItems/LoadMenu";
import Button from "../../../Components/Button";



const Menu = () => {
    return (
        <div>
            {/* daynamic title */}
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            {/* cover page with title and description */}
            <MenuCover img={menuImg} title="our menu" description="Would you like to try a dish?"></MenuCover>
            {/* showing some menu */}
            <SectionTitle subHeading="Don't miss"
                heading="today's offer"
            ></SectionTitle>
            <LoadMenu></LoadMenu>
            <div className="text-center mt-6 mb-10">
                <Button buttonName={"Order Your Favourite Food"}></Button>
            </div>

            {/* dessert section */}

            {/* cover page with title and description */}
            <MenuCover img={desertImg} title="desserts" description="Would you like to try a dish?"></MenuCover>
            {/* showing some menu */}
            <LoadMenu></LoadMenu>
            <div className="text-center mt-6 mb-10">
                <Button buttonName={"Order Your Favourite Food"}></Button>
            </div>

            {/* pizza section */}

            {/* cover page with title and description */}
            <MenuCover img={pizzaImg} title="pizza" description="Would you like to try a dish?"></MenuCover>
            {/* showing some menu */}
            <LoadMenu></LoadMenu>
            <div className="text-center mt-6 mb-10">
                <Button buttonName={"Order Your Favourite Food"}></Button>
            </div>

            {/* salad section */}

            {/* cover page with title and description */}
            <MenuCover img={saladImg} title="salad" description="Would you like to try a dish?"></MenuCover>
            {/* showing some menu */}
            <LoadMenu></LoadMenu>
            <div className="text-center mt-6 mb-10">
                <Button buttonName={"Order Your Favourite Food"}></Button>
            </div>
            {/* salad section */}

            {/* cover page with title and description */}
            <MenuCover img={soupImg} title="soup" description="Would you like to try a dish?"></MenuCover>
            {/* showing some menu */}
            <LoadMenu></LoadMenu>
            <div className="text-center mt-6 mb-10">
                <Button buttonName={"Order Your Favourite Food"}></Button>
            </div>

        </div>
    );
};

export default Menu;