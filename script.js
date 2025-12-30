const checklistData = [
    {
        sideLabel: '整體準備',
        subCategories: [
            {
                title: '緊急糧食飲水',
                items: [
                    { id: 'water', label: '飲用水兩瓶', desc: '600ml x 2', span: 2 },
                    { id: 'food', label: '餅乾、巧克力、防災食品、真空速食食品等乾糧', desc: '', span: 2 }
                ]
            },
            {
                title: '醫療清潔品',
                items: [
                    { id: 'medical_1', label: '優碘、棉花棒、紗布等', desc: '' },
                    { id: 'medical_2', label: '體溫計', desc: '' },
                    { id: 'medical_3', label: '酸痛貼布或藥膏', desc: '' },
                    { id: 'medical_4', label: '衛生棉、護墊', desc: '' },
                    { id: 'medical_6', label: '口罩、乾洗手、濕紙巾、面紙', desc: '', span: 2 },
                    { id: 'medical_5', label: '個人用醫藥品', desc: '每日服用、常用及常備藥等，注意保存時效及保存方式', span: 2 }
                ]
            },
            {
                title: '禦寒保暖衣物',
                items: [
                    { id: 'cloth_1', label: '手套', desc: '防切割、耐磨' },
                    { id: 'cloth_3', label: '雨衣', desc: '' },
                    { id: 'cloth_4', label: '小毛毯或鋁毯、暖暖包', desc: '' },
                    { id: 'cloth_5', label: '小型睡袋', desc: '' },
                    { id: 'cloth_2', label: '個人用輕便外套、內衣、襪子、毛巾', desc: '', span: 2 }
                ]
            },
            {
                title: '貴重物品',
                items: [
                    { id: 'value_1', label: '身分證、健保卡、存摺影本', desc: '紙本或數位' },
                    { id: 'value_3', label: '少許現金、零錢', desc: '' },
                    { id: 'value_2', label: '其他合法證明重要證件影本', desc: '', span: 2 }
                ]
            },
            {
                title: '其他',
                items: [
                    { id: 'other_1', label: '哨子', desc: '' },
                    { id: 'other_6', label: '行動電源、充電器材', desc: '' },
                    { id: 'other_3', label: '紙筆', desc: '' },
                    { id: 'other_4', label: '打火機、瑞士刀', desc: '' },
                    { id: 'other_2', label: '可攜式收音機、手電筒、電池', desc: '' },
                    { id: 'other_7', label: '防中暑物品如帽子、雨傘、防曬乳', desc: '' },
                    { id: 'other_5', label: '防災地圖', desc: '下載消防防災e點通App離線地圖或自行製作', span: 2 }
                ]
            },
            {
                title: '鞋子',
                items: [
                    { id: 'shoes', label: '鞋子', desc: '輕便耐走', span: 2 }
                ]
            }
        ]
    },
    {
        sideLabel: '嬰幼兒',
        subCategories: [
            {
                title: '緊急糧食飲水',
                items: [{ id: 'baby_1', label: '奶瓶、奶粉、真空包裝或罐頭副食品', desc: '', span: 2 }]
            },
            {
                title: '醫療清潔品',
                items: [{ id: 'baby_2', label: '尿布、尿褲、嬰兒背帶', desc: '', span: 2 }]
            },
            {
                title: '其他',
                items: [{ id: 'baby_3', label: '奶嘴或小玩具', desc: '', span: 2 }]
            }
        ]
    },
    {
        sideLabel: '高齡長者',
        subCategories: [
            {
                title: '緊急糧食飲水',
                items: [{ id: 'old_1', label: '營養果凍、銀髮友善食品', desc: '', span: 2 }]
            },
            {
                title: '醫療清潔品',
                items: [{ id: 'old_2', label: '拋棄式內衣褲、紙尿布', desc: '', span: 2 }]
            },
            {
                title: '其他',
                items: [{ id: 'old_3', label: '拐杖、假牙、助聽器、老花眼鏡等', desc: '', span: 2 }]
            }
        ]
    },
    {
        sideLabel: '寵物',
        subCategories: [
            {
                title: '緊急糧食飲水',
                items: [{ id: 'pet_1', label: '寵物糧食', desc: '', span: 2 }]
            },
            {
                title: '禦寒保暖衣物',
                items: [
                    { id: 'pet_2', label: '保暖毯', desc: '' },
                    { id: 'pet_3', label: '寵物衣物', desc: '' }
                ]
            },
            {
                title: '醫療清潔品',
                items: [{ id: 'pet_4', label: '常備藥品', desc: '', span: 2 }]
            },
            {
                title: '其他',
                items: [{ id: 'pet_5', label: '外出籠、寵物牽繩', desc: '', span: 2 }]
            }
        ]
    }
];

const container = document.getElementById('checklist-container');
const progressFill = document.getElementById('progress-fill');
const progressPercent = document.getElementById('progress-percent');
const clearBtn = document.getElementById('clear-btn');
const printBtn = document.getElementById('print-btn');

