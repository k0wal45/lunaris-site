import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main class="hero min-h-[80vh] bg-base-100">
      <section class="hero-content text-center">
        <div class="max-w-md">
          <h1 className="font-hussar text-primary text-[10rem]">404</h1>
          <h2 class="text-5xl font-bold">Ooops! Nie tędy</h2>
          <p class="py-6">Coś poszło nie tak, przekierowało cię lub wszedłeś na nie istniejącą zakładkę.</p>
          <Link to='/' class="btn btn-primary text-white">Wróć na stronę główną</Link>
        </div>
      </section>
    </main>
  )
}

export default NotFound
