# LinkTree Clone – Your Personalized Link in Bio

## 📌 Overview

This is a modern, full-stack **LinkTree clone** that allows users to generate personalized link-in-bio pages containing their profile picture, short description, and multiple social or professional links. Built using **Next.js 13 App Router**, **React**, **Tailwind CSS**, and **MongoDB**, the project lets users showcase their online presence through a single shareable URL. **Postman** was used for testing and validating API routes during development.

---

## 🚀 Features

* 🌐 **Custom LinkTree Pages**: Every user receives a unique URL based on their selected handle.
* 👤 **Profile Setup**: Add a profile picture and a short user description.
* ☁️ **MongoDB Integration**: All user data is saved in a MongoDB database.
* 🧠 **Validation**: Prevents duplicate handles and ensures that required fields are properly filled.
* 🧪 **API Testing with Postman**: All backend APIs were tested for reliability using Postman.
* 🌈 **Beautiful UI**: Designed using Tailwind CSS for a responsive and modern interface.

---

## 🛠️ Tech Stack

* **Frontend**: React, Next.js 13 (App Router), Tailwind CSS
* **Backend**: Next.js API Routes
* **Database**: MongoDB (via `mongodb` client)
* **API Testing**: Postman
* **Icons**: React Icons (for GitHub, LinkedIn, Twitter)
* **Fonts**: Google Fonts (Geist and Geist Mono)

---

## 🧩 Project Structure

* `app/page.jsx`: Homepage where users enter and claim their handle
* `app/generate/page.jsx`: Form for inputting user links, description, and picture
* `app/[handle]/page.jsx`: Dynamic public LinkTree page rendered using the handle
* `app/api/add/route.js`: Backend route that validates and saves user data to MongoDB
* `components/navbar.jsx`: Displays a navigation bar only on the homepage
* `app/layout.js`: Global layout wrapper and font configuration

---

## 📋 How It Works

1. **Enter Handle** – User claims a unique handle from the homepage.
2. **Add Details** – User submits links, a profile image URL, and a short description.
3. **Submit Form** – The data is validated and sent to the MongoDB database.
4. **Visit LinkTree Page** – User's personalized page becomes live at `/handle`.

---

## ✅ Validation Logic

* Handle must be a non-empty, unique string.
* At least one valid link (URL + text) is required.
* Optional fields: Description, Profile picture URL.

---

## 💡 Future Enhancements

* User authentication and login
* Theme customization and background settings
* Link click analytics and performance insights
* QR code generation for easy sharing

---

## 📜 License

This project is open for educational and personal portfolio use. Feel free to customize it further for your own purposes.

