const express = require('express');
const app = express();
const expbs = require('express-handlebars');

app.engine('handlebars', expbs( { defaultLayout : 'main'}));
app.set('view engine', 'handlebars');


app.get('/noumenon', (req, res) => {
     res.render('poems', { 
     title: "Вещь в себе",
     poems : [
     {lines : ["пенальти в тишине"], epigraph: "чужое"},         
     {lines : ["индийка в Индигирке"]},
     {lines : ["Гарвард в Кембридже"]},
     {lines : ["кенгуру в Шенбрунне"]},
     {lines : ["одиночество в общежитии"]},
     {lines : ["саверма в Самаре"]}
     ]});
});

app.get('/words', (req, res) => {
     res.render('poems', { 
     title: "Неологизмы",
     poems : [
     {lines : ["рукировка"]},
     {lines : ["нувостройка"]},
     {lines : ["левгей"]},
     {lines : ["изморкофе"]},
     {lines : ["дистрибукт"]},
     {lines : ["саградостроительство"]},    
     {lines : ["цвишенцугцванг"]},    
    ]});
});

app.get('/doubles', (req, res) => {
     res.render('poems', { 
     title: "Двойники",
     poems : [
     {lines : ["чистка зуб", "чистка зуб"]},
     {lines : ["дистрофика", "дистрофика"]}
     ]});
});

app.get('/transform', (req, res) => {
     res.render('poems', { 
     title: "Устройства по превращению",
     poems : [
     {lines : ["Гуманитарий — устройство по превращению кофе в выпитый кофе."]},         
     {lines : ["Поэт — устройство по превращению."]}
     ]});
});

app.get('/parentheses', (req, res) => {
     res.render('poems', { 
     title: "Скобки",
     poems : [
     {lines : ["(а сам думает только о незакрытой скобке"]},          
     {lines : ["[палиндром]", "())("]}      
     ]});
});

app.get('/numbers', (req, res) => {
     res.render('poems', { 
     title: "Цифры",
     poems : [
     {lines : ["[Холин]", "<small>399725722782532944388077717044552088857010024925364224</small>"]}        
     ]});
});

app.get('/gariks', (req, res) => {
     res.render('poems', { 
     title: "Гарики",
     poems : [
     {lines : ["кто шахматистом станет первым", "вопросом стало знаменитым", "норвежц индусу портит нервы", "волнуя кровь семитам"]},         
     {lines : ["признаем что среди евреев", "по ряду косвенных призна'ков", "гораздо больше сельдереев", "чем пастернаков"]}        
     ]});
});


app.get('/8', (req, res) => {
     res.render('poems', { 
     title: "Восьмое чудо света",
     poems : [
     {lines : ["восьмое чудо света", "девятая планета"]}
     ]});
});

app.get('/side', (req, res) => {
     res.render('poems', { 
     title: "Взгляд сбоку",
     poems : [
     {lines : ["здесь в  Козловском переулке", "он не знал куда идти", "<br>", "постречался я, прохожий,", "подсказал куда идти", "<br>", "проходя по переулку", "снова вспомнил он меня"]},
     {lines : ["я оглянулась посмотреть не оглянулся ли он", "чтоб посмотреть не оглянулась ли я"]}
       ]});
});

app.get('/haiku', (req, res) => {
     res.render('poems', { 
     title: "Свободные хокку",
     poems : [
     {lines : ["Шторку для ванной", "в виде ковра", "повешу на стену"]},
     {lines : ["Стихи на снегу", "строчки", "бяквы и буквы"]}
       ]});
});

app.get('/575', (req, res) => {
     res.render('poems', { 
     title: "Строгие хокку",
     poems : [
     {lines : ["Я как улитка", "занимаюсь хайкингом", "на склоне Фудзи"]},         
     {lines : ["ветка сакуры", "Всеволод Овчинников", "читать бесплатно"]},
     {lines : ["одностишие", "маринованный имбирь", "одностишие"]}
     ]});
});

app.get('/ostrich', (req, res) => {
     res.render('poems', { 
     title: "Страусы",
     poems : [

     {lines : ["я про страуса про нанду", "написал бы вам баланду"]},         
     {lines : ["я про страуса про моа", "написал бы два-три слова"]},         
     {lines : ["я про страуса про киви", "написал б стеллаж в архиве"]},         
     {lines : ["я про страуса эму", "написал поэму"]},         
     ]});
});

