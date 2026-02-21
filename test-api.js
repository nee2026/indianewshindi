const API_BASE_URL = 'https://indianewshindi.com/api';
const id = '71';
const slug = 'celebration-of-bjp-government-500-electric-buses-12-day-program-delhi';

async function testFetch() {
    try {
        const url = `${API_BASE_URL}/post/${id}/${slug}/`;
        console.log('Fetching:', url);
        const response = await fetch(url);
        console.log('Status:', response.status);
        if (!response.ok) {
            console.log('Not ok:', response.statusText);
            return;
        }
        const text = await response.text();
        console.log('Length:', text.length);
        console.log('First 100 chars:', text.substring(0, 100));
        const json = JSON.parse(text);
        console.log('JSON parsed successfully. Post ID:', json.post ? json.post.id : 'unknown');
    } catch (e) {
        console.error('Error:', e);
    }
}
testFetch();
