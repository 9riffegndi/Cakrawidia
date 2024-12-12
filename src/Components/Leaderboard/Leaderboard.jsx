// src/components/leaderboard/Leaderboard.jsx
import React, { useState } from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import useUsers from '../../Hooks/useUsers';

function Leaderboard() {
  const { users, loading, error } = useUsers();
  const [visibleCount, setVisibleCount] = useState(15);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  if (loading) {
    return (
      <div className="flex animate-pulse bg-gray-200 rounded-xl items-center justify-center col-span-12 md:col-span-3 min-h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <p className="flex justify-center items-center  col-span-12 md:col-span-3   font-bold min-h-screen text-red-500">Error: {error}</p>;
  }

  return (
    <div className="col-span-12 md:col-span-3 p-2 border-secondary border rounded-xl">
      <h1 className="font-extrabold p-2 border-b-2 border-secondary/30">Cakra Tercerdas</h1>
      <table className="flex flex-col mt-2">
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
                <p className="flex flex-col items-start justify-center">
                  <span>{user.username}</span>
                  <span>
                    <span className="text-xs text-secondary/70">{user.points}</span>
                  </span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleCount < users.length && (
        <div className="flex justify-center items-center p-5">
          <PrimaryButton onClick={loadMore} label="Lihat lebih banyak" className="btn btn-xs bg-transparent text-secondary" />
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
