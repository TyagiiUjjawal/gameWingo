import 'dotenv/config'

import express from 'express';
import configViewEngine from './config/configEngine';
import routes from './routes/web';
import cronJobContronler from './controllers/cronJobContronler';
import socketIoController from './controllers/socketIoController';
import connection from './config/connectDB';
import { google } from "googleapis";
import path from "path";

let cookieParser = require('cookie-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;

app.use(cookieParser());
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const SCOPES = ["https://www.googleapis.com/auth/webmasters"];
const SITE_URL = "https://www.cricketwinner.com";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const key = {
  type: "service_account",
  project_id: "cricket-winner-431903",
  private_key_id: "fb00e7c9f5fcfa07df692c85dc7134cebce91de6",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDTt49kId94jvKR\nkpBKmtV7lE3xcLg3GowqcKwJ8XdpCbAO33e2123C1x2l0GvUttwRAn6wIwfuSGty\njFeYpd/m+5WKMyUjBc1dih9pLRn+8okozPjjYMBC7WC1XJHVXhdIpI9QYd+VWu8j\njNpCghgeZZY/0ckJuAGq/jYREI48Zgqw4ZXhvOgWxMznKllsa5kh4BqEkkJ0xFmI\nK8qUroPjZZOsMTfxkqhBxnXH++QPFpPwmwuklOsYDeEmBcZjDTp5zo1JJygn00Fh\nrF4rZIa7qcSrUGlFz9H5k/sMbgfR9MuDfiqN6Ybn3VeI7UV800twS+spwAJJJVNn\nQSDRPFMbAgMBAAECggEAA5CaLf3yBNYnWHMm0dLEmHWZUGDtASSFyqsmAm7Z619Z\n4w45Nk9vTjIQEjwtrKG9l926Y13botP+Vynsyam1WO7QiEivLeVJnXMXb05umx/b\nVmAJKs70vcvAbp1V6UlRzAvVS+2x9ZJX53nWLPuCy3Q7cOyn3W2HPalVILluI68u\nUYRACw05R9jczbw/Z0LtoyIkTilAZl0F5orOcDiRCZ7eiQVCcMKHNs1kq6DeIaez\nBXxNxQqU4H/xj20jHutBNRNLYpIzEaDAmJRrkooynE0tsousE0LSlKGgzLCEarq2\ni99FD/w+4k+KeCNaCak9UpOfn0XtzgfOMoZoG7kUXQKBgQD2mo3HM6SJHYtOvTXP\n0FbFO0aKLbSQxuuwvhM1hLYw39KJjRKxJzMxUiDzBeailQ7vz6Uu7Trf6TsKWw7X\ne8qKPUApTnShrb2ubTHGoRTsgfpv8fn3miYKDImJ6qWnglt3Dr/7LQdfylZ/jQNS\nx1X31cCFTVnrCRp4PRtZ/RC3jQKBgQDbyLYKdpZ++Lo2OXyRJbChxt5c4imKVIxj\nwe2rNgPdHr0cAqHXZvkMJPqoOCgaQ+ZPSzkUbfYw+m+IpIZKpFxLPqTJY8TR6dQZ\n5UeikawD5YWSuqTUDKiKsQXvJPUCagP7HtVmL0hCIQYkCPJf+QzQzfFPnSt+17za\n2yGR57rXRwKBgE2w3W/fpjuIckYJODXTdjLG/O81fQiLkt9o0pZuzBNTwHmTV0s2\nhVtJe5X0yvd3rHAC5BCHrp+yU+ZsT521o1av+1HIJNh26yZTwnXIc9YbEPJJsq2+\nA7PwxTgNE8lVOUml/Pe99O/JyDyBCYX/xObCkdetSeHRSWSOI9rS7nxVAoGAf7YX\noeja9pkNi2jIK4edJcRrfcmlnc4XbfhIZM6UXC76cIZPCN27JgVu6cUH+IswDy+E\n0Yw8HKXJnbsMld8ACnEyTBv/SIL5Trreb2b6b6E1hteR4+4fGchXzGjLPkXgXlHC\nawhakqKh8NqKDJ6phcPFzx9jIOe3w+zFiwT+mw0CgYEAhjo/GhRvAv6pJSNlxsAs\nDvBAge+vp/LYr7b3STTL6kofOpBwfjMKhSJwLxSg4o57+Q4piRRlcyjmqjjypZdD\nCv5pEiwGwXvfHVvyz9kQ8Z7gZWQfpnbeK36sLfkfqdTVcEMw7nc4ZkyyTq+a/J1i\nWDFktDWY9iUZVqKcryREHS0=\n-----END PRIVATE KEY-----\n",
  client_email: "cricket-winner@cricket-winner-431903.iam.gserviceaccount.com",
  client_id: "105577045280083350425",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/cricket-winner%40cricket-winner-431903.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

app.post('/api/cwTestApi', async (req, res) => {
  try {
    const auth = await authorize();
    const message = await submitSitemap(auth);
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

async function authorize() {
  const { client_email, private_key } = key;
  const jwtClient = new google.auth.JWT(client_email, null, private_key, SCOPES);
  try {
    await jwtClient.authorize();
    return jwtClient;
  } catch (error) {
    throw new Error("Authorization failed: " + error.message);
  }
}

async function submitSitemap(auth) {
  const webmasters = google.webmasters({ version: "v3", auth });
  try {
    await webmasters.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL,
    });
    return "Sitemap submitted successfully";
  } catch (err) {
    throw new Error(`Error submitting sitemap: ${err.message}`);
  }
}


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
