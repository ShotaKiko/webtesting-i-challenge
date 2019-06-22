module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(lvl) {
  if(lvl === 20){
    return lvl = lvl
  } else{
    return lvl = lvl + 1
  }
}

function fail(lvl, durability) {
  if( lvl >= 15){
    const condition = (durability <= 10) ? 0 : (durability - 10)
    if( lvl > 16){
      const newEnhLvl = lvl- 1
      return newEnhLvl
    }
    return condition
  } else if (lvl <15 ){
    const condition = durability <=5 ? 0 : durability - 5
    return condition
  }
  // return { ...item };
}

function repair(durability) {
  return  durability = 100 ;
}

function get(item) {
  if(item.enhancementLVL === 0){
    return item.name;
  } else{
    return `${item.name} [+${item.enhancementLVL}]`
  }
}
