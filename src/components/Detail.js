import styled from 'styled-components';

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </Background>

            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDFF0FDF457E092EE53149CE7DB5BD14CB97E27B92D2D087E7C687B4E3073DE2/scale?width=1440&aspectRatio=1.78" alt="" />
            </ImageTitle>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </Trailer>
                </Controls>
            </ContentMeta>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding; 0 calc(3.5vw+5px);
`;

const Background = styled.div`
    left: 0px;
    right: 0px;
    top: 0px;
    position: fixed;
    opacity: 0.8;
    z-index: -1;

    img {
        height: 100vh;
        width: 100vw;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vh;
    min-height: 170px;
    margin-top: 10%;       // modified
    padding-bottom: 24px;
    width: 100%;

    @media (max-width: 768px) {     // modified
        margin-top: 0;
    }

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
        margin-left: 5%;        // modified
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
    margin-left: 5%;        // modified
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
    font-size: 15px;
    margin: 0 22px 0 0;
    padding: 0 24px;
    height: 56px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    cursor: pointer;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0 12px;
        font-size: 12px;
        margin: 0 10px 0 0;

        img {
            width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

export default Detail;