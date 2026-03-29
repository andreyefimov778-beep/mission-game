// ===========================
// STARFIELD
// ===========================
(function() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < 700; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4,
        a: Math.random(),
        speed: 0.003 + Math.random() * 0.005
      });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.a += s.speed;
      const alpha = 0.3 + 0.7 * Math.abs(Math.sin(s.a));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize);
  resize();
  draw();
})();

// ===========================
// DATA
// ===========================

// SPEED MULTIPLIER — все скорости замедлены в 9 раз
const SPEED = 1/9;

const PLANETS = [
  {
    name: 'Меркурий', nameEn: 'Mercury',
    radius: 4, color: '#b0bec5', glowColor: '#b0bec5',
    orbitRadius: 80, speed: 0.00415 * SPEED, angle: 0.5,
    type: 'planet',
    stats: {
      'Тип': 'Каменная планета',
      'Диаметр': '4 879 км',
      'Масса': '3.3 × 10²³ кг',
      'Период обращения': '87.97 земных дней',
      'Период вращения': '58.6 земных дней',
      'Расстояние от Солнца': '57.9 млн км',
      'Температура': '-180°C до +430°C',
      'Спутники': '0'
    },
    desc: 'Меркурий — ближайшая к Солнцу планета Солнечной системы. Из-за медленного вращения и отсутствия атмосферы перепады температур на его поверхности самые большие в системе. Поверхность покрыта кратерами, похожими на лунные.',
    creature: 'Существо созвездия Близнецов'
  },
  {
    name: 'Венера', nameEn: 'Venus',
    radius: 7, color: '#ffcc80', glowColor: '#ff9800',
    orbitRadius: 120, speed: 0.00162 * SPEED, angle: 1.2,
    type: 'planet',
    stats: {
      'Тип': 'Каменная планета',
      'Диаметр': '12 104 км',
      'Масса': '4.87 × 10²⁴ кг',
      'Период обращения': '224.7 земных дней',
      'Период вращения': '243 земных дня (ретроградное)',
      'Расстояние от Солнца': '108.2 млн км',
      'Температура': '+462°C (средняя)',
      'Спутники': '0'
    },
    desc: 'Венера — вторая планета от Солнца и самая горячая в системе из-за мощного парникового эффекта. Атмосфера состоит преимущественно из углекислого газа с облаками серной кислоты. Вращается в обратном направлении.',
    creature: 'Существо созвездия Тельца'
  },
  {
    name: 'Земля', nameEn: 'Earth',
    radius: 8, color: '#42a5f5', glowColor: '#1565c0',
    orbitRadius: 165, speed: 0.001 * SPEED, angle: 2.0,
    type: 'planet',
    moons: [{ name: 'Луна', r: 3, orbitR: 18, speed: 0.013 * SPEED, angle: 0, color: '#cfd8dc' }],
    stats: {
      'Тип': 'Каменная планета',
      'Диаметр': '12 742 км',
      'Масса': '5.97 × 10²⁴ кг',
      'Период обращения': '365.25 дней',
      'Период вращения': '23ч 56мин',
      'Расстояние от Солнца': '149.6 млн км (1 а.е.)',
      'Температура': '-89°C до +57°C',
      'Спутники': '1 (Луна)'
    },
    desc: 'Земля — третья планета от Солнца и единственное известное место во Вселенной, где существует жизнь. 71% поверхности покрыто водой. Имеет мощное магнитное поле и разнообразную атмосферу, защищающую жизнь.',
    creature: 'Человечество'
  },
  {
    name: 'Марс', nameEn: 'Mars',
    radius: 5, color: '#ef5350', glowColor: '#b71c1c',
    orbitRadius: 215, speed: 0.000532 * SPEED, angle: 3.5,
    type: 'planet',
    moons: [
      { name: 'Фобос', r: 2, orbitR: 12, speed: 0.02 * SPEED, angle: 0, color: '#90a4ae' },
      { name: 'Деймос', r: 1.5, orbitR: 18, speed: 0.01 * SPEED, angle: 2, color: '#90a4ae' }
    ],
    stats: {
      'Тип': 'Каменная планета',
      'Диаметр': '6 779 км',
      'Масса': '6.39 × 10²³ кг',
      'Период обращения': '686.97 земных дней',
      'Период вращения': '24ч 37мин',
      'Расстояние от Солнца': '227.9 млн км',
      'Температура': '-140°C до +20°C',
      'Спутники': '2 (Фобос, Деймос)'
    },
    desc: 'Марс — четвёртая планета от Солнца, известная как «Красная планета» из-за оксида железа на поверхности. На нём находятся крупнейший вулкан (Олимп) и каньон (Маринер) в Солнечной системе. Активно исследуется марсоходами.',
    creature: 'Существо созвездия Скорпиона'
  },
  {
    name: 'Юпитер', nameEn: 'Jupiter',
    radius: 28, color: '#ffb74d', glowColor: '#e65100',
    orbitRadius: 340, speed: 0.0000843 * SPEED, angle: 0.8,
    type: 'planet',
    rings: { innerR: 32, outerR: 36, color: 'rgba(180,120,60,0.15)' },
    moons: [
      { name: 'Ио', r: 3, orbitR: 40, speed: 0.008 * SPEED, angle: 0, color: '#fff176' },
      { name: 'Европа', r: 2.5, orbitR: 52, speed: 0.005 * SPEED, angle: 1.5, color: '#e0f7fa' },
      { name: 'Ганимед', r: 3.5, orbitR: 65, speed: 0.003 * SPEED, angle: 3, color: '#b0bec5' },
      { name: 'Каллисто', r: 3, orbitR: 78, speed: 0.002 * SPEED, angle: 4.5, color: '#78909c' }
    ],
    stats: {
      'Тип': 'Газовый гигант',
      'Диаметр': '139 820 км',
      'Масса': '1.898 × 10²⁷ кг',
      'Период обращения': '11.86 лет',
      'Период вращения': '9ч 56мин',
      'Расстояние от Солнца': '778.5 млн км',
      'Температура': '-108°C (облака)',
      'Спутники': '95 (известных)'
    },
    desc: 'Юпитер — крупнейшая планета Солнечной системы, в 2.5 раза массивнее всех остальных планет вместе взятых. Большое Красное Пятно — гигантский антициклон, существующий более 400 лет. Мощное магнитное поле и 95 спутников.',
    creature: 'Существо созвездия Стрельца'
  },
  {
    name: 'Сатурн', nameEn: 'Saturn',
    radius: 23, color: '#ffe0b2', glowColor: '#ff8f00',
    orbitRadius: 470, speed: 0.0000339 * SPEED, angle: 2.3,
    type: 'planet',
    rings: { innerR: 30, outerR: 55, color: 'rgba(200,160,80,0.25)' },
    moons: [
      { name: 'Титан', r: 4, orbitR: 70, speed: 0.0015 * SPEED, angle: 1, color: '#ffcc80' },
      { name: 'Энцелад', r: 2, orbitR: 55, speed: 0.003 * SPEED, angle: 3, color: '#e8eaf6' },
      { name: 'Оберон', r: 1.5, orbitR: 85, speed: 0.001 * SPEED, angle: 2, color: '#90a4ae' }
    ],
    stats: {
      'Тип': 'Газовый гигант',
      'Диаметр': '116 460 км',
      'Масса': '5.68 × 10²⁶ кг',
      'Период обращения': '29.46 лет',
      'Период вращения': '10ч 42мин',
      'Расстояние от Солнца': '1.43 млрд км',
      'Температура': '-139°C (облака)',
      'Спутники': '146 (известных)'
    },
    desc: 'Сатурн известен своей великолепной системой колец из льда и камней. Плотность Сатурна настолько мала, что он мог бы плавать на воде. Его спутник Титан имеет плотную атмосферу и озёра из жидкого метана.',
    creature: 'Существо созвездия Козерога'
  },
  {
    name: 'Уран', nameEn: 'Uranus',
    radius: 14, color: '#80deea', glowColor: '#006064',
    orbitRadius: 590, speed: 0.0000119 * SPEED, angle: 4.1,
    type: 'planet',
    rings: { innerR: 18, outerR: 26, color: 'rgba(100,200,220,0.12)' },
    moons: [
      { name: 'Оберон', r: 2, orbitR: 28, speed: 0.002 * SPEED, angle: 1.2, color: '#90a4ae' },
      { name: 'Титания', r: 2, orbitR: 36, speed: 0.0015 * SPEED, angle: 3.5, color: '#b0bec5' }
    ],
    stats: {
      'Тип': 'Ледяной гигант',
      'Диаметр': '50 724 км',
      'Масса': '8.68 × 10²⁵ кг',
      'Период обращения': '84.01 лет',
      'Период вращения': '17ч 14мин (ретроградное)',
      'Расстояние от Солнца': '2.87 млрд км',
      'Температура': '-197°C (облака)',
      'Спутники': '28 (известных)'
    },
    desc: 'Уран — седьмая планета от Солнца, вращающаяся «на боку» — ось наклонена на 98°. Является ледяным гигантом, состоящим из воды, метана и аммиака. Имеет 13 известных колец и уникальный бирюзовый цвет из-за метана в атмосфере.',
    creature: 'Существо созвездия Водолея'
  },
  {
    name: 'Нептун', nameEn: 'Neptune',
    radius: 13, color: '#3f51b5', glowColor: '#1a237e',
    orbitRadius: 700, speed: 0.00000607 * SPEED, angle: 5.5,
    type: 'planet',
    moons: [
      { name: 'Тритон', r: 3, orbitR: 30, speed: -0.002 * SPEED, angle: 0, color: '#b0bec5' }
    ],
    stats: {
      'Тип': 'Ледяной гигант',
      'Диаметр': '49 244 км',
      'Масса': '1.024 × 10²⁶ кг',
      'Период обращения': '164.8 лет',
      'Период вращения': '16ч 6мин',
      'Расстояние от Солнца': '4.5 млрд км',
      'Температура': '-201°C (облака)',
      'Спутники': '16 (известных)'
    },
    desc: 'Нептун — самая далёкая планета Солнечной системы. Имеет самые сильные ветра из всех планет — до 2100 км/ч. Тритон, крупнейший спутник, вращается в обратном направлении и постепенно приближается к планете, что через миллиарды лет приведёт к его разрушению.',
    creature: 'Существо созвездия Рыб'
  }
];

const DWARF_PLANETS = [
  {
    name: 'Плутон', nameEn: 'Pluto',
    radius: 3, color: '#a1887f', glowColor: '#795548',
    orbitRadius: 780, speed: 0.00000399 * SPEED, angle: 1.2,
    type: 'dwarf',
    stats: {
      'Тип': 'Карликовая планета',
      'Диаметр': '2 376 км',
      'Масса': '1.31 × 10²² кг',
      'Период обращения': '247.9 лет',
      'Расстояние от Солнца': '5.9 млрд км (ср.)',
      'Температура': '-230°C',
      'Спутники': '5 (Харон, Стикс, Никта, Кербер, Гидра)'
    },
    desc: 'Плутон — крупнейшая из известных карликовых планет пояса Койпера. В 2006 году переклассифицирован из планет. Имеет сердцеобразную равнину из азотного льда — область Томбо. Миссия New Horizons в 2015 году дала первые детальные снимки.',
    creature: 'Существо созвездия Скорпиона'
  },
  {
    name: 'Церера', nameEn: 'Ceres',
    radius: 3, color: '#9e9e9e', glowColor: '#616161',
    orbitRadius: 268, speed: 0.000214 * SPEED, angle: 3.0,
    type: 'dwarf',
    stats: {
      'Тип': 'Карликовая планета',
      'Диаметр': '940 км',
      'Масса': '9.39 × 10²⁰ кг',
      'Период обращения': '4.6 лет',
      'Расстояние от Солнца': '413.7 млн км',
      'Температура': '-105°C',
      'Спутники': '0'
    },
    desc: 'Церера — крупнейший объект главного пояса астероидов и единственная карликовая планета во внутренней Солнечной системе. На её поверхности обнаружены яркие пятна из солёных отложений — вероятно, следы испарившейся воды.',
    creature: 'Существо созвездия Девы'
  },
  {
    name: 'Эрида', nameEn: 'Eris',
    radius: 3, color: '#eceff1', glowColor: '#b0bec5',
    orbitRadius: 850, speed: 0.0000018 * SPEED, angle: 4.2,
    type: 'dwarf',
    stats: {
      'Тип': 'Карликовая планета',
      'Диаметр': '2 326 км',
      'Масса': '1.66 × 10²² кг',
      'Период обращения': '559 лет',
      'Расстояние от Солнца': 'до 14.6 млрд км',
      'Температура': '-240°C',
      'Спутники': '1 (Дисномия)'
    },
    desc: 'Эрида — вторая по размеру карликовая планета. Открытие Эриды привело к переклассификации Плутона. Находится в рассеянном диске пояса Койпера. Её поверхность покрыта замёрзшим азотом и метаном.',
    creature: 'Существо созвездия Кита'
  },
  {
    name: 'Хаумеа', nameEn: 'Haumea',
    radius: 2.5, color: '#c8e6c9', glowColor: '#388e3c',
    orbitRadius: 820, speed: 0.0000021 * SPEED, angle: 2.5,
    type: 'dwarf',
    stats: {
      'Тип': 'Карликовая планета',
      'Диаметр': '≈1 560 км (большая ось)',
      'Период обращения': '284 лет',
      'Расстояние от Солнца': '6.45 млрд км (ср.)',
      'Особенность': 'Вытянутая форма, кольца',
      'Спутники': '2 (Хи\'иака, Намака)'
    },
    desc: 'Хаумеа — карликовая планета с уникальной вытянутой формой из-за очень быстрого вращения (3.9 часа). Является первым объектом пояса Койпера, у которого обнаружены кольца. Поверхность состоит из кристаллического водяного льда.',
    creature: 'Существо созвездия Геркулеса'
  },
  {
    name: 'Макемаке', nameEn: 'Makemake',
    radius: 2.5, color: '#ffccbc', glowColor: '#e64a19',
    orbitRadius: 870, speed: 0.0000016 * SPEED, angle: 5.8,
    type: 'dwarf',
    stats: {
      'Тип': 'Карликовая планета',
      'Диаметр': '≈1 430 км',
      'Период обращения': '305 лет',
      'Расстояние от Солнца': '6.85 млрд км (ср.)',
      'Температура': '-239°C',
      'Спутники': '1 (MK2)'
    },
    desc: 'Макемаке — третья по размеру карликовая планета пояса Койпера. Поверхность покрыта метановым льдом и органическими соединениями, придающими ей красноватый оттенок. Назван в честь бога плодородия народа рапануи.',
    creature: 'Существо созвездия Волос Вероники'
  },
  // --- НОВЫЕ КАРЛИКОВЫЕ ПЛАНЕТЫ ---
  {
    name: 'Седна', nameEn: 'Sedna',
    radius: 2.5, color: '#ff7043', glowColor: '#bf360c',
    orbitRadius: 960, speed: 0.0000003 * SPEED, angle: 0.7,
    type: 'dwarf',
    stats: {
      'Тип': 'Карликовая планета (гипотетич.)',
      'Диаметр': '≈995 км',
      'Период обращения': '≈11 400 лет',
      'Расстояние от Солнца': 'до 937 млрд км',
      'Температура': '-240°C',
      'Спутники': '0 (возможно 1)'
    },
    desc: 'Седна — один из самых далёких известных объектов Солнечной системы, открытый в 2003 году. Её необычно вытянутая орбита предполагает существование гипотетической Планеты X. Красноватый цвет поверхности — из-за толинов (органических соединений).',
    creature: 'Существо созвездия Ориона'
  },
  {
    name: 'Гонггонг', nameEn: 'Gonggong',
    radius: 2, color: '#ef9a9a', glowColor: '#c62828',
    orbitRadius: 900, speed: 0.0000005 * SPEED, angle: 3.3,
    type: 'dwarf',
    stats: {
      'Тип': 'Карликовая планета',
      'Диаметр': '≈1 230 км',
      'Период обращения': '≈554 лет',
      'Расстояние от Солнца': '≈12 млрд км (ср.)',
      'Спутники': '1 (Сянлю)'
    },
    desc: 'Гонggong (225088) — карликовая планета рассеянного диска, открытая в 2007 году. Названа в честь китайского бога воды с красным лицом. Имеет ярко-красный оттенок из-за органических молекул на поверхности.',
    creature: 'Существо созвездия Лебедя'
  },
  {
    name: 'Веста', nameEn: 'Vesta',
    radius: 2.5, color: '#bdbdbd', glowColor: '#757575',
    orbitRadius: 255, speed: 0.000226 * SPEED, angle: 5.0,
    type: 'dwarf',
    stats: {
      'Тип': 'Астероид / протопланета',
      'Диаметр': '525 км',
      'Период обращения': '3.63 лет',
      'Расстояние от Солнца': '353.4 млн км',
      'Исследована': 'Зонд Dawn (2011–2012)'
    },
    desc: 'Веста — второй по массе объект в главном поясе астероидов. Исследована орбитальным зондом Dawn в 2011–2012 годах. Имеет гигантский кратер Реасилвия диаметром около 505 км с центральным пиком высотой 22 км — одним из высочайших в Солнечной системе.',
    creature: 'Существо созвездия Девы'
  },
  {
    name: 'Паллада', nameEn: 'Pallas',
    radius: 2, color: '#a5a5a5', glowColor: '#616161',
    orbitRadius: 278, speed: 0.000213 * SPEED, angle: 1.8,
    type: 'dwarf',
    stats: {
      'Тип': 'Астероид (пояс)',
      'Диаметр': '512 км',
      'Период обращения': '4.62 лет',
      'Расстояние от Солнца': '414.7 млн км (ср.)',
      'Наклон орбиты': '34.8° (высокий)'
    },
    desc: 'Паллада — третий по массе объект главного пояса астероидов. Открыт Генрихом Ольберсом в 1802 году. Имеет высокий наклон орбиты, что делает её труднодоступной для космических миссий. Поверхность богата углеродом.',
    creature: 'Существо созвездия Афины'
  },
  {
    name: 'Глория (Анти-Земля)', nameEn: 'Gloria / Counter-Earth',
    radius: 7, color: '#66bb6a', glowColor: '#2e7d32',
    orbitRadius: 165, speed: 0.001 * SPEED, angle: 2.0 + Math.PI,
    type: 'dwarf',
    stats: {
      'Тип': 'Гипотетическое тело (L3)',
      'Орбита': 'Идентична Земле (точка Лагранжа L3)',
      'Статус': 'Гипотетический объект',
      'Также известна': 'Контр-Земля, Антихтон'
    },
    desc: 'Глория или Анти-Земля — гипотетический объект в точке Лагранжа L3, всегда скрытый за Солнцем напротив Земли. Идея восходит к древнегреческой философии (Филолай). Современные наблюдения (зонды STEREO) исключили существование крупных тел в этой точке.',
    creature: 'Зеркальный двойник'
  },
  {
    name: 'Анти-Луна', nameEn: 'Anti-Moon',
    radius: 2.5, color: '#ce93d8', glowColor: '#7b1fa2',
    orbitRadius: 165, speed: 0.001 * SPEED, angle: 2.0 + Math.PI + 0.3,
    type: 'dwarf',
    stats: {
      'Тип': 'Гипотетическое тело',
      'Орбита': 'Троянский астероид Земли (L4/L5)',
      'Статус': 'Предположительный'
    },
    desc: 'Гипотетический объект-компаньон Земли в троянских точках орбиты. В 2011 году был открыт первый подтверждённый троянский астероид Земли — 2010 TK7 в точке L4.',
    creature: 'Тень Луны'
  }
];

