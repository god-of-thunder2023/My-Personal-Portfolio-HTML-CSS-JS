function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function downloadResume() {
    var resumePath = './assets/RESUME_Joe Cole.pdf';
    window.open(resumePath, '_blank');
    var downloadLink = document.createElement('a');
    downloadLink.href = resumePath;
    downloadLink.download = 'RESUME_Joe Cole.pdf'; // Specify the filename to be downloaded
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink); // Clean up after download
}

