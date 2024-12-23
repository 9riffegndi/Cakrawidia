

import React, { useState } from "react";
import { Link } from "react-router-dom"; 

import PrimaryButton from "../Buttons/PrimaryButton"; 
import Hero from "../Hero/Hero"; 

// utils
import { localeTime } from "../../Utils/localeTime";
import dayjs from "dayjs";
import { formatInitialsUsername } from "../../Utils/formatInitialUsername";
import ModalQuestions from "./ModalQuestions";
import HamburgerButton from "../Buttons/HamburgerButton";


const QuestionsListCard = ({ questions, users, searchQuery, onTopicSelect  }) => {
  // const [visibleCount, setVisibleCount] = useState(5); // Menyimpan jumlah pertanyaan yang ditampilkan
  const [sortBy, setSortBy] = useState("created_at"); // Menyimpan kriteria pengurutan (misalnya berdasarkan tanggal)
  const [sortOrder, setSortOrder] = useState("desc"); // Menyimpan urutan pengurutan (asc/desc)

  // Fungsi untuk menambah jumlah pertanyaan yang ditampilkan
  // const loadMore = () => {
  //   setVisibleCount((prevCount) => prevCount + 10);
  // };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
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


  return (
    <div className="rounded-xl md:h-[490px] h-[400px] col-span-12 md:col-span-6 flex flex-col justify-center border border-secondary items-center">
      {/* <Hero /> */}
      <div className=" flex p-3 w-full justify-between items-center gap-1 border-b border-secondary"> 
        {/* Dropdown untuk memilih urutan pengurutan */}
          <select
            onChange={handleSortChange}
            value={`${sortBy}-${sortOrder}`}
            className="select select-xs rounded-full select-bordered">
            <option disabled selected className="font-bold">Urutkan</option>
            <option value="created_at-desc">Terbaru</option>
            <option value="created_at-asc">Terlama</option>
            <option value="topic_name-asc">Topik (A-Z)</option>
            <option value="topic_name-desc">Topik (Z-A)</option>
          </select>
          <ModalQuestions/>
          <HamburgerButton/>
      </div>
      
      {/* {/* Menampilkan pertanyaan yang sudah difilter dan diurutkan */}
      <div className="carousel  carousel-vertical w-full pl-2 pr-2  h-full">
      {filteredQuestions.length > 0 ? (
        filteredQuestions.slice(0,).map((question) => (
          <div key={question.id} className="w-full  overflow-x-auto carousel-item h-full flex flex-col justify-start border-b-2 ">
            
            <div className="items-start justify-start flex flex-col gap-2">
              <div className="flex pt-2 gap-1 justify-start items-center">
                <span className="btn btn-circle btn-neutral text-primary">
                  {formatInitialsUsername(users.find((user) => user.id === question.user_id).username)}
                </span>
                <button 
                  onClick={() => onTopicSelect(question.topic_name)} 
                  className="font-bold hidden xs:block text-xs hover:underline">
                  {question.topic_name}
                </button>
                <span>|</span>
                <p className="font-bold text-xs">
                  {localeTime(question.created_at)} {/* Menampilkan waktu relatif */}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link to={`/viewquestion/${question.id}`} className="flex flex-col gap-2 ">
                    <p className=" whitespace-pre-wrap break-words text-xs xs:text-xl hover:link font-bold  ">{question.title}
                    </p>
                    <p className=" whitespace-pre-wrap break-words text-xs xs:text-xl">{truncateText(question.content, 80)}</p>
                </Link>
              </div>
            </div>
            <div className="flex p-5 w-full items-center  justify-between">
              <div className="flex items-center gap-1">
                {/* <p>{question.likes}</p> */}
              </div>
              <Link to={`/viewquestion/${question.id}`} >
                <PrimaryButton label="Jawab" className="btn btn-sm  " /> {/* Tombol jawab */}
              </Link>
            </div>

          </div>
        ))
      ) : (
        <div className="gap-10 w-full flex flex-col justify-center items-center p-5">
          <img className="w-1/3" src="/Assets/Img/no-results.png" />
          <h1 className=" text-center text-xl font-bold">
            Tidak ada pertanyaan yang cocok
          </h1>
        </div>
      )}
      </div>
      {/* Menampilkan tombol "Lihat semua" jika ada lebih banyak pertanyaan untuk ditampilkan */}
      {/* {visibleCount < filteredQuestions.length && (
        <div className="flex bg-cyan-300 w-full justify-center items-center p-5">
          <PrimaryButton
            label={'Lihat lebih banyak'}
            className="btn btn-xs"
            onClick={loadMore}
          />
        </div>
      )} */}
    </div>
  );
};

export default QuestionsListCard;



