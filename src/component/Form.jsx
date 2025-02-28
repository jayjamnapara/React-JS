import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alldata, setAllData] = useState([]);

  const SaveData = () => {
    let obj = {
      fname,
      lname,
      number,
      email,
      password,
    };

    setAllData([...alldata, obj]);

    setFname("");
    setLname("");
    setNumber("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    console.log(alldata);
  }, [alldata]);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(to right, #3b82f6, #6366f1)",
      padding: "24px",
    },
    formContainer: {
      background: "white",
      padding: "32px",
      borderRadius: "16px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "400px",
      transform: "scale(1)",
      transition: "transform 0.3s",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      transition: "box-shadow 0.3s",
    },
    button: {
      width: "100%",
      backgroundColor: "#6366f1",
      color: "white",
      padding: "12px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    userCard: {
      background: "white",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      marginBottom: "8px",
      transform: "scale(1)",
      transition: "transform 0.3s",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "16px",
      color: "#4f46e5",
    },
  };

  return (
    <div style={styles.container}>
      <motion.div 
        style={styles.formContainer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={styles.title}>Register</h2>
        <div>
          <input type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} style={styles.input} />
          <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} style={styles.input} />
          <input type="number" placeholder="Mobile Number" value={number} onChange={(e) => setNumber(e.target.value)} style={styles.input} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
          <motion.button
            onClick={SaveData}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.button}
          >
            Register
          </motion.button>
        </div>
      </motion.div>

      <div style={{ marginTop: "24px", width: "100%", maxWidth: "400px" }}>
        <h3 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", color: "white" }}>Registered Users</h3>
        <AnimatePresence>
          {alldata.map((el, i) => (
            <motion.div
              key={i}
              style={styles.userCard}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p><strong>Name:</strong> {el.fname} {el.lname}</p>
              <p><strong>Phone:</strong> {el.number}</p>
              <p><strong>Email:</strong> {el.email}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Form;
