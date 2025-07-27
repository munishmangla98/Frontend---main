// import React from "react";
import {
  FaBolt,
  FaCogs,
  FaLightbulb,
  FaCheckCircle,
  FaFileAlt,
  FaUsers,
  FaRobot,
} from "react-icons/fa";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-xl container mx-auto px-6 md:px-20 py-20"
    >
      <div>
        <h1 className="text-5xl font-extrabold text-blue-950 mb-10 flex items-center gap-3">
          <FaBolt className="text-yellow-400 text-4xl" />
          <span>What Is Mang Tech Talk?</span>
        </h1>

        <p className="text-lg text-gray-700 mb-12 leading-8">
          <strong className="text-blue-900">Mnag Tech Talk</strong> is not just a tech blog—it's a future-facing space
          where ideas, code, and creators collide. We talk systems, scale, strategy—and everything in between. Whether you’re
          a dev, designer, PM, AI researcher, or just curious about what's next, this is your playground for sharp insights,
          deep tech, and smart execution.
        </p>

        <div className="space-y-12 text-gray-800">
          <div className="flex items-start gap-5">
            <FaCogs className="text-green-700 text-3xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-1">
                Deep Tech, Real Talk
              </h2>
              <p className="leading-relaxed">
                We go beyond buzzwords—diving into architectures, performance tradeoffs, product scaling, and applied AI/ML
                with clarity and edge. If you're tired of shallow content, you're in the right place.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaLightbulb className="text-yellow-600 text-3xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-yellow-700 mb-1">
                Ideas That Ship
              </h2>
              <p className="leading-relaxed">
                We don't just think—we build. Mnag Tech Talk is about ideas that translate into impact. Product innovation,
                feature design, and shipping fast (without breaking everything).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaCheckCircle className="text-green-600 text-3xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-1">
                Craft Over Chaos
              </h2>
              <p className="leading-relaxed">
                Engineering excellence is non-negotiable. From clean code to CI/CD, every post and project reflects a
                commitment to quality, clarity, and craftsmanship.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaFileAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-1">
                Insights You Can Act On
              </h2>
              <p className="leading-relaxed">
                No fluff. Every insight shared is built for action. Whether you're building your first SaaS app or scaling a
                research-grade AI system—we’ve got frameworks, not just opinions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaUsers className="text-purple-600 text-3xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-purple-700 mb-1">
                Built for Builders
              </h2>
              <p className="leading-relaxed">
                Mnag Tech Talk is a space for the makers, the tinkerers, the leaders, and the curious minds who want more than
                surface-level content. We celebrate bold thinking and smarter execution.
              </p>
            </div>
          </div>
        </div>

        {/* AI & Future Section */}
        <div className="mt-20 bg-gray-100 p-8 rounded-xl shadow-md">
          <div className="flex items-start gap-5">
            <FaRobot className="text-gray-700 text-4xl mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                🤖 Future-Proof Thinking
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                We embrace AI, automation, and emerging tech—not as hype, but as tools that unlock velocity. Mnag Tech Talk
                explores how to leverage AI for ideation, engineering, productivity, and creative workflows—while keeping
                the human in the loop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
