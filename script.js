// ===== 菜品数据 =====
const DEFAULT_MENU = [
    // 推荐
    { id: 1, name: '红烧肉', category: 'recommend', icon: '🍖', desc: '肥而不腻，入口即化，经典下饭菜', price: 48 },
    { id: 2, name: '酸菜鱼', category: 'recommend', icon: '🐟', desc: '酸辣鲜美，鱼肉嫩滑，汤底浓郁', price: 68 },
    { id: 3, name: '宫保鸡丁', category: 'recommend', icon: '🐔', desc: '麻辣鲜香，花生酥脆，下饭神器', price: 38 },
    { id: 4, name: '麻婆豆腐', category: 'recommend', icon: '🫘', desc: '麻辣嫩滑，川味经典，素食最爱', price: 28 },

    // 凉菜
    { id: 5, name: '凉拌黄瓜', category: 'cold', icon: '🥒', desc: '清爽脆嫩，蒜香浓郁，开胃必备', price: 16 },
    { id: 6, name: '皮蛋豆腐', category: 'cold', icon: '🥚', desc: '嫩滑爽口，经典搭配，简单美味', price: 18 },
    { id: 7, name: '口水鸡', category: 'cold', icon: '🍗', desc: '红油麻辣，鸡肉鲜嫩，越吃越香', price: 32 },
    { id: 8, name: '凉拌木耳', category: 'cold', icon: '🥬', desc: '脆爽可口，酸辣开胃，低卡健康', price: 15 },

    // 热菜
    { id: 9, name: '糖醋里脊', category: 'hot', icon: '🥩', desc: '外酥里嫩，酸甜可口，老少皆宜', price: 42 },
    { id: 10, name: '干锅花菜', category: 'hot', icon: '🥦', desc: '香辣脆爽，锅气十足，素菜之王', price: 28 },
    { id: 11, name: '鱼香肉丝', category: 'hot', icon: '🥢', desc: '酸甜微辣，肉丝嫩滑，米饭杀手', price: 32 },
    { id: 12, name: '回锅肉', category: 'hot', icon: '🥓', desc: '肥瘦相间，豆瓣酱香，川菜之魂', price: 36 },
    { id: 13, name: '炒合菜', category: 'hot', icon: '🥬', desc: '时蔬荟萃，清新爽口，营养均衡', price: 24 },
    { id: 14, name: '葱爆羊肉', category: 'hot', icon: '🐑', desc: '葱香四溢，肉质鲜嫩，温补佳品', price: 58 },

    // 汤品
    { id: 15, name: '番茄蛋花汤', category: 'soup', icon: '🍅', desc: '酸甜鲜美，家常有味，暖胃舒心', price: 18 },
    { id: 16, name: '酸辣汤', category: 'soup', icon: '🌶️', desc: '酸辣开胃，料多实在，驱寒暖身', price: 22 },
    { id: 17, name: '玉米排骨汤', category: 'soup', icon: '🌽', desc: '清甜浓郁，骨香四溢，滋补养生', price: 38 },
    { id: 18, name: '紫菜蛋花汤', category: 'soup', icon: '🥣', desc: '清淡鲜香，营养丰富，餐后必备', price: 14 },

    // 主食
    { id: 19, name: '蛋炒饭', category: 'staple', icon: '🍳', desc: '粒粒分明，金黄诱人，经典主食', price: 18 },
    { id: 20, name: '牛肉面', category: 'staple', icon: '🍜', desc: '汤浓肉香，面条筋道，一碗满足', price: 28 },
    { id: 21, name: '饺子(猪肉白菜)', category: 'staple', icon: '🥟', desc: '皮薄馅大，鲜美多汁，家的味道', price: 24 },
    { id: 22, name: '馒头', category: 'staple', icon: '🍞', desc: '松软可口，麦香浓郁，百搭主食', price: 4 },

    // 饮品
    { id: 23, name: '冰镇酸梅汤', category: 'drink', icon: '🧊', desc: '酸甜解腻，冰凉爽口，夏日必喝', price: 12 },
    { id: 24, name: '珍珠奶茶', category: 'drink', icon: '🧋', desc: 'Q弹珍珠，浓郁奶香，甜蜜享受', price: 16 },
    { id: 25, name: '鲜榨橙汁', category: 'drink', icon: '🍊', desc: '鲜果现榨，维C满满，健康之选', price: 18 },
    { id: 26, name: '茉莉花茶', category: 'drink', icon: '🍵', desc: '清香怡人，回甘悠长，消食解腻', price: 10 },

    // 甜品
    { id: 27, name: '芒果布丁', category: 'dessert', icon: '🍮', desc: '浓郁芒果味，嫩滑Q弹，甜蜜收尾', price: 16 },
    { id: 28, name: '红豆双皮奶', category: 'dessert', icon: '🥛', desc: '奶香浓郁，红豆绵密，经典甜品', price: 18 },
    { id: 29, name: '桂花糯米藕', category: 'dessert', icon: '🪷', desc: '软糯香甜，桂花飘香，江南风味', price: 22 },
    { id: 30, name: '冰粉', category: 'dessert', icon: '🍧', desc: '冰凉爽滑，配料丰富，解辣神器', price: 12 },
];

