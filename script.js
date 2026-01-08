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
                    { id: 'medical_5', label: '個人用醫藥品', desc: '每日服用、常用及常備藥等，<br>注意保存時效及保存方式', span: 2 }
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

const homeReservesData = [
    {
        sideLabel: '生存維生',
        subCategories: [
            {
                title: '飲水與糧食',
                items: [
                    { id: 'home_water_large', label: '飲用水 (每人每日3L)', desc: '建議儲備 7-14 日份，可用大型水箱', span: 2 },
                    { id: 'home_food_staple', label: '主食類', desc: '米、乾麵條、即食飯、真空包裝食品', span: 2 },
                    { id: 'home_food_can', label: '罐頭食品', desc: '肉類、蔬菜、水果罐頭，注意開罐器', span: 2 },
                    { id: 'home_snack_energy', label: '能量食品', desc: '營養棒、巧克力、堅果、果乾', span: 2 },
                    { id: 'home_seasoning', label: '基本調味料', desc: '鹽、糖、油', span: 2 }
                ]
            },
            {
                title: '烹飪與食具',
                items: [
                    { id: 'home_stove_pack', label: '卡式爐與瓦斯罐', desc: '建議準備 3-5 罐備用瓦斯', span: 2 },
                    { id: 'home_lighter_long', label: '長嘴點火槍/打火機', desc: '點火安全用' },
                    { id: 'home_tableware_set', label: '餐具與廚具', desc: '可重複使用或免洗餐具' }
                ]
            }
        ]
    },
    {
        sideLabel: '衛生醫療',
        subCategories: [
            {
                title: '急救與醫藥',
                items: [
                    { id: 'home_medical_kit', label: '綜合急救箱', desc: '優碘、紗布、OK繃、體溫計', span: 2 },
                    { id: 'home_chronic_med', label: '個人及慢性病藥物', desc: '至少準備 14 日份備用藥', span: 2 },
                    { id: 'home_regular_med', label: '常備藥品', desc: '感冒藥、止痛藥、腸胃藥', span: 2 }
                ]
            },
            {
                title: '清潔與排泄',
                items: [
                    { id: 'home_toilet_kit', label: '簡易便器/凝固劑', desc: '斷水時搭配塑膠袋使用', span: 2 },
                    { id: 'home_sanitation_1', label: '高容量酒精/乾洗手', desc: '替代洗手清潔' },
                    { id: 'home_sanitation_2', label: '大包裝濕紙巾/衛生紙', desc: '' },
                    { id: 'home_sanitation_3', label: '大型垃圾袋/塑膠袋', desc: '廢棄物密封處理', span: 2 }
                ]
            }
        ]
    },
    {
        sideLabel: '生活工具',
        subCategories: [
            {
                title: '照明與通訊',
                items: [
                    { id: 'home_lantern', label: 'LED 露營燈/手提燈', desc: '居家環境照明', span: 2 },
                    { id: 'home_headlamp', label: '頭燈', desc: '空出雙手作業', span: 2 },
                    { id: 'home_radio_amfm', label: '收音機 (含電池)', desc: '網路斷線時獲取災情通報', span: 2 },
                    { id: 'home_powerbank_large', label: '大容量行動電源', desc: '維持手機通訊電力', span: 2 }
                ]
            },
            {
                title: '修繕與防護',
                items: [
                    { id: 'home_fire_extinguisher', label: '強化液滅火器', desc: '適用各種火災，居家安全必備', span: 2 },
                    { id: 'home_tape_duct', label: '大力膠帶 (Duct Tape)', desc: '玻璃防震、簡易修補', span: 2 },
                    { id: 'home_gloves_work', label: '加厚工作手套', desc: '防切割、耐磨' },
                    { id: 'home_multi_tool', label: '多功能瑞士刀', desc: '開罐、剪切、螺絲起子' }
                ]
            },
            {
                title: '生活品質與心理',
                items: [
                    { id: 'home_fan_usb', label: 'USB 小型風扇', desc: '搭配行動電源，夏季停電降溫', span: 2 },
                    { id: 'home_psych_comfort', label: '心理撫慰物資', desc: '咖啡/茶包、巧克力、撲克牌', span: 2 },
                    { id: 'home_map_paper', label: '家庭聯絡地圖 (紙本)', desc: '通訊中斷時的導航與集合', span: 2 }
                ]
            }
        ]
    }
];

let currentMode = 'home'; // Default

const container = document.getElementById('checklist-container');
const progressFill = document.getElementById('progress-fill');
const progressPercent = document.getElementById('progress-percent');
const clearBtn = document.getElementById('clear-btn');
const printBtn = document.getElementById('print-btn');
const landingPage = document.getElementById('landing-page');
const landingCards = document.querySelectorAll('.landing-card');

