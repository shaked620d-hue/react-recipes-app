import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RecipeDetails from "./pages/RecipeDetails";
import RecipesList from "./pages/RecipesList";
import ControlledLogin from "./pages/ControlledLogin";
import UncontrolledLogin from "./pages/UncontrolledLogin";
import RhfLogin from "./pages/RhfLogin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="recipes" element={<RecipesList />} />
        <Route path="login/controlled" element={<ControlledLogin />} />
        <Route path="login/uncontrolled" element={<UncontrolledLogin />} />
        <Route path="login/rhf" element={<RhfLogin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
