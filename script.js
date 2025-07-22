const myButton = document.getElementById('myButton'); // Import tombol dari html
myButton.addEventListener('click', function(){ // Untuk merespon
    const heading = document.querySelector('h1'); // Perintah perubahan tombol
    heading.textContent = 'SUCCESS!';
});