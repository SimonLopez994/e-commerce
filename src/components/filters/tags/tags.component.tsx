import React, { useState } from "react";
import { FC } from "react";
import { TagsContainer, Tag } from "./tags.styles";

type TagsProps = {
    tagsArray: string[]
}

const TagComponent: FC<TagsProps> = ({ tagsArray }) => {

    return (
        <>
            <TagsContainer>
                {tagsArray.map((tag) => (
                    <Tag>{tag}</Tag>
                ))}
            </TagsContainer>
        </>
    )
}

export default TagComponent;

