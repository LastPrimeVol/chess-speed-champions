const photoPages = {
  "Magnus Carlsen": "Magnus Carlsen",
  "Sergey Karjakin": "Sergey Karjakin",
  "Shakhriyar Mamedyarov": "Shakhriyar Mamedyarov",
  "Vasyl Ivanchuk": "Vasyl Ivanchuk",
  "Viswanathan Anand": "Viswanathan Anand",
  "Daniil Dubov": "Daniil Dubov",
  "Nodirbek Abdusattorov": "Nodirbek Abdusattorov",
  "Volodar Murzin": "Volodar Murzin",
  "Alexander Grischuk": "Alexander Grischuk",
  "Le Quang Liem": "Lê Quang Liêm",
  "Maxime Vachier-Lagrave": "Maxime Vachier-Lagrave",
  "Ian Nepomniachtchi": "Ian Nepomniachtchi",
  "Fabiano Caruana": "Fabiano Caruana",
  "Ding Liren": "Ding Liren",
  "Gukesh Dommaraju": "Gukesh Dommaraju",
  "Javokhir Sindarov": "Javokhir Sindarov",
};

const photoCache = new Map();

const photoOverrides = {
  "cycle:Gukesh Dommaraju:2024": "https://commons.wikimedia.org/wiki/Special:FilePath/Dommaraju%20Gukesh%20v%20Arjun%20Erigaisi%20Tata%202023%20-%2013.jpg",
  "cycle:Gukesh Dommaraju:2026": "https://commons.wikimedia.org/wiki/Special:FilePath/Dommaraju%20Gukesh%20v%20Arjun%20Erigaisi%20Tata%202023%20-%2013.jpg",
  "cycle:Javokhir Sindarov:2026": "https://commons.wikimedia.org/wiki/Special:FilePath/Javokhir%20Sindarov.jpg",
  "cycle:Ding Liren:2023": "https://commons.wikimedia.org/wiki/Special:FilePath/Ding%20Liren%20in%202023.jpg",
  "cycle:Ian Nepomniachtchi:2020": "https://upload.wikimedia.org/wikipedia/commons/6/67/World_Chess_Championship_2021%2C_game_07%2C_Ian_Nepomniachtchi_%28cropped%29.jpg",
  "cycle:Ian Nepomniachtchi:2021": "https://upload.wikimedia.org/wikipedia/commons/6/67/World_Chess_Championship_2021%2C_game_07%2C_Ian_Nepomniachtchi_%28cropped%29.jpg",
  "cycle:Ian Nepomniachtchi:2022": "https://upload.wikimedia.org/wikipedia/commons/6/67/World_Chess_Championship_2021%2C_game_07%2C_Ian_Nepomniachtchi_%28cropped%29.jpg",
  "cycle:Sergey Karjakin:2016": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Karjakin_Sergey_%2830334667736%29.jpg/960px-Karjakin_Sergey_%2830334667736%29.jpg",
  "cycle:Viswanathan Anand:2012": "https://commons.wikimedia.org/wiki/Special:FilePath/Viswanathan%20Anand%202016.jpg",
  "cycle:Magnus Carlsen:2013": "https://commons.wikimedia.org/wiki/Special:FilePath/Magnus%20Carlsen%204%202%202014%20Z%C3%BCrich.jpg",
  "cycle:Magnus Carlsen:2014": "https://commons.wikimedia.org/wiki/Special:FilePath/Magnus%20Carlsen%204%202%202014%20Z%C3%BCrich.jpg",
};

