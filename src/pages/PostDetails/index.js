import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPostById } from '../../store/actions/postsAction';
import { Loading } from '../../components/ListPosts/styles';
import {
  PostDetailsContainer,
  PostContent,
  PostHeader,
  PostBody,
  Line,
  Title,
  Body,
  BackBtn
} from './styles';

function PostDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  let { post, loading } = useSelector((state) => ({
    post: state.postsReducer.post,
    loading: state.postsReducer.loading,
  }));

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  if (loading)
    return <Loading><strong className="loadingText"> Carregando... </strong></Loading>;

  return (
    <PostDetailsContainer>
      <PostContent>
        <PostHeader>
          <span>Detalhes do Post</span> <Line />
        </PostHeader>
        <PostBody>
          <Title>
            <b>Título:</b> <br />
            <span >{post.title}</span>
          </Title>
          <Body>
            <b>Body:</b> <br />
            <span>{post.body}</span><br />
          </Body>

          <div>
            <BackBtn to="/">Voltar</BackBtn>
          </div>

        </PostBody>
      </PostContent>
    </PostDetailsContainer>
  );
}

export default PostDetails;