// ==================== ОПИСАНИЯ МИРОВ (только русский язык) ====================
const realmData = {
    0: {
        name: "Мир Богов (Дэвы)",
        shortDesc: "Состояние небесного блаженства, долгой жизни и наслаждений. Боги обитают в величественных дворцах на вершине горы Сумеру. Они не знают страданий, но их счастье не вечно — когда заканчивается благая карма, они сталкиваются со страхом смерти и падения в низшие миры.",
        fullDesc: "Мир богов — это состояние гордости и самодовольства. Здесь живут существа, которые наслаждаются плодами своей благой кармы, но их разум омрачён гордостью и отсутствием мудрости. Даже в этом возвышенном состоянии они не видят истинной природы реальности. Небеса Траястримша, мир тридцати трёх богов, находится на вершине горы Сумеру, здесь правит Шакра — владыка богов.",
        karma: "гордость, привязанность к наслаждениям, отсутствие стремления к освобождению",
        cssClass: "realm-gods"
    },
    1: {
        name: "Мир Асуров (Полубогов)",
        shortDesc: "Существа, исполненные зависти, ревности и постоянной борьбы. Асуры вечно конфликтуют с богами, пытаясь отвоевать утраченные земли. Их отличает воинственность, гордость и хвастовство.",
        fullDesc: "Мир асуров — это состояние сознания, отмеченное завистью к тем, кто достиг большего. Асуры обладают большой силой и властью, но их ум постоянно отравлен ревностью. Они стремятся быть выше других, не терпят критики и всегда ищут повод для конфликта. Даже если асуры женятся на богах, это не приносит им покоя.",
        karma: "зависть, ревность, агрессия, жажда власти",
        cssClass: "realm-asuras"
    },
    2: {
        name: "Мир Людей",
        shortDesc: "Уникальное состояние, в котором страдание и счастье уравновешены. Только из мира людей можно достичь просветления, поскольку здесь есть и страдания, побуждающие к практике, и достаточно свободы для духовного развития.",
        fullDesc: "Мир людей считается наиболее благоприятным для достижения освобождения. В отличие от богов, люди знают страдания; в отличие от животных, способны к рефлексии; в отличие от асуров, не ослеплены завистью. Человеческое рождение — великая удача, ведь именно здесь Будда Шакьямуни обрёл просветление.",
        karma: "страсть, сомнение, желания, но также возможность для практики",
        cssClass: "realm-humans"
    },
    3: {
        name: "Мир Животных",
        shortDesc: "Состояние глубокого неведения, инстинктов и подчинения. Животные постоянно борются за выживание, страдают от голода, холода и насилия. Их ум сосредоточен на сиюминутных потребностях.",
        fullDesc: "Мир животных — это воплощение невежества и слепого следования инстинктам. В этой сфере сознания царит закон джунглей: сильный пожирает слабого. Животные не способны к духовному развитию, они не помнят прошлого и не думают о будущем. Это не только буквальные животные, но и состояния сознания, когда человек действует по инстинкту, без размышления.",
        karma: "неведение, отсутствие моральных принципов, слепое следование инстинктам",
        cssClass: "realm-animals"
    },
    4: {
        name: "Мир Голодных Духов (Преты)",
        shortDesc: "Существа с огромными пустыми животами и тонкими, как игольное ушко, горлами. Они вечно голодны и жаждут, но не могут насытиться. Это состояние ненасытной жадности и зависимости.",
        fullDesc: "Преты — голодные духи, которые символизируют неутолимую жажду обладания. Их утроба огромна, как гора, но горло так тонко, что они не могут проглотить пищу. Любая еда превращается в огонь и пепел. В буддийской психологии это состояние одержимости желаниями, зависимостей и навязчивых идей — алкоголизм, наркомания, патологическая жадность.",
        karma: "жадность, алчность, зависимость, неспособность к щедрости",
        cssClass: "realm-pretas"
    },
    5: {
        name: "Миры Ада (Нараки)",
        shortDesc: "Восемь горячих и восемь холодных адов, где существа испытывают невообразимые страдания. Самый глубокий — Авичи, ад непрерывных мучений. Это состояние неконтролируемой агрессии и ненависти.",
        fullDesc: "Ады (нараки) — это состояния сознания, наполненные яростью, отчаянием и агрессией. Восемь горячих адов: Санджива (оживающий), Каласутра (чёрная нить), Сангхата (сокрушающий), Раурава (кричащий), Махараурава (великий крик), Тапана (жаркий), Пратапана (великий жар) и Авичи — самый страшный. Также существуют холодные ады, где тела покрываются волдырями и раскалываются от мороза.",
        karma: "гнев, ненависть, насилие, тяжкие преступления",
        cssClass: "realm-narakas"
    }
};

