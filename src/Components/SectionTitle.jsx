
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="space-y-4 my-20 mx-auto md:w-3/12 text-center">
            <p className="text-[#D99904] italic">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;