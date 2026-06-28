# 🚗 AI Driver Monitoring Dashboard

An AI-powered Driver Monitoring System that detects unsafe driving behavior in real time using Computer Vision and Deep Learning. The system analyzes webcam, dashcam, or recorded video feeds to monitor driver safety and displays live analytics on a web dashboard.

---

# 📌 Project Overview

The AI Driver Monitoring Dashboard helps improve road safety by detecting risky driving behaviors such as:

- ✅ Seatbelt Detection
- 📱 Mobile Phone Usage Detection
- 👀 Eye Closure Detection
- 😴 Drowsiness Detection
- 🥱 Yawning Detection
- 🧭 Head Pose Estimation
- 🚨 Real-Time Alerts
- 📍 Emergency SOS with GPS
- 📊 Live Monitoring Dashboard

The system supports:

- Webcam
- Dashcam
- Recorded Videos

---

# 🎯 Objectives

- Improve driver safety
- Detect distracted driving
- Detect drowsiness in real time
- Generate risk scores
- Send emergency alerts when necessary
- Display live analytics on a dashboard

---

# 🏗️ System Architecture

```
                  React Frontend
                        │
          REST API + Socket.IO
                        │
           Node.js + Express Backend
                        │
                MongoDB Database
                        │
                 Python AI Service
                        │
        ┌───────────────┴───────────────┐
        │                               │
      YOLOv8                    TensorFlow
 Seatbelt & Phone         Eye & Yawn Detection
        │
     MediaPipe
 Face Mesh & Head Pose
```

---

# 🔄 Workflow

```
Video Input
(Webcam / Dashcam / Recorded Video)

            │

            ▼

Frame Extraction (OpenCV)

            │

            ▼

AI Processing

├── Seatbelt Detection
├── Phone Detection
├── Face Detection
├── Eye Closure
├── Yawning
└── Drowsiness

            │

            ▼

Risk Assessment Engine

            │

            ▼

Alerts & Notifications

            │

            ▼

Dashboard + Database + SOS
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Socket.IO Client

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- Multer
- Mongoose
- Socket.IO

---

## AI Service

- Python
- OpenCV
- YOLOv8
- TensorFlow
- MediaPipe
- FastAPI

---

## Database

- MongoDB

---

## Notifications

- Twilio (SMS / WhatsApp)
- Nodemailer (Email)

---

## Deployment

- Docker
- GitHub

---

# 📂 Project Structure

```
AI_Driver_Monitoring_System/

│

├── frontend/

├── backend/

│   ├── src/

│   ├── routes/

│   ├── controllers/

│   ├── middleware/

│   ├── models/

│   └── sockets/

│

├── ai-service/

│   ├── app/

│   ├── object_detection/

│   ├── drowsiness/

│   └── models/

│

├── datasets/

├── models/

├── videos/

├── docs/

├── README.md

└── .gitignore
```

---

# ✨ Features

## AI Features

- Seatbelt Detection
- Mobile Phone Detection
- Eye Closure Detection
- Blink Detection
- Yawning Detection
- Drowsiness Detection
- Head Pose Estimation
- Risk Score Calculation

---

## Dashboard Features

- Live Video Feed
- Driver Status
- Safety Score
- Event Timeline
- Alerts
- Monitoring History
- GPS Location
- SOS Status

---

## Backend Features

- Authentication
- REST APIs
- File Upload
- AI Integration
- Real-Time Communication
- Database Logging

---

# 📅 Development Roadmap

## Phase 1

- Project Setup
- GitHub Repository
- React Setup
- Express Setup
- FastAPI Setup

---

## Phase 2

Authentication

- Register
- Login
- JWT
- Protected Routes

---

## Phase 3

Dashboard UI

- Home
- Login
- Dashboard
- Live Monitoring

---

## Phase 4

Video Upload

- Upload
- Stream
- Process

---

## Phase 5

AI Modules

- Seatbelt Detection
- Phone Detection
- Face Mesh

---

## Phase 6

Driver Fatigue

- Eye Detection
- Yawning
- Drowsiness

---

## Phase 7

Risk Engine

- Risk Score
- Warning Level
- Critical Alerts

---

## Phase 8

Emergency SOS

- GPS
- SMS
- WhatsApp
- Email

---

## Phase 9

Deployment

- Docker
- Cloud Deployment

---

# 📊 Database Collections

## Users

- Name
- Email
- Password
- Role

---

## Drivers

- Driver Information
- Emergency Contact

---

## Monitoring Logs

- Time
- Seatbelt
- Phone
- Drowsiness
- Risk Score

---

## SOS Logs

- Time
- GPS Location
- Status

---

# 📌 Future Enhancements

- Accident Detection
- Lane Departure Warning
- Speed Estimation
- Driver Identification
- Fleet Management Dashboard
- Cloud Analytics
- Mobile Application
- Voice Assistant Integration

---

# 👨‍💻 Developer

**Project:** AI Driver Monitoring Dashboard

Built using Full Stack Development + Artificial Intelligence + Computer Vision.

---

# 📜 License

This project is developed for educational and portfolio purposes.