import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BarberHero } from "./barber-hero.jsx";

createRoot(document.getElementById("hero-root")).render(
  <StrictMode>
    <BarberHero />
  </StrictMode>,
);
