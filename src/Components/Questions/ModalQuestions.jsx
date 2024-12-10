import React from "react";
import LabelButton from "../Buttons/LabelButton"; // Komponen untuk tombol label (misalnya tombol tutup modal)
import PrimaryButton from "../Buttons/PrimaryButton"; // Komponen untuk tombol utama (untuk mengirimkan pertanyaan)
import TopicsDropdown from "../Topics/TopicsDropdown"; // Komponen dropdown untuk memilih topik
import Textarea from "../TextArea"; // Komponen untuk input teks (untuk menulis pertanyaan)
import { useForm } from "../../Hooks/useForm"; // Mengimpor hook useForm untuk menangani form state

export default function ModalQuestions() {
  // Menggunakan hook useForm untuk mengelola state form (pertanyaan dan topik)
  const {
    question, // State untuk menyimpan pertanyaan yang dimasukkan
    selectedTopic, // State untuk menyimpan topik yang dipilih
    handleQuestionChange, // Fungsi untuk menangani perubahan input pertanyaan
    handleTopicChange, // Fungsi untuk menangani perubahan pilihan topik
    handleSubmit, // Fungsi untuk menangani pengiriman form
  } = useForm(); // Menggunakan hook useForm

  return (
    <>
      {/* Tombol untuk membuka modal, mengarah ke checkbox dengan ID 'my_modal_6' */}
      <LabelButton label="MULAI BERTANYA!" htmlFor="my_modal_6" className="btn w-1/2" />

      {/* Checkbox untuk mengontrol modal (jika dicentang, modal muncul) */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />

      {/* Modal container */}
      <div className="modal" role="dialog">
        {/* Konten modal */}
        <div className="flex flex-col gap-4 modal-box">
          {/* Header modal dengan judul dan tombol tutup */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Ajukan pertanyaan mu!</h3>
            <LabelButton
              src="https://img.icons8.com/?size=100&id=2i5n7zNvArOt&format=png&color=FFFFFF" // Ikon untuk tombol tutup
              htmlFor="my_modal_6" // Menutup modal ketika tombol ini diklik
              className="btn btn-sm btn-circle"
            />
          </div>

          {/* Textarea untuk menulis pertanyaan */}
          <Textarea
            placeholder="Tulisl pertanyaanmu (simple & jelas lebih cepat terjawab)" // Placeholder untuk textarea
            value={question} // Nilai textarea diikat ke state 'question'
            onChange={handleQuestionChange} // Menangani perubahan input pada textarea
          />

          {/* Dropdown untuk memilih topik */}
          <TopicsDropdown onSelect={handleTopicChange} /> 

          {/* Tombol untuk mengirimkan pertanyaan */}
          <PrimaryButton label="Ajukan" onClick={handleSubmit} className="btn btn-md" />
        </div>
      </div>
    </>
  );
}
