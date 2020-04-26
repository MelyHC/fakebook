import React, { Fragment } from 'react';
import SignUp from '../components/SignUp';

const GetIn = ({ register }) => {
  return (
    <Fragment>
      <header className="fakeback">
        <h1 className="fakefont mx-3 py-2 mb-0 text-white">fakebook</h1>
      </header>
      <SignUp register={register} />
    </Fragment>
  );
}

export default GetIn;