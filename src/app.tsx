import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createSignal } from "solid-js";
import "./app.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = createSignal(false);

  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <div class="min-h-screen">
            <Navbar />
            <Sidebar
              isOpen={isSidebarOpen()}
              onToggle={() => setIsSidebarOpen(!isSidebarOpen())}
              onClose={() => setIsSidebarOpen(false)}
            />
            <main class="p-4">{props.children}</main>
          </div>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
