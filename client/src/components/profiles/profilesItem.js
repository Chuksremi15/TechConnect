import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const profilesItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img scr={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>

        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span> at {location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check'></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

profilesItem.propTypes = {
  profile: PropTypes.func.isRequired,
};

export default profilesItem;
