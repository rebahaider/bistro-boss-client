import Button from "../../../Components/Button";
import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import '../Featured/featured.css';

const Featured = () => {
    return (
        <section className="background-img bg-fixed pt-2">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"from our menu"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-36 py-20 gap-x-10 ">
                <div>
                    <img className="w-[648px]" src={featuredImg} alt="" />
                </div>
                <div className="text-white">
                    <p>March 17, 2023</p>
                    <p className="uppercase">where can i get this item?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste earum saepe commodi facilis illo error eligendi facere minus vel perspiciatis!</p>
                    <Button buttonName="Read More"></Button>
                </div>
            </div>
        </section>
    );
};

export default Featured;