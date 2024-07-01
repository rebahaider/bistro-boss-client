import { useEffect } from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";

const LoadMenu = () => {

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
    );
};

export default LoadMenu;