import styled from 'styled-components';
import Card from '../components/Card';

const Home = () => {
    return (
        <S.Cards>
            <Card title='Songs' subtitle='Most played' link='songs' />
            <Card title='Artists' subtitle='Most played' link='artists' />
            <Card title='10' subtitle='Last played songs' link='last' reverse={true} />
            <Card title='Analytics' link='analytics' />
        </S.Cards>
    );
};

export default Home;

const S = {};
S.Cards = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    max-width: 500px;
`;