const sources = {
  rapid: "https://en.wikipedia.org/wiki/World_Rapid_Chess_Championship",
  blitz: "https://en.wikipedia.org/wiki/World_Blitz_Chess_Championship",
  rapid2024: "https://en.wikipedia.org/wiki/World_Rapid_Chess_Championship_2024",
  blitz2024: "https://en.wikipedia.org/wiki/World_Blitz_Chess_Championship_2024",
  rapid2025: "https://www.chess.com/news/view/carlsen-goryachkina-win-2025-fide-world-rapid-chess-championships",
  blitz2025: "https://en.chessbase.com/post/world-rapid-blitz-2025-5",
  candidates: "https://en.wikipedia.org/wiki/Candidates_Tournament",
  candidates2026: "https://www.chess.com/news/view/sindarov-vaishali-win-7-fide-candidates-2026-conclusions",
  classical: "https://www.chess.com/article/view/world-chess-champions",
};

const championships = [
  {
    year: 2025,
    type: "rapid",
    city: "Doha",
    champion: "Magnus Carlsen",
    score: "10.5/13",
    note: "Карлсен выиграл рапид с отрывом в одно очко от группы преследователей.",
    source: sources.rapid2025,
    standings: [
      ["Magnus Carlsen", "10.5"],
      ["Vladislav Artemiev", "9.5"],
      ["Arjun Erigaisi", "9.5"],
      ["Hans Niemann", "9.5"],
      ["Leinier Dominguez Perez", "9.5"],
    ],
  },
  {
    year: 2025,
    type: "blitz",
    city: "Doha",
    champion: "Magnus Carlsen",
    score: "финал 2.5–1.5",
    note: "В новой системе Swiss + knockout Карлсен победил Нодирбека Абдусатторова в финале. Таблица справа показывает итоговый пьедестал knockout-стадии.",
    source: sources.blitz2025,
    standings: [
      ["Magnus Carlsen", "2.5–1.5"],
      ["Nodirbek Abdusattorov", "финалист"],
      ["Arjun Erigaisi", "бронза"],
      ["Fabiano Caruana", "бронза"],
      ["Maxime Vachier-Lagrave", "Swiss #5"],
    ],
  },
  {
    year: 2024,
    type: "rapid",
    city: "New York",
    champion: "Volodar Murzin",
    score: "10/13",
    note: "Мурзин прошёл турнир без поражений и стал одним из самых неожиданных чемпионов современной серии.",
    source: sources.rapid2024,
    standings: [
      ["Volodar Murzin", "10"],
      ["Alexander Grischuk", "9.5"],
      ["Ian Nepomniachtchi", "9.5"],
      ["Leinier Dominguez Perez", "9"],
      ["Arjun Erigaisi", "9"],
    ],
  },
  {
    year: 2024,
    type: "blitz",
    city: "New York",
    champion: "Magnus Carlsen / Ian Nepomniachtchi",
    score: "разделённый титул",
    note: "После серии ничьих в финале Карлсен и Непомнящий разделили титул. Таблица справа теперь показывает финальную knockout-логику, а не Swiss-посев.",
    source: sources.blitz2024,
    standings: [
      ["Magnus Carlsen / Ian Nepomniachtchi", "1st="],
      ["Jan-Krzysztof Duda", "полуфинал"],
      ["Wesley So", "полуфинал"],
      ["Fabiano Caruana", "1/4"],
      ["Alireza Firouzja", "1/4"],
    ],
  },
  {
    year: 2023,
    type: "rapid",
    city: "Samarkand",
    champion: "Magnus Carlsen",
    score: "10/13",
    note: "Подиум: Carlsen, Vladimir Fedoseev, Yu Yangyi. Полный топ-5 лучше сверить с официальной таблицей турнира.",
    source: sources.rapid,
    standings: [
      ["Magnus Carlsen", "10"],
      ["Vladimir Fedoseev", "9.5"],
      ["Yu Yangyi", "9"],
      ["Vidit Gujrathi", "9"],
      ["Volodar Murzin", "9"],
    ],
  },
  {
    year: 2023,
    type: "blitz",
    city: "Samarkand",
    champion: "Magnus Carlsen",
    score: "16/21",
    note: "Подиум: Carlsen, Daniil Dubov, Vladislav Artemiev. В топ-5 также вошли Maxime Vachier-Lagrave и Ian Nepomniachtchi.",
    source: sources.blitz,
    standings: [
      ["Magnus Carlsen", "16"],
      ["Daniil Dubov", "15.5"],
      ["Vladislav Artemiev", "15"],
      ["Maxime Vachier-Lagrave", "14.5"],
      ["Ian Nepomniachtchi", "14"],
    ],
  },
  {
    year: 2022,
    type: "rapid",
    city: "Almaty",
    champion: "Magnus Carlsen",
    score: "10/13",
    note: "Подиум: Carlsen, Vincent Keymer, Fabiano Caruana.",
    source: sources.rapid,
    standings: [
      ["Magnus Carlsen", "10"],
      ["Vincent Keymer", "9.5"],
      ["Fabiano Caruana", "9.5"],
      ["Daniil Dubov", "9"],
      ["Arjun Erigaisi", "9"],
    ],
  },
  {
    year: 2022,
    type: "blitz",
    city: "Almaty",
    champion: "Magnus Carlsen",
    score: "16/21",
    note: "Подиум: Carlsen, Hikaru Nakamura, Haik Martirosyan.",
    source: sources.blitz,
    standings: [
      ["Magnus Carlsen", "16"],
      ["Hikaru Nakamura", "15"],
      ["Haik Martirosyan", "15"],
      ["Anish Giri", "15"],
      ["Jan-Krzysztof Duda", "15"],
    ],
  },
  {
    year: 2021,
    type: "rapid",
    city: "Warsaw",
    champion: "Nodirbek Abdusattorov",
    score: "9.5/13",
    note: "Четыре игрока набрали 9.5/13; золото было решено тай-брейком.",
    source: sources.rapid,
    standings: [
      ["Nodirbek Abdusattorov", "9.5"],
      ["Ian Nepomniachtchi", "9.5"],
      ["Magnus Carlsen", "9.5"],
      ["Fabiano Caruana", "9.5"],
      ["Jan-Krzysztof Duda", "9"],
    ],
  },
  {
    year: 2021,
    type: "blitz",
    city: "Warsaw",
    champion: "Maxime Vachier-Lagrave",
    score: "15/21",
    note: "Подиум: Vachier-Lagrave, Jan-Krzysztof Duda, Alireza Firouzja.",
    source: sources.blitz,
    standings: [
      ["Maxime Vachier-Lagrave", "15"],
      ["Jan-Krzysztof Duda", "15"],
      ["Alireza Firouzja", "15"],
      ["Daniil Dubov", "14.5"],
      ["Levon Aronian", "14"],
    ],
  },
  {
    year: 2020,
    type: "rapid",
    city: "Не проводился",
    champion: "Титул не разыгрывался",
    score: "COVID-19",
    note: "В 2020 году чемпионат мира по рапиду отменили из-за пандемии COVID-19. Для такого турнира нужны сотни игроков, судьи, трансляция и очная игровая зона, а международные перелёты и массовые события тогда были резко ограничены. FIDE вернулась к розыгрышу титула в 2021 году в Варшаве.",
    source: sources.rapid,
    standings: [
      ["Причина", "пандемия"],
      ["Формат", "очный турнир"],
      ["Статус", "отмена"],
      ["Следующий розыгрыш", "2021"],
      ["Город возвращения", "Warsaw"],
    ],
  },
  {
    year: 2020,
    type: "blitz",
    city: "Не проводился",
    champion: "Титул не разыгрывался",
    score: "COVID-19",
    note: "Блиц-чемпионат 2020 года также не состоялся. Несмотря на то что в шахматы можно играть онлайн, официальный чемпионат мира FIDE по блицу требует единого очного контроля, античит-процедур и одинаковых условий для всех участников. Поэтому титул не перенесли в интернет, а следующий официальный турнир провели в 2021 году.",
    source: sources.blitz,
    standings: [
      ["Причина", "пандемия"],
      ["Онлайн-замена", "нет"],
      ["Статус", "отмена"],
      ["Следующий розыгрыш", "2021"],
      ["Город возвращения", "Warsaw"],
    ],
  },
  {
    year: 2019,
    type: "rapid",
    city: "Moscow",
    champion: "Magnus Carlsen",
    score: "11.5/15",
    note: "Подиум: Carlsen, Alireza Firouzja, Hikaru Nakamura.",
    source: sources.rapid,
    standings: [["Magnus Carlsen", "11.5"], ["Alireza Firouzja", "10.5"], ["Hikaru Nakamura", "10.5"], ["Vladislav Artemiev", "10.5"], ["Fabiano Caruana", "10.5"]],
  },
  {
    year: 2019,
    type: "blitz",
    city: "Moscow",
    champion: "Magnus Carlsen",
    score: "16.5/21",
    note: "Подиум: Carlsen, Hikaru Nakamura, Vladimir Kramnik.",
    source: sources.blitz,
    standings: [["Magnus Carlsen", "16.5"], ["Hikaru Nakamura", "16.5"], ["Vladimir Kramnik", "15"], ["Alexander Grischuk", "14"], ["Maxime Vachier-Lagrave", "14"]],
  },
  { year: 2018, type: "rapid", city: "Saint Petersburg", champion: "Daniil Dubov", score: "11/15", note: "Подиум: Dubov, Shakhriyar Mamedyarov, Hikaru Nakamura.", source: sources.rapid, standings: [["Daniil Dubov", "11"], ["Shakhriyar Mamedyarov", "10.5"], ["Hikaru Nakamura", "10.5"], ["Vladislav Artemiev", "10.5"], ["Magnus Carlsen", "10.5"]] },
  { year: 2018, type: "blitz", city: "Saint Petersburg", champion: "Magnus Carlsen", score: "17/21", note: "Подиум: Carlsen, Jan-Krzysztof Duda, Hikaru Nakamura.", source: sources.blitz, standings: [["Magnus Carlsen", "17"], ["Jan-Krzysztof Duda", "16.5"], ["Hikaru Nakamura", "14.5"], ["Levon Aronian", "14"], ["Peter Svidler", "14"]] },
  { year: 2017, type: "rapid", city: "Riyadh", champion: "Viswanathan Anand", score: "10.5/15", note: "Подиум: Anand, Vladimir Fedoseev, Ian Nepomniachtchi.", source: sources.rapid, standings: [["Viswanathan Anand", "10.5"], ["Vladimir Fedoseev", "10.5"], ["Ian Nepomniachtchi", "10.5"], ["Bu Xiangzhi", "10"], ["Magnus Carlsen", "10"]] },
  { year: 2017, type: "blitz", city: "Riyadh", champion: "Magnus Carlsen", score: "16/21", note: "Подиум: Carlsen, Sergey Karjakin, Viswanathan Anand.", source: sources.blitz, standings: [["Magnus Carlsen", "16"], ["Sergey Karjakin", "14.5"], ["Viswanathan Anand", "14.5"], ["Wang Hao", "14"], ["Levon Aronian", "14"]] },
  { year: 2016, type: "rapid", city: "Doha", champion: "Vasyl Ivanchuk", score: "11/15", note: "Подиум: Ivanchuk, Alexander Grischuk, Magnus Carlsen.", source: sources.rapid, standings: [["Vasyl Ivanchuk", "11"], ["Alexander Grischuk", "11"], ["Magnus Carlsen", "11"], ["Shakhriyar Mamedyarov", "10"], ["Yu Yangyi", "10"]] },
  { year: 2016, type: "blitz", city: "Doha", champion: "Sergey Karjakin", score: "16.5/21", note: "Подиум: Karjakin, Magnus Carlsen, Daniil Dubov.", source: sources.blitz, standings: [["Sergey Karjakin", "16.5"], ["Magnus Carlsen", "16.5"], ["Daniil Dubov", "14.5"], ["Hikaru Nakamura", "14.5"], ["Alexander Grischuk", "14.5"]] },
  { year: 2015, type: "rapid", city: "Berlin", champion: "Magnus Carlsen", score: "11.5/15", note: "Подиум: Carlsen, Ian Nepomniachtchi, Teimour Radjabov.", source: sources.rapid, standings: [["Magnus Carlsen", "11.5"], ["Ian Nepomniachtchi", "10.5"], ["Teimour Radjabov", "10.5"], ["Leinier Dominguez Perez", "10.5"], ["Dmitry Bocharov", "10"]] },
  { year: 2015, type: "blitz", city: "Berlin", champion: "Alexander Grischuk", score: "15.5/21", note: "Подиум: Grischuk, Maxime Vachier-Lagrave, Vladimir Kramnik.", source: sources.blitz, standings: [["Alexander Grischuk", "15.5"], ["Maxime Vachier-Lagrave", "15"], ["Vladimir Kramnik", "15"], ["Vasyl Ivanchuk", "14.5"], ["Ian Nepomniachtchi", "14.5"]] },
  { year: 2014, type: "rapid", city: "Dubai", champion: "Magnus Carlsen", score: "11/15", note: "Подиум: Carlsen, Fabiano Caruana, Viswanathan Anand.", source: sources.rapid, standings: [["Magnus Carlsen", "11"], ["Fabiano Caruana", "10.5"], ["Viswanathan Anand", "10.5"], ["Levon Aronian", "10.5"], ["Alexander Morozevich", "10.5"]] },
  { year: 2014, type: "blitz", city: "Dubai", champion: "Magnus Carlsen", score: "17/21", note: "Подиум: Carlsen, Ian Nepomniachtchi, Hikaru Nakamura.", source: sources.blitz, standings: [["Magnus Carlsen", "17"], ["Ian Nepomniachtchi", "16"], ["Hikaru Nakamura", "16"], ["Le Quang Liem", "14"], ["Shakhriyar Mamedyarov", "13.5"]] },
  { year: 2013, type: "rapid", city: "Khanty-Mansiysk", champion: "Shakhriyar Mamedyarov", score: "11.5/15", note: "Подиум: Mamedyarov, Ian Nepomniachtchi, Alexander Grischuk.", source: sources.rapid, standings: [["Shakhriyar Mamedyarov", "11.5"], ["Ian Nepomniachtchi", "11"], ["Alexander Grischuk", "10.5"], ["Le Quang Liem", "10"], ["Gadir Guseinov", "9"]] },
  { year: 2013, type: "blitz", city: "Khanty-Mansiysk", champion: "Le Quang Liem", score: "20.5/30", note: "Подиум: Le Quang Liem, Alexander Grischuk, Ruslan Ponomariov.", source: sources.blitz, standings: [["Le Quang Liem", "20.5"], ["Alexander Grischuk", "20"], ["Ruslan Ponomariov", "20"], ["Ian Nepomniachtchi", "20"], ["Nguyen Ngoc Truong Son", "19.5"]] },
  { year: 2012, type: "rapid", city: "Astana", champion: "Sergey Karjakin", score: "11.5/15", note: "Первый чемпион современной серии FIDE World Rapid & Blitz.", source: sources.rapid, standings: [["Sergey Karjakin", "11.5"], ["Magnus Carlsen", "10.5"], ["Veselin Topalov", "9.5"], ["Shakhriyar Mamedyarov", "9.5"], ["Alexander Grischuk", "9"]] },
  { year: 2012, type: "blitz", city: "Astana", champion: "Alexander Grischuk", score: "20/30", note: "Первый чемпион блиц-части современной совместной серии.", source: sources.blitz, standings: [["Alexander Grischuk", "20"], ["Magnus Carlsen", "19.5"], ["Sergey Karjakin", "18.5"], ["Alexander Morozevich", "17.5"], ["Dmitry Andreikin", "17"]] },
];

