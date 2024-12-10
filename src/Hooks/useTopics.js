import { useState, useEffect } from 'react';
import { fetchTopics } from '../Services/topicService';

// Custom hook untuk mengambil data topik
export const useTopics = () => {
  // State untuk menyimpan daftar topik, status loading, dan error
  const [topics, setTopics] = useState([]);  // Menyimpan daftar topik yang berhasil di-fetch
  const [loading, setLoading] = useState(true); // Menyimpan status loading (apakah data sedang diambil)
  const [error, setError] = useState(null); // Menyimpan error jika terjadi kesalahan saat pengambilan data

  // Mengambil data topik dari API ketika komponen pertama kali dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengambil data topik menggunakan fungsi fetchTopics
        const data = await fetchTopics();
        setTopics(data); // Menyimpan data topik yang diterima ke dalam state topics
      } catch (err) {
        // Jika ada kesalahan, menyimpan pesan error ke dalam state error
        setError(err.message);
      } finally {
        // Mengubah status loading menjadi false setelah data berhasil diambil atau error terjadi
        setLoading(false);
      }
    };

    fetchData(); // Menjalankan fungsi fetchData ketika komponen pertama kali dimuat
  }, []); // Efek ini hanya dijalankan sekali ketika komponen dimuat pertama kali (dependency array kosong)

  // Mengembalikan state topics, loading, dan error untuk digunakan oleh komponen lain
  return { topics, loading, error };
};
