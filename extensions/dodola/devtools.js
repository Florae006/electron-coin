chrome.devtools.panels.create(
  "dodola",           // 选项卡标题
  "icons/logo.svg",           // 图标（可选）
  "devtools.html",         // 选项卡内容页面
  function (panel) {
    // 选项卡创建后的回调
    // console.log('面板已创建', panel);
  }
);


const contentDiv = document.getElementById('content');
contentDiv.textContent = 'Hello, this is my custom panel!';