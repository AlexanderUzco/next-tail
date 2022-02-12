const CardContent: React.FC = ({children}) => {
    return(
        <div className="
            mx-2
            grid
            grid-cols-1
            gap-5
            justify-items-center

            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
        ">
            {children}
        </div>
    )
};

export default CardContent;