app.get('/landscapes', (req, res) => {
     res.render('poems', { 
     title: "Пейзажная лирика",
     poems : [

     {lines : ["сентябрь", "георгины цветут", "сельские ритмы"]},         
     {lines : ["весна", "большая вода"]},
     {lines : ["зима", "пятна света на крышах хат"]},
     {lines : ["осенний день", "Сокольники"]}         
     ]});
});

app.get('/banalities', (req, res) => {
     res.render('poems', { 
     title: "Банальные рассуждения",
     poems : [
         
          {lines : ["почему некрасивых не любят?", "это может красивых не любят,", "то есть любят, но как же проверить,", "что не только за то, что красивы? ", "а когда некрасивых полюбят,", "тут уж ясно, что точно за дело,",  "а красивые лишь красотою", "и спасаются"]},
         
          {lines : ["я конечно хороший поэт", "это я сознаю без иллюзий", "да что сделать —  какой уже есть", "правда мог бы я быть и похуже", "правда если б похуже я был", "написал бы я точно не меньше",  "и пришлось бы всё это читать", "так что лучше скажите спасибо"]}
     ]});
});

app.get('/2', (req, res) => {
     res.render('poems', { 
     title: "В два слова",
     poems : [    
     {lines : ["блажество / беспокойство"]},
     {lines : ["рассвет / Переделкино"]}
     ]});
});

app.get('/portraits', (req, res) => {
     res.render('poems', { 
     title: "Портреты",
     poems : [
         
     {lines : ["[Гандлевский]", "пострел", "постарел"]},        
     {lines : ["[Леонид Шваб]", "немногословен, сдержан"]},    
     {lines : ["[Фаина Гримберг]", "ЕВРЕЕВ НЕТ", "(но есть отдельные еврейки)"]},    
     {lines : ["[Владимир Седов]", "не гуглится но хороший"]}
     ]});
});

app.get('/samara', (req, res) => {
     res.render('poems', { 
     title: "Самара",
     poems : [
     {lines : ["кто в Самаре не бывал,", "тот грязи не видал", "горькая правда"]},
     {lines : ["Самара со всех сторон", "особенно под ногами"]},
     {lines : ["и даже в сквере имени Урицкого", "никто не знает имени Урицкого"]},
     {lines : ["даже Москва сдалась Наполеону", "а Самара никому не сдалась"]},
     {lines : ["снег уберут здесь к Мундиалю"]},
     {lines : ["Самара — культурная столица", "Самарской области."]},
     {lines : ["из оставшихся в Самаре", "можно составить город"]},
     {lines : ["Над Самарой небо синее,", "меж берёз дожди косые.", "Что ж, похоже на Канаду,", "только всё-таки на Россию больше похоже."]}
     ]});
});


app.get('/35', (req, res) => {
     res.render('poems', { 
     title: "Троепятки",
     poems : [
     {lines : ["морошка", "разоблачена"]},
     {lines : ["я гольдшмидт", "своего счастья"]},
     {lines : ["это я", "Эрик Булатов"]},
         
     {lines : ["бабочки", "осенних листьев"]}
     ]});
});

app.get('/mindlessness', (req, res) => {
     res.render('poems', { 
     title: "Задумки",
     poems : [
     {lines : ["чёрный дебют белыми фигурами"]},
     {lines : ["моя контрольная с ФИО соседа по парте"]},
     {lines : ["зубная паста со вкусом крема для бритья"]}
     ]});
});

app.get('/train', (req, res) => {
     res.render('poems', { 
     title: "Поезда",
     poems : [

     {lines : ["Зурбаган", "Лис"]},         
     {lines : ["Харьков", "Лисичанск"]},
     {lines : ["Магадан", "Юрмала"]},
     {lines : ["Кишинёв", "Сент-Луис"]}         
     ]});
});

app.get('/trip', (req, res) => {
     res.render('poems', { 
     title: "Поездки",
     poems : [
         
     {lines : ["ехать в Воронеж со своей тетрадью"]},
     {lines : ["ехать в Москву со своей нерезиной"]},
     {lines : ["ехать в Самару со своим бункером Сталина"]}
         
     ]});
});

app.get('/plagiarism', (req, res) => {
     res.render('poems', { 
     title: "Плагиат",
     poems : [
     {lines : ["атом", "поэзии"], epigraph : "танкетка"},
     {lines : ["как хорошо что я другой", "а не какой-нибудь такой"], epigraph : "Герман Лукомников"},
     {lines : ["ври", "в рифму"], epigraph : "Герман Лукомников"},
     {lines : ["А", "К", "Р", "О", "С", "Т", "И", "X"], epigraph : "Александр Кондратов "}
     ]});
});


