// src/components/leaderboard/Leaderboard.jsx
import React, { useState } from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

// utils
import { formatInitialsUsername } from '../../Utils/formatInitialUsername'


function Leaderboard({users, className=''}) {
  const [visibleCount, setVisibleCount] = useState(5);
  const increment = 5; // Jumlah item yang ditambahkan/dikurangi tiap klik



  const loadMore = () => {
    if (visibleCount < users.length) {
      setVisibleCount(visibleCount + increment);
    }
  };

  const loadPrev = () => {
    if (visibleCount > increment) {
      setVisibleCount(visibleCount - increment);
    }
  };


  return (
    <div className={`col-span-12 md:col-span-3 sticky h-[350px]  flex flex-col justify-between  top-20  border-secondary border rounded-xl ${className}`}>
      
      <div className="flex gap-1 bg-yellow-200 justify-start rounded-t-xl  p-2 items-center border-b border-secondary">
        <img className='w-[35px]' src="https://img.icons8.com/?size=100&id=9tHbFVbHMO7a&format=png&color=FAB005"/>
        <h1 className="font-bold ">Bintang Cakrawidia</h1>
      </div>
      
      <ul className='flex flex-col w-full justify-start items-start rounded-b-xl color-scrollbar overflow-y-auto'> 
        <table className="flex flex-col ">
          {users.length === 0 && 
            <>
            <div className="grow flex text-center text-sm flex-col justify-center items-center font-bold">
              <p>Tidak ada pengguna disini</p>
              <img src="https://img.icons8.com/?size=100&id=102261&format=png&color=000000" alt="" />
            </div>
            </>
          }
          <tbody>
            {users.slice(0, visibleCount).map((user, index) => (
              <tr className="flex p-1 font-medium items-center justify-start" key={user.id}>
                <td className="flex items-center gap-2 justify-start">
                  <span
                    className={`btn-md btn btn-circle hover:btn-lg transition-all ease-in duration-100 flex items-center justify-center rounded-full 
                      ${index === 0
                        ? 'bg-yellow-400 text-primary cursor-default hover:text-2xl hover:animate-pulse hover:bg-yellow-300'
                        : ''
                    }
                    ${index  === 1
                        ? 'bg-slate-300 text-primary cursor-default hover:text-2xl hover:animate-pulse hover:bg-slate-300'
                        : ''
                    }
                    ${index  === 2
                        ? 'bg-yellow-900 text-primary cursor-default hover:text-2xl hover:animate-pulse hover:bg-yellow-700'
                        : ''
                    }
                    `}
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
      </ul>
        <div className="flex  flex-col  border-t border-secondary gap-1 p-2 justify-center items-center">
            <h1 className='font-bold '>Tampilkan</h1>
            <div className="flex justify-center items-center">
              {visibleCount > increment && (
                <PrimaryButton
                  type="button"
                  label={'lebih sedikit'} 
                  onClick={loadPrev} 
                  className="btn text-[8px] btn-xs btn-neutral text-primary mr-2"
                >
                </PrimaryButton>
              )}

              {visibleCount < users.length && (
                <PrimaryButton
                  type="button"
                  label={'lebih banyak'}
                  onClick={loadMore} 
                  className="btn text-[8px] btn-xs btn-neutral text-primary"
                >
                </PrimaryButton>
              )}
            </div>
        </div>
    </div>
  );
}

export default Leaderboard;