const COMETS = [
  {
    name: 'Галлея', nameEn: "Halley's Comet",
    type: 'comet',
    orbitRadius: 620, speed: 0.00003 * SPEED, angle: 2.0,
    tailAngle: 0.3,
    stats: {
      'Тип': 'Короткопериодическая комета',
      'Период': '75–76 лет',
      'Следующий перигелий': 'Июль 2061',
      'Размер ядра': '15×8×8 км',
      'Состав': 'Лёд, пыль, органика'
    },
    desc: 'Комета Галлея — самая известная периодическая комета, наблюдаемая невооружённым глазом. Последний раз прошла через внутреннюю Солнечную систему в 1986 году. Упоминается в Байёском гобелене (1066 г.) как знамение.',
    creature: 'Комета путешественница'
  },
  {
    name: 'Чурюмова-Герасименко', nameEn: '67P/C-G',
    type: 'comet',
    orbitRadius: 550, speed: 0.000045 * SPEED, angle: 4.5,
    tailAngle: 0.8,
    stats: {
      'Тип': 'Короткопериодическая комета',
      'Период': '6.45 лет',
      'Размер ядра': '4.3×4.1 км',
      'Особенность': 'Исследована зондом Rosetta'
    },
    desc: 'Комета 67P/Чурюмова-Герасименко — цель миссии ESA Rosetta (2004–2016). Впервые в истории на комету был высажен зонд Philae. Ядро кометы имеет форму резинового утёнка из двух слившихся частей.',
    creature: 'Комета-путник'
  },
  // --- НОВЫЕ КОМЕТЫ ---
  {
    name: 'НЕОВАЙЗ', nameEn: 'NEOWISE (C/2020 F3)',
    type: 'comet',
    orbitRadius: 750, speed: 0.000008 * SPEED, angle: 1.1,
    tailAngle: 0.5,
    stats: {
      'Тип': 'Долгопериодическая комета',
      'Период': '≈6 800 лет',
      'Открыта': '27 марта 2020 (NEOWISE)',
      'Перигелий': '3 июля 2020',
      'Состав': 'Лёд, силикаты, пыль'
    },
    desc: 'Комета NEOWISE (C/2020 F3) — одна из самых ярких комет XXI века, наблюдавшаяся невооружённым глазом летом 2020 года. Имела два отчётливых хвоста: пылевой и ионный. Открыта космическим телескопом NEOWISE.',
    creature: 'Небесная странница'
  },
  {
    name: 'Борисов', nameEn: '2I/Borisov',
    type: 'comet',
    orbitRadius: 820, speed: 0.000006 * SPEED, angle: 3.8,
    tailAngle: 1.1,
    stats: {
      'Тип': 'Межзвёздная комета',
      'Открыта': '30 августа 2019 (Г. Борисов)',
      'Происхождение': 'Другая звёздная система',
      'Особенность': 'Второй известный межзвёздный объект'
    },
    desc: 'Борисов — первая подтверждённая межзвёздная комета, прилетевшая из другой звёздной системы. Открыта крымским астрономом Геннадием Борисовым. По составу похожа на кометы Солнечной системы, что говорит о схожести планетных систем.',
    creature: 'Странник из глубин'
  },
  {
    name: 'АЙСОН', nameEn: 'C/2012 S1 (ISON)',
    type: 'comet',
    orbitRadius: 500, speed: 0.000025 * SPEED, angle: 5.2,
    tailAngle: 0.2,
    stats: {
      'Тип': 'Солнцецарапающая комета',
      'Открыта': '2012 г.',
      'Перигелий': '28 ноября 2013',
      'Судьба': 'Разрушена у Солнца'
    },
    desc: 'Комета АЙСОН (C/2012 S1) — «комета века», разрушившаяся при прохождении в 1.2 млн км от поверхности Солнца 28 ноября 2013 года. Была открыта международной научной программой ISON. Принадлежала к классу солнцецарапающих комет.',
    creature: 'Погибшая звезда'
  }
];

// ===========================
// МЕЖЗВЁЗДНЫЕ ОБЪЕКТЫ
// ===========================
const INTERSTELLAR = [
  {
    name: '1I/Оумуамуа', nameEn: "1I/ʻOumuamua",
    type: 'interstellar',
    // Реально ~103-105 а.е., но масштабируем ближе чтобы видеть на карте
    orbitRadius: 920,
    angle: 0.55,
    speed: 0.000002 * SPEED,
    // Направление движения: уходит в сторону Пегаса (вправо-вверх)
    driftX: 0.012 * SPEED,
    driftY: -0.007 * SPEED,
    color: '#c8a96e',
    glowColor: '#ff9944',
    stats: {
      'Тип': 'Межзвёздный объект (1I)',
      'Открыт': '19 октября 2017 г.',
      'Расстояние (2026)': '≈103–105 а.е. от Земли',
      'Направление': 'Созвездие Пегаса',
      'Размер': '≈400×40 м (сигарообразный)',
      'Особенность': 'Ускорение без выброса газа',
      'Статус': 'Покинул Пояс Койпера'
    },
    desc: '«Первый разведчик» — первый подтверждённый межзвёздный объект в Солнечной системе. В 2017 году нарушил все законы физики, ускорившись без видимого выброса газа. Сигарообразная форма (400×40 м) и аномальное ускорение породили гипотезы об искусственном происхождении. Сейчас на расстоянии ~103–105 а.е., официально покинул Пояс Койпера и движется в сторону созвездия Пегаса.',
    creature: null
  },
  {
    name: '3I/ATLAS', nameEn: "3I/ATLAS (C/2025 N1)",
    type: 'interstellar',
    orbitRadius: 310,
    angle: 1.1,
    speed: 0.0000035 * SPEED,
    driftX: 0.008 * SPEED,
    driftY: 0.005 * SPEED,
    color: '#7ecfff',
    glowColor: '#44aaff',
    stats: {
      'Тип': 'Межзвёздный объект (3I)',
      'Открыт': 'Июль 2025 г. (телескоп ATLAS)',
      'Расстояние (март 2026)': '≈5.2 а.е. от Земли',
      'Направление': 'Созвездие Близнецов',
      'Положение': 'Район орбиты Юпитера',
      'Особенность': 'Третий межзвёздный объект',
      'Статус': 'Стремительно удаляется'
    },
    desc: '«Новый гость» — третий подтверждённый межзвёздный объект, обнаруженный в июле 2025 года телескопом ATLAS. По состоянию на март 2026 года находится на расстоянии ~5.2 а.е. от Земли, в районе орбиты Юпитера, и стремительно удаляется. Наблюдается в созвездии Близнецов.',
    creature: null
  }
];


// ===========================
// ДЖАГГЕРНАУТ
// ===========================
const JUGGERNAUT_IMG = "data:image/jpeg;base64,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";
const SMITH_IMG = "data:image/jpeg;base64,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";

const JUGGERNAUT = {
  name: 'Джаггернаут',
  nameEn: 'The Derelict / Juggernaut',
  type: 'juggernaut',
  // Орбита вокруг Земли: Луна на orbitR=18, Джаггернаут на 36 (в 2 раза дальше)
  // Земля: orbitRadius=165, speed=0.001*SPEED, angle=2.0
  orbitR: 36,          // орбита вокруг Земли (в 2 раза дальше Луны)
  angle: 1.0,
  speed: 0.013 * (1/9), // та же скорость что и у Луны
  stats: {
    'Тип': 'Инопланетный корабль («Древние инженеры»)',
    'Форма': 'Серповидная / подковообразная',
    'Длина': '≈ 3.4 – 4 км',
    'Высота': '≈ 500 метров',
    'Стиль': 'Биотехнологический, органический',
    'Пилот': 'Mr. Smith',
    'Статус': 'Активен, орбита Земли'
  },
  desc: '«Джаггернаут» (The Derelict) — серповидный корабль длиной около 3.4–4 км и высотой около 500 метров. Имеет органические, «биотехнологические» формы. Именно из-за этого его прозвали Джаггернаутом — он выглядит не как собранная из панелей машина, а как выращенный объект. Символ «Древних инженеров», посещавших нашу систему задолго до появления человечества. Сейчас за штурвалом — Mr. Smith.',
  creature: null
};

// ===========================
// СПЕЦИАЛЬНЫЕ ОБЪЕКТЫ
// ===========================
// Нибиру — гипотетическая планета, движется по сильно вытянутой эллиптической орбите
const NIBIRU = {
  name: 'Нибиру', nameEn: 'Nibiru / Planet X',
  type: 'special',
  // Параметры эллиптической орбиты
  semiMajor: 950,  // большая полуось
  semiMinor: 300,  // малая полуось (очень вытянутая)
  speed: 0.0000002 * SPEED,
  angle: 4.0,
  orbitTilt: 0.6, // наклон орбиты
  stats: {
    'Тип': 'Гипотетическая планета (Планета X)',
    'Орбита': 'Крайне вытянутый эллипс',
    'Период': 'Гипотетически ~3 600 лет',
    'Статус': 'Научно не подтверждена',
    'В мифологии': 'Планета богов-Аннунаков (шумерск.)'
  },
  desc: 'Нибиру — гипотетическая планета из шумерской мифологии и конспирологических теорий. По некоторым версиям — это «Планета Икс» или блуждающая планета на сильно вытянутой орбите. Официальная наука не подтвердила её существование, однако поиск Планеты X продолжается из-за гравитационных аномалий далёких объектов пояса Койпера.',
  creature: null
};

// Облако Оорта — отображается как кольцо на краю системы
const OORT_CLOUD_R = 1050;

// Точки Лагранжа Земли (L4 и L5 — троянские точки)
const LAGRANGE_POINTS = [
  {
    name: 'Точка Лагранжа L4', nameEn: 'Lagrange L4',
    type: 'lagrange',
    orbitRadius: 165, angle: 2.0 + Math.PI / 3,
    stats: { 'Тип': 'Точка Лагранжа', 'Положение': '60° перед Землёй' }
  },
  {
    name: 'Точка Лагранжа L3', nameEn: 'Lagrange L3',
    type: 'lagrange',
    orbitRadius: 165, angle: 2.0 + Math.PI,
    stats: { 'Тип': 'Точка Лагранжа', 'Положение': 'Напротив Земли (за Солнцем)' }
  }
];

// ===========================
// 88 CONSTELLATIONS DATA
// ===========================
const CONSTELLATIONS = [
  { name: 'Андромеда', latin: 'Andromeda', points: [[10,15],[25,10],[40,20],[55,12]] },
  { name: 'Антлия', latin: 'Antlia', points: [[5,20],[25,15],[35,30]] },
  { name: 'Апус', latin: 'Apus', points: [[15,10],[30,20],[20,35]] },
  { name: 'Водолей', latin: 'Aquarius', points: [[10,25],[25,15],[40,20],[55,30],[45,40]] },
  { name: 'Орёл', latin: 'Aquila', points: [[30,5],[20,20],[40,20],[30,35]] },
  { name: 'Алтарь', latin: 'Ara', points: [[10,15],[25,10],[35,25],[20,35]] },
  { name: 'Овен', latin: 'Aries', points: [[10,20],[30,15],[50,20]] },
  { name: 'Колесница', latin: 'Auriga', points: [[20,5],[40,5],[50,25],[30,35],[10,25]] },
  { name: 'Волопас', latin: 'Boötes', points: [[30,5],[15,20],[20,35],[40,35],[45,20]] },
  { name: 'Резец', latin: 'Caelum', points: [[10,20],[30,15],[40,30]] },
  { name: 'Жираф', latin: 'Camelopardalis', points: [[5,5],[20,15],[35,10],[50,20],[40,35]] },
  { name: 'Рак', latin: 'Cancer', points: [[10,25],[25,15],[40,25],[25,35]] },
  { name: 'Гончие Псы', latin: 'Canes Venatici', points: [[15,15],[40,25]] },
  { name: 'Б. Пёс', latin: 'Canis Major', points: [[20,5],[35,20],[25,35],[45,30],[50,15]] },
  { name: 'М. Пёс', latin: 'Canis Minor', points: [[15,20],[40,25]] },
  { name: 'Козерог', latin: 'Capricornus', points: [[5,20],[20,10],[40,15],[55,25],[40,35],[15,35]] },
  { name: 'Киль', latin: 'Carina', points: [[5,15],[20,10],[40,20],[55,15],[45,30]] },
  { name: 'Кассиопея', latin: 'Cassiopeia', points: [[5,25],[15,10],[30,20],[45,10],[55,25]] },
  { name: 'Кентавр', latin: 'Centaurus', points: [[5,20],[20,10],[35,20],[50,15],[55,30],[35,35]] },
  { name: 'Цефей', latin: 'Cepheus', points: [[30,5],[10,20],[20,35],[40,35],[50,20]] },
  { name: 'Кит', latin: 'Cetus', points: [[5,20],[20,10],[35,15],[50,25],[40,38],[20,35]] },
  { name: 'Хамелеон', latin: 'Chamaeleon', points: [[10,20],[30,15],[45,25],[25,35]] },
  { name: 'Циркуль', latin: 'Circinus', points: [[15,10],[30,25],[45,15]] },
  { name: 'Голубь', latin: 'Columba', points: [[10,20],[25,15],[40,22],[50,30]] },
  { name: 'Волосы', latin: 'Coma Berenices', points: [[10,15],[30,20],[45,12]] },
  { name: 'Ю. Корона', latin: 'Corona Australis', points: [[10,25],[20,15],[35,12],[50,18],[55,30]] },
  { name: 'С. Корона', latin: 'Corona Borealis', points: [[10,20],[20,10],[35,8],[48,15],[55,28]] },
  { name: 'Ворон', latin: 'Corvus', points: [[10,15],[25,10],[40,20],[30,35]] },
  { name: 'Чаша', latin: 'Crater', points: [[10,20],[25,12],[40,15],[45,30],[20,35]] },
  { name: 'Южный Крест', latin: 'Crux', points: [[30,5],[30,35],[10,20],[50,20]] },
  { name: 'Лебедь', latin: 'Cygnus', points: [[30,5],[30,35],[5,20],[55,22],[20,15],[40,15]] },
  { name: 'Дельфин', latin: 'Delphinus', points: [[20,10],[35,15],[45,25],[30,35],[15,25]] },
  { name: 'Меч-рыба', latin: 'Dorado', points: [[10,20],[30,12],[45,25],[25,35]] },
  { name: 'Дракон', latin: 'Draco', points: [[10,5],[25,15],[40,10],[55,20],[50,35],[30,40],[15,30]] },
  { name: 'Малый Конь', latin: 'Equuleus', points: [[15,20],[35,15],[45,30]] },
  { name: 'Эридан', latin: 'Eridanus', points: [[5,10],[20,20],[35,15],[50,25],[45,38],[25,40],[10,35]] },
  { name: 'Печь', latin: 'Fornax', points: [[10,20],[30,15],[45,25]] },
  { name: 'Близнецы', latin: 'Gemini', points: [[10,5],[10,35],[30,5],[30,35],[20,20]] },
  { name: 'Журавль', latin: 'Grus', points: [[30,5],[20,20],[35,30],[45,15],[30,40]] },
  { name: 'Геркулес', latin: 'Hercules', points: [[15,10],[30,20],[45,10],[50,30],[30,38],[10,30]] },
  { name: 'Часы', latin: 'Horologium', points: [[15,10],[30,20],[40,35],[20,40]] },
  { name: 'Гидра', latin: 'Hydra', points: [[5,20],[20,15],[35,20],[50,15],[60,25],[50,35],[30,38]] },
  { name: 'Гидра (ю.)', latin: 'Hydrus', points: [[10,15],[30,25],[45,15],[30,35]] },
  { name: 'Индеец', latin: 'Indus', points: [[15,10],[30,20],[45,15],[35,35]] },
  { name: 'Ящерица', latin: 'Lacerta', points: [[10,20],[25,12],[40,20],[30,35]] },
  { name: 'Лев', latin: 'Leo', points: [[5,25],[15,10],[30,15],[45,10],[55,20],[45,35],[25,35]] },
  { name: 'Малый Лев', latin: 'Leo Minor', points: [[10,20],[30,15],[50,20]] },
  { name: 'Заяц', latin: 'Lepus', points: [[10,15],[25,10],[40,20],[45,33],[25,35]] },
  { name: 'Весы', latin: 'Libra', points: [[15,10],[30,20],[45,10],[50,35],[15,35],[30,20]] },
  { name: 'Волк', latin: 'Lupus', points: [[15,10],[30,20],[45,12],[55,28],[40,35],[20,30]] },
  { name: 'Рысь', latin: 'Lynx', points: [[5,15],[20,20],[35,15],[50,25],[55,38]] },
  { name: 'Лира', latin: 'Lyra', points: [[30,5],[15,22],[25,35],[35,35],[45,22]] },
  { name: 'Столовая Гора', latin: 'Mensa', points: [[10,20],[30,15],[45,25]] },
  { name: 'Микроскоп', latin: 'Microscopium', points: [[15,15],[35,20],[45,35]] },
  { name: 'Единорог', latin: 'Monoceros', points: [[10,15],[25,25],[40,15],[55,25],[40,35]] },
  { name: 'Муха', latin: 'Musca', points: [[15,20],[30,12],[45,20],[30,35]] },
  { name: 'Наугольник', latin: 'Norma', points: [[10,10],[30,10],[30,30],[10,30]] },
  { name: 'Октант', latin: 'Octans', points: [[10,20],[35,10],[55,30],[30,40]] },
  { name: 'Змееносец', latin: 'Ophiuchus', points: [[30,5],[10,20],[20,38],[40,38],[50,20]] },
  { name: 'Орион', latin: 'Orion', points: [[15,5],[45,5],[50,20],[40,35],[20,35],[10,20],[30,15],[30,25]] },
  { name: 'Павлин', latin: 'Pavo', points: [[30,5],[10,20],[25,35],[45,35],[50,20]] },
  { name: 'Пегас', latin: 'Pegasus', points: [[5,5],[55,5],[55,40],[5,40]] },
  { name: 'Персей', latin: 'Perseus', points: [[15,5],[30,15],[45,5],[50,25],[35,38],[15,30]] },
  { name: 'Феникс', latin: 'Phoenix', points: [[30,5],[10,20],[20,38],[40,38],[50,20]] },
  { name: 'Живописец', latin: 'Pictor', points: [[10,20],[30,12],[50,22]] },
  { name: 'Рыбы', latin: 'Pisces', points: [[5,20],[20,10],[35,20],[50,15],[55,30],[40,38],[15,35]] },
  { name: 'Ю. Рыба', latin: 'Piscis Austrinus', points: [[10,15],[25,25],[45,20],[55,30]] },
  { name: 'Корма', latin: 'Puppis', points: [[15,10],[30,20],[45,12],[50,30],[25,35]] },
  { name: 'Компас', latin: 'Pyxis', points: [[15,15],[30,25],[45,15]] },
  { name: 'Сетка', latin: 'Reticulum', points: [[10,10],[35,10],[35,35],[10,35]] },
  { name: 'Стрела', latin: 'Sagitta', points: [[5,20],[30,20],[55,20],[40,10]] },
  { name: 'Стрелец', latin: 'Sagittarius', points: [[20,5],[35,15],[50,5],[55,25],[45,38],[25,38],[10,25]] },
  { name: 'Скорпион', latin: 'Scorpius', points: [[10,10],[25,20],[40,15],[55,25],[50,38],[35,40],[20,35]] },
  { name: 'Скульптор', latin: 'Sculptor', points: [[10,20],[30,15],[50,22],[35,35]] },
  { name: 'Щит', latin: 'Scutum', points: [[15,10],[40,10],[45,35],[10,35]] },
  { name: 'Змея', latin: 'Serpens', points: [[5,20],[20,12],[35,20],[50,12],[55,28]] },
  { name: 'Секстант', latin: 'Sextans', points: [[10,20],[30,15],[50,20]] },
  { name: 'Телец', latin: 'Taurus', points: [[5,20],[20,12],[35,20],[50,10],[55,25],[40,35]] },
  { name: 'Телескоп', latin: 'Telescopium', points: [[15,10],[30,22],[45,12],[35,35]] },
  { name: 'Треугольник', latin: 'Triangulum', points: [[10,35],[30,5],[55,35]] },
  { name: 'Ю. Треугольник', latin: 'Triangulum Australe', points: [[10,35],[30,5],[55,35]] },
  { name: 'Тукан', latin: 'Tucana', points: [[10,15],[30,20],[45,12],[35,35],[15,30]] },
  { name: 'Б. Медведица', latin: 'Ursa Major', points: [[5,25],[20,15],[35,15],[50,20],[55,35],[42,40],[25,38],[40,25]] },
  { name: 'М. Медведица', latin: 'Ursa Minor', points: [[30,5],[15,20],[10,35],[25,38],[40,30],[45,15],[35,20]] },
  { name: 'Парус', latin: 'Vela', points: [[5,20],[20,12],[35,22],[50,15],[55,30],[35,38]] },
  { name: 'Дева', latin: 'Virgo', points: [[10,15],[25,25],[40,15],[55,25],[45,38],[20,35]] },
  { name: 'Летучая Рыба', latin: 'Volans', points: [[10,20],[25,12],[40,20],[30,35]] },
  { name: 'Лисичка', latin: 'Vulpecula', points: [[10,20],[30,15],[50,22]] },
];

// Star colors for constellations
const STAR_COLORS = ['#fff', '#ffe4b5', '#add8e6', '#ffd700', '#ff9999'];

// ===========================
// SOLAR SYSTEM CANVAS
// ===========================
const canvas = document.getElementById('solar-canvas');
const ctx = canvas.getContext('2d');
const tooltip = document.getElementById('tooltip');
const ttTitle = document.getElementById('tt-title');
const ttBody = document.getElementById('tt-body');
const constList = document.getElementById('constellation-list');
const systemList = document.getElementById('system-list');
const systemEmpty = document.getElementById('system-empty');
const navPill = document.getElementById('nav-pill');
const audioToggle = document.getElementById('audio-toggle');
const audioCaption = document.getElementById('audio-caption');
const flightModeButtons = document.getElementById('flight-mode-buttons');
const flightStatus = document.getElementById('flight-status');
const flightControls = document.getElementById('flight-controls');
const flightStopBtn = document.getElementById('flight-stop-btn');
const flightUndockBtn = document.getElementById('flight-undock-btn');
const cameraFollowBtn = document.getElementById('camera-follow-btn');
const startOverlay = document.getElementById('start-overlay');
const shipClassGrid = document.getElementById('ship-class-grid');
const pilotGrid = document.getElementById('pilot-grid');
const startSummaryText = document.getElementById('start-summary-text');
const launchButton = document.getElementById('launch-button');
const resourceGrid = document.getElementById('resource-grid');
const colonySummary = document.getElementById('colony-summary');
const AUDIO_FILES = {
  ambient: './assets/audio/ambient-space.wav',
  click: './assets/audio/click.wav',
  panel: './assets/audio/panel-open.wav',
  warp: './assets/audio/warp.wav'
};

