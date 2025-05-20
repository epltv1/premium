function connect(streamId) {
  const ws = new WebSocket(`wss://your-websocket-server/stream/${streamId}`);
  const messageList = document.getElementById('message-list');
  const status = document.getElementById('status');
  ws.onopen = () => {
    status.innerHTML = 'connected <span class="text-success">●</span>';
  };
  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    const messageElement = document.createElement('div');
    messageElement.textContent = `${message.user}: ${message.text}`;
    messageList.appendChild(messageElement);
    messageList.scrollTop = messageList.scrollHeight;
  };
  ws.onclose = () => {
    status.innerHTML = 'disconnected <span class="text-danger">●</span>';
  };
  document.getElementById('message-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    if (message && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ user: 'Anonymous', text: message }));
      input.value = '';
    }
  });
}
