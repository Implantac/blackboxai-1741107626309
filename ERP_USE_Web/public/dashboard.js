document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Toggle
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('content').classList.toggle('active');
    });

    // Initialize Dashboard
    initializeDashboard();
});

// Dashboard Initialization
async function initializeDashboard() {
    try {
        // Load all data concurrently
        const [users, products, sales, clients] = await Promise.all([
            fetchData('/api/usuarios'),
            fetchData('/api/produtos'),
            fetchData('/api/vendas'),
            fetchData('/api/clientes')
        ]);

        // Update summary cards
        updateSummaryCards(users, products, sales, clients);

        // Initialize charts
        initializeCharts(sales, products);

    } catch (error) {
        console.error('Error initializing dashboard:', error);
        showErrorMessage('Erro ao carregar dados do dashboard. Por favor, tente novamente mais tarde.');
    }
}

// Fetch Data from API
async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
}

// Update Summary Cards
function updateSummaryCards(users, products, sales, clients) {
    // For demo purposes, we're using mock data since the actual endpoints return messages
    document.getElementById('totalUsers').textContent = '15';
    document.getElementById('totalProducts').textContent = '150';
    document.getElementById('totalSales').textContent = '1.2k';
    document.getElementById('totalClients').textContent = '320';
}

// Initialize Charts
function initializeCharts(sales, products) {
    // Sales Chart (Line Chart)
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Vendas Mensais',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: '#3498db',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
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

    // Products Chart (Doughnut Chart)
    const productsCtx = document.getElementById('productsChart').getContext('2d');
    new Chart(productsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Eletrônicos', 'Móveis', 'Roupas', 'Outros'],
            datasets: [{
                data: [30, 25, 25, 20],
                backgroundColor: [
                    '#3498db',
                    '#2ecc71',
                    '#f1c40f',
                    '#e74c3c'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Error Message Display
function showErrorMessage(message) {
    const dashboardContainer = document.querySelector('.dashboard-container');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    dashboardContainer.insertBefore(errorDiv, dashboardContainer.firstChild);

    // Remove error message after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Navigation Event Listeners
document.querySelectorAll('#sidebar .components a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active class from all links
        document.querySelectorAll('#sidebar .components a').forEach(l => {
            l.parentElement.classList.remove('active');
        });
        // Add active class to clicked link
        this.parentElement.classList.add('active');
    });
});

// Responsive Design Handler
function handleResponsiveDesign() {
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.add('active');
        document.getElementById('content').classList.add('active');
    }
}

// Listen for window resize
window.addEventListener('resize', handleResponsiveDesign);

// Initial check for screen size
handleResponsiveDesign();
