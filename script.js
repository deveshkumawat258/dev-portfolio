*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
  transition: background 0.3s, color 0.3s;
}

header {
  background: #4b0082;
  color: white;
  padding: 2rem;
  text-align: center;
  position: relative;
}

#toggle-mode {
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background: white;
  color: #4b0082;
  font-weight: bold;
  border-radius: 5px;
}

section {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}

h2 {
  margin-bottom: 1rem;
  color: #4b0082;
  font-size: 2rem;
}

.skill {
  margin-bottom: 1rem;
}

.skill p {
  margin-bottom: 5px;
}

.bar {
  width: 100%;
  background: #ddd;
  border-radius: 20px;
  overflow: hidden;
}

.bar div {
  height: 20px;
  background: #4b0082;
  color: white;
  text-align: right;
  padding-right: 5px;
  line-height: 20px;
  border-radius: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea, button {
  padding: 10px;
  font-size: 1rem;
}

button {
  background: #4b0082;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #32105e;
}

footer {
  text-align: center;
  padding: 1rem;
  background: #4b0082;
  color: white;
}

.dark-mode {
  background-color: #121212;
  color: #f4f4f4;
}

.dark-mode header,
.dark-mode footer {
  background-color: #000000;
  color: white;
}

.dark-mode .bar div {
  background: #bb86fc;
}

/* Scroll animation */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
