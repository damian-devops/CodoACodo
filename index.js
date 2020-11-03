let carouselDinamico = document.getElementById('carouselDinamico');

if (carouselDinamico) {

    function carouselIndicators() {
        let carouselIndicatorsTemplate = '';
        for (let i = 0; i < data.length; i++) {
            if (i === 0) {
                carouselIndicatorsTemplate += `<li data-target="#myCarousel" data-slide-to="0" class="active"></li>`
            } else {
                carouselIndicatorsTemplate += `<li data-target="#myCarousel" data-slide-to="0"></li>`
            }
        }
        return carouselIndicatorsTemplate;
    }

    function carouselInner() {
        let carouselInnerTemplate = '';

        for (let i = 0; i < data.length; i++) {
            if (i === 0) {
                carouselInnerTemplate += `<div class="carousel-item active">
                <img src="${data[i].imagen}" alt="">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>${data[i].nombre}</h1>
                    </div>
                </div>
            </div>`
            } else {
                carouselInnerTemplate += `<div class="carousel-item">
                <img src="${data[i].imagen}" alt="">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>${data[i].nombre}</h1>
                    </div>
                </div>
            </div>`
            }
        }
        return carouselInnerTemplate;
    }

    let template = `<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
       ${carouselIndicators()}
    </ol>
    <div class="carousel-inner">
    ${carouselInner()}
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </div>`;

    carouselDinamico.innerHTML = template;
}