// 数据持久化：从 localStorage 加载，没有则用默认数据
function loadMenuData() {
    try {
        const saved = localStorage.getItem('menuData');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch (e) { /* 忽略解析错误 */ }
    // 首次使用，保存默认数据
    saveMenuData(DEFAULT_MENU);
    return JSON.parse(JSON.stringify(DEFAULT_MENU));
}

function saveMenuData(data) {
    try {
        localStorage.setItem('menuData', JSON.stringify(data));
    } catch (e) {
        showToast('保存失败，本地存储空间不足');
    }
}

let menuData = loadMenuData();

// ===== 购物车 =====
let cart = [];

// ===== 订单记录 =====
let orderHistory = [];

// ===== 渲染菜单 =====
function renderMenu(category = 'all') {
    const grid = document.getElementById('menuGrid');
    const filtered = category === 'all' ? menuData : menuData.filter(item => item.category === category);

    grid.innerHTML = filtered.map(item => {
        const recommendBadge = item.category === 'recommend' ? '<div class="recommend-badge">推荐</div>' : '';
        return `
            <div class="menu-item" data-category="${item.category}">
                <div class="menu-item-top">
                    <div class="menu-item-image">${item.icon}</div>
                    ${recommendBadge}
                </div>
                <div class="menu-item-info">
                    <div class="menu-item-name">${item.name}</div>
                    <div class="menu-item-desc">${item.desc}</div>
                    <div class="menu-item-bottom">
                        <div class="menu-item-price"><span>¥</span>${item.price}</div>
                        <button class="add-btn" onclick="addToCart(${item.id}, this)" title="加入购物车">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== 当前选中分类 =====
let currentCategory = 'all';

// ===== 分类筛选 =====
function filterMenu(category, btn) {
    currentCategory = category;
    renderMenu(category);

    // 更新按钮状态
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

// ===== 添加到购物车 =====
function addToCart(id, btnEl) {
    const item = menuData.find(i => i.id === id);
    const existing = cart.find(i => i.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    // 按钮动画
    if (btnEl) {
        btnEl.classList.add('added');
        setTimeout(() => btnEl.classList.remove('added'), 500);
    }

    updateCart();
    showToast(`已添加「${item.name}」到购物车`);
}

// ===== 移除/减少 =====
function removeFromCart(id) {
    const index = cart.findIndex(i => i.id === id);
    if (index === -1) return;

    if (cart[index].qty > 1) {
        cart[index].qty--;
    } else {
        cart.splice(index, 1);
    }

    updateCart();
}

// ===== 更新购物车 =====
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartBadge = document.getElementById('cartBadge');
    const orderBtn = document.getElementById('orderBtn');

    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    // 徽标
    cartBadge.textContent = totalQty;
    cartBadge.style.display = totalQty > 0 ? 'flex' : 'none';

    // 总计
    cartTotal.textContent = `¥${totalPrice.toFixed(2)}`;

    // 下单按钮
    if (totalQty === 0) {
        orderBtn.disabled = true;
    } else {
        orderBtn.disabled = false;
    }

    // 购物车列表
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <p>购物车是空的</p>
                <span>快去挑选美食吧~</span>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item-row">
                <div class="cart-item-icon">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="name">${item.name}</div>
                    <div class="price">¥${(item.price * item.qty).toFixed(2)}</div>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="removeFromCart(${item.id})">−</button>
                    <span class="qty-num">${item.qty}</span>
                    <button class="qty-btn" onclick="addToCart(${item.id})">+</button>
                </div>
            </div>
        `).join('');
    }
}

// ===== 切换购物车 =====
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// ===== 下单 =====
function submitOrder() {
    if (cart.length === 0) return;

    const orderId = 'WD' + Date.now().toString(36).toUpperCase();
    const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    const now = new Date();

    // 保存到订单记录
    const orderRecord = {
        id: orderId,
        time: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`,
        items: cart.map(i => ({ name: i.name, icon: i.icon, price: i.price, qty: i.qty })),
        totalPrice,
        totalQty
    };
    orderHistory.unshift(orderRecord);
    renderOrderHistory();

    document.getElementById('modalOrderId').textContent =
        `订单号：${orderId}  ·  ${totalQty}件商品  ·  ¥${totalPrice.toFixed(2)}`;

    document.getElementById('successModal').classList.add('show');
    toggleCart(); // 关闭购物车
}

function closeModal() {
    document.getElementById('successModal').classList.remove('show');

    // 清空购物车
    cart = [];
    updateCart();
}

// ===== Toast 提示 =====
function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2200);
}

// ===== Emoji 选择器 =====
const foodEmojis = ['🍖', '🐟', '🐔', '🥩', '🥓', '🐑', '🍗', '🥟', '🍜', '🍚', '🍞', '🥒', '🥬', '🥦', '🍅', '🥚', '🫘', '🌽', '🥢', '🌶️', '🧊', '🧋', '🍊', '🍵', '🍮', '🥛', '🍧', '🍽️', '🥘', '🍲'];

function initEmojiPicker() {
    const picker = document.getElementById('emojiPicker');
    picker.innerHTML = foodEmojis.map(e =>
        `<button type="button" class="emoji-option${e === '🍽️' ? ' selected' : ''}" onclick="pickEmoji('${e}', this)" title="${e}">${e}</button>`
    ).join('');
}

function pickEmoji(emoji, btn) {
    document.getElementById('add-icon').value = emoji;
    document.querySelectorAll('.emoji-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

// ===== 打开/关闭添加弹窗 =====
function openAddModal() {
    initEmojiPicker();
    document.getElementById('addModal').classList.add('show');
    // 重置表单
    document.getElementById('addForm').reset();
    document.getElementById('add-icon').value = '🍽️';
}

function closeAddModal() {
    document.getElementById('addModal').classList.remove('show');
}

// 点击弹窗外部关闭
document.addEventListener('click', function(e) {
    if (e.target.id === 'addModal') {
        closeAddModal();
    }
});

// ===== 提交添加菜品 =====
function submitAddDish(e) {
    e.preventDefault();

    const name = document.getElementById('add-name').value.trim();
    const category = document.getElementById('add-category').value;
    const price = parseInt(document.getElementById('add-price').value);
    const desc = document.getElementById('add-desc').value.trim() || '美味菜品，值得一试';
    const icon = document.getElementById('add-icon').value || '🍽️';

    if (!name || !category || !price || price < 1) {
        showToast('请填写完整的菜品信息');
        return;
    }

    // 生成新 ID
    const maxId = menuData.reduce((max, item) => Math.max(max, item.id), 0);
    const newItem = {
        id: maxId + 1,
        name,
        category,
        icon,
        desc,
        price
    };

    menuData.push(newItem);
    saveMenuData(menuData);
    closeAddModal();
    renderMenu(currentCategory);
    showToast(`「${name}」已添加成功！`);

    // 自动切换到新菜品所在分类
    if (currentCategory !== 'all' && currentCategory !== category) {
        filterMenu('all', document.querySelector('.cat-btn'));
    }
}

// ===== 管理后台 =====
const ADMIN_PASSWORD = 'admin123';

// 分类映射
const catMap = {
    recommend: '🔥 推荐', cold: '🥗 凉菜', hot: '🍳 热菜',
    soup: '🍲 汤品', staple: '🍚 主食', drink: '🥤 饮品', dessert: '🍰 甜品'
};

function openAdminLogin() {
    document.getElementById('adminLoginModal').classList.add('show');
    document.getElementById('adminPassword').value = '';
    document.getElementById('adminLoginError').textContent = '';
    setTimeout(() => document.getElementById('adminPassword').focus(), 100);
}

function closeAdminLogin() {
    document.getElementById('adminLoginModal').classList.remove('show');
}

function adminLogin(e) {
    e.preventDefault();
    const pwd = document.getElementById('adminPassword').value;
    if (pwd === ADMIN_PASSWORD) {
        closeAdminLogin();
        openAdminPanel();
    } else {
        document.getElementById('adminLoginError').textContent = '密码错误，请重试';
    }
}

function openAdminPanel() {
    document.getElementById('adminPanelModal').classList.add('show');
    renderAdminTable();
}

function closeAdminPanel() {
    document.getElementById('adminPanelModal').classList.remove('show');
}

function renderAdminTable() {
    const tbody = document.getElementById('adminTableBody');
    const empty = document.getElementById('adminEmpty');
    const countEl = document.getElementById('adminDishCount');

    countEl.textContent = `共 ${menuData.length} 道菜品`;

    if (menuData.length === 0) {
        tbody.innerHTML = '';
        empty.style.display = 'block';
        return;
    }
    empty.style.display = 'none';

    tbody.innerHTML = menuData.map(item => `
        <tr>
            <td class="col-icon">${item.icon}</td>
            <td class="col-name">${item.name}</td>
            <td>${catMap[item.category] || item.category}</td>
            <td class="col-price">¥${item.price}</td>
            <td class="col-desc">${item.desc}</td>
            <td class="col-action">
                <button class="admin-action-btn admin-edit-btn" onclick="openAdminEditModal(${item.id})" title="编辑">✏️</button>
                <button class="admin-action-btn admin-del-btn" onclick="deleteAdminDish(${item.id})" title="删除">🗑️</button>
            </td>
        </tr>
    `).join('');
}

function openAdminEditModal(id) {
    const isAdd = !id;
    document.getElementById('adminEditTitle').textContent = isAdd ? '➕ 新增菜品' : '✏️ 编辑菜品';
    document.getElementById('admin-edit-id').value = id || '';

    if (id) {
        const item = menuData.find(i => i.id === id);
        if (!item) return;
        document.getElementById('admin-edit-name').value = item.name;
        document.getElementById('admin-edit-category').value = item.category;
        document.getElementById('admin-edit-price').value = item.price;
        document.getElementById('admin-edit-desc').value = item.desc || '';
        document.getElementById('admin-edit-icon').value = item.icon || '🍽️';
    } else {
        document.getElementById('adminEditForm').reset();
        document.getElementById('admin-edit-icon').value = '🍽️';
    }

    initAdminEmojiPicker();
    document.getElementById('adminEditModal').classList.add('show');
}

function closeAdminEditModal() {
    document.getElementById('adminEditModal').classList.remove('show');
}

function initAdminEmojiPicker() {
    const picker = document.getElementById('adminEmojiPicker');
    const currentIcon = document.getElementById('admin-edit-icon').value;
    picker.innerHTML = foodEmojis.map(e =>
        `<button type="button" class="emoji-option${e === currentIcon ? ' selected' : ''}" onclick="pickAdminEmoji('${e}', this)">${e}</button>`
    ).join('');
}

function pickAdminEmoji(emoji, btn) {
    document.getElementById('admin-edit-icon').value = emoji;
    document.querySelectorAll('#adminEmojiPicker .emoji-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function submitAdminEdit(e) {
    e.preventDefault();

    const id = document.getElementById('admin-edit-id').value;
    const name = document.getElementById('admin-edit-name').value.trim();
    const category = document.getElementById('admin-edit-category').value;
    const price = parseInt(document.getElementById('admin-edit-price').value);
    const desc = document.getElementById('admin-edit-desc').value.trim() || '美味菜品，值得一试';
    const icon = document.getElementById('admin-edit-icon').value || '🍽️';

    if (!name || !category || !price || price < 1) {
        showToast('请填写完整的菜品信息');
        return;
    }

    if (id) {
        // 编辑
        const item = menuData.find(i => i.id === parseInt(id));
        if (item) {
            item.name = name;
            item.category = category;
            item.price = price;
            item.desc = desc;
            item.icon = icon;
        }
        showToast(`「${name}」已更新！`);
    } else {
        // 新增
        const maxId = menuData.reduce((max, i) => Math.max(max, i.id), 0);
        menuData.push({ id: maxId + 1, name, category, icon, desc, price });
        showToast(`「${name}」已添加！`);
    }

    saveMenuData(menuData);
    closeAdminEditModal();
    renderAdminTable();
    renderMenu(currentCategory);
}

function deleteAdminDish(id) {
    const item = menuData.find(i => i.id === id);
    if (!item) return;
    if (!confirm(`确定要删除「${item.name}」吗？此操作不可恢复。`)) return;

    const idx = menuData.findIndex(i => i.id === id);
    if (idx !== -1) {
        menuData.splice(idx, 1);
        saveMenuData(menuData);
        renderAdminTable();
        renderMenu(currentCategory);
        showToast(`「${item.name}」已删除`);
    }
}

function resetMenuData() {
    if (!confirm('确定要恢复为默认菜品数据吗？当前的所有修改将丢失。')) return;
    menuData = JSON.parse(JSON.stringify(DEFAULT_MENU));
    saveMenuData(menuData);
    renderAdminTable();
    renderMenu(currentCategory);
    showToast('已恢复默认菜品数据');
}

// 点击弹窗外部关闭
document.addEventListener('click', function(e) {
    if (e.target.id === 'adminLoginModal') closeAdminLogin();
    if (e.target.id === 'adminPanelModal') closeAdminPanel();
    if (e.target.id === 'adminEditModal') closeAdminEditModal();
});

// ===== 订单记录 =====
function renderOrderHistory() {
    const orderList = document.getElementById('orderList');
    const statTotal = document.getElementById('statTotal');
    const statAmount = document.getElementById('statAmount');

    // 更新统计
    statTotal.textContent = orderHistory.length;
    const totalAmount = orderHistory.reduce((sum, o) => sum + o.totalPrice, 0);
    statAmount.textContent = `¥${totalAmount.toFixed(2)}`;

    if (orderHistory.length === 0) {
        orderList.innerHTML = `
            <div class="order-empty">
                <div class="order-empty-icon">📝</div>
                <p>暂无下单记录</p>
                <span>快去点几道美食吧~</span>
            </div>
        `;
        return;
    }

    orderList.innerHTML = orderHistory.map((order, index) => `
        <div class="order-card">
            <div class="order-card-header" onclick="toggleOrderDetail(${index}, this)">
                <div class="order-card-summary">
                    <div class="order-card-id">📋 ${order.id}</div>
                    <div class="order-card-meta">
                        <span>${order.totalQty} 件</span>
                        <span class="order-dot">·</span>
                        <span class="order-card-amount">¥${order.totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <div class="order-card-right">
                    <span class="order-card-time">${order.time}</span>
                    <span class="order-arrow">▼</span>
                </div>
            </div>
            <div class="order-card-detail" id="orderDetail${index}">
                ${order.items.map(item => `
                    <div class="order-detail-row">
                        <span class="order-detail-icon">${item.icon}</span>
                        <span class="order-detail-name">${item.name}</span>
                        <span class="order-detail-qty">×${item.qty}</span>
                        <span class="order-detail-price">¥${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                `).join('')}
                <div class="order-detail-divider"></div>
                <div class="order-detail-total">
                    <span>合计</span>
                    <span>¥${order.totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleOrderDetail(index, headerEl) {
    const detail = document.getElementById('orderDetail' + index);
    const arrow = headerEl.querySelector('.order-arrow');
    const isOpen = detail.classList.contains('open');

    // 关闭所有其他展开的详情
    document.querySelectorAll('.order-card-detail.open').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.order-arrow').forEach(a => a.classList.remove('open'));

    if (!isOpen) {
        detail.classList.add('open');
        arrow.classList.add('open');
    }
}

function toggleOrderList() {
    const expandArea = document.getElementById('orderExpandArea');
    const hint = document.getElementById('orderToggleHint');
    const isOpen = expandArea.classList.contains('open');

    if (isOpen) {
        expandArea.classList.remove('open');
        hint.textContent = '点击展开 ▼';
    } else {
        expandArea.classList.add('open');
        hint.textContent = '点击收起 ▲';
    }
}

function clearOrderHistory() {
    if (orderHistory.length === 0) {
        showToast('没有可清空的记录');
        return;
    }
    if (confirm(`确定要清空全部 ${orderHistory.length} 条下单记录吗？`)) {
        orderHistory = [];
        renderOrderHistory();
        showToast('下单记录已清空');
    }
}

// ===== 键盘快捷键 =====
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        const panelOpen = document.getElementById('adminPanelModal').classList.contains('show');
        const loginOpen = document.getElementById('adminLoginModal').classList.contains('show');
        if (!panelOpen && !loginOpen) {
            openAdminLogin();
        }
    }
});

// ===== 初始化 =====
renderMenu();
updateCart();
renderOrderHistory();
