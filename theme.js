// Select the palette before the first paint, using the guest device local time.
{ const hour = new Date().getHours(); document.documentElement.dataset.theme = hour >= 19 || hour < 7 ? 'night' : 'day'; }
