import { useState } from "react";

export const useFormAnswers = () => {
  const [content, setContent] = useState(""); // Menyimpan jawaban yang dimasukkan oleh pengguna
  const [title, setTitle] = useState("");

  // Fungsi untuk menangani perubahan pada input jawaban
  

  const handleAnswersChange = (e) => setContent(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = () => {
    // Memeriksa apakah pertanyaan dan topik sudah diisi
    if (!content) {
      alert("Tambahkan jawaban sebelum submit"); // Memberi peringatan jika ada yang belum diisi
      return; // Menghentikan eksekusi jika form tidak lengkap
    }

    // Reset form setelah submit
    setContent("");
  };

  // Mengembalikan state dan fungsi-fungsi untuk digunakan di komponen lain
  return {
    content,
    title,
    handleTitleChange,
    handleAnswersChange, // Fungsi untuk mengubah nilai pertanyaan
    handleSubmit,          // Fungsi untuk menangani submit form
  };
};
