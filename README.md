# grecce-rent

Kiedy przyjrzysz się wyglądowi tej i kolejnych sekcji, zauważysz, że pojawił się kolejny wspólny element - tytuły poszczególnych sekcji wyglądają tak samo. Jak już wspomnieliśmy, identyczne elementy staramy się stylować raz, zgodnie z zasadą DRY (Don’t Repeat Yourself). Dlatego też style dla nagłówka umieść w CSS w sekcji /* Global */, w kolejnej linii.

1. Dodaj selektor dla tego elementu (przypominamy, że ma on klasę section-title) oraz nadaj mu position: relative;, zdefiniuj rozmiar czcionki (np. 36px) oraz margines (np. 0 0 60px 0).



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
