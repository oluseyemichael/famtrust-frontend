import React from 'react';
import Button from '../../components/Button';

const ModalSecurityVerify = () => {
  return (
    <div className="bg-[rgba(18,18,18,0.50)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="md:px-16 px-6 w-[40%] mx-auto bg-[#F9F8FF] pt-4 border-[1px] border-[solid] border-[#E2E2E2] rounded  text-base font-lato">
        <h1 className="text-txtblue font-lato text-2xl font-bold">
          Confirm Transaction
        </h1>
        <div className="flex justify-between items-center gap-6">
          <div>
            <label htmlFor="pin">Pin</label>
            <input
              type="tel"
              name="pin"
              id="pin"
              placeholder ="  Enter pin"
              className="w-[100%] py-2 rounded-xl border-[1px] mb-4 border-slate-300"
            />
          </div>
          <button className='bg-bluey py-2  text-white px-8 rounded-xl mt-14 mb-14' type="submit">Verify</button>
        </div>
      </div>
    </div>
  );
};

export default ModalSecurityVerify;
