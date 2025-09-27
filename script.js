const btn = document.getElementById('scanBtn');
const scanOutput = document.getElementById('scanOutput');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  btn.disabled = true;
  scanOutput.classList.remove('hidden');
  setTimeout(() => {
    scanOutput.classList.add('hidden');
    result.classList.remove('hidden');
  }, 3000);
});