"use client";

import { cn } from "../lib/utils";

export default function PreWeddingPhotos() {
  const photos = [
    "/1752327445417.jpg",
    "/1752327458289.jpg",
    "/1752327461784.jpg",
  ];

  return (
    <section
      className={cn(
        "border-4 border-double border-yellow-600 p-4 rounded-lg",
        "bg-white/80 space-y-4",
        "font-['Times_New_Roman',_serif]"
      )}
      style={{
        boxShadow: `inset 0 0 10px rgba(0,0,0,0.4), 0 0 10px rgba(0,0,0,0.5)`,
      }}
    >
      <h2
        className="text-xl text-center font-bold text-yellow-800"
        style={{ textShadow: "2px 2px 0 #FFF8DC" }}
      >
        📸 前撮り写真 📸
      </h2>
      <div className="flex justify-center space-x-2">
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Pre wedding ${i + 1}`}
            className="w-32 h-32 object-cover border-4 border-solid border-yellow-700 shadow"
            style={{ filter: "sepia(0.5)" }}
          />
        ))}
      </div>
    </section>
  );
}
