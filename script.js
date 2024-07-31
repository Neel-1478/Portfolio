document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch API to submit form data
    fetch("https://script.google.com/macros/s/AKfycbwXTspPNdDpt2p74FHmlN-zTFunP4BsXfzR3jFVOLr2fDisPfc-Zg1u9ExwgQmNDoUb/exec", {
        method: "POST",
        body: new FormData(document.getElementById("contactForm"))
    })
    .then(response => {
        if (response.ok) {
            // Display success message temporarily
            document.getElementById("responseMessage").textContent = "Form submitted successfully!";
            setTimeout(function() {
                document.getElementById("responseMessage").textContent = ""; // Clear message after 3 seconds
            }, 5000); // 3000 milliseconds = 3 seconds

            document.getElementById("contactForm").reset(); // Optionally reset the form
        } else {
            throw new Error("Form submission failed!");
        }
    })
    .catch(error => {
        document.getElementById("responseMessage").textContent = "Error: " + error.message;
    });
});

function viewBlog(blogId) {
    window.location.href = 'blog.html?id=' + blogId;
}

function viewcerti(certiId) {
    window.location.href = 'Certificates.html?id=' + certiId;
}

window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollFraction = scrollTop / scrollHeight;

    // Change scrollbar color based on scroll position
    let colorValue = Math.floor(scrollFraction * 255);
    document.documentElement.style.setProperty('--scrollbar-thumb-color', `rgb(${colorValue}, ${colorValue}, 255)`);
    
    document.styleSheets[0].addRule('::-webkit-scrollbar-thumb', `background: rgb(${colorValue}, ${colorValue}, 255);`);
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', toggleSidebar);
});

