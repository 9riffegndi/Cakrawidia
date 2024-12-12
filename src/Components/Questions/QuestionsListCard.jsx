import React, { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton"; // Komponen button kustom
import Hero from "../Hero/Hero"; // Komponen Hero yang kemungkinan menampilkan gambar atau banner
import { Link } from "react-router-dom"; // Untuk navigasi ke halaman lain menggunakan React Router
import useFetchQuestions from "../../Hooks/useFetchQuestions"; // Hook untuk mengambil data pertanyaan

import { localeTime } from "../../Utils/localeTime";
import dayjs from "dayjs";


const QuestionsListCard = ({ searchQuery }) => {

  const { questions, loading } = useFetchQuestions(); // Mengambil data pertanyaan menggunakan hook
  const [visibleCount, setVisibleCount] = useState(15); // Menyimpan jumlah pertanyaan yang ditampilkan
  const [sortBy, setSortBy] = useState("created_at"); // Menyimpan kriteria pengurutan (misalnya berdasarkan tanggal)
  const [sortOrder, setSortOrder] = useState("desc"); // Menyimpan urutan pengurutan (asc/desc)

  // Fungsi untuk menambah jumlah pertanyaan yang ditampilkan
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  // Fungsi untuk mengubah kriteria dan urutan pengurutan
  const handleSortChange = (e) => {
    const value = e.target.value;
    const [field, order] = value.split("-"); // Memisahkan nilai berdasarkan tanda "-"
    setSortBy(field); // Mengubah kriteria pengurutan
    setSortOrder(order); // Mengubah urutan pengurutan
  };

  // Mengurutkan pertanyaan berdasarkan kriteria dan urutan
  const sortedQuestions = [...questions].sort((a, b) => {
    if (sortBy === "created_at") {
      const dateA = dayjs(a.created_at); // Mengonversi tanggal menjadi 
      const dateB = dayjs(b.created_at);
      return sortOrder === "asc" ? dateA.diff(dateB) : dateB.diff(dateA);
    } else if (sortBy === "topic_name") {
      return sortOrder === "asc"
        ? a.topic_name.localeCompare(b.topic_name) // Mengurutkan berdasarkan nama topik (A-Z)
        : b.topic_name.localeCompare(a.topic_name); // Mengurutkan berdasarkan nama topik (Z-A)
    }
    return 0; // Jika tidak ada kriteria yang cocok, tidak mengubah urutan
  });

  
  // Menyaring pertanyaan berdasarkan query pencarian
  const filteredQuestions = sortedQuestions.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase()) || // Mencocokkan judul dengan query
    question.topic_name.toLowerCase().includes(searchQuery.toLowerCase()) || // Mencocokkan nama topik dengan query
    question.content.toLowerCase().includes(searchQuery.toLowerCase()) // Mencocokkan konten dengan query
  );



  // Jika sedang loading, tampilkan animasi loading
  if (loading) {
    return (
      <div className="flex rounded-xl col-span-12 md:col-span-6 animate-pulse bg-gray-200 items-center justify-center h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="rounded-xl col-span-12 md:col-span-6 flex flex-col justify-center border border-secondary items-center">
      <Hero /> {/* Menampilkan Hero banner */}
      <div className="border-t-2 flex p-4 w-full justify-start">
        {/* Dropdown untuk memilih urutan pengurutan */}
        <select
          onChange={handleSortChange}
          value={`${sortBy}-${sortOrder}`}
          className="select rounded-full select-bordered">
          <option disabled selected className="font-bold">Urutkan</option>
          <option value="created_at-desc">Terbaru</option>
          <option value="created_at-asc">Terlama</option>
          <option value="topic_name-asc">Topik (A-Z)</option>
          <option value="topic_name-desc">Topik (Z-A)</option>
        </select>
      </div>
      {/* Menampilkan pertanyaan yang sudah difilter dan diurutkan */}
      {filteredQuestions.length > 0 ? (
        filteredQuestions.slice(0, visibleCount).map((question) => (
          <div key={question.id} className="w-full flex flex-col justify-between border-b-2 min-h-[200px] gap-4 p-5">
            <div className="flex gap-1 justify-start items-center">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Avatar"
                  />
                </div>
              </div>
              <a href="#" className="font-bold text-xs sm:text-sm hover:underline">
                {question.topic_name}
              </a>
              <span>|</span>
              <p className="font-bold text-sm">
                {localeTime(question.created_at)} {/* Menampilkan waktu relatif */}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link to={`/viewquestion/${question.id}`} className="font-normal text-xl hover:underline">
                {question.title} {/* Judul pertanyaan */}
              </Link>
            </div>

            <div className="flex w-full justify-end">
              <Link to={`/viewquestion/${question.id}`} >
                <PrimaryButton label="Jawab" className="btn btn-xs bg-transparent text-secondary" /> {/* Tombol jawab */}
              </Link>
            </div>

          </div>
        ))
      ) : (
        <div className="flex min-h-44 flex-col justify-center items-center p-5">
          <p className=" text-center text-lg">
            Tidak ada hasil dari "<span className="font-bold">{searchQuery}</span>" {/* Jika tidak ada hasil */}
          </p>
        </div>
      )}
      {/* Menampilkan tombol "Lihat semua" jika ada lebih banyak pertanyaan untuk ditampilkan */}
      {visibleCount < filteredQuestions.length && (
        <div className="flex justify-center items-center p-5">
          <PrimaryButton onClick={loadMore} label="Lihat semua" className="btn btn-xs bg-transparent text-secondary" />
        </div>
      )}
    </div>
  );
};

export default QuestionsListCard;
