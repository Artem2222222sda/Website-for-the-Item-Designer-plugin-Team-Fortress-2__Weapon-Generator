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
            13: { name: 'Scattergun', ClassIndex: 0, },
            45: { name: 'Force-A-Nature', ClassIndex: 0, },
            200: { name: 'Scattergun (Renamed/Strange)', ClassIndex: 0, },
            220: { name: 'The Shortstop', ClassIndex: 0, },
            448: { name: 'The Soda Popper', ClassIndex: 0, },
            669: { name: 'Festive Scattergun', ClassIndex: 0, },
            772: { name: "Baby Face's Blaster", ClassIndex: 0, },
            799: { name: 'Silver Botkiller Scattergun Mk.I', ClassIndex: 0, },
            808: { name: 'Gold Botkiller Scattergun Mk.I', ClassIndex: 0, },
            888: { name: 'Rust Botkiller Scattergun Mk.I', ClassIndex: 0, },
            897: { name: 'Blood Botkiller Scattergun Mk.I', ClassIndex: 0, },
            906: { name: 'Carbonado Botkiller Scattergun Mk.I', ClassIndex: 0, },
            915: { name: 'Diamond Botkiller Scattergun Mk.I', ClassIndex: 0, },
            964: { name: 'Silver Botkiller Scattergun Mk.II', ClassIndex: 0, },
            973: { name: 'Gold Botkiller Scattergun Mk.II', ClassIndex: 0, },
            1078: { name: 'Festive Force-A-Nature', ClassIndex: 0, },
            1103: { name: 'The Back Scatter', ClassIndex: 0, },
            15002: { name: 'Night Terror(Scattergun)', ClassIndex: 0, },
            15015: { name: 'Tartan Torpedo(Scattergun)', ClassIndex: 0, },
            15021: { name: 'Country Crusher(Scattergun)', ClassIndex: 0, },
            15029: { name: 'Backcountry Blaster(Scattergun)', ClassIndex: 0, },
            15036: { name: 'Spruce Deuce(Scattergun)', ClassIndex: 0, },
            15053: { name: 'Current Event(Scattergun)', ClassIndex: 0, },
            15065: { name: 'Macabre Web(Scattergun)', ClassIndex: 0, },
            15069: { name: 'Nutcracker(Scattergun)', ClassIndex: 0, },
            15106: { name: 'Blue Mew(Scattergun)', ClassIndex: 0, },
            15107: { name: 'Flower Power(Scattergun)', ClassIndex: 0, },
            15108: { name: 'Shot to Hell(Scattergun)', ClassIndex: 0, },
            15131: { name: 'Coffin Nail(Scattergun)', ClassIndex: 0, },
            15151: { name: 'Killer Bee(Scattergun)', ClassIndex: 0, },
            15157: { name: 'Corsair(Scattergun)', ClassIndex: 0, },
            23: { name: "Scout's Pistol", ClassIndex: 0, },
            46: { name: 'Bonk! Atomic Punch', ClassIndex: 0, },
            160: { name: 'Vintage Lugermorph', ClassIndex: 0, },
            163: { name: 'Crit-a-Cola', ClassIndex: 0, },
            209: { name: 'Pistol (Renamed/Strange)', ClassIndex: 0, },
            222: { name: 'Mad Milk', ClassIndex: 0, },
            294: { name: 'Lugermorph', ClassIndex: 0, },
            449: { name: 'The Winger', ClassIndex: 0, },
            773: { name: "Pretty Boy's Pocket Pistol", ClassIndex: 0, },
            812: { name: 'The Flying Guillotine', ClassIndex: 0, },
            833: { name: 'The Flying Guillotine (Genuine)', ClassIndex: 0, },
            1121: { name: 'Mutated Milk', ClassIndex: 0, },
            1145: { name: 'Festive Bonk!', ClassIndex: 0, },
            15013: { name: 'Red Rock Roscoe(Pistol)', ClassIndex: 0, },
            15018: { name: 'Homemade Heater(Pistol)', ClassIndex: 0, },
            15035: { name: 'Hickory Holepuncher(Pistol)', ClassIndex: 0, },
            15041: { name: 'Local Hero(Pistol)', ClassIndex: 0, },
            15046: { name: 'Black Dahlia(Pistol)', ClassIndex: 0, },
            15056: { name: 'Sandstone Special(Pistol)', ClassIndex: 0, },
            15060: { name: 'Macabre Web(Pistol)', ClassIndex: 0, },
            15061: { name: 'Nutcracker(Pistol)', ClassIndex: 0, },
            15100: { name: 'Blue Mew(Pistol)', ClassIndex: 0, },
            15101: { name: 'Brain Candy(Pistol)', ClassIndex: 0, },
            15102: { name: 'Shot to Hell(Pistol)', ClassIndex: 0, },
            15126: { name: 'Dressed To Kill(Pistol)', ClassIndex: 0, },
            15148: { name: 'Blitzkrieg(Pistol)', ClassIndex: 0, },
            30666: { name: 'The C.A.P.P.E.R.', ClassIndex: 0, },
            0: { name: 'Bat', ClassIndex: 0, },
            44: { name: 'The Sandman', ClassIndex: 0, },
            190: { name: 'Bat (Renamed/Strange)', ClassIndex: 0, },
            221: { name: 'The Holy Mackerel', ClassIndex: 0, },
            264: { name: 'Frying Pan', ClassIndex: 0, },
            317: { name: 'The Candy Cane', ClassIndex: 0, },
            325: { name: 'The Boston Basher', ClassIndex: 0, },
            349: { name: 'Sun-on-a-Stick', ClassIndex: 0, },
            355: { name: "The Fan O'War", ClassIndex: 0, },
            423: { name: 'Saxxy', ClassIndex: 0, },
            450: { name: 'The Atomizer', ClassIndex: 0, },
            452: { name: 'Three-Rune Blade', ClassIndex: 0, },
            474: { name: 'The Conscientious Objector', ClassIndex: 0, },
            572: { name: 'Unarmed Combat', ClassIndex: 0, },
            648: { name: 'The Wrap Assassin', ClassIndex: 0, },
            660: { name: 'Festive Bat', ClassIndex: 0, },
            880: { name: 'The Freedom Staff', ClassIndex: 0, },
            939: { name: 'The Bat Outta Hell', ClassIndex: 0, },
            954: { name: 'The Memory Maker', ClassIndex: 0, },
            999: { name: 'Festive Holy Mackerel', ClassIndex: 0, },
            1013: { name: 'The Ham Shank', ClassIndex: 0, },
            1071: { name: 'Gold Frying Pan', ClassIndex: 0, },
            1123: { name: 'The Necro Smasher', ClassIndex: 0, },
            1127: { name: 'The Crossing Guard', ClassIndex: 0, },
            30667: { name: 'Batsaber', ClassIndex: 0, },
            30758: { name: 'Prinny Machete', ClassIndex: 0, },
            18: { name: 'Rocket Launcher', ClassIndex: 1, },
            127: { name: 'The Direct Hit', ClassIndex: 1, },
            205: { name: 'Rocket Launcher (Renamed/Strange)', ClassIndex: 1, },
            228: { name: 'The Black Box', ClassIndex: 1, },
            237: { name: 'Rocket Jumper', ClassIndex: 1, },
            414: { name: 'The Liberty Launcher', ClassIndex: 1, },
            441: { name: 'The Cow Mangler 5000', ClassIndex: 1, },
            513: { name: 'The Original', ClassIndex: 1, },
            658: { name: 'Festive Rocket Launcher', ClassIndex: 1, },
            730: { name: "The Beggar's Bazooka", ClassIndex: 1, },
            800: { name: 'Silver Botkiller Rocket Launcher Mk.I', ClassIndex: 1, },
            809: { name: 'Gold Botkiller Rocket Launcher Mk.I', ClassIndex: 1, },
            889: { name: 'Rust Botkiller Rocket Launcher Mk.I', ClassIndex: 1, },
            898: { name: 'Blood Botkiller Rocket Launcher Mk.I', ClassIndex: 1, },
            907: { name: 'Carbonado Botkiller Rocket Launcher Mk.I', ClassIndex: 1, },
            916: { name: 'Diamond Botkiller Rocket Launcher Mk.I', ClassIndex: 1, },
            965: { name: 'Silver Botkiller Rocket Launcher Mk.II', ClassIndex: 1, },
            974: { name: 'Gold Botkiller Rocket Launcher Mk.II', ClassIndex: 1, },
            1085: { name: 'Festive Black Box', ClassIndex: 1, },
            1104: { name: 'The Air Strike', ClassIndex: 1, },
            15006: { name: 'Woodland Warrior(Rocket Launcher)', ClassIndex: 1, },
            15014: { name: 'Sand Cannon(Rocket Launcher)', ClassIndex: 1, },
            15028: { name: 'American Pastoral(Rocket Launcher)', ClassIndex: 1, },
            15043: { name: 'Smalltown Bringdown(Rocket Launcher)', ClassIndex: 1, },
            15052: { name: 'Shell Shocker(Rocket Launcher)', ClassIndex: 1, },
            15057: { name: 'Aqua Marine(Rocket Launcher)', ClassIndex: 1, },
            15081: { name: 'Autumn(Rocket Launcher)', ClassIndex: 1, },
            15104: { name: 'Blue Mew(Rocket Launcher)', ClassIndex: 1, },
            15105: { name: 'Brain Candy(Rocket Launcher)', ClassIndex: 1, },
            15129: { name: 'Coffin Nail(Rocket Launcher)', ClassIndex: 1, },
            15130: { name: "High Roller's(Rocket Launcher)", ClassIndex: 1, },
            15150: { name: 'Warhawk(Rocket Launcher)', ClassIndex: 1, },
            10: { name: "Soldier's Shotgun", ClassIndex: 1, },
            129: { name: 'The Buff Banner', ClassIndex: 1, },
            133: { name: 'Gunboats', ClassIndex: 1, },
            199: { name: 'Shotgun (Renamed/Strange)', ClassIndex: 1, },
            226: { name: "The Battalion's Backup", ClassIndex: 1, },
            354: { name: 'The Concheror', ClassIndex: 1, },
            415: { name: 'The Reserve Shooter', ClassIndex: 1, },
            442: { name: 'The Righteous Bison', ClassIndex: 1, },
            444: { name: 'The Mantreads', ClassIndex: 1, },
            1001: { name: 'Festive Buff Banner', ClassIndex: 1, },
            1101: { name: 'The B.A.S.E. Jumper', ClassIndex: 1, },
            1141: { name: 'Festive Shotgun', ClassIndex: 1, },
            1153: { name: 'Panic Attack', ClassIndex: 1, },
            15003: { name: 'Backwoods Boomstick(Shotgun)', ClassIndex: 1, },
            15016: { name: 'Rustic Ruiner(Shotgun)', ClassIndex: 1, },
            15044: { name: 'Civic Duty(Shotgun)', ClassIndex: 1, },
            15047: { name: 'Lightning Rod(Shotgun)', ClassIndex: 1, },
            15085: { name: 'Autumn(Shotgun)', ClassIndex: 1, },
            15109: { name: 'Flower Power(Shotgun)', ClassIndex: 1, },
            15132: { name: 'Coffin Nail(Shotgun)', ClassIndex: 1, },
            15133: { name: 'Dressed to Kill(Shotgun)', ClassIndex: 1, },
            15152: { name: 'Red Bear(Shotgun)', ClassIndex: 1, },
            6: { name: 'Shovel', ClassIndex: 1, },
            128: { name: 'The Equalizer', ClassIndex: 1, },
            154: { name: 'The Pain Train', ClassIndex: 1, },
            196: { name: 'Shovel (Renamed/Strange)', ClassIndex: 1, },
            264: { name: 'Frying Pan', ClassIndex: 1, },
            357: { name: 'The Half-Zatoichi', ClassIndex: 1, },
            416: { name: 'The Market Gardener', ClassIndex: 1, },
            423: { name: 'Saxxy', ClassIndex: 1, },
            447: { name: 'The Disciplinary Action', ClassIndex: 1, },
            474: { name: 'The Conscientious Objector', ClassIndex: 1, },
            775: { name: 'The Escape Plan', ClassIndex: 1, },
            880: { name: 'The Freedom Staff', ClassIndex: 1, },
            939: { name: 'The Bat Outta Hell', ClassIndex: 1, },
            954: { name: 'The Memory Maker', ClassIndex: 1, },
            1013: { name: 'The Ham Shank', ClassIndex: 1, },
            1071: { name: 'Gold Frying Pan', ClassIndex: 1, },
            1123: { name: 'The Necro Smasher', ClassIndex: 1, },
            1127: { name: 'The Crossing Guard', ClassIndex: 1, },
            30758: { name: 'Prinny Machete', ClassIndex: 1, },
            21: { name: 'Flame Thrower', ClassIndex: 2, },
            40: { name: 'The Backburner', ClassIndex: 2, },
            208: { name: 'Flame Thrower (Renamed/Strange)', ClassIndex: 2, },
            215: { name: 'The Degreaser', ClassIndex: 2, },
            594: { name: 'The Phlogistinator', ClassIndex: 2, },
            659: { name: 'Festive Flame Thrower', ClassIndex: 2, },
            741: { name: 'The Rainblower', ClassIndex: 2, },
            798: { name: 'Silver Botkiller Flame Thrower Mk.I', ClassIndex: 2, },
            807: { name: 'Gold Botkiller Flame Thrower Mk.I', ClassIndex: 2, },
            887: { name: 'Rust Botkiller Flame Thrower Mk.I', ClassIndex: 2, },
            896: { name: 'Blood Botkiller Flame Thrower Mk.I', ClassIndex: 2, },
            905: { name: 'Carbonado Botkiller Flame Thrower Mk.I', ClassIndex: 2, },
            914: { name: 'Diamond Botkiller Flame Thrower Mk.I', ClassIndex: 2, },
            963: { name: 'Silver Botkiller Flame Thrower Mk.II', ClassIndex: 2, },
            972: { name: 'Gold Botkiller Flame Thrower Mk.II', ClassIndex: 2, },
            1146: { name: 'Festive Backburner', ClassIndex: 2, },
            1178: { name: "Dragon's Fury", ClassIndex: 2, },
            15005: { name: 'Forest Fire(Flame Thrower)', ClassIndex: 2, },
            15017: { name: 'Barn Burner(Flame Thrower)', ClassIndex: 2, },
            15030: { name: 'Bovine Blazemaker(Flame Thrower)', ClassIndex: 2, },
            15034: { name: 'Earth, Sky and Fire(Flame Thrower)', ClassIndex: 2, },
            15049: { name: 'Flash Fryer(Flame Thrower)', ClassIndex: 2, },
            15054: { name: 'Turbine Torcher(Flame Thrower)', ClassIndex: 2, },
            15066: { name: 'Autumn(Flame Thrower)', ClassIndex: 2, },
            15067: { name: 'Pumpkin Patch(Flame Thrower)', ClassIndex: 2, },
            15068: { name: 'Nutcracker(Flame Thrower)', ClassIndex: 2, },
            15089: { name: 'Balloonicorn(Flame Thrower)', ClassIndex: 2, },
            15090: { name: 'Rainbow(Flame Thrower)', ClassIndex: 2, },
            15115: { name: 'Coffin Nail(Flame Thrower)', ClassIndex: 2, },
            15141: { name: 'Warhawk(Flame Thrower)', ClassIndex: 2, },
            30474: { name: 'Nostromo Napalmer', ClassIndex: 2, },
            12: { name: "Pyro's Shotgun", ClassIndex: 2, },
            39: { name: 'The Flare Gun', ClassIndex: 2, },
            199: { name: 'Shotgun (Renamed/Strange)', ClassIndex: 2, },
            351: { name: 'The Detonator', ClassIndex: 2, },
            415: { name: 'The Reserve Shooter', ClassIndex: 2, },
            595: { name: 'The Manmelter', ClassIndex: 2, },
            740: { name: 'The Scorch Shot', ClassIndex: 2, },
            1081: { name: 'Festive Flare Gun', ClassIndex: 2, },
            1141: { name: 'Festive Shotgun', ClassIndex: 2, },
            1153: { name: 'Panic Attack', ClassIndex: 2, },
            1179: { name: 'Thermal Thruster', ClassIndex: 2, },
            1180: { name: 'Gas Passer', ClassIndex: 2, },
            15003: { name: 'Backwoods Boomstick(Shotgun)', ClassIndex: 2, },
            15016: { name: 'Rustic Ruiner(Shotgun)', ClassIndex: 2, },
            15044: { name: 'Civic Duty(Shotgun)', ClassIndex: 2, },
            15047: { name: 'Lightning Rod(Shotgun)', ClassIndex: 2, },
            15085: { name: 'Autumn(Shotgun)', ClassIndex: 2, },
            15109: { name: 'Flower Power(Shotgun)', ClassIndex: 2, },
            15132: { name: 'Coffin Nail(Shotgun)', ClassIndex: 2, },
            15133: { name: 'Dressed to Kill(Shotgun)', ClassIndex: 2, },
            15152: { name: 'Red Bear(Shotgun)', ClassIndex: 2, },
            2: { name: 'Fire Axe', ClassIndex: 2, },
            38: { name: 'The Axtinguisher', ClassIndex: 2, },
            153: { name: 'Homewrecker', ClassIndex: 2, },
            192: { name: 'Fire Axe (Renamed/Strange)', ClassIndex: 2, },
            214: { name: 'The Powerjack', ClassIndex: 2, },
            264: { name: 'Frying Pan', ClassIndex: 2, },
            326: { name: 'The Back Scratcher', ClassIndex: 2, },
            348: { name: 'Sharpened Volcano Fragment', ClassIndex: 2, },
            423: { name: 'Saxxy', ClassIndex: 2, },
            457: { name: 'The Postal Pummeler', ClassIndex: 2, },
            466: { name: 'The Maul', ClassIndex: 2, },
            474: { name: 'The Conscientious Objector', ClassIndex: 2, },
            593: { name: 'The Third Degree', ClassIndex: 2, },
            739: { name: 'The Lollichop', ClassIndex: 2, },
            813: { name: 'Neon Annihilator', ClassIndex: 2, },
            834: { name: 'Neon Annihilator (Genuine)', ClassIndex: 2, },
            880: { name: 'The Freedom Staff', ClassIndex: 2, },
            939: { name: 'The Bat Outta Hell', ClassIndex: 2, },
            954: { name: 'The Memory Maker', ClassIndex: 2, },
            1000: { name: 'The Festive Axtinguisher', ClassIndex: 2, },
            1013: { name: 'The Ham Shank', ClassIndex: 2, },
            1071: { name: 'Gold Frying Pan', ClassIndex: 2, },
            1123: { name: 'The Necro Smasher', ClassIndex: 2, },
            1127: { name: 'The Crossing Guard', ClassIndex: 2, },
            1181: { name: 'Hot Hand', ClassIndex: 2, },
            30758: { name: 'Prinny Machete', ClassIndex: 2, },
            19: { name: 'Grenade Launcher', ClassIndex: 3, },
            206: { name: 'Grenade Launcher (Renamed/Strange)', ClassIndex: 3, },
            308: { name: 'The Loch-n-Load', ClassIndex: 3, },
            405: { name: "Ali Baba's Wee Booties", ClassIndex: 3, },
            608: { name: 'The Bootlegger', ClassIndex: 3, },
            996: { name: 'The Loose Cannon', ClassIndex: 3, },
            1007: { name: 'Festive Grenade Launcher', ClassIndex: 3, },
            1101: { name: 'The B.A.S.E. Jumper', ClassIndex: 3, },
            1151: { name: 'The Iron Bomber', ClassIndex: 3, },
            15077: { name: 'Autumn', ClassIndex: 3, },
            15079: { name: 'Macabre Web', ClassIndex: 3, },
            15091: { name: 'Rainbow', ClassIndex: 3, },
            15092: { name: 'Sweet Dreams', ClassIndex: 3, },
            15116: { name: 'Coffin Nail', ClassIndex: 3, },
            15117: { name: 'Top Shelf', ClassIndex: 3, },
            15142: { name: 'Warhawk', ClassIndex: 3, },
            15158: { name: 'Butcher Bird', ClassIndex: 3, },
            20: { name: 'Stickybomb Launcher', ClassIndex: 3, },
            130: { name: 'The Scottish Resistance', ClassIndex: 3, },
            131: { name: "The Chargin' Targe", ClassIndex: 3, },
            207: { name: 'Stickybomb Launcher (Renamed/Strange)', ClassIndex: 3, },
            265: { name: 'Sticky Jumper', ClassIndex: 3, },
            406: { name: 'The Splendid Screen', ClassIndex: 3, },
            661: { name: 'Festive Stickybomb Launcher', ClassIndex: 3, },
            797: { name: 'Silver Botkiller Stickybomb Launcher Mk.I', ClassIndex: 3, },
            806: { name: 'Gold Botkiller Stickybomb Launcher Mk.I', ClassIndex: 3, },
            886: { name: 'Rust Botkiller Stickybomb Launcher Mk.I', ClassIndex: 3, },
            895: { name: 'Blood Botkiller Stickybomb Launcher Mk.I', ClassIndex: 3, },
            904: { name: 'Carbonado Botkiller Stickybomb Launcher Mk.I', ClassIndex: 3, },
            913: { name: 'Diamond Botkiller Stickybomb Launcher Mk.I', ClassIndex: 3, },
            962: { name: 'Silver Botkiller Stickybomb Launcher Mk.II', ClassIndex: 3, },
            971: { name: 'Gold Botkiller Stickybomb Launcher Mk.II', ClassIndex: 3, },
            1099: { name: 'The Tide Turner', ClassIndex: 3, },
            1144: { name: 'Festive Targe', ClassIndex: 3, },
            1150: { name: 'The Quickiebomb Launcher', ClassIndex: 3, },
            15009: { name: 'Sudden Flurry(Grenade Launcher)', ClassIndex: 3, },
            15012: { name: 'Carpet Bomber(Grenade Launcher)', ClassIndex: 3, },
            15024: { name: 'Blasted Bombardier(Grenade Launcher)', ClassIndex: 3, },
            15038: { name: 'Rooftop Wrangler(Grenade Launcher)', ClassIndex: 3, },
            15045: { name: 'Liquid Asset(Grenade Launcher)', ClassIndex: 3, },
            15048: { name: 'Pink Elephant(Grenade Launcher)', ClassIndex: 3, },
            15082: { name: 'Autumn(Grenade Launcher)', ClassIndex: 3, },
            15083: { name: 'Pumpkin Patch(Grenade Launcher)', ClassIndex: 3, },
            15084: { name: 'Macabre Web(Grenade Launcher)', ClassIndex: 3, },
            15113: { name: 'Sweet Dreams(Grenade Launcher)', ClassIndex: 3, },
            15137: { name: 'Coffin Nail(Grenade Launcher)', ClassIndex: 3, },
            15138: { name: 'Dressed to Kill(Grenade Launcher)', ClassIndex: 3, },
            15155: { name: 'Blitzkrieg(Grenade Launcher)', ClassIndex: 3, },
            1: { name: 'Bottle', ClassIndex: 3, },
            132: { name: 'The Eyelander', ClassIndex: 3, },
            154: { name: 'The Pain Train', ClassIndex: 3, },
            172: { name: "The Scotsman's Skullcutter", ClassIndex: 3, },
            191: { name: 'Bottle (Renamed/Strange)', ClassIndex: 3, },
            264: { name: 'Frying Pan', ClassIndex: 3, },
            266: { name: "Horseless Headless Horsemann's Headtaker", ClassIndex: 3, },
            307: { name: 'Ullapool Caber', ClassIndex: 3, },
            327: { name: 'The Claidheamh Mòr', ClassIndex: 3, },
            357: { name: 'The Half-Zatoichi', ClassIndex: 3, },
            404: { name: 'The Persian Persuader', ClassIndex: 3, },
            423: { name: 'Saxxy', ClassIndex: 3, },
            474: { name: 'The Conscientious Objector', ClassIndex: 3, },
            482: { name: "Nessie's Nine Iron", ClassIndex: 3, },
            609: { name: 'The Scottish Handshake', ClassIndex: 3, },
            880: { name: 'The Freedom Staff', ClassIndex: 3, },
            939: { name: 'The Bat Outta Hell', ClassIndex: 3, },
            954: { name: 'The Memory Maker', ClassIndex: 3, },
            1013: { name: 'The Ham Shank', ClassIndex: 3, },
            1071: { name: 'Gold Frying Pan', ClassIndex: 3, },
            1082: { name: 'Festive Eyelander', ClassIndex: 3, },
            1123: { name: 'The Necro Smasher', ClassIndex: 3, },
            1127: { name: 'The Crossing Guard', ClassIndex: 3, },
            30758: { name: 'Prinny Machete', ClassIndex: 3, },
            15: { name: 'Minigun', ClassIndex: 4, },
            41: { name: 'Natascha', ClassIndex: 4, },
            202: { name: 'Minigun (Renamed/Strange)', ClassIndex: 4, },
            298: { name: 'Iron Curtain', ClassIndex: 4, },
            312: { name: 'The Brass Beast', ClassIndex: 4, },
            424: { name: 'Tomislav', ClassIndex: 4, },
            654: { name: 'Festive Minigun', ClassIndex: 4, },
            793: { name: 'Silver Botkiller Minigun Mk.I', ClassIndex: 4, },
            802: { name: 'Gold Botkiller Minigun Mk.I', ClassIndex: 4, },
            811: { name: 'The Huo-Long Heater', ClassIndex: 4, },
            832: { name: 'The Huo-Long Heater (Genuine)', ClassIndex: 4, },
            850: { name: 'Deflector (MvM only?)', ClassIndex: 4, },
            882: { name: 'Rust Botkiller Minigun Mk.I', ClassIndex: 4, },
            891: { name: 'Blood Botkiller Minigun Mk.I', ClassIndex: 4, },
            900: { name: 'Carbonado Botkiller Minigun Mk.I', ClassIndex: 4, },
            909: { name: 'Diamond Botkiller Minigun Mk.I', ClassIndex: 4, },
            958: { name: 'Silver Botkiller Minigun Mk.II', ClassIndex: 4, },
            967: { name: 'Gold Botkiller Minigun Mk.II', ClassIndex: 4, },
            15004: { name: 'King of the Jungle(Minigun)', ClassIndex: 4, },
            15020: { name: 'Iron Wood(Minigun)', ClassIndex: 4, },
            15026: { name: 'Antique Annihilator(Minigun)', ClassIndex: 4, },
            15031: { name: 'War Room(Minigun)', ClassIndex: 4, },
            15040: { name: 'Citizen Pain(Minigun)', ClassIndex: 4, },
            15055: { name: 'Brick House(Minigun)', ClassIndex: 4, },
            15086: { name: 'Macabre Web(Minigun)', ClassIndex: 4, },
            15087: { name: 'Pumpkin Patch(Minigun)', ClassIndex: 4, },
            15088: { name: 'Nutcracker(Minigun)', ClassIndex: 4, },
            15098: { name: 'Brain Candy(Minigun)', ClassIndex: 4, },
            15099: { name: 'Mister Cuddles(Minigun)', ClassIndex: 4, },
            15123: { name: 'Coffin Nail(Minigun)', ClassIndex: 4, },
            15124: { name: 'Dressed to Kill(Minigun)', ClassIndex: 4, },
            15125: { name: 'Top Shelf(Minigun)', ClassIndex: 4, },
            15147: { name: 'Butcher Bird(Minigun)', ClassIndex: 4, },
            11: { name: "Heavy's Shotgun", ClassIndex: 4, },
            42: { name: 'Sandvich', ClassIndex: 4, },
            159: { name: 'The Dalokohs Bar', ClassIndex: 4, },
            199: { name: 'Shotgun (Renamed/Strange)', ClassIndex: 4, },
            311: { name: 'The Buffalo Steak Sandvich', ClassIndex: 4, },
            425: { name: 'The Family Business', ClassIndex: 4, },
            433: { name: 'Fishcake', ClassIndex: 4, },
            863: { name: 'Robo-Sandvich', ClassIndex: 4, },
            1002: { name: 'Festive Sandvich', ClassIndex: 4, },
            1141: { name: 'Festive Shotgun', ClassIndex: 4, },
            1153: { name: 'Panic Attack', ClassIndex: 4, },
            1190: { name: 'Second Banana', ClassIndex: 4, },
            15003: { name: 'Backwoods Boomstick(Shotgun)', ClassIndex: 4, },
            15016: { name: 'Rustic Ruiner(Shotgun)', ClassIndex: 4, },
            15044: { name: 'Civic Duty(Shotgun)', ClassIndex: 4, },
            15047: { name: 'Lightning Rod(Shotgun)', ClassIndex: 4, },
            15085: { name: 'Autumn(Shotgun)', ClassIndex: 4, },
            15109: { name: 'Flower Power(Shotgun)', ClassIndex: 4, },
            15132: { name: 'Coffin Nail(Shotgun)', ClassIndex: 4, },
            15133: { name: 'Dressed to Kill(Shotgun)', ClassIndex: 4, },
            15152: { name: 'Red Bear(Shotgun)', ClassIndex: 4, },
            5: { name: 'Fists', ClassIndex: 4, },
            43: { name: 'The Killing Gloves of Boxing', ClassIndex: 4, },
            195: { name: 'Fists (Renamed/Strange)', ClassIndex: 4, },
            239: { name: 'Gloves of Running Urgently', ClassIndex: 4, },
            264: { name: 'Frying Pan', ClassIndex: 4, },
            310: { name: "Warrior's Spirit", ClassIndex: 4, },
            331: { name: 'Fists of Steel', ClassIndex: 4, },
            423: { name: 'Saxxy', ClassIndex: 4, },
            426: { name: 'The Eviction Notice', ClassIndex: 4, },
            474: { name: 'The Conscientious Objector', ClassIndex: 4, },
            587: { name: 'Apoco-Fists', ClassIndex: 4, },
            656: { name: 'The Holiday Punch', ClassIndex: 4, },
            880: { name: 'The Freedom Staff', ClassIndex: 4, },
            939: { name: 'The Bat Outta Hell', ClassIndex: 4, },
            954: { name: 'The Memory Maker', ClassIndex: 4, },
            1013: { name: 'The Ham Shank', ClassIndex: 4, },
            1071: { name: 'Gold Frying Pan', ClassIndex: 4, },
            1084: { name: 'Festive Gloves of Running Urgently (G.R.U.)', ClassIndex: 4, },
            1100: { name: 'The Bread Bite', ClassIndex: 4, },
            1123: { name: 'The Necro Smasher', ClassIndex: 4, },
            1127: { name: 'The Crossing Guard', ClassIndex: 4, },
            1184: { name: 'Gloves of Running Urgently MvM', ClassIndex: 4, },
            30758: { name: 'Prinny Machete', ClassIndex: 4, },
            9: { name: "Engineer's Shotgun", ClassIndex: 5, },
            141: { name: 'The Frontier Justice', ClassIndex: 5, },
            199: { name: 'Shotgun (Renamed/Strange)', ClassIndex: 5, },
            527: { name: 'The Widowmaker', ClassIndex: 5, },
            588: { name: 'The Pomson 6000', ClassIndex: 5, },
            997: { name: 'The Rescue Ranger', ClassIndex: 5, },
            1004: { name: 'Festive Frontier Justice', ClassIndex: 5, },
            1141: { name: 'Festive Shotgun', ClassIndex: 5, },
            1153: { name: 'Panic Attack', ClassIndex: 5, },
            15003: { name: 'Backwoods Boomstick(Shotgun)', ClassIndex: 5, },
            15016: { name: 'Rustic Ruiner(Shotgun)', ClassIndex: 5, },
            15044: { name: 'Civic Duty(Shotgun)', ClassIndex: 5, },
            15047: { name: 'Lightning Rod(Shotgun)', ClassIndex: 5, },
            15085: { name: 'Autumn(Shotgun)', ClassIndex: 5, },
            15109: { name: 'Flower Powe(Shotgun)', ClassIndex: 5, },
            15132: { name: 'Coffin Nail(Shotgun)', ClassIndex: 5, },
            15133: { name: 'Dressed to Kill(Shotgun)', ClassIndex: 5, },
            15152: { name: 'Red Bear(Shotgun)', ClassIndex: 5, },
            22: { name: "Engineer's Pistol", ClassIndex: 5, },
            140: { name: 'The Wrangler', ClassIndex: 5, },
            160: { name: 'Vintage Lugermorph', ClassIndex: 5, },
            209: { name: 'Pistol (Renamed/Strange)', ClassIndex: 5, },
            294: { name: 'Lugermorph', ClassIndex: 5, },
            528: { name: 'The Short Circuit', ClassIndex: 5, },
            1086: { name: 'Festive Wrangler', ClassIndex: 5, },
            15013: { name: 'Red Rock Roscoe(Pistol)', ClassIndex: 5, },
            15018: { name: 'Homemade Heater(Pistol)', ClassIndex: 5, },
            15035: { name: 'Hickory Holepuncher(Pistol)', ClassIndex: 5, },
            15041: { name: 'Local Hero(Pistol)', ClassIndex: 5, },
            15046: { name: 'Black Dahlia(Pistol)', ClassIndex: 5, },
            15056: { name: 'Sandstone Special(Pistol)', ClassIndex: 5, },
            15060: { name: 'Macabre Web(Pistol)', ClassIndex: 5, },
            15061: { name: 'Nutcracker(Pistol)', ClassIndex: 5, },
            15100: { name: 'Blue Mew(Pistol)', ClassIndex: 5, },
            15101: { name: 'Brain Candy(Pistol)', ClassIndex: 5, },
            15102: { name: 'Shot to Hell(Pistol)', ClassIndex: 5, },
            15126: { name: 'Dressed To Kill(Pistol)', ClassIndex: 5, },
            15148: { name: 'Blitzkrieg(Pistol)', ClassIndex: 5, },
            30666: { name: 'The C.A.P.P.E.R.', ClassIndex: 5, },
            30668: { name: 'The Gigar Counter', ClassIndex: 5, },
            7: { name: 'Wrench', ClassIndex: 5, },
            142: { name: 'The Gunslinger', ClassIndex: 5, },
            155: { name: 'The Southern Hospitality', ClassIndex: 5, },
            169: { name: 'Golden Wrench', ClassIndex: 5, },
            197: { name: 'Wrench (Renamed/Strange)', ClassIndex: 5, },
            329: { name: 'The Jag', ClassIndex: 5, },
            423: { name: 'Saxxy', ClassIndex: 5, },
            589: { name: 'The Eureka Effect', ClassIndex: 5, },
            662: { name: 'Festive Wrench', ClassIndex: 5, },
            795: { name: 'Silver Botkiller Wrench Mk.I', ClassIndex: 5, },
            804: { name: 'Gold Botkiller Wrench Mk.I', ClassIndex: 5, },
            884: { name: 'Rust Botkiller Wrench Mk.I', ClassIndex: 5, },
            893: { name: 'Blood Botkiller Wrench Mk.I', ClassIndex: 5, },
            902: { name: 'Carbonado Botkiller Wrench Mk.I', ClassIndex: 5, },
            911: { name: 'Diamond Botkiller Wrench Mk.I', ClassIndex: 5, },
            960: { name: 'Silver Botkiller Wrench Mk.II', ClassIndex: 5, },
            969: { name: 'Gold Botkiller Wrench Mk.II', ClassIndex: 5, },
            1071: { name: 'Gold Frying Pan', ClassIndex: 5, },
            1123: { name: 'The Necro Smasher', ClassIndex: 5, },
            15073: { name: 'Nutcracker(Wrench)', ClassIndex: 5, },
            15074: { name: 'Autumn(Wrench)', ClassIndex: 5, },
            15075: { name: 'Boneyard(Wrench)', ClassIndex: 5, },
            15114: { name: 'Torqued to Hell(Wrench)', ClassIndex: 5, },
            15139: { name: 'Dressed to Kill(Wrench)', ClassIndex: 5, },
            15140: { name: 'Top Shelf(Wrench)', ClassIndex: 5, },
            15156: { name: 'Airwolf(Wrench)', ClassIndex: 5, },
            30758: { name: 'Prinny Machete', ClassIndex: 5, },
            17: { name: 'Syringe Gun', ClassIndex: 6, },
            36: { name: 'The Blutsauger', ClassIndex: 6, },
            204: { name: 'Syringe Gun (Renamed/Strange)', ClassIndex: 6, },
            305: { name: "Crusader's Crossbow", ClassIndex: 6, },
            412: { name: 'The Overdose', ClassIndex: 6, },
            1079: { name: "Festive Crusader's Crossbow", ClassIndex: 6, },
            29: { name: 'Medi Gun', ClassIndex: 6, },
            35: { name: 'The Kritzkrieg', ClassIndex: 6, },
            211: { name: 'Medi Gun(Renamed/Strange)', ClassIndex: 6, },
            411: { name: 'The Quick-Fix', ClassIndex: 6, },
            663: { name: 'Festive Medi Gun', ClassIndex: 6, },
            796: { name: 'Silver Botkiller Medi Gun Mk.I', ClassIndex: 6, },
            805: { name: 'Gold Botkiller Medi Gun Mk.I', ClassIndex: 6, },
            885: { name: 'Rust Botkiller Medi Gun Mk.I', ClassIndex: 6, },
            894: { name: 'Blood Botkiller Medi Gun Mk.I', ClassIndex: 6, },
            903: { name: 'Carbonado Botkiller Medi Gun Mk.I', ClassIndex: 6, },
            912: { name: 'Diamond Botkiller Medi Gun Mk.I', ClassIndex: 6, },
            961: { name: 'Silver Botkiller Medi Gun Mk.II', ClassIndex: 6, },
            970: { name: 'Gold Botkiller Medi Gun Mk.II', ClassIndex: 6, },
            998: { name: 'The Vaccinator', ClassIndex: 6, },
            15008: { name: 'Masked Mender(Medi Gun)', ClassIndex: 6, },
            15010: { name: 'Wrapped Reviver(Medi Gun)', ClassIndex: 6, },
            15025: { name: 'Reclaimed Reanimator(Medi Gun)', ClassIndex: 6, },
            15039: { name: 'Civil Servant(Medi Gun)', ClassIndex: 6, },
            15050: { name: 'Spark of Life(Medi Gun)', ClassIndex: 6, },
            15078: { name: 'Wildwood(Medi Gun)', ClassIndex: 6, },
            15097: { name: 'Flower Power(Medi Gun)', ClassIndex: 6, },
            15121: { name: 'Dressed To Kill(Medi Gun)', ClassIndex: 6, },
            15122: { name: "High Roller's(Medi Gun)", ClassIndex: 6, },
            15123: { name: 'Coffin Nail(Medi Gun)', ClassIndex: 6, },
            15145: { name: 'Blitzkrieg(Medi Gun)', ClassIndex: 6, },
            15146: { name: 'Corsair(Medi Gun)', ClassIndex: 6, },
            8: { name: 'Bonesaw', ClassIndex: 6, },
            37: { name: 'The Ubersaw', ClassIndex: 6, },
            173: { name: 'The Vita-Saw', ClassIndex: 6, },
            198: { name: 'Bonesaw (Renamed/Strange)', ClassIndex: 6, },
            264: { name: 'Frying Pan', ClassIndex: 6, },
            304: { name: 'Amputator', ClassIndex: 6, },
            413: { name: 'The Solemn Vow', ClassIndex: 6, },
            423: { name: 'Saxxy', ClassIndex: 6, },
            474: { name: 'The Conscientious Objector', ClassIndex: 6, },
            880: { name: 'The Freedom Staff', ClassIndex: 6, },
            939: { name: 'The Bat Outta Hell', ClassIndex: 6, },
            954: { name: 'The Memory Maker', ClassIndex: 6, },
            1003: { name: 'Festive Ubersaw', ClassIndex: 6, },
            1013: { name: 'The Ham Shank', ClassIndex: 6, },
            1071: { name: 'Gold Frying Pan', ClassIndex: 6, },
            1123: { name: 'The Necro Smasher', ClassIndex: 6, },
            1127: { name: 'The Crossing Guard', ClassIndex: 6, },
            1143: { name: 'Festive Bonesaw', ClassIndex: 6, },
            30758: { name: 'Prinny Machete', ClassIndex: 6, },
            14: { name: 'Sniper Rifle', ClassIndex: 7, },
            56: { name: 'The Huntsman', ClassIndex: 7, },
            201: { name: 'Sniper Rifle (Renamed/Strange)', ClassIndex: 7, },
            230: { name: 'The Sydney Sleeper', ClassIndex: 7, },
            402: { name: 'The Bazaar Bargain', ClassIndex: 7, },
            526: { name: 'The Machina', ClassIndex: 7, },
            664: { name: 'Festive Sniper Rifle', ClassIndex: 7, },
            752: { name: "The Hitman's Heatmaker", ClassIndex: 7, },
            792: { name: 'Silver Botkiller Sniper Rifle Mk.I', ClassIndex: 7, },
            801: { name: 'Gold Botkiller Sniper Rifle Mk.I', ClassIndex: 7, },
            851: { name: 'The AWPer Hand', ClassIndex: 7, },
            881: { name: 'Rust Botkiller Sniper Rifle Mk.I', ClassIndex: 7, },
            890: { name: 'Blood Botkiller Sniper Rifle Mk.I', ClassIndex: 7, },
            899: { name: 'Carbonado Botkiller Sniper Rifle Mk.I', ClassIndex: 7, },
            908: { name: 'Diamond Botkiller Sniper Rifle Mk.I', ClassIndex: 7, },
            957: { name: 'Silver Botkiller Sniper Rifle Mk.II', ClassIndex: 7, },
            966: { name: 'Gold Botkiller Sniper Rifle Mk.II', ClassIndex: 7, },
            1005: { name: 'Festive Huntsman', ClassIndex: 7, },
            1092: { name: 'The Fortified Compound', ClassIndex: 7, },
            1098: { name: 'The Classic', ClassIndex: 7, },
            15000: { name: 'Night Owl(Sniper Rifle)', ClassIndex: 7, },
            15007: { name: 'Purple Range(Sniper Rifle)', ClassIndex: 7, },
            15019: { name: 'Lumber From Down Under(Sniper Rifle)', ClassIndex: 7, },
            15023: { name: 'Shot in the Dark(Sniper Rifle)', ClassIndex: 7, },
            15033: { name: 'Bogtrotter(Sniper Rifle)', ClassIndex: 7, },
            15059: { name: 'Thunderbolt(Sniper Rifle)', ClassIndex: 7, },
            15070: { name: 'Pumpkin Patch(Sniper Rifle)', ClassIndex: 7, },
            15071: { name: 'Boneyard(Sniper Rifle)', ClassIndex: 7, },
            15072: { name: 'Wildwood(Sniper Rifle)', ClassIndex: 7, },
            15111: { name: 'Balloonicorn(Sniper Rifle)', ClassIndex: 7, },
            15112: { name: 'Rainbow(Sniper Rifle)', ClassIndex: 7, },
            15135: { name: 'Coffin Nail(Sniper Rifle)', ClassIndex: 7, },
            15136: { name: 'Dressed to Kill(Sniper Rifle)', ClassIndex: 7, },
            15154: { name: 'Airwolf(Sniper Rifle)', ClassIndex: 7, },
            30665: { name: 'Shooting Star(Sniper Rifle)', ClassIndex: 7, },
            16: { name: 'SMG', ClassIndex: 7, },
            57: { name: 'The Razorback', ClassIndex: 7, },
            58: { name: 'Jarate', ClassIndex: 7, },
            203: { name: 'SMG (Renamed/Strange)', ClassIndex: 7, },
            231: { name: "Darwin's Danger Shield", ClassIndex: 7, },
            642: { name: 'Cozy Camper', ClassIndex: 7, },
            751: { name: "The Cleaner's Carbine", ClassIndex: 7, },
            1083: { name: 'Festive Jarate', ClassIndex: 7, },
            1105: { name: 'The Self-Aware Beauty Mark', ClassIndex: 7, },
            1149: { name: 'Festive SMG', ClassIndex: 7, },
            15001: { name: 'Woodsy Widowmaker(SMG)', ClassIndex: 7, },
            15022: { name: 'Plaid Potshotter(SMG)', ClassIndex: 7, },
            15032: { name: 'Treadplate Tormenter(SMG)', ClassIndex: 7, },
            15037: { name: 'Team Sprayer(SMG)', ClassIndex: 7, },
            15058: { name: 'Low Profile(SMG)', ClassIndex: 7, },
            15076: { name: 'Wildwood(SMG)', ClassIndex: 7, },
            15110: { name: 'Blue Mew(SMG)', ClassIndex: 7, },
            15134: { name: "High Roller's(SMG)", ClassIndex: 7, },
            15153: { name: 'Blitzkrieg(SMG)', ClassIndex: 7, },
            3: { name: 'Kukri', ClassIndex: 7, },
            171: { name: "The Tribalman's Shiv", ClassIndex: 7, },
            193: { name: 'Kukri (Renamed/Strange)', ClassIndex: 7, },
            232: { name: 'The Bushwacka', ClassIndex: 7, },
            264: { name: 'Frying Pan', ClassIndex: 7, },
            401: { name: 'The Shahanshah', ClassIndex: 7, },
            423: { name: 'Saxxy', ClassIndex: 7, },
            474: { name: 'The Conscientious Objector', ClassIndex: 7, },
            880: { name: 'The Freedom Staff', ClassIndex: 7, },
            939: { name: 'The Bat Outta Hell', ClassIndex: 7, },
            954: { name: 'The Memory Maker', ClassIndex: 7, },
            1013: { name: 'The Ham Shank', ClassIndex: 7, },
            1071: { name: 'Gold Frying Pan', ClassIndex: 7, },
            1123: { name: 'The Necro Smasher', ClassIndex: 7, },
            1127: { name: 'The Crossing Guard', ClassIndex: 7, },
            30758: { name: 'Prinny Machete', ClassIndex: 7, },
            24: { name: 'Revolver', ClassIndex: 8 },
            61: { name: 'The Ambassador', ClassIndex: 8 },
            161: { name: 'Big Kill', ClassIndex: 8 },
            210: { name: 'Revolver (Renamed/Strange)', ClassIndex: 8 },
            224: { name: "L'Etranger", ClassIndex: 8 },
            460: { name: 'The Enforcer', ClassIndex: 8 },
            525: { name: 'The Diamondback', ClassIndex: 8 },
            1006: { name: 'Festive Ambassador', ClassIndex: 8 },
            1142: { name: 'Festive Revolver', ClassIndex: 8 },
            15011: { name: 'Psychedelic Slugger(Revolver)', ClassIndex: 8 },
            15027: { name: 'Old Country(Revolver)', ClassIndex: 8 },
            15042: { name: 'Mayor(Revolver)', ClassIndex: 8 },
            15051: { name: 'Dead Reckoner(Revolver)', ClassIndex: 8 },
            15062: { name: 'Boneyard(Revolver)', ClassIndex: 8 },
            15063: { name: 'Wildwood(Revolver)', ClassIndex: 8 },
            15064: { name: 'Macabre Web(Revolver)', ClassIndex: 8 },
            15103: { name: 'Flower Power(Revolver)', ClassIndex: 8 },
            15127: { name: 'Coffin Nail(Revolver)', ClassIndex: 8 },
            15128: { name: 'Top Shelf(Revolver)', ClassIndex: 8 },
            15149: { name: 'Blitzkrieg(Revolver)', ClassIndex: 8 },
            735: { name: 'Sapper', ClassIndex: 8 },
            736: { name: 'Sapper (Renamed/Strange)', ClassIndex: 8 },
            810: { name: 'The Red-Tape Recorder', ClassIndex: 8 },
            831: { name: 'The Red-Tape Recorder (Genuine)', ClassIndex: 8 },
            933: { name: 'The Ap-Sap (Genuine)', ClassIndex: 8 },
            1080: { name: 'Festive Sapper', ClassIndex: 8 },
            1102: { name: 'The Snack Attack', ClassIndex: 8 },
            4: { name: 'Knife', ClassIndex: 8 },
            194: { name: 'Knife (Renamed/Strange)', ClassIndex: 8 },
            225: { name: 'Your Eternal Reward', ClassIndex: 8 },
            356: { name: "Conniver's Kunai", ClassIndex: 8 },
            423: { name: 'Saxxy', ClassIndex: 8 },
            461: { name: 'The Big Earner', ClassIndex: 8 },
            574: { name: 'The Wanga Prick', ClassIndex: 8 },
            638: { name: 'The Sharp Dresser', ClassIndex: 8 },
            649: { name: 'The Spy-cicle', ClassIndex: 8 },
            665: { name: 'Festive Knife', ClassIndex: 8 },
            727: { name: 'The Black Rose', ClassIndex: 8 },
            794: { name: 'Silver Botkiller Knife Mk.I', ClassIndex: 8 },
            803: { name: 'Gold Botkiller Knife Mk.I', ClassIndex: 8 },
            883: { name: 'Rust Botkiller Knife Mk.I', ClassIndex: 8 },
            892: { name: 'Blood Botkiller Knife Mk.I', ClassIndex: 8 },
            901: { name: 'Carbonado Botkiller Knife Mk.I', ClassIndex: 8 },
            910: { name: 'Diamond Botkiller Knife Mk.I', ClassIndex: 8 },
            959: { name: 'Silver Botkiller Knife Mk.II', ClassIndex: 8 },
            968: { name: 'Gold Botkiller Knife Mk.II', ClassIndex: 8 },
            1071: { name: 'Gold Frying Pan', ClassIndex: 8 },
            15062: { name: 'Boneyard(Knife)', ClassIndex: 8 },
            15094: { name: 'Blue Mew(Knife)', ClassIndex: 8 },
            15095: { name: 'Brain Candy(Knife)', ClassIndex: 8 },
            15096: { name: 'Stabbed to Hell(Knife)', ClassIndex: 8 },
            15118: { name: 'Dressed to Kill(Knife)', ClassIndex: 8 },
            15119: { name: 'Top Shelf(Knife)', ClassIndex: 8 },
            15143: { name: 'Blitzkrieg(Knife)', ClassIndex: 8 },
            15144: { name: 'Airwolf(Knife)', ClassIndex: 8 },
            30758: { name: 'Prinny Machete', ClassIndex: 8 },
            30: { name: 'Invis Watch', ClassIndex: 8 },
            59: { name: 'The Dead Ringer', ClassIndex: 8 },
            60: { name: 'The Cloak and Dagger', ClassIndex: 8 },
            212: { name: 'Invis Watch (Renamed/Strange)', ClassIndex: 8 },
            297: { name: "Enthusiast's Timepiece", ClassIndex: 8 },
            947: { name: 'The Quackenbirdt', ClassIndex: 8 },
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
                //  document.getElementById(Math.round(Math.random() * 8)).checked = true

            }
            null == document.getElementById("creator") && (document.body.innerHTML = '<meta charset="utf-8"><h1>:(</h1>');
            if (document.getElementById('11').checked == false && document.getElementById('12').checked == false && document.getElementById('13').checked == false) {
                document.getElementById('11').checked = true
                SlotPrimer = 1
            }
            // document.getElementById('Text1').style.display = ''
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
            //console.log(All_weapon[RandomClass])
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
            //  console.log(All_weapon[RandomClass][Random][3] == 3)
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


                /*
                            if (UsedSecert) {
                                if (Math.round(Math.random() * 100) > 50) {
                
                                    var b = Math.round(Math.random() * (Atribute_not_used_or_secret.length - 1))
                                    if (b == 0) b = 1
                                    if (BlackListAttribute.indexOf(b) == -1) {
                                        if (OnlyBasics) {
                                            d += '"54;1"'
                                        }
                                        var color = 0
                
                                        if (Atribute_not_used_or_secret[b][2] !== null && Atribute_not_used_or_secret[b][2] !== 'no img') {
                                            if (Atribute_not_used_or_secret[b][2]) {
                                                color = '#76a0a8'
                                            }
                                            if (!Atribute_not_used_or_secret[b][2]) {
                                                color = '#FF4040'
                                            }
                                        } else {
                                            color = '#ded598'
                                        }
                
                                       
                                        if (OnlyBasics) {
                                            d2 = ''
                                        }
                                        if (!OnlyBasics) {
                                            d += '"'
                                            d += Atribute_not_used_or_secret[b][0]
                                            d += ";"
                                            hh = Math.round(Math.random() * 10) + 5
                                            d += hh
                                            AllPower.push(hh)
                                            d += '"'
                                        }
                                        d2 += '<span style="color:' + color + ';line-height: 30px;">' + Atribute_not_used_or_secret[b][1] + '<code style="color:red" onmousemove="MoveTitle()" onmouseover="SeeTitle()" onmouseout="DestroyTitle()">(&#9888;)</code></span><br>'
                                    }
                                    else {
                                        gen()
                                    }
                                }
                                else {
                
                                    var b = Math.round(Math.random() * (Used.length - 1))
                                    if (b == 0) b = 1
                                    if (BlackListAttribute.indexOf(b) == -1) {
                                        var color = 0
                                        if (OnlyBasics) {
                                            d += '"54;1"'
                                        }
                                        if (Used[b][2] !== null && Used[b][2] !== 'no img') {
                                            if (Used[b][2]) {
                                                color = '#76a0a8'
                                            }
                                            if (!Used[b][2]) {
                                                color = '#FF4040'
                                            }
                                        } else {
                                            color = '#ded598'
                                        }
                                        if (!OnlyBasics) {
                                            d2 += '<span style="color:' + color + ';line-height: 30px;">' + AllAtribute[b][1] + '</span><br>'
                                            if (OnlyBasics) {
                                                d2 = ''
                                            }
                                            d += '"'
                                            d += AllAtribute[b][0]
                                            d += ";"
                                            hh = Math.round(Math.random() * 10) + 5
                                            d += hh
                                            AllPower.push(hh)
                                            d += '"'
                                        } else {
                
                                        }
                                    }
                                    else {
                                        gen()
                                    }
                                }
                            } else {
                
                                var b = Math.round(Math.random() * (Used.length - 1))
                                if (b == 0) b = 1
                                if (BlackListAttribute.indexOf(b) == -1) {
                                    if (!OnlyBasics) {
                
                
                                        if (Used[b][2] !== null && Used[b][2] !== 'no img') {
                                            if (Used[b][2]) {
                                                color = '#76a0a8'
                                            }
                                            if (!Used[b][2]) {
                                                color = '#FF4040'
                                            }
                                        } else {
                                            color = '#ded598'
                                        }
                
                                        d2 += '<span style="color:' + color + ';line-height: 30px;">' + AllAtribute[b][1] + '</span><br>'
                                        d += AllAtribute[b][0]
                                        d += ";"
                                        hh = Math.round(Math.random() * 10) + 5
                                        d += hh
                                        AllPower.push(hh)
                                        d += '"'
                                    }
                
                                }
                                else {
                                    gen()
                                }
                            }
                */




            }

            document.getElementById('s').innerHTML = d

            document.getElementById('ss').innerHTML = d2

            if (!OnlyBasics) {
                for (var bv = 0; bv < gg; bv++) {
                    if (document.getElementById('ss').getElementsByTagName("span")[bv].getElementsByTagName("b")[0] !== undefined) {
                        //  console.log(AllPower[bv])
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
            //Write a script that creates a block with the inscription "EUY" and it will be just above the mouse pointer.

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

if(!CreCus){
    if (e.keyCode == 49) {
                document.getElementById('0').click()
            }
            if (e.keyCode == 50) {
                document.getElementById('1').click()
            }
            if (e.keyCode == 51) {
                document.getElementById('2').click()
            }
            if (e.keyCode == 52) {
                document.getElementById('3').click()
            }
            if (e.keyCode == 53) {
                document.getElementById('4').click()
            }
            if (e.keyCode == 54) {
                document.getElementById('5').click()
            }
            if (e.keyCode == 55) {
                document.getElementById('6').click()
            }
            if (e.keyCode == 56) {
                document.getElementById('7').click()
            }
            if (e.keyCode == 57) {
                document.getElementById('8').click()
            }
            if (e.keyCode == 13) {
                gen()
            }
}
        }
