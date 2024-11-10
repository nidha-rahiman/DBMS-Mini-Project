function selectTab(selectedId) {
    // Get all buttons with class 'tab'
    const tabs = document.querySelectorAll('.tab');
    
    // Remove 'active' class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Add 'active' class to the clicked tab
    document.getElementById(selectedId).classList.add('active');
}
