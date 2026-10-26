import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div>
     <header>
       <h1>Welcome to Kissena Baked Goods</h1>
    <p>Financial statements</p>
       </header>
    </div>

  );
}