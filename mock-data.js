document.addEventListener('DOMContentLoaded', () => {
    const livecards = document.getElementById('livecards');
    const mockStreams = [
        {
            uri_name: '2025-iihf-mens-world-championship-slovakia-vs-finland',
            name: 'Slovakia vs. Finland',
            poster: 'https://i.imgur.com/tdkq4WT.jpeg',
            tag: 'IIHF 2025',
            viewers: 123,
            status: 'Live Now'
        },
        {
            uri_name: 'team-a-vs-team-b',
            name: 'Team A vs. Team B',
            poster: 'https://source.unsplash.com/400x225/?football',
            tag: 'Football',
            viewers: 456,
            status: 'Live Now'
        }
    ];
    livecards.innerHTML = mockStreams.map(stream => `
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative tilt-card">
            <a href="/stream.html">
                <img src="${stream.poster}" alt="${stream.name}" class="w-full h-40 object-cover">
                <div class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-kanit animate-pulse">Live</div>
                <div class="p-4">
                    <h5 class="text-lg font-bold font-kanit">${stream.name}</h5>
                    <p class="text-gray-400">${stream.tag} • ${stream.viewers} viewers</p>
                    <p class="text-gray-500 text-sm">${stream.status}</p>
                </div>
            </a>
        </div>
    `).join('');
});
