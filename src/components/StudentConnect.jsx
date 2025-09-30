import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Send } from "lucide-react";

export default function StudentConnect() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Rahul Verma",
      content: "Excited to share my first project in React! 🚀",
      image: "",
      likes: 3,
      comments: ["Awesome work!", "Keep it up!"],
    },
    {
      id: 2,
      name: "Anjali Singh",
      content: "Just cracked my internship at Google! 💼✨",
      image: "",
      likes: 10,
      comments: ["Congrats!", "Proud of you 👏"],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [commentText, setCommentText] = useState({});
  const [newImage, setNewImage] = useState("");

  const handlePost = () => {
    if (!newPost.trim() && !newImage) return;

    const newEntry = {
      id: Date.now(),
      name: "You",
      content: newPost,
      image: newImage,
      likes: 0,
      comments: [],
    };

    setPosts([newEntry, ...posts]);
    setNewPost("");
    setNewImage("");
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((p) =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  const handleComment = (id) => {
    if (!commentText[id]?.trim()) return;
    setPosts(
      posts.map((p) =>
        p.id === id
          ? { ...p, comments: [...p.comments, commentText[id]] }
          : p
      )
    );
    setCommentText({ ...commentText, [id]: "" });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">👥 Student Connect</h2>

      {/* Create Post */}
      <div className="bg-white shadow rounded-2xl p-4 mb-6">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full border rounded-lg p-2 mb-3 focus:ring focus:ring-indigo-200"
          rows="3"
        />
        <input
          type="text"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          placeholder="Optional image URL"
          className="w-full border rounded-lg p-2 mb-3 focus:ring focus:ring-indigo-200"
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handlePost}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
        >
          Post
        </motion.button>
      </div>

      {/* Posts Feed */}
      {posts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow rounded-2xl p-4 mb-6"
        >
          <h3 className="font-bold">{post.name}</h3>
          <p className="mt-2">{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="w-full mt-3 rounded-lg"
            />
          )}

          {/* Like & Comment Buttons */}
          <div className="flex items-center gap-6 mt-4 text-gray-600">
            <button
              onClick={() => handleLike(post.id)}
              className="flex items-center gap-1 hover:text-red-500"
            >
              <Heart className="w-5 h-5" /> {post.likes}
            </button>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-5 h-5" /> {post.comments.length}
            </span>
          </div>

          {/* Comments Section */}
          <div className="mt-4">
            {post.comments.map((c, i) => (
              <p
                key={i}
                className="text-sm text-gray-700 border-l-4 pl-2 border-gray-200 mb-1"
              >
                💬 {c}
              </p>
            ))}

            <div className="flex items-center gap-2 mt-2">
              <input
                type="text"
                value={commentText[post.id] || ""}
                onChange={(e) =>
                  setCommentText({ ...commentText, [post.id]: e.target.value })
                }
                placeholder="Write a comment..."
                className="flex-1 border rounded-lg p-2 text-sm focus:ring focus:ring-indigo-200"
              />
              <button
                onClick={() => handleComment(post.id)}
                className="text-indigo-600 hover:text-indigo-800"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