app.get('/equations', (req, res) => {
     res.render('poems', { 
     title: "Уравнения",
     poems : [
     {lines : ["живу * вижу = булатов"]}
     ]});
});

app.get('/repeat', (req, res) => {
     res.render('poems', { 
     title: "Повторюшки",
     poems : [
     {lines : ["без бумажки", "ты букашка", "без бумажки"]},
     {lines : ["сделать из говна", "конфетку из говна"]}
     ]});
});

app.get('/12', (req, res) => {
     res.render('poems', { 
     title: "Слово в две строки",
     poems : [
     {lines : ["транс-", "понанс"]},
     {lines : ["ан-", "жамбеман"]},
     {lines : ["обер-", "хуёбер"]}
     ]});
});


app.get('/rotki', (req, res) => {
     res.render('poems', { 
     title: "Ротки",
     poems : [
     {lines : ["зелёный", "серый", "алый"]},
     {lines : ["коричневый", "розовый", "нежно-зелёный", "стальной"]}
     ]});
});



app.get('/piramids', (req, res) => {
     res.render('poems', { 
     title: "Пирамидки",
     poems : [
     {lines : ["ли", "лоси", "лососи"]},
     ]});
});

app.get('/bananals', (req, res) => {
     res.render('poems', { 
     title: "Банальности",
     poems : [
     {lines : ["<font color='red'>футбол", "гол</font>"], epigraph: "Герман Лукомников"},
     {lines : ["футбол", "фол"]},
     {lines : ["гит", "коммит"]},
     {lines : ["контест", "тест"]},
     {lines : ["гугл", "дудл"]}    
     ]});
});

app.get('/squeeze', (req, res) => {
     res.render('poems', { 
     title: "Выжимки",
     poems : [
     {lines : ["<font color='red'>Иван Ахметьев</font>"]},
     {lines : ["нужно ли больше"]},
     {lines : ["что еще сказать  не знаю"]},
     {lines : ["ручка не пишет"]},
     {lines : ["конечно", "что я за поэт", "моих стихов"]},
     {lines : ["почему это стихи", "самому неясно"]},
     {lines : ["только не писали", "главное"]},
     {lines : ["нужно ли больше"]},
     {lines : ["         я не уверен", "как поэт"]},
     {lines : ["наслаждение для уш"]},
     {lines : ["мои стихи рассчитаны"]},
     {lines : ["я как Микеланджело"]} 
     ]});
});

app.get('/auto_26', (req, res) => {
     res.render('poems', { 
     title: "Автотанкетки",
     poems : [
     {lines : ["бляди", "сухиничи"]},
     {lines : ["рифма", "к слову себя"]},
     {lines : ["смотреть", "фильм про тюрьма"]},
     {lines : ["спеши", "любить ноты"]},
     {lines : ["радости", "рыбалки"]},
     
     ]});
});


