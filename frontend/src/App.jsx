import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ReviewResume from "./pages/ReviewResume";
import RemoveObject from "./pages/RemoveObject";
import RemoveBackground from "./pages/RemoveBackground";
import GenerateImages from "./pages/GenerateImages";
import BlogTitles from "./pages/BlogTitles";
import WriteArticle from "./pages/WriteArticle";
import Community from "./pages/Community";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
