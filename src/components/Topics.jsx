import React from "react";
import topicsData from "../data/topicsData";

const Topics = () => {
  return (
    <section className="py-12  text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-8">Tech Talk Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topicsData.map((topic, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/30 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{topic.title}</h3>
              <p className="text-sm text-gray-300">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