const audioManager = (() => {
  let audioContext = null;
  let masterGain = null;
  let musicGain = null;
  let fxGain = null;
  let ambientReady = false;
  let enabled = false;
  let pulseTimer = null;
  let ambientAudio = null;
  const localAudioState = { available: false, checked: false };

  function updateButton() {
    audioToggle.textContent = enabled ? 'Музыка: вкл' : 'Музыка: выкл';
    audioToggle.classList.toggle('active', enabled);
    audioToggle.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    audioCaption.textContent = enabled
      ? (localAudioState.available
          ? 'Локальные аудиофайлы активны: фон, сигналы интерфейса и перелёт'
          : 'Атмосфера активна: фон, сигналы интерфейса и перелёт')
      : 'Фоновая атмосфера включается по клику';
  }

  function initLocalAudio() {
    if (localAudioState.checked) return;
    localAudioState.checked = true;
    ambientAudio = new Audio(AUDIO_FILES.ambient);
    ambientAudio.loop = true;
    ambientAudio.preload = 'auto';
    ambientAudio.volume = 0.34;
    ambientAudio.addEventListener('canplaythrough', () => {
      localAudioState.available = true;
      updateButton();
    }, { once: true });
    ambientAudio.addEventListener('error', () => {
      localAudioState.available = false;
      updateButton();
    }, { once: true });
    ambientAudio.load();
  }

  function playLocalFx(src, volume) {
    if (!enabled || !localAudioState.available) return false;
    const clip = new Audio(src);
    clip.preload = 'auto';
    clip.volume = volume;
    clip.play().catch(() => {});
    return true;
  }

  function ensureContext() {
    if (audioContext) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      audioCaption.textContent = 'Браузер не поддерживает Web Audio';
      audioToggle.disabled = true;
      return;
    }

    audioContext = new AudioCtx();
    masterGain = audioContext.createGain();
    musicGain = audioContext.createGain();
    fxGain = audioContext.createGain();

    masterGain.gain.value = 0;
    musicGain.gain.value = 0.8;
    fxGain.gain.value = 0.42;

    musicGain.connect(masterGain);
    fxGain.connect(masterGain);
    masterGain.connect(audioContext.destination);
  }

  function createPadVoice(frequency, type, baseVolume, filterFrequency, detune = 0) {
    const osc = audioContext.createOscillator();
    const filter = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();
    const lfo = audioContext.createOscillator();
    const lfoGain = audioContext.createGain();

    osc.type = type;
    osc.frequency.value = frequency;
    osc.detune.value = detune;

    filter.type = 'lowpass';
    filter.frequency.value = filterFrequency;
    filter.Q.value = 0.45;

    gain.gain.value = baseVolume;

    lfo.type = 'sine';
    lfo.frequency.value = 0.05 + Math.random() * 0.08;
    lfoGain.gain.value = baseVolume * 0.35;

    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(musicGain);

    osc.start();
    lfo.start();

    return { osc, filter, gain, lfo, lfoGain };
  }

  function buildAmbient() {
    if (!audioContext || ambientReady) return;

    createPadVoice(55, 'triangle', 0.045, 420);
    createPadVoice(82.41, 'sine', 0.032, 680, -4);
    createPadVoice(123.47, 'triangle', 0.022, 860, 7);
    createPadVoice(164.81, 'sine', 0.016, 1200, 3);

    pulseTimer = window.setInterval(() => {
      if (!enabled || !audioContext) return;

      const now = audioContext.currentTime;
      const pulse = audioContext.createOscillator();
      const pulseGain = audioContext.createGain();
      const pulseFilter = audioContext.createBiquadFilter();
      const notes = [220, 246.94, 261.63, 329.63];

      pulse.type = 'triangle';
      pulse.frequency.value = notes[Math.floor(Math.random() * notes.length)];
      pulse.detune.value = Math.random() * 8 - 4;

      pulseFilter.type = 'bandpass';
      pulseFilter.frequency.value = 900 + Math.random() * 500;
      pulseFilter.Q.value = 2.6;

      pulseGain.gain.setValueAtTime(0.0001, now);
      pulseGain.gain.linearRampToValueAtTime(0.024, now + 0.35);
      pulseGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      pulse.connect(pulseFilter);
      pulseFilter.connect(pulseGain);
      pulseGain.connect(musicGain);

      pulse.start(now);
      pulse.stop(now + 3);
    }, 4200);

    ambientReady = true;
  }

  function playTone(frequency, duration, type, volume, options = {}) {
    if (!enabled || !audioContext) return;

    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);
    if (options.slideTo) {
      osc.frequency.exponentialRampToValueAtTime(options.slideTo, now + duration);
    }

    filter.type = options.filterType || 'lowpass';
    filter.frequency.value = options.filterFrequency || 1800;
    filter.Q.value = options.q || 0.8;

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(fxGain);

    osc.start(now);
    osc.stop(now + duration + 0.04);
  }

  async function start() {
    initLocalAudio();
    ensureContext();
    if (audioContext) {
      await audioContext.resume();
    }

    enabled = true;

    if (localAudioState.available && ambientAudio) {
      ambientAudio.currentTime = 0;
      ambientAudio.play().catch(() => {
        localAudioState.available = false;
        if (audioContext) {
          buildAmbient();
          masterGain.gain.cancelScheduledValues(audioContext.currentTime);
          masterGain.gain.setTargetAtTime(0.22, audioContext.currentTime, 0.8);
        }
        updateButton();
      });
    } else if (audioContext) {
      buildAmbient();
      masterGain.gain.cancelScheduledValues(audioContext.currentTime);
      masterGain.gain.setTargetAtTime(0.22, audioContext.currentTime, 0.8);
    }

    updateButton();
  }

  function stop() {
    if (ambientAudio) {
      ambientAudio.pause();
      ambientAudio.currentTime = 0;
    }
    if (!audioContext) {
      enabled = false;
      updateButton();
      return;
    }

    enabled = false;
    masterGain.gain.cancelScheduledValues(audioContext.currentTime);
    masterGain.gain.setTargetAtTime(0.0001, audioContext.currentTime, 0.5);
    updateButton();
  }

  async function toggle() {
    if (enabled) {
      stop();
      return;
    }
    await start();
  }

  function playConstellationClick() {
    if (playLocalFx(AUDIO_FILES.click, 0.42)) return;
    playTone(392, 0.2, 'triangle', 0.03, { slideTo: 523.25, filterFrequency: 1800 });
  }

  function playPanelOpen() {
    if (playLocalFx(AUDIO_FILES.panel, 0.38)) return;
    playTone(523.25, 0.26, 'sine', 0.034, { slideTo: 659.25, filterFrequency: 2200 });
  }

  function playWarp() {
    if (playLocalFx(AUDIO_FILES.warp, 0.5)) return;
    playTone(180, 0.65, 'sawtooth', 0.032, { slideTo: 420, filterFrequency: 1400, q: 1.8 });
    window.setTimeout(() => playTone(260, 0.85, 'triangle', 0.028, { slideTo: 620, filterFrequency: 2000 }), 110);
    window.setTimeout(() => playTone(420, 1.15, 'sine', 0.024, { slideTo: 840, filterFrequency: 2600 }), 180);
  }

  updateButton();

  return {
    toggle,
    playConstellationClick,
    playPanelOpen,
    playWarp
  };
})();

audioToggle.addEventListener('click', () => {
  audioManager.toggle();
});

const SHIP_CLASSES = [
  {
    id: 'transport',
    name: 'Транспорт',
    icon: '⛟',
    description: 'Устойчивый тяжелый корабль для перевозки модулей, грузов и колонизационных контейнеров.',
    stats: ['Груз: высокий', 'Маневр: средний', 'Роль: снабжение'],
    color: '#90caf9',
    accentColor: '#e3f2fd',
    orbitR: 44,
    speed: 0.011 * SPEED,
    silhouette: 'transport'
  },
  {
    id: 'research',
    name: 'Исследователь',
    icon: '🛰',
    description: 'Легкий разведывательный корабль с сенсорной дугой и расширенной научной телеметрией.',
    stats: ['Сканер: высокий', 'Маневр: высокий', 'Роль: разведка'],
    color: '#80cbc4',
    accentColor: '#d9fff8',
    orbitR: 52,
    speed: 0.015 * SPEED,
    silhouette: 'research'
  },
  {
    id: 'builder',
    name: 'Строитель',
    icon: '🛠',
    description: 'Орбитальный сборщик с внешними фермами и инженерными модулями для постройки станций.',
    stats: ['Монтаж: высокий', 'Броня: средняя', 'Роль: строительство'],
    color: '#ffcc80',
    accentColor: '#fff3d8',
    orbitR: 60,
    speed: 0.009 * SPEED,
    silhouette: 'builder'
  }
];

const PILOTS = [
  {
    id: 'pilot-01',
    name: 'Алексей Воронов',
    gender: 'Мужчина',
    callSign: 'Полюс',
    specialty: 'Орбитальная навигация',
    bio: 'Специалист по удержанию тяжелых кораблей на устойчивых орбитах и точных маневрах возле Земли.',
    image: './assets/pilots/pilot-01.png'
  },
  {
    id: 'pilot-02',
    name: 'Марк Дронов',
    gender: 'Мужчина',
    callSign: 'Вектор',
    specialty: 'Дальняя разведка',
    bio: 'Работает с длинными трассами и нестандартными маршрутами между звездными системами.',
    image: './assets/pilots/pilot-02.png'
  },
  {
    id: 'pilot-03',
    name: 'Илья Руднев',
    gender: 'Мужчина',
    callSign: 'Бастион',
    specialty: 'Технический эскорт',
    bio: 'Умеет вести тяжелые платформы и сохранять устойчивость корабля во время сборочных операций.',
    image: './assets/pilots/pilot-03.png'
  },
  {
    id: 'pilot-04',
    name: 'Ева Миронова',
    gender: 'Женщина',
    callSign: 'Лира',
    specialty: 'Космическая картография',
    bio: 'Строит маршрутные карты и ведет исследовательские миссии в сложных зонах навигации.',
    image: './assets/pilots/pilot-04.png'
  },
  {
    id: 'pilot-05',
    name: 'София Невская',
    gender: 'Женщина',
    callSign: 'Касси',
    specialty: 'Научный контроль',
    bio: 'Курирует сканирование, телеметрию и сбор данных при входе в новые звездные системы.',
    image: './assets/pilots/pilot-05.png'
  },
  {
    id: 'pilot-06',
    name: 'Дарья Орлова',
    gender: 'Женщина',
    callSign: 'Фордж',
    specialty: 'Орбитальное строительство',
    bio: 'Ведет строительные платформы и координирует сборку объектов прямо на орбите Земли.',
    image: './assets/pilots/pilot-06.png'
  }
];

let selectedShipClassId = null;
let selectedPilotId = null;
let commanderName = '';
let activePanelObject = null;
let cameraFollowPlayer = false;

const FLIGHT_MODES = [
  { id: 'approach', label: 'Маневр', maxSpeed: 32, accel: 48 },
  { id: 'cruise', label: 'Крейсер', maxSpeed: 68, accel: 78 },
  { id: 'boost', label: 'Форсаж', maxSpeed: 116, accel: 120 }
];
const GAME_STORAGE_KEY = 'cosmos-colony-save-v1';
const PROFILE_STORAGE_KEY = 'cosmos-commander-profile-v1';

// ── Ресурсы ────────────────────────────────────────────────────────────
// Оригинальные: metal, composites, energy, data
// Новые: aether (Эфир), parts (Детали), mineral (Минерал), fuel (Топливо)
const RESOURCE_KEYS = ['metal', 'composites', 'energy', 'data', 'aether', 'parts', 'mineral', 'fuel'];

const RESOURCE_META = {
  metal:      { icon: '🔩', label: 'Металл',     desc: 'Базовый конструкционный материал.' },
  composites: { icon: '🧱', label: 'Композиты',  desc: 'Высокопрочные полимерные сплавы.' },
  energy:     { icon: '⚡', label: 'Энергия',    desc: 'Накопленный заряд энергоячеек.' },
  data:       { icon: '💾', label: 'Данные',      desc: 'Телеметрия и научные архивы.' },
  aether:     { icon: '✨', label: 'Эфир',        desc: 'Квантовое сырьё. Производится модулем Эфира на станции. Бесконечный источник.' },
  parts:      { icon: '⚙️', label: 'Детали',     desc: 'Компоненты, напечатанные из Эфира. Используются для строительства и производства дронов.' },
  mineral:    { icon: '💎', label: 'Минерал',     desc: 'Редкий кристалл, добываемый дронами с метеоритов. Нужен для Топливного завода.' },
  fuel:       { icon: '🌀', label: 'Топливо',     desc: 'Портальное топливо. Производится заводом из Минерала. Расходуется при варп-переходе.' }
};
const PLANET_COLONY_PRESETS = {
  'Меркурий': { suitability: 18, hazard: 'Перегрев и радиация', role: 'Солнечная добыча' },
  'Венера': { suitability: 12, hazard: 'Экстремальное давление', role: 'Атмосферные платформы' },
  'Земля': { suitability: 96, hazard: 'Перегрузка орбиты', role: 'Главный логистический узел' },
  'Марс': { suitability: 78, hazard: 'Пылевые штормы', role: 'Первая колония' },
  'Юпитер': { suitability: 20, hazard: 'Радиационные пояса', role: 'Орбитальная добыча' },
  'Сатурн': { suitability: 28, hazard: 'Холод и удаленность', role: 'Научный форпост' },
  'Уран': { suitability: 22, hazard: 'Дальний сектор', role: 'Газовый ресурсный узел' },
  'Нептун': { suitability: 24, hazard: 'Экстремальная дальность', role: 'Глубокий дозор' },
  'Плутон': { suitability: 34, hazard: 'Низкая энергия', role: 'Внешний архив' },
  'Гелион': { suitability: 26, hazard: 'Тепловой стресс', role: 'Промышленный форпост' },
  'Миракс': { suitability: 84, hazard: 'Высокая влажность', role: 'Колонизация' },
  'Талар': { suitability: 72, hazard: 'Биолюминесцентная атмосфера', role: 'Орбитальная ферма' },
  'Нокс': { suitability: 48, hazard: 'Электрические штормы', role: 'Ледяная лаборатория' },
  'Кепра': { suitability: 30, hazard: 'Сильная магнитосфера', role: 'Портал-хаб' },
  'Арка': { suitability: 44, hazard: 'Кристаллическая эрозия', role: 'Добывающий форпост' },
  'Вела': { suitability: 76, hazard: 'Песчаные штормы', role: 'Опорная колония' },
  'Офир': { suitability: 33, hazard: 'Кольцевой мусор', role: 'Орбитальный терминал' },
  'Сивра': { suitability: 52, hazard: 'Ледяной ветер', role: 'Дальняя станция' }
};
const STATION_MODULES = {
  // ── Базовые (уже были) ────────────────────────────────────────────
  core: {
    id: 'core', name: 'Ядро станции', icon: '🛰',
    desc: 'Центральный управляющий узел. Основа для всех остальных модулей.',
    cost: { metal: 120, composites: 80, energy: 60, data: 25 },
    requires: [],
    tier: 0
  },
  // ── Итерация 2: производственная цепочка ─────────────────────────
  aether_module: {
    id: 'aether_module', name: 'Модуль Эфира', icon: '✨',
    desc: 'Извлекает Эфир из квантового вакуума. Требует Чертёж (найти при исследовании планеты). Производит 10 ед/мин.',
    cost: { metal: 80, composites: 60, energy: 40, data: 30 },
    requires: ['core'],
    requiresBlueprint: 'blueprint_aether',
    produces: { aether: 10 },
    productionInterval: 60,
    tier: 1
  },
  printer: {
    id: 'printer', name: 'Принтер', icon: '🖨',
    desc: 'Печатает детали и компоненты из Эфира. Производит 5 Деталей / мин.',
    cost: { metal: 100, composites: 70, energy: 50, data: 20, aether: 30 },
    requires: ['core', 'aether_module'],
    produces: { parts: 5 },
    consumesPerCycle: { aether: 10 },
    productionInterval: 60,
    tier: 2
  },
  hangar: {
    id: 'hangar', name: 'Ангар дронов', icon: '🚁',
    desc: 'Хранит и обслуживает дронов-добытчиков. Вмещает до 5 дронов. Для производства дрона нужно 20 Деталей.',
    cost: { metal: 90, composites: 60, energy: 35, parts: 40 },
    requires: ['core', 'printer'],
    tier: 2
  },
  fuel_factory: {
    id: 'fuel_factory', name: 'Топливный завод', icon: '⛽',
    desc: 'Перерабатывает Минерал в Портальное топливо. 1 Минерал → 1 Топливо / мин.',
    cost: { metal: 150, composites: 100, energy: 80, parts: 60 },
    requires: ['core', 'hangar'],
    produces: { fuel: 1 },
    consumesPerCycle: { mineral: 1 },
    productionInterval: 60,
    tier: 3
  },
  portal_gen: {
    id: 'portal_gen', name: 'Портальный генератор', icon: '🌀',
    desc: 'Открывает варп-переход в другую звёздную систему. Расход: 3 единицы Топлива на прыжок.',
    cost: { metal: 200, composites: 150, energy: 120, parts: 80, fuel: 5 },
    requires: ['core', 'fuel_factory'],
    tier: 4
  },
  // ── Блок 5 (зарезервировано) ──────────────────────────────────────
  habitat: {
    id: 'habitat', name: 'Жилой модуль', icon: '🏠',
    desc: 'Жилые отсеки для экипажа. Расширяет вместимость трюма. [Блок 5]',
    cost: { metal: 60, composites: 50, energy: 24, parts: 20 },
    requires: ['core'],
    tier: 2,
    locked: true
  }
};
let currentFlightModeId = 'cruise';

let W, H, cx, cy;
let scale = 1;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let dragStart = { x: 0, y: 0 };
let dragOffset = { x: 0, y: 0 };
let screenObjects = [];
let lastTime = 0;
let warpState = null;

const ORION_SOURCE = CONSTELLATIONS.find(c => c.latin === 'Orion') || { name: 'Орион', latin: 'Orion', points: [[15,5],[45,5],[50,20],[40,35],[20,35],[10,20],[30,15],[30,25]] };
const SOLAR_SOURCE = { name: 'Солнечная система', latin: 'Solar System', points: [[8,22],[20,10],[32,22],[44,10],[56,22]] };

function cloneDeep(data) {
  return JSON.parse(JSON.stringify(data));
}

function makePlanet(config) {
  return Object.assign({
    type: 'planet',
    angle: Math.random() * Math.PI * 2,
    glowColor: config.color,
    moons: []
  }, config);
}

const SOLAR_SYSTEM_ENTRY = {
  id: 'sol-system',
  name: 'Солнечная система',
  nameEn: 'Solar System',
  summary: 'Текущая игровая система с Солнцем и основными планетами.',
  cameraDefaults: { scale: 0.42, offsetX: 0, offsetY: 0 },
  star: {
    name: 'Солнце',
    nameEn: 'Sol',
    type: 'star',
    radius: 22,
    glowRadius: 80,
    glowColor: '#ffca28',
    coreColor: '#fff9c4',
    midColor: '#ffca28',
    outerColor: '#e65100',
    stats: {
      'Тип': 'Звезда',
      'Класс': 'Жёлтый карлик G2V',
      'Режим': 'Интерактивная система',
      'Объектов': String(PLANETS.length + DWARF_PLANETS.length)
    },
    desc: 'Базовая система игры. Она остаётся доступной и теперь участвует в переходах между системами вместе с Орионом.'
  },
  planets: cloneDeep([...PLANETS, ...DWARF_PLANETS]),
  ships: {
    juggernaut: cloneDeep(JUGGERNAUT),
    interstellar: cloneDeep(INTERSTELLAR),
    player: null
  }
};

