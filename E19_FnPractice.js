while (true) {
  let second = Number(prompt("Type the seconds："));

/**
 * 将秒数转换为小时、分钟、秒的格式，并以"时"、"分"、"秒"的形式显示
 * @param {number} second - 需要转换的总秒数
 * @returns {void} - 通过alert弹窗显示转换后的时间
 */
  function getTime(second) {
    // 计算小时数，取24小时制模
    let h = (second / 3600) % 24;
    // 计算分钟数，取60分钟模
    let m = (second / 60) % 60;
    // 计算秒数，取60秒模
    let s = second % 60;
    // 如果小时数小于10，在前面补0
    let hNew = h < 10 ? "0" + h : h;
    // 如果分钟数小于10，在前面补0
    let mNew = m < 10 ? "0" + m : m;
    // 如果秒数小于10，在前面补0
    let sNew = s < 10 ? "0" + s : s;

    alert(hNew + "时" + mNew + "分" + sNew + "秒");
    
    
  }
  getTime(second);

  let flag = confirm("Continue？");
  if (!flag) {
    break;
  }
}


