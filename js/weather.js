// // //
// // // -----------------------------------------------------------------------------------------------------------------
// // //

function onSumbit(event) {
    event.preventDefault();
    search(searchInput.value);
}


const timeElement = document.getElementById("hour");
const dateElement = document.getElementById("date");
// --
const currentElement = document.getElementById("highlight");

// --

const API_KEY = '93d53e1ca5d080fdb94e594162515b9e';

// setInterval(() => {
//     const time = new Date();
//     const month = time.getMonth();
//     const date = time.getDate();
//     const day = time.getDay();
//     const hour = time.getHours();

//     const format12Hr = hour >= 13 ? hour % 12 : hour

//     const minutes = time.getMinutes();
//     const ampm = hour >= 12 ? 'PM' : 'AM';

//     timeElement.innerHTML = format12Hr + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`;
//     dateElement.innerHTML = days[day] + ', ' + date + ' ' + months[month];

// }, 1000);

getWeatherData();

function getWeatherData() {
    let latitude;
    let longitude;

    navigator.geolocation.getCurrentPosition((success) => {

        // let { latitude, longitude } = success.coords;
        longitude = success.coords.longitude;
        latitude = success.coords.latitude;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
            .then(res => res.json()).then(data => {
                console.log(data);
                showWeatherData(data);
            })
    })
}

function showWeatherData(data) {
    let { humidity, pressure, temp, wind_speed } = data.current;
    let { main, description } = data.current.weather[0];



    currentElement.innerHTML =
        `<div class="day-hightlight-item">
            <div class="day-hightlight-title">Wind status</div>
            <div class="day-hightlight-cont">${wind_speed}<span>&nbsp; mph</span></div>
            <div class="day-hightlight-details"><i class="fas fa-location-arrow"></i>&nbsp; WSW</div>
        </div>
        <div class="day-hightlight-item">
            <div class="day-hightlight-title">Humidity</div>
            <div class="day-hightlight-cont">${humidity}<span>&nbsp; %</span></div>
            <div class="day-hightlight-progress beetwen">
                <span>0%</span>
                <div class="progress-bar " style="width: calc(${humidity}% - 7px)">
                    <span>${humidity}%</span>
                </div>
                <span>100%</span>
            </div>
        </div>
        <div class="day-hightlight-item">
            <div class="day-hightlight-title">Status</div>
            <div class="day-hightlight-cont">${main}</div>
            <div class="day-hightlight-details">${description}</div>
        </div>
        <div class="day-hightlight-item">
            <div class="day-hightlight-title">Air Pressure</div>
            <div class="day-hightlight-cont" style="height: 104px;">${pressure}<span>&nbsp; mb</span></div>
        </div>`;



    let dayItems = document.getElementById("day-items");
    let otherDay = '';
    data.daily.forEach((day, idx) => {
        if (idx == 0) {

        } else {

            // 
            // let tempMin = document.getElementById("tempMin");
            // tpMin = day.daily[0].temp.min;
            // tpMax = day.daily[0].temp.max;

            otherDay +=

                // otherDay +=
                `

                <div class="day-item">
                    <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                    <img class="day-clime" id="day-clime" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="">
                    <div class="day-details">

                        <div class="left">
                        <i class="fas fa-sun" style="padding: 0 13px 5px;"></i>
                        ${day.temp.day}°C
                        </div>
                        <div class="right">
                            <i class="fas fa-moon" style="padding: 0 17px 5px;"></i>
                        ${day.temp.night}°C
                        </div>
                    </div>
                </div>

        `;
            // console.log(getDay);

        }


    })


    dayItems.innerHTML = otherDay;

    // setInterval(() => {

    // GET HOUR
    let hour = document.getElementById("hour"),
        buttons = document.getElementById("button");

    // let getDate = new Date(data.current.dt * 1000).toLocaleString("es-ES", {
    //     timeStyle: "short",
    //     dateStyle: "long"
    // });

    let getFec = new Date(data.current.dt * 1000);
    let getHour = getFec.getHours();
    let getMin = getFec.getMinutes();
    let getSec = getFec.getSeconds();
    //-----
    let hr = ('0' + (getHour)).slice(-2);
    let min = ('0' + (getMin)).slice(-2);
    let sec = ('0' + (getSec)).slice(-2);
    //-----
    let clock = hr + ':' + min + ':' + sec + ' ';
    // let hours = hora + ':' + minuto;

    const ampm = getHour >= 12 ? 'PM' : 'AM';




    //-----
    // hour.innerHTML = getHour + ':' + getMinute + ' ' + `<span id="am-pm">${ampm}</span>`;
    // hour.innerHTML = clock + `<span id="am-pm">${ampm}</span>`;
    //-----


    //-----
    // let hours = hora + ':' + minuto;


    //-----
    // hour.innerHTML = getHour + ':' + getMinute + ' ' + `<span id="am-pm">${ampm}</span>`;
    // hour.innerHTML = `<span id="am-pm">${ampm}</span>`;


    if (getHour > 6 && getHour < 16) {
        // body.style.background = "#7194ff";
        document.body.classList.remove("night");
        document.body.classList.add("morning");
    } else if (getHour > 16 && getHour < 18) {
        // body.style.background = "#4c5562";
        document.body.classList.remove("morning");
        document.body.classList.add("afternoon");
    } else {
        document.body.classList.remove("afternoon");
        document.body.classList.add("night");
        // document.body.style.background = "#100E1D";
        // buttons.style.background = "var(--color-3)";
    }

    // document.hora.value = hours;
    // console.log(getSeconds);
    // console.log(hours);
    // setTimeout("clockActualice()", 1000)
    // }

    // }, 1000);




    //-----

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let date = document.getElementById("date-today");
    // let fecha = getDay + ' ' + getMonth;
    const time = new Date(data.current.dt * 1000);
    const mes = time.getMonth();
    const fecha = time.getDate();
    const dia = time.getDay();

    let fech = days[dia] + ', ' + fecha + ' ' + months[mes];

    date.innerHTML = `<div id="date">${fech}</div>`;

    //-----

    let city = document.getElementById("city");

    let timezone = data.timezone;

    city.innerHTML = `<p id="city">${timezone}</p>`;

    //-----

    let gcClima = document.getElementById("gc-clima");

    let clime = data.current.weather[0].main;

    gcClima.innerHTML = `<div class="gc-clima">${clime}</div>`;
    // gcClima.textContent = clime;

    //-----
    let gcCentigrate = document.getElementById("gc-centigrate");
    let centigrate = data.current.temp;

    gcCentigrate.innerHTML = `<div class="gc-centigrate" id="gc-centigrate">${centigrate}<span>°c</span></div>`;

    //-----
    // console.log(data.daily[0].temp.min + ' ola');




    // clockActualice(data);

}


// function clockActualice(data) {


//     let hour = document.getElementById("hour");
//     let asd = new Date(data.current.dt * 1000);


//     hour.innerHTML = asd;
//     console.log(data.current.dt * 1000);

//     setTimeout("clockActualice(data)", 1000);
// }


// // //
// // // -----------------------------------------------------------------------------------------------------------------
// // //