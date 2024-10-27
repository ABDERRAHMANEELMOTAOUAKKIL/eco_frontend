import React from "react"
import Hero from "./Hero";
import Partners from "./Partners";
import CategoriesGrid from "./categories/CategoryList";
import Additional from './Additional';
import Newsletter from "./Newsletter";

const Home = ()=>{
    return (
    <div>
    <Hero />
    <Partners/>
    <CategoriesGrid/>
    <Additional />
    <Newsletter/>

    
    </div>
)
     
}
export default Home;
