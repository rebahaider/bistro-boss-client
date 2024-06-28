const MenuCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    console.log(image);
    return (
        <div className="flex space-x-4">
            <img className="w-[100px] h-[100px] rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
            <div>
                <h3 className="text-xl uppercase">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuCard;