import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostsContainer = styled.div`
  background: #fff;
  width: 90%;
  padding: 30px;
  margin: 0 auto;
  margin-top: 15px;
  position: relative;
`
export const SearchPost = styled.input`
  height: 30px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0 5px;
  font-size: 17px;
  outline: none;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  overflow-x: auto;
  border: 1px solid #eee;
  border-radius: 5px;

  th {
    color: ${props => props.theme.colors.firstText};
  }

  td, th {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #eee;
  }

  .title {
    width: 88%;
    color: ${props => props.theme.colors.secondText};
  }

  .buttons {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;

    @media (max-width: 425px) {
      flex-wrap: wrap
    }
  }
`;

export const BtnViewPost = styled(Link)`
  padding: 4px 20px;
  background: ${props => props.theme.colors.primaryColor};
  border: none;
  border-radius: 3px;
  color: #fff;
  position: relative;
  margin-bottom: 10px;

  @media (min-width: 425px) {
    margin-right: 15px;
    margin-bottom: initial;
  }

  .ViewPostIcon {
    position: relative;
    top: 3px;
  }
  
`;

export const BtnDeletePost = styled.button`
  padding: 6px 21px;
  border: none;
  border-radius: 3px;
  background: red;
  color: #fff;
`;

export const TextMessage = styled.div`
  text-align: center; 
  position: relative; 
  bottom: 20px;
  color: ${props => props.theme.colors.primaryColor};
  visibility: ${props => props.visibility};
  opacity: ${props => props.opacity};
  transition: visibility 0.2s, opacity 0.5s linear;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .loadingText {
    color: #01579b;
    position: relative;
    top: 15px;
  }
`;