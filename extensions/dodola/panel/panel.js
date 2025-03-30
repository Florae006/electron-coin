// 获取被检查的窗口的标签ID
const inspectedWindowId = chrome.devtools.inspectedWindow.tabId;
console.log('被检查的窗口ID:', inspectedWindowId);

// 向被检查的页面注入脚本
chrome.devtools.inspectedWindow.eval(
  'document.title',
  function (result, isException) {
    if (!isException) {
      document.getElementById('content').textContent =
        `当前页面标题: ${result}`;
    }
  }
);

// 与被检查页面通信
const backgroundPageConnection = chrome.runtime.connect({
  name: 'devtools-page'
});

backgroundPageConnection.postMessage({
  tabId: inspectedWindowId,
  scriptToInject: 'content-script.js'
});