document.addEventListener("DOMContentLoaded", function () {
  initializeDashboard();
  initializeCharts();
  initializeRealTimeUpdates();
  initializeResponsiveFeatures();
  initializeNavigation();
});

function initializeDashboard() {
  showPageLoader();

  setTimeout(() => {
    hidePageLoader();
    animateMetricCards();
  }, 1000);

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

function initializeCharts() {
  createPerformanceChart();
  createResourceChart();
}

function createPerformanceChart() {
  const ctx = document.getElementById("performanceChart");
  if (!ctx) return;

  const performanceChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
      datasets: [
        {
          label: "CPU Usage (%)",
          data: [45, 52, 48, 61, 55, 67, 43],
          borderColor: "#0049B7",
          backgroundColor: "rgba(0, 73, 183, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: "#0049B7",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
        },
        {
          label: "Memory Usage (%)",
          data: [32, 38, 35, 42, 48, 51, 36],
          borderColor: "#28a745",
          backgroundColor: "rgba(40, 167, 69, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: "#28a745",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
        },
        {
          label: "Network I/O (MB/s)",
          data: [12, 18, 15, 22, 28, 25, 16],
          borderColor: "#ff1d58",
          backgroundColor: "rgba(255, 29, 88, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: "#ff1d58",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: "index",
      },
      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
            padding: 20,
            font: {
              size: 12,
              weight: "bold",
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 11,
            },
          },
        },
        y: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: "rgba(0,0,0,0.1)",
          },
          ticks: {
            callback: function (value) {
              return value + "%";
            },
            font: {
              size: 11,
            },
          },
        },
      },
      elements: {
        point: {
          hoverBackgroundColor: "#ffffff",
        },
      },
    },
  });

  window.performanceChart = performanceChart;
}

function createResourceChart() {
  const ctx = document.getElementById("resourceChart");
  if (!ctx) return;

  const resourceChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["CPU", "Memory", "Storage", "Network"],
      datasets: [
        {
          data: [65, 45, 78, 32],
          backgroundColor: ["#0049B7", "#28a745", "#ff1d58", "#dc3545"],
          borderColor: ["#003d9e", "#1e7e34", "#e01448", "#c82333"],
          borderWidth: 3,
          hoverOffset: 10,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "60%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 20,
            usePointStyle: true,
            font: {
              size: 12,
              weight: "bold",
            },
          },
        },
      },
      animation: {
        animateScale: true,
        animateRotate: true,
        duration: 1000,
        easing: "easeOutQuart",
      },
    },
  });

  window.resourceChart = resourceChart;
}

function initializeRealTimeUpdates() {
  setInterval(updateMetrics, 30000);
  setInterval(updateCharts, 300000);
  setInterval(updateTimestamps, 60000);
}

function updateMetrics() {
  const metrics = [
    {
      selector: ".metric-card:nth-child(1) .h2",
      value: generateRandomUptime(),
    },
    {
      selector: ".metric-card:nth-child(2) .h2",
      value: Math.floor(Math.random() * 50) + 100,
    },
    {
      selector: ".metric-card:nth-child(3) .h2",
      value: Math.floor(Math.random() * 8) + 1,
    },
    {
      selector: ".metric-card:nth-child(4) .h2",
      value: Math.floor(Math.random() * 20) + 30 + "ms",
    },
  ];

  metrics.forEach((metric) => {
    const element = document.querySelector(metric.selector);
    if (element) {
      animateValue(element, element.textContent, metric.value);
    }
  });
}

function updateCharts() {
  if (window.performanceChart) {
    const newData = [
      generateRandomArray(7, 30, 80),
      generateRandomArray(7, 20, 60),
      generateRandomArray(7, 10, 35),
    ];

    window.performanceChart.data.datasets.forEach((dataset, index) => {
      dataset.data = newData[index];
    });

    window.performanceChart.update("active");
  }

  if (window.resourceChart) {
    const newResourceData = [
      Math.floor(Math.random() * 40) + 40,
      Math.floor(Math.random() * 30) + 30,
      Math.floor(Math.random() * 35) + 50,
      Math.floor(Math.random() * 25) + 20,
    ];

    window.resourceChart.data.datasets[0].data = newResourceData;
    window.resourceChart.update("active");
  }
}