app.get('/zh-p', (req, res) => {
     res.render('poems', { 
     title: "Журнал Прыщ",
     poems : [
     {lines : ["дистрофика", "дистрофика"]},
     {lines : ["только голову намылил", "глядь звонок звенит", "- алло, это телевиденье, да?"]},
     {lines : ["Я хочу получить сотню лайков", "ох вы, лайки мои, балалайки,", "ну, не сто, не полсотни,", "я согласен на десять, пятнадцать,", "на пять лайков."]},
     {lines : ["я конечно хороший поэт", "это я сознаю без иллюзий", "да что сделать —  какой уже есть", "правда мог бы я быть и похуже", "правда если б похуже я был", "написал бы я точно не меньше",  "и пришлось бы всё это читать", "так что лучше скажите спасибо"]},
     {lines : ["когда б мы знали, из какого сорта,", "а то ведь он бывает разный, сорт-то"]},
     {lines : ["Чу!", "Я молчу"]},
     {lines : ["ан-", "жамбеман"]},
     {lines : ["с т", "т и", "а м", "л г", "а а", "к л", "т а", "и т", "т с"]},
     {lines : ["чашка чая", "кошка кофе", "<br>", "и какао"]},
     {lines : ["– Я здесь, Инезилья, я здесь под окном.", "<br>", "– Пошел на хуй, Антонио!"]},
     {lines : ["ЖИВУ * ВИЖУ = БУЛАТОВ", "<br>", "(5419 * 1459 = 7906321)!"]}, 
    {lines : ["стихи все делятся на не стихи", "и на стихи в привычном смысле", "все не стихи не то чтобы сухи", "но непонятны в высшем смысле", "<br>", "а все стихи не то чтобы стихи", "а просто чувства выраженье", "что и не скажешь точно, что стихи", "но знаешь точно: рифма есть, и ладно"]}, 
     {lines : ["399725722782532944388077717044552088857010024925364224", "(перед вами Холин)"]}, 
     {lines : ["перечитайте Пукшина"]}, 
     {lines : ["Граждане, не забывайтесь!", "штраф 500 рублей"]}, 
     {lines : ["варенье из ирги", "<br>", "изреки", "изрыги", "<br>", "что такое ирга", "игра", "<br>", "не такого понятья", "ирга", "<br>", "но есть", "<br>", "варенье из ирги"]},
     {lines : ["не мог ямба от хорея", "не отличить!"]},    
     {lines : ["и даже в сквере имени Урицкого", "никто не знает имени Урицкого"]},
     {lines : ["Беги, беги, дорожка.", "Стихи Яна Сатуновского.", "Рисунки Марины Басмановой."]},
     {lines : ["один", "<br>", "два", "<br>", "три", "<br>", "четыре", "<br>", "пять", "<br>", "шесть", "<br>", "вагон-ресторан", "<br>", "семь", "<br>", "восемь", "<br>", "девять", "<br>", "десять"]},
     {lines : ["главное?", "главное иметь!", "<br>", "главное иметь нахальство?", "главное иметь нахальство знать!", "<br>", "главное иметь нахальство знать что?", "главное иметь нахальство знать что это!", "<br>", "главное иметь нахальство знать что это стихи? "]}
     ]});
});

app.get('/monostichs', (req, res) => {
     res.redirect('https://twitter.com/rumonostichs')
});

app.get('/instapoetry', (req, res) => {
     res.redirect('https://www.instagram.com/russian.instapoetry')
});

app.get('/hello_world_poetry', (req, res) => {
     res.redirect('https://t.me/hello_world_poetry')
});

app.get('/mono', (req, res) => {
     res.render('poems', { 
     title: "Моностихи",
     poems : [
     {lines : ["потому что ворованный воздух бесплатный"]},
     {lines : ["Ахметьев — хоббит"]},
     {lines : ["поэт и друг поэтов Левин"]},
     {lines : ["будь сам себе Срулик"]},
     {lines : ["парча протёртая до дырбулщила"]},
     {lines : ["снег уберут здесь к Мундиалю"]},
     {lines : ["он её не любил ни строчки"]},
     {lines : ["приснился сонет"]},
     {lines : ["Шекспир в оригинале Пастернака"]},
     {lines : ["Колмогоровская простота стиха"]},
     {lines : ["...датские поэты: Сваровский, Ровинский, Шекспир..."]},
     {lines : ["полупоэт, но есть надежда"]},
     {lines : ["Херсонский — Бродский, но значительно еврей"]},
     {lines : ["Линор Горалик, маркетолог"]},
     {lines : ["терабайт стихов"]},
     {lines : ["трёхпарусные кеды на босу ногу"]},
     {lines : ["бурлюк возведённый в куб"]},
     {lines : ["на этот раз она звалась Египет"]},
     {lines : ["либерал Гозман"]},
     {lines : ["к тому же Пушкин c Бродским близнецы"]},
     {lines : ["русская (нобелевская) речь"]},
     {lines : ["не ВОР а ВОСР"]},
     {lines : ["акмеисты: три поэта и три поэта-акмеиста"]},    
     ]});
});

