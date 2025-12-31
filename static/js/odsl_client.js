function switchTab(tabName) {
	console.log("Switch Tab to ", tabName);
	// Hide all tab contents
	const tabContents = document.querySelectorAll('.tab_content');
	tabContents.forEach(content => content.classList.remove('active'));

	// Remove active class from all tabs
	const tabs = document.querySelectorAll('.tab');
	tabs.forEach(tab => tab.classList.remove('active'));

	// Show selected tab content
	document.getElementById(tabName).classList.add('active');

	// Add active class to clicked tab
	event.target.classList.add('active');
}

function showSignupForm(planName) {
	// In a real implementation, this would redirect to a signup form
	// or open a modal with the signup form
	alert(`Starting signup process for: ${planName}\n\nIn production, this would redirect to a secure signup form.`);
}

// Handle enterprise form submission
document.getElementById('enterpriseForm')?.addEventListener('submit', function(e) {
	e.preventDefault();
	alert('Thank you for your interest! Our team will contact you within 24 hours.');
	this.reset();
});