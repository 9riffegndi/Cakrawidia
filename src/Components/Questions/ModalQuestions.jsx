import React from "react";
import LabelButton from "../Buttons/LabelButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import TopicsDropdown from "../Topics/TopicsDropdown";
import Textarea from "../TextArea";
import { useForm } from "../../Hooks/useForm";

// Fungsi untuk memverifikasi token dan mendapatkan informasi pengguna
async function getUserInfo(authToken) {
  const apiUrl = "https://cakrawidia-4ae06d46343e.herokuapp.com/api/me";

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Tidak dapat memverifikasi token");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error saat memverifikasi token:", error);
    alert("Token tidak valid atau sesi telah berakhir. Silakan login kembali.");
    return null;
  }
}

// Fungsi untuk mengirimkan pertanyaan
async function postQuestion(topicId, title, content) {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    alert("Token autentikasi tidak ditemukan. Silakan login terlebih dahulu.");
    return;
  }

  // Verifikasi token dengan API /me
  const userInfo = await getUserInfo(authToken);

  if (!userInfo || userInfo.user.role === "anonymous") {
    alert("Anda harus login terlebih dahulu untuk mengajukan pertanyaan.");
    return;
  }

  const apiUrl = "https://cakrawidia-4ae06d46343e.herokuapp.com/api/questions";
  const payload = {
    topic_id: topicId,
    title: title,
    content: content,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Pertanyaan berhasil diajukan:", result);
      return result;
    } else {
      console.error("Gagal mengirimkan pertanyaan:", result);
      alert(result.message || "Terjadi kesalahan saat mengajukan pertanyaan.");
      return null;
    }
  } catch (error) {
    console.error("Terjadi kesalahan jaringan:", error);
    alert("Terjadi kesalahan jaringan. Coba lagi nanti.");
    return null;
  }
}

export default function ModalQuestions() {
  const {
    question,
    selectedTopic,
    handleQuestionChange,
    handleTopicChange,
  } = useForm();

  const submitQuestion = async () => {
    if (!selectedTopic || !question.trim()) {
      alert("Topik dan pertanyaan tidak boleh kosong.");
      return;
    }

    const result = await postQuestion(selectedTopic.id, "Judul Pertanyaan", question);

    if (result) {
      alert("Pertanyaan berhasil diajukan!");
      document.getElementById("my_modal_6").checked = false; // Menutup modal setelah berhasil
    } else {
      alert("Gagal mengajukan pertanyaan. Coba lagi nanti.");
    }
  };

  return (
    <>
      <LabelButton label="MULAI BERTANYA!" htmlFor="my_modal_6" className="btn w-1/2" />

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="flex flex-col gap-4 modal-box">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Ajukan pertanyaan mu!</h3>
            <LabelButton
              src="https://img.icons8.com/?size=100&id=2i5n7zNvArOt&format=png&color=FFFFFF"
              htmlFor="my_modal_6"
              className="btn btn-sm btn-circle"
            />
          </div>

          <Textarea
            placeholder="Tulisl pertanyaanmu (simple & jelas lebih cepat terjawab)"
            value={question}
            onChange={handleQuestionChange}
          />

          <TopicsDropdown onSelect={handleTopicChange} />

          <PrimaryButton label="Ajukan" onClick={submitQuestion} className="btn btn-md" />
        </div>
      </div>
    </>
  );
}