const GALAXY = [
  {
    id: 'solar-home',
    name: 'Солнечная система',
    latin: 'Solar System',
    points: SOLAR_SOURCE.points,
    systems: [SOLAR_SYSTEM_ENTRY]
  },
  {
    id: 'orion',
    name: ORION_SOURCE.name,
    latin: ORION_SOURCE.latin,
    points: ORION_SOURCE.points,
    systems: [
      {
        id: 'betelgeuse',
        name: 'Бетельгейзе',
        nameEn: 'Betelgeuse',
        summary: 'Красный сверхгигант с собственной игровой системой планет.',
        cameraDefaults: { scale: 0.62, offsetX: 0, offsetY: 0 },
        star: {
          name: 'Бетельгейзе',
          nameEn: 'Betelgeuse',
          type: 'star',
          radius: 34,
          glowRadius: 120,
          glowColor: '#ff6b4a',
          coreColor: '#ffd3b0',
          midColor: '#ff8c5a',
          outerColor: '#842f1f',
          stats: {
            'Тип': 'Звезда',
            'Класс': 'Красный сверхгигант',
            'Режим': 'Интерактивная система',
            'Созвездие': 'Орион'
          },
          desc: 'Первая интерактивная система в Орионе. Она повторяет игровой цикл Солнечной системы, но со своими мирами и маршрутами.'
        },
        planets: [
          makePlanet({
            name: 'Гелион', nameEn: 'Helion', radius: 6, color: '#d9b38c', glowColor: '#c98e61', orbitRadius: 96, speed: 0.0018,
            stats: { 'Тип': 'Каменная планета', 'Орбита': 'Внутренняя', 'Поверхность': 'Вулканические пустыни', 'Статус': 'Маяк активен' },
            desc: 'Раскалённый разведывательный мир на близкой орбите Бетельгейзе.'
          }),
          makePlanet({
            name: 'Миракс', nameEn: 'Mirax', radius: 8, color: '#6dd3ce', glowColor: '#3bb4a8', orbitRadius: 146, speed: 0.0012,
            moons: [{ name: 'М1', r: 2.1, orbitR: 18, speed: 0.007, angle: 1.2, color: '#b8f0ef' }],
            stats: { 'Тип': 'Океаническая планета', 'Орбита': 'Обитаемый пояс', 'Сигнал': 'Цивилизационный ретранслятор', 'Спутники': '1' },
            desc: 'Главная обитаемая планета орбитальной ветки Ориона.'
          }),
          makePlanet({
            name: 'Талар', nameEn: 'Talar', radius: 10, color: '#8fd16a', glowColor: '#5ea23e', orbitRadius: 220, speed: 0.00084,
            rings: { innerR: 14, outerR: 22, color: 'rgba(170,230,160,0.22)' },
            stats: { 'Тип': 'Лесной гигант', 'Орбита': 'Средняя', 'Атмосфера': 'Изумрудная дымка', 'Кольца': 'Биолюминесцентная пыль' },
            desc: 'Крупный мир с сияющими кольцами, заметный из дальних областей системы.'
          }),
          makePlanet({
            name: 'Нокс', nameEn: 'Nox', radius: 7, color: '#7189ff', glowColor: '#4359b5', orbitRadius: 312, speed: 0.00056,
            moons: [
              { name: 'Н1', r: 1.5, orbitR: 14, speed: 0.009, angle: 0.5, color: '#ccd3ff' },
              { name: 'Н2', r: 2, orbitR: 22, speed: 0.006, angle: 2.8, color: '#aeb8ff' }
            ],
            stats: { 'Тип': 'Ледяной мир', 'Орбита': 'Внешняя', 'Погода': 'Электрические штормы', 'Спутники': '2' },
            desc: 'Холодная планета с заряженными бурями и неглубокими замёрзшими морями.'
          }),
          makePlanet({
            name: 'Кепра', nameEn: 'Kepra', radius: 12, color: '#f4c95d', glowColor: '#e4a11f', orbitRadius: 420, speed: 0.00031,
            stats: { 'Тип': 'Газовый гигант', 'Орбита': 'Дальняя', 'Особенность': 'Мощная магнитосфера', 'Роль': 'Точка выхода в варп' },
            desc: 'Кепра используется как дальний ориентир и визуальная точка выхода в межсистемный перелёт.'
          })
        ]
      },
      {
        id: 'rigel',
        name: 'Ригель',
        nameEn: 'Rigel',
        summary: 'Вторая система Ориона для кликабельных переходов и полёта корабля.',
        cameraDefaults: { scale: 0.68, offsetX: 0, offsetY: 0 },
        star: {
          name: 'Ригель',
          nameEn: 'Rigel',
          type: 'star',
          radius: 24,
          glowRadius: 92,
          glowColor: '#8bd8ff',
          coreColor: '#f4fbff',
          midColor: '#9edcff',
          outerColor: '#306a94',
          stats: {
            'Тип': 'Звезда',
            'Класс': 'Голубой сверхгигант',
            'Режим': 'Интерактивная система',
            'Созвездие': 'Орион'
          },
          desc: 'Ригель служит второй точкой назначения, чтобы перелёт между системами был настоящим игровым действием, а не мгновенной сменой сцены.'
        },
        planets: [
          makePlanet({
            name: 'Арка', nameEn: 'Arca', radius: 5, color: '#c1d7ff', glowColor: '#84b7ff', orbitRadius: 92, speed: 0.0016,
            stats: { 'Тип': 'Кристаллический мир', 'Орбита': 'Внутренняя', 'Назначение': 'Добывающий форпост' },
            desc: 'Компактная планета с кристаллической поверхностью, ярко отражающей свет Ригеля.'
          }),
          makePlanet({
            name: 'Вела', nameEn: 'Vela', radius: 9, color: '#ffb36b', glowColor: '#f07d1c', orbitRadius: 160, speed: 0.0010,
            moons: [{ name: 'В1', r: 2, orbitR: 20, speed: 0.006, angle: 0.2, color: '#ffd3a5' }],
            stats: { 'Тип': 'Пустынный мир', 'Орбита': 'Средняя', 'Спутники': '1', 'Посадка': 'Безопасна' },
            desc: 'Первый удобный для посадки мир в системе Ригеля.'
          }),
          makePlanet({
            name: 'Офир', nameEn: 'Ophir', radius: 11, color: '#b392f0', glowColor: '#7b5bc7', orbitRadius: 246, speed: 0.00072,
            rings: { innerR: 15, outerR: 25, color: 'rgba(179,146,240,0.24)' },
            stats: { 'Тип': 'Кольцевой гигант', 'Орбита': 'Внешняя', 'Феномен': 'Призматические кольца' },
            desc: 'Величественный гигант с кольцами, который хорошо смотрится как конечная точка перелёта.'
          }),
          makePlanet({
            name: 'Сивра', nameEn: 'Sivra', radius: 6, color: '#9bd4b5', glowColor: '#4da37a', orbitRadius: 340, speed: 0.00042,
            stats: { 'Тип': 'Замёрзший океанический мир', 'Орбита': 'Краевая', 'Статус': 'Дальняя скан-станция' },
            desc: 'Холодный пограничный мир, который завершает маршрут внутри созвездия Ориона.'
          })
        ]
      }
    ]
  }
];

let currentConstellationId = GALAXY[0].id;
let currentSystemId = GALAXY[0].systems[0].id;
let currentSystem = GALAXY[0].systems[0];
let gameState = {
  resources: {
    metal: 420,
    composites: 260,
    energy: 180,
    data: 95,
    aether: 0,
    parts: 0,
    mineral: 0,
    fuel: 0
  },
  // Трюм: чертежи и предметы
  cargo: {
    blueprints: [],   // [{id, name, desc, icon, foundAt}]
    drones: 0,        // количество готовых дронов
    items: []         // прочие предметы (для будущего)
  },
  // Производство: таймеры модулей
  production: {
    lastTick: Date.now()
  }
};

initializeColonyData();
loadGameState();

function ensurePlanetColonyData(planet, system) {
  const preset = PLANET_COLONY_PRESETS[planet.name] || {
    suitability: clamp(28 + Math.round((planet.orbitRadius || 120) / 8), 20, 78),
    hazard: 'Нестабильная среда',
    role: 'Экспериментальная станция'
  };

  if (!planet.colony) {
    planet.colony = {
      systemId: system.id,
      scanned: false,
      suitability: preset.suitability,
      hazard: preset.hazard,
      role: preset.role,
      stationBuilt: false,
      modules: [],
      lastScan: null,
      status: 'Не исследована'
    };
  }
}

function initializeColonyData() {
  GALAXY.forEach(constellation => {
    constellation.systems.forEach(system => {
      system.planets.forEach(planet => ensurePlanetColonyData(planet, system));
    });
  });
}

function getPlanetKey(systemId, planetName) {
  return `${systemId}::${planetName}`;
}

function serializeGameState() {
  const planetStates = {};
  GALAXY.forEach(constellation => {
    constellation.systems.forEach(system => {
      system.planets.forEach(planet => {
        if (planet.colony) {
          planetStates[getPlanetKey(system.id, planet.name)] = {
            scanned: planet.colony.scanned,
            suitability: planet.colony.suitability,
            hazard: planet.colony.hazard,
            role: planet.colony.role,
            stationBuilt: planet.colony.stationBuilt,
            modules: [...planet.colony.modules],
            lastScan: planet.colony.lastScan,
            status: planet.colony.status
          };
        }
      });
    });
  });

  const playerShip = SOLAR_SYSTEM_ENTRY.ships.player
    ? { classId: SOLAR_SYSTEM_ENTRY.ships.player.classId, pilotId: SOLAR_SYSTEM_ENTRY.ships.player.pilotId }
    : null;

  return {
    resources: gameState.resources,
    cargo: gameState.cargo,
    planetStates,
    playerShip
  };
}

function saveGameState() {
  try {
    localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(serializeGameState()));
  } catch (error) {
    console.warn('Не удалось сохранить игру локально', error);
  }
}

function loadGameState() {
  try {
    const raw = localStorage.getItem(GAME_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed.resources) {
      RESOURCE_KEYS.forEach(key => {
        if (typeof parsed.resources[key] === 'number') {
          gameState.resources[key] = parsed.resources[key];
        }
      });
    }
    if (parsed.cargo) {
      if (Array.isArray(parsed.cargo.blueprints)) gameState.cargo.blueprints = parsed.cargo.blueprints;
      if (typeof parsed.cargo.drones === 'number') gameState.cargo.drones = parsed.cargo.drones;
      if (Array.isArray(parsed.cargo.items)) gameState.cargo.items = parsed.cargo.items;
    }
    if (parsed.planetStates) {
      GALAXY.forEach(constellation => {
        constellation.systems.forEach(system => {
          system.planets.forEach(planet => {
            const saved = parsed.planetStates[getPlanetKey(system.id, planet.name)];
            if (saved) {
              ensurePlanetColonyData(planet, system);
              Object.assign(planet.colony, saved);
            }
          });
        });
      });
    }
    if (parsed.playerShip?.classId && parsed.playerShip?.pilotId) {
      const shipClass = SHIP_CLASSES.find(item => item.id === parsed.playerShip.classId);
      const pilot = PILOTS.find(item => item.id === parsed.playerShip.pilotId);
      if (shipClass && pilot) {
        SOLAR_SYSTEM_ENTRY.ships.player = createPlayerShip(shipClass, pilot);
      }
    }
  } catch (error) {
    console.warn('Не удалось загрузить локальное сохранение', error);
  }
}

// ===========================
// PROFILE
// ===========================
function saveProfile(name, shipClassId, pilotId) {
  try {
    const profile = {
      commanderName: name,
      shipClassId,
      pilotId,
      createdAt: new Date().toISOString(),
      lastPlayed: new Date().toISOString()
    };
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.warn('Не удалось сохранить профиль', e);
  }
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function updateProfileLastPlayed() {
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return;
    const profile = JSON.parse(raw);
    profile.lastPlayed = new Date().toISOString();
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {}
}

function deleteProfile() {
  try {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    localStorage.removeItem(GAME_STORAGE_KEY);
  } catch (e) {}
}

function formatDate(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function showProfileBadge(name) {
  const badge = document.getElementById('profile-badge');
  const nameEl = document.getElementById('badge-name-text');
  if (badge && nameEl) {
    nameEl.textContent = 'Командор ' + name;
    badge.style.display = 'flex';
  }
}

function initStartScreen() {
  const profile = loadProfile();
  const continuePanel = document.getElementById('continue-panel');
  const startPanel    = document.getElementById('start-panel');

  if (profile && profile.commanderName) {
    // Есть сохранённый профиль — показываем экран продолжения
    continuePanel.style.display = 'block';
    startPanel.style.display    = 'none';

    document.getElementById('continue-title').textContent = 'Командор ' + profile.commanderName;

    const shipClass = SHIP_CLASSES.find(s => s.id === profile.shipClassId);
    const pilot     = PILOTS.find(p => p.id === profile.pilotId);
    document.getElementById('continue-meta').textContent =
      'Профиль создан ' + formatDate(profile.createdAt) +
      ' · Последний сеанс: ' + formatDate(profile.lastPlayed);

    if (shipClass && pilot) {
      document.getElementById('continue-ship-info').innerHTML =
        `<b style="color:var(--text)">${shipClass.icon} ${shipClass.name}</b> · Пилот: <b style="color:var(--text)">${pilot.name}</b> «${pilot.callSign}»<br>` +
        `<span style="color:rgba(224,244,255,0.5);font-size:12px;">${pilot.specialty}</span>`;
    }

    document.getElementById('continue-button').addEventListener('click', () => {
      // Восстанавливаем из localStorage (уже сделано в loadGameState)
      updateProfileLastPlayed();
      showProfileBadge(profile.commanderName);
      startOverlay.classList.add('hidden');
    });

    document.getElementById('new-game-button').addEventListener('click', () => {
      if (!confirm('Начать новую игру? Текущий прогресс будет удалён.')) return;
      deleteProfile();
      continuePanel.style.display = 'none';
      startPanel.style.display    = 'block';
    });

  } else {
    // Нет профиля — показываем создание
    continuePanel.style.display = 'none';
    startPanel.style.display    = 'block';
  }
}

function canAfford(cost) {
  return RESOURCE_KEYS.every(key => (gameState.resources[key] || 0) >= (cost[key] || 0));
}

function spendResources(cost) {
  RESOURCE_KEYS.forEach(key => {
    gameState.resources[key] = Math.max(0, (gameState.resources[key] || 0) - (cost[key] || 0));
  });
}

function getMissingCostEntries(cost) {
  return RESOURCE_KEYS
    .filter(key => (gameState.resources[key] || 0) < (cost[key] || 0))
    .map(key => ({
      key,
      need: cost[key] || 0,
      have: gameState.resources[key] || 0,
      missing: Math.max(0, (cost[key] || 0) - (gameState.resources[key] || 0))
    }));
}

function formatCostLine(cost) {
  return Object.entries(cost || {})
    .map(([key, value]) => `${RESOURCE_META[key]?.icon || key}${value}`)
    .join(' ');
}

function formatMissingCostLine(cost) {
  return getMissingCostEntries(cost)
    .map(item => `${RESOURCE_META[item.key]?.icon || item.key}${Math.ceil(item.missing)}`)
    .join(' ');
}

function formatResourceAmount(value) {
  const num = value || 0;
  if (Math.abs(num) >= 10) return `${Math.round(num)}`;
  if (Math.abs(num - Math.round(num)) < 0.05) return `${Math.round(num)}`;
  return num.toFixed(1);
}

function getOperationalStations(requiredModules = []) {
  const stations = [];
  GALAXY.forEach(constellation => {
    constellation.systems.forEach(system => {
      system.planets.forEach(planet => {
        if (!planet.colony?.stationBuilt) return;
        const modules = planet.colony.modules || [];
        const matches = requiredModules.every(moduleId => modules.includes(moduleId));
        if (matches) {
          stations.push({ system, planet, modules });
        }
      });
    });
  });
  return stations;
}

function getDroneCraftContext() {
  const stations = getOperationalStations(['printer', 'hangar']);
  const missingParts = Math.max(0, 20 - (gameState.resources.parts || 0));
  return {
    stations,
    sourceStation: stations[0] || null,
    hasFacility: stations.length > 0,
    missingParts,
    canCraft: stations.length > 0 && missingParts <= 0
  };
}

function getWarpAccessContext() {
  const stations = getOperationalStations(['portal_gen']);
  const fuelCost = 3;
  return {
    stations,
    sourceStation: stations[0] || null,
    fuelCost,
    hasPortal: stations.length > 0,
    hasFuel: (gameState.resources.fuel || 0) >= fuelCost,
    canWarp: stations.length > 0 && (gameState.resources.fuel || 0) >= fuelCost
  };
}

function getModuleBuildState(planet, moduleId) {
  const mod = STATION_MODULES[moduleId];
  if (!mod || !planet?.colony?.stationBuilt) {
    return { canBuild: false, isBuilt: false, reason: 'unavailable', mod };
  }

  const modules = planet.colony.modules || [];
  const missingRequirements = (mod.requires || []).filter(req => !modules.includes(req));
  const missingBlueprint = mod.requiresBlueprint && !hasBlueprint(mod.requiresBlueprint);
  const missingCost = getMissingCostEntries(mod.cost || {});
  const isBuilt = modules.includes(moduleId);

  let reason = 'ready';
  if (isBuilt) reason = 'built';
  else if (mod.locked) reason = 'locked';
  else if (missingRequirements.length) reason = 'requires';
  else if (missingBlueprint) reason = 'blueprint';
  else if (missingCost.length) reason = 'resources';

  return {
    mod,
    isBuilt,
    reason,
    canBuild: reason === 'ready',
    missingRequirements,
    missingBlueprint,
    missingCost
  };
}

function getStationCoreBuildState(planet) {
  const colony = planet?.colony;
  const suitableForCore = (colony?.suitability || 0) >= 35;
  const missingCost = getMissingCostEntries(STATION_MODULES.core.cost);
  const docked = isPlayerDockedTo(planet);
  const scanned = !!colony?.scanned;
  const built = !!colony?.stationBuilt;

  let reason = 'ready';
  if (!colony) reason = 'unavailable';
  else if (built) reason = 'built';
  else if (!docked) reason = 'dock';
  else if (!scanned) reason = 'scan';
  else if (!suitableForCore) reason = 'suitability';
  else if (missingCost.length) reason = 'resources';

  return {
    docked,
    scanned,
    built,
    suitableForCore,
    missingCost,
    canBuild: reason === 'ready',
    reason
  };
}

// ===========================
// METEORITES
// ===========================
const METEORITE_NAMES = ['Астероид-α','Астероид-β','Камень-7','Кластер-X','Обломок-Δ','Фрагмент-Ω','Глыба-Σ','Скала-Λ'];

function generateMeteorites(systemId, count) {
  const result = [];
  const seed = systemId.split('').reduce((a,c) => a + c.charCodeAt(0), 0);
  for (let i = 0; i < count; i++) {
    const rng = (n) => ((seed * 1103515245 + 12345 * (i * 7 + n)) >>> 0) / 0xFFFFFFFF;
    const orbitRadius = 130 + rng(1) * 650;
    const size = 1 + Math.floor(rng(2) * 4); // 1-4, крупнее = больше минерала
    result.push({
      type: 'meteorite',
      name: METEORITE_NAMES[(seed + i) % METEORITE_NAMES.length] + '-' + (i + 1),
      orbitRadius,
      angle: rng(3) * Math.PI * 2,
      speed: (0.00018 + rng(4) * 0.00035) * SPEED * (rng(5) > 0.5 ? 1 : -1),
      size,
      radius: 2 + size * 1.2,
      color: `hsl(${200 + rng(6) * 40}, 8%, ${45 + rng(7) * 20}%)`,
      mineral: size * 8 + Math.floor(rng(8) * 12), // запас минерала
      stats: {
        'Тип': 'Метеорит',
        'Размер': ['Мелкий','Средний','Крупный','Огромный'][size - 1],
        'Запас минерала': `${size * 8 + Math.floor(rng(8) * 12)} ед.`,
        'Орбита': `${Math.round(orbitRadius)} ед.`
      },
      desc: `Каменный обломок с кристаллическими вкраплениями Минерала. Размер: ${['мелкий','средний','крупный','огромный'][size-1]}. Для добычи отправьте дрон из Ангара станции.`
    });
  }
  return result;
}

function injectMeteorites() {
  GALAXY.forEach(constellation => {
    constellation.systems.forEach(system => {
      if (!system.meteorites) {
        const count = 3 + Math.floor(Math.random() * 5);
        system.meteorites = generateMeteorites(system.id, count);
      }
    });
  });
}

// ===========================
// DRONES
// ===========================
const activeDrones = []; // {id, meteorite, system, progress, mineral, startX, startY, targetX, targetY, returning}

function launchDrone(meteorite) {
  const ship = currentSystem?.ships?.player;
  if (!ship) return;
  if (gameState.cargo.drones <= 0) { showNotification('Нет дронов в ангаре!', 'warn'); return; }
  if (meteorite.mineral <= 0) { showNotification('Месторождение истощено.', 'warn'); return; }
  if (activeDrones.find(d => d.meteorite === meteorite)) { showNotification('Дрон уже добывает здесь.', 'warn'); return; }

  gameState.cargo.drones--;
  const mPos = getMeteoritePosition(meteorite);
  activeDrones.push({
    id: Date.now(),
    meteorite,
    system: currentSystem,
    progress: 0,
    returning: false,
    startX: ship.x, startY: ship.y,
    targetX: mPos.x, targetY: mPos.y,
    mineralCollected: 0
  });
  showNotification(`Дрон отправлен к ${meteorite.name}`, 'info');
  closePanel();
}

function getMeteoritePosition(m) {
  return {
    x: Math.cos(m.angle) * m.orbitRadius,
    y: Math.sin(m.angle) * m.orbitRadius
  };
}

function updateDrones(dt) {
  const dtSec = dt / 1000;
  const speed = 0.4; // прогресс/сек
  const ship = currentSystem?.ships?.player;

  for (let i = activeDrones.length - 1; i >= 0; i--) {
    const drone = activeDrones[i];
    if (drone.system !== currentSystem) continue;

    drone.progress = Math.min(1, drone.progress + dtSec * speed);

    if (!drone.returning && drone.progress >= 1) {
      // Добыча
      const collected = Math.min(drone.meteorite.mineral, 5 + Math.floor(Math.random() * 6));
      drone.meteorite.mineral = Math.max(0, drone.meteorite.mineral - collected);
      drone.mineralCollected = collected;
      drone.meteorite.stats['Запас минерала'] = `${drone.meteorite.mineral} ед.`;
      // Разворот
      drone.returning = true;
      drone.progress = 0;
      const mPos = getMeteoritePosition(drone.meteorite);
      drone.startX = mPos.x; drone.startY = mPos.y;
      if (ship) { drone.targetX = ship.x; drone.targetY = ship.y; }
    } else if (drone.returning && drone.progress >= 1) {
      // Возврат
      gameState.resources.mineral = (gameState.resources.mineral || 0) + drone.mineralCollected;
      gameState.cargo.drones++;
      showNotification(`Дрон вернулся: +${drone.mineralCollected} Минерала`, 'success');
      renderColonyPanel();
      saveGameState();
      activeDrones.splice(i, 1);
    }
  }
}

function drawDrones() {
  activeDrones.forEach(drone => {
    if (drone.system !== currentSystem) return;
    const t = drone.progress;
    const wx = drone.startX + (drone.targetX - drone.startX) * t;
    const wy = drone.startY + (drone.targetY - drone.startY) * t;
    const s = worldToScreen(wx, wy);
    const r = Math.max(3, 4 * scale);
    ctx.beginPath();
    ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
    ctx.fillStyle = drone.returning ? '#80ff9a' : '#4fc3f7';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(s.x, s.y, r * 2.2, 0, Math.PI * 2);
    ctx.fillStyle = drone.returning ? 'rgba(128,255,154,0.15)' : 'rgba(79,195,247,0.15)';
    ctx.fill();
  });
}

// ===========================
// PRODUCTION TICK
// ===========================
function runProductionTick() {
  const now = Date.now();
  const elapsedSec = (now - (gameState.production.lastTick || now)) / 1000;
  if (elapsedSec < 5) return; // тик каждые 5 сек
  gameState.production.lastTick = now;

  // Проходим все планеты с построенными станциями
  let changed = false;
  GALAXY.forEach(constellation => {
    constellation.systems.forEach(system => {
      system.planets.forEach(planet => {
        if (!planet.colony?.stationBuilt) return;
        const mods = planet.colony.modules;

        mods.forEach(moduleId => {
          const mod = STATION_MODULES[moduleId];
          if (!mod?.produces) return;

          const cycleLength = Math.max(1, mod.productionInterval || 60);
          let cycles = elapsedSec / cycleLength;

          if (mod.consumesPerCycle) {
            Object.entries(mod.consumesPerCycle).forEach(([resourceKey, amount]) => {
              if (amount <= 0) return;
              const available = gameState.resources[resourceKey] || 0;
              cycles = Math.min(cycles, available / amount);
            });
          }

          if (cycles <= 0) return;

          if (mod.consumesPerCycle) {
            Object.entries(mod.consumesPerCycle).forEach(([resourceKey, amount]) => {
              gameState.resources[resourceKey] = Math.max(0, (gameState.resources[resourceKey] || 0) - amount * cycles);
            });
          }

          Object.entries(mod.produces).forEach(([resourceKey, amount]) => {
            gameState.resources[resourceKey] = (gameState.resources[resourceKey] || 0) + amount * cycles;
          });
          changed = true;
        });
      });
    });
  });

  if (changed) {
    renderColonyPanel();
    renderSystems();
    saveGameState();
  }
}

// ===========================
// BLUEPRINTS
// ===========================
const BLUEPRINTS = {
  blueprint_aether: {
    id: 'blueprint_aether',
    name: 'Чертёж: Модуль Эфира',
    icon: '📐',
    desc: 'Схема квантового экстрактора Эфира. Позволяет построить Модуль Эфира на орбитальной станции.'
  }
};

function hasBlueprint(id) {
  return gameState.cargo.blueprints.some(b => b.id === id);
}

function tryGiveAetherBlueprint(planetName) {
  if (hasBlueprint('blueprint_aether')) return false;
  const bp = BLUEPRINTS.blueprint_aether;
  gameState.cargo.blueprints.push({ ...bp, foundAt: planetName });
  showNotification(`📐 Найден чертёж: ${bp.name}!`, 'blueprint');
  saveGameState();
  return true;
}

// ===========================
// NOTIFICATIONS
// ===========================
function showNotification(text, type = 'info') {
  const el = document.createElement('div');
  el.className = 'game-notification ' + type;
  el.textContent = text;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 400);
  }, 3200);
}

