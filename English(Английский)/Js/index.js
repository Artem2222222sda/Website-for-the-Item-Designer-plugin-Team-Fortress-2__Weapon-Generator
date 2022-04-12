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
console.log(AllPowerForCustom[a])
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
           // console.log(AllAtribute[dc][0] == document.getElementById('listAttribute').querySelector(':checked').getAttribute('data--id'))
            if(AllAtribute[dc][0] == document.getElementById('listAttribute').querySelector(':checked').getAttribute('data--id')){
                Value = AllAtribute[dc]
              break
            }
        }
        if(AttributeSelect.indexOf(Value[0]) !== -1){
            alert('This attribute has already been added.')
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
                  // console.log(AllAtribute[dc][0] == document.getElementById('listAttribute').querySelector(':checked').getAttribute('data--id'))
                  if(Atribute_not_used_or_secret[dc][0] == document.getElementById('listAttribute').querySelector(':checked').getAttribute('data--id')){
                Value = Atribute_not_used_or_secret[dc]
              break
            }
        }
        if(AttributeSelect.indexOf(Value[0]) !== -1){
            alert('This attribute has already been added.')
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
        document.getElementById('Button_custom').innerHTML = 'Create a random weapon'
        document.getElementById('SettingsRandom').style.display = 'none'
        
        CreCus = true
        document.getElementById('NameWeapon').innerHTML =''
       
        document.getElementById('ststua').style.display = 'none'


            document.getElementById('ststu2').style.display = 'none'
        document.getElementById('s').innerHTML =''
        document.getElementById('ss').innerHTML =''
        document.getElementById('NameWeapon').innerHTML = '<select id="listWeapon" style="display: none;background:rgb(36, 32, 27);color:#b4b4b4;font-size:20px;width: 60%;"></select><br><br>'
        document.getElementById('NameWeapon').innerHTML +='  <select id="listAttribute" style="max-width: 20%;"></select><input type="number" placeholder="1(Max. 99)" id="NumPower"><br><br><button onclick="AddOne()" id="" >Add</button><button onclick="RemoveAll()"  style="margin-left:10px;margin-top:10px;">Delete everything</button><br><br><button onclick="GenerateCommand()" style="margin-left:10px">Generate command</button>'
      
        for (var f = 0; f < AllAtribute.length; f++) {
            var object = document.createElement('option')
            var pos = document.getElementById('listAttribute')
            object.innerHTML = AllAtribute[f][1]
            object.dataset.Used = true
            
            object.dataset.Id = AllAtribute[f][0]
            pos.appendChild(object)
            //document.getElementById('listAttribute').innerHTML += '<option>' + AllAtribute[f][1] + '</option>'
        }
        for (var f = 0; f < Atribute_not_used_or_secret.length; f++) {
            var object = document.createElement('option')
            var pos = document.getElementById('listAttribute')
            object.style.color = 'red'
            object.dataset.Used = false
            object.dataset.Id = Atribute_not_used_or_secret[f][0]
            object.innerHTML = Atribute_not_used_or_secret[f][1] + '<code style="color:red" onmousemove="MoveTitle()" onmouseover="SeeTitle()" onmouseout="DestroyTitle()">(&#9888;)</code>'
            pos.appendChild(object)
            //document.getElementById('listAttribute').innerHTML += '<option>' + AllAtribute[f][1] + '</option>'
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
                document.getElementById('Button_custom').innerHTML = 'Write your weapon'
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
        [1,"<b>%s1</b><i>%</i> damage penalty ",false]
,[2,"+<b>%s1</b><i>%</i> damage bonus ",true]
,[3,"<b>%s1</b><i>%</i> clip size ",false]
,[4,"+<b>%s1</b><i>%</i> clip size ",true]
,[5,"<b>%s1</b><i>%</i> slower firing speed ",false]
,[6,"+<b>%s1</b><i>%</i> faster firing speed ",true]
,[8,"+<b>%s1</b><i>%</i> heal rate ",true]
,[10,"+<b>%s1</b><i>%</i> ÜberCharge rate ",true]
,[15,"No random critical hits ",false]
,[16,"On Hit: Gain up to +<b>%s1</b> health ",true]
,[17,"On Hit: <b>%s1</b><i>%</i> ÜberCharge added ",true]
,[18,"ÜberCharge grants 100% critical chance ",null]
,[20,"100% critical hit vs burning players ",true]
,[24,"100% critical hits from behind ",true]
,[26,"+<b>%s1</b> max health on wearer ",true]
,[31,"On Kill: <b>%s1</b> seconds of 100% critical chance ",true]
,[32,"On Hit: <b>%s1</b><i>%</i> chance to slow target ",true]
,[33,"Cloak Type: Feign Death. Leave a fake corpse on taking damage and temporarily gain invisibility, speed, and damage resistance. ",null]
,[34,"+<b>%s1</b><i>%</i> cloak drain rate ",false]
,[35,"+<b>%s1</b><i>%</i> cloak regen rate ",true]
,[36,"<b>%s1</b><i>%</i> less accurate ",false]
,[38,"Alt-Fire: Launches a ball that slows opponents ",true]
,[41,"+<b>%s1</b><i>%</i> charge rate ",true]
,[42,"No headshots ",false]
,[44,"Knockback on the target and shooter ",true]
,[45,"+<b>%s1</b><i>%</i> bullets per shot ",true]
,[48,"Cloak Type: Motion Sensitive. Alt-fire: Turn invisible. Cannot attack while invisible. Bumping in to enemies will make you slightly visible to enemies. Cloak drain rate based on movement speed.  ",null]
,[51,"Crits on headshot ",true]
,[52,"Blocks a single backstab attempt ",true]
,[54,"<b>%s1</b><i>%</i> slower move speed on wearer ",false]
,[56,"Coated enemies take mini-crits Can be used to extinguish fire  ",null]
,[57,"+<b>%s1</b> health regenerated per second on wearer ",true]
,[59,"<b>%s1</b><i>%</i> self damage force ",false]
,[60,"+<b>%s1</b><i>%</i> fire damage resistance on wearer ",true]
,[61,"<b>%s1</b><i>%</i> fire damage vulnerability on wearer ",false]
,[64,"+<b>%s1</b><i>%</i> explosive damage resistance on wearer ",true]
,[65,"<b>%s1</b><i>%</i> explosive damage vulnerability on wearer ",false]
,[67,"<b>%s1</b><i>%</i> bullet damage vulnerability on wearer ",false]
,[68,"+<b>%s1</b> capture rate on wearer ",true]
,[69,"<b>%s1</b><i>%</i> health from healers on wearer ",false]
,[72,"<b>%s1</b><i>%</i> afterburn damage penalty ",false]
,[76,"+<b>%s1</b><i>%</i> max primary ammo on wearer ",true]
,[77,"<b>%s1</b><i>%</i> max primary ammo on wearer ",false]
,[78,"+<b>%s1</b><i>%</i> max secondary ammo on wearer ",true]
,[79,"<b>%s1</b><i>%</i> max secondary ammo on wearer ",false]
,[83,"+<b>%s1</b><i>%</i> cloak duration ",true]
,[86,"<b>%s1</b><i>%</i> slower spin up time ",false]
,[87,"<b>%s1</b><i>%</i> faster spin up time ",true]
,[88,"+<b>%s1</b> max pipebombs out ",true]
,[89,"<b>%s1</b> max pipebombs out ",false]
,[92,"Construction hit speed boost increased by <b>%s1</b><i>%</i> ",true]
,[93,"Construction hit speed boost decreased by <b>%s1</b><i>%</i> ",false]
,[95,"<b>%s1</b><i>%</i> slower repair rate ",false]
,[97,"<b>%s1</b><i>%</i> faster reload time ",true]
,[100,"<b>%s1</b><i>%</i> explosion radius ",false]
,[103,"+<b>%s1</b><i>%</i> projectile speed ",true]
,[105,"<b>%s1</b><i>%</i> max overheal ",false]
,[106,"<b>%s1</b><i>%</i> more accurate ",true]
,[107,"+<b>%s1</b><i>%</i> faster move speed on wearer ",true]
,[108,"+<b>%s1</b><i>%</i> health from packs on wearer ",true]
,[114,"Mini-crits targets launched airborne by explosions, grapple hooks or rocket packs ",true]
,[115,"Damage increases as the user becomes injured ",true]
,[119,"Detonates stickybombs near the crosshair and directly under your feet ",true]
,[120,"<b>%s1</b> sec slower bomb arm time ",false]
,[121,"Able to destroy enemy stickybombs ",true]
,[124,"Replaces the Sentry with a Mini-Sentry ",false]
,[125,"<b>%s1</b> max health on wearer ",false]
,[126,"<b>%s1</b> sec faster bomb arm time ",true]
,[127,"Launched bombs shatter on surfaces ",false]
,[128,"When weapon is active: ",null]
,[134,"★ Unusual Effect: <b>%s1</b> ",null]
,[135,"<b>%s1</b><i>%</i> blast damage from rocket jumps ",true]
,[136,"Gain 2 revenge crits for each sentry kill and 1 for each sentry assist when your sentry is destroyed.  ",true]
,[137,"+<b>%s1</b><i>%</i> damage vs buildings ",true]
,[138,"<b>%s1</b><i>%</i> damage vs players ",false]
,[139,"Adds +50 max health for 30 seconds ",true]
,[143,"Hire Date: <b>%s1</b> ",null]
,[146,"Damage removes Sappers ",true]
,[149,"On Hit: Bleed for <b>%s1</b> seconds ",true]
,[150,"Imbued with an ancient power ",true]
,[154,"Upon a successful backstab against a human target, you rapidly disguise as your victim ",true]
,[156,"Silent Killer: No attack noise from backstabs ",true]
,[158,"+<b>%s1</b><i>%</i> cloak on kill ",true]
,[166,"+<b>%s1</b><i>%</i> cloak on hit ",true]
,[170,"+<b>%s1</b><i>%</i> airblast cost ",false]
,[175,"On Scoped Hit: Apply Jarate for 2 to <b>%s1</b> seconds based on charge level. Nature's Call: Scoped headshots always mini-crits and reduce the remaining cooldown of Jarate by 1 second. ",true]
,[179,"Crits whenever it would normally mini-crit ",true]
,[180,"+<b>%s1</b> health restored on kill ",true]
,[181,"No self inflicted blast damage taken ",true]
,[183,"<b>%s1</b><i>%</i> slower move speed while deployed ",false]
,[187,"Crate Series #<b>%s1</b> ",true]
,[197,"This is a special Halloween <b>%s1</b> item ",true]
,[199,"This weapon holsters <b>%s1</b><i>%</i> faster ",true]
,[200,"Alt-Fire: Applies a healing effect to all nearby teammates ",true]
,[202,"<b>%s1</b> sec increase in charge duration ",true]
,[203,"On Kill: A small health pack is dropped ",true]
,[204,"On Miss: Hit yourself. Idiot. ",false]
,[205,"<b>%s1</b><i>%</i> damage from ranged sources while active ",true]
,[206,"+<b>%s1</b><i>%</i> damage from melee sources while active ",false]
,[207,"+<b>%s1</b><i>%</i> damage to self ",false]
,[208,"On Hit: target is engulfed in flames ",true]
,[209,"100% minicrits vs burning players ",true]
,[217,"On Backstab: Absorbs the health from your victim. ",true]
,[218,"On Hit: One target at a time is Marked-For-Death, causing all damage taken to be mini-crits ",true]
,[220,"On Kill: Gain <b>%s1</b><i>%</i> of base health on kill ",true]
,[224,"<b>%s1</b><i>%</i> increase in damage when health &lt;50% of max ",true]
,[225,"<b>%s1</b><i>%</i> decrease in damage when health &gt;50% of max ",false]
,[226,"Honorbound: Once drawn sheathing deals 50 damage to yourself unless it kills. ",false]
,[231,"ÜberCharge increases healing to 300% and grants immunity to movement-impairing effects ",null]
,[235,"Move speed increases as the user becomes injured ",true]
,[238,"Silent Killer: No barrel spin sound ",true]
,[246,"+<b>%s1</b><i>%</i> increase in turning control while charging ",true]
,[248,"+<b>%s1</b><i>%</i> increase in charge impact damage ",true]
,[249,"+<b>%s1</b><i>%</i> increase in charge recharge rate ",true]
,[250,"Grants Triple Jump while deployed. Melee attacks mini-crit while airborne.  ",true]
,[251,"On Hit Teammate: Boosts both players' speed for several seconds ",true]
,[252,"<b>%s1</b><i>%</i> reduction in push force taken from damage ",true]
,[259,"Deals 3x falling damage to the player you land on ",true]
,[267,"Deals crits while the wielder is rocket jumping ",true]
,[268,"Base charge rate decreased by <b>%s1</b><i>%</i> ",false]
,[269,"Allows you to see enemy health ",true]
,[270,"Holds a maximum of <b>%s1</b> charges ",true]
,[271,"Currently holds <b>%s1</b> charges ",true]
,[272,"Each charge lasts <b>%s1</b> seconds ",true]
,[278,"+<b>%s1</b><i>%</i> increase in recharge rate ",true]
,[281,"Does not require ammo ",true]
,[282,"Alt-Fire: A charged shot that mini-crits players, sets them on fire, and disables buildings for 4 sec ",true]
,[283,"Projectile penetrates enemy targets ",true]
,[284,"Deals only 20% damage to buildings ",false]
,[285,"Projectile cannot be deflected ",true]
,[296,"Gives one guaranteed critical hit for each building destroyed with your sapper attached or backstab kill ",true]
,[297,"Cannot fire unless zoomed ",false]
,[298,"Per Shot: -<b>%s1</b> ammo ",false]
,[299,"On Hit: damage dealt is returned as ammo ",true]
,[300,"Alt-Fire: Launches a projectile-consuming energy ball.  Costs 65 metal. ",true]
,[301,"Uses metal for ammo ",false]
,[304,"On Full Charge: +<b>%s1</b><i>%</i> damage per shot ",true]
,[305,"Fires tracer rounds ",false]
,[306,"No headshots when not fully charged ",false]
,[307,"No reload necessary ",true]
,[308,"On Full Charge: Projectiles penetrate players ",true]
,[309,"Killing an enemy with a critical hit will dismember your victim. Painfully. ",true]
,[311,"Unlimited use ",true]
,[329,"<b>%s1</b><i>%</i> reduction in airblast vulnerability ",true]
,[334,"Explode spectacularly on death ",true]
,[337,"On Hit: Victim loses up to <b>%s1</b><i>%</i> Medigun charge ",true]
,[338,"On Hit: Victim loses up to <b>%s1</b><i>%</i> cloak ",true]
,[346,"Alt-Fire: Launches a festive ornament that shatters causing bleed ",true]
,[347,"Backstab turns victim to ice ",false]
,[352,"Press your reload key to choose to teleport to spawn or your exit teleporter ",true]
,[356,"No airblast ",false]
,[358,"Critical hit forces victim to laugh ",true]
,[359,"Melts in fire, regenerates in <b>%s1</b> seconds and by picking up ammo ",false]
,[360,"All players connected via Medigun beams are hit ",true]
,[361,"On Hit by Fire: Fireproof for 1 second and Afterburn immunity for <b>%s1</b> seconds ",true]
,[362,"Always critical hit from behind ",true]
,[363,"Critical hits do no damage ",false]
,[364,"Jingle all the way ",false]
,[367,"Alt-Fire: Extinguish teammates to gain guaranteed critical hits ",true]
,[368,"Build 'Mmmph' by dealing damage. Alt-Fire on full 'Mmmph': Taunt to gain crits for several seconds. Invulnerable while 'Mmmph' taunting.  ",true]
,[369,"On Hit: Force enemies to laugh who are also wearing this item ",true]
,[371,"Attrib_TauntSoundSuccess ",true]
,[376,"No flinching when aiming and fully charged ",true]
,[377,"Knockback reduced by <b>%s1</b><i>%</i> when aiming ",true]
,[387,"Gain Focus on kills and assists ",true]
,[391,"Reduces mystery solving time by up to <b>%s1</b><i>%</i> ",true]
,[392,"<b>%s1</b><i>%</i> damage on body shot ",false]
,[393,"Press 'Reload' to activate focus In Focus: +25% faster charge and no unscoping  ",true]
,[398,"Attrib_RageGainOnAssists ",true]
,[400,"Wearer cannot carry the intelligence briefcase or PASS Time JACK ",false]
,[401,"Reduces chance of hunger by up to <b>%s1</b><i>%</i> ",true]
,[410,"+<b>%s1</b><i>%</i> damage bonus while disguised ",true]
,[411,"+<b>%s1</b> degrees random projectile deviation ",false]
,[412,"<b>%s1</b><i>%</i> damage vulnerability on wearer ",false]
,[413,"Hold Fire to load up to three rockets Release Fire to unleash the barrage  ",true]
,[414,"You are Marked-For-Death while active, and for short period after switching weapons ",false]
,[416,"Flare knocks back target on hit and explodes when it hits the ground. Increased knock back on burning players  ",true]
,[417,"Overloading the chamber will cause a misfire ",false]
,[418,"On Hit: Builds Boost .Run speed increased with Boost  ",true]
,[419,"Boost reduced on air jumps ",false]
,[420,"Witnessed the <b>%s1</b> inferno ",true]
,[421,"No ammo from dispensers when active ",false]
,[422,"Only visible in Pyroland ",false]
,[426,"<b>%s1</b><i>%</i> sapper damage penalty ",false]
,[430,"Creates a ring of flames while spun up ",true]
,[431,"Consumes an additional <b>%s1</b> ammo per second while spun up ",false]
,[433,"Reverses enemy building construction ",true]
,[435,"Throw at your enemies to make them bleed!Long distance hits reduce recharge time  ",true]
,[438,"100% critical hit vs wet players ",true]
,[445,"On Equip: Visit Pyroland ",true]
,[451,"Attrib_Sapper_Voice_Pak ",true]
,[452,"Attrib_Sapper_Voice_Pak_Idle_Wait ",true]
,[464,"Sentry build speed increased by <b>%s1</b><i>%</i> ",true]
,[466,"Cannonballs have a fuse time of 1 second; fuses can be primed to explode earlier by holding down the fire key. ",null]
,[467,"Cannonballs do not explode on impact ",false]
,[469,"Alt-Fire: Use <b>%s1</b> metal to pick up your targeted building from long range ",true]
,[472,"Self mark for death when hauling buildings ",false]
,[473,"Press your reload key to cycle through resist types. While healing, provides you and your target with a constant 10% resistance to the selected damage type.  ",true]
,[474,"Fires a special bolt that can repair friendly buildings ",true]
,[477,"Cannonballs push players back on impact ",true]
,[479,"<b>%s1</b><i>%</i> Overheal build rate. ",false]
,[524,"+<b>%s1</b><i>%</i> greater jump height when active ",true]
,[527,"Immune to the effects of afterburn. ",true]
,[533,"Extra effects when taunting. ",true]
,[536,"Increase in push force taken from damage and airblast ",false]
,[537,"Leave a Calling Card on your victims. ",true]
,[547,"This weapon deploys <b>%s1</b><i>%</i> faster ",true]
,[619,"Mini-crits targets when fired at their back from close range ",true]
,[621,"Increased attack speed and smaller blast radius while blast jumping ",true]
,[636,"Charge and fire shots independent of zoom ",true]
,[639,"Full turning control while charging ",true]
,[644,"Clip size increased on kill ",true]
,[661,"Rewarded for participating in the 2014 Summer Adventure. ",true]
,[670,"Max charge time decreased by <b>%s1</b><i>%</i> ",true]
,[671,"Grenades have very little bounce and roll ",true]
,[676,"Taking damage while shield charging reduces remaining charging time ",false]
,[693,"Increased Melee damage against Isolated Merc Set ",true]
,[694,"Increased Nostromo Napalmer damage taken from Isolated Merc Set ",false]
,[695,"Increased Nostromo Napalmer damage against Isolationist Pack Set ",true]
,[696,"Increased Melee damage taken from Isolationist Pack Set ",false]
,[701,"Duck XP Level&nbsp;: <b>%s1</b> ",true]
,[702,"Duck Power&nbsp;: <b>%s1</b> / 5 ",true]
,[703,"Early Supporter of End of the Line Community Update ",true]
,[705,"Duckstreaks Active ",true]
,[726,"<b>%s1</b><i>%</i> cloak meter when Feign Death is activated ",false]
,[727,"Up to +<b>%s1</b><i>%</i> damage based on charge ",true]
,[728,"No cloak meter from ammo boxes when invisible ",false]
,[729,"<b>%s1</b><i>%</i> cloak meter from ammo boxes ",false]
,[732,"<b>%s1</b><i>%</i> less metal from pickups and dispensers ",false]
,[733,"Boost reduced when hit ",false]
,[735,"100% critical hit vs burning players ",true]
,[736,"Gain a speed boost on kill ",true]
,[737,"On Hit: Gain a speed boost ",true]
,[738,"<b>%s1</b><i>%</i> damage resistance when below 50% health and spun up ",true]
,[739,"<b>%s1</b><i>%</i> ÜberCharge rate on Overhealed patients ",false]
,[740,"<b>%s1</b><i>%</i> less healing from Medic sources ",false]
,[741,"On Hit: Gain up to +<b>%s1</b> health per attack ",true]
,[745,"Team Colored Decorated Weapon ",null]
,[772,"This weapon holsters <b>%s1</b><i>%</i> slower ",false]
,[773,"This weapon deploys <b>%s1</b><i>%</i> slower ",false]
,[775,"<b>%s1</b><i>%</i> damage penalty vs buildings ",false]
,[778,"Melee hits refill  <b>%s1</b><i>%</i> of your charge meter. ",true]
,[779,"Secondary fire when charged grants mini-crits for <b>%s1</b> seconds. ",true]
,[780,"Dealing damage fills charge meter. ",true]
,[781,"This Weapon has a large melee range and deploys and holsters slower  ",null]
,[782,"Ammo boxes collected also give Charge ",true]
,[783,"Extinguishing teammates restores <b>%s1</b> health ",true]
,[784,"Extinguishing teammates reduces cooldown by <b>%s1</b><i>%</i> ",true]
,[787,"<b>%s1</b><i>%</i> fuse time on grenades ",true]
,[788,"+<b>%s1</b><i>%</i> faster move speed on wearer (shield required) ",true]
,[789,"<b>%s1</b><i>%</i> increased damage to your sentry's target ",true]
,[790,"<b>%s1</b><i>%</i> metal cost when constructing or upgrading teleporters ",true]
,[793,"On Hit: Builds Hype ",true]
,[794,"+<b>%s1</b><i>%</i> fire damage resistance while deployed ",true]
,[795,"<b>%s1</b><i>%</i> damage bonus vs burning players ",true]
,[797,"Attacks pierce damage resistance effects and bonuses ",true]
,[799,"Revenge crits are lost on death ",false]
,[800,"<b>%s1</b><i>%</i> maximum overheal on wearer ",false]
,[808,"Successive shots become less accurate ",false]
,[809,"Fires a wide, fixed shot pattern ",true]
,[810,"Attrib_NoCloakFromAmmo ",false]
,[811,"Collect the organs of people you hit ",true]
,[812,"<b>%s1</b><i>%</i> increased air control when blast jumping. ",true]
,[816,"Normal disguises require (and consume) a full cloak meter ",false]
,[848,"Spawning and resupply do not affect the Gas meter ",false]
,[851,"+<b>%s1</b><i>%</i> faster move speed on wearer ",true]
,[853,"<b>%s1</b><i>%</i> maximum overheal on wearer ",false]
,[854,"<b>%s1</b><i>%</i> health from healers on wearer ",false]
,[855,"Maximum health is drained while item is active ",false]
,[868,"Critical damage is affected by range ",false]
,[869,"Minicrits whenever it would normally crit ",false]
,[870,"Push enemies back when you land (force and radius based on velocity) ",true]
,[876,"<b>%s1</b><i>%</i> healing effect ",false]
,[877,"Gain a speed boost when you hit an enemy player ",true]
,[878,"Gas meter starts empty ",false]
,[879,"Gas meter builds with damage done and/or time ",true]
,[880,"<b>%s1</b>-to-1 health-to-metal ratio when repairing buildings ",false]
,[881,"<b>%s1</b> health regenerated per second on wearer ",false]
,[2013,"Killstreaker: <b>%s1</b> ",true]
,[2014,"Sheen: <b>%s1</b> ",true]
,[2016,"Pages of Tumidum: <b>%s1</b> ",true]
,[2017,"Pages of Gratanter: <b>%s1</b> ",true]
,[2018,"Pages of Audere: <b>%s1</b> ",true]
,[2019,"Pages of Congeriae: <b>%s1</b> ",true]
,[2020,"Pages of Veteris: <b>%s1</b> ",true]
,[2025,"Killstreaks Active ",true]
,[2034,"Melee kills refill <b>%s1</b><i>%</i> of your charge meter. ",true]
,[2041,"★ Unusual Effect: <b>%s1</b> ",null]
,[2049,"Third successful punch in a row always crits. ",true]
,[2053,"Festivized ",null]
,[2063,"Deals 300% damage to burning players +50% re-pressurization rate on hit",true]
,[2064,"-50% repressurization rate on Alt-Fire ",false]
,[2065,"Uses a shared pressure tank for Primary Fire and Alt-Fire. Primary Fire: Launches a fast-moving projectile that briefly ignites enemies Alt-Fire: Release a blast of air that pushes enemies and projectiles, and extinguishes teammates that are on fire.  ",null]
,[2067,"Mini-crits burning targets and extinguishes them. Damage increases based on remaining duration of afterburn. Killing blows on burning players grant a speed boost.  ",true]


    ]















        var Atribute_not_used_or_secret = [
        [7,"<b>%s1</b><i>%</i> heal rate ",false]
,[9,"<b>%s1</b><i>%</i> ÜberCharge rate ",false]
,[11,"+<b>%s1</b><i>%</i> max overheal ",true]
,[12,"<b>%s1</b><i>%</i> shorter overheal time ",false]
,[13,"+<b>%s1</b><i>%</i> longer overheal time ",true]
,[14,"Overheal bonus doesn't decay ",true]
,[19,"On Hit: +<b>%s1</b><i>%</i> damage bonus ",true]
,[21,"<b>%s1</b><i>%</i> damage vs non-burning players ",false]
,[22,"No critical hits vs non-burning players ",false]
,[23,"No compression blast ",false]
,[27,"Attrib_AltFire_Disabled ",null]
,[28,"No random critical hits ",false]
,[30,"On Kill: +50 health on nearby teammates <p>On Kill: +10% Crit Chance on nearby teammates </p> ",null]
,[39,"<b>%s1</b><i>%</i> damage vs non-stunned players ",false]
,[40,"No move speed penalty from zoom ",true]
,[43,"Attrib_Scattergun_NoReloadSingle ",null]
,[46,"<b>%s1</b><i>%</i> zoom reduction ",false]
,[47,"No zoom or damage charge ",false]
,[49,"Disables double jump ",false]
,[50,"Absorbs <b>%s1</b><i>%</i> damage while cloaked ",true]
,[53,"Wearer cannot ignite ",true]
,[58,"+<b>%s1</b><i>%</i> self damage force ",true]
,[62,"+<b>%s1</b><i>%</i> critical hit damage resistance on wearer ",true]
,[63,"<b>%s1</b><i>%</i> critical hit damage vulnerability on wearer ",false]
,[66,"+<b>%s1</b><i>%</i> bullet damage resistance on wearer ",true]
,[70,"+<b>%s1</b><i>%</i> health from healers on wearer ",true]
,[71,"+<b>%s1</b><i>%</i> afterburn damage bonus ",true]
,[73,"+<b>%s1</b><i>%</i> afterburn duration ",true]
,[74,"<b>%s1</b><i>%</i> afterburn duration ",false]
,[75,"+<b>%s1</b><i>%</i> faster move speed while deployed ",true]
,[80,"+<b>%s1</b><i>%</i> max metal on wearer ",true]
,[81,"<b>%s1</b><i>%</i> max metal on wearer ",false]
,[82,"-<b>%s1</b><i>%</i> cloak duration ",false]
,[84,"+<b>%s1</b><i>%</i> cloak regeneration rate ",true]
,[85,"<b>%s1</b><i>%</i> cloak regeneration rate ",false]
,[90,"<b>%s1</b><i>%</i> faster power charge ",true]
,[91,"<b>%s1</b><i>%</i> slower power charge ",false]
,[94,"<b>%s1</b><i>%</i> faster repair rate ",true]
,[96,"<b>%s1</b><i>%</i> slower reload time ",false]
,[98,"On Hit: <b>%s1</b> health ",false]
,[99,"+<b>%s1</b><i>%</i> explosion radius ",true]
,[101,"+<b>%s1</b><i>%</i> projectile range ",true]
,[102,"<b>%s1</b><i>%</i> projectile range ",false]
,[104,"<b>%s1</b><i>%</i> projectile speed ",false]
,[109,"<b>%s1</b><i>%</i> health from packs on wearer ",false]
,[110,"On Hit: Gain up to +<b>%s1</b> health ",true]
,[111,"On Hit: <b>%s1</b> health ",false]
,[112,"+<b>%s1</b><i>%</i> ammo regenerated every 5 seconds on wearer ",true]
,[113,"+<b>%s1</b> metal regenerated every 5 seconds on wearer ",true]
,[116,"Attrib_SoldierBuffType ",true]
,[117,"Attrib_Dmg_Falloff_Increased ",false]
,[118,"<b>%s1</b><i>%</i> splash damage fall off ",true]
,[122,"Attrib_DemoBuffType ",true]
,[123,"<b>%s1</b><i>%</i> speed boost while active weapon ",true]
,[129,"<b>%s1</b> health drained per second on wearer ",false]
,[130,"+<b>%s1</b><i>%</i> natural regen rate ",true]
,[131,"-<b>%s1</b><i>%</i> natural regen rate ",false]
,[132,"Given to valuable Community Contributors ",null]
,[133,"Medal no. <b>%s1</b> ",null]
,[140,"+<b>%s1</b> max health on wearer ",true]
,[141,"I made this! ",null]
,[142,"Item tint color code: <b>%s1</b> ",null]
,[144,"Sets weapon mode #<b>%s1</b> ",null]
,[145,"<b>%s1</b><i>%</i> damage penalty ",null]
,[147,"Wrench no. <b>%s1</b> ",null]
,[148,"<b>%s1</b> metal reduction in building cost ",true]
,[151,"Attrib_Socket ",true]
,[152,"Custom Texture ",true]
,[153,"Not Tradable or Marketable ",null]
,[155,"Wearer cannot disguise ",false]
,[157,"<b>%s1</b> sec slower disguise speed ",false]
,[159,"<b>%s1</b> sec longer cloak blink time ",false]
,[160,"Reduced decloak sound volume ",true]
,[161,"<b>%s1</b><i>%</i> less flame spread area ",false]
,[162,"+<b>%s1</b><i>%</i> more flame spread area ",true]
,[163,"<b>%s1</b><i>%</i> less flame distance ",false]
,[164,"+<b>%s1</b><i>%</i> more flame distance ",true]
,[165,"Airblast can now be charged, which will push enemies further ",null]
,[167,"Attrib_DisguiseDamageReduction ",true]
,[168,"Immune to fire damage while disguised ",true]
,[169,"+<b>%s1</b><i>%</i> sentry damage resistance on wearer ",true]
,[171,"<b>%s1</b><i>%</i> airblast cost ",true]
,[172,"Purchased: Not Tradable, Marketable, or Usable in Crafting ",null]
,[173,"+<b>%s1</b><i>%</i> flamethrower ammo consumed per second ",false]
,[174,"<b>%s1</b><i>%</i> flamethrower ammo consumed per second ",true]
,[176,"The wearer cannot be killed by headshots ",true]
,[177,"<b>%s1</b><i>%</i> longer weapon switch ",false]
,[178,"<b>%s1</b><i>%</i> faster weapon switch ",true]
,[182,"On Hit: Slow target movement by 40% for <b>%s1</b>s ",true]
,[184,"Attrib_DuelLoserAccountID ",null]
,[185,"Date Received: <b>%s1</b> ",null]
,[186,"Gift from: <b>%s1</b> ",true]
,[188,"On death up to <b>%s1</b><i>%</i> of your stored <p>ÜberCharge is retained </p> ",true]
,[189,"Attrib_ElevateQuality ",true]
,[190,"+<b>%s1</b> health regenerated per second on wearer ",true]
,[191,"<b>%s1</b> health drained per second on wearer ",false]
,[194,"Contains: <b>%s1</b> ",null]
,[195,"Always Tradable ",false]
,[196,"Noise Maker ",null]
,[198,"This is a special Halloween <b>%s1</b> item ",true]
,[201,"+<b>%s1</b><i>%</i> faster taunt speed on wearer ",true]
,[211,"Tradable After: <b>%s1</b> ",false]
,[216,"Attrib_Knockback ",true]
,[219,"<b>%s1</b><i>%</i> damage penalty ",true]
,[221,"Attrib_DecloakRate ",true]
,[222,"On Scoped Bodyshot: Rifle charge rate increased by <b>%s1</b><i>%</i> ",true]
,[223,"On Scoped Miss: Rifle charge rate decreased by <b>%s1</b><i>%</i> ",false]
,[227,"Custom Texture ",true]
,[228,"Crafted by <b>%s1</b> ",true]
,[230,"When the medic healing you is killed you <p>gain 2 revenge crits </p> ",true]
,[232,"When the medic healing you is killed <p>you gain mini-crit boost for <b>%s1</b> seconds </p> ",true]
,[233,"While a medic is healing you, <p>this weapon's damage is increased by <b>%s1</b><i>%</i> </p> ",true]
,[234,"While not being healed by a medic, <p>your weapon switch time is <b>%s1</b><i>%</i> longer </p> ",false]
,[236,"Blocks healing while in use ",false]
,[237,"On Scoped Headshot: Rifle charge rate increased by <b>%s1</b><i>%</i> ",true]
,[239,"+<b>%s1</b><i>%</i> ÜberCharge rate for the medic healing you <p>This effect does not work in the respawn room </p> ",true]
,[240,"<b>%s1</b><i>%</i> faster reload time while being healed ",true]
,[241,"<b>%s1</b><i>%</i> slower reload time ",false]
,[242,"When the medic healing you is killed <p>the killer becomes Marked-For-Death </p> ",true]
,[243,"<b>%s1</b><i>%</i> rage lost on hit ",false]
,[244,"<b>%s1</b><i>%</i> rage gained on hit ",true]
,[245,"Gains a damage bonus as rage increases, up to <b>%s1</b><i>%</i> ",true]
,[247,"Can deal charge impact damage at any range ",true]
,[253,"<b>%s1</b> sec increase in time to cloak ",false]
,[255,"+<b>%s1</b><i>%</i> airblast push force ",true]
,[258,"Ammo collected from ammo boxes becomes health ",true]
,[260,"Attrib_DeflectionSizeMultiplier ",true]
,[261,"Item tint color code: <b>%s1</b> ",null]
,[262,"Winner: <b>%s1</b> <b>%s2</b> ",true]
,[264,"<b>%s1</b><i>%</i> increased melee attack range ",true]
,[265,"Attrib_MiniCritAirborneEnemiesDeploy ",true]
,[266,"Projectiles penetrate enemy players ",true]
,[273,"Consumable: Become Crit Boosted for 5 seconds <p>(and double your sentry's firing speed) </p> ",true]
,[274,"Consumable: Become Übercharged for 5 seconds <p>(and shield your sentry from damage) </p> ",true]
,[275,"Wearer never takes falling damage ",true]
,[276,"Teleporters can be used in both directions ",true]
,[277,"Attrib_MultipleSentries ",true]
,[279,"+<b>%s1</b><i>%</i> max misc ammo on wearer ",true]
,[286,"+<b>%s1</b><i>%</i> max building health ",true]
,[287,"+<b>%s1</b><i>%</i> Sentry Gun damage bonus ",true]
,[288,"Cannot be crit boosted ",false]
,[289,"Attrib_CenterFireProjectile ",true]
,[302,"This item will expire on <b>%s1</b>. ",null]
,[310,"Consumable: Instantly teleport to spawn ",true]
,[313,"<b>%s1</b><i>%</i> movement speed on targets ",true]
,[314,"Über duration increased <b>%s1</b> seconds ",true]
,[315,"Consumable: Instantly refill all weapon clips and ammo ",true]
,[317,"Attrib_AlternateRocketEffect ",null]
,[318,"+<b>%s1</b><i>%</i> faster reload time ",true]
,[319,"+<b>%s1</b><i>%</i> buff duration ",true]
,[320,"Increased robot Sapper radius and duration ",true]
,[321,"+<b>%s1</b><i>%</i> faster build speed ",true]
,[322,"<b>%s1</b><i>%</i> damage penalty ",null]
,[323,"Bullets destroy rockets and grenades in-flight.  Increased accuracy and frequency per-level. ",true]
,[324,"Accuracy scales damage ",true]
,[325,"+<b>%s1</b><i>%</i> bonus currency from packs ",true]
,[326,"+<b>%s1</b><i>%</i> greater jump height when active ",true]
,[327,"Consumable: Instantly upgrade all buildings to max level ",true]
,[335,"+<b>%s1</b><i>%</i> clip size ",true]
,[336,"Unable to see enemy health ",false]
,[339,"On Hit Spy: Reveal cloaked Spy ",true]
,[340,"On Hit Spy: Reveal disguised Spy ",true]
,[341,"When backstabbed: Jarate attacker ",true]
,[343,"+<b>%s1</b><i>%</i> sentry firing speed ",true]
,[344,"+<b>%s1</b><i>%</i> sentry range ",true]
,[345,"+<b>%s1</b><i>%</i> dispenser range ",true]
,[351,"Build +<b>%s1</b> additional disposable-sentry ",true]
,[353,"Cannot carry buildings ",false]
,[354,"Stuns enemies who are also wielding this weapon ",true]
,[355,"Per Shot Missed: -<b>%s1</b> ammo ",false]
,[357,"+<b>%s1</b><i>%</i> buff duration ",true]
,[365,"Attrib_SetIcicleKnifeMode ",false]
,[366,"On Hit: If enemy's belt is at or above eye level, <p>stun them for <b>%s1</b> seconds </p> ",true]
,[372,"A perpetual bond of commitment between <b>%s1</b> ",true]
,[373,"and <b>%s1</b>, forever and ever and ever. XoXoX ",true]
,[374,"Usable After: <b>%s1</b> ",false]
,[375,"Generate Rage by dealing damage.  When fully charged, press the Special-Attack key to activate knockback ",true]
,[378,"<b>%s1</b><i>%</i> slower move speed when aiming ",false]
,[389,"Shots go through multiple enemies ",true]
,[390,"Headshots deal an extra +<b>%s1</b><i>%</i> damage ",true]
,[394,"+<b>%s1</b><i>%</i> faster firing speed ",true]
,[395,"Increased headshot explosion radius and damage to nearby enemies ",true]
,[396,"+<b>%s1</b><i>%</i> faster melee attack speed ",true]
,[397,"Bullets penetrate +<b>%s1</b> enemies ",true]
,[399,"Increase backstab damage against Giant Robots by <b>%s1</b><i>%</i> ",true]
,[402,"Cannot be backstabbed ",true]
,[403,"Squad surplus claimed by: <b>%s1</b> ",true]
,[404,"Using your Power Up Canteen will apply the same bonus effect to your heal target ",true]
,[405,"Attrib_AirBlastVerticalVulnerabilityMultipier ",true]
,[407,"100% critical hit vs disguised players ",true]
,[408,"100% critical hit vs non-burning players ",true]
,[409,"On Kill: Burst into joyous laughter ",true]
,[424,"<b>%s1</b><i>%</i> clip size ",false]
,[425,"+<b>%s1</b><i>%</i> sapper damage bonus ",true]
,[427,"+<b>%s1</b> health regenerated per second for each active sapper ",true]
,[428,"<b>%s1</b><i>%</i> sapper health bonus ",true]
,[429,"<b>%s1</b><i>%</i> sapper health penalty ",false]
,[434,"<b>%s1</b><i>%</i> sapper damage penalty ",false]
,[437,"100% critical hit vs stunned players ",true]
,[440,"+<b>%s1</b> clip size ",true]
,[441,"Attrib_AutoFiresFullClipAllAtOnce ",true]
,[444,"Disables double jump ",false]
,[448,"Attrib_PlayerSkinOverride ",true]
,[453,"Killed Merasmus at level <b>%s1</b> ",true]
,[465,"Increases teleporter build speed by <b>%s1</b><i>%</i>. ",true]
,[470,"<b>%s1</b><i>%</i> damage on contact with surfaces ",false]
,[471,"Generate building rescue energy on damage ",true]
,[475,"+<b>%s1</b><i>%</i> projectile speed ",true]
,[476,"+<b>%s1</b><i>%</i> damage bonus ",true]
,[481,"Share Canteens with your heal target. <p>+1 duration, -10 price per point (minimum cost: 5) </p> ",true]
,[482,"+25% more overheal, +50% longer duration per point ",true]
,[484,"Syringes deliver a highly concentrated dose of Mad Milk. Duration increases per hit to a max of 4 seconds. ",true]
,[488,"+15% rocket speed per point.  On direct hits: rocket does maximum damage, stuns target, and blast radius increased +15% per point. ",true]
,[489,"+<b>%s1</b><i>%</i> faster move speed on wearer ",true]
,[490,"+<b>%s1</b> health regenerated per second on wearer ",true]
,[491,"+<b>%s1</b><i>%</i> critical hit damage resistance on wearer ",true]
,[492,"+<b>%s1</b><i>%</i> fire damage resistance on wearer ",true]
,[493,"+25% heal rate for patient, +25% faster revive rate, and +25% self heal rate, per point ",true]
,[499,"Build energy by healing teammates.  When fully charged, press the Special-Attack key to deploy a frontal projectile shield. ",true]
,[516,"<b>%s1</b><i>%</i> bullet damage vulnerability on wearer ",false]
,[517,"+<b>%s1</b> max health on wearer ",true]
,[525,"<b>%s1</b><i>%</i> increase in push force taken from damage ",false]
,[526,"+<b>%s1</b><i>%</i> bonus healing from all sources ",true]
,[532,"Hype Decays Over Time. ",false]
,[534,"<b>%s1</b><i>%</i> reduction in airblast vulnerability ",false]
,[535,"<b>%s1</b><i>%</i> increase in push force taken from damage ",false]
,[540,"Attrib_AddHeadOnHit ",true]
,[554,"Revive Teammates ",true]
,[606,"Attrib_TauntSoundSuccess ",true]
,[607,"Attrib_PhaseCloak ",true]
,[608,"Attrib_TauntSoundSuccess ",true]
,[609,"Attrib_PhaseCloak ",true]
,[610,"<b>%s1</b><i>%</i> increased air control. ",true]
,[612,"Attrib_RocketLaunchImpulse ",true]
,[613,"On Kill: Gain Mini-crits for <b>%s1</b> seconds. ",true]
,[614,"No metal from dispensers when active. ",false]
,[630,"Attrib_BackHeadshot ",true]
,[632,"Fires 3 barrages while explosive jumping ",true]
,[634,"Attrib_AirJumpOnAttack ",true]
,[637,"Zoom does not affect charge ",true]
,[638,"100% critical hits burning players from behind. <p>Mini-crits burning players from the front. </p> ",true]
,[643,"<b>%s1</b><i>%</i> blast damage from rocket jumps ",true]
,[647,"Fires tracer rounds ",false]
,[651,"Fire rate increases as health decreases ",true]
,[669,"Stickybombs fizzle <b>%s1</b> seconds after landing ",false]
,[674,"Attrib_Class_Select_Override_VCD ",true]
,[684,"<b>%s1</b><i>%</i> damage on grenades that explode on timer ",false]
,[708,"Hold fire to load up to 4 shells ",true]
,[709,"Weapon spread increases as health decreases ",false]
,[710,"Attrib_AutoFiresFullClipNegative ",false]
,[711,"Attrib_AutoFiresWhenFull ",false]
,[730,"Attrib_ElevateQuality ",]
,[734,"<b>%s1</b><i>%</i> less healing from all sources ",false]
,[748,"Items Traded in&nbsp;: <b>%s1</b> ",null]
,[774,"<b>%s1</b> sec decrease in charge duration ",false]
,[776,"<b>%s1</b><i>%</i> decrease in charge impact damage ",false]
,[777,"Not Tradable, Marketable, Usable in Crafting, or Gift Wrappable ",null]
,[791,"Attrib_DamageBlastPush ",true]
,[807,"Collect the organs of your victims ",true]
,[813,"Immune to push force from damage and airblast when spun up ",true]
,[822,"Attrib_AirblastDestroyProjectile ",null]
,[852,"<b>%s1</b><i>%</i> damage vulnerability on wearer ",false]
,[871,"Stun enemies when you land ",true]
,[872,"Able to re-launch while already in-flight ",true]
,[874,"<b>%s1</b><i>%</i> faster recharge rate ","no img"]
,[875,"Ignited enemies explode ","no img"]
,[1000,"+<b>%s1</b><i>%</i> damage bonus ",true]
,[1001,"+<b>%s1</b><i>%</i> bullet damage resistance on wearer ",true]
,[1002,"+<b>%s1</b><i>%</i> faster move speed on wearer ",true]
,[1003,"+<b>%s1</b> health regenerated per second on wearer ",true]
,[1004,"<b>%s1</b> ",true]
,[1005,"<b>%s1</b> ",true]
,[1006,"Voices From Below ",true]
,[1007,"Pumpkin Bombs ",true]
,[1008,"Halloween Fire ",true]
,[1009,"Exorcism ",true]
,[2043,"<b>%s1</b><i>%</i> slower upgrade rate ",false]
,[2048,"Disables double jump ",false]

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
            //Write a script that creates a block with the inscription "EUY" and it will be just above the mouse pointer.

            var div = document.createElement("div");
            div.innerHTML = "This attribute is not used in the game or is hidden!";
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
