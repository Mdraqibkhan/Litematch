const copyButton = document.getElementById('copy-bibtex');
const bibtexCode = document.getElementById('bibtex-code');

if (copyButton && bibtexCode) {
  copyButton.addEventListener('click', async () => {
    const original = copyButton.innerHTML;
    try {
      await navigator.clipboard.writeText(bibtexCode.innerText);
      copyButton.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
    } catch (error) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(bibtexCode);
      selection.removeAllRanges();
      selection.addRange(range);
      copyButton.textContent = 'Selected';
    }
    window.setTimeout(() => { copyButton.innerHTML = original; }, 1800);
  });
}
