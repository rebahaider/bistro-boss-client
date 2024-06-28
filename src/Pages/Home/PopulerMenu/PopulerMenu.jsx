import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCard from "../../Shared/MenuItems/MenuCard";

const PopulerMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const populerItems = data.filter(item => item.category === 'popular');
                setMenu(populerItems)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"from our menu"}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-4">
                {
                    menu.map(item =>
                        <MenuCard
                            key={item._id}
                            item={item}
                        >

                        </MenuCard>)
                }
            </div>
        </section>
    );
};

export default PopulerMenu;