app.get('/forks', (req, res) => {
     res.render('poems', { 
     title: "Форки",
     poems : [
     {lines : ["<font color='red'>всё проходит", "как пароходик</font>"], epigraph : "[Герман Лукомников]"},
     {lines : ["всё проходит", "как промокодик"]},
     {lines : ["всё проходит", "как пара годик"]},
     {lines : ["<font color='red'>вдали от мировых проблем", "сижу мороженное ем</font>"], epigraph : "[Герман Лукомников]"},
     {lines : ["вдали от мировых забот", "лежу лижу фруктовый лёд"]},
     {lines : ["как на картинке из кино", "сижу жуюю эскимо"]},
     {lines : ["вдали от слов война и мир", "вкушаю сливочный пломбир"]},
     {lines : ["вдали от всех вселенских бед", "вкусней щербета ем щербет"]},
     {lines : ["вдали от всех свежайших фрукт", "я ем мороженный продукт"]},
     {lines : ["вдали от городов и весь", "варю мороженную смесь"]},
     {lines : ["вдали от всех пишу эссе", "про пью мороженный гляссе"]},
     {lines : ["оставил будних дней орду", "в сугробе с сахаром во рту"]},
     {lines : ["<font color='red'>великий поэт", "пошёл в туалет</font>"], epigraph : "[Герман Лукомников]"},
     {lines : ["великий поэт", "по выслуге лет"]},
     {lines : ["великий поэт", "Афанасий Фет"]},
     {lines : ["великий поэт", "Назым Хикмет"]},
     {lines : ["великий поэт", "чтоб Пушкин так нет"]},
     {lines : ["великий поэт", "в бесплатный туалет"]},
     {lines : ["великий поэт", "по версии рунет"]},
     {lines : ["<font color='red'>больше всего на свете", "люблю я ездить в маршрутке</font>"], epigraph : "[Ксения Букша]"},
     {lines : ["больше всего на свете", "я люблю сидеть в интернете"]},
     {lines : ["больше всего на свете", "я люблю сидеть в туалете"]},
     {lines : ["больше всего на свете", "люблю я ездить в карете"]},
     {lines : ["больше всего на свете", "я люблю стихи но не эти"]},
     {lines : ["<font color='red'>автор этих строк", "плавленный сырок</font>"], epigraph : "[Герман Лукомников]"},
     {lines : ["автор этих строк", "жук-единорог"]},
     {lines : ["автор этих строк", "майский ветерок"]},
     {lines : ["автор этих строк", "мой со мной сурок"]},
     {lines : ["автор этих строк", "пушкинский пророк"]},
     {lines : ["<font color='red'>в тени ветвей", "скачет", "тень воробья</font>"], epigraph : "[Марина Хаген]"},
     {lines : ["в тени судеб", "встречаются", "тени конечностей"]},
     {lines : ["в тени дерева", "рефлексирует", "тень Бродского"]},
     {lines : ["<font color='red'>триста с лишний дней в году", "к остановке я бегу</font>"], epigraph : "[Иван Ахметьев]"},
     {lines : ["триста с лишним дней в году", "за маршруткой я бегу"]},
     {lines : ["триста с лишним дней в году", "сочиняю ерунду"]},
     {lines : ["триста с лишним дней в году", "точной цифры не найду"]}         
     ]});
});

app.get('/programming', (req, res) => {
     res.render('poems', { 
     title: "Стихи программиста",
     poems : [
     {lines : ["приснился json"]},
     {lines : ["для программистов математика", "не больше чем культурный код", "её и знать не обязательно", "чтобы писать культурный код"]},
     {lines : ["шарпист джавист и плюсовик", "уж больно выбор невелик"]},
     {lines : ["дистрибукт"]}
     ]});
});


app.get('/porozhki', (req, res) => {
     res.render('poems', { 
     title: "Порожки",
     poems : [
     {lines : ["я так хотел писать танкетки", "делиться мудростью во мне", "да только мудрость неделима", "и не [влезает / в шесть слогов]"]},
     {lines : ["я вас хочу немного тайно", "в надежде грёзах и во сне", "и вас и вас и вас вот тоже", "вас не [хочу / хотя могу]"]},
     {lines : ["прикинь у Cерого на днюхе",  "Витёк сломал ногой строфу", "как Пастернак анжамбеманом", "строфу [где кроме / никого]"]}
     ]});
});

app.get('/stereo', (req, res) => {
     res.render('poems', { 
     title: "Стереостихи",
     poems : [
     {lines : ["<font color='LightGray'>Твой месяц май Твой праздник Вознесенье</font>    ", "Твоя     эпоха чудное мгновение"]}
     ]});
});


app.get('/redblack', (req, res) => {
     res.render('poems', { 
     title: "Редблеки",
     poems : [
     {lines : ["красное", "<font color='red'>чёрное</font>"]}
     ]});
});

app.get('/haiku_minus_plus', (req, res) => {
     res.render('poems', { 
     title: "Хокку минус плюс",
     poems : [
     {lines : ["Читаю себя.", "Кое-что понимаю.", "МНОГОЕ НРАВИТСЯ"]}, 

     ]});
});

