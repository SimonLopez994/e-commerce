import React from "react";
import Categories from "./categories/categories.component";
import { FilterContainer } from "./filters.styles";
import SearchBar from "./search-bar/search-bar.component";
import TagComponent from "./tags/tags.component";

let categoriesOptions = ["hats", "shirts", "boots", "jeans"];
let newProductsOptions = ["hat brown", "skiny jeans", "jean jacket"];
let tagsArray = ["Men", "Women", "Children"]
const Filters = () => {
    return (
        <FilterContainer>
            <Categories label={'Categories'} options={categoriesOptions} />
            <Categories label={'New Product'} options={newProductsOptions} />
            <SearchBar />
            <TagComponent tagsArray={tagsArray} />
        </FilterContainer>
    )
}

export default Filters;