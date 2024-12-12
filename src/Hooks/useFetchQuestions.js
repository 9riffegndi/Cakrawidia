// src/Hooks/useFetchQuestions.js
import { useState, useEffect } from "react"; // Mengimpor hook useState dan useEffect dari React
import { fetchQuestions } from "../Services/questionService"; // Mengimpor fungsi untuk mengambil data pertanyaan
import { fetchTopics } from "../Services/topicService"; // Mengimpor fungsi untuk mengambil data topik


const useFetchQuestions = () => {
  // Menyimpan state untuk daftar pertanyaan dan status loading
  const [questions, setQuestions] = useState([]); // Menyimpan data pertanyaan yang berhasil diambil
  const [loading, setLoading] = useState(true); // Menyimpan status apakah data sedang dimuat

  useEffect(() => {
    // Fungsi untuk mengambil data secara asinkron
    const fetchData = async () => {
      try {
        // Mengambil data pertanyaan dan topik secara bersamaan
        const questionsRes = await fetchQuestions(); // Mengambil data pertanyaan
        const topicsRes = await fetchTopics(); // Mengambil data topik

        // Menampilkan response dari API untuk debugging

        // Menambahkan informasi topik dan nama pengguna pada setiap pertanyaan
        const enrichedQuestions = questionsRes.map((question) => {
          // Mencari nama topik berdasarkan topic_id yang ada pada pertanyaan
          const topic = topicsRes.find((t) => t.id === question.topic_id);
          return {
            ...question, // Menyertakan data pertanyaan yang sudah ada
            topic_name: topic ? topic.name : "Unknown", // Menambahkan nama topik atau 'Unknown' jika tidak ditemukan
            user_name: question.user ? question.user.username : "Unknown", // Menambahkan nama pengguna atau 'Unknown' jika tidak ada
          };
        });

        // Menyimpan data pertanyaan yang sudah diperkaya dengan informasi topik dan pengguna
        setQuestions(enrichedQuestions);
      } catch (error) {
        // Menangani error jika ada masalah saat mengambil data
        console.error("Error fetching data:", error);
      } finally {
        // Mengubah status loading menjadi false setelah data selesai diambil
        setLoading(false);
      }
    };

    // Memanggil fungsi fetchData saat komponen pertama kali dimounting
    fetchData();
  }, []); // [] berarti efek ini hanya dijalankan sekali, ketika komponen dimuat pertama kali

  // Mengembalikan data pertanyaan dan status loading agar bisa digunakan di komponen lain
  return { questions, loading };
};

export default useFetchQuestions;
