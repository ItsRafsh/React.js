import {Routes, Route} from "react-router"
import NotFoundPage from "./pages/NotFoundPage";

import FormPage from "./pages/FormPage";
import FormHomework from "./pages/FormHomework";
import RHFQnA from "./pages/RHFQnA";
import RHFPage from "./pages/RHFPage";



// Component
function App() {
  return (
    <>
    {/* jika ada HeaderCustom, ini akan tampil di semua router URL nya */}
    <Routes>

      <Route path="/form" element={<FormPage/>} />
      <Route path="/rhf" element={<RHFPage/>} />
      <Route path="/formhomework" element={<FormHomework/>} />
      <Route path="/qnapage" element={<RHFQnA/>} />               {/* kondisional female hamil atau tidak */}

      <Route path="*" element={<NotFoundPage/>} />  {/* catch all*/}
    </Routes>
    </>
  );
}
export default App;
