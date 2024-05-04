import React from "react";
import ProductList from "./ProductList"; // Import ProductList component
import img from "../images/robo.png";
import Back from "../common/Back";

const Services = () => {
    return(<>
        <section className = "services mb" >
        <Back name = "Services" title = "Products - All Items"cover = { img } /> 
        </section> 
        <ProductList/>
        </>
    );
};

export default Services;