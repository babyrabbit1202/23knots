# 救災隊必學的23個繩結

![繩結教學網站](https://img.shields.io/badge/Version-1.0-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)

一個專業的救災繩結教學網站，由紅十字會推薦，提供完整的23個基本救災繩結學習課程。

## 🎯 項目特色

- **📚 四單元完整課程**：從基礎到進階，系統性學習救災繩結
- **🎥 YouTube影片教學**：高品質影片示範，清楚展示每個步驟
- **🖼️ 詳細圖解展示**：23個繩結的標準完成狀態圖解
- **📝 互動式測驗**：10題專業測驗，即時檢驗學習成果
- **🔄 課前複習功能**：每個繩結的功能說明與應用場景
- **📱 響應式設計**：完美支援手機、平板、桌機
- **⚡ 現代化技術**：使用 Tailwind CSS 和 Alpine.js

## 📋 課程內容

### 單元一：基礎繩結
- 單結、平結、八字結
- 栓馬結、稱人結
- 蝴蝶結、繩上八字結

### 單元二：連結繩結
- 漁人結、接索結
- 八字接索結、水結
- 雙圈雙扣
- 八字套環、雙八字套環

### 單元三：固定繩結
- 二重繫船結、三重繫船結
- 座位席結
- 扁帶座位席結
- 纏身結

### 單元四：進階技巧
- 負荷釋放結
- 節結
- 繩盤結
- 蝴蝶繩環收繩

## 🛠️ 技術架構

- **HTML5**：語義化標籤，優化SEO
- **Tailwind CSS**：實用優先的CSS框架
- **Alpine.js**：輕量級JavaScript框架
- **Font Awesome**：豐富的圖示庫
- **YouTube Embed**：影片播放器
- **響應式設計**：支援所有設備

## 📁 文件結構

```
23-knots-learning/
├── index.html          # 主頁面
├── styles.css          # 自定義樣式
├── script.js           # JavaScript功能
├── README.md           # 項目說明文件
├── knot1.jpg/          # 第一單元繩結圖片
│   ├── 單結.png
│   ├── 平結.png
│   ├── 八字結.png
│   ├── 栓馬結.png
│   ├── 稱人結.png
│   ├── 蝴蝶結.png
│   └── 繩上八字結.png
├── knot2.jpg/          # 第二單元繩結圖片
│   ├── 漁人結.png
│   ├── 接索結.png
│   ├── 八字接索結.png
│   ├── 水結.png
│   ├── 雙圈雙扣.png
│   ├── 八字套環.png
│   └── 雙八字套環.png
├── knot3.jpg/          # 第三單元繩結圖片
│   ├── 二重繫船結.png
│   ├── 三重繫船結.png
│   ├── 座位席結.png
│   ├── 扁帶座位席結.png
│   └── 缠身結.png
└── knot4.jpg/          # 第四單元繩結圖片
    ├── 負荷釋放結.png
    ├── 節結.png
    ├── 繩盤結.png
    └── 蝴蝶繩結.png
```

## 🚀 部署指南

### 部署到 Netlify

1. **準備檔案**
   ```bash
   # 確保所有檔案都在專案根目錄
   ls -la
   # 應該看到：index.html, styles.css, script.js, README.md, knot*.jpg/
   ```

2. **使用 Netlify Drop 部署**
   - 前往 [Netlify](https://app.netlify.com/)
   - 創建帳號或登入
   - 將整個專案資料夾拖拽到 Netlify Drop 區域
   - 等待部署完成，獲得網站URL

3. **使用 Git 部署**
   ```bash
   # 初始化 Git 倉庫
   git init
   git add .
   git commit -m "Initial commit"
   
   # 推送到 GitHub
   git remote add origin https://github.com/yourusername/23-knots-learning.git
   git push -u origin main
   
   # 在 Netlify 連接 GitHub 倉庫進行自動部署
   ```

### 部署到 GitHub Pages

1. **推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/23-knots-learning.git
   git push -u origin main
   ```

2. **啟用 GitHub Pages**
   - 進入 GitHub 倉庫設定
   - 滾動到 "Pages" 區段
   - Source 選擇 "Deploy from a branch"
   - Branch 選擇 "main"
   - 點擊 "Save"

3. **訪問網站**
   - 網站將在 `https://yourusername.github.io/23-knots-learning/` 可用

### 部署到 Vercel

1. **安裝 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **部署**
   ```bash
   vercel
   # 按照提示完成設定
   ```

### 本地開發

```bash
# 使用 Python 簡單服務器
python -m http.server 8000

# 使用 Node.js
npx serve .

# 使用 PHP
php -S localhost:8000
```

然後在瀏覽器中訪問 `http://localhost:8000`

## 🔧 自定義指南

### 修改影片內容

在 `index.html` 中找到對應的 YouTube 嵌入代碼：

```html
<iframe 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    class="w-full h-64 md:h-80 rounded-lg shadow-md"
    frameborder="0" 
    allowfullscreen>
</iframe>
```

將 `VIDEO_ID` 替換為您的 YouTube 影片ID。

### 修改測驗內容

在 `script.js` 中的 `quizApp()` 函數裡修改 `questions` 陣列：

```javascript
questions: [
    {
        question: "您的問題？",
        options: ["選項A", "選項B", "選項C", "選項D"],
        correct: 0 // 正確答案的索引 (0-3)
    }
    // 更多問題...
]
```

### 修改繩結圖片

1. 替換 `knot*.jpg/` 資料夾中的圖片
2. 確保檔案名稱與程式碼中的引用一致
3. 建議圖片尺寸：300x300px，格式：PNG/JPG

### 修改樣式

編輯 `styles.css` 來自定義外觀：

```css
/* 修改主色調 */
.gradient-bg {
    background: linear-gradient(135deg, #您的顏色1 0%, #您的顏色2 100%);
}

/* 修改按鈕顏色 */
.btn-primary {
    background-color: #您的主色;
}
```

## 🎯 功能特色

### 互動式測驗系統
- 10道專業問題
- 即時評分
- 詳細答案解析
- 重新測驗功能

### 響應式圖片展示
- 四單元標籤頁切換
- 懸停效果
- 手機友好的網格布局

### 影片學習系統
- YouTube 嵌入播放器
- 手風琴式課程介紹
- 每單元獨立影片

### 無障礙設計
- 鍵盤導航支援
- 語義化HTML標籤
- 高對比度設計
- 螢幕閱讀器友好

## 📊 瀏覽器支援

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- iOS Safari 13+
- Android Chrome 80+

## 🔒 安全性

- 所有外部資源使用 HTTPS
- CSP 友好的代碼結構
- 無內聯腳本（除 Alpine.js 屬性）
- 圖片優化避免 XSS

## 📈 性能優化

- CDN 載入外部資源
- 圖片懶載入（可選）
- CSS/JS 壓縮
- 字體優化
- 響應式圖片

## 🤝 貢獻指南

1. Fork 這個倉庫
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📝 授權

這個項目使用 MIT 授權 - 查看 [LICENSE](LICENSE) 檔案了解詳情。

## 👥 團隊

- **開發者**：您的名字
- **設計師**：您的名字
- **內容顧問**：紅十字會專家

## 📞 聯絡資訊

- **Email**：info@knots23.org
- **電話**：02-1234-5678
- **地址**：台北市中正區救災路123號

## 🙏 致謝

- 紅十字會提供專業內容指導
- Tailwind CSS 團隊
- Alpine.js 團隊
- Font Awesome 圖示
- YouTube 影片平台

## 📅 更新日誌

### v1.0.0 (2024-01-15)
- 初始版本發布
- 完整的四單元課程
- 互動式測驗系統
- 響應式設計

### 未來計劃
- [ ] 多語言支援
- [ ] 離線模式
- [ ] 3D 繩結動畫
- [ ] 進度追蹤系統
- [ ] 社群討論功能

---

**🎯 立即體驗：學習專業救災繩結技能，成為救援專家！** 