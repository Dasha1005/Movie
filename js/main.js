$(function(){
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev">' +
            '<img src="images/previous-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next">' +
            '<img src="images/next-arrow.svg" alt=""></button>',
        infinite: true,
        responsive:[
            {
                breakpoint:631,
                settings:{
                    arrows:false
                }
            },
        ]
    });
});

const box     = document.querySelector('.content__info');

const REQUEST_FORM = document.querySelector('.content__form');

const addContent       = (data) => {
    return`
             <div class="container">
             <div class="content__info">
             <div class="content__info-1">
                <figure><img src="${data.Search[0].Poster}" alt=""></figure>
                <p class="content__boxes-title">MOVIE TITLE ${data.Search[0].Title}</p>
                <div class="content__bg">
                <p class="content__subtitle subtitle">Type of movie ${data.Search[0].Type}</p>
                <p class="content__subtitle span">Year ${data.Search[0].Year}</p>
                </div>
                </div>
                
                <div class="content__info-2">
               <figure><img src="${data.Search[1].Poster}" alt=""></figure>
                <p class="content__boxes-title">MOVIE TITLE ${data.Search[1].Title}</p>
                <div class="content__bg">
                <p class="content__subtitle subtitle">Type of movie ${data.Search[1].Type}</p>
                <p class="content__subtitle span">Year ${data.Search[1].Year}</p>
                </div>
                </div>
                
                <div class="content__info-3">
                <figure><img src="${data.Search[2].Poster}" alt=""></figure>
                <p class="content__boxes-title">MOVIE TITLE ${data.Search[2].Title}</p>
                <div class="content__bg">
                <p class="content__subtitle subtitle">Type of movie ${data.Search[2].Type}</p>
                <p class="content__subtitle span">Year ${data.Search[2].Year}</p>
                </div>
                </div>
                
                <div class="content__info-1">
                <figure><img src="${data.Search[3].Poster}" alt=""></figure>
                <p class="content__boxes-title">MOVIE TITLE ${data.Search[3].Title}</p>
                <div class="content__bg">
                <p class="content__subtitle subtitle">Type of movie ${data.Search[3].Type}</p>
                <p class="content__subtitle span">Year ${data.Search[3].Year}</p>
                </div>
                </div>
                
                <div class="content__info-2">
                <figure><img src="${data.Search[4].Poster}" alt=""></figure>
                <p class="content__boxes-title">MOVIE TITLE ${data.Search[4].Title}</p>
                <div class="content__bg">
                <p class="content__subtitle subtitle">Type of movie ${data.Search[4].Type}</p>
                <p class="content__subtitle span">Year ${data.Search[4].Year}</p>
                </div>
                </div>
                
                <div class="content__info-3">
                <figure><img src="${data.Search[5].Poster}" alt=""></figure>
                <p class="content__boxes-title">MOVIE TITLE ${data.Search[5].Title}</p>
                <div class="content__bg">
                <p class="content__subtitle subtitle">Type of movie ${data.Search[5].Type}</p>
                <p class="content__subtitle span">Year ${data.Search[5].Year}</p>
                </div>
               </div>
               
               <div class="content__info-3">
                <figure><img src="${data.Search[5].Poster}" alt=""></figure>
                <p class="content__boxes-title">MOVIE TITLE ${data.Search[5].Title}</p>
                <div class="content__bg">
                <p class="content__subtitle subtitle">Type of movie ${data.Search[5].Type}</p>
                <p class="content__subtitle span">Year ${data.Search[5].Year}</p>
                </div>
               </div>
               
               <div class="content__info-1">
                <figure><img src="${data.Search[6].Poster}" alt=""></figure>
                <p class="content__boxes-title">MOVIE TITLE ${data.Search[6].Title}</p>
                <div class="content__bg">
                <p class="content__subtitle subtitle">Type of movie ${data.Search[6].Type}</p>
                <p class="content__subtitle span">Year ${data.Search[6].Year}</p>
                </div>
               </div>
               
               <div class="content__info-2">
                <figure><img src="${data.Search[7].Poster}" alt=""></figure>
                <p class="content__boxes-title">MOVIE TITLE ${data.Search[7].Title}</p>
                <div class="content__bg">
                <p class="content__subtitle subtitle">Type of movie ${data.Search[7].Type}</p>
                <p class="content__subtitle span">Year ${data.Search[7].Year}</p>
                </div>
               </div>
                </div>
               </div>
<style>
.content__info-1,
.content__info-2,
.content__info-3{
    position: relative;
    padding-bottom: 20px;
  }
</style>`;
};


/**
 * Retrieve weather for user selected location
 * @param search
 * @param box
 * @return {Promise.<void>}
 */
const request = async (search, box) => {

    fetch(`https://www.omdbapi.com/?=&apikey=8b47da7b&s=${search}`,{
        "method": "GET"
    })
        .then(response => response.json())
        .then(response=> {
            box.innerHTML = addContent(JSON.parse(JSON.stringify(response)));
        })
        .catch(err => {
            box.innerHTML=`Your search did not match any results.`;
        });
};


(REQUEST_FORM) && REQUEST_FORM.addEventListener('submit', event => {
    event.preventDefault();
    const inputName = event.target.querySelector('input[name="name"]').value;

    request(inputName,box);
});