// ===========================
// CARGO HOLD UI
// ===========================
function openCargo() {
  document.getElementById('cargo-overlay').classList.add('open');
  renderCargoTab('resources');
}

function closeCargo() {
  document.getElementById('cargo-overlay').classList.remove('open');
}

function renderCargoTab(tab) {
  const content = document.getElementById('cargo-content');
  document.querySelectorAll('.cargo-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });

  if (tab === 'resources') {
    content.innerHTML = `
      <div class="cargo-resource-grid">
        ${RESOURCE_KEYS.map(key => {
          const meta = RESOURCE_META[key];
          const val = formatResourceAmount(gameState.resources[key] || 0);
          return `
            <div class="cargo-res-card">
              <div class="cargo-res-icon">${meta.icon}</div>
              <div class="cargo-res-name">${meta.label}</div>
              <div class="cargo-res-value">${val}</div>
              <div class="cargo-res-desc">${meta.desc}</div>
            </div>`;
        }).join('')}
      </div>`;

  } else if (tab === 'blueprints') {
    const bps = gameState.cargo.blueprints;
    if (!bps.length) {
      content.innerHTML = `<div class="cargo-empty"><div class="cargo-empty-icon">📐</div>Чертежей пока нет.<br>Исследуйте планеты — при первом сканировании возможна находка.</div>`;
    } else {
      content.innerHTML = `<div class="cargo-blueprint-list">
        ${bps.map(bp => `
          <div class="cargo-blueprint-card">
            <div class="blueprint-icon">${bp.icon}</div>
            <div>
              <div class="blueprint-name">${bp.name}</div>
              <div class="blueprint-desc">${bp.desc}</div>
              ${bp.foundAt ? `<div style="font-size:11px;color:rgba(224,244,255,0.35);margin-top:4px;">Найден: ${bp.foundAt}</div>` : ''}
            </div>
          </div>`).join('')}
      </div>`;
    }

  } else if (tab === 'drones') {
    const count = gameState.cargo.drones;
    const busy = activeDrones.filter(d => d.system === currentSystem).length;
    const droneContext = getDroneCraftContext();
    const stationLabel = droneContext.sourceStation
      ? `${droneContext.sourceStation.planet.name} (${droneContext.sourceStation.system.name})`
      : 'станция не готова';
    content.innerHTML = `
      <div style="margin-bottom:16px;color:rgba(224,244,255,0.6);font-size:13px;line-height:1.7;">
        Дроны производятся на <b style="color:var(--text)">Принтере</b> из <b style="color:var(--text)">20 Деталей</b>.
        Запускаются при клике на метеорит. Активная верфь: <b style="color:var(--text)">${stationLabel}</b>.
      </div>
      <div style="display:flex;gap:20px;margin-bottom:20px;">
        <div class="cargo-res-card" style="min-width:140px;">
          <div class="cargo-res-icon">🚁</div>
          <div class="cargo-res-name">В ангаре</div>
          <div class="cargo-res-value">${count}</div>
        </div>
        <div class="cargo-res-card" style="min-width:140px;">
          <div class="cargo-res-icon">🛸</div>
          <div class="cargo-res-name">В полёте</div>
          <div class="cargo-res-value">${busy}</div>
        </div>
      </div>
      <button class="smodule-btn" id="craft-drone-btn" ${droneContext.canCraft ? '' : 'disabled'} style="margin-bottom:10px;">
        ${droneContext.canCraft ? '⚙️ Произвести дрон (20 Деталей)' : '⚙️ Производство недоступно'}
      </button>
      <div style="font-size:12px;color:rgba(224,244,255,0.35);">
        ${!droneContext.hasFacility
          ? 'Требуется станция с модулями Принтер + Ангар дронов.'
          : droneContext.missingParts > 0
            ? `Не хватает Деталей: ${Math.ceil(droneContext.missingParts)}.`
            : `Верфь готова к производству на станции ${stationLabel}.`}
      </div>
    `;
    const craftBtn = document.getElementById('craft-drone-btn');
    if (craftBtn) craftBtn.addEventListener('click', () => {
      craftDrone();
      renderCargoTab('drones');
    });

  } else if (tab === 'items') {
    const items = gameState.cargo.items;
    if (!items.length) {
      content.innerHTML = `<div class="cargo-empty"><div class="cargo-empty-icon">📦</div>Предметов пока нет.<br>Артефакты и находки будут появляться в ходе исследований.</div>`;
    } else {
      content.innerHTML = `<div class="cargo-blueprint-list">
        ${items.map(it => `
          <div class="cargo-blueprint-card">
            <div class="blueprint-icon">${it.icon || '📦'}</div>
            <div>
              <div class="blueprint-name">${it.name}</div>
              <div class="blueprint-desc">${it.desc || ''}</div>
            </div>
          </div>`).join('')}
      </div>`;
    }
  }
}

function canAffordDrone() {
  return getDroneCraftContext().canCraft;
}

function craftDrone() {
  const droneContext = getDroneCraftContext();
  if (!droneContext.hasFacility) {
    showNotification('Нужна станция с Принтером и Ангаром дронов.', 'warn');
    return;
  }
  if (!droneContext.canCraft) {
    showNotification('Недостаточно Деталей для сборки дрона.', 'warn');
    return;
  }
  gameState.resources.parts = Math.max(0, (gameState.resources.parts || 0) - 20);
  gameState.cargo.drones++;
  showNotification(`🚁 Дрон произведён на станции ${droneContext.sourceStation.planet.name}!`, 'success');
  saveGameState();
  renderColonyPanel();
  renderSystems();
}

// ===========================
// STATION MODULE BUILDING (новый полный список)
// ===========================
function canBuildModule(planet, moduleId) {
  return getModuleBuildState(planet, moduleId).canBuild;
}

function buildModule(planet, moduleId) {
  const state = getModuleBuildState(planet, moduleId);
  const mod = state.mod;
  if (!mod) return;
  if (!state.canBuild) {
    if (state.reason === 'resources') {
      showNotification(`Не хватает ресурсов: ${formatMissingCostLine(mod.cost)}`, 'warn');
    } else if (state.reason === 'blueprint') {
      showNotification(`Нужен чертёж для модуля ${mod.name}.`, 'warn');
    } else if (state.reason === 'requires') {
      showNotification(`Сначала построй: ${state.missingRequirements.map(id => STATION_MODULES[id]?.name || id).join(', ')}`, 'warn');
    }
    return;
  }
  spendResources(mod.cost);
  planet.colony.modules.push(moduleId);
  planet.colony.status = `Построен: ${mod.name}`;
  showNotification(`${mod.icon} ${mod.name} построен!`, 'success');
  renderColonyPanel();
  renderSystems();
  saveGameState();
  openPanel(planet);
}

function getStationModuleTreeHTML(planet) {
  if (!planet.colony?.stationBuilt) return '';
  const ORDER = ['core','aether_module','printer','hangar','fuel_factory','portal_gen','habitat'];
  const rows = ORDER.map(id => {
    const state = getModuleBuildState(planet, id);
    const mod = state.mod;
    if (!mod) return '';
    let statusClass = state.isBuilt ? 'built' : (state.reason === 'ready' ? 'unlocked' : 'locked');
    let btnHtml = '';
    if (state.isBuilt) {
      btnHtml = `<button class="smodule-btn built-btn" disabled>✓ Построен</button>`;
    } else if (mod.locked) {
      btnHtml = `<button class="smodule-btn" disabled>🔒 Блок 5</button>`;
    } else {
      const costStr = formatCostLine(mod.cost);
      let reqLabel = '';
      if (state.reason === 'requires') {
        reqLabel = `<div class="smodule-req">⚠ Нужен: ${state.missingRequirements.map(r => STATION_MODULES[r]?.name || r).join(', ')}</div>`;
      } else if (state.reason === 'blueprint') {
        reqLabel = `<div class="smodule-req">📐 Нужен чертёж</div>`;
      } else if (state.reason === 'resources') {
        reqLabel = `<div class="smodule-req">📦 Не хватает: ${formatMissingCostLine(mod.cost)}</div>`;
      }
      btnHtml = `${reqLabel}<div class="smodule-cost">${costStr}</div>
        <button class="smodule-btn" data-build="${id}" ${state.canBuild ? '' : 'disabled'}>
          ${state.reason === 'ready' ? 'Построить' : state.reason === 'resources' ? 'Нет ресурсов' : state.reason === 'blueprint' ? 'Нужен чертёж' : 'Недоступно'}
        </button>`;
    }

    let prodInfo = '';
    if (mod.produces) {
      const p = Object.entries(mod.produces).map(([k,v]) => `+${v} ${RESOURCE_META[k]?.label||k}/мин`).join(', ');
      const c = mod.consumesPerCycle
        ? ` · расход ${Object.entries(mod.consumesPerCycle).map(([k,v]) => `${v} ${RESOURCE_META[k]?.label||k}/мин`).join(', ')}`
        : '';
      prodInfo = `<div style="font-size:11px;color:rgba(128,255,154,0.7);margin-top:3px;">📈 ${p}${c}</div>`;
    }

    return `
      <div class="smodule-row ${statusClass}">
        <div class="smodule-icon">${mod.icon}</div>
        <div class="smodule-info">
          <div class="smodule-name">${mod.name}</div>
          <div class="smodule-desc">${mod.desc}</div>
          ${prodInfo}
        </div>
        <div style="min-width:120px;text-align:right;">${btnHtml}</div>
      </div>`;
  }).join('');

  return `
    <div class="creature-section">
      <h3>Станция — модули</h3>
      <div class="station-module-tree">${rows}</div>
    </div>`;
}

function getColonizedPlanets() {
  const planets = [];
  GALAXY.forEach(constellation => {
    constellation.systems.forEach(system => {
      system.planets.forEach(planet => {
        if (planet.colony?.stationBuilt) planets.push({ system, planet });
      });
    });
  });
  return planets;
}

function renderColonyPanel() {
  const shortKeys = ['metal','composites','energy','data','aether','parts','mineral','fuel'];
  resourceGrid.innerHTML = shortKeys.map(key => {
    const meta = RESOURCE_META[key];
    return `
      <div class="resource-card">
        <div class="resource-label">${meta ? meta.icon + ' ' + meta.label : key}</div>
        <div class="resource-value">${formatResourceAmount(gameState.resources[key] || 0)}</div>
      </div>`;
  }).join('');

  const colonized = getColonizedPlanets();
  const chips = colonized.slice(0, 5).map(({ planet }) => `<span class="colony-chip">${planet.name}</span>`).join('');
  colonySummary.innerHTML = `
    <div>Построено орбитальных станций: <b style="color:var(--text)">${colonized.length}</b></div>
    <div style="margin-top:4px;font-size:12px;color:rgba(224,244,255,0.45);">Дроны в ангаре: ${gameState.cargo.drones} · Чертежи: ${gameState.cargo.blueprints.length}</div>
    ${chips ? `<div style="margin-top:8px;">${chips}</div>` : ''}
    <div class="colony-note">Прогресс сохраняется локально в браузере.</div>
  `;
}

function isPlayerDockedTo(object) {
  const ship = currentSystem?.ships?.player;
  if (!ship || !ship.dockedObject) return false;
  // Сравниваем по имени и типу — объект в панели может быть не той же ссылкой
  return ship.dockedObject.name === object.name && ship.dockedObject.type === object.type;
}

function scanPlanet(planet) {
  if (!planet?.colony) return;
  planet.colony.scanned = true;
  planet.colony.lastScan = new Date().toISOString();
  planet.colony.status = planet.colony.suitability >= 65 ? 'Высокий приоритет колонизации' : planet.colony.suitability >= 40 ? 'Ограниченная колонизация' : 'Только орбитальная инфраструктура';
  gameState.resources.data = (gameState.resources.data || 0) + 12;
  // Шанс найти чертёж Эфира при первом сканировании
  tryGiveAetherBlueprint(planet.name);
  renderColonyPanel();
  saveGameState();
  openPanel(planet);
}

function buildStationCore(planet) {
  const coreState = getStationCoreBuildState(planet);
  if (!planet?.colony || coreState.built) return;
  if (!coreState.canBuild) {
    if (coreState.reason === 'dock') showNotification('Пристыкуйтесь к планете для строительства ядра.', 'warn');
    else if (coreState.reason === 'scan') showNotification('Сначала завершите сканирование планеты.', 'warn');
    else if (coreState.reason === 'suitability') showNotification('Планета слишком опасна для ядра станции.', 'warn');
    else if (coreState.reason === 'resources') showNotification(`Не хватает ресурсов: ${formatMissingCostLine(STATION_MODULES.core.cost)}`, 'warn');
    return;
  }
  spendResources(STATION_MODULES.core.cost);
  planet.colony.stationBuilt = true;
  planet.colony.modules = ['core'];
  planet.colony.status = 'Ядро станции развернуто';
  showNotification('🛰 Ядро станции развернуто!', 'success');
  renderColonyPanel();
  renderSystems();
  saveGameState();
  openPanel(planet);
}

function getPlanetActionContext(planet) {
  return getStationCoreBuildState(planet);
}

function getColonyPanelHTML(planet) {
  if (!planet.colony) return '';
  const { docked, scanned, built, suitableForCore, canBuild, reason } = getPlanetActionContext(planet);

  const scanBtn = `<button class="panel-action-btn primary" id="scan-planet-btn" ${docked && !scanned ? '' : 'disabled'}>${scanned ? '✓ Сканирование готово' : 'Сканировать планету'}</button>`;
  const coreBtn = `<button class="panel-action-btn success" id="build-core-btn" ${!built && canBuild ? '' : 'disabled'}>${built ? '✓ Ядро построено' : 'Построить ядро станции'}</button>`;

  const moduleTree = built ? getStationModuleTreeHTML(planet) : '';
  const coreHint = built
    ? 'Орбитальная станция работает вокруг планеты.'
    : !docked
      ? 'Пристыкуйтесь к планете для сканирования и строительства.'
      : !scanned
        ? 'Сначала выполните сканирование орбиты.'
        : !suitableForCore
          ? 'Планета пригодна только для ограниченной орбитальной инфраструктуры.'
          : reason === 'resources'
            ? `Не хватает ресурсов: ${formatMissingCostLine(STATION_MODULES.core.cost)}.`
            : 'Ядро станции готово к развёртыванию.';

  return `
    <div class="creature-section">
      <h3>Колонизация</h3>
      <div class="stat-row"><span class="stat-label">Пригодность</span><span class="stat-value">${planet.colony.suitability}/100</span></div>
      <div class="stat-row"><span class="stat-label">Риск</span><span class="stat-value">${planet.colony.hazard}</span></div>
      <div class="stat-row"><span class="stat-label">Роль</span><span class="stat-value">${planet.colony.role}</span></div>
      <div class="stat-row"><span class="stat-label">Статус</span><span class="stat-value">${planet.colony.status}</span></div>
      <div class="panel-actions">${scanBtn}${coreBtn}</div>
      <div class="colony-note">${coreHint}</div>
    </div>
    ${moduleTree}
  `;
}

function getCurrentConstellation() {
  return GALAXY.find(item => item.id === currentConstellationId) || GALAXY[0];
}

function getSystemById(id) {
  for (const constellation of GALAXY) {
    const found = constellation.systems.find(system => system.id === id);
    if (found) return found;
  }
  return null;
}

function getSelectedShipClass() {
  return SHIP_CLASSES.find(item => item.id === selectedShipClassId) || null;
}

function getSelectedPilot() {
  return PILOTS.find(item => item.id === selectedPilotId) || null;
}

function renderShipClassOptions() {
  shipClassGrid.innerHTML = '';
  SHIP_CLASSES.forEach(shipClass => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'ship-class-card' + (shipClass.id === selectedShipClassId ? ' active' : '');
    card.innerHTML = `
      <div class="ship-class-top">
        <div class="ship-badge">${shipClass.icon}</div>
        <div class="pilot-meta">${shipClass.name}</div>
      </div>
      <h3>${shipClass.name}</h3>
      <p>${shipClass.description}</p>
      <div class="ship-stats">${shipClass.stats.map(item => `<span>${item}</span>`).join('')}</div>
    `;
    card.addEventListener('click', () => {
      selectedShipClassId = shipClass.id;
      renderShipClassOptions();
      updateStartSummary();
    });
    shipClassGrid.appendChild(card);
  });
}

function renderPilotOptions() {
  pilotGrid.innerHTML = '';
  PILOTS.forEach(pilot => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'pilot-card' + (pilot.id === selectedPilotId ? ' active' : '');
    card.innerHTML = `
      <img class="pilot-portrait" src="${pilot.image}" alt="${pilot.name}">
      <h3>${pilot.name}</h3>
      <div class="pilot-meta">${pilot.gender} · ${pilot.callSign}</div>
      <p>${pilot.specialty}. ${pilot.bio}</p>
    `;
    card.addEventListener('click', () => {
      selectedPilotId = pilot.id;
      renderPilotOptions();
      updateStartSummary();
    });
    pilotGrid.appendChild(card);
  });
}

function updateStartSummary() {
  const shipClass = getSelectedShipClass();
  const pilot = getSelectedPilot();
  const nameInput = document.getElementById('commander-name-input');
  const name = nameInput ? nameInput.value.trim() : '';

  if (!name) {
    startSummaryText.textContent = 'Введите имя командира, чтобы продолжить.';
    launchButton.disabled = true;
    return;
  }
  if (!shipClass || !pilot) {
    startSummaryText.textContent = 'Выберите класс корабля и пилота, чтобы вывести корабль на орбиту Земли.';
    launchButton.disabled = true;
    return;
  }

  startSummaryText.textContent = `Командор ${name}. ${shipClass.name} «${pilot.callSign}» готов к запуску. Пилот ${pilot.name} займет позицию возле Земли.`;
  launchButton.disabled = false;
}

