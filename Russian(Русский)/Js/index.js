 //  alert('Ошибка в кнопке удаления (Неправильный Id)')
    var classList = {
        0: { name: 'svg_scout', ClassName: 'Scout' },
        1: { name: 'svg_soldier', ClassName: 'Soldier' },
        2: { name: 'svg_pyro', ClassName: 'Pyro' },
        3: { name: 'svg_demoman', ClassName: 'Demoman' },
        4: { name: 'svg_heavy', ClassName: 'Heavy' },
        5: { name: 'svg_engineer', ClassName: 'Enginner' },
        6: { name: 'svg_medic', ClassName: 'Medic' },
        7: { name: 'svg_sniper', ClassName: 'Sniper' },
        8: { name: 'svg_spy', ClassName: 'Spy' },
    }
    const compact = (coll) => {
  // Инициализация результата
  // Для пустой входной коллекции результатом будет пустой массив
  const result = [];

  for (const item of coll) {
    if (item !== null) {
      result.push(item);
    }
  }

  return result;
};
    var AllPowerForCustom = []
    var gggg = 0
    var AttributeSelect = []
    function DestroyAttribute(f,a,b,c){
 
document.getElementById('Span_'+(a+1)).remove()

//if(AllPowerForCustom[a] == undefined && a > AllPowerForCustom.length-1 ){
    //AllPowerForCustom[AllPowerForCustom.length-1] = null
//}else{
AllPowerForCustom[AllPowerForCustom.indexOf(f)] = null
//}
b.remove()
AttributeSelect[AttributeSelect.indexOf(c)] = null

AllPowerForCustom = compact(AllPowerForCustom)
AttributeSelect = compact(AttributeSelect)
gggg--




    }
    function GenerateCommand(){
document.getElementById('ststu2').style.display = ''
document.getElementById('s').innerHTML = ''
d = ''
d += 'sm_gi '+ GiveValue + ' ' + document.getElementById('listWeapon').querySelector(':checked').getAttribute('data--weapon-index') + ' '
d +=  document.getElementById('listWeapon').querySelector(':checked').getAttribute('data--weapon-class-slot')
d += ' 1 1 1 0 ' 
d+= document.getElementById('listWeapon').querySelector(':checked').getAttribute('data--weapon-class') + ' '
for(var vd = 0;vd<AttributeSelect.length;vd++){
    if(AttributeSelect[vd] !== null && AllPowerForCustom[vd] !== null){
 d += '"' + AttributeSelect[vd] + ';' + AllPowerForCustom[vd] + '"'
    }
   
}
document.getElementById('s').innerHTML = d
    }
    function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}
    function AddOne(){
        
var x = document.getElementById("NumPower").value;
var y = document.getElementById("listAttribute")

var x2

    if(document.getElementById('listAttribute').querySelector(':checked').getAttribute('data--used') == 'true'){
       
        
        var Value = 0
        for(var dc = 0 ;dc<AllAtribute.length;dc++){
          
            if(AllAtribute[dc][0] == document.getElementById('listAttribute').querySelector(':checked').getAttribute('data--id')){
                Value = AllAtribute[dc]
              break
            }
        }
        if(AttributeSelect.indexOf(Value[0]) !== -1){
            alert('Такой атрибут уже добавлен')
            return
        }
        if(isNaN(x) || x == '' || x < 0 || x > 100){
    x= x2 = Math.round(Math.random() * 10) + 1;
    }
    x2 = x
    AllPowerForCustom.push(Number(x))
    gggg++
        var color = '#ff0000';
        if (Value[2] !== null && Value[2] !== 'no img') {
                                if (Value[2]) {
                                    color = '#76a0a8'
                                }
                                if (!Value[2]) {
                                    color = '#FF4040'
                                }
                            } else {
                                color = '#ded598'
                            }
                            AttributeSelect.push(Value[0])
        document.getElementById('ss').innerHTML +='<span style="color:'+color+'" id="Span_'+gggg+'">' +  Value[1] + '</span><code style="color:White"  onclick="DestroyAttribute('+x2+','+(gggg-1)+',this,'+Value[0]+')">&#9932;<br></code>'
    }
    if(document.getElementById('listAttribute').querySelector(':checked').getAttribute('data--used') == 'false'){
       
        var Value = 0
        for(var dc = 0 ;dc<Atribute_not_used_or_secret.length;dc++){
                
                  if(Atribute_not_used_or_secret[dc][0] == document.getElementById('listAttribute').querySelector(':checked').getAttribute('data--id')){
                Value = Atribute_not_used_or_secret[dc]
              break
            }
        }
        if(AttributeSelect.indexOf(Value[0]) !== -1){
            alert('Такой атрибут уже добавлен')
            return
        }
        if(isNaN(x) || x == '' || x < 0 || x > 100){
    x=x2 = Math.round(Math.random() * 10) + 1;
    }
    x2 = x
    AllPowerForCustom.push(Number(x))
    gggg++
        var color = '#ff0000';
        if (Value[2] !== null && Value[2] !== 'no img') {
                                if (Value[2]) {
                                    color = '#76a0a8'
                                }
                                if (!Value[2]) {
                                    color = '#FF4040'
                                }
                            } else {
                                color = '#ded598'
                            }
                            AttributeSelect.push(Value[0])
        document.getElementById('ss').innerHTML += '<span style="color:'+color+'" id="Span_'+gggg+'">' + Value[1] + '<code style="color:red" onmousemove="MoveTitle()" onmouseover="SeeTitle()" onmouseout="DestroyTitle()">(&#9888;)</code></span><code style="color:White" onclick="DestroyAttribute('+x2+','+(gggg-1)+',this,'+Value[0]+')">&#9932;<br></code>'
    }


    for (var bv = 0; bv < gggg; bv++) {
                    if (document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("b")[0] !== undefined) {
                        //  console.log(AllPower[bv])
                        if (document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("i")[0] !== undefined) {
                            if (document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("i")[0].innerHTML == '%') {
                                document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("b")[0].innerHTML = (100 * AllPowerForCustom[bv]) 
                            } else {
                                document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("b")[0].innerHTML =AllPowerForCustom[bv]
                            }
                        } else {
                            document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("b")[0].innerHTML = AllPowerForCustom[bv]
                        }

                    }
                }
 }
