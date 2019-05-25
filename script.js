var BronzeUnlock1 = false;
var BronzeAutoUnlock = false;
var SilverUnlock = false;
var SilverUnlock1 = false;
var SilverAutoUnlock = false;
var GoldUnlock = false;
var GoldUnlock1 = false;
var GoldAutoUnlock = false;

function UpgradeCheck(){
  var Bronze = document.getElementById('bronze').value
  if (Bronze >= 10 && BronzeUnlock1 == false){
    document.getElementById('bigMineBronze').style.visibility = "visible"
    BronzeUnlock1 = true;
    document.getElementById('output').value = "Unlocked Bronze Big Mine!"
  }
  
  if (Bronze >= 1000 && BronzeAutoUnlock == false){
    document.getElementById('autoMineBronze').style.visibility = "visible"
    document.getElementById('autoMinerCountBronze').style.visibility = "visible"
    BronzeAutoUnlock = true;
    document.getElementById('output').value = "Unlocked Bronze Auto Mine!"
  }

  if (Bronze >= 10000 && SilverUnlock == false){
    document.getElementById('silver').style.visibility = "visible"
    document.getElementById('silvertext').style.visibility = "visible"
    document.getElementById('mineSilver').style.visibility = "visible"
    SilverUnlock = true;
    document.getElementById('output').value = "Unlocked Silver"
  }

  var Silver = document.getElementById('silver').value
  if (Silver >= 10 && SilverUnlock1 == false){
    document.getElementById('bigMineSilver').style.visibility = "visible"
    SilverUnlock1 = true;
    document.getElementById('output').value = "Unlocked Silver Big Mine!"
  }

  if (Silver >= 1000 && SilverAutoUnlock == false){
    document.getElementById('autoMineSilver').style.visibility = "visible"
    document.getElementById('autoMinerCountSilver').style.visibility = "visible"
    SilverAutoUnlock = true;
    document.getElementById('output').value = "Unlocked Silver Auto Mine!"
  }

  if (Silver >= 1000000 && GoldUnlock == false){
    document.getElementById('gold').style.visibility = "visible"
    document.getElementById('goldtext').style.visibility = "visible"
    document.getElementById('mineGold').style.visibility = "visible"
    GoldUnlock = true;
    document.getElementById('output').value = "Unlocked Gold!"
  }

  var Gold = document.getElementById('gold').value
  if (Gold >= 10 && GoldUnlock1 == false){
    document.getElementById('bigMineGold').style.visibility = "visible"
    GoldUnlock1 = true;
    document.getElementById('output').value = "Unlocked Gold Big Mine!"
  }

  if (Gold >= 1000 && GoldAutoUnlock == false){
    document.getElementById('autoMineGold').style.visibility = "visible"
    document.getElementById('autoMinerCountGold').style.visibility = "visible"
    GoldAutoUnlock = true;
    document.getElementById('output').value = "Unlocked Gold Auto Mine!"
  }
  

  return BronzeUnlock1, BronzeAutoUnlock, SilverUnlock, SilverUnlock1, SilverAutoUnlock, GoldUnlock, GoldUnlock1, GoldAutoUnlock
}


function BronzeMine(){
  var Bronze = document.getElementById('bronze').value
  Bronze++;
  document.getElementById('bronze').value = Bronze;
  UpgradeCheck();
}

function BigMineBronze(){
  var Bronze = document.getElementById('bronze').value;
  var Random = Math.random() * (2 - 1) + 1;
  Bronze = Math.round(Bronze * Random);
  document.getElementById('bronze').value = Bronze

  UpgradeCheck();
}

function BuyAutoMineBronze(){
  var Bronze = document.getElementById('bronze').value;
  if (Bronze >= 1000){
    AddBronzeMiner();
    var MinerCount = document.getElementById('autoMinerCountBronze').value;
    MinerCount++;
    document.getElementById('autoMinerCountBronze').value = MinerCount;
    Bronze = Bronze - 1000;
    document.getElementById('bronze').value = Bronze;
  }

  UpgradeCheck();
}

function AddBronzeMiner(){
  setInterval(function () {
    var Bronze = parseInt(document.getElementById('bronze').value, 10);
    Bronze++;
    document.getElementById('bronze').value = Bronze;
  }, 1000);
}




function SilverMine(){
  var Silver = document.getElementById('silver').value
  Silver++;
  document.getElementById('silver').value = Silver;
  UpgradeCheck();
}

function BigMineSilver(){
  var Silver = document.getElementById('silver').value;
  var Random = Math.random() * (2 - 1) + 1;
  Silver = Math.round(Silver * Random);
  document.getElementById('silver').value = Silver

  UpgradeCheck();
}

function BuyAutoMineSilver(){
  var Silver = document.getElementById('silver').value;
  if (Silver >= 10000){
    AddSilverMiner();
    var MinerCount = document.getElementById('autoMinerCountSilver').value;
    MinerCount++;
    document.getElementById('autoMinerCountSilver').value = MinerCount;
    Silver = Silver - 10000;
    document.getElementById('silver').value = Silver;
  }

  UpgradeCheck();
}

function AddSilverMiner(){
  setInterval(function () {
    var Silver = parseInt(document.getElementById('silver').value, 10);
    Silver++;
    document.getElementById('silver').value = Silver;
  }, 1000);
}





function GoldMine(){
  var Gold = document.getElementById('gold').value
  Gold++;
  document.getElementById('gold').value = Gold;
  UpgradeCheck();
}

function BigMineGold(){
  var Gold = document.getElementById('gold').value;
  var Random = Math.random() * (2 - 1) + 1;
  Gold = Math.round(Gold * Random);
  document.getElementById('gold').value = Gold

  UpgradeCheck();
}

function BuyAutoMineGold(){
  var Gold = document.getElementById('gold').value;
  if (Gold >= 10000){
    AddGoldMiner();
    var MinerCount = document.getElementById('autoMinerCountGold').value;
    MinerCount++;
    document.getElementById('autoMinerCountGold').value = MinerCount;
    Gold = Gold - 10000;
    document.getElementById('gold').value = Gold;
  }

  UpgradeCheck();
}

function AddGoldMiner(){
  setInterval(function () {
    var Gold = parseInt(document.getElementById('gold').value, 10);
    Gold++;
    document.getElementById('gold').value = Gold;
  }, 1000);
}
