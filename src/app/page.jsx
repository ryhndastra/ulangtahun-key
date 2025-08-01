"use client";

import { BookOpen, Heart, Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function BirthdayRoom() {
  const [cakeStep, setCakeStep] = useState(0);
  const [bookOpen, setBookOpen] = useState(false);
  const [bookAnimating, setBookAnimating] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageFlipping, setPageFlipping] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const wishes = [
    {
      title: "Selamat Ulang Tahun! 🎉",
      message:
        "Hari ini adalah hari spesialmu! Semoga di umur yang baru ini kamu selalu sehat, bahagia, dan semua impianmu bisa tercapai. Jangan lupa selalu jadi anak yang baik ya!",
      decoration: "🎂🎈",
    },
    {
      title: "Doa Terbaik Untukmu 🤲",
      message:
        "Semoga Allah selalu melindungi dan memberkahi hidupmu. Semoga kamu jadi anak yang sholeh/sholehah, rajin belajar, dan selalu berbakti kepada orang tua.",
      decoration: "🌟🤲",
    },
    {
      title: "Semangat Belajar! 📚",
      message:
        "Di umur yang baru ini, semoga kamu makin rajin belajar dan meraih prestasi yang membanggakan. Ingat, belajar itu investasi terbaik untuk masa depanmu!",
      decoration: "📚✨",
    },
    {
      title: "Harapan untuk Masa Depan 🌈",
      message:
        "SSelamat menempuh awal perjalanan di dunia kedokteran gigi! Semoga kamu selalu semangat belajar, dikelilingi teman-teman yang suportif, dan diberi kekuatan untuk terus maju meski banyak tantangan. Terus kejar impianmu jadi drg yang hebat, kita semua bangga banget sama kamu!",
      decoration: "🎯🌈",
    },
  ];

  const cakeSteps = [
    "Menyiapkan bahan-bahan...",
    "Meletakkan piring cantik...",
    "Membuat layer pertama...",
    "Menambah layer kedua...",
    "Menambah layer ketiga...",
    "Menghias dengan cream...",
    "Menambah dekorasi bunga...",
    "Memasang lilin cantik...",
    "Kue siap! 🎉",
  ];

  const startCakeAnimation = () => {
    setCakeStep(0);
    const interval = setInterval(() => {
      setCakeStep((prev) => {
        if (prev >= 8) {
          clearInterval(interval);
          setConfetti(true);
          setTimeout(() => setConfetti(false), 3000);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
  };

  const resetCake = () => {
    setCakeStep(0);
  };

  const toggleBook = () => {
    if (bookAnimating) return;

    setBookAnimating(true);

    if (!bookOpen) {
      setTimeout(() => {
        setBookOpen(true);
        setCurrentPage(0);
        setTimeout(() => {
          setBookAnimating(false);
        }, 1000);
      }, 100);
    } else {
      setTimeout(() => {
        setBookOpen(false);
        setTimeout(() => {
          setBookAnimating(false);
        }, 1000);
      }, 100);
    }
  };

  const changePage = (direction) => {
    if (pageFlipping) return;

    setPageFlipping(true);

    setTimeout(() => {
      if (direction === "next" && currentPage < wishes.length - 1) {
        setCurrentPage((prev) => prev + 1);
      } else if (direction === "prev" && currentPage > 0) {
        setCurrentPage((prev) => prev - 1);
      }

      setTimeout(() => {
        setPageFlipping(false);
      }, 600);
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startCakeAnimation();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-50 to-blue-100 relative overflow-hidden">
      {/* Confetti Animation */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  [
                    "bg-pink-400",
                    "bg-purple-400",
                    "bg-yellow-400",
                    "bg-green-400",
                    "bg-blue-400",
                  ][i % 5]
                }`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">
          🎈
        </div>
        <div className="absolute top-20 right-20 text-5xl animate-pulse">
          🎉
        </div>
        <div
          className="absolute bottom-20 left-20 text-4xl animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          🎁
        </div>
        <div
          className="absolute bottom-10 right-10 text-5xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        >
          ⭐
        </div>
        <div
          className="absolute top-1/2 left-5 text-3xl animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          💖
        </div>
        <div
          className="absolute top-1/3 right-5 text-4xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          🌟
        </div>
      </div>

      {/* Music Control */}
      <div className="fixed top-4 right-4 z-40">
        <Button
          onClick={() => setMusicPlaying(!musicPlaying)}
          className="bg-white/80 hover:bg-white text-purple-600 rounded-full w-12 h-12 shadow-lg"
        >
          {musicPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            HAPPY BIRTHDAY!
          </h1>
          <p className="text-2xl md:text-3xl text-purple-700 font-semibold">
            Adik Tersayang 💕
          </p>
        </div>

        {/* Photo Section */}
        <div className="relative">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img
              src="/key.jpeg"
              alt="Foto Adik"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 text-4xl animate-spin">
            ✨
          </div>
          <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce">
            💖
          </div>
        </div>

        {/* Beautiful Smooth Cake Animation */}
        <div className="relative">
          <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-4 border-pink-200 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-6 mb-4">
                  <h2 className="text-2xl font-bold text-pink-700">
                    🎂 Membuat Kue Ulang Tahun 🎂
                  </h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <div
                      onClick={startCakeAnimation}
                      className="group cursor-pointer bg-green-100 hover:bg-green-200 rounded-lg px-3 py-1 shadow-sm hover:shadow-md transition-all duration-200 border border-green-300"
                      title="Ulang animasi"
                    >
                      <span className="text-green-700 group-hover:text-green-800 text-xs font-medium">
                        ▶ Ulang
                      </span>
                    </div>
                    <div
                      onClick={resetCake}
                      className="group cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-1 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-300"
                      title="Reset kue"
                    >
                      <span className="text-gray-700 group-hover:text-gray-800 text-xs font-medium">
                        ↻ Reset
                      </span>
                    </div>
                  </div>
                </div>

                {/* Beautiful Smooth 3D Cake */}
                <div
                  className="relative mx-auto flex flex-col items-center"
                  style={{ perspective: "1000px" }}
                >
                  {/* Candles - On Top */}
                  {cakeStep >= 7 && (
                    <div className="flex space-x-3 mb-2 z-20">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`relative transition-all duration-1000 ease-out transform ${
                            cakeStep >= 7
                              ? "scale-100 opacity-100 translate-y-0"
                              : "scale-0 opacity-0 translate-y-8"
                          }`}
                          style={{
                            animationDelay: `${i * 150}ms`,
                            transitionDelay: `${i * 150}ms`,
                          }}
                        >
                          {/* Candle Stick */}
                          <div
                            className={`w-2 h-8 rounded-t-full shadow-md transition-all duration-500 ${
                              [
                                "bg-red-400",
                                "bg-blue-400",
                                "bg-green-400",
                                "bg-yellow-400",
                                "bg-purple-400",
                              ][i]
                            }`}
                          ></div>
                          {/* Flame */}
                          {cakeStep >= 8 && (
                            <div
                              className={`absolute -top-3 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${
                                cakeStep >= 8
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-0"
                              }`}
                              style={{
                                transitionDelay: `${i * 100 + 800}ms`,
                              }}
                            >
                              <div className="relative">
                                <div className="absolute inset-0 w-3 h-4 bg-orange-300 rounded-full blur-sm opacity-50 animate-pulse"></div>
                                <div className="relative w-3 h-4 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-pulse"></div>
                                <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-3 bg-gradient-to-t from-orange-400 to-yellow-100 rounded-full"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Top Layer (Smallest) */}
                  {cakeStep >= 4 && (
                    <div
                      className={`relative w-32 h-16 mb-1 transition-all duration-1000 ease-out transform ${
                        cakeStep >= 4
                          ? "scale-100 opacity-100 translate-y-0"
                          : "scale-75 opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: "400ms" }}
                    >
                      {/* Cake Layer */}
                      <div className="w-full h-12 bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg shadow-lg relative overflow-hidden">
                        {/* Sponge texture */}
                        <div className="absolute inset-1 bg-yellow-100 rounded opacity-40"></div>
                        <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-200 rounded-full opacity-60"></div>
                        <div className="absolute top-3 right-3 w-1 h-1 bg-yellow-200 rounded-full opacity-60"></div>
                      </div>
                      {/* Frosting */}
                      {cakeStep >= 5 && (
                        <div
                          className={`absolute top-0 w-full h-4 bg-gradient-to-b from-pink-100 to-pink-200 rounded-t-lg transition-all duration-800 ease-out ${
                            cakeStep >= 5
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95"
                          }`}
                          style={{ transitionDelay: "600ms" }}
                        >
                          {/* Decorations */}
                          {cakeStep >= 6 && (
                            <>
                              <div
                                className={`absolute top-1 left-1/2 transform -translate-x-1/2 text-xs text-white font-bold transition-all duration-500 ${
                                  cakeStep >= 6
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-0"
                                }`}
                                style={{ transitionDelay: "1000ms" }}
                              >
                                HAPPY
                              </div>
                              <div
                                className={`absolute top-1 left-2 text-pink-500 text-xs transition-all duration-500 ${
                                  cakeStep >= 6
                                    ? "opacity-100 scale-100 rotate-0"
                                    : "opacity-0 scale-0 rotate-45"
                                }`}
                                style={{ transitionDelay: "1200ms" }}
                              >
                                🌸
                              </div>
                              <div
                                className={`absolute top-1 right-2 text-pink-500 text-xs transition-all duration-500 ${
                                  cakeStep >= 6
                                    ? "opacity-100 scale-100 rotate-0"
                                    : "opacity-0 scale-0 -rotate-45"
                                }`}
                                style={{ transitionDelay: "1400ms" }}
                              >
                                🌸
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Middle Layer */}
                  {cakeStep >= 3 && (
                    <div
                      className={`relative w-44 h-20 mb-1 transition-all duration-1000 ease-out transform ${
                        cakeStep >= 3
                          ? "scale-100 opacity-100 translate-y-0"
                          : "scale-75 opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: "200ms" }}
                    >
                      {/* Cake Layer */}
                      <div className="w-full h-16 bg-gradient-to-b from-purple-300 to-purple-400 rounded-lg shadow-lg relative overflow-hidden">
                        {/* Sponge texture */}
                        <div className="absolute inset-1 bg-yellow-100 rounded opacity-40"></div>
                        <div className="absolute top-2 left-3 w-2 h-2 bg-yellow-200 rounded-full opacity-60"></div>
                        <div className="absolute top-4 right-4 w-1 h-1 bg-yellow-200 rounded-full opacity-60"></div>
                        <div className="absolute top-6 left-6 w-1 h-1 bg-yellow-200 rounded-full opacity-60"></div>
                      </div>
                      {/* Frosting */}
                      {cakeStep >= 5 && (
                        <div
                          className={`absolute top-0 w-full h-4 bg-gradient-to-b from-purple-100 to-purple-200 rounded-t-lg transition-all duration-800 ease-out ${
                            cakeStep >= 5
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95"
                          }`}
                          style={{ transitionDelay: "700ms" }}
                        >
                          {/* Decorations */}
                          {cakeStep >= 6 && (
                            <>
                              <div
                                className={`absolute top-1 left-1/2 transform -translate-x-1/2 text-xs text-white font-bold transition-all duration-500 ${
                                  cakeStep >= 6
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-0"
                                }`}
                                style={{ transitionDelay: "1100ms" }}
                              >
                                BIRTHDAY
                              </div>
                              <div
                                className={`absolute top-1 left-4 text-purple-500 text-xs transition-all duration-500 ${
                                  cakeStep >= 6
                                    ? "opacity-100 scale-100 rotate-0"
                                    : "opacity-0 scale-0 rotate-45"
                                }`}
                                style={{ transitionDelay: "1300ms" }}
                              >
                                🌹
                              </div>
                              <div
                                className={`absolute top-1 right-4 text-purple-500 text-xs transition-all duration-500 ${
                                  cakeStep >= 6
                                    ? "opacity-100 scale-100 rotate-0"
                                    : "opacity-0 scale-0 -rotate-45"
                                }`}
                                style={{ transitionDelay: "1500ms" }}
                              >
                                🌹
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bottom Layer (Largest) */}
                  {cakeStep >= 2 && (
                    <div
                      className={`relative w-56 h-24 mb-2 transition-all duration-1000 ease-out transform ${
                        cakeStep >= 2
                          ? "scale-100 opacity-100 translate-y-0"
                          : "scale-75 opacity-0 translate-y-4"
                      }`}
                    >
                      {/* Cake Layer */}
                      <div className="w-full h-20 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-lg shadow-xl relative overflow-hidden">
                        {/* Sponge texture */}
                        <div className="absolute inset-1 bg-yellow-100 rounded opacity-40"></div>
                        <div className="absolute top-3 left-4 w-2 h-2 bg-yellow-200 rounded-full opacity-60"></div>
                        <div className="absolute top-5 right-5 w-1 h-1 bg-yellow-200 rounded-full opacity-60"></div>
                        <div className="absolute top-8 left-8 w-1 h-1 bg-yellow-200 rounded-full opacity-60"></div>
                        <div className="absolute top-6 right-12 w-1 h-1 bg-yellow-200 rounded-full opacity-60"></div>
                      </div>
                      {/* Frosting */}
                      {cakeStep >= 5 && (
                        <div
                          className={`absolute top-0 w-full h-4 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-t-lg transition-all duration-800 ease-out ${
                            cakeStep >= 5
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95"
                          }`}
                          style={{ transitionDelay: "800ms" }}
                        >
                          {/* Decorations */}
                          {cakeStep >= 6 && (
                            <>
                              <div
                                className={`absolute top-1 left-6 text-yellow-600 text-sm transition-all duration-500 ${
                                  cakeStep >= 6
                                    ? "opacity-100 scale-100 rotate-0"
                                    : "opacity-0 scale-0 rotate-45"
                                }`}
                                style={{ transitionDelay: "1400ms" }}
                              >
                                🌻
                              </div>
                              <div
                                className={`absolute top-1 right-6 text-yellow-600 text-sm transition-all duration-500 ${
                                  cakeStep >= 6
                                    ? "opacity-100 scale-100 rotate-0"
                                    : "opacity-0 scale-0 -rotate-45"
                                }`}
                                style={{ transitionDelay: "1600ms" }}
                              >
                                🌻
                              </div>
                              <div
                                className={`absolute top-1 left-20 text-yellow-600 text-xs transition-all duration-500 ${
                                  cakeStep >= 6
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-0"
                                }`}
                                style={{ transitionDelay: "1800ms" }}
                              >
                                🌼
                              </div>
                              <div
                                className={`absolute top-1 right-20 text-yellow-600 text-xs transition-all duration-500 ${
                                  cakeStep >= 6
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-0"
                                }`}
                                style={{ transitionDelay: "2000ms" }}
                              >
                                🌼
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Cake Plate - At Bottom */}
                  {cakeStep >= 1 && (
                    <div
                      className={`w-72 h-6 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-full shadow-xl border-2 border-gray-200 transition-all duration-1000 ease-out transform ${
                        cakeStep >= 1
                          ? "scale-100 opacity-100 translate-y-0"
                          : "scale-75 opacity-0 translate-y-2"
                      }`}
                    >
                      {/* Plate decorations */}
                      <div className="absolute inset-1 bg-gradient-to-r from-blue-50 to-pink-50 rounded-full opacity-30"></div>
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
                    </div>
                  )}

                  {/* Sparkles around cake */}
                  {cakeStep >= 8 && (
                    <>
                      <div
                        className={`absolute -top-12 -left-12 text-2xl transition-all duration-700 ${
                          cakeStep >= 8
                            ? "opacity-100 scale-100 animate-spin"
                            : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: "2200ms" }}
                      >
                        ✨
                      </div>
                      <div
                        className={`absolute -top-8 -right-12 text-xl transition-all duration-700 ${
                          cakeStep >= 8
                            ? "opacity-100 scale-100 animate-bounce"
                            : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: "2400ms" }}
                      >
                        ⭐
                      </div>
                      <div
                        className={`absolute top-20 -left-8 text-lg transition-all duration-700 ${
                          cakeStep >= 8
                            ? "opacity-100 scale-100 animate-pulse"
                            : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: "2600ms" }}
                      >
                        💫
                      </div>
                      <div
                        className={`absolute top-16 -right-8 text-xl transition-all duration-700 ${
                          cakeStep >= 8
                            ? "opacity-100 scale-100 animate-spin"
                            : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: "2800ms" }}
                      >
                        ✨
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-6">
                  <p className="text-lg text-pink-700 font-medium transition-all duration-300">
                    {cakeSteps[cakeStep]}
                  </p>
                  <div className="w-full bg-pink-200 rounded-full h-3 mt-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-pink-400 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                      style={{ width: `${(cakeStep / 8) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Realistic Book Animation */}
        <div
          className="relative w-full flex justify-center"
          style={{ perspective: "1500px" }}
        >
          <div className="relative">
            {!bookOpen ? (
              /* Closed Book - More Realistic */
              <div
                className={`relative cursor-pointer transition-all duration-800 ease-out transform ${
                  bookAnimating ? "scale-105 rotateY-10" : "hover:scale-102"
                }`}
                onClick={toggleBook}
              >
                {/* Book Shadow */}
                <div className="absolute inset-0 bg-black opacity-20 rounded-lg transform translate-x-2 translate-y-2 blur-lg"></div>

                {/* Book Cover - Responsive */}
                <div className="relative w-72 sm:w-80 md:w-80 h-54 sm:h-60 md:h-60 bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 rounded-lg shadow-2xl border-4 border-amber-900">
                  {/* Book Spine */}
                  <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 rounded-l-lg shadow-inner">
                    {/* Spine details */}
                    <div className="absolute top-4 left-1 w-6 h-1 bg-yellow-600 rounded opacity-60"></div>
                    <div className="absolute bottom-4 left-1 w-6 h-1 bg-yellow-600 rounded opacity-60"></div>
                  </div>

                  {/* Cover Content */}
                  <div className="flex items-center justify-center h-full pl-8">
                    <div className="text-center space-y-4 sm:space-y-6">
                      {/* Book Title */}
                      <div className="relative">
                        <h3 className="text-2xl sm:text-3xl font-bold text-yellow-100 font-serif tracking-wide">
                          Buku Ucapan
                        </h3>
                        <div className="text-base sm:text-lg text-yellow-200 font-serif mt-2">
                          Ulang Tahun
                        </div>
                      </div>

                      {/* Decorative Book Icon */}
                      <div className="relative">
                        <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 mx-auto animate-pulse" />
                        <div className="absolute -top-1 -right-1 text-yellow-300 text-sm animate-spin">
                          ✨
                        </div>
                      </div>

                      {/* Ornamental Lines */}
                      <div className="flex justify-center space-x-2">
                        <div className="w-10 sm:w-12 h-0.5 bg-yellow-400 rounded"></div>
                        <div className="w-5 sm:w-6 h-0.5 bg-yellow-400 rounded"></div>
                        <div className="w-10 sm:w-12 h-0.5 bg-yellow-400 rounded"></div>
                      </div>

                      <p className="text-yellow-200 text-sm font-serif italic">
                        Klik untuk membuka
                      </p>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-3 right-3 text-yellow-400 text-sm">
                    📖
                  </div>
                  <div className="absolute bottom-3 right-3 text-yellow-400 text-sm">
                    🎂
                  </div>
                  <div className="absolute top-3 left-12 text-yellow-400 text-sm">
                    ✨
                  </div>
                  <div className="absolute bottom-3 left-12 text-yellow-400 text-sm">
                    🌟
                  </div>

                  {/* Book Texture */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-600 to-transparent opacity-20 rounded-lg pointer-events-none"></div>

                  {/* Opening Glow */}
                  {bookAnimating && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 opacity-40 animate-pulse rounded-lg"></div>
                  )}
                </div>
              </div>
            ) : (
              /* Open Book - More Realistic */
              <div
                className={`relative transition-all duration-1000 ease-out transform ${
                  bookAnimating ? "scale-95 rotateX-5" : "scale-100"
                }`}
              >
                {/* Book Shadow */}
                <div className="absolute inset-0 bg-black opacity-15 rounded-lg transform translate-y-4 blur-xl"></div>

                {/* Open Book Base - Responsive */}
                <div className="relative w-[90vw] max-w-[700px] h-[350px] sm:h-[400px] md:h-[450px] bg-gradient-to-r from-cream-100 to-cream-50 rounded-lg shadow-2xl border-4 border-amber-200 overflow-hidden">
                  {/* Book Binding in Center */}
                  <div className="absolute left-1/2 top-0 w-6 h-full bg-gradient-to-b from-amber-600 via-amber-700 to-amber-800 transform -translate-x-1/2 z-30 shadow-lg">
                    {/* Binding stitches */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-amber-900 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-amber-900 rounded"></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-amber-900 rounded"></div>
                  </div>

                  {/* Binding Shadow */}
                  <div className="absolute left-1/2 top-0 w-16 h-full bg-black opacity-10 transform -translate-x-1/2 z-20 blur-sm"></div>

                  {/* Left Page */}
                  <div
                    className={`absolute left-0 top-0 w-1/2 h-full transition-all duration-600 ease-in-out z-10 ${
                      pageFlipping
                        ? "transform scale-98 shadow-2xl"
                        : "transform scale-100"
                    }`}
                  >
                    <div className="w-full h-full p-4 sm:p-6 md:p-10 bg-gradient-to-br from-cream-50 to-cream-100 rounded-l-lg relative">
                      {/* Page Lines */}
                      <div className="absolute left-8 sm:left-12 top-0 w-px h-full bg-red-200 opacity-30"></div>
                      <div className="absolute left-0 top-12 sm:top-16 right-0 h-px bg-blue-200 opacity-20"></div>
                      <div className="absolute left-0 bottom-12 sm:bottom-16 right-0 h-px bg-blue-200 opacity-20"></div>

                      <div className="h-full flex flex-col justify-between relative z-10">
                        <div>
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-4 sm:mb-6 font-serif border-b-2 border-slate-200 pb-2">
                            {wishes[currentPage]?.title}
                          </h4>

                          <div className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 text-center">
                            {wishes[currentPage]?.decoration}
                          </div>

                          {/* Decorative Quote Box */}
                          <div className="border-l-4 border-amber-400 bg-amber-50 p-3 sm:p-4 rounded-r-lg shadow-sm">
                            <div className="text-center text-amber-700 text-sm italic font-serif">
                              "Untuk keyong jenong"
                            </div>
                          </div>
                        </div>

                        {/* Page Number */}
                        <div className="text-center">
                          <div className="text-xs text-gray-400 font-serif">
                            {currentPage * 2 + 1}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Page */}
                  <div
                    className={`absolute right-0 top-0 w-1/2 h-full transition-all duration-600 ease-in-out z-10 ${
                      pageFlipping
                        ? "transform scale-98 shadow-2xl"
                        : "transform scale-100"
                    }`}
                  >
                    <div className="w-full h-full p-4 sm:p-6 md:p-10 bg-gradient-to-bl from-cream-50 to-cream-100 rounded-r-lg relative">
                      {/* Page Lines */}
                      <div className="absolute right-8 sm:right-12 top-0 w-px h-full bg-red-200 opacity-30"></div>
                      <div className="absolute left-0 top-12 sm:top-16 right-0 h-px bg-blue-200 opacity-20"></div>
                      <div className="absolute left-0 bottom-12 sm:bottom-16 right-0 h-px bg-blue-200 opacity-20"></div>

                      <div className="h-full flex flex-col justify-between relative z-10">
                        <div>
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-serif mb-6 sm:mb-8 text-justify">
                            {wishes[currentPage]?.message}
                          </p>

                          {/* Decorative Hearts */}
                          <div className="flex justify-center space-x-2 my-6 sm:my-8">
                            {[...Array(3)].map((_, i) => (
                              <Heart
                                key={i}
                                className="w-4 h-4 text-pink-400 animate-pulse"
                                style={{ animationDelay: `${i * 0.3}s` }}
                              />
                            ))}
                          </div>

                          {/* Signature */}
                          <div className="mt-8 sm:mt-12 text-right border-t border-slate-200 pt-4">
                            <p className="text-sm text-slate-500 italic font-serif mb-1">
                              Dengan sayang,
                            </p>
                            <p className="text-base sm:text-lg text-slate-700 font-bold font-serif">
                              Kakak 💕
                            </p>
                          </div>
                        </div>

                        {/* Page Number and Info */}
                        <div className="text-right">
                          <div className="text-xs text-gray-400 font-serif mb-2">
                            Halaman {currentPage + 1} dari {wishes.length}
                          </div>
                          <div className="text-xs text-gray-400 font-serif">
                            {currentPage * 2 + 2}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page Flip Effect */}
                  {pageFlipping && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse z-40"></div>
                  )}

                  {/* Paper Texture */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-50 to-transparent opacity-30 pointer-events-none"></div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                  {/* Previous Page */}
                  {currentPage > 0 && !pageFlipping && (
                    <div
                      onClick={() => changePage("prev")}
                      className="group cursor-pointer bg-amber-100 hover:bg-amber-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 border-2 border-amber-300"
                      title="Halaman sebelumnya"
                    >
                      <span className="text-amber-700 group-hover:text-amber-900 text-lg font-bold">
                        ‹
                      </span>
                    </div>
                  )}

                  {/* Page Info */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-gray-200">
                    <span className="text-xs text-gray-600 font-serif">
                      {currentPage + 1} dari {wishes.length}
                    </span>
                  </div>

                  {/* Next Page */}
                  {currentPage < wishes.length - 1 && !pageFlipping && (
                    <div
                      onClick={() => changePage("next")}
                      className="group cursor-pointer bg-amber-100 hover:bg-amber-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 border-2 border-amber-300"
                      title="Halaman selanjutnya"
                    >
                      <span className="text-amber-700 group-hover:text-amber-900 text-lg font-bold">
                        ›
                      </span>
                    </div>
                  )}

                  {/* Close Book */}
                  <div
                    onClick={toggleBook}
                    className="group cursor-pointer bg-red-100 hover:bg-red-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 border-2 border-red-300 ml-2"
                    title="Tutup buku"
                  >
                    <span className="text-red-700 group-hover:text-red-900 text-sm font-bold">
                      ✕
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center space-y-2 my-7 max-w-2xl">
          <p className="text-xl text-purple-700 font-medium">
            Selamat ulang tahun adik tersayang! 🎉
          </p>
          <p className="text-lg text-purple-600">
            Semoga hari spesialmu penuh kebahagiaan dan berkah 💕
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 text-red-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
