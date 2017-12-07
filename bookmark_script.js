javascript: var db=Array();db.violet={type:"violet",probability:3/32452,price:21},db.googly={type:"googly",probability:37/32452,price:7.256},db.wingtips={type:"wingtips",probability:202/32452,price:.505},db.jaguar={type:"jaguar",probability:205/32452,price:26.832},db.mainecoon={type:"mainecoon",probability:215/32452,price:.647},db.whixtensions={type:"whixtensions",probability:303/32452,price:.967},db.cerulian={type:"cerulian",probability:513/32452,price:.246},db.chartreux={type:"chartreux",probability:609/32452,price:.241},db.fabulous={type:"fabulous",probability:1094/32452,price:.076},db.gold={type:"gold",probability:1229/32452,price:1.126},db.peach={type:"peach",probability:1253/32452,price:.161},db.bubblegum={type:"bubblegum",probability:2399/32452,price:.055},db.scarlet={type:"scarlet",probability:2561/32452,price:.138},db.otaku={type:"otaku",probability:2706/32452,price:.086},db.dali={type:"dali",probability:2783/32452,price:.09},db.bloodred={type:"bloodred",probability:2815/32452,price:.111},db.skyblue={type:"skyblue",probability:3410/32452,price:.066},db.emeraldgreen={type:"emeraldgreen",probability:3688/32452,price:.113},db.spock={type:"spock",probability:3803/32452,price:.147},db.limegreen={type:"limegreen",probability:4160/32452,price:.076},db.tigerpunk={type:"tigerpunk",probability:4271/32452,price:.069},db.beard={type:"beard",probability:4895/32452,price:.881},db.mauveover={type:"mauveover",probability:4979/32452,price:.355},db.laperm={type:"laperm",probability:5518/32452,price:.08},db.cloudwhite={type:"cloudwhite",probability:5548/32452,price:.091},db.calicool={type:"calicool",probability:5584/32452,price:.097},db.barkbrown={type:"barkbrown",probability:5593/32452,price:.104},db.cymric={type:"cymric",probability:6170/32452,price:.37},db.chestnut={type:"chestnut",probability:6298/32452,price:.905},db.tongue={type:"tongue",probability:7283/32452,price:.09},db.saycheese={type:"saycheese",probability:7449/32452,price:.473},db.shadowgrey={type:"shadowgrey",probability:9852/32452,price:.293},db.coffee={type:"coffee",probability:9877/32452,price:.86},db.salmon={type:"salmon",probability:10321/32452,price:.223},db.royalpurple={type:"royalpurple",probability:10693/32452,price:.771},db.chocolate={type:"chocolate",probability:11731/32452,price:.31},db.mintgreen={type:"mintgreen",probability:12004/32452,price:.659},db.swampgreen={type:"swampgreen",probability:12026/32452,price:.769},db.topaz={type:"topaz",probability:12134/32452,price:.623},db.orangesoda={type:"orangesoda",probability:12179/32452,price:1.884},db.simple={type:"simple",probability:12192/32452,price:.525},db.lemonade={type:"lemonade",probability:12216/32452,price:.792},db.aquamarine={type:"aquamarine",probability:12505/32452,price:.266},db.raisedbrow={type:"raisedbrow",probability:12524/32452,price:.12},db.munchkin={type:"munchkin",probability:12552/32452,price:.542},db.sphynx={type:"sphynx",probability:12636/32452,price:.776},db.greymatter={type:"greymatter",probability:13240/32452,price:.249},db.happygokitty={type:"happygokitty",probability:14850/32452,price:.674},db.strawberry={type:"strawberry",probability:14854/32452,price:.656},db.ragamuffin={type:"ragamuffin",probability:15136/32452,price:.481},db.soserious={type:"soserious",probability:15282/32452,price:.682},db.sizzurp={type:"sizzurp",probability:15542/32452,price:.298},db.pouty={type:"pouty",probability:15773/32452,price:.404},db.himalayan={type:"himalayan",probability:15792/32452,price:.815},db.crazy={type:"crazy",probability:19870/32452,price:.879},db.thicccbrowz={type:"thicccbrowz",probability:19997/32452,price:.639},db.luckystripe={type:"luckystripe",probability:22299/32452,price:.263},db.granitegrey={type:"granitegrey",probability:29915/32452,price:.459},db.kittencream={type:"kittencream",probability:30932/32452,price:.503},db.totesbasic={type:"totesbasic",probability:1,price:.332};var percentColors=[{pct:0,color:{r:255,g:0,b:0}},{pct:.5,color:{r:255,g:255,b:0}},{pct:1,color:{r:0,g:255,b:0}}],getColorForPercentage=function(e){for(var i=1;i<percentColors.length-1&&!(e<percentColors[i].pct);i++);var r=percentColors[i-1],b=percentColors[i],p=b.pct-r.pct,t=(e-r.pct)/p,o=1-t,a=t,y={r:Math.floor(r.color.r*o+b.color.r*a),g:Math.floor(r.color.g*o+b.color.g*a),b:Math.floor(r.color.b*o+b.color.b*a)};return"rgb("+[y.r,y.g,y.b].join(",")+")"},triats_obj=document.getElementsByClassName("ListAttributes-item");for(var i in triats_obj)void 0!==triats_obj[i].innerText&&(triats_obj[i].style.backgroundColor=getColorForPercentage(db[triats_obj[i].innerText].probability));