app.get('/merch', (req, res) => {
     res.render('poems', { 
     title: "Футболки",
     poems : [
     {lines : ["1 + 1 = 10", "<br>", "(многие верят)"]},
     {lines : ["я", "не-", "не-", "ре-", "пре-" ,"зе-", "нативе-", "н"]},
     {lines : ["На свитере не написано, ", "Но ты лох в этом свитере.", "(надпись на свитере)"]}, 
     ]});
});


app.get('/42', (req, res) => {
     res.render('poems', { 
     title: "Сорокадвушки",
     poems : [
     {lines : ["нераспятая", "графа"]},
     {lines : ["милицанер", "Рейган"]},
     {lines : ["а ещё есть", "шум волн"], epigraph : "[Айвенго]"},
     {lines : ["коллекция", "денег"]},
     {lines : ["срочно сниму", "двушку"]},
     {lines : ["там хорошо", "где нас"], epigraph : "[swap]"},
     {lines : ["в две строки", "пауза"], epigraph : "[swap]"},
     {lines : ["боденская", "осень"], epigraph : "[из Михаила Безродного]"}
     ]});
});


app.get('/26', (req, res) => {
     res.render('poems', { 
     title: "Мои танкетки",
     poems : [
     {lines : ["<font color='red'>январь", "2020 </font>"]},
     {lines : ["платная", "версия", "<br>", "мира", "немецкого"], epigraph : "Австрия"},   
     {lines : ["планета", "согрета", "<br>", "и чуть", "перегрета"]},   
     {lines : ["чепуха", "нелегка"]},
     {lines : ["кабан на", "комбайне"]},
     {lines : ["целебный", "курвоздух"]},
     {lines : ["фезря", "пожертвовал"]},
     {lines : ["свобода", "от мыслей"]},
     {lines : ["стайл-гайд", "для дресс-кода"]},
     {lines : ["кисти", "живописте"]},
     {lines : ["хинкали", "икали"]},
     {lines : ["поток", "зазнания", "<br>", "потуг", "сознания"]},   
     {lines : ["для графа", "де ла Фер"]}, 
     {lines : ["после", "Освенцима"]},
     {lines : ["пуд соли", "по вкусу"]},
     {lines : ["не нашлось", "местечка"]},
     {lines : ["яма", "Мандельштама"]},
     {lines : ["справа", "Парк культуры", "<br>", "слева", "Парк скульптуры"]},   
     {lines : ["<font color='red'>декабрь", "2019 </font>"]},
     {lines : ["подарки", "под ёлку", "<br>", "поделки", "под арку"]},
     {lines : ["первомай", "черномор", "<br>", "и опять", "первомай"], epigraph : "из Некрасова"},
     {lines : ["так учил", "учитель", "<br>", "главное", "слышать звон"]},
     {lines : ["пексесо", "из носков"]},
     {lines : ["Дали", "Окуджавы", "<br>", "грузинских", "палестин"]},
     {lines : ["гендер", "гендер гендер", "<br>", "что-то", "еврейское"]},
     {lines : ["запах", "мандаринов"]},
     {lines : ["упростил", "Вас до вас"]},
     {lines : ["хателос", "танцавать"]},
     {lines : ["русская", "бумажка", "<br>", "народный промысел", "<br>", "синим", "по белому", "<br>", "цветочки", "подписей"]},
     {lines : ["мои", "наушники", "<br>", "сексоты", "стукачи"]},
     {lines : ["носорог", "так видит"]},    
     {lines : ["<font color='red'>ноябрь", "2019 </font>"]},
     {lines : ["отродясь", "двадцать пять"]},
     {lines : ["жираф", "жирафихи", "<br>", "длинно", "шееее"]},
     {lines : ["уместил", "целый мир"]},
     {lines : ["Юрий Дудь", "с кем-нибудь"]},
     {lines : ["вместо", "одной восьмой", "<br>", "стала", "одной одной", "<br>", "одна", "девятая"]},
     {lines : ["я как", "Микеланджел"]},
     {lines : ["поэт", "но деньги есть", "<br>", "это", "идиллия", "<br>", "деньги есть", "но поэт", "<br>", "это", "элегия"]},
     {lines : ["типичный", "водолей", "<br>", "пространных", "соловей"]},
     {lines : ["Карел", "Фабрициус", "<br>", "щегол", "Мандельштама"]},
     {lines : ["планета", "Ньюпитер"]},
     {lines : ["английский", "свободно", "<br>", "русский", "с рифмовником"]},
     {lines : ["дождик", "ундервуда"]},
     {lines : ["ОКЕАН", "личности"]},
     {lines : ["печаль", "шоколада", "<br>", "насмешки", "прохожих"]},
     {lines : ["лечу", "над фьордами", "<br>", "снится", "каждую ночь"]},
     {lines : ["прохожий", "внушает", "<br>", "когда он", "с ушами"]},
     {lines : ["речушки", "рюшечки"], epigraph : "Анси"},
     {lines : ["кот Мурр", "Шрёдингера"]},
     {lines : ["читать", "названия", "<br>", "речных", "пароходов"]},
     {lines : ["<font color='red'>октябрь", "2019 </font>"]},
     {lines : ["Кукин яичницу"]},
     {lines : ["сначала", "уберись", "<br>", "потом", "убирайся"], epigraph : "[не из Бродского]"},
     {lines : ["я тот", "кто триста лет", "<br>", "топчет", "чужой газон"]},
     {lines : ["снился", "номер СНИЛСа", "<br>", "чексумма", "совпала"]},
     {lines : ["половник", "половник", "<br>", "полковник", "поклонник"]},
     {lines : ["и шарик", "улетел", "<br>", "и мячик", "утонул"]},
     {lines : ["полный ан", "жамбеман"]},
     {lines : ["Пан'ы", "все в Варшаве"]},
     {lines : ["швейцарцы", "у вас есть"]}, 
     {lines : ["парить", "парить парить", "<br>", "тонуть", "тонуть тонуть"], epigraph : "[из Игоря Фёдорова]"},
     {lines : ["сумерки", "природа", "<br>", "флейты", "голос нервный", "<br>", "позднее", "катанье"], epigraph : "[из Окуджавы]"},
     {lines : ["над пегой", "парою"]}, 
     {lines : ["один", "два е три пи", "<br>", "четыре", "пять шесть семь", "<br>", "восемь", "десять десять"]},
     {lines : ["ягоды", "варенья", "<br>", "стихи", "поэзии"]},
     {lines : ["женская", "атланта", "<br>", "мужской", "кариатид"]},
     {lines : ["Ахилл", "                   черепаха"]},
     {lines : ["чистка зуб", "чистка зуб"]},
     {lines : ["купец", "легионер"]},
     {lines : ["пиши", "наискосок"]},
     {lines : ["<font color='red'>сентябрь", "2019 </font>"]},
     {lines : ["ночью", "очень чудно"], epigraph : "[из Всеволода Некрасова]"},
     {lines : ["варенье", "в июне", "<br>", "варенье", "в июле", "<br>", "варенье", "в августе"]},
     {lines : ["шёпот", "непогоды"]},
     {lines : ["не дискурс", "а дискурс"]},
     {lines : ["в тиши", "кабинета", "<br>", "слагаю", "танкеты"]},
     {lines : ["вишня", "на сакуре"]},
     {lines : ["Велимир", "Казимир"]},
     {lines : ["бабочка", "ряженка"]},
     {lines : ["такого", "как Пушкин"]},
     {lines : ["ради", "двух-трёх лайков", "<br>", "миллион", "дислайков"]},
     {lines : ["ещё и", "картавит"]},
     {lines : ["любовь", "мамонтёнок"]},
     {lines : ["рубины", "рябины"]},
     {lines : ["Рубинштейн", "это я"]},
     {lines : ["безумный", "неземной"]},
     {lines : ["мое", "невпихуе"]},
     {lines : ["<font color='red'>август", "2019 </font>"]},
     {lines : ["негр с догом", "мгновение"]},
     {lines : ["весной", "повеяло"]},
     {lines : ["кричат", "винтер винтер"]},
     {lines : ["ручей", "мостик в лесу"]},
     {lines : ["дневник", "моих побед", "<br>", "ночник", "ничьих ничьих"]},
     {lines : ["бумага", "бумага", "<br>", "бумага", "бумага", "<br>", "бумага", "ножницы"]},
     {lines : ["щетина", "нищета"]},
     {lines : ["тихая", "обитель"]},
     {lines : ["бабочка", "человек", "<br>", "человек", "бабочка"]},
     {lines : ["Вечер", "Золотой Плёс"]},
     {lines : ["<font color='red'>июль", "2019 </font>"]},
     {lines : ["трубка", "это трубка"]},
     {lines : ["король", "король конь слон"]},
     {lines : ["крыши", "снег крыши снег"]},
     {lines : ["нарцисс", "неотразим"]},
     {lines : ["алфавит", "плодовит"]},
     {lines : ["над вечным", "покоем", "<br>", "голос", "Левитана"]},
     {lines : ["Сталин", "на душу нас."]},
     {lines : ["носок", "другой носок"]},
     {lines : ["<font color='red'>июнь", "2019 </font>"]},
     {lines : ["детские", "ботинки"]},
     {lines : ["ЧэГэКа", "ВэВэВэ"]},
     {lines : ["я неян", "и неинь"]},
     {lines : ["советский", "тильзитер"]},
     {lines : ["Мирослав", "Немиров"]},
     {lines : ["стрелял", "промахнулся"]},
     {lines : ["холодно", "в твиттере"]},
     {lines : ["<font color='red'>май", "2019 </font>"]},
     {lines : ["хачу", "хачапури"]},
     {lines : ["зебры", "ЗЫ берёзы"]}
     
     ]});
});