const list = document.querySelector("#championships-list");
const candidatesList = document.querySelector("#candidates-list");
const classicalList = document.querySelector("#classical-list");
const filters = document.querySelectorAll(".filter");

const candidatesWinners = [
  {
    year: 2026,
    winner: "Javokhir Sindarov",
    score: "10/14",
    location: "Pegeia, Cyprus",
    challengerFor: "Gukesh Dommaraju",
    note: "Синдаров прошёл турнир без поражений и получил право сыграть матч за корону с Гукешем.",
    source: sources.candidates2026,
  },
  {
    year: 2024,
    winner: "Gukesh Dommaraju",
    score: "9/14",
    location: "Toronto",
    challengerFor: "Ding Liren",
    note: "Гукеш стал самым молодым победителем Candidates и затем выиграл матч за мировую корону.",
    source: sources.candidates,
  },
  {
    year: 2022,
    winner: "Ian Nepomniachtchi",
    score: "9.5/14",
    location: "Madrid",
    challengerFor: "Ding Liren",
    note: "Непомнящий выиграл второй Candidates подряд; Карлсен отказался защищать титул, поэтому соперником стал Дин Лижэнь.",
    source: sources.candidates,
  },
  {
    year: 2020,
    winner: "Ian Nepomniachtchi",
    score: "8.5/14",
    location: "Yekaterinburg",
    challengerFor: "Magnus Carlsen",
    note: "Турнир начался в 2020, был остановлен из-за COVID-19 и завершился в 2021 году.",
    source: sources.candidates,
  },
  {
    year: 2018,
    winner: "Fabiano Caruana",
    score: "9/14",
    location: "Berlin",
    challengerFor: "Magnus Carlsen",
    note: "Каруана стал первым американским претендентом на классическую корону после Бобби Фишера.",
    source: sources.candidates,
  },
  {
    year: 2016,
    winner: "Sergey Karjakin",
    score: "8.5/14",
    location: "Moscow",
    challengerFor: "Magnus Carlsen",
    note: "Карякин обошёл Каруану на финише и вывел матч с Карлсеном на тай-брейк.",
    source: sources.candidates,
  },
  {
    year: 2014,
    winner: "Viswanathan Anand",
    score: "8.5/14",
    location: "Khanty-Mansiysk",
    challengerFor: "Magnus Carlsen",
    note: "Ананд сразу вернулся в матч за титул после поражения от Карлсена в 2013 году.",
    source: sources.candidates,
  },
  {
    year: 2013,
    winner: "Magnus Carlsen",
    score: "8.5/14",
    location: "London",
    challengerFor: "Viswanathan Anand",
    note: "Победа Карлсена в Candidates открыла новую эпоху классического чемпионата.",
    source: sources.candidates,
  },
];

