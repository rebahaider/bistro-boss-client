import SectionTitle from "../../../Components/SectionTitle";
import Button from "../../../Components/Button";
import LoadMenu from "../../Shared/MenuItems/LoadMenu";

const PopulerMenu = () => {
    
    return (
        <section>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"from our menu"}
            ></SectionTitle>
            <LoadMenu></LoadMenu>
            <div className="text-center mt-6">
                <Button buttonName={"View All Items"}></Button>
            </div>
        </section>
    );
};

export default PopulerMenu;