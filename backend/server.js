import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Khởi tạo ứng dụng Express
const app = express();

// Sử dụng middleware CORS để cho phép các request từ domain khác
app.use(cors());

// Sử dụng middleware để parse JSON từ request body
app.use(express.json());

// Route GET cho trang chủ
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Cấu hình cổng server từ biến môi trường hoặc mặc định là 3000
const PORT = process.env.PORT || 3000;

// Khởi động server và lắng nghe trên cổng đã cấu hình
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
