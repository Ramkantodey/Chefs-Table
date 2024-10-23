import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";

const App = () => {
  return (
    <div className=" w-11/12 mx-auto px-4">
      {/* Header Section */}
      <Header></Header>
      {/* Banner Section*/}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;