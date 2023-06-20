const axios = require("axios");
var XLSX = require("xlsx");
const workbook = XLSX.readFile("test6.xlsx");
const keys = Object.keys(workbook.Sheets["Sheet1"]);
const data = keys.filter((_, idx) => idx !== 0 && idx !== keys.length - 1);
const nameData = data.map((key) => workbook.Sheets["Sheet1"][key].v);
console.log(nameData, 'nameData ===>')
const nameChunk1 = nameData.slice(0, 50);
const nameChunk2 = nameData.slice(50, 100);
const nameChunk3 = nameData.slice(100, 150);
const nameChunk4 = nameData.slice(150);
(async function () {
  try {
    const fileName = "能量豆映射6.xlsx";
    const chunk1Data = await Promise.all(
      nameChunk1.map((item) =>
        axios.get(
          `http://boss-pre.am.intra.xiaojukeji.com/boss_mis/integralOpenApi/v1/user/credit/score?ldap=${item.trim()}&no=20211230000001`,
          {
            headers: {
              Cookie: "SSO_BOSS_SUB_TICKET=f9a901d15c70b651d2768e5fe70aaab40001844000",
            },
          }
        )
      )
    )
      .then((res) => res.map((item) => item.data))
      .catch((err) => err);
    const chunk2Data = await Promise.all(
      nameChunk2.map((item) =>
        axios.get(
          `http://boss-pre.am.intra.xiaojukeji.com/boss_mis/integralOpenApi/v1/user/credit/score?ldap=${item.trim()}&no=20211230000001`,
          {
            headers: {
              Cookie: "SSO_BOSS_SUB_TICKET=f9a901d15c70b651d2768e5fe70aaab40001844000",
            },
          }
        )
      )
    )
      .then((res) => res.map((item) => item.data))
      .catch((err) => err);
    const chunk3Data = await Promise.all(
      nameChunk3.map((item) =>
        axios.get(
          `http://boss-pre.am.intra.xiaojukeji.com/boss_mis/integralOpenApi/v1/user/credit/score?ldap=${item.trim()}&no=20211230000001`,
          {
            headers: {
              Cookie: "SSO_BOSS_SUB_TICKET=f9a901d15c70b651d2768e5fe70aaab40001844000",
            },
          }
        )
      )
    )
      .then((res) => res.map((item) => item.data))
      .catch((err) => err);
    const chunk4Data = await Promise.all(
      nameChunk4.map((item) =>
        axios.get(
          `http://boss-pre.am.intra.xiaojukeji.com/boss_mis/integralOpenApi/v1/user/credit/score?ldap=${item.trim()}&no=20211230000001`,
          {
            headers: {
              Cookie: "SSO_BOSS_SUB_TICKET=f9a901d15c70b651d2768e5fe70aaab40001844000",
            },
          }
        )
      )
    )
      .then((res) => res.map((item) => item.data))
      .catch((err) => err);

    const result = [...chunk1Data, ...chunk2Data, ...chunk3Data, ...chunk4Data].map((item, idx) => [
      nameData[idx],
      item || 0,
    ]);
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(result);
    XLSX.utils.book_append_sheet(wb, ws, fileName); //将数据添加到工作薄
    XLSX.writeFile(wb, fileName);
  } catch (error) {
    console.log(error, "获取能量豆映射出错了");
  }
})();
