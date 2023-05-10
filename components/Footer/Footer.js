import "./Footer.css";

const template = () => `
<p>Andrea de Antonio <sup>©</sup> - 2023</p>
`;

export const printTemplate = () => {
    document.querySelector("Footer").innerHTML = template();
   
};