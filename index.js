const data = [
    {
      "title": "Work",
      "color": "hsl(15, 100%, 70%)",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "color": "hsl(195, 74%, 62%)",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "color": "hsl(348, 100%, 68%)",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "color": "hsl(145, 58%, 55%)",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "color": "hsl(264, 64%, 52%)",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self-Care",
      "color": "hsl(43, 84%, 65%)",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
]

//// style="background-color:${item.color}"

{/* <div class="report__item-back">
    <img src="/images/icon-${item.title.toLowerCase()}.svg">
</div> */}

let cardReport = document.querySelector('.report');

let createCard = (item, time) => {
  let card = `
  <div class="report__item ${item.title.toLowerCase()}">
    <div class="report__item-content">
      <div class="report__item-content-top">
        <p>${item.title}</p>
        <a href="#">
          <img src="images/icon-ellipsis.svg"></img>
        </a>
      </div>
      <div class="report__item-content-bottom">
        <h1>${time.current}hrs</h1>
        <p class="info">Last Week - ${time.previous}hrs</p>
      </div>
    </div>
  </div>
  `

  return card;
}

function showDaily() {
  let allItems = " ";
  data.map(item => {
    if(item.timeframes.daily) {
      allItems += createCard(item, item.timeframes.daily);
    }
  });
  cardReport.innerHTML = allItems;
}

function showWeekly() {
  let allItems = " ";
  data.map(item => {
    if(item.timeframes.weekly) {
      allItems += createCard(item, item.timeframes.weekly)
    }
  });
  cardReport.innerHTML = allItems;
}

function showMonthly() {
  let allItems = " ";
  data.map(item => {
    if(item.timeframes.monthly) {
      allItems += createCard(item, item.timeframes.monthly)
    }
  });
  cardReport.innerHTML = allItems;
}

showDaily();

const linkDaily = document.querySelector("#daily").addEventListener("click", showDaily);
const linkWeekly = document.querySelector("#weekly").addEventListener("click", showWeekly);
const linkMonthly = document.querySelector("#monthly").addEventListener("click", showMonthly);