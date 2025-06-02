// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});


// Sample data for the chart (you can replace this with real data)
const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
        {
            label: 'KOSPI',
            data: [2500, 2550, 2600, 2580, 2650, 2700],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            tension: 0.4,
            fill: true
        },
        {
            label: 'S&P 500',
            data: [4000, 4100, 4150, 4200, 4250, 4300],
            borderColor: '#1e40af',
            backgroundColor: 'rgba(30, 64, 175, 0.1)',
            tension: 0.4,
            fill: true
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '주요 지수 추이'
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
};



// Philosophy Chart
const philosophyCtx = document.getElementById('philosophyChart');
if (philosophyCtx) {
    new Chart(philosophyCtx, {
        type: 'doughnut',
        data: {
            labels: ['시장중심주', '배당투자', '리스크관리'],
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ['#2563eb', '#1e40af', '#3b82f6'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Method Chart
const methodCtx = document.getElementById('methodChart');
if (methodCtx) {
    new Chart(methodCtx, {
        type: 'radar',
        data: {
            labels: ['기초이론', '실전분석', '포트폴리오', '성과분석', '리스크관리'],
            datasets: [{
                label: '학습 과정',
                data: [90, 85, 95, 80, 88],
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: '#2563eb',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Strategy Chart
const strategyCtx = document.getElementById('strategyChart');
if (strategyCtx) {
    new Chart(strategyCtx, {
        type: 'bar',
        data: {
            labels: ['트렌드분석', '주도주발굴', '타이밍포착', '리스크관리'],
            datasets: [{
                label: '중요도 (%)',
                data: [85, 90, 80, 95],
                backgroundColor: ['#2563eb', '#1e40af', '#3b82f6', '#60a5fa'],
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Dividend Chart
const dividendCtx = document.getElementById('dividendChart');
if (dividendCtx) {
    new Chart(dividendCtx, {
        type: 'line',
        data: {
            labels: ['1년', '3년', '5년', '10년', '15년', '20년'],
            datasets: [{
                label: '누적수익률 (%)',
                data: [5, 18, 35, 85, 150, 280],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll Down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll Up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
}); 