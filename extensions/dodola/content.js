document.addEventListener('DOMContentLoaded', () => {
  // 你的代码在这里执行
  console.log('HTML 已加载完成');
  // 其他逻辑
  const contentDiv = document.getElementById('content');
  if (contentDiv) {
    contentDiv.style.backgroundColor = '#f0f0f0';
    contentDiv.style.padding = '20px';
    contentDiv.style.borderRadius = '5px';
    contentDiv.textContent = 'Hello, this is my custom panel!';
  } else {
    console.error('Content div not found');
  }
});