function createPlayerShip(shipClass, pilot) {
  return {
    name: `${shipClass.name} «${pilot.callSign}»`,
    nameEn: `${shipClass.name} / ${pilot.callSign}`,
    type: 'player-ship',
    orbitR: shipClass.orbitR,
    angle: 0.35,
    speed: shipClass.speed,
    color: shipClass.color,
    accentColor: shipClass.accentColor,
    silhouette: shipClass.silhouette,
    classId: shipClass.id,
    pilotId: pilot.id,
    pilotName: pilot.name,
    callSign: pilot.callSign,
    specialty: pilot.specialty,
    role: shipClass.name,
    visualHeading: 0,
    bank: 0,
    thrust: 0,
    trail: [],
    stats: {
      'Тип': 'Игровой корабль',
      'Класс': shipClass.name,
      'Пилот': pilot.name,
      'Позывной': pilot.callSign,
      'Специализация': pilot.specialty,
      'Статус': 'На орбите Земли'
    },
    desc: `${shipClass.description} Пилот: ${pilot.name}, позывной «${pilot.callSign}». ${pilot.bio}`
  };
}

function launchPlayerShip() {
  const shipClass = getSelectedShipClass();
  const pilot = getSelectedPilot();
  const nameInput = document.getElementById('commander-name-input');
  const name = nameInput ? nameInput.value.trim() : '';
  if (!shipClass || !pilot || !name) return;

  commanderName = name;

  SOLAR_SYSTEM_ENTRY.ships.player = createPlayerShip(shipClass, pilot);
  currentConstellationId = 'solar-home';
  currentSystemId = SOLAR_SYSTEM_ENTRY.id;
  currentSystem = SOLAR_SYSTEM_ENTRY;
  applyCamera(currentSystem);
  renderConstellations();
  renderSystems();
  renderColonyPanel();
  updateNavStatus('Солнечная система / Орбита Земли');
  updateFlightButtons();
  updateFlightStatus();
  saveGameState();
  saveProfile(name, shipClass.id, pilot.id);
  showProfileBadge(name);
  startOverlay.classList.add('hidden');
}

function getFlightMode() {
  return FLIGHT_MODES.find(mode => mode.id === currentFlightModeId) || FLIGHT_MODES[1];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalizeAngle(angle) {
  while (angle > Math.PI) angle -= Math.PI * 2;
  while (angle < -Math.PI) angle += Math.PI * 2;
  return angle;
}

function lerpAngle(from, to, t) {
  return from + normalizeAngle(to - from) * t;
}

function renderFlightModes() {
  flightModeButtons.innerHTML = '';
  FLIGHT_MODES.forEach(mode => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'flight-mode-btn' + (mode.id === currentFlightModeId ? ' active' : '');
    button.textContent = mode.label;
    button.addEventListener('click', () => {
      currentFlightModeId = mode.id;
      renderFlightModes();
      const ship = currentSystem?.ships?.player;
      if (ship) {
        ship.stats['Режим'] = mode.label;
      }
      updateFlightStatus();
    });
    flightModeButtons.appendChild(button);
  });
}

function setFlightControlsActive(isActive) {
  flightControls.classList.toggle('inactive', !isActive);
}

function updateFlightButtons() {
  const ship = currentSystem?.ships?.player;
  const hasShip = !!ship;
  const hasTarget = !!ship?.targetObject || !!ship?.dockingSequence;
  const isDocked = !!ship?.dockedObject && !ship?.targetObject && !ship?.dockingSequence;
  flightStopBtn.disabled = !hasShip || (!hasTarget && Math.hypot(ship?.vx || 0, ship?.vy || 0) < 1);
  flightUndockBtn.disabled = !hasShip || !isDocked;
  cameraFollowBtn.textContent = cameraFollowPlayer ? 'Камера: вкл' : 'Камера: выкл';
  cameraFollowBtn.classList.toggle('active', cameraFollowPlayer);
}

function getObjectRadius(object) {
  if (!object) return 18;
  if (object.type === 'star') return (object.radius || 24) + 28;
  if (object.type === 'planet' || object.type === 'dwarf') {
    const ringRadius = object.rings?.outerR || 0;
    return Math.max((object.radius || 8) + 10, ringRadius + 4);
  }
  if (object.type === 'juggernaut') return 18;
  if (object.type === 'interstellar') return 15;
  if (object.type === 'player-ship') return 14;
  return 18;
}

function getShipDockingRadius(ship) {
  if (!ship) return 16;
  if (ship.silhouette === 'builder') return 18;
  if (ship.silhouette === 'transport') return 17;
  return 15;
}

function getDockingDistance(ship, object) {
  return getObjectRadius(object) + getShipDockingRadius(ship) + 6;
}

function getPlanetPosition(planet) {
  return {
    x: Math.cos(planet.angle) * planet.orbitRadius,
    y: Math.sin(planet.angle) * planet.orbitRadius
  };
}

function getObjectWorldPosition(object, system = currentSystem) {
  if (!object || !system) return { x: 0, y: 0 };
  if (object.type === 'star') return { x: 0, y: 0 };
  if (object.type === 'planet' || object.type === 'dwarf') return getPlanetPosition(object);
  if (object.type === 'interstellar') {
    return {
      x: Math.cos(object.angle) * object.orbitRadius + (object.driftX || 0) * 0.45,
      y: Math.sin(object.angle) * object.orbitRadius + (object.driftY || 0) * 0.45
    };
  }

  const earth = system.planets.find(planet => planet.name === 'Земля');
  if (object.type === 'juggernaut' && earth) {
    const earthPos = getPlanetPosition(earth);
    return {
      x: earthPos.x + Math.cos(object.angle) * object.orbitR,
      y: earthPos.y + Math.sin(object.angle) * object.orbitR
    };
  }

  if (object.type === 'player-ship') {
    return { x: object.x || 0, y: object.y || 0 };
  }

  return { x: 0, y: 0 };
}

function canShipDockTo(object, system = currentSystem) {
  if (!object || !system) return false;
  if (object.type === 'player-ship' || object.type === 'meteorite') return false;
  const supportedTypes = new Set(['star', 'planet', 'dwarf', 'interstellar', 'juggernaut']);
  if (!supportedTypes.has(object.type)) return false;
  const pos = getObjectWorldPosition(object, system);
  return Number.isFinite(pos.x) && Number.isFinite(pos.y);
}

function seedPlayerShipPosition(system) {
  const ship = system?.ships?.player;
  if (!ship || ship.positionInitialized) return;
  const earth = system.planets.find(planet => planet.name === 'Земля');
  if (!earth) return;
  const earthPos = getPlanetPosition(earth);
  ship.x = earthPos.x + ship.orbitR;
  ship.y = earthPos.y;
  ship.vx = 0;
  ship.vy = 0;
  ship.heading = 0;
  ship.visualHeading = 0;
  ship.bank = 0;
  ship.thrust = 0;
  ship.trail = [];
  ship.targetObject = null;
  ship.dockedObject = earth;
  ship.dockAngle = 0;
  ship.dockDistance = ship.orbitR;
  ship.positionInitialized = true;
  ship.stats['Режим'] = getFlightMode().label;
  ship.stats['Состояние'] = 'Орбита Земли';
}

function updateFlightStatus() {
  const ship = currentSystem?.ships?.player;
  if (!ship) {
    flightStatus.textContent = 'Игровой корабль доступен только после запуска и только внутри Солнечной системы.';
    updateFlightButtons();
    return;
  }

  const mode = getFlightMode();
  if (ship.dockingSequence) {
    flightStatus.textContent = `Заход на орбиту: ${ship.dockingSequence.object.name}. Режим ${mode.label.toLowerCase()}, скорость ${Math.round(Math.hypot(ship.vx || 0, ship.vy || 0))}.`;
    updateFlightButtons();
    return;
  }
  if (ship.targetObject) {
    flightStatus.textContent = `Маршрут: ${ship.targetObject.name}. Режим ${mode.label.toLowerCase()}, скорость ${Math.round(Math.hypot(ship.vx || 0, ship.vy || 0))}.`;
    updateFlightButtons();
    return;
  }

  if (ship.dockedObject) {
    flightStatus.textContent = `Стыковка: ${ship.dockedObject.name}. Режим ${mode.label.toLowerCase()}, корабль удерживает позицию.`;
    updateFlightButtons();
    return;
  }

  flightStatus.textContent = `Корабль в свободном полёте. Активен режим ${mode.label.toLowerCase()}.`;
  updateFlightButtons();
}

function refreshPlayerTelemetry(ship) {
  if (!ship) return;
  ship.stats['Режим'] = getFlightMode().label;
  ship.stats['Скорость'] = `${Math.round(Math.hypot(ship.vx || 0, ship.vy || 0))} ед/с`;
}

function flyPlayerShipTo(target) {
  const ship = currentSystem?.ships?.player;
  if (!ship || !target || target.type === 'player-ship') return;
  if (!canShipDockTo(target, currentSystem)) {
    showNotification('Для этого объекта маршрут стыковки недоступен.', 'warn');
    return;
  }
  seedPlayerShipPosition(currentSystem);
  ship.targetObject = target;
  ship.dockingSequence = null;
  ship.dockedObject = null;
  ship.stats['Цель'] = target.name;
  ship.stats['Состояние'] = 'В полете';
  updateNavStatus('Маршрут: ' + target.name);
  updateFlightStatus();
  closePanel();
}

function stopPlayerShip() {
  const ship = currentSystem?.ships?.player;
  if (!ship) return;
  ship.targetObject = null;
  ship.dockingSequence = null;
  ship.vx = 0;
  ship.vy = 0;
  ship.thrust = 0;
  ship.bank = 0;
  ship.stats['Состояние'] = ship.dockedObject ? 'Стыковка завершена' : 'Ожидание';
  updateNavStatus(ship.dockedObject ? 'Стыковка: ' + ship.dockedObject.name : 'Корабль остановлен');
  updateFlightStatus();
}

function undockPlayerShip() {
  const ship = currentSystem?.ships?.player;
  if (!ship || !ship.dockedObject) return;
  const releaseAngle = ship.dockAngle || ship.heading || 0;
  ship.x += Math.cos(releaseAngle) * 18;
  ship.y += Math.sin(releaseAngle) * 18;
  ship.vx = Math.cos(releaseAngle) * 22;
  ship.vy = Math.sin(releaseAngle) * 22;
  ship.heading = releaseAngle;
  ship.visualHeading = releaseAngle;
  ship.dockedObject = null;
  ship.dockingSequence = null;
  ship.targetObject = null;
  ship.thrust = 0.8;
  ship.stats['Состояние'] = 'Отстыковка';
  updateNavStatus('Отстыковка выполнена');
  updateFlightStatus();
}

function toggleCameraFollow() {
  cameraFollowPlayer = !cameraFollowPlayer;
  updateFlightButtons();
}

function updatePlayerShipPhysics(system, dt) {
  const ship = system?.ships?.player;
  if (!ship) return;

  seedPlayerShipPosition(system);
  const dtSec = dt / 1000;
  const currentSpeed = Math.hypot(ship.vx || 0, ship.vy || 0);

  const pushTrail = () => {
    ship.trail.push({ x: ship.x, y: ship.y, life: 1 });
    if (ship.trail.length > 28) ship.trail.shift();
  };
  ship.trail.forEach(point => { point.life *= 0.94; });
  ship.trail = ship.trail.filter(point => point.life > 0.06);

  if (ship.dockingSequence) {
    const seq = ship.dockingSequence;
    seq.progress = Math.min(1, seq.progress + dtSec * 1.15);
    const ease = 1 - Math.pow(1 - seq.progress, 3);
    const targetPos = getObjectWorldPosition(seq.object, system);
    const finalX = targetPos.x + Math.cos(seq.endAngle) * seq.endDistance;
    const finalY = targetPos.y + Math.sin(seq.endAngle) * seq.endDistance;
    ship.x = seq.startX + (finalX - seq.startX) * ease;
    ship.y = seq.startY + (finalY - seq.startY) * ease;
    const headingToDock = Math.atan2(finalY - ship.y, finalX - ship.x);
    ship.heading = headingToDock;
    ship.visualHeading = lerpAngle(ship.visualHeading || headingToDock, headingToDock, 0.18);
    ship.bank *= 0.72;
    ship.thrust = clamp(ship.thrust * 0.84 + 0.18, 0, 0.55);
    ship.vx = (finalX - ship.x) * 2.4;
    ship.vy = (finalY - ship.y) * 2.4;
    pushTrail();
    ship.stats['Состояние'] = 'Заход на орбиту';
    refreshPlayerTelemetry(ship);

    if (seq.progress >= 1) {
      ship.dockedObject = seq.object;
      ship.dockAngle = seq.endAngle;
      ship.dockDistance = seq.endDistance;
      ship.targetObject = null;
      ship.dockingSequence = null;
      ship.vx = 0;
      ship.vy = 0;
      ship.heading = seq.endAngle + Math.PI;
      ship.visualHeading = ship.heading;
      ship.bank = 0;
      ship.thrust = 0;
      ship.stats['Состояние'] = 'Стыковка завершена';
      refreshPlayerTelemetry(ship);
      if (system === currentSystem) updateNavStatus('Стыковка: ' + ship.dockedObject.name);
      updateFlightStatus();
    } else if (system === currentSystem) {
      updateFlightStatus();
    }
    return;
  }

  if (ship.dockedObject && !ship.targetObject) {
    const dockPos = getObjectWorldPosition(ship.dockedObject, system);
    const dockDistance = ship.dockDistance || getDockingDistance(ship, ship.dockedObject);
    ship.x = dockPos.x + Math.cos(ship.dockAngle || 0) * dockDistance;
    ship.y = dockPos.y + Math.sin(ship.dockAngle || 0) * dockDistance;
    ship.vx = 0;
    ship.vy = 0;
    ship.heading = Math.atan2(dockPos.y - ship.y, dockPos.x - ship.x);
    ship.visualHeading = lerpAngle(ship.visualHeading || ship.heading, ship.heading, 0.12);
    ship.bank *= 0.82;
    ship.thrust *= 0.78;
    ship.stats['Состояние'] = 'Стыковка завершена';
    refreshPlayerTelemetry(ship);
    if (system === currentSystem) updateFlightStatus();
    return;
  }

  if (!ship.targetObject) {
    ship.x += (ship.vx || 0) * dtSec;
    ship.y += (ship.vy || 0) * dtSec;
    ship.vx *= 0.982;
    ship.vy *= 0.982;
    if (Math.hypot(ship.vx, ship.vy) > 4) {
      pushTrail();
    }
    if (Math.hypot(ship.vx, ship.vy) > 0.6) {
      ship.heading = Math.atan2(ship.vy, ship.vx);
      ship.visualHeading = lerpAngle(ship.visualHeading || ship.heading, ship.heading, 0.16);
    }
    ship.bank *= 0.88;
    ship.thrust *= 0.86;
    ship.stats['Состояние'] = 'Свободный полет';
    refreshPlayerTelemetry(ship);
    if (system === currentSystem) updateFlightStatus();
    return;
  }

  const targetPos = getObjectWorldPosition(ship.targetObject, system);
  const dx = targetPos.x - ship.x;
  const dy = targetPos.y - ship.y;
  const dist = Math.hypot(dx, dy);
  const mode = getFlightMode();
  const dockDistance = getDockingDistance(ship, ship.targetObject);

  if (dist <= dockDistance) {
    const safeAngle = dist > 0.001 ? Math.atan2(dy, dx) + Math.PI : (ship.heading || 0);
    ship.dockingSequence = {
      object: ship.targetObject,
      progress: 0,
      startX: ship.x,
      startY: ship.y,
      endAngle: safeAngle,
      endDistance: dockDistance
    };
    ship.stats['Состояние'] = 'Заход на орбиту';
    updateFlightStatus();
    return;
  }

  const dirX = dx / dist;
  const dirY = dy / dist;
  const brakingDistance = Math.max(dockDistance + 36, (currentSpeed * currentSpeed) / (2 * Math.max(mode.accel, 1)));
  const desiredSpeed = dist < brakingDistance
    ? Math.max(10, mode.maxSpeed * ((dist - dockDistance) / Math.max(1, brakingDistance - dockDistance)))
    : mode.maxSpeed;
  const desiredVX = dirX * desiredSpeed;
  const desiredVY = dirY * desiredSpeed;
  const accelStep = mode.accel * dtSec;
  const deltaVX = desiredVX - (ship.vx || 0);
  const deltaVY = desiredVY - (ship.vy || 0);
  const deltaMag = Math.hypot(deltaVX, deltaVY) || 1;
  const factor = Math.min(1, accelStep / deltaMag);

  ship.vx += deltaVX * factor;
  ship.vy += deltaVY * factor;
  ship.x += ship.vx * dtSec;
  ship.y += ship.vy * dtSec;
  const speed = Math.hypot(ship.vx, ship.vy);
  const targetHeading = speed > 0.4 ? Math.atan2(ship.vy, ship.vx) : Math.atan2(dy, dx);
  const previousVisualHeading = ship.visualHeading || targetHeading;
  ship.heading = targetHeading;
  ship.visualHeading = lerpAngle(previousVisualHeading, targetHeading, clamp(0.08 + dtSec * 5, 0.08, 0.24));
  const turnDelta = normalizeAngle(ship.visualHeading - previousVisualHeading);
  ship.bank = clamp(ship.bank * 0.8 + turnDelta * 8, -0.55, 0.55);
  ship.thrust = clamp(ship.thrust * 0.72 + factor * 1.65, 0, 1);
  if (speed > 5) {
    pushTrail();
  }
  ship.stats['Состояние'] = 'В полете';
  refreshPlayerTelemetry(ship);
  if (system === currentSystem) updateFlightStatus();
}

function resize() {
  const leftPanel = 220;
  const rightPanel = 280;
  W = window.innerWidth - leftPanel - rightPanel;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  canvas.style.left = leftPanel + 'px';
  canvas.style.top = '0px';
  canvas.style.position = 'absolute';
  cx = W / 2;
  cy = H / 2;
}
resize();
window.addEventListener('resize', resize);

function applyCamera(system) {
  scale = system.cameraDefaults?.scale || 1;
  offsetX = system.cameraDefaults?.offsetX || 0;
  offsetY = system.cameraDefaults?.offsetY || 0;
}
applyCamera(currentSystem);

function worldToScreen(wx, wy) {
  return { x: (wx + offsetX) * scale + cx, y: (wy + offsetY) * scale + cy };
}

function darken(hex) {
  try {
    const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 55);
    const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 55);
    const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 55);
    return `rgb(${r},${g},${b})`;
  } catch (e) {
    return hex;
  }
}

function lighten(hex) {
  try {
    const r = Math.min(255, parseInt(hex.slice(1, 3), 16) + 45);
    const g = Math.min(255, parseInt(hex.slice(3, 5), 16) + 45);
    const b = Math.min(255, parseInt(hex.slice(5, 7), 16) + 45);
    return `rgb(${r},${g},${b})`;
  } catch (e) {
    return hex;
  }
}

function updateAngles(system, dt) {
  system.planets.forEach(planet => {
    planet.angle += planet.speed * dt;
    (planet.moons || []).forEach(moon => { moon.angle += moon.speed * dt; });
  });
  // Метеориты
  if (system.meteorites) {
    system.meteorites.forEach(m => { m.angle += m.speed * dt; });
  }
  if (system.ships?.interstellar) {
    system.ships.interstellar.forEach(ship => { ship.angle += ship.speed * dt; });
  }
  if (system.ships?.juggernaut) {
    system.ships.juggernaut.angle += system.ships.juggernaut.speed * dt;
  }
  updatePlayerShipPhysics(system, dt);
}

function drawStar(star) {
  const s = worldToScreen(0, 0);
  const glowRadius = (star.glowRadius || star.radius * 3) * scale;
  const coronaRadius = star.radius * 1.7 * scale;
  const bodyRadius = star.radius * scale;

  const outer = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowRadius);
  outer.addColorStop(0, `${star.glowColor}33`);
  outer.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(s.x, s.y, glowRadius, 0, Math.PI * 2);
  ctx.fillStyle = outer;
  ctx.fill();

  const corona = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, coronaRadius);
  corona.addColorStop(0, `${star.midColor || star.glowColor}88`);
  corona.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(s.x, s.y, coronaRadius, 0, Math.PI * 2);
  ctx.fillStyle = corona;
  ctx.fill();

  const core = ctx.createRadialGradient(s.x - bodyRadius * 0.35, s.y - bodyRadius * 0.35, 0, s.x, s.y, bodyRadius);
  core.addColorStop(0, star.coreColor || '#ffffff');
  core.addColorStop(0.45, star.midColor || star.glowColor);
  core.addColorStop(1, star.outerColor || darken(star.glowColor));
  ctx.beginPath();
  ctx.arc(s.x, s.y, bodyRadius, 0, Math.PI * 2);
  ctx.fillStyle = core;
  ctx.fill();

  if (scale > 0.35) {
    ctx.fillStyle = 'rgba(240,245,255,0.82)';
    ctx.font = `${Math.max(10, 11 * scale)}px 'Exo 2', sans-serif`;
    ctx.fillText(star.name, s.x + bodyRadius + 8, s.y + 5);
  }

  screenObjects.push({ x: s.x, y: s.y, r: Math.max(bodyRadius, 18), data: star });
}

