import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { addPost } from '../../actions/post';
import PostItem from './PostItem';

const AddPost = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <Fragment>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        class='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </Fragment>
  );
};

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
  post: PropTypes.array.isRequired,
};

export default connect(null, { addPost })(AddPost);
