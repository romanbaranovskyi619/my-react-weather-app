import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <Header />

      <main>
        <AppRouter />
      </main>

      <Footer />
    </>
  );
}

export default App;