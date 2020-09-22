import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostDetailsContainer = styled.div`
  background: #fff;
  width: 90%;
  overflow: auto;
  margin: 0 auto;
  margin-top: 15px;
  position: relative;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

export const PostContent = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 30px;
  padding-bottom: 70px;
`;

export const PostHeader = styled.div`
  padding: 10px 0;
  color: ${props => props.theme.colors.firstText};
  font-size: 18px;
  font-weight: bold;
`;

export const PostBody = styled.div``;

export const Title = styled.div`
  color: ${props => props.theme.colors.thirdText};
  padding: 15px 0;

  > b {
    color: ${props => props.theme.colors.secondText};
  }
`;

export const Body = styled.div`
  max-width: 500px;
  color: ${props => props.theme.colors.thirdText};

  > b {
    color: ${props => props.theme.colors.secondText};
  }
`;

export const Line = styled.hr`
  border: 1px solid #eee;
`;

export const BackBtn = styled(Link)`
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  background: ${props => props.theme.colors.primaryColor};
  position: relative;
  top: 35px;
  text-decoration: none;
  transition: ease-in-out .2s;

  &:active {
    background: #1E90FF;
  }
`;