function renderChecklist() {
    const data = currentMode === 'escape' ? checklistData : homeReservesData;
    const storageKey = currentMode === 'escape' ? 'evacuationProgress' : 'homeReservesProgress';
    const dateKey = currentMode === 'escape' ? 'lastUpdateDate' : 'homeLastUpdateDate';

    const savedState = JSON.parse(localStorage.getItem(storageKey) || '{}');
    const lastUpdate = localStorage.getItem(dateKey) || '尚未開始準備';

    let html = '<div class="manual-table">';
    data.forEach(cat => {

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

    // Add consolidated "Others/Custom" section
    const customKey = `custom_${currentMode}_extra`;
    const customItems = JSON.parse(localStorage.getItem(customKey) || '[]');

    html += '<div class="category-row">';
    html += '<div class="side-header">其他</div>';
    html += '<div class="content-area">';
    html += '<div class="sub-category">';
    html += '<div class="sub-label">自定義項目</div>';
    html += '<div class="items-container">';

    customItems.forEach((cItem, index) => {
        const checked = cItem.checked ? 'checked' : '';
        html += `<label class="item span-2">`;
        html += `<input type="checkbox" data-custom-key="${customKey}" data-index="${index}" ${checked} onchange="handleCustomCheckUpdate(this)">`;
        html += `<div class="item-text">`;
        html += `<span class="item-label">${cItem.label}</span>`;
        html += `</div>`;
        html += `<button class="delete-btn" onclick="handleDeleteCustomItem('${customKey}', ${index})" title="刪除" data-html2canvas-ignore>×</button>`;
        html += `</label>`;
    });

    // Add input field at the bottom of this specific sub-category
    html += `<div class="custom-item-row" data-html2canvas-ignore>`;
    html += `<div class="custom-input-group">`;
    html += `<input type="text" class="custom-input" placeholder="想要增加什麼？" id="input_${customKey}">`;
    html += `<button class="add-item-btn" onclick="handleAddCustomItem('${customKey}')">新增</button>`;
    html += `</div></div>`;

    html += '</div></div></div></div>';
    html += '</div>';

    // Add Date and Tips section
    html += '<div class="manual-footer-info">';
    html += '<div class="date-row">📅 本清單最後更新日期：<span class="update-date">' + lastUpdate + '</span></div>';
    html += '<div class="tips-box">';

    if (currentMode === 'escape') {
        html += '<h4>💡 避難包小提醒</h4>';
        html += '<ul>';
        html += '<li>建議每 <span style="color:red;font-weight:bold;">6個月</span> 檢查一次避難包，更新過期食物、水及電池。</li>';
        html += '<li>避難包重量建議：男性不超過 <span style="color:red;font-weight:bold;">15kg</span>，女性不超過 <span style="color:red;font-weight:bold;">10kg</span>（以背得動為準）。</li>';
        html += '<li>請放置於家中、辦公室出口處等 <span style="color:red;font-weight:bold;">隨手可得</span> 的地方。</li>';
        html += '</ul>';
    } else {
        html += '<h4>🏠 居家儲備小提醒</h4>';
        html += '<ul>';
        html += '<li>物資應儲放在家中通風陰涼處，並採取<span style="color:red;font-weight:bold;">「先進先出」</span>原則更新。</li>';
        html += '<li>建議準備至少 <span style="color:red;font-weight:bold;">7-14 天份</span> 的生存物資。</li>';
        html += '<li>卡式瓦斯罐應存放於乾燥處，避免受潮或太陽直射。</li>';
        html += '</ul>';
    }
    html += '</div></div>';


    container.innerHTML = html;
    updateProgress(false); // Don't update date during initial render
}

function handleUpdate() {
    const now = new Date();
    const dateStr = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0');

    const dateKey = currentMode === 'escape' ? 'lastUpdateDate' : 'homeLastUpdateDate';
    localStorage.setItem(dateKey, dateStr);

    const dateDisplay = document.querySelector('.update-date');
    if (dateDisplay) dateDisplay.innerText = dateStr;

    updateProgress(true);
}

function handleAddCustomItem(key) {
    const input = document.getElementById('input_' + key);
    const val = input.value.trim();
    if (!val) return;

    const customItems = JSON.parse(localStorage.getItem(key) || '[]');
    customItems.push({ label: val, checked: false });
    localStorage.setItem(key, JSON.stringify(customItems));

    input.value = '';
    renderChecklist();
    handleUpdate();
}

function handleDeleteCustomItem(key, index) {
    const customItems = JSON.parse(localStorage.getItem(key) || '[]');
    customItems.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(customItems));
    renderChecklist();
    handleUpdate();
}

function handleCustomCheckUpdate(checkbox) {
    const key = checkbox.dataset.customKey;
    const index = parseInt(checkbox.dataset.index);
    const customItems = JSON.parse(localStorage.getItem(key) || '[]');
    if (customItems[index]) {
        customItems[index].checked = checkbox.checked;
        localStorage.setItem(key, JSON.stringify(customItems));
    }
    handleUpdate();
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
        checkboxes.forEach(cb => {
            if (!cb.dataset.customKey) { // Only save non-custom items to the main progress state
                state[cb.id] = cb.checked;
            }
        });
        const storageKey = currentMode === 'escape' ? 'evacuationProgress' : 'homeReservesProgress';
        localStorage.setItem(storageKey, JSON.stringify(state));
    }
}

