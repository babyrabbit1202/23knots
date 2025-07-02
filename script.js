// 救災隊必學的23個繩結 - 網站腳本

// 測驗數據現已整合到 Alpine.js 組件中

// 初始化頁面
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initializeScrollToTop();
    initializeSmoothScroll();
});

// Quiz Application for Alpine.js
function quizApp() {
    return {
        currentQuestion: 0,
        selectedAnswer: null,
        score: 0,
        quizCompleted: false,
        showAnswers: false,
        userAnswers: [],
        
        questions: [
            {
                question: "八字結的主要用途是什麼？",
                options: [
                    "用於連接兩條繩索",
                    "作為止端結防止繩索滑脫",
                    "用於固定物品",
                    "僅用於裝飾"
                ],
                correct: 1
            },
            {
                question: "以下哪個繩結最適合用來連接兩條不同粗細的繩索？",
                options: [
                    "平結",
                    "單結",
                    "水結",
                    "蝴蝶結"
                ],
                correct: 2
            },
            {
                question: "稱人結的特色是什麼？",
                options: [
                    "容易鬆開",
                    "形成固定環圈且不會收緊",
                    "只能用於細繩",
                    "主要用於裝飾"
                ],
                correct: 1
            },
            {
                question: "漁人結適合用於什麼情況？",
                options: [
                    "連接同粗細的繩索",
                    "製作固定環圈",
                    "止端使用",
                    "負重承載"
                ],
                correct: 0
            },
            {
                question: "座位席結的主要功能是？",
                options: [
                    "連接繩索",
                    "製作可坐式安全吊帶",
                    "止端固定",
                    "收納繩索"
                ],
                correct: 1
            },
            {
                question: "雙八字套環相比單八字套環的優勢是？",
                options: [
                    "更容易打結",
                    "強度更高且更安全",
                    "用料更少",
                    "外觀更美觀"
                ],
                correct: 1
            },
            {
                question: "負荷釋放結的特殊功能是？",
                options: [
                    "承重能力特別強",
                    "可在負重狀態下快速解開",
                    "永遠不會鬆開",
                    "只能用一次"
                ],
                correct: 1
            },
            {
                question: "繫船結最適合用於？",
                options: [
                    "人員攀爬",
                    "將繩索固定在柱子或樁上",
                    "連接兩條繩索",
                    "製作環圈"
                ],
                correct: 1
            },
            {
                question: "蝴蝶結（非鞋帶蝴蝶結）在救援中的用途是？",
                options: [
                    "純粹裝飾用",
                    "在繩索中間製造固定點",
                    "連接繩索末端",
                    "收納繩索"
                ],
                correct: 1
            },
            {
                question: "在救災情況下，選擇繩結時最重要的考量是？",
                options: [
                    "打結速度快",
                    "外觀美觀",
                    "安全性和可靠性",
                    "用料最少"
                ],
                correct: 2
            }
        ],

        selectAnswer(index) {
            this.selectedAnswer = index;
        },

        nextQuestion() {
            if (this.selectedAnswer !== null) {
                this.userAnswers[this.currentQuestion] = this.selectedAnswer;
                if (this.selectedAnswer === this.questions[this.currentQuestion].correct) {
                    this.score++;
                }
                this.currentQuestion++;
                this.selectedAnswer = null;
            }
        },

        previousQuestion() {
            if (this.currentQuestion > 0) {
                this.currentQuestion--;
                this.selectedAnswer = this.userAnswers[this.currentQuestion] || null;
            }
        },

        finishQuiz() {
            if (this.selectedAnswer !== null) {
                this.userAnswers[this.currentQuestion] = this.selectedAnswer;
                if (this.selectedAnswer === this.questions[this.currentQuestion].correct) {
                    this.score++;
                }
                this.quizCompleted = true;
            }
        },

        resetQuiz() {
            this.currentQuestion = 0;
            this.selectedAnswer = null;
            this.score = 0;
            this.quizCompleted = false;
            this.showAnswers = false;
            this.userAnswers = [];
        },

        getResultTitle() {
            if (this.score >= 8) return "優秀！繩結專家";
            if (this.score >= 6) return "良好！基礎紮實";
            return "需要加強學習";
        },

        getResultMessage() {
            if (this.score >= 8) return "您對救災繩結有深入的理解，可以勝任實際救援工作！";
            if (this.score >= 6) return "您掌握了基本的繩結知識，建議繼續練習提升技能。";
            return "建議重新觀看教學影片，加強繩結基礎知識的學習。";
        },

        getBadgeText() {
            if (this.score >= 8) return "繩結專家";
            if (this.score >= 6) return "合格學員";
            return "需要重修";
        }
    }
}

// Review Application for Alpine.js
function reviewApp() {
    return {
        activeUnit: 1
    }
}

// 由於使用 Alpine.js 處理大部分互動功能，以下函數已移至 Alpine.js 組件

// 返回頂部功能
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 平滑滾動
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 載入動畫（可選）
function showLoadingSpinner(elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = '<div class="loading-spinner mx-auto"></div>';
}

// 工具函數
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 檢查元素是否在視窗中
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// 滾動動畫（可選增強功能）
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animate-in');
        }
    });
}

// 可選：添加滾動動畫監聽
// window.addEventListener('scroll', debounce(animateOnScroll, 10));

// 錯誤處理
window.addEventListener('error', function(e) {
    console.error('JavaScript錯誤:', e.error);
});

// 控制台歡迎訊息
console.log('%c歡迎來到救災隊必學的23個繩結！', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
console.log('網站開發：https://github.com/yourusername/23-knots-learning'); 