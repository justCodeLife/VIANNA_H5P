export function copyToClipboard(str) {
    const el = document.createElement('input');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
} 