app.get('/1-1', (req, res) => {
     res.render('poems', { 
     title: "В две строки",
     poems : [
     {lines : ["Лобзай меня", "и бедных людей)"]},
     {lines : ["Я глянул в зеркало с утра", "И страшно стало"]},
     {lines : ["Женщина в метро меня лягнула", "просто я как личность выше был"]},
     {lines : ["Вот День Рыбака —  это День Рыбака", "А сам он —  какой-то рыбак."]},
     {lines : ["мне очень нравится когда", "везде туман везде вода"]},
     {lines : ["Не мысля гордый свет забавить,", "как я с Онегиным моим."]},
     {lines : ["Я был знаком с берлинским палачом,,", "Мне нечего сказать: он был чекистом."]}
     ]
     });
});

app.get('/riddles', (req, res) => {
     res.render('poems', { 
     title: "Загадаки",
     poems : [
     {lines : ["исчезнут", "грёзы", "печали", "сны", "<br>", "останутся простые числа", "<br>"], epigraph: "Карен Джангиров",
     reverse: "[ Решето Эратосфена ]"},
     {lines : ["Я слышал крики и не оглянулся", "<br>"], epigraph: "Герман Лукомников", reverse: "[ The Voice ]"}
     ]
     });
});


app.get('/', (req, res) => {
     res.render('index', { 
         title: "Разностишия",
         pages : [
             
             {name : "26", title : "Танкетки"},
             {name : "zh-p", title : "Журнал Прыщ"},
             {name : "hello_world_poetry", title : "Стихи погромиста"},
             {name : "instapoetry", title : "Инстапоэзия"},
             {name : "monostichs", title : "Моностихи"},
             {name : "landscapes", title : "Пейзажная лирика"},
             //{name : "42", title : "Сорокадвушки"},
             //{name : "redblack", title : "Редблеки"},
             //{name : "merch", title : "Мерчи"},
             //{name : "stereo", title : "Стереостихи"},
             //{name : "porozhki", title : "Порожки"},
             //{name : "forks", title : "Форки"},
             {name : "auto_26", title : "Автотанкетки"},
             //{name : "squeeze", title : "Выжимки"},
             //{name : "piramids", title : "Пирамидки"},
             //{name : "equations", title : "Уравнения"},
             //{name : "rotki", title : "Ротки"},
             //{name : "repeat", title : "Повторюшки"},
             //{name : "trip", title : "Поездки"},
             //{name : "train", title : "Поезда"},
             //{name : "35", title : "Троепятки"},
             {name : "plagiarism", title : "Плагиат"},
             //{name : "12", title : "Слова в две строки"},
             //{name : "mindlessness", title : "Задумки"},
             //{name : "samara", title : "Самара"},
             //{name : "portraits", title : "Портреты"},
             //{name : "2", title : "Два слова"},
             //{name : "ostrich", title : "Страуса"},
             //{name : "1-1", title : "В две строки"},
             {name : "haiku_minus_plus", title : "Хокку-+"},
             {name : "side", title : "Взгляд сбоку"},
             {name : "575", title : "Строгие хокку"},
             {name : "haiku", title : "Свободные хокку"},
             //{name : "8", title : "Восьмое чудо света"},
             //{name : "numbers", title : "Цифры"},
             {name : "gariks", title : "Гарики"},
             {name : "riddles", title : "Загадки"},
             
             //{name : "transform", title : "Устройства по превращению"},
             //{name : "parentheses", title : "Скобки"},
             //{name : "doubles", title : "Двойники"},
             
             {name : "words", title : "Неологизмы"},
             {name : "noumenon ", title : "Вещь в себе"}
         ]          
     });
});


app.listen(80, () => {
    console.log('server is starting at port... ', 80);
});
