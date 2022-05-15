//yyyy-MM-dd 형식으로 날짜 출력

// [지난 달 날짜, 오늘 날짜]
const format = (today: any) => {
  const year = today.getFullYear(); //년도
  const month = ('0' + (1 + today.getMonth())).slice(-2); //  월
  const day = ('0' + today.getDate()).slice(-2); // 날짜

  return year + '-' + month + '-' + day;
};

function dateFormat() {
  const today = new Date();
  const monthAgo = new Date(today);
  monthAgo.setMonth(today.getMonth() - 1);

  const current = format(today);
  const pre = format(monthAgo);

  return [pre, current];
}

export default dateFormat;