const classicalMatches = [
  {
    year: 2026,
    champion: "Gukesh Dommaraju",
    challenger: "Javokhir Sindarov",
    result: "матч ожидается",
    location: "TBA",
    note: "После победы Синдарова в Candidates 2026 следующим матчем должен стать Gukesh vs Sindarov.",
    source: sources.candidates2026,
  },
  {
    year: 2024,
    champion: "Gukesh Dommaraju",
    challenger: "Ding Liren",
    result: "7.5–6.5",
    location: "Singapore",
    note: "Гукеш победил Дин Лижэня и стал самым молодым классическим чемпионом мира.",
    source: sources.classical,
  },
  {
    year: 2023,
    champion: "Ding Liren",
    challenger: "Ian Nepomniachtchi",
    result: "9.5–8.5",
    location: "Astana",
    note: "Дин выиграл титул на тай-брейке после отказа Магнуса Карлсена защищать корону.",
    source: sources.classical,
  },
  {
    year: 2021,
    champion: "Magnus Carlsen",
    challenger: "Ian Nepomniachtchi",
    result: "7.5–3.5",
    location: "Dubai",
    note: "Одна из самых убедительных защит титула Карлсена: матч завершился досрочно после 11 партий.",
    source: sources.classical,
  },
  {
    year: 2018,
    champion: "Magnus Carlsen",
    challenger: "Fabiano Caruana",
    result: "9–6",
    location: "London",
    note: "Все 12 классических партий завершились вничью; Карлсен выиграл rapid tiebreak 3–0.",
    source: sources.classical,
  },
  {
    year: 2016,
    champion: "Magnus Carlsen",
    challenger: "Sergey Karjakin",
    result: "9–7",
    location: "New York",
    note: "Карякин первым выиграл партию в матче, но Карлсен сравнял счёт и удержал титул на тай-брейке.",
    source: sources.classical,
  },
  {
    year: 2014,
    champion: "Magnus Carlsen",
    challenger: "Viswanathan Anand",
    result: "6.5–4.5",
    location: "Sochi",
    note: "Карлсен впервые защитил титул в реванше против Ананда.",
    source: sources.classical,
  },
  {
    year: 2013,
    champion: "Magnus Carlsen",
    challenger: "Viswanathan Anand",
    result: "6.5–3.5",
    location: "Chennai",
    note: "Карлсен победил Ананда и стал 16-м классическим чемпионом мира.",
    source: sources.classical,
  },
  {
    year: 2012,
    champion: "Viswanathan Anand",
    challenger: "Boris Gelfand",
    result: "8.5–7.5",
    location: "Moscow",
    note: "Ананд сохранил титул после равного классического матча и победы в rapid tiebreak.",
    source: "https://en.wikipedia.org/wiki/World_Chess_Championship_2012",
  },
];

