import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="https://www.kinmatech.com.ng" target='_blank' >Kinmatech &copy; 2023</a>
                </div>
                <div>
                <a href="mailto:mathewok20@gmail.com" target='_blank'>Gmail</a>
                <a href="https://www.linkedin.com/in/mathew-ani-52240a22a/" target="_blank" >LinkedIn</a>
                <a href="https://github.com/KinmatTech" target="_blank" >GitHub</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer