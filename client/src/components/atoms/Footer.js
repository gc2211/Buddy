import styled from 'styled-components';

const Footer = () => {
    return (
    <FooterBar>
        <p className="footer-text">Created by Gauthier CHATEL</p>
    </FooterBar>
    );
};
export default Footer;

export const FooterBar = styled.footer`
	padding: 20px;
	background-color: blue;  
    color:white;
`;

