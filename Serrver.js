const express = require('express'); 
const cors = require('cors'); 
const app = express(); 
const PORT = 5000; 
app.use(cors()); 
app.use(express.json()); 
app.post('/api/user', (req, res) => { 
const { name, email } = req.body; 
console.log(`User 
Info 
Received: 
${name} 
${email}`); 
res.status(200).json({ message: "User info received successfully" }); 
}); 
app.listen(PORT, () => { 
console.log(`Server running at http://localhost:${PORT}`); 
}); 
#style.css 
body { 
Chandigarh Engineering College Jhanjeri 
Mohali-140307 
Department of Computer Science & Engineering 
font-family: Arial, sans-serif; 
background-color: #f5f5f5; 
margin: 0; 
padding: 0; 
} 
.chat-container { 
display: none; 
flex-direction: column; 
justify-content: space-between; 
width: 
height: 
400px; 
600px; 
margin: 50px auto; 
background-color: white; 
border-radius: 10px; 
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
overflow: hidden; 
} 
.chat-header { 
Chandigarh Engineering College Jhanjeri 
Mohali-140307 
Department of Computer Science & Engineering 
background-color: #4a154b; 
color: white; 
padding: 
15px; 
text-align: center; 
font-size: 18px; 
} 
.chat-messages { 
flex-grow: 
1; 
padding: 15px; 
overflow-y: auto; 
scroll-behavior: smooth; 
} 
.chat-input 
display: 
{ 
flex; 
padding: 10px; 
border-top: 1px solid #ddd; 
} 
.chat-input input { 
flex-grow: 1; 
padding: 10px; 
Chandigarh Engineering College Jhanjeri 
Mohali-140307 
Department of Computer Science & Engineering 
border: 1px solid #ccc; 
border-radius: 
20px; 
margin-right: 10px; 
} 
.chat-input 
button 
{ 
background-color: #4a154b; 
color: white; 
border: 
none; 
padding: 10px 15px; 
border-radius: 20px; 
cursor: pointer; 
} 
.message { 
margin-bottom: 10px; 
max-width: 
padding: 
80%; 
10px; 
border-radius: 10px; 
} 
.bot-message 
Chandigarh Engineering College Jhanjeri 
Mohali-140307 
Department of Computer Science & Engineering 
{ 
background-color: #eee; 
align-self: flex-start; 
} 
.user-message { 
background-color: #dcf8c6; 
align-self: flex-end; 
text-align: right; 
} 
.quick-replies { 
display: flex; 
flex-wrap: wrap; 
gap: 
5px; 
padding: 10px; 
} 
.quick-reply { 
background-color: #e0e0e0; 
padding: 8px 12px; 
border-radius: 20px; 
cursor: pointer; 
} 
#user-info-form { 
position: absolute; 
top: 50%; 
left: 50%; 
Chandigarh Engineering College Jhanjeri 
Mohali-140307 
Department of Computer Science & Engineering 
transform: translate(-50%, -50%); 
background-color: 
padding: 30px; 
border-radius: 10px; 
white; 
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
width: 300px; 
text-align: center; 
} 
#user-info-form input { 
width: 
padding:  
margin: 
100%; 
10px; 
10px 
border-radius: 5px; 
0; 
border: 1px solid #ccc; 
} 
#user-info-form 
Chandigarh Engineering College Jhanjeri 
Mohali-140307 
Department of Computer Science & Engineering 
button 
padding: 
10px 
{ 
20px; 
background-color: #4a154b; 
color: white; 
border: 
none; 
border-radius: 5px; 
cursor: pointer;
