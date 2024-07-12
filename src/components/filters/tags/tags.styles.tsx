import styled from "styled-components";

export const TagsContainer = styled.div`
display:flex;
justify-content:space-between;
max-height:2rem;
width:25%;

@media(max-width:1240px) {
margin:0 auto;
width:45%;
}
@media(max-width:740px) {
display:none
}

`

export const Tag = styled.div`
background-color:white;
padding: 1.2rem 1.2rem;
box-shadow:1px 1px 3px rgba(0,0,0,0.2);
display:flex;
align-items:center;
border-radius:20px;
cursor:pointer;
@media(max-width: 740px) {
padding: 1rem 1rem;
}
`