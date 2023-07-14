import React from 'react'

function PolitykaPrywatnosci() {
  return (
    <main className="flex flex-col p-4 pt-24 lg:p-16 gap-4">
        <h1 className="font-hussar text-5xl lg:text-6xl my-10">Polityka Prywatności</h1>
        <p className='text-xl'>Niniejsza polityka prywatności określa zasady zbierania, przetwarzania i ochrony danych osobowych przez stronę internetową Lunaris Web. Prosimy o zapoznanie się z nią przed korzystaniem z naszej strony internetowej lub udostępnieniem nam swoich danych osobowych.</p>
      <ul className='mt-10 flex flex-col gap-10'>

        <li className='mt-4'>
          <h2 className="font-hussar text-3xl">Informacje identyfikacyjne</h2>
          <ul className='flex flex-col gap-[3px]'>
            <li>Administrator Danych:</li>
            <li>Daniel Kowalski</li>
            <li>ul. Szczecińska 20a/2 40-139 Katowice</li>
            <li><a href="mailto:lunarisweb.pl@gmail.com">lunarisweb.pl@gmail.com</a></li>
            <li><a href="tel:+48664447556">+48 664 447 556</a></li>
          </ul>
        </li>

        <li className='mt-4'>
          <h2 className="font-hussar text-3xl">Rodzaj zbieranych danych</h2>
          <p>Przy korzystaniu z naszej strony internetowej, możemy zbierać następujące dane osobowe:</p>
          <ul className='flex flex-col gap-[3px] ml-4 mt-4'>
            <li>e-mail</li>
            <li>imie i nazwisko</li>
            <li>numer telefonu</li>
          </ul>
        </li>

        <li className='mt-4'>
          <h2 className="font-hussar text-3xl">Cel zbierania danych</h2>
          <p>Dane osobowe są zbierane w celu wysyłania informacji handlowych oraz nowości związanych z firmą Lunaris Web oraz branżą, w której działamy. Może to obejmować newslettery, aktualizacje produktów, promocje, zaproszenia na wydarzenia itp.</p>
        </li>

        <li className='mt-4'>
          <h2 className="font-hussar text-3xl">Podstawa prawna przetwarzania danych</h2>
          <p>Podstawą prawną przetwarzania danych osobowych jest zgoda użytkownika. Poprzez dobrowolne podanie danych osobowych, użytkownik wyraża zgodę na przetwarzanie swoich danych osobowych zgodnie z niniejszą polityką prywatności.</p>
        </li>
        
        <li className='mt-4'>
          <h2 className="font-hussar text-3xl">Udostępnianie danych osobowych</h2>
          <p>Dane osobowe użytkowników nie będą udostępniane innym podmiotom bez uprzedniej zgody. Wyjątkiem mogą być sytuacje, w których przekazanie danych jest wymagane przez przepisy prawa.</p>
        </li>

        <li className='mt-4'>
          <h2 className="font-hussar text-3xl">Pliki cookie i technologie śledzenia</h2>
          <p>Nasza strona internetowa może wykorzystywać pliki cookie w celu zapewnienia lepszej jakości usług oraz analizy statystyk korzystania z witryny. Pliki cookie są małymi plikami tekstowymi przechowywanymi na urządzeniu użytkownika. Użytkownik ma możliwość zarządzania ustawieniami dotyczącymi plików cookie w ustawieniach przeglądarki.</p>
        </li>

        <li className='mt-4'>
          <h2 className="font-hussar text-3xl">Bezpieczeństwo danych</h2>
          <p>Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed nieuprawnionym dostępem, utratą, zmianą lub zniszczeniem. Dostęp do danych osobowych mają jedynie upoważnieni pracownicy Lunaris Web, którzy są zobowiązani do zachowania poufności tych informacji.</p>
        </li>

        <li className='mt-4'>
          <h2 className="font-hussar text-3xl">Prawa użytkowników</h2>
          <p>Użytkownicy mają prawo do dostępu do swoich danych osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz wycofania zgody na przetwarzanie danych. Aby skorzystać z tych praw lub zgłosić pytania lub uwagi dotyczące polityki prywatności, prosimy o kontakt na adres e-mail: <a href="mailto:lunarisweb.pl@gmail.com">lunarisweb.pl@gmail.com</a> .</p>
        </li>

        <li className='mt-4'>
          <h2 className="font-hussar text-3xl">Okres przechowywania danych</h2>
          <p>Dane osobowe będą przechowywane przez okres niezbędny do osiągnięcia celów, dla których zostały zebrane, chyba że użytkownik wycofa zgodę wcześniej.</p>
        </li>

        <li className='mt-4'>
          <h2 className="font-hussar text-3xl">Zmiany w polityce prywatności</h2>
          <p>Zastrzegamy sobie prawo do wprowadzenia zmian w niniejszej polityce prywatności w dowolnym momencie. Aktualizacje polityki prywatności zostaną opublikowane na naszej stronie internetowej wraz z datą wprowadzenia zmian.</p>
        </li>

        <p>Dziękujemy za zapoznanie się z naszą polityką prywatności.</p>

      </ul>
    </main>
  )
}

export default PolitykaPrywatnosci
