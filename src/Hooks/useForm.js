import { useState } from "react";

// Custom hook untuk menangani form pengajuan pertanyaan
export const useForm = () => {
  // State untuk menyimpan nilai input pertanyaan dan topik yang dipilih
  const [question, setQuestion] = useState(""); // Menyimpan pertanyaan yang dimasukkan oleh pengguna
  const [selectedTopic, setSelectedTopic] = useState(""); // Menyimpan topik yang dipilih oleh pengguna

  // Fungsi untuk menangani perubahan pada input pertanyaan
  const handleQuestionChange = (e) => setQuestion(e.target.value);
  
  // Fungsi untuk menangani perubahan pada pilihan topik
  const handleTopicChange = (topic) => setSelectedTopic(topic);

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = () => {
    // Memeriksa apakah pertanyaan dan topik sudah diisi
    if (!question || !selectedTopic) {
      alert("Mohon lengkapi pertanyaan dan pilih topik!"); // Memberi peringatan jika ada yang belum diisi
      return; // Menghentikan eksekusi jika form tidak lengkap
    }
    
    // Menampilkan nilai pertanyaan dan topik di konsol (untuk debugging atau pengolahan lebih lanjut)
    console.log({ question, selectedTopic });
    
    // Memberikan feedback kepada pengguna bahwa pertanyaan berhasil diajukan
    alert("Pertanyaan berhasil diajukan!");

    // Reset form setelah submit
    setQuestion(""); // Mengosongkan input pertanyaan
    setSelectedTopic(""); // Mengosongkan pilihan topik
  };

  // Mengembalikan state dan fungsi-fungsi untuk digunakan di komponen lain
  return {
    question,          // Nilai pertanyaan yang dimasukkan
    selectedTopic,     // Nilai topik yang dipilih
    handleQuestionChange, // Fungsi untuk mengubah nilai pertanyaan
    handleTopicChange,    // Fungsi untuk mengubah nilai topik
    handleSubmit,          // Fungsi untuk menangani submit form
  };
};
