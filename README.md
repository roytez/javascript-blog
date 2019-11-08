# grecce-rent

1.7. Komponent: animowany przycisk
Oba nagłówki w sekcji Splash są gotowe, ale czegoś jeszcze brakuje. Musimy ostylować przycisk! Nie róbmy tego jednak w pośpiechu – przyjrzyjmy się na spokojnie projektowi i sprawdźmy, jak sprytnie możemy ostylować wiele elementów za jednym zamachem. Umiejętność pisania oszczędnego, minimalistycznego kodu i inteligentne wykorzystanie klas pomocniczych to wyróżniki dobrego developera – warto więc uczyć się myśleć komponentowo!

Jak widzisz, w projekcie mamy kilka rodzajów przycisków:


Możesz w tym momencie zapytać: czy ten ostatni element na obrazku powyżej również jest przyciskiem, skoro wygląda jak link? Jak najbardziej – większość przycisków, które stworzymy, to właśnie linki (<a>), ostylowane w odpowiedni sposób. Nasze przyciski i linki to różne warianty tego samego elementu. Każdy z nich będzie miał dwie klasy – jedną ogólną, zawierającą style współdzielone z innymi elementami, oraz jedną szczegółową, odpowiedzialną za indywidualne cechy danego przycisku.

Nasza klasa ogólna to btn. Stwórz dla niej selektor w sekcji globalnych stylów Twojego pliku CSS i nadaj mu:

display: inline-block;
minimalną szerokość (min-width) równą 160px
margin: 24px auto 0 auto;
padding: 16px;
border-radius: 5px;
font-family takie, jak reszta tekstu na Twojej stronie
font-size - w projekcie jest to 16px
text-align: center;
text-decoration: none;
cursor: pointer;
Ponadto chcemy, aby domyślny przycisk miał dwupikselową ciągłą ramkę. Dodajmy zatem:

border-width: 2px;
border-style: solid;
Prawie dobrze! Jak widzisz w podglądzie, powstał "generyczny", granatowy przycisk. Tak będzie wyglądał każdy button, któremu nadasz tylko klasę ogólną btn. Aby nadać przyciskowi indywidualny charakter, ostylujmy jego klasę szczegółową.

Pod selektorem .btn dodaj selektor .btn-one i nadaj mu i nadaj mu dowolny border-color i color (w projekcie mają one kolor biały).

Udało się!

slider
<div id="main-slider" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="w-100" src="https://i.postimg.cc/j58JcVCw/MB.jpg" alt="image">
            <div class="carousel-caption">
                <h1 class="logo">Greece rent</h1>
                <h4></h4>
                <h3></h3>
            </div>
        </div>
    <div class="carousel-item">
        <img class="w-100" src="https://i.postimg.cc/Xq37gRH6/MW1.jpg" alt="image">
        <div class="carousel-caption">
                <h1 class="logo">Greece rent</h1>
                <h4></h4>
                <h3></h3>
        </div>
    </div>
    <div class="carousel-item">
        <img class="w-100" src="https://i.postimg.cc/TwtHkmQ2/MW3.jpg" alt="image">
        <div class="carousel-caption">
                <h1 class="logo">Greece rent</h1>
                <h4></h4>
                <h3></h3>
        </div>
    </div>
</div>
    <a class="carousel-control-prev" href="#main-slider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#main-slider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
