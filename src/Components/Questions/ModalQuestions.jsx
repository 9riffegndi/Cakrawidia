import React, { use, useState } from "react";
import axios from "axios";
import LabelButton from "../Buttons/LabelButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import TopicsDropdown from "../Topics/TopicsDropdown";
import Textarea from "../TextArea";
import { useForm } from "../../Hooks/usepostQuestions";
import { useNavigate } from "react-router-dom";


// Fungsi untuk mengirimkan pertanyaan
async function postQuestion(topicId, title, content, setLoading) {
  const authToken = localStorage.getItem("authToken");
  

  if (!authToken) {    
    alert("Token autentikasi tidak ditemukan. Silakan login terlebih dahulu.");
    return null;
  }



  const apiUrl = "https://cakrawidia-4ae06d46343e.herokuapp.com/api/questions";
  const payload = {
    topic_id: topicId,
    title,
    content: content,
  };

  setLoading(true); // Set loading saat request dimulai

  try {
    const response = await axios.post(apiUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    setLoading(false); // Set loading selesai setelah request selesai
    console.log("Pertanyaan berhasil diajukan:", response.data);
    return response.data;
  } catch (error) {
    setLoading(false); // Set loading selesai bahkan jika terjadi error
    console.error("Gagal mengirimkan pertanyaan:", error);
    alert(
      error.response?.data?.message || "Terjadi kesalahan saat mengajukan pertanyaan."
    );
    return null;
  }
}

export default function ModalQuestions() {
  const {
    title,
    question,
    selectedTopic,
    handleTitleChange,
    handleQuestionChange,
    handleTopicChange,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitQuestion = async () => {
    const authToken = localStorage.getItem("authToken");

    // Cek jika token tidak ada, arahkan ke login
    if (!authToken) {
      alert("Token autentikasi tidak ditemukan. Silakan login terlebih dahulu.");
      navigate("/login");
      return;
    }

    if (!selectedTopic || !question.trim()) {
      alert("Topik dan pertanyaan tidak boleh kosong.");
      return;
    }

    // Ajukan pertanyaan
    const result = await postQuestion(selectedTopic, title, question, setLoading);

    if (result) {
      alert("Pertanyaan berhasil diajukan!")
      document.getElementById("my_modal_6").checked = false;
      window.location.reload();
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
            placeholder={"Judul Pertanyaan"}
            value={title}
            onChange={handleTitleChange}
          >
          </Textarea>

          <Textarea
            placeholder="Tulisl pertanyaanmu (simple & jelas lebih cepat terjawab)"
            value={question}
            onChange={handleQuestionChange}
            className={"min-h-[200px]"}
          />

          <TopicsDropdown onSelect={handleTopicChange} />

          <PrimaryButton
            label={loading ? "Mengajukan..." : "Ajukan"}
            onClick={submitQuestion}
            className={`btn btn-md`}
            disabled={loading}
          />
        </div>
      </div>
    </>
  );
}
