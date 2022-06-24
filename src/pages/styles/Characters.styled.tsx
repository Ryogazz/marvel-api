import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;

  width: 100%;
  height: 100%;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  background: #f1f1f1;
  height: 450px;
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-10px);
  }
  position: relative;
`;

export const CardHeader = styled.p`
  padding: 5px;
  text-align: justify;
`;

export const Strong = styled.strong`
  padding: 5px;
  text-align: justify;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const ImageContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
`;