// ==================== ГЕНЕРАЦИЯ ГРАФА (80 вершин, степень 6) ====================
const VERTEX_COUNT = 80;
const vertices = [];

for (let i = 0; i < VERTEX_COUNT; i++) {
    let realmId;
    if (i < 14) realmId = 0;
    else if (i < 28) realmId = 1;
    else if (i < 42) realmId = 2;
    else if (i < 54) realmId = 3;
    else if (i < 66) realmId = 4;
    else realmId = 5;
    
    const realm = realmData[realmId];
    const subLevel = (i % 14) + 1;
    
    let specificName = realm.name;
    if (realmId === 0) {
        const levels = ["Небеса Тушита", "Траястримша", "Нирманарати", "Дворец Шакры"];
        specificName = `${levels[subLevel % levels.length]} · ${realm.name}`;
    } else if (realmId === 1) {
        const aspects = ["Древо желаний", "Подножие Сумеру", "Поле битвы", "Дворец ревности"];
        specificName = `${aspects[subLevel % aspects.length]} · ${realm.name}`;
    } else if (realmId === 2) {
        const states = ["Ищущий истину", "Семьянин", "Отшельник", "Правитель", "Ремесленник"];
        specificName = `${states[subLevel % states.length]} · человеческое бытие`;
    } else if (realmId === 3) {
        const animals = ["Стадный инстинкт", "Хищник", "Жертва", "Домашнее рабство"];
        specificName = `${animals[subLevel % animals.length]} · мир животных`;
    } else if (realmId === 4) {
        const pretaStates = ["Огненное горло", "Вечный голод", "Жажда наслаждений", "Скряжничество"];
        specificName = `${pretaStates[subLevel % pretaStates.length]} · голодный дух`;
    } else {
        const hells = ["Санджива", "Каласутра", "Сангхата", "Раурава", "Махараурава", "Тапана", "Пратапана", "Авичи"];
        specificName = `${hells[subLevel % hells.length]} · адские муки`;
    }
    
    const isFinal = (i === 41 || i === 37 || i === 79 || i === 68);
    
    vertices.push({
        id: i,
        name: specificName,
        realmId: realmId,
        realmName: realm.name,
        shortDesc: realm.shortDesc,
        fullDesc: realm.fullDesc,
        karma: realm.karma,
        isFinal: isFinal,
        neighbors: new Array(6).fill(null)
    });
}

// Заполнение связей (каждая вершина имеет ровно 6 соседей)
for (let i = 0; i < vertices.length; i++) {
    let neighbors = [];
    for (let dir = 0; dir < 6; dir++) {
        let target;
        if (dir === 0) target = (i + 1) % vertices.length;
        else if (dir === 1) target = (i - 1 + vertices.length) % vertices.length;
        else if (dir === 2) target = (i + 7) % vertices.length;
        else if (dir === 3) target = (i + 13) % vertices.length;
        else if (dir === 4) target = (i + 23) % vertices.length;
        else target = (i * 13 + 5) % vertices.length;
        neighbors.push(target);
    }
    let unique = [...new Set(neighbors)];
    while (unique.length < 6) {
        unique.push((i + unique.length * 19) % vertices.length);
    }
    vertices[i].neighbors = unique.slice(0, 6);
}

// ==================== ИГРОВОЕ СОСТОЯНИЕ ====================
let currentVertexId = 30;
let gameActive = true;

// DOM элементы
const stateNameEl = document.getElementById("stateName");
const stateDescEl = document.getElementById("stateDesc");
const pathContainer = document.getElementById("pathButtonsContainer");
const vertexIdLabel = document.getElementById("vertexIdLabel");
const nirvanaFlagSpan = document.getElementById("nirvanaFlag");
const cube3d = document.getElementById("rotatingCube");
const cubeRandomBtn = document.getElementById("cubeRandomBtn");

// ==================== ФУНКЦИЯ ДИНАМИЧЕСКОЙ СМЕНЫ СТИЛЯ ====================
// Эта функция меняет класс на body в зависимости от текущего мира
// Все стили для каждого класса уже прописаны в style.css
function applyRealmStyle(realmId) {
    // Удаляем все существующие классы стилей миров
    const body = document.body;
    const realmClasses = ["realm-gods", "realm-asuras", "realm-humans", "realm-animals", "realm-pretas", "realm-narakas"];
    realmClasses.forEach(className => {
        body.classList.remove(className);
    });
    
    // Добавляем класс для текущего мира
    const realm = realmData[realmId];
    if (realm && realm.cssClass) {
        body.classList.add(realm.cssClass);
    }
}