function initials(name) {
  if (name.includes("/")) return "1";
  if (name === "—") return "—";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function primaryChampion(champion) {
  return champion.split("/")[0].trim();
}

async function fetchCommonsYearPhoto(player, year) {
  const endpoint = new URL("https://commons.wikimedia.org/w/api.php");
  const search = `${player} ${year} chess`;

  endpoint.search = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: search,
    gsrnamespace: "6",
    gsrlimit: "8",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "900",
    format: "json",
    origin: "*",
  }).toString();

  const response = await fetch(endpoint);
  if (!response.ok) throw new Error(`Commons lookup failed for ${search}`);

  const data = await response.json();
  const pages = Object.values(data.query?.pages || {});
  return (
    pages
      .map((page) => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url)
      .find(Boolean) || ""
  );
}

async function fetchDefaultPhoto(player) {
  const page = photoPages[player] || player;
  const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(page)}`;

  const response = await fetch(endpoint);
  if (!response.ok) throw new Error(`Photo lookup failed for ${player}`);

  const data = await response.json();
  return (
    data.originalimage?.source ||
    data.thumbnail?.source ||
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(page)}.jpg`
  );
}

async function fetchPhoto(player, year, scope = "speed") {
  const overrideKey = `${scope}:${player}:${year}`;
  if (photoOverrides[overrideKey]) return photoOverrides[overrideKey];

  const cacheKey = `${scope}:${player}:${year}`;
  if (photoCache.has(cacheKey)) return photoCache.get(cacheKey);

  try {
    const image = (await fetchCommonsYearPhoto(player, year)) || (await fetchDefaultPhoto(player));
    photoCache.set(cacheKey, image);
    return image;
  } catch (error) {
    photoCache.set(cacheKey, "");
    return "";
  }
}

