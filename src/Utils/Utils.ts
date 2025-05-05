export function parseDate(dateString: string): { day: string; month: string; year: string } {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0'); // "06"
    const month = date.toLocaleString('en-US', { month: 'long' }); // "March"
    const year = date.getFullYear().toString(); // "2025"

    return { day, month, year };
}

export function formatTrafficData(data: { value: string; count: number }) {
    // Словарь с сокращениями стран
    const countryAbbreviations: { [key: string]: string } = {
        "United States of America": "USA",
        "United Kingdom": "UK",
        "Russian Federation": "Russia",
        "People's Republic of China": "China",
        "Republic of Korea": "South Korea",
        "Democratic People's Republic of Korea": "North Korea",
        "United Arab Emirates": "UAE",
    };
    const formattedValue = countryAbbreviations[data.value] || data.value;
    const formattedCount = (data.count * 100).toFixed(0) + "%";

    return {
        value: formattedValue,
        count: formattedCount
    };
}

export function formatNumber(value: number): string {
    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + "M"; // "M" для миллионов
    } else if (value >= 1_000) {
        return (value / 1_000).toFixed(1) + "K"; // "K" для тысяч
    } else {
        return value.toString(); // Преобразуем число в строку
    }
}

export function extractKeywords(items: string[], contextWords: number = 5): string {
    const result: string[] = [];

    items.forEach(text => {
        const words = text.split(/\s+/);

        words.forEach((word, index) => {
            if (word.startsWith('<kw>') && word.endsWith('</kw>')) {
                const keyword = word.replace(/\|/g, '');
                const start = Math.max(index - contextWords, 0);
                const end = Math.min(index + contextWords + 1, words.length);

                const context = words.slice(start, end).map(w =>
                    w === word
                        ? `<span class="highlight">${keyword}</span>`
                        : w
                ).join(' ');

                result.push(context + ';');
            }
        });
    });

    return result.join(' ');
}

export function extractDomain(url: string): string {
    try {
        const parsedUrl = new URL(url);
        const hostnameParts = parsedUrl.hostname.split('.');
        const len = hostnameParts.length;

        if (len >= 2) {
            return `${hostnameParts[len - 2]}.${hostnameParts[len - 1]}`;
        }

        return parsedUrl.hostname;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        console.error("Invalid URL:", url);
        return "";
    }
}



