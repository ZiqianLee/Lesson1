// ==========================================
// 1. 获取用户输入
// prompt() 会弹出一个输入框，用户输入的内容默认是 字符串 (String) 类型
// ==========================================
let choice = prompt("Please enter a letter from a to d:");

// ==========================================
// 2. switch 分支语句
// 核心规则：switch 进行的是【全等比较】(严格相等 ===)，即值和类型必须都相同
// ==========================================
switch (choice) {
  // 单个匹配分支：当 choice === "a" 时执行
  case "a":
    console.log("You chose a");
    alert("You chose a");
    break;
  // break 关键字：跳出当前的 switch 语句。
  // 若不写 break，代码会继续往下穿透，执行后续所有 case，直到遇到 break 或者 switch 语句结束

  case "b":
    console.log("You chose b");
    alert("You chose b");
    break;

  case "c":
    console.log("You chose c");
    alert("You chose c");
    break;

  case "d":
    console.log("You chose d");
    alert("You chose d");
    break;

  // ==========================================
  // 3. 多 case 合并（利用穿透特性实现“或”的逻辑）
  // 当 choice 为 "e" 或 "E" 时，都会执行此处的代码块
  // ==========================================
  case "e":
  case "E":
    console.log("You chose e or E");
    alert("You chose e or E");
    break;

  // ==========================================
  // 4. default 默认分支
  // 当所有 case 都不匹配时执行（相当于 if-else 中的 else 兜底）
  // ==========================================
  default:
    console.log("No match");
    alert("No match");
}
