import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch, AiFillDelete } from 'react-icons/ai';

import {
  PostsContainer,
  SearchPost,
  Table,
  BtnViewPost,
  BtnDeletePost,
  TextMessage,
  Loading
} from "./styles";
import { getPosts, getPostListId, deletePosts } from "../../store/actions/postsAction";

function ListPosts() {
  let dispatch = useDispatch();

  let { posts, loading, deleted } = useSelector((state) => ({
    posts: state.postsReducer.posts,
    post: state.postsReducer.post,
    loading: state.postsReducer.loading,
    deleted: state.postsReducer.deleted,
  }));

  const [visibility, setVisibility] = useState('hidden');
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const onDeletePost = (posts, id) => {
    dispatch(deletePosts(posts, id));
    setVisibility('visible');
    setOpacity(1);

    setTimeout(() => {
      setVisibility('hidden');
      setOpacity(0);
    }, 2000);
  };

  const onSearchPost = id => {
    dispatch(getPostListId(id));
  };

  if (loading)
    return <Loading><strong className="loadingText"> Carregando... </strong></Loading>;

  return (
    <PostsContainer>
      {deleted && <TextMessage visibility={visibility} opacity={opacity} >Post excluído com sucesso :D</TextMessage>}

      <div style={{ padding: '0 0 15px' }}>
        <SearchPost
          type="text"
          placeholder="Informe o ID do Post desejado:"
          onChange={(e) => onSearchPost(e.target.value)}
        />
      </div>

      <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={posts.id}>
              <td className="title">{post.title}</td>
              <td className="buttons">
                <BtnViewPost to={`/details/${post.id}`}><AiOutlineSearch className="ViewPostIcon" /></BtnViewPost>
                <BtnDeletePost onClick={() => onDeletePost(posts, post.id)}><AiFillDelete /></BtnDeletePost>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PostsContainer>
  );
}

export default ListPosts;
