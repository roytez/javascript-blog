# grecce-rent

3. Pod tagiem <h2> w sekcji skills wstaw znacznik <ul> (bez klasy), a wewnątrz niego znacznik <li> z dwiema klasami: skill i left.


4. Wewnątrz <li> wstaw <div> z klasą skill-image. W tym divie umieść jeden z przygotowanych obrazków (jeżeli nie pamiętasz, jak wstawia się obrazki, wróć do submodułu "Podstawowe tagi HTML").


5. Pod tym divem wstaw kolejny <div>, tym razem o klasie skill-description. Wewnątrz umieść nagłówek poziomu trzeciego z klasą skill-title i dowolną treścią. Będzie to tytuł pierwszego pudełka z tekstem. Pod nagłówkiem wstaw akapit tekstu z dowolną treścią.


6. Analogicznie stwórz dwa kolejne znaczniki <li> z taką samą zawartością, jeden pod drugim. Podmień w nich zdjęcia i treści. Dodatkowo, drugiemu znacznikowi <li> zmień klasę z left na right.

Podgląd nie wygląda jeszcze imponująco - obrazki są za duże i źle wypozycjonowane. Zaraz to poprawimy.

7. W pliku CSS dodaj "nagłówek" /* Skills */. Poniżej stwórz selektor wybierający tag <ul> wewnątrz tej sekcji i zresetuj mu domyślne style za pomocą list-style-type: none;, margin: 0; oraz padding: 0;.


Następnie stwórz selektor wybierający znacznik <li> wewnątrz tej sekcji (.skills ul li) i nadaj mu position: relative;.

8. Zajmijmy się teraz stylowaniem obrazków. Przypomnij sobie, jaką klasę miały divy, w które owinięte były w HTML tagi <img>, i stwórz dla nich selektor w CSS. Nadaj im position: absolute;, width: 50%;, height: 100%; oraz overflow: hidden;.


9. Odśwież podgląd. Obrazki wyglądają już lepiej, ale fotografie są przycięte i źle wykadrowane. Aby to naprawić, dodaj selektor wybierający wszystkie tagi <img> w elementach o klasie skill-image i nadaj im width: 100%;, height: 100%; oraz object-fit: cover;. W ten sposób dopasowaliśmy obrazki do kontenerów.




html Logo

<div class="blog">
  <div class="container">
    <h1 class="logo">Greece rent</h1>
    <main class="wrapper">



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
