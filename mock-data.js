document.addEventListener('DOMContentLoaded', () => {
    const livecards = document.getElementById('livecards');
    const mockStreams = [
        {
            uri_name: '2025-iihf-mens-world-championship-slovakia-vs-finland',
            name: 'Slovakia vs. Finland',
            poster: 'https://i.imgur.com/tdkq4WT.jpeg',
            tag: 'IIHF 2025',
            viewers: 123
        }
    ];
    livecards.innerHTML = mockStreams.map(stream => `
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
            <a href="/stream.html">
                <img src="${stream.poster}" alt="${stream.name}" class="w-full h-40 object-cover">
                <div class="p-4">
                    <h5 class="text-lg font-bold">${stream.name}</h5>
                    <p class="text-gray-400">${stream.tag} • ${stream.viewers} viewers</p>
                </div>
            </a>
        </div>
    `).join('');
});
