import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PrimaryButton from './Buttons/PrimaryButton';

function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(15); // Jumlah pengguna yang terlihat awalnya 15

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/users');
        const sortedUsers = response.data.sort((a, b) => b.points - a.points);
        setUsers(sortedUsers);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Tambah 5 pengguna saat tombol diklik
  };

  if (loading) {
    return <div className='flex animate-pulse bg-gray-200 rounded-xl items-center justify-center col-span-12 md:col-span-3 min-h-screen'>
              <span className="loading loading-infinity loading-lg"></span>
          </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='col-span-12 md:col-span-3 p-2  border-secondary  border rounded-xl'>
      <h1 className='font-extrabold p-2  border-b-2 border-secondary/30'>Cakra Tercerdas</h1>
      <table className='flex flex-col mt-2'>
        <tbody>
          {users.slice(0, visibleCount).map((user, index) => (
            <tr className='flex p-1 font-medium items-center justify-start ' key={user.id}>
              <td className="flex items-center gap-2 justify-start">
                <span
                  className={`btn-md btn btn-circle hover:btn-lg transition-all ease-in duration-100  flex items-center justify-center rounded-full ${
                    index >= 0 && index <= 2 ? "bg-yellow-400 text-primary cursor-default hover:text-2xl hover:animate-pulse hover:bg-yellow-300 " : ""
                  }`}
                >
                  {index + 1}
                </span>
                <p className='flex  flex-col items-start justify-center '>
                  <span>{user.username}</span>
                  <span><span className='text-xs text-secondary/70'>{user.points}</span></span>
                </p>
              </td>
              </tr>
          ))}
        </tbody>
      </table>
      {visibleCount < users.length && ( // Tampilkan tombol hanya jika ada lebih banyak pengguna
        <div className="flex justify-center items-center p-5">
            <PrimaryButton
              onClick={loadMore}
              label="Lihat lebih banyak"
              className="btn btn-xs bg-transparent text-secondary"
              >
            </PrimaryButton>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
