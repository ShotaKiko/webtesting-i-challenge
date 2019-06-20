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

function fail(item) {
  return { ...item };
}

function repair(durability) {
  return  durability = 100 ;
}

function get(item) {
  return { ...item };
}
