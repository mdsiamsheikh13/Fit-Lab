# FITLOG

FITLOG is a modern workout and exercise tracking web application built with **Next.js** and **JavaScript**. It allows users to explore different exercises, view detailed exercise information, create a personal workout plan, save exercises for later, and manage their workout activities.

The application uses a REST API to retrieve exercise information and provides an interactive interface for organizing selected workouts.

## 🚀 Live Demo

[Visit FITLOG](https://fit-lab-nu.vercel.app/)

## 🔗 GitHub Repository

[View Source Code](https://github.com/mdsiamsheikh13/Fit-Lab)

---

## 🚀 Technologies Used

* Next.js
* React
* JavaScript
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify
* REST API
* Next.js App Router
* Next.js Image

---

## ✨ Key Features

### 1. Explore Exercises

Users can browse different exercises and explore important information about each workout.

Each exercise can include information such as:

* Exercise name
* Description
* Muscle group
* Difficulty level
* Duration
* Calories burned
* Rating
* Exercise image

The exercise data is retrieved dynamically from the FitLog REST API.

### 2. Exercise Details

Users can open an individual exercise to view more detailed information.

The details page provides information such as:

* Exercise name
* Description
* Muscle group
* Difficulty
* Equipment
* Sets and repetitions
* Duration
* Calories
* Rating
* Step-by-step instructions

Users can also add an exercise to their workout plan or save it for later.

### 3. Personal Workout Plan

The **My Plan** section allows users to organize the exercises they want to complete.

Users can:

* Add exercises to their workout plan
* Remove individual exercises
* Mark exercises as completed
* Open exercise details
* Sort exercises
* View the number of selected exercises
* View total workout duration
* View total calories

This gives users a simple way to keep track of their planned workouts.

### 4. Save Exercises

Users can save exercises that they want to check or use later.

The saved exercise section allows users to:

* View saved exercises
* Open saved exercise details
* Remove exercises from the saved list

This makes it easier to keep useful exercises available for future workouts.

### 5. Workout Sorting

The workout plan includes sorting functionality that allows users to organize exercises based on different information.

Users can sort their exercises by:

* Exercise name
* Duration
* Calories

This makes the workout plan easier to manage when multiple exercises have been added.

### 6. Workout Summary

The workout plan provides a summary of the selected exercises.

Users can see:

* Total number of exercises
* Total workout duration
* Total calories

The summary updates according to the exercises currently included in the workout plan.

### 7. Responsive Design

FITLOG is designed to work across different screen sizes.

The interface adapts to:

* Desktop
* Tablet
* Mobile

Important parts of the application, including navigation, exercise cards, details pages, workout plans, buttons, and layouts, are designed to remain usable on different devices.

---

## 📡 API

FITLOG uses a REST API to retrieve exercise information.

### Get All Exercises

```text
https://api.abcz.workers.dev/api/fitlog
```

### Get Exercise by ID

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

The API provides the exercise information displayed throughout the application.

---

## 📁 Project Structure

```text
src/
│
├── app/
│   ├── components/
│   ├── exercises/
│   │   └── [id]/
│   ├── my-plan/
│   ├── layout.js
│   ├── loading.js
│   ├── not-found.js
│   └── page.js
│
├── context/
│
└── ...
```

> The exact component organization may vary as the project continues to evolve.

---

## 🧠 React & Next.js Concepts Used

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that allows us to write HTML-like markup inside JavaScript.

It makes React components easier to read because the structure of the user interface can be written together with the component logic.

---

### 2. What is the difference between props and state?

**Props** are values passed from a parent component to a child component. They allow components to share data and functionality.

**State** is data managed within a component that can change during the application's lifecycle.

In FITLOG, state is used to manage information such as selected exercises, saved exercises, and workout plan changes.

---

### 3. What does `useState` do?

`useState` is a React Hook that allows a component to store and update data.

In FITLOG, state is used for interactive features such as managing the user's workout plan and saved exercises.

When the state changes, React updates the relevant part of the interface.

---

### 4. What does `useEffect` do?

`useEffect` is a React Hook used for handling side effects in a component.

It can be used for tasks such as:

* Fetching data
* Synchronizing with external systems
* Running code when certain values change

In a Next.js application, data fetching can also be handled through other Next.js patterns depending on whether a component runs on the server or client.

---

### 5. What is conditional rendering?

Conditional rendering means displaying different parts of the UI depending on a condition.

For example, FITLOG can display an empty-state message when the user has not added any exercises to their workout plan.

When exercises are available, the application displays the corresponding exercise cards instead.

---

### 6. Why does a `.map()` list need a unique `key`?

When React renders a list using `.map()`, each item should have a unique `key`.

The key helps React identify individual items when the list changes.

In FITLOG, the unique exercise ID can be used as the key when rendering exercise lists.

---

### 7. What are dynamic routes in Next.js?

Dynamic routes allow a page to handle different URL values using a dynamic segment.

For example:

```text
/exercises/[id]
```

The `[id]` segment can represent different exercise IDs.

FITLOG uses this approach to display the details of a specific exercise based on its ID.

---

### 8. What is the Next.js App Router?

The Next.js App Router is the routing system based on the `app` directory.

It allows applications to organize pages, layouts, loading states, error handling, and dynamic routes using the project folder structure.

FITLOG uses the App Router to organize its pages and application routes.

---

## 🛠️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/mdsiamsheikh13/Fit-Lab.git
```

### Navigate to the Project Directory

```bash
cd Fit-Lab
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

---

## 🔗 Repository

[View Source Code](https://github.com/mdsiamsheikh13/Fit-Lab)
