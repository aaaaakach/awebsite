// 获取当前时间并显示
function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const timeString = `当前时间：${hours}:${minutes}:${seconds}`;

    document.getElementById('current-time').textContent = timeString;
}

// 每秒更新一次时间
setInterval(updateTime, 1000);

// 初次加载时更新一次时间
updateTime();

function submitMessage() {
    const message = document.getElementById('message').value;
    const name = document.getElementById('name').value;

    // 检查是否填写完整
    if (message && name) {
        const outputDiv = document.getElementById('output');
        
        // 动态显示提交的内容
        outputDiv.innerHTML = `<h3>留言记录</h3><p><strong>你说：</strong>${message}</p><p><strong>署名：</strong>${name}</p>`;
        
        // 清空输入框内容
        document.getElementById('message').value = '';
        document.getElementById('name').value = '';
        
        // 滚动到留言区域
        outputDiv.scrollIntoView({ behavior: "smooth" });

        // 隐藏留言部分，显示主界面
        document.getElementById('message-section').style.display = 'none';
        document.getElementById('main-section').style.display = 'flex';
    } else {
        alert('请确保两项都填写完整！');
    }
}
