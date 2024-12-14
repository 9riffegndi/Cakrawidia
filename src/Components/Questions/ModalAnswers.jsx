import React, { useState, useEffect } from "react";
import axios from "axios";
import LabelButton from "../Buttons/LabelButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import Textarea from "../TextArea";
import { useFormAnswers } from "../../Hooks/usepostAnswers";
import { useNavigate, useParams } from "react-router-dom";

// Fungsi untuk mengirimkan jawaban
const postAnswers = async (questionId, content, title, setLoading) => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    alert("Anda harus login terlebih dahulu");
    return null;
  }

  const apiUrl = "https://cakrawidia-4ae06d46343e.herokuapp.com/api/answers";
  const payload = {
    question_id: questionId,
    content: content,
    title: title, // Mengirimkan title juga
  };

  setLoading(true);

  try {
    const response = await axios.post(apiUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    setLoading(false);
    console.log("Jawaban berhasil diajukan:", response.data);
    return response.data;
  } catch (error) {
    setLoading(false);
    console.error("Gagal mengirimkan jawaban:", error);
    alert(
      error.response?.data?.message || "Terjadi kesalahan saat mengirimkan jawaban"
    );
    return null;
  }
};

export default function ModalAnswers() {
  const { id } = useParams(); // Mengambil questionId dari URL params
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const { content, handleAnswersChange, title, handleTitleChange } = useFormAnswers();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async () => {
      if (!id) {
        alert("ID pertanyaan tidak ditemukan");
        return;
      }

      try {
        const authToken = localStorage.getItem("authToken");

        const response = await axios.get(`https://cakrawidia-4ae06d46343e.herokuapp.com/api/questions/${id}`,
          {
            headers: authToken
              ? { Authorization: `Bearer ${authToken}` }
              : {},
          }
        );

        setQuestion(response.data); // Menyimpan data pertanyaan
      } catch (error) {
        console.error("Gagal mengambil data pertanyaan:", error);
        alert("Tidak dapat memuat detail pertanyaan");
      }
    };

    fetchQuestion(); // Fetch pertanyaan berdasarkan questionId
  }, [id]);

  const submitAnswers = async () => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      alert("Login untuk menjawab pertanyaan");
      navigate("/login");
      return;
    }

    // Validasi untuk memastikan title dan content tidak kosong
    if (!title || !content) {
      alert("Judul dan jawaban tidak boleh kosong");
      return;
    }

    // Validasi untuk memastikan questionId valid
    if (!id) {
      alert("Pertanyaan ID tidak ditemukan");
      return;
    }

    const result = await postAnswers(id, content, title, setLoading);

    if (result) {
      alert("Jawaban berhasil Dikirim!");
      document.getElementById("my_modal_6").checked = false; // Menutup modal
      setTimeout(() => window.location.reload(), 500); // Refresh halaman
    } else {
      alert("Gagal mengajukan jawaban. Coba lagi nanti.");
    }
  };

  return (
    <>
      <LabelButton
        label="Jawab Pertanyaan"
        htmlFor="my_modal_6"
        className="btn w-full"
      />

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="flex flex-col gap-4 modal-box">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Tambahkan jawabanmu!</h3>

            <LabelButton
              src="https://img.icons8.com/?size=100&id=2i5n7zNvArOt&format=png&color=FFFFFF"
              htmlFor="my_modal_6"
              className="btn btn-sm btn-circle"
            />
          </div>

          {/* Menampilkan judul pertanyaan */}

          <Textarea
            placeholder="Tuliskan judul jawabanmu disini..."
            value={title}
            onChange={handleTitleChange}
          />

          <Textarea
            placeholder="Tuliskan jawabanmu disini..."
            value={content}
            onChange={handleAnswersChange}
            className="min-h-[200px]"
          />

          <PrimaryButton
            label={loading ? "Sedang mengirim jawaban..." : "Kirim jawaban"}
            onClick={submitAnswers}
            className="btn btn-md"
            disabled={loading}
          />
        </div>
      </div>
    </>
  );
}
