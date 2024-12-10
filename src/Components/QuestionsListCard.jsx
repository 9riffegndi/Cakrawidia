
import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import PrimaryButton from "./Buttons/PrimaryButton";
import Hero from "./Hero";
import { Link } from "react-router-dom";


dayjs.extend(relativeTime);

const QuestionsListCard = ({ searchQuery }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(15);
  const [sortBy, setSortBy] = useState("created_at"); // Default sort by 'created_at'
  const [sortOrder, setSortOrder] = useState("desc"); // Default descending order

  useEffect(() => {
    dayjs.locale("id");
    const FetchQuestions = axios.get("https://cakrawidia-progress-adebf43bf30c.herokuapp.com/api/questions");
    const fetchTopics = axios.get("https://cakrawidia-progress-adebf43bf30c.herokuapp.com/api/topics");

    Promise.all([FetchQuestions, fetchTopics])
      .then(([questionsRes, topicsRes]) => {
        const questionsData = questionsRes.data;
        const topicsData = topicsRes.data;

        // Enrich questions with topic and user names
        const enrichedQuestions = questionsData.map((question) => {
          const topic = topicsData.find((t) => t.id === question.topic_id);
          return {
            ...question,
            topic_name: topic ? topic.name : "Unknown",
            user_name: question.user ? question.user.username : "Unknown",
          };
        });

        setQuestions(enrichedQuestions);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    const [field, order] = value.split("-");
    setSortBy(field);
    setSortOrder(order);
  };

  // Sorting logic
  const sortedQuestions = [...questions].sort((a, b) => {
    if (sortBy === "created_at") {
      const dateA = dayjs(a.created_at);
      const dateB = dayjs(b.created_at);
      return sortOrder === "asc" ? dateA.diff(dateB) : dateB.diff(dateA);
    } else if (sortBy === "topic_name") {
      return sortOrder === "asc"
        ? a.topic_name.localeCompare(b.topic_name)
        : b.topic_name.localeCompare(a.topic_name);
    }
    return 0;
  });

  const filteredQuestions = sortedQuestions.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    question.topic_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    question.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex rounded-xl col-span-12 md:col-span-6 animate-pulse bg-gray-200 items-center justify-center h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="rounded-xl col-span-12 md:col-span-6 flex flex-col justify-center border border-secondary items-center ">
      <Hero />
      {/* Sorting controls */}
      <div className="border-t-2 flex p-4 w-full justify-start">
        <select
            onChange={handleSortChange}
            value={`${sortBy}-${sortOrder}`}
            className="select rounded-full select-bordered">
                <option  disabled selected className="font-bold">Urutkan</option>
                <option value="created_at-desc">Terbaru</option>
                <option value="created_at-asc">Terlama</option>
                <option value="topic_name-asc">Topik (A-Z)</option>
                <option value="topic_name-desc">Topik (Z-A)</option>
        </select>
      </div>
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
              |
              <p className="font-bold text-sm">
                {dayjs(question.created_at).fromNow()}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                  to={`/viewquestion/${question.id}`}
                  className="font-normal text-xl hover:underline"
              >
                  {question.title}
              </Link>
            </div>
            
            <div className="flex w-full justify-end">
              <Link
                to={`/viewquestion/${question.id}`}
                className="btn btn-xs bg-transparent text-secondary">
                <PrimaryButton
                  label="Jawab"
                  className="btn btn-xs bg-transparent text-secondary"
                />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="flex min-h-44 flex-col justify-center items-center p-5">
          <p className=" text-center text-lg">
            Tidak ada hasil dari "<span className="font-bold">{searchQuery}</span>"
          </p>
        </div>
      )}
      {visibleCount < filteredQuestions.length && (
        <div className="flex justify-center items-center p-5">
          <PrimaryButton
            onClick={loadMore}
            label="Lihat semua"
            className="btn btn-xs bg-transparent text-secondary"
          />
        </div>
      )}
    </div>
  );
};

export default QuestionsListCard;
