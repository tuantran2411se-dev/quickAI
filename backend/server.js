import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sql from "./config/db.js";

dotenv.config();

// Khởi tạo ứng dụng Express
const app = express();

// Sử dụng middleware CORS để cho phép các request từ domain khác
app.use(cors());

// Sử dụng middleware để parse JSON từ request body
app.use(express.json());

// Tạo bảng creations trong database
const createTable = async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS creations (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        prompt TEXT NOT NULL,
        content TEXT NOT NULL,
        type TEXT NOT NULL,
        publish BOOLEAN DEFAULT false,
        likes TEXT[] DEFAULT '{}',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `;
    console.log("Bảng creations đã được tạo thành công");
  } catch (error) {
    console.error("Lỗi khi tạo bảng creations:", error);
  }
};

// Gọi hàm tạo bảng khi khởi động server
createTable();

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
