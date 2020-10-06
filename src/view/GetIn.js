import React, { Fragment } from 'react';
import SignUp from '../components/SignUp';

const GetIn = ({ register }) => {

  const truttyStr = (deliverade) => {
    if(!deliverade.value.trim()) {
      console.log(deliverade);
    }
  }

  const validateInput = (e) => {
    const { target, currentTarget } = e;

    const name = target.name;
    const userName = currentTarget['user-name'];
    const email = target.email;
    const pass = target.password;
    const confPass = target['confirm-password'];

    console.log(target, currentTarget);

    truttyStr(name);
    truttyStr(userName);
    truttyStr(email);
    truttyStr(pass);
    truttyStr(confPass);
  }

  return (
    <Fragment>
      <header className="fakeback fake-size-back">
        <h1 className="fakefont mx-3 py-2 mb-0 text-white">fakebook</h1>
      </header>
      <SignUp register={register} validate={validateInput} />
    </Fragment>
  );
}

export default GetIn;