function renderChecklist() {
    const savedState = JSON.parse(localStorage.getItem('evacuationProgress') || '{}');
    const lastUpdate = localStorage.getItem('lastUpdateDate') || '尚未開始準備';

    let html = '<div class="manual-table">';
    checklistData.forEach(cat => {
        html += '<div class="category-row">';
        html += '<div class="side-header">' + cat.sideLabel + '</div>';
        html += '<div class="content-area">';
        cat.subCategories.forEach(sub => {
            const extraClass = sub.items.length === 1 ? 'single-col' : '';
            html += '<div class="sub-category ' + extraClass + '">';
            html += '<div class="sub-label">' + sub.title + '</div>';
            html += '<div class="items-container">';
            sub.items.forEach(item => {
                const checked = savedState[item.id] ? 'checked' : '';
                const descSpan = item.desc ? '<span class="item-desc">' + item.desc + '</span>' : '';
                const spanClass = item.span === 2 ? 'span-2' : '';
                html += '<label class="item ' + spanClass + '">';
                html += '<input type="checkbox" id="' + item.id + '" ' + checked + ' onchange="handleUpdate()">';
                html += '<div class="item-text">';
                html += '<span class="item-label">' + item.label + '</span>';
                html += descSpan;
                html += '</div></label>';
            });
            html += '</div></div>';
        });
        html += '</div></div>';
    });
    html += '</div>';

    // Add Date and Tips section
    html += '<div class="manual-footer-info">';
    html += '<div class="date-row">📅 本清單最後更新日期：<span class="update-date">' + lastUpdate + '</span></div>';
    html += '<div class="tips-box">';
    html += '<h4>💡 避難包小提醒</h4>';
    html += '<ul>';
    html += '<li>建議每 <span style="color:red;font-weight:bold;">6個月</span> 檢查一次避難包，更新過期食物、水及電池。</li>';
    html += '<li>避難包重量建議：男性不超過 <span style="color:red;font-weight:bold;">15kg</span>，女性不超過 <span style="color:red;font-weight:bold;">10kg</span>（以背得動為準）。</li>';
    html += '<li>請放置於家中、辦公室出口處等 <span style="color:red;font-weight:bold;">隨手可得</span> 的地方。</li>';
    html += '</ul>';
    html += '</div></div>';

    container.innerHTML = html;
    updateProgress(false); // Don't update date during initial render
}

function handleUpdate() {
    const now = new Date();
    const dateStr = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0');
    localStorage.setItem('lastUpdateDate', dateStr);

    const dateDisplay = document.querySelector('.update-date');
    if (dateDisplay) dateDisplay.innerText = dateStr;

    updateProgress(true);
}

function updateProgress(save) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const total = checkboxes.length;
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;

    const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
    if (progressFill) progressFill.style.width = percentage + '%';
    if (progressPercent) progressPercent.innerText = percentage + '%';

    if (save) {
        const state = {};
        checkboxes.forEach(cb => { state[cb.id] = cb.checked; });
        localStorage.setItem('evacuationProgress', JSON.stringify(state));
    }
}

clearBtn.addEventListener('click', () => {
    if (confirm('確定要清除所有勾選進度嗎？')) {
        localStorage.removeItem('evacuationProgress');
        localStorage.removeItem('lastUpdateDate');
        renderChecklist();
    }
});

const calendarBtn = document.getElementById('calendar-btn');

calendarBtn.addEventListener('click', () => {
    const now = new Date();
    const future = new Date(now.setMonth(now.getMonth() + 6));

    // Format: YYYYMMDD for All-Day Events
    const formatDate = (d) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return "" + y + m + day;
    };

    const startDate = formatDate(future);
    const nextDay = new Date(future.getTime() + 86400000); // +1 day
    const endDate = formatDate(nextDay);

    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Emergency Kit Reminder//TW',
        'BEGIN:VEVENT',
        'DTSTART;VALUE=DATE:' + startDate,
        'DTEND;VALUE=DATE:' + endDate,
        'SUMMARY:緊急避難包定期檢查 (6個月一次)',
        'DESCRIPTION:提醒您：今天該檢查避難包物資囉！請確認水、食物、電池是否過期。\\n\\nhttps://orange-book-checklist.zeabur.app/',
        'LOCATION:家中/辦公室',
        'TRANSP:TRANSPARENT',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = '防災包檢查提醒.ics';
    link.click();

    // Alert for mobile users
    setTimeout(() => {
        alert('提醒檔案已下載！\n請至手機的「檔案」或瀏覽器的「下載項目」中點擊該檔案，即可匯入行事曆。');
    }, 500);
});

const googleCalBtn = document.getElementById('google-cal-btn');
googleCalBtn.addEventListener('click', () => {
    const now = new Date();
    const future = new Date(now.setMonth(now.getMonth() + 6));

    // Format: YYYYMMDD (Google needs this for all-day events)
    const formatDate = (d) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return "" + y + m + day;
    };

    const startDate = formatDate(future);
    const nextDay = new Date(future.getTime() + 86400000);
    const endDate = formatDate(nextDay);

    const title = encodeURIComponent('緊急避難包定期檢查 (6個月一次)');
    const details = encodeURIComponent('提醒您：今天該檢查避難包物資囉！請確認水、食物、電池是否過期。\n\nhttps://orange-book-checklist.zeabur.app/');
    const location = encodeURIComponent('家中/辦公室');

    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;

    window.open(googleUrl, '_blank');
});

const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
    const target = document.querySelector('.manual-container');

    // Temporarily hide interactive elements for a clean shot
    const originalStyle = target.style.boxShadow;
    target.style.boxShadow = 'none';

    html2canvas(target, {
        scale: 2, // High resolution
        useCORS: true,
        backgroundColor: '#ffffff',
        windowWidth: 1200 // Force desktop layout even on mobile
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = '全民國防應變手冊-避難包清單.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        target.style.boxShadow = originalStyle;
    });
});

printBtn.addEventListener('click', () => { window.print(); });

renderChecklist();