function RemoveAll(){
    AttributeSelect = []
    gggg = 0
    AllPowerForCustom = []
    document.getElementById('ss').innerHTML =''
}
    function CreateCustom(a) {
        document.getElementById('Button_gen').style.display = 'none'
        document.getElementById('Button_custom').innerHTML = 'Создать рандомное оружие'
        document.getElementById('SettingsRandom').style.display = 'none'
        document.getElementById('icon_pref').src = ''
        CreCus = true
        document.getElementById('NameWeapon').innerHTML =''
       
        document.getElementById('ststua').style.display = 'none'


            document.getElementById('ststu2').style.display = 'none'
        document.getElementById('s').innerHTML =''
        document.getElementById('ss').innerHTML =''
        document.getElementById('NameWeapon').innerHTML = '<select id="listWeapon" style="display: none;background:rgb(36, 32, 27);color:#b4b4b4;font-size:20px;width: 60%;"></select><br><br>'
        document.getElementById('NameWeapon').innerHTML +='  <select id="listAttribute" style="max-width: 20%;"></select><input type="number" placeholder="1(Max. 99)" id="NumPower"><br><br><button onclick="AddOne()" id="" >Добавить</button><button onclick="RemoveAll()"  style="margin-left:10px;margin-top:10px;">Удалить всё</button><br><br><button onclick="GenerateCommand()" style="margin-left:10px">Сгенерировать команду</button>'
      
        for (var f = 0; f < AllAtribute.length; f++) {
            var object = document.createElement('option')
            var pos = document.getElementById('listAttribute')
            object.innerHTML = AllAtribute[f][1]
            object.dataset.Used = true
            
            object.dataset.Id = AllAtribute[f][0]
            pos.appendChild(object)
            
        }
        for (var f = 0; f < Atribute_not_used_or_secret.length; f++) {
            var object = document.createElement('option')
            var pos = document.getElementById('listAttribute')
            object.style.color = 'red'
            object.dataset.Used = false
            object.dataset.Id = Atribute_not_used_or_secret[f][0]
            object.innerHTML = Atribute_not_used_or_secret[f][1] + '<code style="color:red" onmousemove="MoveTitle()" onmouseover="SeeTitle()" onmouseout="DestroyTitle()">(&#9888;)</code>'
            pos.appendChild(object)
           
        }
        for (var i = 0; i < 9; i++) {

            if (document.getElementById(i).checked) {
                document.getElementById(i).checked = false

                document.getElementById(classList[i].name).style.fill = 'white'
            }
        }


            document.getElementById('Button_custom').onclick = function () {
                document.getElementById('Button_gen').style.display = ''
                CreCus = false
                document.getElementById('SettingsRandom').style.display = ''
                document.getElementById('NameWeapon').innerHTML = ''
                 document.getElementById('ststua').style.display = 'none'
            document.getElementById('ststu2').style.display = 'none'
                document.getElementById('Button_custom').innerHTML = 'Написать своё оружие'
                document.getElementById('Button_custom').setAttribute('onclick', 'CreateCustom(this)')
            }
        }
        function ClickClass(IdClass, Svg_fill_id) {

            var Val = IdClass
            var Svg = Svg_fill_id
            if (CreCus) {
                var df = true
document.getElementById('listWeapon').style.display = ''
document.getElementById('ststua').style.display = ''
                document.getElementById('listWeapon').innerHTML = ''
                for (var i = 0; i < 9; i++) {
                    if (i !== IdClass) {
                        if (document.getElementById(i).checked) {
                            document.getElementById(i).checked = false

                            document.getElementById(classList[i].name).style.fill = 'white'
                        }
                    }
                    if (!df) {

                    }
                }
            }
            if (!document.getElementById(Val).checked) {

                document.getElementById(Val).checked = true;
                if (Math.round(Math.random() * 100) < 50) {
                    document.getElementById(Svg).style.fill = '#B8383B'
                } else {
                    document.getElementById(Svg).style.fill = ' #256D8D'
                }
            }
            else {

                document.getElementById(Val).checked = false;
                document.getElementById(Svg).style.fill = 'white'

            }
            if (CreCus) {

                for (var f = 0; f < All_weapon[IdClass].length; f++) {
                    for (var f2 = 0; f2 < All_weapon[IdClass][f][1].length; f2++) {
                        var object = document.createElement('option')
                        var pos = document.getElementById('listWeapon')
                        object.dataset.WeaponClass= All_weapon[IdClass][f][0]
                        object.dataset.WeaponClassSlot = All_weapon[IdClass][f][2]
                        object.dataset.WeaponIndex = All_weapon[IdClass][f][1][f2]
                        object.innerHTML = WeaponName[All_weapon[IdClass][f][1][f2]].name
                        pos.appendChild(object)
                    }
                }

            }
        }
        var OnlyBasics = false
      
        var d = [

        ]
        let CreCus = false
        var GiveValue = '@all'
        var SlotPrimer = true
        var SlotSecond = true
        var SlotMelee = true

        var hh
        var AllPower = []
        var AllAtribute = [
            [1, "Урон: <b>%s1</b><i>%</i> ", false]
            , [2, "Урон: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [3, "Размер обоймы: <b>%s1</b><i>%</i> ", false]
            , [4, "Размер обоймы: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [5, "Скорость атаки: <samp>-</samp><b>%s1</b><i>%</i> ", false]
            , [6, "Скорость атаки: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [8, "Скорость лечения: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [10, "Скорость накопления убер-заряда: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [15, "Без случайных критов ", false]
            , [16, "При попадании: <samp>+</samp><b>%s1</b><i> ед.</i> к здоровью ", true]
            , [17, "При попадании: <samp>+</samp><b>%s1</b><i>%</i> к убер-заряду ", true]
            , [18, "Убер-заряд: <samp>100%</samp> шанс критов ", null]
            , [20, "<samp>100%</samp> крит по горящим врагам ", true]
            , [24, "<samp>100%</samp> крит при атаке со спины ", true]
            , [26, "Максимальный уровень здоровья: <samp>+</samp><b>%s1</b><i> ед.</i> ", true]
            , [31, "При убийстве: <samp>100%</samp> шанс крита на <b>%s1</b> сек. ", true]
            , [32, "При попадании: <b>%s1</b><i>%</i> шанс замедлить врага ", true]
            , [33, "Тип невидимости: Симуляция смерти ", null]
            , [34, "Расход заряда невидимости: <samp>+</samp><b>%s1</b><i>%</i> ", false]
            , [35, "Восстановление невидимости: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [36, "Точность ниже на <b>%s1</b><i>%</i> ", false]
            , [38, "Дополнительная атака: запускает оглушающий мяч ", true]
            , [41, "Уровень заряда: <samp>+</samp><b>%s1</b> ", true]
            , [42, "Без попаданий в голову ", false]
            , [44, "Отдача в цель и стреляющего ", true]
            , [45, "Количество пуль за выстрел: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [48, "Тип невидимости: Реакция на движение ", null]
            , [51, "Крит при попадании в голову ", true]
            , [52, "Блокирует один удар в спину ", true]
            , [54, "Скорость передвижения: <samp>-</samp><b>%s1</b><i>%</i> ", false]
            , [56, "Облитым врагам наносятся мини-криты .Также может тушить огонь ", null]
            , [57, "Скорость восстановления здоровья: <samp>+</samp><b>%s1</b><i> ед.</i> в секунду ", true]
            , [59, "Наносимый самому себе урон: <b>%s1</b><i>%</i> ", false]
            , [60, "Сопротивление огню: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [61, "Урон, получаемый от огня: <samp>+</samp><b>%s1</b><i>%</i> ", false]
            , [64, "Сопротивление урону от взрывов: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [65, "Урон, получаемый от взрывов: <samp>+</samp><b>%s1</b><i>%</i> ", false]
            , [67, "Урон, получаемый от пуль: <samp>+</samp><b>%s1</b><i>%</i> ", false]
            , [68, "Скорость захвата: <samp>+</samp><b>%s1</b> ", true]
            , [69, "Получаемое при лечении здоровье: <b>%s1</b><i>%</i> ", false]
            , [72, "Урон от догорания: <b>%s1</b><i>%</i> ", false]
            , [76, "Кол-во патронов у основного оружия: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [77, "Кол-во патронов у основного оружия: <b>%s1</b><i>%</i> ", false]
            , [78, "Кол-во патронов у дополнительного оружия: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [79, "Кол-во патронов у дополнительного оружия: <b>%s1</b><i>%</i> ", false]
            , [83, "Длительность невидимости: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [86, "Скорость раскрутки пулемета: <samp>-</samp><b>%s1</b><i>%</i> ", false]
            , [87, "Скорость раскрутки пулемета: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [88, "Максимальное кол-во выпущенных липучек: <samp>+</samp><b>%s1</b> ", true]
            , [89, "Максимальное кол-во выпущенных липучек: <b>%s1</b> ", false]
            , [92, "Скорость возведения построек: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [93, "Скорость возведения построек: <samp>-</samp><b>%s1</b><i>%</i> ", false]
            , [95, "Скорость починки уменьшается на <b>%s1</b><i>%</i> ", false]
            , [97, "Перезарядка быстрее на <b>%s1</b><i>%</i> ", true]
            , [100, "Радиус взрыва: <b>%s1</b><i>%</i> ", false]
            , [103, "Скорость полета снаряда: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [105, "Сверхлечение: <samp>-</samp><b>%s1</b><i>%</i> ", false]
            , [106, "Точность повышается на <b>%s1</b><i>%</i> ", true]
            , [107, "Скорость передвижения: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [108, "Из аптечек вы будете получать на <b>%s1</b><i>%</i> больше здоровья ", true]
            , [114, "Наносит мини-криты по врагам, запущенным в полет взрывами ", true]
            , [115, "При получении увечий урон игрока возрастает ", true]
            , [119, "Взрывает бомбы-липучки рядом с прицелом и под ногами ", true]
            , [120, "Бомбы устанавливаются на <b>%s1</b> сек. медленнее ", false]
            , [121, "Может уничтожать вражеские бомбы-липучки ", true]
            , [124, "Заменяет турель на быстровозводимую мини-турель ", false]
            , [125, "Максимальный уровень здоровья: <b>%s1</b><i> ед.</i> ", false]
            , [126, "Бомбы устанавливаются на <b>%s1</b> сек. быстрее ", true]
            , [127, "Выпущенные бомбы разбиваются на поверхностях ", false]
            , [128, "Когда оружие выбрано: ", null]
            , [134, "Эффект: <b>%s1</b> ", null]
            , [135, "Урон от прыжков на ракете: <b>%s1</b><i>%</i> ", true]
            , [136, "После уничтожения турели, вы получаете криты мести за каждое ее убийство.  ", true]
            , [137, "Урон, наносимый постройкам: <b>%s1</b><i>%</i> ", true]
            , [138, "Урон, наносимый игрокам: <b>%s1</b><i>%</i> ", false]
            , [139, "Добавляет +50 к макс. здоровью на 30 секунд ", true]
            , [143, "Дата найма: <b>%s1</b> ", null]
            , [146, "Уничтожает вражеские жучки ", true]
            , [149, "При попадании: кровотечение на <b>%s1</b> сек. ", true]
            , [150, "Наделен древней силой ", true]
            , [154, "При успешном ударе человека в спину, вы мгновенно маскируетесь под свою жертву ", true]
            , [156, "Это оружие убивает бесшумно ", true]
            , [158, "<samp>+</samp><b>%s1</b> к заряду невидимости при убийстве ", true]
            , [166, "<samp>+</samp><b>%s1</b> к заряду невидимости при попадании ", true]
            , [170, "<samp>+</samp><b>%s1</b><i>%</i> к потреблению топлива сжатым воздухом ", false]
            , [175, "При попадании: эффект Банкате на <b>%s1</b> секунд ", true]
            , [179, "Все мини-криты, обычно наносимые этим оружием, превращаются в криты ", true]
            , [180, "<samp>+</samp><b>%s1</b> здоровья за каждое убийство ", true]
            , [181, "Нет урона от собственных взрывов ", true]
            , [183, "<b>%s1</b><i>%</i> к скорости передвижения при раскрутке ", false]
            , [187, "Тираж #<b>%s1</b> ", true]
            , [197, "Это особый предмет с Хеллоуина <b>%s1</b> года ", true]
            , [199, "This weapon holsters <b>%s1</b><i>%</i> faster ", true]
            , [200, "Насмешка: Лечение близстоящих союзников ", true]
            , [202, "<samp>+</samp><b>%s1</b> сек. к длительности рывка ", true]
            , [203, "При убийстве: Падает маленькая аптечка ", true]
            , [204, "При промахе: Удар по себе. Дурень. ", false]
            , [205, "<b>%s1</b><i>%</i> получаемого урона от стрелкового оружия при использовании ", true]
            , [206, "<samp>+</samp><b>%s1</b><i>%</i> получаемого урона от ближнего боя при использовании ", false]
            , [207, "<samp>+</samp><b>%s1</b><i>%</i> к урону по себе ", false]
            , [208, "При попадании: врага охватывают языки пламени ", true]
            , [209, "<samp>100%</samp> мини-крит по горящим врагам ", true]
            , [217, "При ударе в спину: крадет здоровье жертвы. ", true]
            , [218, "При попадании: проклинает одного врага за раз, делая любой нанесенный урон мини-критами ", true]
            , [220, "При убийстве: восстанавливает здоровье до <b>%s1</b><i>%</i> ", true]
            , [224, "При уровне здоровья &lt;50%: <samp>+</samp><b>%s1</b><i>%</i> к урону ", true]
            , [225, "При уровне здоровья &gt;50%: <b>%s1</b><i>%</i> к урону ", false]
            , [226, "Оружие чести: достав из ножен, вы не сможете зачехлить его, не убив врага. ", false]
            , [231, "Убер-заряд: увеличение скорости лечения до <samp>300%</samp> и иммунитет к эффектам, влияющим на передвижение ", null]
            , [235, "При уменьшении здоровья: скорость игрока возрастает ", true]
            , [238, "Бесшумность: отсутствует звук раскрутки ", true]
            , [246, "<samp>+</samp><b>%s1</b><i>%</i> к управляемости во время рывка ", true]
            , [248, "<samp>+</samp><b>%s1</b><i>%</i> к урону при столкновении ", true]
            , [249, "<samp>+</samp><b>%s1</b><i>%</i> к скорости перезарядки рывка со щитом ", true]
            , [250, "Позволяет совершать тройной прыжок: третий прыжок наносит 10 ед. урона носителю ", true]
            , [251, "При ударе союзника: увеличивает скорость обоих игроков на несколько секунд. ", true]
            , [252, "<b>%s1</b><i>%</i> к сопротивлению отталкиванию ", true]
            , [259, "При приземлении на врага, наносит ему тройной урон от падения ", true]
            , [267, "Наносит криты во время прыжка на ракете ", true]
            , [268, "Скорость пополнения заряда по умолчанию: <b>%s1</b><i>%</i> ", false]
            , [269, "Позволяет видеть здоровье противника ", true]
            , [270, "Может содержать до <b>%s1</b> зарядов ", true]
            , [271, "Содержит зарядов: <b>%s1</b> ", true]
            , [272, "Каждый заряд длится <b>%s1</b> секунд ", true]
            , [278, "Скорость восстановления: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [281, "Не требуются патроны ", true]
            , [282, "Дополнительная атака: заряженный выстрел, наносящий мини-криты и отключающий постройки на 4 сек  ", true]
            , [283, "Снаряды пробивают врагов насквозь ", true]
            , [284, "Наносит постройкам только <samp>20%</samp> урона ", false]
            , [285, "Снаряды невозможно отразить ", true]
            , [296, "Дает один гарантированный крит за каждую постройку, уничтоженную вашим жучком  ", true]
            , [297, "Стреляет только после прицеливания ", false]
            , [298, "За выстрел: <samp>-</samp><b>%s1</b> металла ", false]
            , [299, "При попадании: урон, нанесенный врагу, пополняет запас металла ", true]
            , [300, "При атаке: создает электрическое поле, уничтожающее снаряды и наносящее незначительный урон игрокам  ", true]
            , [301, "Использует металл в качестве патронов ", false]
            , [304, "Урон при полном заряде: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [305, "Стреляет трассирующими пулями ", false]
            , [306, "Без полного заряда не дает криты при попадании в голову ", false]
            , [307, "Не требует перезарядки ", true]
            , [308, "При полном заряде: пробивает игроков насквозь ", true]
            , [309, "Убитый критическим ударом противник разлетится в клочья. Корчась от боли. ", true]
            , [311, "Неограниченное использование ", true]
            , [329, "<b>%s1</b><i>%</i> reduction in airblast vulnerability ", true]
            , [334, "Эффектно взрывается после смерти ", true]
            , [337, "При попадании: жертва теряет <b>%s1</b><i>%</i> убер-заряда ", true]
            , [338, "При попадании: жертва теряет <b>%s1</b><i>%</i> заряда невидимости ", true]
            , [346, "Дополнительная атака: запускает стеклянный шарик, который, разбиваясь, вызывает кровотечение ", true]
            , [347, "Удар в спину замораживает жертву ", false]
            , [352, "Доп. атака: телепортирует в зону возрождения ", true]
            , [356, "Без сжатого воздуха ", false]
            , [358, "Крит заставляет противника смеяться ", true]
            , [359, "Тает в огне, восстанавливается через <b>%s1</b> секунд ", false]
            , [360, "Все игроки, связанные лучами Лечебной пушки, получают урон ", true]
            , [361, "При поджигании: невосприимчивость к огню на <b>%s1</b> секунд ", true]
            , [362, "Всегда наносит криты сзади ", true]
            , [363, "Криты не наносят урона ", false]
            , [364, "Звон идет во все концы ", false]
            , [367, "Дополнительная атака: тушит союзников и дает за это гарантированные криты ", true]
            , [368, "Урон, наносимый огнем, заполняет шкалу 'МММФХ'. При активации восполняет здоровье и дает криты на несколько секунд. ", true]
            , [369, "При попадании: заставляет смеяться противников, использующих это же оружие ", true]
            , [371, "Attrib_TauntSoundSuccess ", true]
            , [376, "Наводка не сбивается при прицеливании ", true]
            , [377, "Отбрасывание при прицеливании уменьшено на <b>%s1</b><i>%</i> ", true]
            , [387, "При убийстве или помощи в убийстве пополняет заряд концентрации ", true]
            , [391, "Сокращает время разгадывания тайн на <b>%s1</b><i>%</i> ", true]
            , [392, "<b>%s1</b><i>%</i> урона при попадании в тело ", false]
            , [393, "При полном заряде концентрации. При концентрации: +25% к скорости накопления силы выстрела и возможность делать выстрелы без выхода из режима прицеливания ", true]
            , [398, "Attrib_RageGainOnAssists ", true]
            , [400, "Используя этот предмет, нельзя переносить разведданные ", false]
            , [401, "Снижает вероятность проголодаться до <b>%s1</b><i>%</i> ", true]
            , [410, "<samp>+</samp><b>%s1</b><i>%</i> дополнительного урона, если владелец не замаскирован ", true]
            , [411, "<samp>+</samp><b>%s1</b> град. к разбросу выстрела ", false]
            , [412, "Получаемый урон: <samp>+</samp><b>%s1</b><i>%</i> ", false]
            , [413, "Удерживайте кнопку выстрела, чтобы зарядить до трех ракет .Отпустите кнопку, чтобы выстрелить всеми ракетами сразу ", true]
            , [414, "Метка смерти при ношении и на короткое время после переключения оружия ", false]
            , [416, "Патрон отбрасывает цель и поджигает врагов в небольшом радиусе  ", true]
            , [417, "Переполнение оружия приведет к осечке ", false]
            , [418, "При попадании: увеличивает счетчик ускорения .При активации ускорения скорость бега увеличивается в <samp>2</samp> раза ", true]
            , [419, "Счетчик ускорения сбрасывается при прыжке ", false]
            , [420, "Пережил ад <b>%s1</b> года ", true]
            , [421, "Невозможно пополнять боеприпасы от раздатчиков ", false]
            , [422, "Only visible in Pyroland ", false]
            , [426, "Урон от жучка: <b>%s1</b><i>%</i> ", false]
            , [430, "При раскрутке пулемета: окружает владельца кольцом огня ", true]
            , [431, "При раскрутке пулемета: расходуется <b>%s1</b> патронов в секунду ", false]
            , [433, "Обращает вспять процесс возведения вражеской постройки ", true]
            , [435, "Метайте во врагов, чтобы вызвать кровотечение! Попадание с большого расстояния наносит мини-крит  ", true]
            , [438, "<samp><samp>100%</samp></samp> крит по мокрым врагам ", true]
            , [445, "On Equip: Visit Pyroland ", true]
            , [451, "Attrib_Sapper_Voice_Pak ", true]
            , [452, "Attrib_Sapper_Voice_Pak_Idle_Wait ", true]
            , [464, "Sentry build speed increased by <b>%s1</b><i>%</i> ", true]
            , [466, "Cannonballs have a fuse time of 1 second; fuses can be primed to explode earlier by holding down the fire key. ", null]
            , [467, "Cannonballs do not explode on impact ", false]
            , [469, "Alt-Fire: Use <b>%s1</b> metal to pick up your targeted building from long range ", true]
            , [472, "Self mark for death when hauling buildings ", false]
            , [473, "Press your reload key to cycle through resist types. While healing, provides you and your target with a constant 10% resistance to the selected damage type. ", true]
            , [474, "Fires a special bolt that can repair friendly buildings ", true]
            , [477, "Cannonballs push players back on impact ", true]
            , [479, "<b>%s1</b><i>%</i> Overheal build rate. ", false]
            , [524, "<samp>+</samp><b>%s1</b><i>%</i> greater jump height when active ", true]
            , [527, "Immune to the effects of afterburn. ", true]
            , [533, "Extra effects when taunting. ", true]
            , [536, "Increase in push force taken from damage and airblast ", false]
            , [537, "Leave a Calling Card on your victims. ", true]
            , [547, "This weapon deploys <b>%s1</b><i>%</i> faster ", true]
            , [619, "Mini-crits targets when fired at their back from close range ", true]
            , [621, "Increased attack speed and smaller blast radius while blast jumping ", true]
            , [636, "Charge and fire shots independent of zoom ", true]
            , [639, "Full turning control while charging ", true]
            , [644, "Clip size increased on kill ", true]
            , [661, "Rewarded for participating in the 2014 Summer Adventure. ", true]
            , [670, "Max charge time decreased by <b>%s1</b><i>%</i> ", true]
            , [671, "Grenades have very little bounce and roll ", true]
            , [676, "Taking damage while shield charging reduces remaining charging time ", false]
            , [693, "Increased Melee damage against Isolated Merc Set ", true]
            , [694, "Increased Nostromo Napalmer damage taken from Isolated Merc Set ", false]
            , [695, "Increased Nostromo Napalmer damage against Isolationist Pack Set ", true]
            , [696, "Increased Melee damage taken from Isolationist Pack Set ", false]
            , [701, "Duck XP Level&nbsp;: <b>%s1</b> ", true]
            , [702, "Duck Power&nbsp;: <b>%s1</b> / 5 ", true]
            , [703, "Early Supporter of End of the Line Community Update ", true]
            , [705, "Duckstreaks Active ", true]
            , [726, "<b>%s1</b><i>%</i> cloak meter when Feign Death is activated ", false]
            , [727, "Up to <samp>+</samp><b>%s1</b><i>%</i> damage based on charge ", true]
            , [728, "No cloak meter from ammo boxes when invisible ", false]
            , [729, "<b>%s1</b><i>%</i> cloak meter from ammo boxes ", false]
            , [732, "<b>%s1</b><i>%</i> less metal from pickups and dispensers ", false]
            , [733, "Boost reduced when hit ", false]
            , [735, "<samp>100%</samp> critical hit vs burning players ", true]
            , [736, "Gain a speed boost on kill ", true]
            , [737, "On Hit: Gain a speed boost ", true]
            , [738, "<b>%s1</b><i>%</i> damage resistance when below 50% health and spun up ", true]
            , [739, "<b>%s1</b><i>%</i> ÜberCharge rate on Overhealed patients ", false]
            , [740, "<b>%s1</b><i>%</i> less healing from Medic sources ", false]
            , [741, "On Hit: Gain up to <samp>+</samp><b>%s1</b> health per attack ", true]
            , [745, "Team Colored Decorated Weapon ", null]
            , [772, "This weapon holsters <b>%s1</b><i>%</i> slower ", false]
            , [773, "This weapon deploys <b>%s1</b><i>%</i> slower ", false]
            , [775, "<b>%s1</b><i>%</i> damage penalty vs buildings ", false]
            , [778, "Melee hits refill  <b>%s1</b><i>%</i> of your charge meter. ", true]
            , [779, "Secondary fire when charged grants mini-crits for <b>%s1</b> seconds. ", true]
            , [780, "Dealing damage fills charge meter. ", true]
            , [781, "This Weapon has a large melee range and deploys and holsters slower ", null]
            , [782, "Ammo boxes collected also give Charge ", true]
            , [783, "Extinguishing teammates restores <b>%s1</b> health ", true]
            , [784, "Extinguishing teammates reduces cooldown by <b>%s1</b><i>%</i> ", true]
            , [787, "<b>%s1</b><i>%</i> fuse time on grenades ", true]
            , [788, "<samp>+</samp><b>%s1</b><i>%</i> faster move speed on wearer (shield required) ", true]
            , [789, "<b>%s1</b><i>%</i> increased damage to your sentry's target ", true]
            , [790, "<b>%s1</b><i>%</i> metal cost when constructing or upgrading teleporters ", true]
            , [793, "On Hit: Builds Hype ", true]
            , [794, "<samp>+</samp><b>%s1</b><i>%</i> fire damage resistance while deployed ", true]
            , [795, "<b>%s1</b><i>%</i> damage bonus vs burning players ", true]
            , [797, "Attacks pierce damage resistance effects and bonuses ", true]
            , [799, "Revenge crits are lost on death ", false]
            , [800, "<b>%s1</b><i>%</i> maximum overheal on wearer ", false]
            , [808, "Successive shots become less accurate ", false]
            , [809, "Fires a wide, fixed shot pattern ", true]
            , [810, "Attrib_NoCloakFromAmmo ", false]
            , [811, "Collect the organs of people you hit ", true]
            , [812, "<b>%s1</b><i>%</i> increased air control when blast jumping. ", true]
            , [816, "Normal disguises require (and consume) a full cloak meter ", false]
            , [848, "Spawning and resupply do not affect the Gas meter ", false]
            , [851, "<samp>+</samp><b>%s1</b><i>%</i> faster move speed on wearer ", true]
            , [853, "<b>%s1</b><i>%</i> maximum overheal on wearer ", false]
            , [854, "<b>%s1</b><i>%</i> health from healers on wearer ", false]
            , [855, "Maximum health is drained while item is active ", false]
            , [868, "Critical damage is affected by range ", false]
            , [869, "Minicrits whenever it would normally crit ", false]
            , [870, "Push enemies back when you land (force and radius based on velocity) ", true]
            , [876, "<b>%s1</b><i>%</i> healing effect ", false]
            , [877, "Gain a speed boost when you hit an enemy player ", true]
            , [878, "Gas meter starts empty ", false]
            , [879, "Gas meter builds with damage done and/or time ", true]
            , [880, "<b>%s1</b>-to-1 health-to-metal ratio when repairing buildings ", false]
            , [881, "Носитель теряет <b>%s1</b><i> ед.</i> здоровья в секунду ", false]
            , [2013, "Killstreaker: <b>%s1</b> ", true]
            , [2014, "Sheen: <b>%s1</b> ", true]
            , [2016, "Pages of Tumidum: <b>%s1</b> ", true]
            , [2017, "Pages of Gratanter: <b>%s1</b> ", true]
            , [2018, "Pages of Audere: <b>%s1</b> ", true]
            , [2019, "Pages of Congeriae: <b>%s1</b> ", true]
            , [2020, "Pages of Veteris: <b>%s1</b> ", true]
            , [2025, "Killstreaks Active ", true]
            , [2034, "Melee kills refill <b>%s1</b><i>%</i> of your charge meter. ", true]
            , [2041, "★ Unusual Effect: <b>%s1</b> ", null]
            , [2049, "Third successful punch in a row always crits. ", true]
            , [2053, "Festivized ", null]
            , [2063, "Deals <samp>300%</samp> damage to burning players +50% re-pressurization rate on hit  ", true]
            , [2064, "<samp>-50%</samp> repressurization rate on Alt-Fire ", false]
            , [2067, "Mini-crits burning targets and extinguishes them. Damage increases based on remaining duration of afterburn. Killing blows on burning players grant a speed boost.  ", true]
        ]

















        var Atribute_not_used_or_secret = [
            [7, "Скорость лечения: <b>%s1</b><i>%</i> ", false]
            , [9, "Скорость накопления убер-заряда: <b>%s1</b><i>%</i> ", false]
            , [11, "Сверхлечение: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [12, "Скорость убывания сверхлечения: <samp>+</samp><b>%s1</b><i>%</i> ", false]
            , [13, "Скорость убывания сверхлечения: <samp>-</samp><b>%s1</b><i>%</i> ", true]
            , [14, "Бонус сверхлечения не убывает ", true]
            , [19, "При попадании: <samp>+</samp><b>%s1</b><i>%</i> к наносимому урону ", true]
            , [21, "Урон по негорящим игрокам: <b>%s1</b><i>%</i> ", false]
            , [22, "Без критов по негорящим врагам ", false]
            , [23, "Без сжатого воздуха ", false]
            , [27, "Attrib_AltFire_Disabled ", null]
            , [28, "Без случайных критов ", false]
            , [30, "При убийстве: <samp> +50 ед.</samp>  здоровья находящимся рядом союзникам При убийстве: +10% шанс критов находящимся рядом союзникам  ", null]
            , [39, "Урон по неоглушенным игрокам: <b>%s1</b><i>%</i> ", false]
            , [40, "Нет замедления в режиме прицеливания ", true]
            , [43, "Attrib_Scattergun_NoReloadSingle ", null]
            , [46, "Уменьшение приближения: <b>%s1</b><i>%</i> ", false]
            , [47, "Без заряда ", false]
            , [49, "Блокирует двойной прыжок ", false]
            , [50, "Поглощение <b>%s1</b><i>%</i> урона при нахождении в невидимости ", true]
            , [53, "Wearer cannot ignite ", true]
            , [58, "Наносимый самому себе урон: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [62, "Сопротивление урону от критов: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [63, "Урон, получаемый от критов: <samp>+</samp><b>%s1</b><i>%</i> ", false]
            , [66, "Сопротивление урону от пуль: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [70, "Получаемое при лечении здоровье: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [71, "Урон от догорания: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [73, "Длительность догорания: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [74, "Длительность догорания: <b>%s1</b><i>%</i> ", false]
            , [75, "Скорость передвижения при раскрутке: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [80, "Максимальное кол-во металла: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [81, "Максимальное кол-во металла: <b>%s1</b><i>%</i> ", false]
            , [82, "Длительность невидимости: <samp>-</samp><b>%s1</b><i>%</i> ", false]
            , [84, "Восстановление невидимости: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [85, "Восстановление невидимости: <b>%s1</b><i>%</i> ", false]
            , [90, "Скорость накапливания заряда: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [91, "Скорость накапливания заряда: <samp>-</samp><b>%s1</b><i>%</i> ", false]
            , [94, "Скорость починки увеличивается на <b>%s1</b><i>%</i> ", true]
            , [96, "Перезарядка медленнее на <b>%s1</b><i>%</i> ", false]
            , [98, "При попадании: <b>%s1</b> <samp> ед.</samp>. от здоровья ", false]
            , [99, "Радиус взрыва: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [101, "Дальность полета снаряда: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [102, "Дальность полета снаряда: <b>%s1</b><i>%</i> ", false]
            , [104, "Скорость полета снаряда: <b>%s1</b><i>%</i> ", false]
            , [109, "Из аптечек вы будете получать на <b>%s1</b><i>%</i> меньше здоровья ", false]
            , [110, "При попадании: <samp>+</samp><b>%s1</b> <samp> ед.</samp>. к здоровью ", true]
            , [111, "При попадании: <b>%s1</b> <samp> ед.</samp>. от здоровья ", false]
            , [112, "Восстановление <b>%s1</b><i>%</i> патронов каждые 5 секунд ", true]
            , [113, "Каждые 5 секунд дается металл (<b>%s1</b> <samp> ед.</samp>.) ", true]
            , [116, "Attrib_SoldierBuffType ", true]
            , [117, "Attrib_Dmg_Falloff_Increased ", false]
            , [118, "Урон в радиусе взрыва: <b>%s1</b><i>%</i> ", true]
            , [122, "Attrib_DemoBuffType ", true]
            , [123, "Скорость передвижения при использовании: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [129, "Носитель теряет <b>%s1</b> <samp> ед.</samp>. здоровья в секунду ", false]
            , [130, "Скорость восстановления: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [131, "Скорость восстановления: <samp>-</samp><b>%s1</b><i>%</i> ", false]
            , [132, "Выдано за заслуги перед сообществом ", null]
            , [133, "Медаль #<b>%s1</b> ", null]
            , [140, "Максимальный уровень здоровья: <samp>+</samp><b>%s1</b> <samp> ед.</samp>. ", true]
            , [141, "Это придумал я! ", null]
            , [142, "Код покраски предмета: <b>%s1</b> ", null]
            , [144, "Задает оружию режим #<b>%s1</b> ", null]
            , [145, "<b>%s1</b><i>%</i> damage penalty ", null]
            , [147, "Ключ #<b>%s1</b> ", null]
            , [148, "<samp>-</samp><b>%s1</b> металла к стоимости постройки ", true]
            , [151, "Attrib_Socket ", true]
            , [152, "Custom Texture ", true]
            , [153, "Нельзя передавать ", null]
            , [155, "При ношении маскировка невозможна ", false]
            , [157, "<samp>+</samp><b>%s1</b> сек. к времени маскировки ", false]
            , [159, "<b>%s1</b> сек. к времени мерцания плаща ", false]
            , [160, "Приглушенный звук при выходе из невидимости ", true]
            , [161, "Зона распространения огня: <b>%s1</b><i>%</i> ", false]
            , [162, "Зона распространения огня: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [163, "Дистанция распространения огня: <samp>-</samp><b>%s1</b><i>%</i> ", false]
            , [164, "Дистанция распространения огня: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [165, "Сжатый воздух можно заряжать, чтобы отталкивать врагов дальше ", null]
            , [167, "Attrib_DisguiseDamageReduction ", true]
            , [168, "Невосприимчивость к урону от огня под маскировкой ", true]
            , [169, "<samp>+</samp><b>%s1</b><i>%</i> к сопротивлению урону от турелей ", true]
            , [171, "<b>%s1</b><i>%</i> к потреблению топлива сжатым воздухом ", true]
            , [172, "Куплено: нельзя передавать или перековывать ", null]
            , [173, "Расход топлива огнеметом в секунду: <samp>+</samp><b>%s1</b><i>%</i> ", false]
            , [174, "Расход топлива огнеметом в секунду: <b>%s1</b><i>%</i> ", true]
            , [176, "Невозможность смерти от выстрела в голову ", true]
            , [177, "<samp>-</samp><b>%s1</b><i>%</i> к скорости смены оружия ", false]
            , [178, "<b>%s1</b><i>%</i> к скорости смены оружия ", true]
            , [182, "При попадании: скорость цели снижается на 40% в течение <b>%s1</b> сек. ", true]
            , [184, "Attrib_DuelLoserAccountID ", null]
            , [185, "Дата получения: <b>%s1</b> ", null]
            , [186, "Подарок от: <b>%s1</b> ", true]
            , [188, "При смерти восстанавливается до <b>%s1</b><i>%</i> убер-заряда  ", true]
            , [189, "Attrib_ElevateQuality ", true]
            , [190, "Скорость восстановления здоровья: <samp>+</samp><b>%s1</b> <samp> ед.</samp>. в секунду ", true]
            , [191, "Носитель теряет <b>%s1</b> <samp> ед.</samp>. здоровья в секунду ", false]
            , [194, "Содержит: <b>%s1</b> ", null]
            , [195, "Всегда можно обменять ", false]
            , [196, "Шумелка ", null]
            , [198, "Это особый предмет с Хеллоуина <b>%s1</b> года ", true]
            , [201, "Скорость выполнения насмешки: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [211, "Можно будет передать другим после <b>%s1</b> ", false]
            , [216, "Attrib_Knockback ", true]
            , [219, "<b>%s1</b><i>%</i> damage penalty ", true]
            , [221, "Attrib_DecloakRate ", true]
            , [222, "При попадании в тело: <samp>+</samp><b>%s1</b><i>%</i> к скорости пополнения заряда ", true]
            , [223, "При промахе: <samp>–</samp><b>%s1</b><i>%</i> к скорости пополнения заряда ", false]
            , [227, "Custom Texture ", true]
            , [228, "Сковал: <b>%s1</b> ", true]
            , [230, "Если медик, который лечил вас, погибнет, вы получите <samp> 2</samp>  крита мести  ", true]
            , [232, "Если медик, который лечил вас, погибнет, вы атакуете мини-критами <b>%s1</b> секунд.  ", true]
            , [233, "Когда вас лечит медик, урон от этого оружия увеличивается на <b>%s1</b><i>%</i>  ", true]
            , [234, "Если вас не лечит медик, время переключения оружия на <b>%s1</b><i>%</i> дольше  ", false]
            , [236, "Во время использования: блокирует лечение ", false]
            , [237, "При попадании в голову: <samp>+</samp><b>%s1</b><i>%</i> к скорости пополнения заряда ", true]
            , [239, "<samp>+</samp><b>%s1</b><i>%</i> к скорости накопления убер-заряда при лечении Данный эффект не действует в комнате возрождения  ", true]
            , [240, "<b>%s1</b><i>%</i> к скорости перезарядки при лечении ", true]
            , [241, "Перезарядка медленнее на <b>%s1</b><i>%</i> ", false]
            , [242, "На врага, убившего вашего/nмедика наложится проклятие ", true]
            , [243, "Ярость при промахе: –<b>%s1</b><i>%</i> ", false]
            , [244, "Ярость при попадании: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [245, "При повышении уровня ярости бонус урона возрастает вплоть до <b>%s1</b><i>%</i> ", true]
            , [247, "Наносит урон от столкновения на любом расстоянии ", true]
            , [253, "<samp>+</samp><b>%s1</b> сек. к уходу в невидимость ", false]
            , [255, "<samp>+</samp><b>%s1</b><i>%</i> к силе отталкивания сжатым воздухом ", true]
            , [258, "Подобранное оружие и патроны восполняют здоровье ", true]
            , [260, "Attrib_DeflectionSizeMultiplier ", true]
            , [261, "Код покраски предмета: <b>%s1</b> ", null]
            , [262, "Победитель: <b>%s1</b> <b>%s2</b> ", true]
            , [264, "<b>%s1</b><i>%</i> increased melee attack range ", true]
            , [265, "Attrib_MiniCritAirborneEnemiesDeploy ", true]
            , [266, "Пули пробивают игроков насквозь ", true]
            , [273, "Расходник: усиление критами на <samp> 5 секунд</samp>  (также удваивает скорость стрельбы вашей турели)  ", true]
            , [274, "Расходник: убер-заряд на <samp> 5 секунд</samp>  (также защищает вашу турель от урона)  ", true]
            , [275, "Отсутствует урон при падении с высоты ", true]
            , [276, "Телепорты действуют в обе стороны ", true]
            , [277, "Attrib_MultipleSentries ", true]
            , [279, "Дополнительные боеприпасы: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [286, "Прочность построек: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [287, "Урон турелью: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [288, "Не может быть усилено критами ", false]
            , [289, "Attrib_CenterFireProjectile ", true]
            , [302, "Этот предмет исчезнет <b>%s1</b>. ", null]
            , [310, "Расходник: моментальное перемещение к точке возрождения ", true]
            , [313, "Замедление целей: <b>%s1</b><i>%</i> ", true]
            , [314, "Длительность убер-заряда: <samp>+</samp><b>%s1</b> сек. ", true]
            , [315, "Расходник: моментально восстанавливает запас патронов и перезаряжает оружие ", true]
            , [317, "Attrib_AlternateRocketEffect ", null]
            , [318, "Скорость перезарядки: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [319, "Длительность эффекта: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [320, "Увеличенная длительность и радиус поражения жучка ", true]
            , [321, "Скорость постройки: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [322, "<b>%s1</b><i>%</i> damage penalty ", null]
            , [323, "Пули уничтожают ракеты и гранаты на лету ", true]
            , [324, "Меткость увеличивает повреждения ", true]
            , [325, "Наличность из пачек: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [326, "Высота прыжка: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [327, "Расходник: мгновенно улучшает все постройки до максимального уровня ", true]
            , [335, "Размер обоймы: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [336, "Unable to see enemy health ", false]
            , [339, "При попадании в шпиона: делает его видимым ", true]
            , [340, "При попадании в шпиона: снимает его маскировку ", true]
            , [341, "Эффект Банкате по закалывающему со спины ", true]
            , [343, "Скорострельность турели: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [344, "Радиус действия турели: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [345, "Дальность действия раздатчика: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [351, "Количество дополнительных турелей: <samp>+</samp><b>%s1</b> ", true]
            , [353, "Нельзя переносить постройки ", false]
            , [354, "Оглушает врагов, которые используют это же оружие ", true]
            , [355, "Per Shot Missed: <samp>-</samp><b>%s1</b> ammo ", false]
            , [357, "<samp>+</samp><b>%s1</b><i>%</i> buff duration ", true]
            , [365, "Attrib_SetIcicleKnifeMode ", false]
            , [366, "При попадании: если пояс врага находится на уровне глаз или выше, то цель оглушается на <b>%s1</b> <samp> сек.</samp>   ", true]
            , [372, "Вечные узы верности между <b>%s1</b> ", true]
            , [373, "и <b>%s1</b>, пока смерть не разлучит их. XoXoX ", true]
            , [374, "Можно использовать после: <b>%s1</b> ", false]
            , [375, "<samp>+</samp><b>%s1</b> к ярости при попадании Выполните насмешку для отталкивания врагов при нанесении урона  ", true]
            , [378, "<b>%s1</b><i>%</i> к скорости передвижения при прицеливании ", false]
            , [389, "Выстрелы пробивают несколько врагов ", true]
            , [390, "Выстрелы в голову наносят дополнительно <samp>+</samp><b>%s1</b><i>%</i> урона ", true]
            , [394, "<samp>+</samp><b>%s1</b><i>%</i> faster firing speed ", true]
            , [395, "Увеличенный радиус взрыва и урон врагам поблизости при попадании в голову ", true]
            , [396, "Скорость атаки оружием ближнего боя: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [397, "Пули пробивают насквозь <samp>+</samp><b>%s1</b> врагов ", true]
            , [399, "Позволяет закалывать гигантских роботов в спину с уроном <b>%s1</b><i>%</i> ", true]
            , [402, "Не может быть убит ударом в спину ", true]
            , [403, "<b>%s1</b> активировал(а) командную надбавку ", true]
            , [404, "Использование фляги применит тот же эффект к пациенту ", true]
            , [405, "Attrib_AirBlastVerticalVulnerabilityMultipier ", true]
            , [407, "<samp>100%</samp> крит по замаскированным врагам ", true]
            , [408, "<samp>100%</samp> крит по негорящим врагам ", true]
            , [409, "При убийстве: разразится здоровым смехом ", true]
            , [424, "<b>%s1</b><i>%</i> clip size ", false]
            , [425, "<samp>+</samp><b>%s1</b><i>%</i> sapper damage bonus ", true]
            , [427, "<samp>+</samp><b>%s1</b> health regenerated per second for each active sapper ", true]
            , [428, "<b>%s1</b><i>%</i> sapper health bonus ", true]
            , [429, "Здоровье жучка: <b>%s1</b><i>%</i> ", false]
            , [434, "<b>%s1</b><i>%</i> sapper damage penalty ", false]
            , [437, "<samp>100%</samp> крит по оглушенным врагам ", true]
            , [440, "Размер обоймы: <samp>+</samp><b>%s1</b> ", true]
            , [441, "Attrib_AutoFiresFullClipAllAtOnce ", true]
            , [444, "Блокирует двойной прыжок ", false]
            , [448, "Attrib_PlayerSkinOverride ", true]
            , [453, "Killed Merasmus at level <b>%s1</b> ", true]
            , [465, "Increases teleporter build speed by <b>%s1</b><i>%</i>. ", true]
            , [470, "<b>%s1</b><i>%</i> damage on contact with surfaces ", false]
            , [471, "Generate building rescue energy on damage ", true]
            , [475, "<samp>+</samp><b>%s1</b><i>%</i> projectile speed ", true]
            , [476, "<samp>+</samp><b>%s1</b><i>%</i> damage bonus ", true]
            , [481, "Share Canteens with your heal target. +1 duration, -10 price per point (minimum cost: 5)  ", true]
            , [482, "<samp> +25% </samp> more overheal, <samp> +50%</samp>  longer duration per point ", true]
            , [484, "Syringes deliver a highly concentrated dose of Mad Milk. Duration increases per hit to a max of 4 seconds. ", true]
            , [488, "<samp> +15%</samp>  rocket speed per point.  On direct hits: rocket does maximum damage, stuns target, and blast radius increased <samp> +15%</samp>  per point. ", true]
            , [489, "<samp>+</samp><b>%s1</b><i>%</i> faster move speed on wearer ", true]
            , [490, "<samp>+</samp><b>%s1</b> health regenerated per second on wearer ", true]
            , [491, "<samp>+</samp><b>%s1</b><i>%</i> critical hit damage resistance on wearer ", true]
            , [492, "<samp>+</samp><b>%s1</b><i>%</i> fire damage resistance on wearer ", true]
            , [493, "+25% heal rate for patient, +25% faster revive rate, and +25% self heal rate, per point ", true]
            , [499, "Build energy by healing teammates.  When fully charged, press the Special-Attack key to deploy a frontal projectile shield. ", true]
            , [516, "<b>%s1</b><i>%</i> bullet damage vulnerability on wearer ", false]
            , [517, "<samp>+</samp><b>%s1</b> max health on wearer ", true]
            , [525, "<b>%s1</b><i>%</i> increase in push force taken from damage ", false]
            , [526, "<samp>+</samp><b>%s1</b><i>%</i> bonus healing from all sources ", true]
            , [532, "Hype Decays Over Time. ", false]
            , [534, "<b>%s1</b><i>%</i> reduction in airblast vulnerability ", false]
            , [535, "<b>%s1</b><i>%</i> increase in push force taken from damage ", false]
            , [540, "Attrib_AddHeadOnHit ", true]
            , [554, "Revive Teammates ", true]
            , [606, "Attrib_TauntSoundSuccess ", true]
            , [607, "Attrib_PhaseCloak ", true]
            , [608, "Attrib_TauntSoundSuccess ", true]
            , [609, "Attrib_PhaseCloak ", true]
            , [610, "<b>%s1</b><i>%</i> increased air control. ", true]
            , [612, "Attrib_RocketLaunchImpulse ", true]
            , [613, "On Kill: Gain Mini-crits for <b>%s1</b> seconds. ", true]
            , [614, "No metal from dispensers when active. ", false]
            , [630, "Attrib_BackHeadshot ", true]
            , [632, "Fires 3 barrages while explosive jumping ", true]
            , [634, "Attrib_AirJumpOnAttack ", true]
            , [637, "Zoom does not affect charge ", true]
            , [638, "<samp>100%</samp> critical hits burning players from behind. Mini-crits burning players from the front.  ", true]
            , [643, "<b>%s1</b><i>%</i> blast damage from rocket jumps ", true]
            , [647, "Fires tracer rounds ", false]
            , [651, "Fire rate increases as health decreases ", true]
            , [669, "Stickybombs fizzle <b>%s1</b> seconds after landing ", false]
            , [674, "Attrib_Class_Select_Override_VCD ", true]
            , [684, "<b>%s1</b><i>%</i> damage on grenades that explode on timer ", false]
            , [708, "Hold fire to load up to 4 shells ", true]
            , [709, "Weapon spread increases as health decreases ", false]
            , [710, "Attrib_AutoFiresFullClipNegative ", false]
            , [711, "Attrib_AutoFiresWhenFull ", false]
            , [730, "Attrib_ElevateQuality ", true]
            , [734, "<b>%s1</b><i>%</i> less healing from all sources ", false]
            , [748, "Items Traded in&nbsp;: <b>%s1</b> ", null]
            , [774, "<b>%s1</b> sec decrease in charge duration ", false]
            , [776, "<b>%s1</b><i>%</i> decrease in charge impact damage ", false]
            , [777, "Not Tradable, Marketable, Usable in Crafting, or Gift Wrappable ", null]
            , [791, "Attrib_DamageBlastPush ", true]
            , [807, "Collect the organs of your victims ", true]
            , [813, "Immune to push force from damage and airblast when spun up ", true]
            , [822, "Attrib_AirblastDestroyProjectile ", null]
            , [852, "<b>%s1</b><i>%</i> damage vulnerability on wearer ", false]
            , [871, "Stun enemies when you land ", true]
            , [872, "Able to re-launch while already in-flight ", true]
            , [874, "<b>%s1</b><i>%</i> faster recharge rate ", "no img"]
            , [875, "Ignited enemies explode ", "no img"]
            , [1000, "Урон: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [1001, "Сопротивление урону от пуль: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [1002, "Скорость передвижения: <samp>+</samp><b>%s1</b><i>%</i> ", true]
            , [1003, "Скорость восстановления здоровья: <samp>+</samp><b>%s1</b> <samp> ед.</samp>. в секунду ", true]
            , [1004, "<b>%s1</b> ", true]
            , [1005, "<b>%s1</b> ", true]
            , [1006, "Voices From Below ", true]
            , [1007, "Pumpkin Bombs ", true]
            , [1008, "Halloween Fire ", true]
            , [1009, "Exorcism ", true]
            , [2043, "<b>%s1</b><i>%</i> slower upgrade rate ", false]
            , [2048, "Disables double jump ", false]

        ]





        var Used = AllAtribute

        var UsedSecert = true
        var TryMax = 25
        var d = 0
        var d2 = ''
        var gg = 0
        var checkbox = true
       var WeaponName = {
        13: { name: 'Scattergun',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        45: { name: 'Force-A-Nature',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        200: { name: 'Scattergun (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        220: { name: 'The Shortstop',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/84/Item_icon_Shortstop.png/200px-Item_icon_Shortstop.png' },
        448: { name: 'The Soda Popper',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f1/Item_icon_Soda_Popper.png/200px-Item_icon_Soda_Popper.png' },
        669: { name: 'Festive Scattergun',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/06/Backpack_Festive_Scattergun.png/90px-Backpack_Festive_Scattergun.png' },
        772: { name: "Baby Face's Blaster",  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e6/Item_icon_Baby_Face%27s_Blaster.png/200px-Item_icon_Baby_Face%27s_Blaster.png' },
        799: { name: 'Silver Botkiller Scattergun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        808: { name: 'Gold Botkiller Scattergun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        888: { name: 'Rust Botkiller Scattergun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        897: { name: 'Blood Botkiller Scattergun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        906: { name: 'Carbonado Botkiller Scattergun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        915: { name: 'Diamond Botkiller Scattergun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        964: { name: 'Silver Botkiller Scattergun Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        973: { name: 'Gold Botkiller Scattergun Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Item_icon_Scattergun.png/200px-Item_icon_Scattergun.png' },
        1078: { name: 'Festive Force-A-Nature',  href: 'https://static.wikia.nocookie.net/teamfortress/images/3/3f/Item_icon_Festive_Force-A-Nature.png/revision/latest/scale-to-width-down/185?cb=20140411115313' },
        1103: { name: 'The Back Scatter',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/11/Item_icon_Back_Scatter.png/200px-Item_icon_Back_Scatter.png' },
        15002: { name: 'Night Terror(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/01/Backpack_Night_Terror_Scattergun_Factory_New.png/200px-Backpack_Night_Terror_Scattergun_Factory_New.png' },
        15015: { name: 'Tartan Torpedo(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1b/Backpack_Tartan_Torpedo_Scattergun_Factory_New.png/200px-Backpack_Tartan_Torpedo_Scattergun_Factory_New.png' },
        15021: { name: 'Country Crusher(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/3a/Backpack_Country_Crusher_Scattergun_Factory_New.png/200px-Backpack_Country_Crusher_Scattergun_Factory_New.png' },
        15029: { name: 'Backcountry Blaster(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e0/Backpack_Backcountry_Blaster_Scattergun_Factory_New.png/200px-Backpack_Backcountry_Blaster_Scattergun_Factory_New.png' },
        15036: { name: 'Spruce Deuce(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/20/Backpack_Spruce_Deuce_Scattergun_Factory_New.png/200px-Backpack_Spruce_Deuce_Scattergun_Factory_New.png' },
        15053: { name: 'Current Event(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e5/Backpack_Current_Event_Scattergun_Factory_New.png/200px-Backpack_Current_Event_Scattergun_Factory_New.png' },
        15065: { name: 'Macabre Web(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/26/Backpack_Macabre_Web_Scattergun_Factory_New.png/200px-Backpack_Macabre_Web_Scattergun_Factory_New.png' },
        15069: { name: 'Nutcracker(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7e/Backpack_Nutcracker_Scattergun_Factory_New.png/200px-Backpack_Nutcracker_Scattergun_Factory_New.png' },
        15106: { name: 'Blue Mew(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/93/Backpack_Blue_Mew_Scattergun_Factory_New.png/200px-Backpack_Blue_Mew_Scattergun_Factory_New.png' },
        15107: { name: 'Flower Power(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d1/Backpack_Flower_Power_Scattergun_Factory_New.png/200px-Backpack_Flower_Power_Scattergun_Factory_New.png' },
        15108: { name: 'Shot to Hell(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/96/Backpack_Shot_to_Hell_Scattergun_Factory_New.png/200px-Backpack_Shot_to_Hell_Scattergun_Factory_New.png' },
        15131: { name: 'Coffin Nail(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ed/Backpack_Coffin_Nail_Scattergun_Factory_New.png/200px-Backpack_Coffin_Nail_Scattergun_Factory_New.png' },
        15151: { name: 'Killer Bee(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c3/Backpack_Killer_Bee_Scattergun_Factory_New.png/200px-Backpack_Killer_Bee_Scattergun_Factory_New.png' },
        15157: { name: 'Corsair(Scattergun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9b/Backpack_Corsair_Scattergun_Factory_New.png/200px-Backpack_Corsair_Scattergun_Factory_New.png' },
        23: { name: "Scout's Pistol",  href: 'https://wiki.teamfortress.com/w/images/thumb/5/52/Item_icon_Pistol.png/200px-Item_icon_Pistol.png' },
        46: { name: 'Bonk! Atomic Punch',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/8f/Item_icon_Bonk%21_Atomic_Punch.png/200px-Item_icon_Bonk%21_Atomic_Punch.png' },
        160: { name: 'Vintage Lugermorph',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/86/Item_icon_Lugermorph.png/200px-Item_icon_Lugermorph.png' },
        163: { name: 'Crit-a-Cola',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/ae/Item_icon_Crit-a-Cola.png/200px-Item_icon_Crit-a-Cola.png' },
        209: { name: 'Pistol (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/52/Item_icon_Pistol.png/200px-Item_icon_Pistol.png' },
        222: { name: 'Mad Milk',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/56/Item_icon_Mad_Milk.png/200px-Item_icon_Mad_Milk.png' },
        294: { name: 'Lugermorph',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/86/Item_icon_Lugermorph.png/200px-Item_icon_Lugermorph.png' },
        449: { name: 'The Winger',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4e/Item_icon_Winger.png/200px-Item_icon_Winger.png' },
        773: { name: "Pretty Boy's Pocket Pistol",  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f6/Item_icon_Pretty_Boy%27s_Pocket_Pistol.png/200px-Item_icon_Pretty_Boy%27s_Pocket_Pistol.png' },
        812: { name: 'The Flying Guillotine',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5a/Item_icon_Flying_Guillotine.png/200px-Item_icon_Flying_Guillotine.png' },
        833: { name: 'The Flying Guillotine (Genuine)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5a/Item_icon_Flying_Guillotine.png/200px-Item_icon_Flying_Guillotine.png' },
        1121: { name: 'Mutated Milk',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/bd/Item_icon_Mutated_Milk.png/200px-Item_icon_Mutated_Milk.png' },
        1145: { name: 'Festive Bonk!',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/8f/Item_icon_Bonk%21_Atomic_Punch.png/200px-Item_icon_Bonk%21_Atomic_Punch.png' },
        15013: { name: 'Red Rock Roscoe(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Backpack_Red_Rock_Roscoe_Pistol_Factory_New.png/200px-Backpack_Red_Rock_Roscoe_Pistol_Factory_New.png' },
        15018: { name: 'Homemade Heater(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cf/Backpack_Homemade_Heater_Pistol_Factory_New.png/200px-Backpack_Homemade_Heater_Pistol_Factory_New.png' },
        15035: { name: 'Hickory Holepuncher(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/52/Item_icon_Pistol.png/200px-Item_icon_Pistol.png' },
        15041: { name: 'Local Hero(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/45/Backpack_Local_Hero_Pistol_Factory_New.png/200px-Backpack_Local_Hero_Pistol_Factory_New.png' },
        15046: { name: 'Black Dahlia(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/68/Backpack_Black_Dahlia_Pistol_Factory_New.png/200px-Backpack_Black_Dahlia_Pistol_Factory_New.png' },
        15056: { name: 'Sandstone Special(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/53/Backpack_Sandstone_Special_Pistol_Factory_New.png/200px-Backpack_Sandstone_Special_Pistol_Factory_New.png' },
        15060: { name: 'Macabre Web(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c7/Backpack_Macabre_Web_Pistol_Factory_New.png/200px-Backpack_Macabre_Web_Pistol_Factory_New.png' },
        15061: { name: 'Nutcracker(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/3b/Backpack_Nutcracker_Pistol_Factory_New.png/200px-Backpack_Nutcracker_Pistol_Factory_New.png' },
        15100: { name: 'Blue Mew(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f3/Backpack_Blue_Mew_Pistol_Factory_New.png/200px-Backpack_Blue_Mew_Pistol_Factory_New.png' },
        15101: { name: 'Brain Candy(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/ca/Backpack_Brain_Candy_Pistol_Factory_New.png/200px-Backpack_Brain_Candy_Pistol_Factory_New.png' },
        15102: { name: 'Shot to Hell(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/68/Backpack_Shot_to_Hell_Pistol_Factory_New.png/200px-Backpack_Shot_to_Hell_Pistol_Factory_New.png' },
        15126: { name: 'Dressed To Kill(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b2/Backpack_Dressed_to_Kill_Pistol_Factory_New.png/200px-Backpack_Dressed_to_Kill_Pistol_Factory_New.png' },
        15148: { name: 'Blitzkrieg(Pistol)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/37/Backpack_Blitzkrieg_Pistol_Factory_New.png/200px-Backpack_Blitzkrieg_Pistol_Factory_New.png' },
        30666: { name: 'The C.A.P.P.E.R.',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a6/Item_icon_C.A.P.P.E.R.png/200px-Item_icon_C.A.P.P.E.R.png' },
        0: { name: 'Bat',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b5/Item_icon_Bat.png/200px-Item_icon_Bat.png' },
        44: { name: 'The Sandman',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/70/Item_icon_Sandman.png/200px-Item_icon_Sandman.png' },
        190: { name: 'Bat (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b5/Item_icon_Bat.png/200px-Item_icon_Bat.png' },
        221: { name: 'The Holy Mackerel',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/86/Item_icon_Holy_Mackerel.png/200px-Item_icon_Holy_Mackerel.png' },
        264: { name: 'Frying Pan',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c1/Item_icon_Frying_Pan.png/200px-Item_icon_Frying_Pan.png' },
        317: { name: 'The Candy Cane',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/05/Item_icon_Candy_Cane.png/200px-Item_icon_Candy_Cane.png' },
        325: { name: 'The Boston Basher',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b5/Item_icon_Boston_Basher.png/200px-Item_icon_Boston_Basher.png' },
        349: { name: 'Sun-on-a-Stick',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/06/Item_icon_Sun-on-a-Stick.png/200px-Item_icon_Sun-on-a-Stick.png' },
        355: { name: "The Fan O'War",  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f4/Item_icon_Fan_O%27War.png/200px-Item_icon_Fan_O%27War.png' },
        423: { name: 'Saxxy',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/18/Item_icon_Saxxy.png/200px-Item_icon_Saxxy.png' },
        450: { name: 'The Atomizer',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/29/Item_icon_Atomizer.png/200px-Item_icon_Atomizer.png' },
        452: { name: 'Three-Rune Blade',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f6/Item_icon_Three-Rune_Blade.png/200px-Item_icon_Three-Rune_Blade.png' },
        474: { name: 'The Conscientious Objector',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cb/Item_icon_Conscientious_Objector.png/200px-Item_icon_Conscientious_Objector.png' },
        572: { name: 'Unarmed Combat',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/96/Item_icon_Unarmed_Combat.png/200px-Item_icon_Unarmed_Combat.png' },
        648: { name: 'The Wrap Assassin',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6b/Item_icon_Wrap_Assassin.png/200px-Item_icon_Wrap_Assassin.png' },
        660: { name: 'Festive Bat',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b5/Item_icon_Bat.png/200px-Item_icon_Bat.png' },
        880: { name: 'The Freedom Staff',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/28/Item_icon_Freedom_Staff.png/200px-Item_icon_Freedom_Staff.png' },
        939: { name: 'The Bat Outta Hell',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c5/Item_icon_Bat_Outta_Hell.png/200px-Item_icon_Bat_Outta_Hell.png' },
        954: { name: 'The Memory Maker',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/93/Item_icon_Memory_Maker.png/200px-Item_icon_Memory_Maker.png' },
        999: { name: 'Festive Holy Mackerel',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/86/Item_icon_Holy_Mackerel.png/200px-Item_icon_Holy_Mackerel.png' },
        1013: { name: 'The Ham Shank',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6a/Item_icon_Ham_Shank.png/200px-Item_icon_Ham_Shank.png' },
        1071: { name: 'Gold Frying Pan',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/8f/Item_icon_Golden_Frying_Pan.png/200px-Item_icon_Golden_Frying_Pan.png' },
        1127: { name: 'The Crossing Guard',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/8c/Item_icon_Crossing_Guard.png/200px-Item_icon_Crossing_Guard.png' },
        30667: { name: 'Batsaber',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ef/Item_icon_Batsaber.png/200px-Item_icon_Batsaber.png' },
        30758: { name: 'Prinny Machete',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ef/Item_icon_Prinny_Machete.png/200px-Item_icon_Prinny_Machete.png' },
        18: { name: 'Rocket Launcher',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Rocket_Launcher.png/200px-Item_icon_Rocket_Launcher.png' },
        127: { name: 'The Direct Hit',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e7/Item_icon_Direct_Hit.png/200px-Item_icon_Direct_Hit.png' },
        205: { name: 'Rocket Launcher (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Rocket_Launcher.png/200px-Item_icon_Rocket_Launcher.png' },
        228: { name: 'The Black Box',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d2/Item_icon_Black_Box.png/200px-Item_icon_Black_Box.png' },
        237: { name: 'Rocket Jumper',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/53/Item_icon_Rocket_Jumper.png/200px-Item_icon_Rocket_Jumper.png' },
        414: { name: 'The Liberty Launcher',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/24/Item_icon_Liberty_Launcher.png/200px-Item_icon_Liberty_Launcher.png' },
        441: { name: 'The Cow Mangler 5000',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/46/Item_icon_Cow_Mangler_5000.png/200px-Item_icon_Cow_Mangler_5000.png' },
        513: { name: 'The Original',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/88/Item_icon_Original.png/200px-Item_icon_Original.png' },
        658: { name: 'Festive Rocket Launcher',  href: 'https://static.wikia.nocookie.net/teamfortress/images/f/fb/Item_icon_Festive_Rocket_Launcher.png/revision/latest/scale-to-width-down/185?cb=20140411120150' },
        730: { name: "The Beggar's Bazooka",  href: 'https://wiki.teamfortress.com/w/images/thumb/7/77/Item_icon_Beggar%27s_Bazooka.png/200px-Item_icon_Beggar%27s_Bazooka.png' },
        800: { name: 'Silver Botkiller Rocket Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Rocket_Launcher.png/200px-Item_icon_Rocket_Launcher.png' },
        809: { name: 'Gold Botkiller Rocket Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Rocket_Launcher.png/200px-Item_icon_Rocket_Launcher.png' },
        889: { name: 'Rust Botkiller Rocket Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Rocket_Launcher.png/200px-Item_icon_Rocket_Launcher.png' },
        898: { name: 'Blood Botkiller Rocket Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Rocket_Launcher.png/200px-Item_icon_Rocket_Launcher.png' },
        907: { name: 'Carbonado Botkiller Rocket Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Rocket_Launcher.png/200px-Item_icon_Rocket_Launcher.png' },
        916: { name: 'Diamond Botkiller Rocket Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Rocket_Launcher.png/200px-Item_icon_Rocket_Launcher.png' },
        965: { name: 'Silver Botkiller Rocket Launcher Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Rocket_Launcher.png/200px-Item_icon_Rocket_Launcher.png' },
        974: { name: 'Gold Botkiller Rocket Launcher Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Rocket_Launcher.png/200px-Item_icon_Rocket_Launcher.png' },
        1085: { name: 'Festive Black Box',  href: 'https://static.wikia.nocookie.net/teamfortress/images/a/aa/Item_icon_Festive_Black_Box.png/revision/latest/scale-to-width-down/185?cb=20140411120322' },
        1104: { name: 'The Air Strike',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f8/Item_icon_Air_Strike.png/200px-Item_icon_Air_Strike.png' },
        15006: { name: 'Woodland Warrior(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a4/Backpack_Woodland_Warrior_Rocket_Launcher_Factory_New.png/200px-Backpack_Woodland_Warrior_Rocket_Launcher_Factory_New.png' },
        15014: { name: 'Sand Cannon(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/aa/Backpack_Sand_Cannon_Rocket_Launcher_Factory_New.png/200px-Backpack_Sand_Cannon_Rocket_Launcher_Factory_New.png' },
        15028: { name: 'American Pastoral(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f9/Backpack_American_Pastoral_Rocket_Launcher_Factory_New.png/200px-Backpack_American_Pastoral_Rocket_Launcher_Factory_New.png' },
        15043: { name: 'Smalltown Bringdown(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/41/Backpack_Smalltown_Bringdown_Rocket_Launcher_Factory_New.png/200px-Backpack_Smalltown_Bringdown_Rocket_Launcher_Factory_New.png' },
        15052: { name: 'Shell Shocker(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/bc/Backpack_Shell_Shocker_Rocket_Launcher_Factory_New.png/200px-Backpack_Shell_Shocker_Rocket_Launcher_Factory_New.png' },
        15057: { name: 'Aqua Marine(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6d/Backpack_Aqua_Marine_Rocket_Launcher_Factory_New.png/200px-Backpack_Aqua_Marine_Rocket_Launcher_Factory_New.png' },
        15081: { name: 'Autumn(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/06/Backpack_Autumn_Rocket_Launcher_Factory_New.png/200px-Backpack_Autumn_Rocket_Launcher_Factory_New.png' },
        15104: { name: 'Blue Mew(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/ce/Backpack_Blue_Mew_Rocket_Launcher_Factory_New.png/200px-Backpack_Blue_Mew_Rocket_Launcher_Factory_New.png' },
        15105: { name: 'Brain Candy(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/3f/Backpack_Brain_Candy_Rocket_Launcher_Factory_New.png/200px-Backpack_Brain_Candy_Rocket_Launcher_Factory_New.png' },
        15129: { name: 'Coffin Nail(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5e/Backpack_Coffin_Nail_Rocket_Launcher_Factory_New.png/200px-Backpack_Coffin_Nail_Rocket_Launcher_Factory_New.png' },
        15130: { name: "High Roller's(Rocket Launcher)",  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f2/Backpack_High_Roller%27s_Rocket_Launcher_Factory_New.png/200px-Backpack_High_Roller%27s_Rocket_Launcher_Factory_New.png' },
        15150: { name: 'Warhawk(Rocket Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/bc/Backpack_Warhawk_Rocket_Launcher_Factory_New.png/200px-Backpack_Warhawk_Rocket_Launcher_Factory_New.png' },
        10: { name: "Soldier's Shotgun",  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5f/Item_icon_Shotgun.png/200px-Item_icon_Shotgun.png' },
        129: { name: 'The Buff Banner',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Buff_Banner.png/200px-Item_icon_Buff_Banner.png' },
        133: { name: 'Gunboats',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/0c/Item_icon_Gunboats.png/200px-Item_icon_Gunboats.png' },
        199: { name: 'Shotgun (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5f/Item_icon_Shotgun.png/200px-Item_icon_Shotgun.png' },
        226: { name: "The Battalion's Backup",  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d8/Item_icon_Battalion%27s_Backup.png/200px-Item_icon_Battalion%27s_Backup.png' },
        354: { name: 'The Concheror',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7e/Item_icon_Concheror.png/200px-Item_icon_Concheror.png' },
        415: { name: 'The Reserve Shooter',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/34/Item_icon_Reserve_Shooter.png/200px-Item_icon_Reserve_Shooter.png' },
        442: { name: 'The Righteous Bison',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1d/Item_icon_Righteous_Bison.png/200px-Item_icon_Righteous_Bison.png' },
        444: { name: 'The Mantreads',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6a/Item_icon_Mantreads.png/200px-Item_icon_Mantreads.png' },
        1001: { name: 'Festive Buff Banner',  href: 'https://static.wikia.nocookie.net/teamfortress/images/c/cd/Item_icon_Festive_Buff_Banner.png/revision/latest/scale-to-width-down/180?cb=20140411120212' },
        1101: { name: 'The B.A.S.E. Jumper',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b2/Item_icon_B.A.S.E._Jumper.png/200px-Item_icon_B.A.S.E._Jumper.png' },
        1141: { name: 'Festive Shotgun',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5f/Item_icon_Shotgun.png/200px-Item_icon_Shotgun.png' },
        15003: { name: 'Backwoods Boomstick(Shotgun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cf/Backpack_Backwoods_Boomstick_Shotgun_Factory_New.png/200px-Backpack_Backwoods_Boomstick_Shotgun_Factory_New.png' },
        15016: { name: 'Rustic Ruiner(Shotgun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/70/Backpack_Rustic_Ruiner_Shotgun_Factory_New.png/200px-Backpack_Rustic_Ruiner_Shotgun_Factory_New.png' },
        15044: { name: 'Civic Duty(Shotgun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/da/Backpack_Civic_Duty_Shotgun_Factory_New.png/200px-Backpack_Civic_Duty_Shotgun_Factory_New.png' },
        15047: { name: 'Lightning Rod(Shotgun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/70/Backpack_Lightning_Rod_Shotgun_Factory_New.png/200px-Backpack_Lightning_Rod_Shotgun_Factory_New.png' },
        15085: { name: 'Autumn(Shotgun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d9/Backpack_Autumn_Shotgun_Factory_New.png/200px-Backpack_Autumn_Shotgun_Factory_New.png' },
        15109: { name: 'Flower Power(Shotgun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/71/Backpack_Flower_Power_Shotgun_Factory_New.png/200px-Backpack_Flower_Power_Shotgun_Factory_New.png' },
        15132: { name: 'Coffin Nail(Shotgun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/76/Backpack_Coffin_Nail_Shotgun_Factory_New.png/200px-Backpack_Coffin_Nail_Shotgun_Factory_New.png' },
        15133: { name: 'Dressed to Kill(Shotgun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/91/Backpack_Dressed_to_Kill_Shotgun_Factory_New.png/200px-Backpack_Dressed_to_Kill_Shotgun_Factory_New.png' },
        15152: { name: 'Red Bear(Shotgun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7a/Backpack_Red_Bear_Shotgun_Factory_New.png/200px-Backpack_Red_Bear_Shotgun_Factory_New.png' },
        6: { name: 'Shovel',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/73/Item_icon_Shovel.png/200px-Item_icon_Shovel.png' },
        128: { name: 'The Equalizer',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/ba/Item_icon_Equalizer.png/200px-Item_icon_Equalizer.png' },
        154: { name: 'The Pain Train',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4b/Item_icon_Pain_Train.png/200px-Item_icon_Pain_Train.png' },
        196: { name: 'Shovel (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/73/Item_icon_Shovel.png/200px-Item_icon_Shovel.png' },
        264: { name: 'Frying Pan',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c1/Item_icon_Frying_Pan.png/200px-Item_icon_Frying_Pan.png' },
        357: { name: 'The Half-Zatoichi',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a9/Item_icon_Half-Zatoichi.png/200px-Item_icon_Half-Zatoichi.png' },
        416: { name: 'The Market Gardener',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/ac/Item_icon_Market_Gardener.png/200px-Item_icon_Market_Gardener.png' },
        447: { name: 'The Disciplinary Action',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cf/Item_icon_Disciplinary_Action.png/200px-Item_icon_Disciplinary_Action.png' },
        775: { name: 'The Escape Plan',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/0c/Item_icon_Escape_Plan.png/200px-Item_icon_Escape_Plan.png' },
        21: { name: 'Flame Thrower',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Flame_Thrower.png/200px-Item_icon_Flame_Thrower.png' },
        40: { name: 'The Backburner',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5d/Item_icon_Backburner.png/200px-Item_icon_Backburner.png' },
        208: { name: 'Flame Thrower (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Flame_Thrower.png/200px-Item_icon_Flame_Thrower.png' },
        215: { name: 'The Degreaser',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/94/Item_icon_Degreaser.png/200px-Item_icon_Degreaser.png' },
        594: { name: 'The Phlogistinator',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/22/Item_icon_Phlogistinator.png/200px-Item_icon_Phlogistinator.png' },
        659: { name: 'Festive Flame Thrower',  href: 'https://static.wikia.nocookie.net/teamfortress/images/5/54/Item_icon_Festive_Flamethrower.png/revision/latest/scale-to-width-down/512?cb=20140411120456' },
        741: { name: 'The Rainblower',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/3c/Item_icon_Rainblower.png/200px-Item_icon_Rainblower.png' },
        798: { name: 'Silver Botkiller Flame Thrower Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Flame_Thrower.png/200px-Item_icon_Flame_Thrower.png' },
        807: { name: 'Gold Botkiller Flame Thrower Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Flame_Thrower.png/200px-Item_icon_Flame_Thrower.png' },
        887: { name: 'Rust Botkiller Flame Thrower Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Flame_Thrower.png/200px-Item_icon_Flame_Thrower.png' },
        896: { name: 'Blood Botkiller Flame Thrower Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Flame_Thrower.png/200px-Item_icon_Flame_Thrower.png' },
        905: { name: 'Carbonado Botkiller Flame Thrower Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Flame_Thrower.png/200px-Item_icon_Flame_Thrower.png' },
        914: { name: 'Diamond Botkiller Flame Thrower Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Flame_Thrower.png/200px-Item_icon_Flame_Thrower.png' },
        963: { name: 'Silver Botkiller Flame Thrower Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Flame_Thrower.png/200px-Item_icon_Flame_Thrower.png' },
        972: { name: 'Gold Botkiller Flame Thrower Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Flame_Thrower.png/200px-Item_icon_Flame_Thrower.png' },
        1146: { name: 'Festive Backburner',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5d/Item_icon_Backburner.png/200px-Item_icon_Backburner.png' },
        1178: { name: "Dragon's Fury",  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1f/Item_icon_Dragon%27s_Fury.png/200px-Item_icon_Dragon%27s_Fury.png' },
        15005: { name: 'Forest Fire(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/bc/Backpack_Forest_Fire_Flame_Thrower_Factory_New.png/200px-Backpack_Forest_Fire_Flame_Thrower_Factory_New.png' },
        15017: { name: 'Barn Burner(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/49/Backpack_Barn_Burner_Flame_Thrower_Factory_New.png/200px-Backpack_Barn_Burner_Flame_Thrower_Factory_New.png' },
        15030: { name: 'Bovine Blazemaker(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a8/Backpack_Bovine_Blazemaker_Flame_Thrower_Factory_New.png/200px-Backpack_Bovine_Blazemaker_Flame_Thrower_Factory_New.png' },
        15034: { name: 'Earth, Sky and Fire(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1e/Backpack_Earth%2C_Sky_and_Fire_Flame_Thrower_Factory_New.png/200px-Backpack_Earth%2C_Sky_and_Fire_Flame_Thrower_Factory_New.png' },
        15049: { name: 'Flash Fryer(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b9/Backpack_Flash_Fryer_Flame_Thrower_Factory_New.png/200px-Backpack_Flash_Fryer_Flame_Thrower_Factory_New.png' },
        15054: { name: 'Turbine Torcher(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/05/Backpack_Turbine_Torcher_Flame_Thrower_Factory_New.png/200px-Backpack_Turbine_Torcher_Flame_Thrower_Factory_New.png' },
        15066: { name: 'Autumn(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Backpack_Autumn_Flame_Thrower_Factory_New.png/200px-Backpack_Autumn_Flame_Thrower_Factory_New.png' },
        15067: { name: 'Pumpkin Patch(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e4/Backpack_Pumpkin_Patch_Flame_Thrower_Factory_New.png/200px-Backpack_Pumpkin_Patch_Flame_Thrower_Factory_New.png' },
        15068: { name: 'Nutcracker(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/0b/Backpack_Nutcracker_Flame_Thrower_Factory_New.png/200px-Backpack_Nutcracker_Flame_Thrower_Factory_New.png' },
        15089: { name: 'Balloonicorn(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d8/Backpack_Balloonicorn_Flame_Thrower_Factory_New.png/200px-Backpack_Balloonicorn_Flame_Thrower_Factory_New.png' },
        15090: { name: 'Rainbow(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b5/Backpack_Rainbow_Flame_Thrower_Factory_New.png/200px-Backpack_Rainbow_Flame_Thrower_Factory_New.png' },
        15115: { name: 'Coffin Nail(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a6/Backpack_Coffin_Nail_Flame_Thrower_Factory_New.png/200px-Backpack_Coffin_Nail_Flame_Thrower_Factory_New.png' },
        15141: { name: 'Warhawk(Flame Thrower)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/33/Backpack_Warhawk_Flame_Thrower_Factory_New.png/200px-Backpack_Warhawk_Flame_Thrower_Factory_New.png' },
        30474: { name: 'Nostromo Napalmer',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d3/Item_icon_Nostromo_Napalmer.png/200px-Item_icon_Nostromo_Napalmer.png' },
        12: { name: "Pyro's Shotgun",  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5f/Item_icon_Shotgun.png/200px-Item_icon_Shotgun.png' },
        39: { name: 'The Flare Gun',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7b/Item_icon_Flare_Gun.png/200px-Item_icon_Flare_Gun.png' },
        351: { name: 'The Detonator',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/53/Item_icon_Detonator.png/200px-Item_icon_Detonator.png' },
        415: { name: 'The Reserve Shooter',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/34/Item_icon_Reserve_Shooter.png/200px-Item_icon_Reserve_Shooter.png' },
        595: { name: 'The Manmelter',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9d/Item_icon_Manmelter.png/200px-Item_icon_Manmelter.png' },
        740: { name: 'The Scorch Shot',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/be/Item_icon_Scorch_Shot.png/200px-Item_icon_Scorch_Shot.png' },
        1081: { name: 'Festive Flare Gun',  href: 'https://static.wikia.nocookie.net/teamfortress/images/5/5c/Item_icon_Festive_Flare_Gun.png/revision/latest/scale-to-width-down/512?cb=20140411120529' },
        1153: { name: 'Panic Attack',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/be/Item_icon_Panic_Attack.png/200px-Item_icon_Panic_Attack.png' },
        1179: { name: 'Thermal Thruster',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/00/Item_icon_Thermal_Thruster.png/200px-Item_icon_Thermal_Thruster.png' },
        1180: { name: 'Gas Passer',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/0e/Item_icon_Gas_Passer.png/200px-Item_icon_Gas_Passer.png' },
        2: { name: 'Fire Axe',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9f/Item_icon_Fire_Axe.png/200px-Item_icon_Fire_Axe.png' },
        38: { name: 'The Axtinguisher',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c9/Item_icon_Axtinguisher.png/200px-Item_icon_Axtinguisher.png' },
        153: { name: 'Homewrecker',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Homewrecker.png/200px-Item_icon_Homewrecker.png' },
        192: { name: 'Fire Axe (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9f/Item_icon_Fire_Axe.png/200px-Item_icon_Fire_Axe.png' },
        214: { name: 'The Powerjack',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cf/Item_icon_Powerjack.png/200px-Item_icon_Powerjack.png' },
        326: { name: 'The Back Scratcher',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/48/Item_icon_Back_Scratcher.png/200px-Item_icon_Back_Scratcher.png' },
        348: { name: 'Sharpened Volcano Fragment',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/ac/Item_icon_Sharpened_Volcano_Fragment.png/200px-Item_icon_Sharpened_Volcano_Fragment.png' },
        457: { name: 'The Postal Pummeler',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/2d/Item_icon_Postal_Pummeler.png/200px-Item_icon_Postal_Pummeler.png' },
        466: { name: 'The Maul',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/2e/Item_icon_Maul.png/200px-Item_icon_Maul.png' },
        593: { name: 'The Third Degree',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/91/Item_icon_Third_Degree.png/200px-Item_icon_Third_Degree.png' },
        739: { name: 'The Lollichop',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/65/Item_icon_Lollichop.png/200px-Item_icon_Lollichop.png' },
        813: { name: 'Neon Annihilator',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e9/Item_icon_Neon_Annihilator.png/200px-Item_icon_Neon_Annihilator.png' },
        834: { name: 'Neon Annihilator (Genuine)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e9/Item_icon_Neon_Annihilator.png/200px-Item_icon_Neon_Annihilator.png' },
        1000: { name: 'The Festive Axtinguisher',  href: 'https://static.wikia.nocookie.net/teamfortress/images/b/b4/Item_icon_Festive_Axtinguisher.png/revision/latest/scale-to-width-down/185?cb=20140411120516' },
        1123: { name: 'The Necro Smasher',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1a/Item_icon_Necro_Smasher.png/200px-Item_icon_Necro_Smasher.png' },
        1181: { name: 'Hot Hand',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f6/Item_icon_Hot_Hand.png/200px-Item_icon_Hot_Hand.png' },
        19: { name: 'Grenade Launcher',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e6/Item_icon_Grenade_Launcher.png/200px-Item_icon_Grenade_Launcher.png' },
        206: { name: 'Grenade Launcher (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e6/Item_icon_Grenade_Launcher.png/200px-Item_icon_Grenade_Launcher.png' },
        308: { name: 'The Loch-n-Load',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/62/Item_icon_Loch-n-Load.png/200px-Item_icon_Loch-n-Load.png' },
        405: { name: "Ali Baba's Wee Booties",  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a4/Item_icon_Ali_Baba%27s_Wee_Booties.png/200px-Item_icon_Ali_Baba%27s_Wee_Booties.png' },
        608: { name: 'The Bootlegger',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4c/Item_icon_Bootlegger.png/200px-Item_icon_Bootlegger.png' },
        996: { name: 'The Loose Cannon',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/70/Item_icon_Loose_Cannon.png/200px-Item_icon_Loose_Cannon.png' },
        1007: { name: 'Festive Grenade Launcher',  href: 'https://static.wikia.nocookie.net/teamfortress/images/7/74/Item_icon_Festive_Grenade_Launcher.png/revision/latest/scale-to-width-down/512?cb=20140411120638' },

        1151: { name: 'The Iron Bomber',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cd/Item_icon_Iron_Bomber.png/200px-Item_icon_Iron_Bomber.png' },
        15077: { name: 'Autumn(Grenade Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/48/Backpack_Autumn_Grenade_Launcher_Factory_New.png/200px-Backpack_Autumn_Grenade_Launcher_Factory_New.png' },
        15079: { name: 'Macabre Web(Grenade Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cd/Backpack_Macabre_Web_Grenade_Launcher_Factory_New.png/200px-Backpack_Macabre_Web_Grenade_Launcher_Factory_New.png' },
        15091: { name: 'Rainbow(Grenade Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e1/Backpack_Rainbow_Grenade_Launcher_Factory_New.png/200px-Backpack_Rainbow_Grenade_Launcher_Factory_New.png' },
        15092: { name: 'Sweet Dreams(Grenade Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/3a/Backpack_Sweet_Dreams_Grenade_Launcher_Factory_New.png/200px-Backpack_Sweet_Dreams_Grenade_Launcher_Factory_New.png' },
        15116: { name: 'Coffin Nail(Grenade Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Backpack_Coffin_Nail_Grenade_Launcher_Factory_New.png/200px-Backpack_Coffin_Nail_Grenade_Launcher_Factory_New.png' },
        15117: { name: 'Top Shelf(Grenade Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/42/Backpack_Top_Shelf_Grenade_Launcher_Factory_New.png/200px-Backpack_Top_Shelf_Grenade_Launcher_Factory_New.png' },
        15142: { name: 'Warhawk(Grenade Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ef/Backpack_Warhawk_Grenade_Launcher_Factory_New.png/200px-Backpack_Warhawk_Grenade_Launcher_Factory_New.png' },
        15158: { name: 'Butcher Bird(Grenade Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/11/Backpack_Butcher_Bird_Grenade_Launcher_Factory_New.png/200px-Backpack_Butcher_Bird_Grenade_Launcher_Factory_New.png' },
        20: { name: 'Stickybomb Launcher',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        130: { name: 'The Scottish Resistance',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/2c/Item_icon_Scottish_Resistance.png/200px-Item_icon_Scottish_Resistance.png' },
        131: { name: "The Chargin' Targe",  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7a/Item_icon_Chargin%27_Targe.png/200px-Item_icon_Chargin%27_Targe.png' },
        207: { name: 'Stickybomb Launcher (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        265: { name: 'Sticky Jumper',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/56/Item_icon_Sticky_Jumper.png/200px-Item_icon_Sticky_Jumper.png' },
        406: { name: 'The Splendid Screen',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c3/Item_icon_Splendid_Screen.png/200px-Item_icon_Splendid_Screen.png' },
        661: { name: 'Festive Stickybomb Launcher',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        797: { name: 'Silver Botkiller Stickybomb Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        806: { name: 'Gold Botkiller Stickybomb Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        886: { name: 'Rust Botkiller Stickybomb Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        895: { name: 'Blood Botkiller Stickybomb Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        904: { name: 'Carbonado Botkiller Stickybomb Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        913: { name: 'Diamond Botkiller Stickybomb Launcher Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        962: { name: 'Silver Botkiller Stickybomb Launcher Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        971: { name: 'Gold Botkiller Stickybomb Launcher Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Stickybomb_Launcher.png/200px-Item_icon_Stickybomb_Launcher.png' },
        1099: { name: 'The Tide Turner',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cd/Item_icon_Tide_Turner.png/200px-Item_icon_Tide_Turner.png' },
        1144: { name: 'Festive Targe',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7a/Item_icon_Chargin%27_Targe.png/200px-Item_icon_Chargin%27_Targe.png' },
        1150: { name: 'The Quickiebomb Launcher',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f9/Item_icon_Quickiebomb_Launcher.png/200px-Item_icon_Quickiebomb_Launcher.png' },
        15009: { name: 'Sudden Flurry(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/bd/Backpack_Sudden_Flurry_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Sudden_Flurry_Stickybomb_Launcher_Factory_New.png' },
        15012: { name: 'Carpet Bomber(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/04/Backpack_Carpet_Bomber_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Carpet_Bomber_Stickybomb_Launcher_Factory_New.png' },
        15024: { name: 'Blasted Bombardier(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/23/Backpack_Blasted_Bombardier_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Blasted_Bombardier_Stickybomb_Launcher_Factory_New.png' },
        15038: { name: 'Rooftop Wrangler(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a5/Backpack_Rooftop_Wrangler_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Rooftop_Wrangler_Stickybomb_Launcher_Factory_New.png' },
        15045: { name: 'Liquid Asset(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cb/Backpack_Liquid_Asset_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Liquid_Asset_Stickybomb_Launcher_Factory_New.png' },
        15048: { name: 'Pink Elephant(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Backpack_Pink_Elephant_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Pink_Elephant_Stickybomb_Launcher_Factory_New.png' },
        15082: { name: 'Autumn(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e1/Backpack_Autumn_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Autumn_Stickybomb_Launcher_Factory_New.png' },
        15083: { name: 'Pumpkin Patch(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5b/Backpack_Pumpkin_Patch_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Pumpkin_Patch_Stickybomb_Launcher_Factory_New.png' },
        15084: { name: 'Macabre Web(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/54/Backpack_Macabre_Web_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Macabre_Web_Stickybomb_Launcher_Factory_New.png' },
        15113: { name: 'Sweet Dreams(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f3/Backpack_Sweet_Dreams_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Sweet_Dreams_Stickybomb_Launcher_Factory_New.png' },
        15137: { name: 'Coffin Nail(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/bb/Backpack_Coffin_Nail_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Coffin_Nail_Stickybomb_Launcher_Factory_New.png' },
        15138: { name: 'Dressed to Kill(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1e/Backpack_Dressed_to_Kill_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Dressed_to_Kill_Stickybomb_Launcher_Factory_New.png' },
        15155: { name: 'Blitzkrieg(Stickybomb Launcher)',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/28/Backpack_Blitzkrieg_Stickybomb_Launcher_Factory_New.png/200px-Backpack_Blitzkrieg_Stickybomb_Launcher_Factory_New.png' },
        1: { name: 'Bottle',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b2/Item_icon_Bottle.png/200px-Item_icon_Bottle.png' },
        132: { name: 'The Eyelander',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/94/Item_icon_Eyelander.png/200px-Item_icon_Eyelander.png' },
        154: { name: 'The Pain Train',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4b/Item_icon_Pain_Train.png/200px-Item_icon_Pain_Train.png' },
        172: { name: "The Scotsman's Skullcutter",  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c6/Item_icon_Scotsman%27s_Skullcutter.png/200px-Item_icon_Scotsman%27s_Skullcutter.png' },
        191: { name: 'Bottle (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b2/Item_icon_Bottle.png/200px-Item_icon_Bottle.png' },
        264: { name: 'Frying Pan',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c1/Item_icon_Frying_Pan.png/200px-Item_icon_Frying_Pan.png' },
        266: { name: "Horseless Headless Horsemann's Headtaker",  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1f/Item_icon_Horseless_Headless_Horsemann%27s_Headtaker.png/200px-Item_icon_Horseless_Headless_Horsemann%27s_Headtaker.png' },
        307: { name: 'Ullapool Caber',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a5/Item_icon_Ullapool_Caber.png/200px-Item_icon_Ullapool_Caber.png' },
        327: { name: 'The Claidheamh Mòr',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/0f/Item_icon_Claidheamh_M%C3%B2r.png/200px-Item_icon_Claidheamh_M%C3%B2r.png' },
        404: { name: 'The Persian Persuader',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/98/Item_icon_Persian_Persuader.png/200px-Item_icon_Persian_Persuader.png' },
        482: { name: "Nessie's Nine Iron",  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5a/Item_icon_Nessie%27s_Nine_Iron.png/200px-Item_icon_Nessie%27s_Nine_Iron.png' },
        609: { name: 'The Scottish Handshake',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1a/Item_icon_Scottish_Handshake.png/200px-Item_icon_Scottish_Handshake.png' },
        1082: { name: 'Festive Eyelander',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/94/Item_icon_Eyelander.png/200px-Item_icon_Eyelander.png' },
        15: { name: 'Minigun',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        41: { name: 'Natascha',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cc/Item_icon_Natascha.png/200px-Item_icon_Natascha.png' },
        202: { name: 'Minigun (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        298: { name: 'Iron Curtain',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/da/Item_icon_Iron_Curtain.png/200px-Item_icon_Iron_Curtain.png' },
        312: { name: 'The Brass Beast',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/64/Item_icon_Brass_Beast.png/200px-Item_icon_Brass_Beast.png' },
        424: { name: 'Tomislav',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/3e/Item_icon_Tomislav.png/200px-Item_icon_Tomislav.png' },
        654: { name: 'Festive Minigun',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        793: { name: 'Silver Botkiller Minigun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        802: { name: 'Gold Botkiller Minigun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        811: { name: 'The Huo-Long Heater',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/81/Item_icon_Huo-Long_Heater.png/200px-Item_icon_Huo-Long_Heater.png' },
        832: { name: 'The Huo-Long Heater (Genuine)',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/81/Item_icon_Huo-Long_Heater.png/200px-Item_icon_Huo-Long_Heater.png' },
        882: { name: 'Rust Botkiller Minigun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        891: { name: 'Blood Botkiller Minigun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        900: { name: 'Carbonado Botkiller Minigun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        909: { name: 'Diamond Botkiller Minigun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        958: { name: 'Silver Botkiller Minigun Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        967: { name: 'Gold Botkiller Minigun Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a7/Item_icon_Minigun.png/200px-Item_icon_Minigun.png' },
        15004: { name: 'King of the Jungle(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5e/Backpack_King_of_the_Jungle_Minigun_Factory_New.png/200px-Backpack_King_of_the_Jungle_Minigun_Factory_New.png' },
        15020: { name: 'Iron Wood(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9b/Backpack_Iron_Wood_Minigun_Factory_New.png/200px-Backpack_Iron_Wood_Minigun_Factory_New.png' },
        15026: { name: 'Antique Annihilator(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/45/Backpack_Antique_Annihilator_Minigun_Factory_New.png/200px-Backpack_Antique_Annihilator_Minigun_Factory_New.png' },
        15031: { name: 'War Room(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/31/Backpack_War_Room_Minigun_Factory_New.png/200px-Backpack_War_Room_Minigun_Factory_New.png' },
        15040: { name: 'Citizen Pain(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/22/Backpack_Citizen_Pain_Minigun_Factory_New.png/200px-Backpack_Citizen_Pain_Minigun_Factory_New.png' },
        15055: { name: 'Brick House(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/2d/Backpack_Brick_House_Minigun_Factory_New.png/200px-Backpack_Brick_House_Minigun_Factory_New.png' },
        15086: { name: 'Macabre Web(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/08/Backpack_Macabre_Web_Minigun_Factory_New.png/200px-Backpack_Macabre_Web_Minigun_Factory_New.png' },
        15087: { name: 'Pumpkin Patch(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a5/Backpack_Pumpkin_Patch_Minigun_Factory_New.png/200px-Backpack_Pumpkin_Patch_Minigun_Factory_New.png' },
        15088: { name: 'Nutcracker(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/40/Backpack_Nutcracker_Minigun_Factory_New.png/200px-Backpack_Nutcracker_Minigun_Factory_New.png' },
        15098: { name: 'Brain Candy(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d5/Backpack_Brain_Candy_Minigun_Factory_New.png/200px-Backpack_Brain_Candy_Minigun_Factory_New.png' },
        15099: { name: 'Mister Cuddles(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/ae/Backpack_Mister_Cuddles_Minigun_Factory_New.png/200px-Backpack_Mister_Cuddles_Minigun_Factory_New.png' },
        15123: { name: 'Coffin Nail(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/0c/Backpack_Coffin_Nail_Minigun_Factory_New.png/200px-Backpack_Coffin_Nail_Minigun_Factory_New.png' },
        15124: { name: 'Dressed to Kill(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f8/Backpack_Dressed_to_Kill_Minigun_Factory_New.png/200px-Backpack_Dressed_to_Kill_Minigun_Factory_New.png' },
        15125: { name: 'Top Shelf(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ea/Backpack_Top_Shelf_Minigun_Factory_New.png/200px-Backpack_Top_Shelf_Minigun_Factory_New.png' },
        15147: { name: 'Butcher Bird(Minigun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/39/Backpack_Butcher_Bird_Minigun_Factory_New.png/200px-Backpack_Butcher_Bird_Minigun_Factory_New.png' },
        11: { name: "Heavy's Shotgun",  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5f/Item_icon_Shotgun.png/200px-Item_icon_Shotgun.png' },
        42: { name: 'Sandvich',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5e/Item_icon_Sandvich.png/200px-Item_icon_Sandvich.png' },
        159: { name: 'The Dalokohs Bar',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/35/Item_icon_Dalokohs_Bar.png/200px-Item_icon_Dalokohs_Bar.png' },
        311: { name: 'The Buffalo Steak Sandvich',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/62/Item_icon_Buffalo_Steak_Sandvich.png/200px-Item_icon_Buffalo_Steak_Sandvich.png' },
        425: { name: 'The Family Business',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cd/Item_icon_Family_Business.png/200px-Item_icon_Family_Business.png' },
        433: { name: 'Fishcake',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/94/Item_icon_Fishcake.png/200px-Item_icon_Fishcake.png' },
        863: { name: 'Robo-Sandvich',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cb/Item_icon_Robo-Sandvich.png/200px-Item_icon_Robo-Sandvich.png' },
        1002: { name: 'Festive Sandvich',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5e/Item_icon_Sandvich.png/200px-Item_icon_Sandvich.png' },
        1190: { name: 'Second Banana',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/77/Item_icon_Second_Banana.png/200px-Item_icon_Second_Banana.png' },
        5: { name: 'Fists',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/19/Item_icon_Fists.png/200px-Item_icon_Fists.png' },
        43: { name: 'The Killing Gloves of Boxing',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f6/Item_icon_Killing_Gloves_of_Boxing.png/200px-Item_icon_Killing_Gloves_of_Boxing.png' },
        195: { name: 'Fists (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/19/Item_icon_Fists.png/200px-Item_icon_Fists.png' },
        239: { name: 'Gloves of Running Urgently',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4f/Item_icon_Gloves_of_Running_Urgently.png/200px-Item_icon_Gloves_of_Running_Urgently.png' },
        310: { name: "Warrior's Spirit",  href: 'https://wiki.teamfortress.com/w/images/thumb/8/87/Item_icon_Warrior%27s_Spirit.png/200px-Item_icon_Warrior%27s_Spirit.png' },
        331: { name: 'Fists of Steel',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9c/Item_icon_Fists_of_Steel.png/200px-Item_icon_Fists_of_Steel.png' },
        426: { name: 'The Eviction Notice',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/62/Item_icon_Eviction_Notice.png/200px-Item_icon_Eviction_Notice.png' },
        587: { name: 'Apoco-Fists',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/91/Item_icon_Apoco-Fists.png/200px-Item_icon_Apoco-Fists.png' },
        656: { name: 'The Holiday Punch',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/54/Item_icon_Holiday_Punch.png/200px-Item_icon_Holiday_Punch.png' },
        1084: { name: 'Festive Gloves of Running Urgently (G.R.U.)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4f/Item_icon_Gloves_of_Running_Urgently.png/200px-Item_icon_Gloves_of_Running_Urgently.png' },
        1100: { name: 'The Bread Bite',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a4/Item_icon_Bread_Bite.png/200px-Item_icon_Bread_Bite.png' },
        1184: { name: 'Gloves of Running Urgently MvM',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4f/Item_icon_Gloves_of_Running_Urgently.png/200px-Item_icon_Gloves_of_Running_Urgently.png' },
        9: { name: "Engineer's Shotgun",  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5f/Item_icon_Shotgun.png/200px-Item_icon_Shotgun.png' },
        141: { name: 'The Frontier Justice',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/26/Item_icon_Frontier_Justice.png/200px-Item_icon_Frontier_Justice.png' },
        527: { name: 'The Widowmaker',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b8/Item_icon_Widowmaker.png/200px-Item_icon_Widowmaker.png' },
        588: { name: 'The Pomson 6000',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/89/Item_icon_Pomson_6000.png/200px-Item_icon_Pomson_6000.png' },
        997: { name: 'The Rescue Ranger',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/29/Item_icon_Rescue_Ranger.png/200px-Item_icon_Rescue_Ranger.png' },
        1004: { name: 'Festive Frontier Justice',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/26/Item_icon_Frontier_Justice.png/200px-Item_icon_Frontier_Justice.png' },
        22: { name: "Engineer's Pistol",  href: 'https://wiki.teamfortress.com/w/images/thumb/5/52/Item_icon_Pistol.png/200px-Item_icon_Pistol.png' },
        140: { name: 'The Wrangler',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/ce/Item_icon_Wrangler.png/200px-Item_icon_Wrangler.png' },
        160: { name: 'Vintage Lugermorph',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/86/Item_icon_Lugermorph.png/200px-Item_icon_Lugermorph.png' },
        209: { name: 'Pistol (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/52/Item_icon_Pistol.png/200px-Item_icon_Pistol.png' },
        294: { name: 'Lugermorph',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/86/Item_icon_Lugermorph.png/200px-Item_icon_Lugermorph.png' },
        528: { name: 'The Short Circuit',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/36/Item_icon_Short_Circuit.png/200px-Item_icon_Short_Circuit.png' },
        1086: { name: 'Festive Wrangler',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/ce/Item_icon_Wrangler.png/200px-Item_icon_Wrangler.png' },
        30668: { name: 'The Gigar Counter',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5d/Item_icon_Giger_Counter.png/200px-Item_icon_Giger_Counter.png' },
        7: { name: 'Wrench',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        142: { name: 'The Gunslinger',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/ca/Item_icon_Gunslinger.png/200px-Item_icon_Gunslinger.png' },
        155: { name: 'The Southern Hospitality',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Southern_Hospitality.png/200px-Item_icon_Southern_Hospitality.png' },
        169: { name: 'Golden Wrench',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/95/Item_icon_Golden_Wrench.png/200px-Item_icon_Golden_Wrench.png' },
        197: { name: 'Wrench (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        329: { name: 'The Jag',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/49/Item_icon_Jag.png/200px-Item_icon_Jag.png' },
        589: { name: 'The Eureka Effect',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cf/Item_icon_Eureka_Effect.png/200px-Item_icon_Eureka_Effect.png' },
        662: { name: 'Festive Wrench',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        795: { name: 'Silver Botkiller Wrench Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        804: { name: 'Gold Botkiller Wrench Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        884: { name: 'Rust Botkiller Wrench Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        893: { name: 'Blood Botkiller Wrench Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        902: { name: 'Carbonado Botkiller Wrench Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        911: { name: 'Diamond Botkiller Wrench Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        960: { name: 'Silver Botkiller Wrench Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        969: { name: 'Gold Botkiller Wrench Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Wrench.png/200px-Item_icon_Wrench.png' },
        15073: { name: 'Nutcracker(Wrench)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1e/Backpack_Nutcracker_Wrench_Factory_New.png/200px-Backpack_Nutcracker_Wrench_Factory_New.png' },
        15074: { name: 'Autumn(Wrench)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/56/Backpack_Autumn_Wrench_Factory_New.png/200px-Backpack_Autumn_Wrench_Factory_New.png' },
        15075: { name: 'Boneyard(Wrench)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/bc/Backpack_Boneyard_Wrench_Factory_New.png/200px-Backpack_Boneyard_Wrench_Factory_New.png' },
        15114: { name: 'Torqued to Hell(Wrench)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e2/Backpack_Torqued_to_Hell_Wrench_Factory_New.png/200px-Backpack_Torqued_to_Hell_Wrench_Factory_New.png' },
        15139: { name: 'Dressed to Kill(Wrench)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/49/Backpack_Dressed_to_Kill_Wrench_Factory_New.png/200px-Backpack_Dressed_to_Kill_Wrench_Factory_New.png' },
        15140: { name: 'Top Shelf(Wrench)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/ca/Backpack_Top_Shelf_Wrench_Factory_New.png/200px-Backpack_Top_Shelf_Wrench_Factory_New.png' },
        15156: { name: 'Airwolf(Wrench)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b3/Backpack_Airwolf_Wrench_Factory_New.png/200px-Backpack_Airwolf_Wrench_Factory_New.png' },
        17: { name: 'Syringe Gun',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c4/Item_icon_Syringe_Gun.png/200px-Item_icon_Syringe_Gun.png' },
        36: { name: 'The Blutsauger',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/13/Item_icon_Blutsauger.png/200px-Item_icon_Blutsauger.png' },
        204: { name: 'Syringe Gun (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c4/Item_icon_Syringe_Gun.png/200px-Item_icon_Syringe_Gun.png' },
        305: { name: "Crusader's Crossbow",  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9c/Item_icon_Crusader%27s_Crossbow.png/200px-Item_icon_Crusader%27s_Crossbow.png' },
        412: { name: 'The Overdose',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/fe/Item_icon_Overdose.png/200px-Item_icon_Overdose.png' },
        1079: { name: "Festive Crusader's Crossbow",  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9c/Item_icon_Crusader%27s_Crossbow.png/200px-Item_icon_Crusader%27s_Crossbow.png' },
        29: { name: 'Medi Gun',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        35: { name: 'The Kritzkrieg',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/85/Item_icon_Kritzkrieg.png/200px-Item_icon_Kritzkrieg.png' },
        211: { name: 'Medi Gun(Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        411: { name: 'The Quick-Fix',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/50/Item_icon_Quick-Fix.png/200px-Item_icon_Quick-Fix.png' },
        663: { name: 'Festive Medi Gun',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        796: { name: 'Silver Botkiller Medi Gun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        805: { name: 'Gold Botkiller Medi Gun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        885: { name: 'Rust Botkiller Medi Gun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        894: { name: 'Blood Botkiller Medi Gun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        903: { name: 'Carbonado Botkiller Medi Gun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        912: { name: 'Diamond Botkiller Medi Gun Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        961: { name: 'Silver Botkiller Medi Gun Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        970: { name: 'Gold Botkiller Medi Gun Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4a/Item_icon_Medi_Gun.png/200px-Item_icon_Medi_Gun.png' },
        998: { name: 'The Vaccinator',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9d/Item_icon_Vaccinator.png/200px-Item_icon_Vaccinator.png' },
        15008: { name: 'Masked Mender(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c9/Backpack_Masked_Mender_Medi_Gun_Factory_New.png/200px-Backpack_Masked_Mender_Medi_Gun_Factory_New.png' },
        15010: { name: 'Wrapped Reviver(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6a/Backpack_Wrapped_Reviver_Medi_Gun_Factory_New.png/200px-Backpack_Wrapped_Reviver_Medi_Gun_Factory_New.png' },
        15025: { name: 'Reclaimed Reanimator(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e8/Backpack_Reclaimed_Reanimator_Medi_Gun_Factory_New.png/200px-Backpack_Reclaimed_Reanimator_Medi_Gun_Factory_New.png' },
        15039: { name: 'Civil Servant(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f2/Backpack_Civil_Servant_Medi_Gun_Factory_New.png/200px-Backpack_Civil_Servant_Medi_Gun_Factory_New.png' },
        15050: { name: 'Spark of Life(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1f/Backpack_Spark_of_Life_Medi_Gun_Factory_New.png/200px-Backpack_Spark_of_Life_Medi_Gun_Factory_New.png' },
        15078: { name: 'Wildwood(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/bc/Backpack_Wildwood_Medi_Gun_Factory_New.png/200px-Backpack_Wildwood_Medi_Gun_Factory_New.png' },
        15097: { name: 'Flower Power(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/85/Backpack_Flower_Power_Medi_Gun_Factory_New.png/200px-Backpack_Flower_Power_Medi_Gun_Factory_New.png' },
        15121: { name: 'Dressed To Kill(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6a/Backpack_Dressed_to_Kill_Medi_Gun_Factory_New.png/200px-Backpack_Dressed_to_Kill_Medi_Gun_Factory_New.png' },
        15122: { name: "High Roller's(Medi Gun)",  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c1/Backpack_High_Roller%27s_Medi_Gun_Factory_New.png/200px-Backpack_High_Roller%27s_Medi_Gun_Factory_New.png' },
        15123: { name: 'Coffin Nail(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/2c/Backpack_Coffin_Nail_Medi_Gun_Factory_New.png/200px-Backpack_Coffin_Nail_Medi_Gun_Factory_New.png' },
        15145: { name: 'Blitzkrieg(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e3/Backpack_Blitzkrieg_Medi_Gun_Factory_New.png/200px-Backpack_Blitzkrieg_Medi_Gun_Factory_New.png' },
        15146: { name: 'Corsair(Medi Gun)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e8/Backpack_Corsair_Medi_Gun_Factory_New.png/200px-Backpack_Corsair_Medi_Gun_Factory_New.png' },
        8: { name: 'Bonesaw',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/8d/Item_icon_Bonesaw.png/200px-Item_icon_Bonesaw.png' },
        37: { name: 'The Ubersaw',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/04/Item_icon_Ubersaw.png/200px-Item_icon_Ubersaw.png' },
        173: { name: 'The Vita-Saw',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/70/Item_icon_Vita-Saw.png/200px-Item_icon_Vita-Saw.png' },
        198: { name: 'Bonesaw (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/8d/Item_icon_Bonesaw.png/200px-Item_icon_Bonesaw.png' },
        304: { name: 'Amputator',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/ab/Item_icon_Amputator.png/200px-Item_icon_Amputator.png' },
        413: { name: 'The Solemn Vow',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/db/Item_icon_Solemn_Vow.png/200px-Item_icon_Solemn_Vow.png' },
        1003: { name: 'Festive Ubersaw',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/04/Item_icon_Ubersaw.png/200px-Item_icon_Ubersaw.png' },
        1143: { name: 'Festive Bonesaw',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/8d/Item_icon_Bonesaw.png/200px-Item_icon_Bonesaw.png' },
        14: { name: 'Sniper Rifle',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        56: { name: 'The Huntsman',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f8/Item_icon_Huntsman.png/200px-Item_icon_Huntsman.png' },
        201: { name: 'Sniper Rifle (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        230: { name: 'The Sydney Sleeper',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6a/Item_icon_Sydney_Sleeper.png/200px-Item_icon_Sydney_Sleeper.png' },
        402: { name: 'The Bazaar Bargain',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f4/Item_icon_Bazaar_Bargain.png/200px-Item_icon_Bazaar_Bargain.png' },
        526: { name: 'The Machina',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/ae/Item_icon_Machina.png/200px-Item_icon_Machina.png' },
        664: { name: 'Festive Sniper Rifle',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        752: { name: "The Hitman's Heatmaker",  href: 'https://wiki.teamfortress.com/w/images/thumb/1/18/Item_icon_Hitman%27s_Heatmaker.png/200px-Item_icon_Hitman%27s_Heatmaker.png' },
        792: { name: 'Silver Botkiller Sniper Rifle Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        801: { name: 'Gold Botkiller Sniper Rifle Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        851: { name: 'The AWPer Hand',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/24/Item_icon_AWPer_Hand.png/200px-Item_icon_AWPer_Hand.png' },
        881: { name: 'Rust Botkiller Sniper Rifle Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        890: { name: 'Blood Botkiller Sniper Rifle Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        899: { name: 'Carbonado Botkiller Sniper Rifle Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        908: { name: 'Diamond Botkiller Sniper Rifle Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        957: { name: 'Silver Botkiller Sniper Rifle Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        966: { name: 'Gold Botkiller Sniper Rifle Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a1/Item_icon_Sniper_Rifle.png/200px-Item_icon_Sniper_Rifle.png' },
        1005: { name: 'Festive Huntsman',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f8/Item_icon_Huntsman.png/200px-Item_icon_Huntsman.png' },
        1092: { name: 'The Fortified Compound',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/89/Item_icon_Fortified_Compound.png/200px-Item_icon_Fortified_Compound.png' },
        1098: { name: 'The Classic',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/73/Item_icon_Classic.png/200px-Item_icon_Classic.png' },
        15000: { name: 'Night Owl(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/5d/Backpack_Night_Owl_Sniper_Rifle_Factory_New.png/200px-Backpack_Night_Owl_Sniper_Rifle_Factory_New.png' },
        15007: { name: 'Purple Range(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c3/Backpack_Purple_Range_Sniper_Rifle_Factory_New.png/200px-Backpack_Purple_Range_Sniper_Rifle_Factory_New.png' },
        15019: { name: 'Lumber From Down Under(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d5/Backpack_Lumber_From_Down_Under_Sniper_Rifle_Factory_New.png/200px-Backpack_Lumber_From_Down_Under_Sniper_Rifle_Factory_New.png' },
        15023: { name: 'Shot in the Dark(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/87/Backpack_Shot_in_the_Dark_Sniper_Rifle_Factory_New.png/200px-Backpack_Shot_in_the_Dark_Sniper_Rifle_Factory_New.png' },
        15033: { name: 'Bogtrotter(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/00/Backpack_Bogtrotter_Sniper_Rifle_Factory_New.png/200px-Backpack_Bogtrotter_Sniper_Rifle_Factory_New.png' },
        15059: { name: 'Thunderbolt(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9a/Backpack_Thunderbolt_Sniper_Rifle_Factory_New.png/200px-Backpack_Thunderbolt_Sniper_Rifle_Factory_New.png' },
        15070: { name: 'Pumpkin Patch(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/9d/Backpack_Pumpkin_Patch_Sniper_Rifle_Factory_New.png/200px-Backpack_Pumpkin_Patch_Sniper_Rifle_Factory_New.png' },
        15071: { name: 'Boneyard(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e9/Backpack_Boneyard_Sniper_Rifle_Factory_New.png/200px-Backpack_Boneyard_Sniper_Rifle_Factory_New.png' },
        15072: { name: 'Wildwood(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/07/Backpack_Wildwood_Sniper_Rifle_Factory_New.png/200px-Backpack_Wildwood_Sniper_Rifle_Factory_New.png' },
        15111: { name: 'Balloonicorn(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/21/Backpack_Balloonicorn_Sniper_Rifle_Factory_New.png/200px-Backpack_Balloonicorn_Sniper_Rifle_Factory_New.png' },
        15112: { name: 'Rainbow(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/58/Backpack_Rainbow_Sniper_Rifle_Factory_New.png/200px-Backpack_Rainbow_Sniper_Rifle_Factory_New.png' },
        15135: { name: 'Coffin Nail(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d1/Backpack_Coffin_Nail_Sniper_Rifle_Factory_New.png/200px-Backpack_Coffin_Nail_Sniper_Rifle_Factory_New.png' },
        15136: { name: 'Dressed to Kill(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/ac/Backpack_Dressed_to_Kill_Sniper_Rifle_Factory_New.png/200px-Backpack_Dressed_to_Kill_Sniper_Rifle_Factory_New.png' },
        15154: { name: 'Airwolf(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/84/Backpack_Airwolf_Sniper_Rifle_Factory_New.png/200px-Backpack_Airwolf_Sniper_Rifle_Factory_New.png' },
        30665: { name: 'Shooting Star(Sniper Rifle)',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d7/Item_icon_Shooting_Star.png/200px-Item_icon_Shooting_Star.png' },
        16: { name: 'SMG',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/50/Item_icon_SMG.png/200px-Item_icon_SMG.png' },
        57: { name: 'The Razorback',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/0f/Item_icon_Razorback.png/200px-Item_icon_Razorback.png' },
        58: { name: 'Jarate',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b3/Item_icon_Jarate.png/200px-Item_icon_Jarate.png' },
        203: { name: 'SMG (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/50/Item_icon_SMG.png/200px-Item_icon_SMG.png' },
        231: { name: "Darwin's Danger Shield",  href: 'https://wiki.teamfortress.com/w/images/thumb/4/44/Item_icon_Darwin%27s_Danger_Shield.png/200px-Item_icon_Darwin%27s_Danger_Shield.png' },
        642: { name: 'Cozy Camper',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/01/Item_icon_Cozy_Camper.png/200px-Item_icon_Cozy_Camper.png' },
        751: { name: "The Cleaner's Carbine",  href: 'https://wiki.teamfortress.com/w/images/thumb/6/64/Item_icon_Cleaner%27s_Carbine.png/200px-Item_icon_Cleaner%27s_Carbine.png' },
        1083: { name: 'Festive Jarate',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b3/Item_icon_Jarate.png/200px-Item_icon_Jarate.png' },
        1105: { name: 'The Self-Aware Beauty Mark',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/2e/Item_icon_Self-Aware_Beauty_Mark.png/200px-Item_icon_Self-Aware_Beauty_Mark.png' },
        1149: { name: 'Festive SMG',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/50/Item_icon_SMG.png/200px-Item_icon_SMG.png' },
        15001: { name: 'Woodsy Widowmaker(SMG)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/34/Backpack_Woodsy_Widowmaker_SMG_Factory_New.png/200px-Backpack_Woodsy_Widowmaker_SMG_Factory_New.png' },
        15022: { name: 'Plaid Potshotter(SMG)',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d7/Backpack_Plaid_Potshotter_SMG_Factory_New.png/200px-Backpack_Plaid_Potshotter_SMG_Factory_New.png' },
        15032: { name: 'Treadplate Tormenter(SMG)',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/21/Backpack_Treadplate_Tormenter_SMG_Factory_New.png/200px-Backpack_Treadplate_Tormenter_SMG_Factory_New.png' },
        15037: { name: 'Team Sprayer(SMG)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/be/Backpack_Team_Sprayer_SMG_Factory_New.png/200px-Backpack_Team_Sprayer_SMG_Factory_New.png' },
        15058: { name: 'Low Profile(SMG)',  href: 'https://wiki.teamfortress.com/w/images/thumb/9/93/Backpack_Low_Profile_SMG_Factory_New.png/200px-Backpack_Low_Profile_SMG_Factory_New.png' },
        15076: { name: 'Wildwood(SMG)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/e7/Backpack_Wildwood_SMG_Factory_New.png/200px-Backpack_Wildwood_SMG_Factory_New.png' },
        15110: { name: 'Blue Mew(SMG)',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d7/Backpack_Blue_Mew_SMG_Factory_New.png/200px-Backpack_Blue_Mew_SMG_Factory_New.png' },
        15134: { name: "High Roller's(SMG)",  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6a/Backpack_High_Roller%27s_SMG_Factory_New.png/200px-Backpack_High_Roller%27s_SMG_Factory_New.png' },
        15153: { name: 'Blitzkrieg(SMG)',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/4b/Backpack_Blitzkrieg_SMG_Factory_New.png/200px-Backpack_Blitzkrieg_SMG_Factory_New.png' },
        3: { name: 'Kukri',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ea/Item_icon_Kukri.png/200px-Item_icon_Kukri.png' },
        171: { name: "The Tribalman's Shiv",  href: 'https://wiki.teamfortress.com/w/images/thumb/5/55/Item_icon_Tribalman%27s_Shiv.png/200px-Item_icon_Tribalman%27s_Shiv.png' },
        193: { name: 'Kukri (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ea/Item_icon_Kukri.png/200px-Item_icon_Kukri.png' },
        232: { name: 'The Bushwacka',  href: 'https://wiki.teamfortress.com/w/images/thumb/4/46/Item_icon_Bushwacka.png/200px-Item_icon_Bushwacka.png' },
        401: { name: 'The Shahanshah',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/8d/Item_icon_Shahanshah.png/200px-Item_icon_Shahanshah.png' },
        24: { name: 'Revolver',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1f/Item_icon_Revolver.png/200px-Item_icon_Revolver.png' },
        61: { name: 'The Ambassador',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Ambassador.png/200px-Item_icon_Ambassador.png' },
        161: { name: 'Big Kill',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/31/Item_icon_Big_Kill.png/200px-Item_icon_Big_Kill.png' },
        210: { name: 'Revolver (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1f/Item_icon_Revolver.png/200px-Item_icon_Revolver.png' },
        224: { name: "L'Etranger",  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b1/Item_icon_L%27Etranger.png/200px-Item_icon_L%27Etranger.png' },
        460: { name: 'The Enforcer',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b6/Item_icon_Enforcer.png/200px-Item_icon_Enforcer.png' },
        525: { name: 'The Diamondback',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b4/Item_icon_Diamondback.png/200px-Item_icon_Diamondback.png' },
        1006: { name: 'Festive Ambassador',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/ec/Item_icon_Ambassador.png/200px-Item_icon_Ambassador.png' },
        1142: { name: 'Festive Revolver',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/1f/Item_icon_Revolver.png/200px-Item_icon_Revolver.png' },
        15011: { name: 'Psychedelic Slugger(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/54/Backpack_Psychedelic_Slugger_Revolver_Factory_New.png/200px-Backpack_Psychedelic_Slugger_Revolver_Factory_New.png' },
        15027: { name: 'Old Country(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/ff/Backpack_Old_Country_Revolver_Factory_New.png/200px-Backpack_Old_Country_Revolver_Factory_New.png' },
        15042: { name: 'Mayor(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cd/Backpack_Mayor_Revolver_Factory_New.png/200px-Backpack_Mayor_Revolver_Factory_New.png' },
        15051: { name: 'Dead Reckoner(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/37/Backpack_Dead_Reckoner_Revolver_Factory_New.png/200px-Backpack_Dead_Reckoner_Revolver_Factory_New.png' },
        15062: { name: 'Boneyard(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/8/8e/Backpack_Boneyard_Revolver_Factory_New.png/200px-Backpack_Boneyard_Revolver_Factory_New.png' },
        15063: { name: 'Wildwood(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7e/Backpack_Wildwood_Revolver_Factory_New.png/200px-Backpack_Wildwood_Revolver_Factory_New.png' },
        15064: { name: 'Macabre Web(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/ff/Backpack_Macabre_Web_Revolver_Factory_New.png/200px-Backpack_Macabre_Web_Revolver_Factory_New.png' },
        15103: { name: 'Flower Power(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/53/Backpack_Flower_Power_Revolver_Factory_New.png/200px-Backpack_Flower_Power_Revolver_Factory_New.png' },
        15127: { name: 'Coffin Nail(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f0/Backpack_Coffin_Nail_Revolver_Factory_New.png/200px-Backpack_Coffin_Nail_Revolver_Factory_New.png' },
        15128: { name: 'Top Shelf(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/17/Backpack_Top_Shelf_Revolver_Factory_New.png/200px-Backpack_Top_Shelf_Revolver_Factory_New.png' },
        15149: { name: 'Blitzkrieg(Revolver)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/3c/Backpack_Blitzkrieg_Knife_Factory_New.png/200px-Backpack_Blitzkrieg_Knife_Factory_New.png' },
        735: { name: 'Sapper',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6c/Item_icon_Sapper.png/200px-Item_icon_Sapper.png' },
        736: { name: 'Sapper (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6c/Item_icon_Sapper.png/200px-Item_icon_Sapper.png' },
        810: { name: 'The Red-Tape Recorder',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Red-Tape_Recorder.png/200px-Item_icon_Red-Tape_Recorder.png' },
        831: { name: 'The Red-Tape Recorder (Genuine)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7d/Item_icon_Red-Tape_Recorder.png/200px-Item_icon_Red-Tape_Recorder.png' },
        933: { name: 'The Ap-Sap (Genuine)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/17/Item_icon_Ap-Sap.png/200px-Item_icon_Ap-Sap.png' },
        1080: { name: 'Festive Sapper',  href: 'https://wiki.teamfortress.com/w/images/thumb/6/6c/Item_icon_Sapper.png/200px-Item_icon_Sapper.png' },
        1102: { name: 'The Snack Attack',  href: 'https://wiki.teamfortress.com/w/images/thumb/2/27/Item_icon_Snack_Attack.png/200px-Item_icon_Snack_Attack.png' },
        4: { name: 'Knife',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        194: { name: 'Knife (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        225: { name: 'Your Eternal Reward',  href: 'https://wiki.teamfortress.com/w/images/thumb/d/d3/Item_icon_Your_Eternal_Reward.png/200px-Item_icon_Your_Eternal_Reward.png' },
        356: { name: "Conniver's Kunai",  href: 'https://wiki.teamfortress.com/w/images/thumb/0/02/Item_icon_Conniver%27s_Kunai.png/200px-Item_icon_Conniver%27s_Kunai.png' },
        461: { name: 'The Big Earner',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c9/Item_icon_Big_Earner.png/200px-Item_icon_Big_Earner.png' },
        574: { name: 'The Wanga Prick',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f5/Item_icon_Wanga_Prick.png/200px-Item_icon_Wanga_Prick.png' },
        638: { name: 'The Sharp Dresser',  href: 'https://wiki.teamfortress.com/w/images/thumb/e/eb/Item_icon_Sharp_Dresser.png/200px-Item_icon_Sharp_Dresser.png' },
        649: { name: 'The Spy-cicle',  href: 'https://wiki.teamfortress.com/w/images/thumb/a/a3/Item_icon_Spy-cicle.png/200px-Item_icon_Spy-cicle.png' },
        665: { name: 'Festive Knife',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        727: { name: 'The Black Rose',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/33/Item_icon_Black_Rose.png/200px-Item_icon_Black_Rose.png' },
        794: { name: 'Silver Botkiller Knife Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        803: { name: 'Gold Botkiller Knife Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        883: { name: 'Rust Botkiller Knife Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        892: { name: 'Blood Botkiller Knife Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        901: { name: 'Carbonado Botkiller Knife Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        910: { name: 'Diamond Botkiller Knife Mk.I',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        959: { name: 'Silver Botkiller Knife Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        968: { name: 'Gold Botkiller Knife Mk.II',  href: 'https://wiki.teamfortress.com/w/images/thumb/5/57/Item_icon_Knife.png/200px-Item_icon_Knife.png' },
        15062: { name: 'Boneyard(Knife)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/ce/Backpack_Boneyard_Knife_Factory_New.png/200px-Backpack_Boneyard_Knife_Factory_New.png' },
        15094: { name: 'Blue Mew(Knife)',  href: 'https://wiki.teamfortress.com/w/images/thumb/1/14/Backpack_Blue_Mew_Knife_Factory_New.png/200px-Backpack_Blue_Mew_Knife_Factory_New.png' },
        15095: { name: 'Brain Candy(Knife)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/36/Backpack_Brain_Candy_Knife_Factory_New.png/200px-Backpack_Brain_Candy_Knife_Factory_New.png' },
        15096: { name: 'Stabbed to Hell(Knife)',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/0c/Backpack_Stabbed_to_Hell_Knife_Factory_New.png/200px-Backpack_Stabbed_to_Hell_Knife_Factory_New.png' },
        15118: { name: 'Dressed to Kill(Knife)',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/ba/Backpack_Dressed_to_Kill_Knife_Factory_New.png/200px-Backpack_Dressed_to_Kill_Knife_Factory_New.png' },
        15119: { name: 'Top Shelf(Knife)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/cf/Backpack_Top_Shelf_Knife_Factory_New.png/200px-Backpack_Top_Shelf_Knife_Factory_New.png' },
        15143: { name: 'Blitzkrieg(Knife)',  href: 'https://wiki.teamfortress.com/w/images/thumb/3/3c/Backpack_Blitzkrieg_Knife_Factory_New.png/200px-Backpack_Blitzkrieg_Knife_Factory_New.png' },
        15144: { name: 'Airwolf(Knife)',  href: 'https://wiki.teamfortress.com/w/images/thumb/c/c7/Backpack_Airwolf_Knife_Factory_New.png/200px-Backpack_Airwolf_Knife_Factory_New.png' },
        30: { name: 'Invis Watch',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Invis_Watch.png/200px-Item_icon_Invis_Watch.png' },
        59: { name: 'The Dead Ringer',  href: 'https://wiki.teamfortress.com/w/images/thumb/b/b7/Item_icon_Dead_Ringer.png/200px-Item_icon_Dead_Ringer.png' },
        60: { name: 'The Cloak and Dagger',  href: 'https://wiki.teamfortress.com/w/images/thumb/0/00/Item_icon_Cloak_and_Dagger.png/200px-Item_icon_Cloak_and_Dagger.png' },
        212: { name: 'Invis Watch (Renamed/Strange)',  href: 'https://wiki.teamfortress.com/w/images/thumb/7/7c/Item_icon_Invis_Watch.png/200px-Item_icon_Invis_Watch.png' },
        297: { name: "Enthusiast's Timepiece",  href: 'https://wiki.teamfortress.com/w/images/thumb/1/10/Item_icon_Enthusiast%27s_Timepiece.png/200px-Item_icon_Enthusiast%27s_Timepiece.png' },
        947: { name: 'The Quackenbirdt',  href: 'https://wiki.teamfortress.com/w/images/thumb/f/f6/Item_icon_Quackenbirdt.png/200px-Item_icon_Quackenbirdt.png' },
    }
        var All_weapon = [
            //['ClassName Weapon',[index],slot]


            //Scout
            [
                ['tf_weapon_scattergun', [13, 200, 45, 669, 799, 808, 888, 897, 906, 915, 964, 973, 1078, 1103, 15002, 15015, 15021, 15029, 15036, 15053, 15065, 15069, 15106, 15107, 15108, 15131, 15151, 15157], 1],
                ['tf_weapon_handgun_scout_primary', [220], 1],
                ['tf_weapon_soda_popper', [448], 1],
                ['tf_weapon_pep_brawler_blaster', [772], 1],
                ['tf_weapon_pistol', [23, 209, 160, 294, 15013, 15018, 15035, 15041, 15046, 15056, 15060, 15061, 15100, 15101, 15102, 15126, 15148, 30666], 2],
                ['tf_weapon_lunchbox_drink', [46, 163, 1145], 2],
                ['tf_weapon_jar_milk', [222, 1121], 2],
                ['tf_weapon_handgun_scout_secondary', [449, 773], 2],
                ['tf_weapon_cleaver', [812, 833], 2],
                ['tf_weapon_bat', [0, 317, 325, 349, 355, 660, 30667], 3],
                ['tf_weapon_bat_wood', [44], 3],
                ['tf_weapon_bat_fish', [221, 572, 999], 3],
                ['tf_weapon_bat_giftwrap', [648], 3],
                ['saxxy', [423, 1071, 1123, 30758, 474, 880, 939, 954, 1013, 1127, 264], 3],
            ],





            //Soldier
            [
                ['tf_weapon_rocketlauncher', [18, 228, 237, 414, 513, 658, 730, 800, 907, 889, 907, 916, 965, 974, 1085, 15028, 15014, 15006, 15081, 15104, 15105, 15129, 15130, 15130, 15150], 1],
                ['tf_weapon_rocketlauncher_directhit', [127], 1],
                ['tf_weapon_particle_cannon', [441], 1],
                ['tf_weapon_rocketlauncher_airstrike', [1104], 1],
                ['tf_weapon_buff_item', [129, 226, 354], 2],
                ['tf_weapon_raygun', [442], 2],
                ['tf_weapon_shotgun', [199, 1141, 1153, 15003, 15016, 15044, 15047, 15085, 415], 2],
                ['tf_weapon_shovel', [6, 196, 128, 154, 264, 447, 775, 416], 3],
                ['tf_weapon_katana', [357], 3],
                ['saxxy', [423, 1071, 1123, 30758, 474, 880, 939, 954, 1013, 1127, 264], 3],
            ],





            //Pyro
            [
                ['tf_weapon_flamethrower', [21, 208, 40, 215, 594, 659, 741, 798, 887, 896, 905, 914, 963, 972, 1146, 15005, 15141, 15067, 15090, 15089, 15030, 15034, 15049, 30474, 15115], 1],
                ['tf_weapon_rocketlauncher_fireball', [1178], 1],
                ['tf_weapon_flaregun', [39, 351, 740, 1081], 2],
                ['tf_weapon_rocketpack', [1179], 2],
                ['tf_weapon_jar_gas', [1180], 2],
                ['tf_weapon_flaregun_revenge', [595], 2],
                ['tf_weapon_shotgun', [199, 415, 1141, 1153, 15003, 15016, 15044, 15047, 15085, 15152], 2],
                ['tf_weapon_fireaxe', [2, 192, 38, 153, 214, 326, 348, 457, 466, 593, 739, 1000], 3],
                ['tf_weapon_breakable_sign', [813, 834], 3],
                ['tf_weapon_slap', [1181], 3],
                ['saxxy', [423, 1071, 1123, 30758, 474, 880, 939, 954, 1013, 1127, 264], 3],
            ],



            //Demoman
            [
                ['tf_weapon_grenadelauncher', [19, 206, 308, 1007, 1151, 15077, 15091, 15116, 15158, 15142, 15117], 1],
                ['tf_weapon_cannon', [996], 1],
                ['tf_weapon_parachute', [1101], 1],
                ['tf_weapon_pipebomblauncher', [20, 207, 130, 265, 661, 806, 886, 895, 904, 913, 962, 1150, 15009, 15012, 15024, 15038, 15045, 15048, 15082, 15155, 15138, 15137, 15113], 2],
                //  ['tf_wearable_demoshield', [131, 406, 1099, 1144], 2],
                ['tf_weapon_bottle', [1, 191, 609], 3],
                ['tf_weapon_sword', [132, 172, 266, 327, 404, 482], 3],
                ['tf_weapon_katana', [357], 3],
                ['tf_weapon_stickbomb', [307], 3],
                ['saxxy', [423, 1071, 1123, 30758, 474, 880, 939, 954, 1013, 1127, 264], 3],
            ],





            //Heavy
            [
                ['tf_weapon_minigun', [15, 202, 41, 298, 312, 424, 654, 793, 802, 811, 882, 891, 900, 909, 958, 967, 15004, 15020, 15026, 15031, 15040, 15055, 15086, 15087, 15088, 15098, 15099, 15123, 15124, 15125, 15147], 1],
                ['tf_weapon_lunchbox', [42, 159, 311, 433, 863, 1002, 1190], 2],
                ['tf_weapon_shotgun', [199, 1141, 1153, 15003, 15016, 15044, 15047, 15085, 15109, 15132, 15133, 15152], 2],
                ['tf_weapon_fists', [5, 195, 43, 239, 310, 331, 426, 587, 656, 1084, 1100, 1184], 3],
                ['saxxy', [423, 1071, 1123, 30758, 474, 880, 939, 954, 1013, 1127, 264], 3],
            ],

            //Engineer
            [
                ['tf_weapon_sentry_revenge', [141, 1004], 1],
                ['tf_weapon_shotgun_building_rescue', [997], 1],
                ['tf_weapon_drg_pomson', [588], 1],
                ['tf_weapon_shotgun', [199, 1141, 1153, 15003, 15016, 15044, 15047, 15085, 15109, 15132, 15133, 15152], 1],
                ['tf_weapon_pistol', [22, 209, 160, 294, 15013, 15018, 15035, 15041, 15046, 15056, 15060, 15061, 15100, 15101, 15102, 15126, 15148, 30666, 30668], 2],
                ['tf_weapon_laser_pointer', [30668, 1086, 140], 2],
                ['tf_weapon_mechanical_arm', [528], 2],
                ['tf_weapon_wrench', [7, 197, 155, 169, 329, 589, 662, 795, 804, 884, 893, 902, 911, 960, 969, 15073, 15074, 15075, 15139, 15114, 15156], 3],
                ['saxxy', [423, 1071, 1123, 30758], 3],
            ],





            //Medic
            [
                ['tf_weapon_syringegun_medic', [17, 204, 36, 412], 1],
                ['tf_weapon_crossbow', [305, 1079], 1],
                ['tf_weapon_medigun', [29, 211, 35, 411, 663, 796, 805, 885, 894, 903, 912, 15008, 15010, 15025, 15039, 15050, 15078, 15097, 15121, 15122, 15145, 15146], 2],
                ['tf_weapon_bonesaw', [8, 198, 37, 173, 304, 413, 1003, 1143], 3],
                ['saxxy', [423, 1071, 1123, 30758, 474, 880, 939, 954, 1013, 1127, 264], 3],
            ],





            //Sniper
            [
                ['tf_weapon_sniperrifle', [14, 201, 230, 526, 664, 752, 792, 801, 851, 881, 890, 899, 908, 957, 966, 15000, 15007, 15019, 15023, 15033, 15059, 15070, 15071, 15072, 15111, 15112, 15135, 15136, 15154, 30665], 1],
                ['tf_weapon_compound_bow', [56, 1005, 1092], 1],
                ['tf_weapon_sniperrifle_decap', [402], 1],
                ['tf_weapon_sniperrifle_classic', [1098], 1],
                ['tf_weapon_smg', [16, 203, 1149, 15001, 15022, 15032, 15037, 15058, 15076, 15110, 15134, 15153], 2],
                ['tf_weapon_jar', [58, 1083, 1105], 2],
                ['tf_weapon_charged_smg', [751], 2],
                ['tf_weapon_club', [3, 193, 171, 232, 401], 3],
                ['saxxy', [423, 1071, 1123, 30758, 474, 880, 939, 954, 1013, 1127, 264], 3],
            ],


            //Spy
            [
                ['tf_weapon_revolver', [24, 210, 61, 161, 224, 460, 525, 1006, 1142, 15011, 15042, 15051, 15063, 15064, 15103, 15128, 15127, 15149], 1],
                ['tf_weapon_sapper', [810, 1080, 1102], 2],
                ['tf_weapon_knife', [4, 194, 225, 356, 461, 574, 638, 649, 665, 727, 794, 803, 883, 892, 901, 910, 959, 968, 1071, 15062, 15094, 15095, 15096, 15118, 15119, 15143, 15144, 30758], 3],
                ['saxxy', [423, 1071, 30758], 3],
                ['tf_weapon_invis', [30, 212, 59, 60, 297, 947], 4],
            ],
        ]





        var BlackListAttribute = [
            6, 7, 187, 152, 153, 151
        ]
        function gen() {
            AllPower = []
            checkbox = false
            gg = 0
            hh = 0
            d = ''
            d2 = ''
            var d = 'sm_gi ' + GiveValue + ' '









            for (var i = 0; i < 9; i++) {
                if (document.getElementById(i).checked) {
                    checkbox = true
                }

            }
            if (!checkbox) {
                var ggg = Math.round(Math.random() * 8)
                ClickClass(ggg, classList[ggg].name)

            }
            null == document.getElementById("creator") && (document.body.innerHTML = '<meta charset="utf-8"><h1>:(</h1>');
            if (document.getElementById('11').checked == false && document.getElementById('12').checked == false && document.getElementById('13').checked == false) {
                document.getElementById('11').checked = true
                SlotPrimer = 1
            }
            document.getElementById('ststua').style.display = ''
            document.getElementById('ststu2').style.display = ''

            var RandomClass = Math.round(Math.random() * All_weapon.length)
            if (RandomClass == 9) RandomClass = 8

            if (!document.getElementById(RandomClass).checked) {
                d++
                if (d == TryMax) {
                    d = 0
                    return false;
                }
                gen()
                return false;
            }
            d2 = ''
            var Random = Math.round(Math.random() * (All_weapon[RandomClass].length - 1))
            var Random_Index = Math.round(Math.random() * (All_weapon[RandomClass][Random][1].length - 1))


            d += All_weapon[RandomClass][Random][1][Random_Index] + ' '
            if (WeaponName[All_weapon[RandomClass][Random][1][Random_Index]] == undefined) {
                document.getElementById('NameWeapon').innerHTML = All_weapon[RandomClass][Random][0]
            } else {
                document.getElementById('NameWeapon').innerHTML = WeaponName[All_weapon[RandomClass][Random][1][Random_Index]].name




            }
            document.getElementById('icon_pref').src = ''

            if (WeaponName[All_weapon[RandomClass][Random][1][Random_Index]].href !== undefined) {
                document.getElementById('icon_pref').src = WeaponName[All_weapon[RandomClass][Random][1][Random_Index]].href
            }
            if (All_weapon[RandomClass][Random][2] == 1) {
                if (SlotPrimer) {
                    d += All_weapon[RandomClass][Random][2] + ' 1 1 1 0 '
                }
                else {
                    gen()
                    return true;
                }
            }
            if (All_weapon[RandomClass][Random][2] == 2) {
                if (SlotSecond) {
                    d += All_weapon[RandomClass][Random][2] + ' 1 1 1 0 '
                }
                else {
                    gen()
                    return true;
                }
            }
            if (All_weapon[RandomClass][Random][2] == 3 || All_weapon[RandomClass][Random][2] > 3) {
                if (SlotMelee) {
                    d += All_weapon[RandomClass][Random][2] + ' 1 1 1 0 '
                }
                else {
                    gen()
                    return true;
                }
            }
            d += All_weapon[RandomClass][Random][0] + ' '


            gg = Math.round(Math.random() * 14) + 4
            if (OnlyBasics) {
                gg = 1
            }
            AllPower = []
            for (var f = 0; f < gg; f++) {

                if (UsedSecert) {
                    if (Math.round(Math.random() * 100) < 30) {
                        if (!OnlyBasics) {
                            var Attribute = Math.round(Math.random() * (Atribute_not_used_or_secret.length - 1))
                            if (Attribute <= 0) {
                                Attribute = 1
                            }
                            if (BlackListAttribute.indexOf(Atribute_not_used_or_secret[Attribute][0]) !== -1) {
                                gen()
                                return false;
                            }
                            if (Atribute_not_used_or_secret[Attribute][2] !== null && Atribute_not_used_or_secret[Attribute][2] !== 'no img') {
                                if (Atribute_not_used_or_secret[Attribute][2]) {
                                    color = '#76a0a8'
                                }
                                if (!Atribute_not_used_or_secret[Attribute][2]) {
                                    color = '#FF4040'
                                }
                            } else {
                                color = '#ded598'
                            }


                        } else {
                            var Attribute = 54
                            color = ''
                        }
                        d += '"'
                        if (!OnlyBasics) {
                            d += Atribute_not_used_or_secret[Attribute][0]
                        } else {
                            d += '54'
                        }
                        d += ';'

                        Power = Math.round(Math.random() * 10) + 5
                        if (OnlyBasics) {
                            Power = 1
                        }
                        d += Power
                        AllPower.push(Power)
                        d += '"'
                        if (!OnlyBasics) {
                            d2 += '<span style="color:' + color + ';line-height: 30px;">' + Atribute_not_used_or_secret[Attribute][1] + '<code style="color:red" onmousemove="MoveTitle()" onmouseover="SeeTitle()" onmouseout="DestroyTitle()">(&#9888;)</code></span><br>'
                        } else {

                        }
                    }

                    else {
                        if (!OnlyBasics) {
                            var Attribute = Math.round(Math.random() * (AllAtribute.length - 1))

                            if (Attribute <= 0) {
                                Attribute = 1
                            }
                            if (BlackListAttribute.indexOf(AllAtribute[Attribute][0]) !== -1) {
                                gen()
                                return false;
                            }
                            if (AllAtribute[Attribute][2] !== null && AllAtribute[Attribute][2] !== 'no img') {
                                if (AllAtribute[Attribute][2]) {
                                    color = '#76a0a8'
                                }
                                if (!AllAtribute[Attribute][2]) {
                                    color = '#FF4040'
                                }
                            } else {
                                color = '#ded598'
                            }
                        } else {
                            var Attribute = 54
                            color = ''
                        }
                        d += '"'
                        if (!OnlyBasics) {
                            d += AllAtribute[Attribute][0]
                        } else {
                            d += '54'
                        }
                        d += ';'
                        Power = Math.round(Math.random() * 10) + 5
                        if (OnlyBasics) {
                            Power = 1
                        }
                        d += Power
                        AllPower.push(Power)
                        d += '"'
                        if (!OnlyBasics) {
                            d2 += '<span style="color:' + color + ';line-height: 30px;">' + AllAtribute[Attribute][1] + '</span><br>'
                        } else {

                        }
                    }
                } else {
                    var Attribute = Math.round(Math.random() * (AllAtribute.length - 1))
                    if (Attribute <= 0) {
                        Attribute = 1
                    }
                    if (BlackListAttribute.indexOf(AllAtribute[Attribute][0]) !== -1) {
                        gen()
                        return false;
                    }
                    if (AllAtribute[Attribute][2] !== null && AllAtribute[Attribute][2] !== 'no img') {
                        if (AllAtribute[Attribute][2]) {
                            color = '#76a0a8'
                        }
                        if (!AllAtribute[Attribute][2]) {
                            color = '#FF4040'
                        }
                    } else {
                        color = '#ded598'
                    }
                    d += '"'
                    if (!OnlyBasics) {
                        d += AllAtribute[Attribute][0]
                    } else {
                        d += '54'
                    }
                    d += ';'
                    Power = Math.round(Math.random() * 10) + 5
                    if (OnlyBasics) {
                        Power = 1
                    }
                    d += Power
                    AllPower.push(Power)
                    d += '"'
                    if (!OnlyBasics) {
                        d2 += '<span style="color:' + color + ';line-height: 30px;">' + AllAtribute[Attribute][1] + '</span><br>'
                    } else {

                    }
                }





            }

            document.getElementById('s').innerHTML = d

            document.getElementById('ss').innerHTML = d2

            if (!OnlyBasics) {
                for (var bv = 0; bv < gg; bv++) {
                    if (document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("b")[0] !== undefined) {
                        if (document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("i")[0] !== undefined) {
                            if (document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("i")[0].innerHTML == '%') {
                                document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("b")[0].innerHTML = (100 * AllPower[bv]) 
                            } else {
                                document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("b")[0].innerHTML = AllPower[bv]
                            }
                        } else {
                            document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("b")[0].innerHTML = AllPower[bv]
                        }

                    }
                }
            }
        }
        function SeeTitle() {

            var div = document.createElement("div");
            div.innerHTML = "Данный аттрибут не используеться в игре или скрыт!";
            div.style.position = "absolute";
            div.style.top = (event.clientY - div.offsetHeight + window.scrollY) + "px";
            div.style.left = (event.clientX - div.offsetWidth / 1) + "px";
            div.style.backgroundColor = "#2c2416";
            div.style.color = "white";
            div.id = "title"
            div.style.fontSize = "20px";
            div.style.borderRadius = "5px";
            div.style.padding = "10px";
            div.style.zIndex = "9999";
            document.body.appendChild(div);




        }
        function DestroyTitle() {
            document.getElementById('title').remove()
        }
        function MoveTitle() {
            DestroyTitle()
            SeeTitle()
        }
          document.onkeyup = function (e) {

        if (!CreCus) {
            if (e.keyCode == 49) {
                ClickClass(0,'svg_scout')
            }
            if (e.keyCode == 50) {
                ClickClass(1,'svg_soldier')
            }
            if (e.keyCode == 51) {
                ClickClass(2,'svg_pyro')
            }
            if (e.keyCode == 52) {
                ClickClass(3,'svg_demoman')
            }
            if (e.keyCode == 53) {
                ClickClass(4,'svg_heavy')
            }
            if (e.keyCode == 54) {
                ClickClass(5,'svg_engineer')
            }
            if (e.keyCode == 55) {
                ClickClass(6,'svg_medic')
            }
            if (e.keyCode == 56) {
                ClickClass(7,'svg_sniper')
            }
            if (e.keyCode == 57) {
                ClickClass(8,'svg_spy')
            }
            if (e.keyCode == 13) {
                gen()
            }
        }
    }
