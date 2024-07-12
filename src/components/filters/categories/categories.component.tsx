import React, { useState } from "react";
import { FC } from "react";
import { Form, Label, Select, LabelContainer, StyledSvg, Option } from "./categories.styles";

type CategoriesProps = {
    options: string[],
    label: string
}

const Categories: FC<CategoriesProps> = ({ options, label }) => {
    const [showCategories, setShowCategories] = useState(false)


    const toggleCategories = () => {
        setShowCategories(!showCategories)
    }
    return (
        <>
            <Form showCategories={showCategories}>
            <LabelContainer>
                <Label htmlFor="categories" onClick={toggleCategories}>
                    {label}
                    <StyledSvg showCategories={showCategories} height='1rem' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </StyledSvg>
                </Label>
            </LabelContainer>

                <Select showCategories={showCategories} multiple>
                    {options.map((option) => (
                        <Option key={option} value={option}>{option}</Option>
                    ))}
                </Select>
            </Form>
        </>
    )
}

export default Categories;