function initializeResponsiveFeatures() {
  const sidebar = document.getElementById("sidebar");
  const toggler = document.querySelector(".navbar-toggler");

  if (toggler && sidebar) {
    toggler.addEventListener("click", function () {
      sidebar.classList.toggle("show");
    });
    document.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        if (!sidebar.contains(e.target) && !toggler.contains(e.target)) {
          sidebar.classList.remove("show");
        }
      }
    });
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 992) {
      sidebar.classList.remove("show");
    }
  });
}

function generateRandomUptime() {
  const uptimes = ["99.9%", "99.8%", "99.7%", "100%", "99.6%"];
  return uptimes[Math.floor(Math.random() * uptimes.length)];
}

function generateRandomArray(length, min, max) {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

function animateValue(element, start, end, duration = 1000) {
  const startNum = parseFloat(start.toString().replace(/[^\d.-]/g, ""));
  const endNum = parseFloat(end.toString().replace(/[^\d.-]/g, ""));
  const range = endNum - startNum;
  const startTime = performance.now();

  function updateValue(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = startNum + range * easeOutQuart(progress);

    if (end.toString().includes("%")) {
      element.textContent = current.toFixed(1) + "%";
    } else if (end.toString().includes("ms")) {
      element.textContent = Math.round(current) + "ms";
    } else {
      element.textContent = Math.round(current);
    }

    if (progress < 1) {
      requestAnimationFrame(updateValue);
    }
  }

  requestAnimationFrame(updateValue);
}

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function animateMetricCards() {
  const cards = document.querySelectorAll(".metric-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("fade-in");
    }, index * 100);
  });
}

function updateTimestamps() {
  const timeElements = document.querySelectorAll("[data-timestamp]");
  timeElements.forEach((element) => {
    const timestamp = element.getAttribute("data-timestamp");
    if (timestamp) {
      element.textContent = formatTimeAgo(new Date(timestamp));
    }
  });
}

function formatTimeAgo(date) {
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} mins ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  return `${days} days ago`;
}

function showPageLoader() {
  const loader = document.createElement("div");
  loader.id = "pageLoader";
  loader.innerHTML = `
        <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-center">
                <div class="position-relative mb-3">
                    <div class="loading"></div>
                    <i class="bi bi-gear-fill position-absolute top-50 start-50 translate-middle text-primary" style="font-size: 1.2rem;"></i>
                </div>
                <p class="text-muted">Loading dashboard...</p>
            </div>
        </div>
    `;
  loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.9);
        z-index: 9999;
    `;
  document.body.appendChild(loader);
}

function hidePageLoader() {
  const loader = document.getElementById("pageLoader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 300);
  }
}

document.addEventListener("click", function (e) {
  if (e.target.closest(".btn-group .btn")) {
    const button = e.target.closest(".btn");
    const group = button.closest(".btn-group");

    group
      .querySelectorAll(".btn")
      .forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
    updateChartsForPeriod(button.textContent);
  }
});

function updateChartsForPeriod(period) {
  if (!window.performanceChart) return;

  let labels, datasets;

  switch (period) {
    case "24H":
      labels = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"];
      datasets = [
        [45, 52, 48, 61, 55, 67, 43],
        [32, 38, 35, 42, 48, 51, 36],
        [12, 18, 15, 22, 28, 25, 16],
      ];
      break;
    case "7D":
      labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      datasets = [
        [55, 58, 52, 64, 59, 62, 48],
        [42, 45, 40, 48, 52, 55, 41],
        [18, 22, 20, 26, 32, 28, 21],
      ];
      break;
    case "30D":
      labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
      datasets = [
        [58, 62, 55, 60],
        [45, 48, 42, 46],
        [22, 25, 20, 24],
      ];
      break;
  }

  window.performanceChart.data.labels = labels;
  window.performanceChart.data.datasets.forEach((dataset, index) => {
    dataset.data = datasets[index];
  });

  window.performanceChart.update("active");
}

function initializeNavigation() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".sidebar .nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  console.log("Current page:", currentPage);
}
document.querySelectorAll(".sidebar .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    console.log("Navigation clicked:", href);
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      document
        .querySelectorAll(".sidebar .nav-link")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
    if (window.innerWidth < 992) {
      document.getElementById("sidebar").classList.remove("show");
    }
    if (!href.startsWith("#")) {
      console.log("Navigating to page:", href);
      return true;
    }
  });
});
