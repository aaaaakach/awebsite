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
