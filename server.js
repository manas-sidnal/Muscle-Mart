import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Create feedback directory if it doesn't exist
const feedbackDir = path.join(__dirname, 'feedback');
if (!fs.existsSync(feedbackDir)) {
    fs.mkdirSync(feedbackDir, { recursive: true });
}

// Endpoint to handle contact form submissions
app.post('/api/feedback', (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        
        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        // Create feedback entry
        const feedbackEntry = {
            name,
            email,
            phone: phone || 'Not provided',
            subject: subject || 'No subject',
            message,
            timestamp: new Date().toISOString()
        };

        // Create filename with timestamp
        const filename = `feedback_${Date.now()}.txt`;
        const filepath = path.join(feedbackDir, filename);

        // Format the content to save
        const content = `-------------
Name: ${feedbackEntry.name}
Email: ${feedbackEntry.email}
Phone: ${feedbackEntry.phone}
Subject: ${feedbackEntry.subject}
Message: ${feedbackEntry.message}
Timestamp: ${feedbackEntry.timestamp}
-------------
`;

        // Write to file
        fs.writeFileSync(filepath, content);

        console.log(`Feedback saved to ${filepath}`);

        res.status(200).json({ message: 'Feedback saved successfully', filename });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ error: 'Failed to save feedback' });
    }
});

// Serve static files from the public folder (for production)
// app.use(express.static(path.join(__dirname, 'dist')));

// Commenting out catch-all route for development

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Feedback will be saved to the 'feedback' folder`);
});