async function hydratePhotos(root = document) {
  const portraits = root.querySelectorAll(".portrait[data-player]");

  for (const portrait of portraits) {
    const player = portrait.dataset.player;
    const year = portrait.dataset.year;
    const scope = portrait.dataset.photoScope || "speed";
    const img = portrait.querySelector("img");
    const image = await fetchPhoto(player, year, scope);

    if (!image) {
      portrait.classList.add("broken");
      continue;
    }

    img.src = image;
    img.alt = player;
  }
}

function labelFor(type) {
  return type === "rapid" ? "Рапид" : "Блиц";
}

function renderCards(filter = "all") {
  const items = championships.filter((item) => filter === "all" || item.type === filter);

  list.innerHTML = items
    .map((item) => {
      const player = primaryChampion(item.champion);
      const rows = item.standings.length
        ? item.standings
            .map(
              ([name, score], index) => `
                <div class="standing-row">
                  <span class="standing-rank">${index + 1}</span>
                  <span class="standing-name">${name}</span>
                  <span class="standing-score">${score}</span>
                </div>
              `,
            )
            .join("")
        : `<div class="standing-row"><span class="standing-rank">—</span><span class="standing-name">Не проводился</span><span class="standing-score">—</span></div>`;

      return `
        <article class="champ-card" data-type="${item.type}">
          <div class="portrait" data-photo-scope="speed" data-player="${player}" data-year="${item.year}">
            <img alt="" loading="lazy">
            <span class="portrait-fallback">${initials(item.champion)}</span>
          </div>
          <div class="champ-main">
            <div class="meta-row">
              <span class="badge ${item.type}">${labelFor(item.type)}</span>
              <span class="badge">${item.year}</span>
              <span class="badge">${item.city}</span>
              <span class="badge">${item.score}</span>
            </div>
            <div class="champ-title">
              <span>Чемпион</span>
              <h3>${item.champion}</h3>
            </div>
            <p class="champ-note">${item.note}</p>
            <a class="source-link" href="${item.source}">Источник данных</a>
          </div>
          <div class="standings" aria-label="Топ-5">
            ${rows}
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".portrait img").forEach((img) => {
    img.addEventListener("error", () => {
      img.closest(".portrait").classList.add("broken");
    });
  });

  hydratePhotos();
}

function featureCard({ year, person, badges, titleLabel, titleValue, note, source }) {
  return `
    <article class="feature-card">
      <div class="portrait compact" data-photo-scope="cycle" data-player="${person}" data-year="${year}">
        <img alt="" loading="lazy">
        <span class="portrait-fallback">${initials(person)}</span>
      </div>
      <div class="feature-body">
        <div class="meta-row">
          ${badges.map((badge) => `<span class="badge">${badge}</span>`).join("")}
        </div>
        <div class="champ-title">
          <span>${titleLabel}</span>
          <h3>${titleValue}</h3>
        </div>
        <p class="champ-note">${note}</p>
        <a class="source-link" href="${source}">Источник данных</a>
      </div>
    </article>
  `;
}

function renderCandidates() {
  candidatesList.innerHTML = candidatesWinners
    .map((item) =>
      featureCard({
        year: item.year,
        person: item.winner,
        badges: [item.year, item.location, item.score, `матч: ${item.challengerFor}`],
        titleLabel: "Победитель Candidates",
        titleValue: item.winner,
        note: item.note,
        source: item.source,
      }),
    )
    .join("");
  hydratePhotos(candidatesList);
}

function renderClassical() {
  classicalList.innerHTML = classicalMatches
    .map((item) =>
      featureCard({
        year: item.year,
        person: item.champion,
        badges: [item.year, item.location, item.result, `vs ${item.challenger}`],
        titleLabel: item.year === 2026 ? "Действующий чемпион" : "Чемпион мира",
        titleValue: item.champion,
        note: item.note,
        source: item.source,
      }),
    )
    .join("");
  hydratePhotos(classicalList);
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCards(button.dataset.filter);
  });
});

document.querySelector("#rapid-count").textContent = championships.filter(
  (item) => item.type === "rapid" && item.champion !== "—",
).length;
document.querySelector("#blitz-count").textContent = championships.filter(
  (item) => item.type === "blitz" && item.champion !== "—",
).length;

renderCards();
renderCandidates();
renderClassical();