function drawOrbit(radius) {
  const s = worldToScreen(0, 0);
  ctx.beginPath();
  ctx.arc(s.x, s.y, radius * scale, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 0.8;
  ctx.stroke();
}

function drawPlanet(planet) {
  const wx = Math.cos(planet.angle) * planet.orbitRadius;
  const wy = Math.sin(planet.angle) * planet.orbitRadius;
  const s = worldToScreen(wx, wy);
  const r = planet.radius * scale;

  if (planet.rings) {
    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.scale(1, 0.35);
    ctx.beginPath();
    ctx.arc(0, 0, planet.rings.outerR * scale, 0, Math.PI * 2);
    ctx.fillStyle = planet.rings.color;
    ctx.fill();
    ctx.restore();
  }

  const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 2.6);
  glow.addColorStop(0, `${planet.glowColor}55`);
  glow.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(s.x, s.y, r * 2.6, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();

  const grad = ctx.createRadialGradient(s.x - r * 0.3, s.y - r * 0.3, 0, s.x, s.y, r);
  grad.addColorStop(0, lighten(planet.color));
  grad.addColorStop(1, darken(planet.color));
  ctx.beginPath();
  ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();

  (planet.moons || []).forEach(moon => {
    const mx = s.x + Math.cos(moon.angle) * moon.orbitR * scale;
    const my = s.y + Math.sin(moon.angle) * moon.orbitR * scale;
    ctx.beginPath();
    ctx.arc(mx, my, moon.r * scale, 0, Math.PI * 2);
    ctx.fillStyle = moon.color;
    ctx.fill();
  });

  if (scale > 0.4) {
    ctx.fillStyle = 'rgba(200,220,255,0.72)';
    ctx.font = `${Math.max(9, 10 * scale)}px 'Exo 2', sans-serif`;
    ctx.fillText(planet.name, s.x + r + 4, s.y + 4);
  }

  screenObjects.push({ x: s.x, y: s.y, r: Math.max(r, 10), data: planet });
}

function drawStationForPlanet(planet) {
  if (!planet.colony?.stationBuilt) return;
  const planetPos = getPlanetPosition(planet);
  const center = worldToScreen(planetPos.x, planetPos.y);
  const mods = planet.colony.modules || [];
  const stationAngle = planet.angle + Math.PI * 0.42;
  const orbitRadiusWorld = planet.radius + 22;
  const stationWorldX = planetPos.x + Math.cos(stationAngle) * orbitRadiusWorld;
  const stationWorldY = planetPos.y + Math.sin(stationAngle) * orbitRadiusWorld;
  const station = worldToScreen(stationWorldX, stationWorldY);

  const hubR = Math.max(4.5, 7.5 * scale);
  const ringR = Math.max(10, 16 * scale);
  const moduleR = Math.max(2.8, 4.2 * scale);
  const armLen = Math.max(10, 15 * scale);
  const pulse = 0.5 + 0.5 * Math.sin(performance.now() * 0.0025 + planet.orbitRadius * 0.01);

  const moduleColors = {
    core: '#ffd54f',
    aether_module: '#c792ff',
    printer: '#8de3ff',
    hangar: '#90caf9',
    fuel_factory: '#ffb86b',
    portal_gen: '#66e0ff',
    habitat: '#80cbc4'
  };

  ctx.save();

  ctx.setLineDash([5, 7]);
  ctx.strokeStyle = 'rgba(255, 213, 79, 0.2)';
  ctx.lineWidth = Math.max(1, scale * 1.1);
  ctx.beginPath();
  ctx.arc(center.x, center.y, orbitRadiusWorld * scale, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = 'rgba(160, 210, 255, 0.18)';
  ctx.lineWidth = Math.max(1, scale);
  ctx.beginPath();
  ctx.moveTo(center.x, center.y);
  ctx.lineTo(station.x, station.y);
  ctx.stroke();

  const glow = ctx.createRadialGradient(station.x, station.y, 0, station.x, station.y, ringR * 2.8);
  glow.addColorStop(0, 'rgba(130, 220, 255, 0.28)');
  glow.addColorStop(0.5, 'rgba(130, 220, 255, 0.12)');
  glow.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(station.x, station.y, ringR * 2.8, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();

  ctx.strokeStyle = 'rgba(170, 235, 255, 0.55)';
  ctx.lineWidth = Math.max(1.2, scale * 1.4);
  ctx.beginPath();
  ctx.arc(station.x, station.y, ringR, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
  ctx.lineWidth = Math.max(0.8, scale);
  ctx.beginPath();
  ctx.arc(station.x, station.y, ringR * 0.66, 0, Math.PI * 2);
  ctx.stroke();

  const armAngles = [stationAngle, stationAngle + Math.PI * 0.66, stationAngle - Math.PI * 0.66];
  armAngles.forEach((angle, index) => {
    ctx.strokeStyle = index === 0 ? 'rgba(255, 201, 107, 0.75)' : 'rgba(150, 205, 255, 0.5)';
    ctx.lineWidth = Math.max(1.2, scale * (index === 0 ? 1.7 : 1.1));
    ctx.beginPath();
    ctx.moveTo(station.x, station.y);
    ctx.lineTo(
      station.x + Math.cos(angle) * armLen,
      station.y + Math.sin(angle) * armLen
    );
    ctx.stroke();
  });

  if (mods.includes('printer')) {
    ctx.fillStyle = 'rgba(141, 227, 255, 0.85)';
    ctx.fillRect(station.x - hubR * 0.9, station.y - hubR * 0.35, hubR * 1.8, hubR * 0.7);
  }

  if (mods.includes('hangar')) {
    ctx.fillStyle = 'rgba(144, 202, 249, 0.9)';
    ctx.beginPath();
    ctx.moveTo(station.x + armLen * 0.9, station.y);
    ctx.lineTo(station.x + armLen * 1.25, station.y - hubR * 0.55);
    ctx.lineTo(station.x + armLen * 1.25, station.y + hubR * 0.55);
    ctx.closePath();
    ctx.fill();
  }

  if (mods.includes('aether_module') || mods.includes('portal_gen')) {
    ctx.strokeStyle = mods.includes('portal_gen') ? 'rgba(102, 224, 255, 0.9)' : 'rgba(199, 146, 255, 0.72)';
    ctx.lineWidth = Math.max(1.2, scale * 1.2);
    ctx.beginPath();
    ctx.arc(station.x, station.y, ringR * (0.78 + pulse * 0.08), 0, Math.PI * 2);
    ctx.stroke();
  }

  if (mods.includes('fuel_factory')) {
    ctx.fillStyle = 'rgba(255, 184, 107, 0.88)';
    ctx.fillRect(station.x - hubR * 1.15, station.y + hubR * 0.6, hubR * 0.8, hubR * 1.3);
    ctx.fillRect(station.x - hubR * 0.1, station.y + hubR * 0.2, hubR * 0.9, hubR * 1.7);
  }

  if (mods.includes('habitat')) {
    ctx.fillStyle = 'rgba(128, 203, 196, 0.92)';
    ctx.beginPath();
    ctx.arc(station.x - armLen * 0.85, station.y - hubR * 0.1, hubR * 0.7, 0, Math.PI * 2);
    ctx.fill();
  }

  const hub = ctx.createRadialGradient(
    station.x - hubR * 0.35,
    station.y - hubR * 0.35,
    0,
    station.x,
    station.y,
    hubR
  );
  hub.addColorStop(0, '#f9fdff');
  hub.addColorStop(0.42, '#b6e8ff');
  hub.addColorStop(1, '#3d6d8a');
  ctx.beginPath();
  ctx.arc(station.x, station.y, hubR, 0, Math.PI * 2);
  ctx.fillStyle = hub;
  ctx.fill();

  const outerModules = mods.filter(id => id !== 'core');
  outerModules.forEach((moduleId, index) => {
    const angle = performance.now() * 0.00018 + stationAngle + (Math.PI * 2 * index) / Math.max(1, outerModules.length);
    const x = station.x + Math.cos(angle) * ringR;
    const y = station.y + Math.sin(angle) * ringR;
    ctx.beginPath();
    ctx.arc(x, y, moduleR, 0, Math.PI * 2);
    ctx.fillStyle = moduleColors[moduleId] || '#90caf9';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = Math.max(0.8, scale * 0.8);
    ctx.stroke();
  });

  if (scale > 0.45) {
    ctx.fillStyle = 'rgba(208, 232, 255, 0.78)';
    ctx.font = `${Math.max(8, 9 * scale)}px 'Exo 2', sans-serif`;
    ctx.fillText('Станция', station.x + ringR + 7, station.y - 2);
  }

  ctx.restore();

  screenObjects.push({
    x: station.x,
    y: station.y,
    r: Math.max(ringR + moduleR, 12),
    data: planet
  });
}

function drawInterstellarObject(object) {
  const wx = Math.cos(object.angle) * object.orbitRadius + (object.driftX || 0) * 0.45;
  const wy = Math.sin(object.angle) * object.orbitRadius + (object.driftY || 0) * 0.45;
  const s = worldToScreen(wx, wy);
  const r = Math.max(3.5, 4.8 * scale);

  ctx.save();
  ctx.translate(s.x, s.y);
  ctx.rotate(object.angle + Math.PI / 8);

  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 3.6);
  glow.addColorStop(0, `${object.glowColor || object.color}66`);
  glow.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(0, 0, r * 3.6, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(0, 0, r * 1.8, r * 0.8, 0, 0, Math.PI * 2);
  ctx.fillStyle = object.color || '#d6c7a7';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-r * 2.6, 0);
  ctx.lineTo(-r * 5, r * 0.5);
  ctx.lineTo(-r * 5, -r * 0.5);
  ctx.closePath();
  ctx.fillStyle = 'rgba(180,220,255,0.2)';
  ctx.fill();
  ctx.restore();

  if (scale > 0.42) {
    ctx.fillStyle = 'rgba(190,220,255,0.78)';
    ctx.font = `${Math.max(9, 9 * scale)}px 'Exo 2', sans-serif`;
    ctx.fillText(object.name, s.x + r + 6, s.y - 4);
  }

  screenObjects.push({ x: s.x, y: s.y, r: Math.max(r * 1.8, 10), data: object });
}

function drawJuggernaut(juggernaut, anchorPlanet) {
  if (!anchorPlanet) return;

  const planetX = Math.cos(anchorPlanet.angle) * anchorPlanet.orbitRadius;
  const planetY = Math.sin(anchorPlanet.angle) * anchorPlanet.orbitRadius;
  const wx = planetX + Math.cos(juggernaut.angle) * juggernaut.orbitR;
  const wy = planetY + Math.sin(juggernaut.angle) * juggernaut.orbitR;
  const s = worldToScreen(wx, wy);
  const w = Math.max(11, 26 * scale);
  const h = Math.max(7, 14 * scale);

  ctx.save();
  ctx.translate(s.x, s.y);
  ctx.rotate(juggernaut.angle + Math.PI / 2);

  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, w * 1.8);
  glow.addColorStop(0, 'rgba(120, 230, 255, 0.18)');
  glow.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(0, 0, w * 1.8, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();

  const hull = ctx.createLinearGradient(-w, 0, w, 0);
  hull.addColorStop(0, '#1e2f46');
  hull.addColorStop(0.5, '#5fb6d8');
  hull.addColorStop(1, '#0d1625');
  ctx.beginPath();
  ctx.moveTo(0, -h * 0.1);
  ctx.bezierCurveTo(w * 0.95, -h * 1.1, w * 0.9, h * 1.25, 0, h * 0.42);
  ctx.bezierCurveTo(-w * 0.9, h * 1.25, -w * 0.95, -h * 1.1, 0, -h * 0.1);
  ctx.closePath();
  ctx.fillStyle = hull;
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(0, h * 0.15, w * 0.25, h * 0.16, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(207,245,255,0.72)';
  ctx.fill();
  ctx.restore();

  if (scale > 0.5) {
    ctx.fillStyle = 'rgba(210,235,255,0.8)';
    ctx.font = `${Math.max(9, 9 * scale)}px 'Exo 2', sans-serif`;
    ctx.fillText(juggernaut.name, s.x + w * 0.6, s.y + 2);
  }

  screenObjects.push({ x: s.x, y: s.y, r: Math.max(w * 0.8, 12), data: juggernaut });
}

function drawPlayerShip(ship, anchorPlanet) {
  if (!anchorPlanet) return;

  seedPlayerShipPosition(currentSystem);
  const wx = ship.x;
  const wy = ship.y;
  const s = worldToScreen(wx, wy);
  // heading = угол в радианах, 0 = вправо, π/2 = вниз
  const heading = ship.visualHeading || ship.heading || 0;
  const bank    = ship.bank || 0;
  const speed   = Math.hypot(ship.vx || 0, ship.vy || 0);
  const thrust  = ship.thrust || 0;
  const sz      = Math.max(10, 20 * scale); // базовый размер

  // ── Трейл ─────────────────────────────────────────────────────────
  ship.trail.forEach((point, idx) => {
    const tp = worldToScreen(point.x, point.y);
    const alpha = point.life * (0.06 + idx / Math.max(1, ship.trail.length) * 0.18);
    ctx.beginPath();
    ctx.arc(tp.x, tp.y, Math.max(1.5, sz * 0.14 * point.life), 0, Math.PI * 2);
    ctx.fillStyle = `rgba(144,202,249,${alpha})`;
    ctx.fill();
  });

  // ── Маркер цели ───────────────────────────────────────────────────
  if (ship.targetObject) {
    const tp = getObjectWorldPosition(ship.targetObject, currentSystem);
    const ts = worldToScreen(tp.x, tp.y);
    const pulse = 9 + Math.sin(performance.now() * 0.006) * 3;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,213,79,0.56)';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.arc(ts.x, ts.y, getObjectRadius(ship.targetObject) * scale + pulse, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  // ── Glow вокруг корабля ───────────────────────────────────────────
  const glowR = sz * 2.4;
  const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowR);
  glow.addColorStop(0, `${ship.color}40`);
  glow.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(s.x, s.y, glowR, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();

  // ── Корпус ────────────────────────────────────────────────────────
  // Всё рисуется в локальных координатах: нос → +X, верх → -Y
  // ctx.rotate(heading) разворачивает нос туда куда летим — без лишних поправок
  ctx.save();
  ctx.translate(s.x, s.y);
  ctx.rotate(heading + bank * 0.18); // bank — лёгкий крен при повороте

  const W = sz;   // полудлина
  const H = sz * 0.52; // полувысота

  // Двигательный выхлоп
  if (thrust > 0.04) {
    const fLen = W * (0.55 + thrust * 0.9);
    const flame = ctx.createLinearGradient(-W * 0.9 - fLen, 0, -W * 0.7, 0);
    flame.addColorStop(0, 'rgba(79,195,247,0)');
    flame.addColorStop(0.45, `rgba(79,195,247,${0.25 + thrust * 0.3})`);
    flame.addColorStop(1, `rgba(255,244,214,${0.4 + thrust * 0.4})`);
    ctx.beginPath();
    ctx.moveTo(-W * 0.7, 0);
    ctx.lineTo(-W * 0.9 - fLen, -H * (0.22 + thrust * 0.2));
    ctx.lineTo(-W * 0.9 - fLen * 0.6, 0);
    ctx.lineTo(-W * 0.9 - fLen, H * (0.22 + thrust * 0.2));
    ctx.closePath();
    ctx.fillStyle = flame;
    ctx.fill();
  }

  // Тело по типу корабля — нос всегда смотрит в +X
  const hull = ctx.createLinearGradient(-W, 0, W, 0);

  if (ship.silhouette === 'transport') {
    // Тяжёлый транспорт — широкий, прямоугольный корпус с крупными двигателями
    hull.addColorStop(0, '#1a2840');
    hull.addColorStop(0.5, ship.color);
    hull.addColorStop(1, ship.accentColor);

    // Основной корпус
    ctx.beginPath();
    ctx.moveTo(W * 0.85, 0);            // нос
    ctx.lineTo(W * 0.5, -H * 0.55);
    ctx.lineTo(-W * 0.55, -H * 0.7);   // корма верх
    ctx.lineTo(-W * 0.9, -H * 0.35);
    ctx.lineTo(-W * 0.9, H * 0.35);
    ctx.lineTo(-W * 0.55, H * 0.7);    // корма низ
    ctx.lineTo(W * 0.5, H * 0.55);
    ctx.closePath();
    ctx.fillStyle = hull;
    ctx.fill();

    // Грузовые контейнеры на боках
    ctx.fillStyle = `${ship.color}55`;
    ctx.fillRect(-W * 0.4, -H * 0.95, W * 0.7, H * 0.32);
    ctx.fillRect(-W * 0.4, H * 0.63, W * 0.7, H * 0.32);

    // Двигатели (2 штуки)
    ctx.fillStyle = '#0d1e30';
    ctx.fillRect(-W * 0.95, -H * 0.6, W * 0.22, H * 0.48);
    ctx.fillRect(-W * 0.95, H * 0.12, W * 0.22, H * 0.48);
    // Сопла
    ctx.fillStyle = `rgba(79,195,247,${0.5 + thrust * 0.5})`;
    ctx.beginPath(); ctx.ellipse(-W * 0.96, -H * 0.36, sz * 0.06, sz * 0.14, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(-W * 0.96, H * 0.36, sz * 0.06, sz * 0.14, 0, 0, Math.PI * 2); ctx.fill();

  } else if (ship.silhouette === 'builder') {
    // Строитель — угловатый, с фермами и манипуляторами
    hull.addColorStop(0, '#1e1a10');
    hull.addColorStop(0.5, ship.color);
    hull.addColorStop(1, ship.accentColor);

    // Основной корпус
    ctx.beginPath();
    ctx.moveTo(W * 0.9, 0);
    ctx.lineTo(W * 0.45, -H * 0.45);
    ctx.lineTo(W * 0.1, -H * 0.45);
    ctx.lineTo(-W * 0.05, -H * 0.85);
    ctx.lineTo(-W * 0.55, -H * 0.55);
    ctx.lineTo(-W * 0.85, -H * 0.2);
    ctx.lineTo(-W * 0.85, H * 0.2);
    ctx.lineTo(-W * 0.55, H * 0.55);
    ctx.lineTo(-W * 0.05, H * 0.85);
    ctx.lineTo(W * 0.1, H * 0.45);
    ctx.lineTo(W * 0.45, H * 0.45);
    ctx.closePath();
    ctx.fillStyle = hull;
    ctx.fill();

    // Фермы-манипуляторы
    ctx.strokeStyle = `${ship.color}88`;
    ctx.lineWidth = Math.max(1, sz * 0.05);
    ctx.beginPath();
    ctx.moveTo(W * 0.3, -H * 0.45);
    ctx.lineTo(W * 0.3, -H * 1.1);
    ctx.lineTo(-W * 0.1, -H * 1.1);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(W * 0.3, H * 0.45);
    ctx.lineTo(W * 0.3, H * 1.1);
    ctx.lineTo(-W * 0.1, H * 1.1);
    ctx.stroke();

    // Двигатель центральный
    ctx.fillStyle = '#0d1e30';
    ctx.fillRect(-W * 0.9, -H * 0.28, W * 0.18, H * 0.56);
    ctx.fillStyle = `rgba(255,200,80,${0.4 + thrust * 0.5})`;
    ctx.beginPath(); ctx.ellipse(-W * 0.92, 0, sz * 0.06, sz * 0.18, 0, 0, Math.PI * 2); ctx.fill();

  } else {
    // Исследователь (research) — стремительный, тонкий, острый нос
    hull.addColorStop(0, '#0e1e2e');
    hull.addColorStop(0.5, ship.color);
    hull.addColorStop(1, ship.accentColor);

    // Основной корпус — острый клин
    ctx.beginPath();
    ctx.moveTo(W, 0);               // острый нос
    ctx.lineTo(W * 0.2, -H * 0.38);
    ctx.lineTo(-W * 0.4, -H * 0.38);
    ctx.lineTo(-W * 0.85, -H * 0.2);
    ctx.lineTo(-W * 0.85, H * 0.2);
    ctx.lineTo(-W * 0.4, H * 0.38);
    ctx.lineTo(W * 0.2, H * 0.38);
    ctx.closePath();
    ctx.fillStyle = hull;
    ctx.fill();

    // Боковые крылья (сенсорные дуги)
    ctx.fillStyle = `${ship.color}66`;
    ctx.beginPath();
    ctx.moveTo(W * 0.3, -H * 0.38);
    ctx.lineTo(-W * 0.2, -H * 0.38);
    ctx.lineTo(-W * 0.3, -H * 0.8);
    ctx.lineTo(W * 0.1, -H * 0.65);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(W * 0.3, H * 0.38);
    ctx.lineTo(-W * 0.2, H * 0.38);
    ctx.lineTo(-W * 0.3, H * 0.8);
    ctx.lineTo(W * 0.1, H * 0.65);
    ctx.closePath();
    ctx.fill();

    // Двигатель
    ctx.fillStyle = '#0d1e30';
    ctx.fillRect(-W * 0.9, -H * 0.22, W * 0.16, H * 0.44);
    ctx.fillStyle = `rgba(79,195,247,${0.55 + thrust * 0.45})`;
    ctx.beginPath(); ctx.ellipse(-W * 0.91, 0, sz * 0.055, sz * 0.14, 0, 0, Math.PI * 2); ctx.fill();
  }

  // Кабина (у всех типов)
  ctx.beginPath();
  ctx.ellipse(W * 0.38, 0, W * 0.16, H * 0.2, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(200,240,255,0.85)';
  ctx.fill();
  // Блик на кабине
  ctx.beginPath();
  ctx.ellipse(W * 0.4, -H * 0.05, W * 0.07, H * 0.08, -0.4, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.45)';
  ctx.fill();

  ctx.restore();

  // Скоростные линии при быстром полёте (рисуем в экранных координатах, ДО restore)
  if (speed > 38) {
    ctx.save();
    ctx.strokeStyle = 'rgba(180,220,255,0.13)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      const perp = heading + Math.PI / 2;
      const offset = (i - 2) * sz * 0.5;
      const bx = s.x + Math.cos(perp) * offset;
      const by = s.y + Math.sin(perp) * offset;
      ctx.beginPath();
      ctx.moveTo(bx - Math.cos(heading) * sz * 1.2, by - Math.sin(heading) * sz * 1.2);
      ctx.lineTo(bx - Math.cos(heading) * sz * 2.8, by - Math.sin(heading) * sz * 2.8);
      ctx.stroke();
    }
    ctx.restore();
  }

  // Лейбл
  if (scale > 0.48) {
    ctx.fillStyle = 'rgba(220,240,255,0.88)';
    ctx.font = `${Math.max(9, 9 * scale)}px 'Segoe UI', sans-serif`;
    ctx.fillText(ship.name, s.x + sz + 4, s.y - 4);
  }

  screenObjects.push({ x: s.x, y: s.y, r: Math.max(sz * 0.9, 14), data: ship });
}

function drawMeteorite(m) {
  const wx = Math.cos(m.angle) * m.orbitRadius;
  const wy = Math.sin(m.angle) * m.orbitRadius;
  const s = worldToScreen(wx, wy);
  const r = Math.max(2, m.radius * scale);

  // Glow слабый
  if (m.mineral > 0) {
    const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 3);
    glow.addColorStop(0, 'rgba(100,180,255,0.12)');
    glow.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(s.x, s.y, r * 3, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();
  }

  // Тело — неровный многоугольник (симулируем через эллипс с вращением)
  ctx.save();
  ctx.translate(s.x, s.y);
  ctx.rotate(m.angle * 0.7);
  ctx.beginPath();
  ctx.ellipse(0, 0, r * 1.2, r * 0.8, 0, 0, Math.PI * 2);
  ctx.fillStyle = m.mineral > 0 ? m.color : '#444';
  ctx.fill();
  // Кристаллический блик (минерал)
  if (m.mineral > 0 && scale > 0.35) {
    ctx.beginPath();
    ctx.ellipse(r * 0.3, -r * 0.2, r * 0.3, r * 0.15, 0.4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(100,200,255,0.4)';
    ctx.fill();
  }
  ctx.restore();

  if (scale > 0.5) {
    ctx.fillStyle = 'rgba(176,190,197,0.65)';
    ctx.font = `${Math.max(8, 9 * scale)}px 'Segoe UI', sans-serif`;
    ctx.fillText(m.name, s.x + r + 3, s.y + 3);
  }

  screenObjects.push({ x: s.x, y: s.y, r: Math.max(r * 1.2, 8), data: m });
}

function drawSystem(system) {
  screenObjects = [];
  drawStar(system.star);
  system.planets.forEach(planet => drawOrbit(planet.orbitRadius));
  system.planets.forEach(planet => drawPlanet(planet));
  system.planets.forEach(planet => drawStationForPlanet(planet));
  // Метеориты
  if (system.meteorites) {
    system.meteorites.forEach(m => drawMeteorite(m));
  }
  const earth = system.planets.find(planet => planet.name === 'Земля');
  if (system.ships?.interstellar?.length) {
    system.ships.interstellar.forEach(ship => drawInterstellarObject(ship));
  }
  if (system.ships?.juggernaut) {
    drawJuggernaut(system.ships.juggernaut, earth);
  }
  if (system.ships?.player) {
    drawPlayerShip(system.ships.player, earth);
  }
  // Дроны
  drawDrones();
}

function updateCameraFollow(system, dt) {
  if (!cameraFollowPlayer || isDragging || system !== currentSystem) return;
  const ship = system?.ships?.player;
  if (!ship) return;
  seedPlayerShipPosition(system);
  const followStrength = clamp(dt / 220, 0.03, 0.18);
  offsetX += (-ship.x - offsetX) * followStrength;
  offsetY += (-ship.y - offsetY) * followStrength;
}

function drawWarpOverlay(ts) {
  if (!warpState) return;
  const progress = Math.min(1, (ts - warpState.start) / warpState.duration);
  const fade = Math.sin(progress * Math.PI);

  const overlay = ctx.createLinearGradient(0, 0, W, 0);
  overlay.addColorStop(0, `rgba(5,10,30,${0.18 + fade * 0.2})`);
  overlay.addColorStop(0.5, `rgba(79,195,247,${0.08 + fade * 0.18})`);
  overlay.addColorStop(1, `rgba(255,107,107,${0.12 + fade * 0.24})`);
  ctx.fillStyle = overlay;
  ctx.fillRect(0, 0, W, H);

  const portalRadius = 50 + fade * 120;
  const portal = ctx.createRadialGradient(W * 0.52, H * 0.52, portalRadius * 0.15, W * 0.52, H * 0.52, portalRadius);
  portal.addColorStop(0, `rgba(255,255,255,${0.08 + fade * 0.18})`);
  portal.addColorStop(0.4, `rgba(79,195,247,${0.18 + fade * 0.26})`);
  portal.addColorStop(0.8, `rgba(130,110,255,${0.08 + fade * 0.14})`);
  portal.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(W * 0.52, H * 0.52, portalRadius, 0, Math.PI * 2);
  ctx.fillStyle = portal;
  ctx.fill();

  const shipX = -80 + (W + 160) * progress;
  const shipY = H * (0.28 + 0.12 * Math.sin(progress * Math.PI * 2));
  const shipSize = 16 + fade * 8;

  ctx.save();
  ctx.translate(shipX, shipY);
  ctx.rotate(0.18);

  const trail = ctx.createLinearGradient(-shipSize * 4, 0, shipSize, 0);
  trail.addColorStop(0, 'transparent');
  trail.addColorStop(1, 'rgba(79,195,247,0.65)');
  ctx.beginPath();
  ctx.moveTo(-shipSize * 4, 0);
  ctx.lineTo(shipSize * 0.8, -shipSize * 0.5);
  ctx.lineTo(shipSize * 0.8, shipSize * 0.5);
  ctx.closePath();
  ctx.fillStyle = trail;
  ctx.fill();

  const body = ctx.createLinearGradient(-shipSize, 0, shipSize, 0);
  body.addColorStop(0, '#dcefff');
  body.addColorStop(1, '#4fc3f7');
  ctx.beginPath();
  ctx.moveTo(shipSize, 0);
  ctx.lineTo(-shipSize * 0.6, -shipSize * 0.5);
  ctx.lineTo(-shipSize * 0.2, 0);
  ctx.lineTo(-shipSize * 0.6, shipSize * 0.5);
  ctx.closePath();
  ctx.fillStyle = body;
  ctx.fill();
  ctx.restore();
}

function updateWarp(ts) {
  if (!warpState) return;
  const progress = Math.min(1, (ts - warpState.start) / warpState.duration);
  if (progress >= 0.52 && !warpState.swapped) {
    currentSystem = warpState.to;
    currentSystemId = warpState.to.id;
    applyCamera(currentSystem);
    warpState.swapped = true;
    renderSystems();
    updateNavStatus('Прибытие: ' + currentSystem.name);
    updateFlightStatus();
  }
  if (progress >= 1) {
    warpState = null;
    updateNavStatus(getCurrentConstellation().name + ' / ' + currentSystem.name);
    updateFlightStatus();
  }
}

function getVisibleSystem(ts) {
  if (!warpState) return currentSystem;
  const progress = Math.min(1, (ts - warpState.start) / warpState.duration);
  return progress < 0.5 ? warpState.from : warpState.to;
}

function animLoop(ts) {
  const dt = Math.min((ts - lastTime) || 16, 50);
  lastTime = ts;
  updateWarp(ts);
  const visibleSystem = getVisibleSystem(ts);
  updateAngles(visibleSystem, dt * 0.5);
  updateCameraFollow(visibleSystem, dt);
  updateDrones(dt);
  runProductionTick();
  ctx.clearRect(0, 0, W, H);
  drawSystem(visibleSystem);
  drawWarpOverlay(ts);
  requestAnimationFrame(animLoop);
}
requestAnimationFrame(animLoop);

function hitTest(mouseX, mouseY) {
  for (let i = screenObjects.length - 1; i >= 0; i--) {
    const item = screenObjects[i];
    const dx = mouseX - item.x;
    const dy = mouseY - item.y;
    if (dx * dx + dy * dy < (item.r + 6) * (item.r + 6)) return item.data;
  }
  return null;
}

function openPanel(data) {
  const overlay = document.getElementById('info-overlay');
  const content = document.getElementById('panel-content');
  const typeColors = {
    planet: '#ffd54f', dwarf: '#80cbc4', star: '#ff9a62',
    interstellar: '#7ecfff', juggernaut: '#8de3ff',
    'player-ship': '#90caf9', meteorite: '#b0bec5'
  };
  const typeNames = {
    planet: 'Планета', dwarf: 'Карликовая планета', star: 'Звезда',
    interstellar: 'Межзвёздный объект', juggernaut: 'Инопланетный корабль',
    'player-ship': 'Игровой корабль', meteorite: 'Метеорит'
  };
  audioManager.playPanelOpen();

  const statsHTML = Object.entries(data.stats || {}).map(([key, value]) => `
    <div class="stat-row"><span class="stat-label">${key}</span><span class="stat-value">${value}</span></div>
  `).join('');

  const playerShip = currentSystem?.ships?.player;
  const canFly = !!playerShip && currentSystemId === 'sol-system' && canShipDockTo(data, currentSystem);

  // Метеорит — кнопка запуска дрона
  let meteoriteHTML = '';
  if (data.type === 'meteorite') {
    const hasDrones = gameState.cargo.drones > 0;
    const hasHangar = GALAXY.some(c => c.systems.some(sys =>
      sys.planets.some(p => p.colony?.stationBuilt && p.colony.modules.includes('hangar'))
    ));
    const alreadyMining = activeDrones.some(d => d.meteorite === data);
    const depleted = data.mineral <= 0;
    meteoriteHTML = `
      <div class="creature-section">
        <h3>Добыча Минерала</h3>
        <div class="colony-note" style="margin-bottom:10px;">
          ${!hasHangar ? '⚠ Постройте Ангар дронов на станции для отправки дронов.' :
            !hasDrones ? '⚠ Нет дронов в ангаре. Произведите их на Принтере (20 Деталей).' :
            alreadyMining ? '🚁 Дрон уже работает на этом метеорите.' :
            depleted ? '💀 Месторождение истощено.' :
            '🚁 Отправьте дрон для добычи Минерала.'}
        </div>
        <div class="panel-actions">
          <button class="panel-action-btn primary" id="launch-drone-btn"
            ${hasHangar && hasDrones && !alreadyMining && !depleted ? '' : 'disabled'}>
            ${alreadyMining ? 'Дрон в работе' : depleted ? 'Истощён' : 'Отправить дрон'}
          </button>
        </div>
      </div>`;
  }

  const colonyHTML = (data.type === 'planet' || data.type === 'dwarf') ? getColonyPanelHTML(data) : '';
  const actionHTML = `
    <div class="panel-actions">
      <button class="panel-action-btn primary" id="fly-to-object-btn" ${canFly ? '' : 'disabled'}>
        ${canFly ? 'Лететь сюда' : 'Маршрут недоступен'}
      </button>
    </div>`;

  content.innerHTML = `
    <h2>${data.name}</h2>
    <div class="subtitle" style="color:${typeColors[data.type] || 'var(--accent)'}">
      ${data.nameEn || ''} · ${typeNames[data.type] || 'Объект'}
    </div>
    <div class="info-layout">
      <div class="info-stats">${statsHTML}</div>
      <div class="info-desc">${data.desc || ''}</div>
    </div>
    ${actionHTML}
    ${colonyHTML}
    ${meteoriteHTML}
  `;

  activePanelObject = data;
  setFlightControlsActive(data.type === 'player-ship');

  // Fly button
  const flyButton = document.getElementById('fly-to-object-btn');
  if (flyButton && canFly) flyButton.addEventListener('click', () => flyPlayerShipTo(data));

  // Colony buttons
  const scanButton = document.getElementById('scan-planet-btn');
  if (scanButton && data.colony && !data.colony.scanned) scanButton.addEventListener('click', () => scanPlanet(data));
  const coreButton = document.getElementById('build-core-btn');
  if (coreButton && data.colony && !data.colony.stationBuilt) coreButton.addEventListener('click', () => buildStationCore(data));

  // Station module tree buttons
  content.querySelectorAll('.smodule-btn[data-build]').forEach(btn => {
    btn.addEventListener('click', () => buildModule(data, btn.dataset.build));
  });

  // Drone button
  const droneBtn = document.getElementById('launch-drone-btn');
  if (droneBtn && data.type === 'meteorite') droneBtn.addEventListener('click', () => launchDrone(data));

  overlay.classList.add('open');
}

function closePanel() {
  activePanelObject = null;
  setFlightControlsActive(false);
  document.getElementById('info-overlay').classList.remove('open');
}
document.getElementById('info-overlay').addEventListener('click', function(e) {
  if (e.target === this) closePanel();
});

canvas.addEventListener('mousemove', e => {
  if (isDragging) {
    offsetX = dragOffset.x + (e.clientX - dragStart.x) / scale;
    offsetY = dragOffset.y + (e.clientY - dragStart.y) / scale;
    canvas.style.cursor = 'grabbing';
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const hit = hitTest(e.clientX - rect.left, e.clientY - rect.top);
  if (!hit) {
    tooltip.classList.remove('visible');
    canvas.style.cursor = 'crosshair';
    return;
  }

  const typeLabel = { planet: 'Планета', dwarf: 'Карликовая планета', star: 'Звезда', interstellar: 'Межзвёздный объект', juggernaut: 'Инопланетный корабль', 'player-ship': 'Игровой корабль' }[hit.type] || 'Объект';
  ttTitle.textContent = hit.name;
  ttBody.innerHTML = `<span style="color:var(--accent);font-size:10px;letter-spacing:1px">${typeLabel}</span><br>` +
    Object.entries(hit.stats || {}).slice(0, 3).map(([k, v]) => `${k}: <b style="color:var(--text)">${v}</b>`).join('<br>');
  tooltip.style.left = (e.clientX + 16) + 'px';
  tooltip.style.top = (e.clientY - 10) + 'px';
  tooltip.classList.add('visible');
  canvas.style.cursor = 'pointer';
});

canvas.addEventListener('mouseleave', () => {
  tooltip.classList.remove('visible');
  isDragging = false;
});

canvas.addEventListener('click', e => {
  if (warpState) return;
  const rect = canvas.getBoundingClientRect();
  const hit = hitTest(e.clientX - rect.left, e.clientY - rect.top);
  if (hit) openPanel(hit);
});

canvas.addEventListener('wheel', e => {
  e.preventDefault();
  const factor = e.deltaY < 0 ? 1.08 : 0.92;
  scale = Math.max(0.15, Math.min(3, scale * factor));
}, { passive: false });

canvas.addEventListener('mousedown', e => {
  if (warpState) return;
  isDragging = true;
  dragStart = { x: e.clientX, y: e.clientY };
  dragOffset = { x: offsetX, y: offsetY };
});

canvas.addEventListener('mouseup', () => {
  isDragging = false;
  canvas.style.cursor = 'crosshair';
});

function updateNavStatus(text) {
  navPill.textContent = text;
}

function createConstellationPreview(points) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 65 45');
  svg.setAttribute('class', 'constellation-svg');

  for (let i = 0; i < points.length - 1; i++) {
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', points[i][0]);
    line.setAttribute('y1', points[i][1]);
    line.setAttribute('x2', points[i + 1][0]);
    line.setAttribute('y2', points[i + 1][1]);
    line.setAttribute('stroke', 'rgba(150,200,255,0.4)');
    line.setAttribute('stroke-width', '0.8');
    svg.appendChild(line);
  }

  points.forEach((point, index) => {
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', point[0]);
    circle.setAttribute('cy', point[1]);
    circle.setAttribute('r', index === 0 ? 2.5 : 1.6);
    circle.setAttribute('fill', STAR_COLORS[index % STAR_COLORS.length]);
    svg.appendChild(circle);
  });

  return svg;
}

function renderConstellations() {
  constList.innerHTML = '';
  GALAXY.forEach(constellation => {
    const item = document.createElement('div');
    item.className = 'constellation-item' + (constellation.id === currentConstellationId ? ' active' : '');
    item.appendChild(createConstellationPreview(constellation.points));

    const label = document.createElement('div');
    label.className = 'constellation-name';
    label.textContent = constellation.name;
    item.appendChild(label);

    item.addEventListener('click', () => {
      audioManager.playConstellationClick();
      currentConstellationId = constellation.id;
      setFlightControlsActive(false);
      renderConstellations();
      renderSystems();
      updateNavStatus('Выбрано: ' + constellation.name);
    });

    constList.appendChild(item);
  });
}

function requestSystemChange(systemId) {
  if (warpState || systemId === currentSystemId) return;
  const target = getSystemById(systemId);
  if (!target) return;
  const warpContext = getWarpAccessContext();
  if (!warpContext.canWarp) {
    if (!warpContext.hasPortal) {
      showNotification('Нужна станция с Портальным генератором для варп-перехода.', 'warn');
    } else {
      showNotification(`Недостаточно топлива для прыжка. Нужно: ${warpContext.fuelCost}.`, 'warn');
    }
    return;
  }
  gameState.resources.fuel = Math.max(0, (gameState.resources.fuel || 0) - warpContext.fuelCost);
  audioManager.playWarp();
  setFlightControlsActive(false);
  closePanel();

  warpState = {
    from: currentSystem,
    to: target,
    start: performance.now(),
    duration: 2600,
    swapped: false
  };

  updateNavStatus('Открытие портала: ' + currentSystem.name + ' -> ' + target.name);
  updateFlightStatus();
  saveGameState();
}

function renderSystems() {
  const constellation = getCurrentConstellation();
  const warpContext = getWarpAccessContext();
  systemList.innerHTML = '';
  systemEmpty.style.display = constellation.systems.length ? 'none' : 'block';

  constellation.systems.forEach(system => {
    const canWarpToSystem = system.id === currentSystemId || warpContext.canWarp;
    const warpMeta = system.id === currentSystemId
      ? 'Текущая система'
      : !warpContext.hasPortal
        ? 'Нужен Портальный генератор'
        : !warpContext.hasFuel
          ? `Нужно топлива: ${warpContext.fuelCost}`
          : `Прыжок: ${warpContext.fuelCost} топлива`;
    const card = document.createElement('div');
    card.className = 'system-card' + (system.id === currentSystemId ? ' active' : '');
    card.innerHTML = `
      <h3>${system.name}</h3>
      <div class="system-meta">${system.nameEn} · звёздная система</div>
      <p>${system.summary}</p>
      <div class="system-badge">${system.planets.length} объектов на орбитах · ${warpMeta}</div>
    `;
    card.style.opacity = canWarpToSystem ? '1' : '0.7';
    card.addEventListener('click', () => requestSystemChange(system.id));
    systemList.appendChild(card);
  });
}

launchButton.addEventListener('click', () => {
  launchPlayerShip();
});
flightStopBtn.addEventListener('click', () => {
  stopPlayerShip();
});
flightUndockBtn.addEventListener('click', () => {
  undockPlayerShip();
});
cameraFollowBtn.addEventListener('click', () => {
  toggleCameraFollow();
});

renderShipClassOptions();
renderPilotOptions();
updateStartSummary();
renderFlightModes();
updateFlightButtons();
renderConstellations();
renderSystems();
renderColonyPanel();
updateNavStatus(getCurrentConstellation().name + ' / ' + currentSystem.name);
updateFlightStatus();

// Метеориты во всех системах
injectMeteorites();

// Слушатель поля имени командира
const commanderNameInput = document.getElementById('commander-name-input');
if (commanderNameInput) {
  commanderNameInput.addEventListener('input', updateStartSummary);
}

// Кнопка трюма
const cargoBtn = document.getElementById('cargo-btn');
if (cargoBtn) {
  cargoBtn.addEventListener('click', openCargo);
}
document.getElementById('cargo-close-btn')?.addEventListener('click', closeCargo);
document.getElementById('cargo-overlay')?.addEventListener('click', function(e) {
  if (e.target === this) closeCargo();
});
document.querySelectorAll('.cargo-tab').forEach(tab => {
  tab.addEventListener('click', () => renderCargoTab(tab.dataset.tab));
});

// Показываем кнопку трюма когда корабль запущен
function showCargoBtn() {
  document.getElementById('cargo-btn')?.classList.add('visible');
}

// Инициализация стартового экрана (продолжить / новая игра)
initStartScreen();

if (SOLAR_SYSTEM_ENTRY.ships.player) {
  const profile = loadProfile();
  if (profile && profile.commanderName) {
    showProfileBadge(profile.commanderName);
    showCargoBtn();
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closePanel();
    closeCargo();
  }
});

// Патч launchPlayerShip — показывать кнопку трюма после запуска
const _origLaunch = launchPlayerShip;
// (уже вызывает showProfileBadge — добавим showCargoBtn через событие)
document.addEventListener('ship-launched', showCargoBtn);

// Вызов showCargoBtn при запуске корабля через кнопку
document.getElementById('launch-button')?.addEventListener('click', () => {
  setTimeout(showCargoBtn, 400);
}, true);
document.getElementById('continue-button')?.addEventListener('click', () => {
  setTimeout(showCargoBtn, 100);
}, true);
