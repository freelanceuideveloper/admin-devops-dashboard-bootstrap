# DevOps Admin Dashboard

A modern, responsive admin dashboard built with Bootstrap 5, Bootstrap Icons, and Chart.js, specifically designed for DevOps monitoring and management.

## Design

<img width="3360" height="2716" alt="devops-sre" src="https://github.com/user-attachments/assets/8d34a4c5-9824-4ac9-87e0-40625580da6b" />
<img width="3360" height="3338" alt="dashboard" src="https://github.com/user-attachments/assets/d17a5651-0e13-46ee-800d-5e980cdde310" />

## Features

### 🎨 Modern Design
- Clean, professional UI with gradient cards
- Responsive design that works on all devices
- Dark sidebar with smooth transitions
- Bootstrap Icons integration throughout

### 📊 DevOps Metrics
- **Server Uptime**: Real-time uptime monitoring (99.9%)
- **Deployments**: Monthly deployment tracking (127 this month)
- **Active Alerts**: System alerts and notifications (3 active)
- **Response Time**: Average API response time (45ms)

### 📈 Interactive Charts
- **Performance Chart**: Line chart showing CPU, Memory, and Network usage over time
- **Resource Usage Chart**: Doughnut chart displaying system resource utilization
- Real-time data updates every 30 seconds
- Interactive time period filters (24H, 7D, 30D)

### 🚀 DevOps Components
- **Deployment Tracking**: Recent deployments table with status indicators
- **System Alerts**: Real-time alert cards with severity levels
- **Navigation**: Comprehensive sidebar with DevOps-focused sections
- **Responsive Design**: Mobile-friendly interface

## File Structure

```
fui-git/
├── index.html                 # Main dashboard file
├── assets/
│   ├── css/
│   │   └── dashboard.css     # Custom styles and themes
│   └── js/
│       └── dashboard.js      # Interactive functionality and charts
└── README.md                 # This file
```

## Technologies Used

- **Bootstrap 5.3.2**: UI framework and responsive grid
- **Bootstrap Icons 1.11.1**: Icon library for visual elements
- **Chart.js**: Interactive charts and data visualization
- **Vanilla JavaScript**: Dashboard functionality and real-time updates
- **CSS3**: Custom animations and modern styling

## Dashboard Sections

### Navigation
- **Overview**: Main dashboard view with key metrics
- **Servers**: Server management and monitoring
- **Deployments**: Application deployment tracking
- **Monitoring**: System performance monitoring
- **Logs**: System and application logs
- **Security**: Security monitoring and alerts
- **Alerts**: Notification and alert management
- **Users**: User management and permissions

### Metrics Cards
1. **Server Uptime** - Displays current uptime percentage
2. **Deployments** - Shows monthly deployment count
3. **Active Alerts** - Number of active system alerts
4. **Response Time** - Average API response time

### Charts
1. **System Performance**: Multi-line chart showing:
   - CPU Usage (%)
   - Memory Usage (%)
   - Network I/O (MB/s)

2. **Resource Usage**: Doughnut chart displaying:
   - CPU utilization
   - Memory consumption
   - Storage usage
   - Network activity

## Features in Detail

### Real-time Updates
- Metrics update every 30 seconds
- Charts refresh every 5 minutes
- Animated value transitions
- Live timestamp updates

### Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile devices
- Touch-friendly interface
- Optimized for tablets and desktops

### Interactive Elements
- Hover effects on cards and buttons
- Smooth animations and transitions
- Dropdown menus for user actions
- Time period selection for charts

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Installation

1. Clone or download the files
2. Open `index.html` in a web browser
3. No build process required - uses CDN resources

## Customization

### Colors and Themes
Edit `assets/css/dashboard.css` to modify:
- Color scheme variables in `:root`
- Gradient backgrounds
- Card styles and animations

### Data Sources
Modify `assets/js/dashboard.js` to:
- Connect to real APIs
- Update chart data sources
- Customize metrics and alerts

### Layout
Update `index.html` to:
- Add new dashboard sections
- Modify navigation items
- Change card layouts

## Performance

- Lightweight: Uses CDN resources
- Fast loading: Minimal custom CSS/JS
- Smooth animations: Hardware-accelerated transitions
- Responsive: Optimized for all screen sizes

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Real API integration
- [ ] More chart types (bar, pie, gauge)
- [ ] Export functionality
- [ ] Advanced filtering options
- [ ] User role management
- [ ] Notification system
- [ ] Dashboard customization

## Author

**Name:** Vega  
**E-mail:** iam@freelanceuideveloper.com  
**Website:** freelanceuideveloper.com

## License

Free to use and modify for personal and commercial projects.

---

**Built for DevOps teams who need a clean, functional dashboard for monitoring and management tasks.**