// Tab Switching
function switchMode(mode) {
    currentMode = mode;

    // Update Title
    const title = document.querySelector('.manual-header-box h1');
    title.innerText = currentMode === 'escape' ? '緊急避難包準備' : '居家物資儲備';

    renderChecklist();
}

// Landing Page Logic
landingCards.forEach(card => {
    card.addEventListener('click', () => {
        const choice = card.dataset.choice;
        switchMode(choice);
        landingPage.classList.add('fade-out');
    });
});

clearBtn.addEventListener('click', () => {
    if (confirm('確定要重置目前的勾選進度嗎？（您的自定義項目將會保留，但會取消勾選）')) {
        const storageKey = currentMode === 'escape' ? 'evacuationProgress' : 'homeReservesProgress';
        const dateKey = currentMode === 'escape' ? 'lastUpdateDate' : 'homeLastUpdateDate';
        localStorage.removeItem(storageKey);
        localStorage.removeItem(dateKey);

        // Uncheck custom items instead of removing them
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(`custom_${currentMode}_`)) {
                const customItems = JSON.parse(localStorage.getItem(key) || '[]');
                const resetItems = customItems.map(item => ({ ...item, checked: false }));
                localStorage.setItem(key, JSON.stringify(resetItems));
            }
        });

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

    const summary = currentMode === 'escape' ? '緊急避難包定期檢查 (6個月一次)' : '居家儲備物資定期檢查 (6個月一次)';
    const description = currentMode === 'escape'
        ? '提醒您：今天該檢查避難包物資囉！請確認食物、水、電池是否過期。\\n\\nhttps://orange-book-checklist.zeabur.app/'
        : '提醒您：今天該檢查居家儲備物資囉！請確認瓦斯罐、大桶水、罐頭是否過期。\\n\\nhttps://orange-book-checklist.zeabur.app/';

    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Emergency Kit Reminder//TW',
        'BEGIN:VEVENT',
        'DTSTART;VALUE=DATE:' + startDate,
        'DTEND;VALUE=DATE:' + endDate,
        'SUMMARY:' + summary,
        'DESCRIPTION:' + description,
        'LOCATION:家中/辦公室',
        'TRANSP:TRANSPARENT',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = '小橘書-防災檢查提醒.ics';
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

    const titleStr = currentMode === 'escape' ? '緊急避難包定期檢查 (6個月一次)' : '居家儲備物資定期檢查 (6個月一次)';
    const descStr = currentMode === 'escape'
        ? '提醒您：今天該檢查避難包物資囉！請確認食物、水、電池是否過期。\n\nhttps://orange-book-checklist.zeabur.app/'
        : '提醒您：今天該檢查居家儲備物資囉！請確認瓦斯罐、大桶水、罐頭是否過期。\n\nhttps://orange-book-checklist.zeabur.app/';

    const title = encodeURIComponent(titleStr);
    const details = encodeURIComponent(descStr);
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
        windowWidth: 1280, // Force desktop width
        onclone: (clonedDoc) => {
            const clonedTarget = clonedDoc.querySelector('.manual-container');
            // Force desktop layout and disable mobile text inflation
            clonedTarget.style.width = '850px';
            clonedTarget.style.maxWidth = '850px';
            clonedTarget.style.margin = '0 auto';
            clonedTarget.style.webkitTextSizeAdjust = '100%';
            clonedTarget.style.textSizeAdjust = '100%';
        }
    }).then(canvas => {
        const link = document.createElement('a');
        const fileName = currentMode === 'escape' ? '小橘書-緊急避難包清單.png' : '小橘書-居家物資儲備清單.png';
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
        target.style.boxShadow = originalStyle;
    });
});

printBtn.addEventListener('click', () => { window.print(); });

const shareBtn = document.getElementById('share-btn');
shareBtn.addEventListener('click', async () => {
    const title = '小橘書防災清單 - 個人化防災物資檢查';
    const text = '這份「小橘書」防災清單非常實用，推薦你也來檢查一下家裡的備品是否齊全！';
    const url = 'https://orange-book-checklist.zeabur.app/';

    if (navigator.share) {
        try {
            await navigator.share({ title, text, url });
        } catch (err) {
            console.log('分享取消或失敗');
        }
    } else {
        try {
            await navigator.clipboard.writeText(`${text}\n\n連結：${url}`);
            alert('已將推薦網址複製到剪貼簿，您可以直接發送給好友！');
        } catch (err) {
            alert('您的瀏覽器不支援自動分享，請複製此網址：' + url);
        }
    }
});

renderChecklist();
