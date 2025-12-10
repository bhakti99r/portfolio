import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Example = () => {
  const navigate = useNavigate();
  return (
    <section style={{ padding: "60px", textAlign: "center" }}>
      <motion.h1
        initial={{ opacity: 0, y: -30 }} // starting state
        animate={{ opacity: 1, y: 0 }} // final state
        transition={{ duration: 0.8 }} // timing
        style={{ fontSize: "48px", marginBottom: "20px", color: "#d5d5d5" }}
      >
        Hi, I'm Bhakti 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ fontSize: "20px", color: "rgb(175 163 163)" }}
      >
        I build modern React websites with smooth animations.
      </motion.p>

      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.1 }} // hover effect
        whileTap={{ scale: 0.95 }} // click effect
        style={{
          padding: "12px 28px",
          marginTop: "30px",
          border: "none",
          background: "black",
          color: "white",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/portfolio")}
      >
        See My Work
      </motion.button>
    </section>
  );
};

export default Example;
