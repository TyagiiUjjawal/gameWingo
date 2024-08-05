import 'dotenv/config'

import express from 'express';
import configViewEngine from './config/configEngine';
import routes from './routes/web';
import cronJobContronler from './controllers/cronJobContronler';
import socketIoController from './controllers/socketIoController';
import connection from './config/connectDB';

let cookieParser = require('cookie-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;

app.use(cookieParser());
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/api/webapi/admin/approveRequest', async (req, res) => {
    const { id, amount } = req.body;

    console.log(`Approving request with ID: ${id}, Amount: ${amount}`);

    try {
        // Update rechargeRequests table
        const [result] = await connection.execute(
            'UPDATE rechargeRequests SET amount = ?, status = ? WHERE id = ?',
            [amount, 'Completed', id]
        );

        if (result.affectedRows === 0) {
            throw new Error('No rows updated. Check if the ID exists.');
        }

        // Get the mobile number associated with the request
        const [rows] = await connection.execute(
            'SELECT mobileNumber FROM rechargeRequests WHERE id = ?',
            [id]
        );

        if (rows.length === 0) {
            throw new Error('No such request found.');
        }

        const mobileNumber = rows[0].mobileNumber;

        // Update users table
        await connection.execute(
            'UPDATE users SET money = money + ? WHERE phone = ?',
            [amount, mobileNumber]
        );

        console.log(`Request approved successfully for mobile number: ${mobileNumber}`);

        res.json({ success: true, message: 'Request approved successfully.' });
    } catch (error) {
        console.error('Error in approving request:', error.message);
        res.status(500).json({ success: false, message: 'Error updating the database.', error: error.message });
    } finally {
        console.log("End of request processing.");
    }
});

// setup viewEngine
configViewEngine(app);
// init Web Routes
routes.initWebRouter(app);

// Cron game 1 Phut 
cronJobContronler.cronJobGame1p(io);

// Check xem ai connect vào sever 
socketIoController.sendMessageAdmin(io);

// app.all('*', (req, res) => {
//     return res.render("404.ejs"); 
// });

server.listen(port, '0.0.0.0', () => {
    console.log(`Connected successfully on port: ${port}`);
});