// анимация поворота куба к нужному миру
function animateCubeToRealm(realmId) {
    let rotateX = 0, rotateY = 0;
    switch(realmId) {
        case 0: rotateY = 0; rotateX = 0; break;
        case 1: rotateY = 180; rotateX = 0; break;
        case 2: rotateY = 90; rotateX = 0; break;
        case 3: rotateY = -90; rotateX = 0; break;
        case 4: rotateX = -90; rotateY = 0; break;
        case 5: rotateX = 90; rotateY = 0; break;
        default: rotateY = 15; rotateX = 10;
    }
    cube3d.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(0px)`;
    cube3d.style.transition = "transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.2)";
    setTimeout(() => { cube3d.style.transition = ""; }, 700);
}

// случайный переход (марковский шаг)
function randomTransition() {
    if (!gameActive) return;
    const vertex = vertices[currentVertexId];
    if (!vertex || vertex.neighbors.length === 0) return;
    const randomIndex = Math.floor(Math.random() * vertex.neighbors.length);
    const newId = vertex.neighbors[randomIndex];
    currentVertexId = newId;
    const realmIdx = vertices[currentVertexId].realmId;
    
    // применяем стиль нового мира
    applyRealmStyle(realmIdx);
    animateCubeToRealm(realmIdx);
    updateUI();
}

// обновление интерфейса
function updateUI() {
    if (!gameActive) return;
    const vertex = vertices[currentVertexId];
    if (!vertex) return;
    
    const realm = realmData[vertex.realmId];
    
    stateNameEl.innerHTML = vertex.name;
    
    let description = `<strong>${realm.name}</strong><br><br>`;
    description += `${realm.shortDesc}<br><br>`;
    description += `<em>Кармическая причина:</em> ${realm.karma}<br><br>`;
    description += `<strong>Состояние сознания:</strong> ${vertex.name}<br>`;
    if (vertex.isFinal) {
        description += `<br><span style="color:#FF00FF; font-weight:bold;">✨ ЭТО СОСТОЯНИЕ — ВЫХОД ИЗ САНСАРЫ! Вы достигли просветления и освободились из круговорота перерождений. ✨</span>`;
    }
    
    stateDescEl.innerHTML = description;
    vertexIdLabel.innerText = `состояние ${currentVertexId} · ${vertex.realmName}`;
    
    if (vertex.isFinal) {
        nirvanaFlagSpan.innerHTML = '<span class="nirvana-badge">☸️ ПРОСВЕТЛЕНИЕ ☸️</span>';
        gameActive = false;
        pathContainer.innerHTML = '<div style="text-align:center;width:100%;"><button id="resetGameBtn" class="reset-btn">🔄 НОВОЕ ПУТЕШЕСТВИЕ</button></div>';
        const resetBtn = document.getElementById("resetGameBtn");
        if (resetBtn) resetBtn.addEventListener("click", resetGame);
        return;
    }
    
    nirvanaFlagSpan.innerHTML = '';
    
    // кнопки переходов
    pathContainer.innerHTML = "";
    vertex.neighbors.forEach((neighborId, idx) => {
        const neighbor = vertices[neighborId];
        if (!neighbor) return;
        const btn = document.createElement("button");
        btn.className = "path-btn";
        let shortName = neighbor.name.length > 35 ? neighbor.name.substring(0, 32) + "..." : neighbor.name;
        btn.innerHTML = `🌀 ${idx+1} · ${shortName}`;
        btn.addEventListener("click", () => {
            if (!gameActive) return;
            currentVertexId = neighborId;
            const newRealm = vertices[currentVertexId].realmId;
            applyRealmStyle(newRealm);
            animateCubeToRealm(newRealm);
            updateUI();
        });
        pathContainer.appendChild(btn);
    });
}

function resetGame() {
    currentVertexId = 30;
    gameActive = true;
    applyRealmStyle(2); // мир людей
    updateUI();
    animateCubeToRealm(2);
}

// кубик как кнопка случайного перехода
cubeRandomBtn.addEventListener("click", randomTransition);

// запуск
applyRealmStyle(2); // начинаем в мире людей
animateCubeToRealm(2);
updateUI();

// адаптация для мобильных (останавливаем анимацию при наведении/касании)
cube3d.addEventListener("mouseenter", () => { cube3d.style.animation = "none"; });
cube3d.addEventListener("mouseleave", () => { cube3d.style.animation = "floatCube 8s infinite ease-in-out"; });
// для touch-устройств
cube3d.addEventListener("touchstart", () => { cube3d.style.animation = "none"; });
cube3d.addEventListener("touchend", () => { cube3d.style.animation = "floatCube 8s infinite ease-in-out"; });