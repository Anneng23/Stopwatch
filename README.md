# Stopwatch Timer App

A lightweight stopwatch that tracks hours, minutes, seconds, and milliseconds.

## ⌚ Features
- Start, Pause, and Reset buttons
- Displays time in **HH:MM:SS:MS** format
- Smooth millisecond updating
- UI disables incorrect button actions

## 🛠 Technologies Used
- HTML
- CSS
- JavaScript

## 📌 How It Works
- Uses `setInterval` to update milliseconds
- Tracks elapsed time while running
- Prevents multiple running intervals

## 🚫 Error Fix Highlight
- Improved formatting so time doesn't break after 60 seconds
- start button disabled while running