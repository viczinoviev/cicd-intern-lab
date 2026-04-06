const express = require('express');
const app = express();

// Route 1: Home
app.get('/', (req, res) => {
    res.json({ message: 'Hello from CI/CD Lab!', status: 'ok' });
});

// Route 2: Health check
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

// Route 3: Add two numbers
app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({ result: a + b });
});

// Start server only when run directly (not during tests)
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

module.exports = app;