// src/components/leaderboard/Leaderboard.jsx
import React, { useState } from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

// utils
import { formatInitialsUsername } from '../../Utils/formatInitialUsername'



function Leaderboard({users}) {
  const [visibleCount, setVisibleCount] = useState(15);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };


  return (
    <div className="col-span-12 md:col-span-3 sticky top-20 overflow-y-auto h-screen hide-scrollbar border-secondary border rounded-xl">
      <div className="flex gap-1 bg-yellow-200 justify-start rounded-t-xl  p-2 items-center border-b border-secondary">
      <img className='w-[35px]' src="https://img.icons8.com/?size=100&id=IZE9JtMlZ5Df&format=png&color=FAB005"/>
      <h1 className="font-bold ">Pengguna Cakrawidia</h1>
      </div>
      <table className="flex flex-col min-h-screen mt-2">
        {users.length === 0 && 
          <>
          <div className="grow flex text-center text-sm flex-col justify-center items-center font-bold">
            <p>Tidak ada users disini</p>
            <img src="https://img.icons8.com/?size=100&id=102261&format=png&color=000000" alt="" />
          </div>
          </>
        }
        <tbody>
          {users.slice(0, visibleCount).map((user, index) => (
            <tr className="flex p-1 font-medium items-center justify-start" key={user.id}>
              <td className="flex items-center gap-2 justify-start">
                <span
                  className={`btn-md btn btn-circle hover:btn-lg transition-all ease-in duration-100 flex items-center justify-center rounded-full ${
                    index >= 0 && index <= 2
                      ? 'bg-yellow-400 text-primary cursor-default hover:text-2xl hover:animate-pulse hover:bg-yellow-300'
                      : ''
                  }`}
                >
                  {index + 1}
                </span>
                <p className='btn btn-circle text-primary btn-neutral'>{formatInitialsUsername(user.username)}</p>
                <p className="flex flex-col text-xs items-start justify-center">
                  <span>{user.username}</span>
                  <span>
                    <span className="text-xs badge badge-sm badge-warning ">{user.points}</span>
                  </span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleCount < users.length && (
        <div className="flex justify-center items-center p-5">
          <PrimaryButton onClick={loadMore} label="Lihat lebih banyak" 
          className="btn btn-xs btn-neutral text-primary" />
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
