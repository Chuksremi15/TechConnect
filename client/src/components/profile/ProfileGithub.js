import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getGithubRepo } from '../../actions/profile';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const ProfileGithub = ({ username, getGithubRepo, repos }) => {
  // useEffect(() => {
  //   getGithubRepo(username);
  // }, [getGithubRepo]);

  return (
    <div className='profile-github'>
      <h2 className='text-primary my-1'>Github Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo._id} class='repo bg-white p-1 my-1'>
            <div>
              <h4>
                <a
                  href='{repo.html_url}'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, laborum!
              </p>
            </div>
            <div>
              <ul>
                <li class='badge badge-primary'>Stars: 44</li>
                <li class='badge badge-dark'>Watchers: 21</li>
                <li class='badge badge-light'>Forks: 25</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepo: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepo })(ProfileGithub);
