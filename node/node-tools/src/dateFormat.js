function autoZero(n) {
  return n > 9 ? n : "0" + n;
}

function dateFormate(date) {
  const y = new Date().getFullYear();
  const m = autoZero(new Date().getMonth());
  const d = autoZero(new Date().getDate());
  const hh = autoZero(new Date().getHours());
  const mm = autoZero(new Date().getMinutes());
  const ss = autoZero(new Date().getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

module.exports = {
  dateFormate,
};
