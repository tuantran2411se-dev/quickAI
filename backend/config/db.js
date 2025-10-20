import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

// Cấu hình dotenv để load các biến môi trường
dotenv.config();
// Khởi tạo kết nối database với Neon sử dụng DATABASE_URL từ biến môi trường
const sql = neon(process.env.DATABASE_URL);

export default sql;
