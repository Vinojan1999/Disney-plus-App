import styled from 'styled-components';

const CopyRight = (props) => {
    return (
        <Footer>
            Designed By&nbsp;
            <img src="/images/red-heart-icon.svg" alt="Red Heart" />&nbsp;
            <a href='https://vinojan.gq' target="_blank">
                Vinojan Abhimanyu
            </a>
        </Footer>
    );
};

const Footer = styled.div`
    font-size: 14px;
    letter-spacing: 1px;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        height: 13px;
        width: 13px;
        margin-bottom: -1px;
    }

    a {
        &:hover {
            color: #9dc7ff;
        }
    }
`;

export default CopyRight;