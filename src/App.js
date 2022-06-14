import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { Navbar, Sidebar, ThemeSettings, Footer } from "./components";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";
import { useStatContext } from "./context/ContextProvider";

function App() {
  const { activeMenu } = useStatContext();
  // const activeMenu = true;
  // console.log(activeMenu);

  return (
    <div>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="fixed bg-white w-72 sidebar dark:bg-secondary-dark-bg translateit">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg translateit">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "translateit dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full"
                : "dark:bg-main-bg bg-main-bg min0-h-screen w-full flex-2"
            }
          >
            <div className="fixed w-full translateit md:static bg-main-bg dark:bg-main-dark-bg navbar">
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
