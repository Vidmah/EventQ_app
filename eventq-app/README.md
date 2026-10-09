# EventPulse — Pune Event Impact Intelligence

EventPulse is a React + Vite educational Data Warehousing & Data Mining application focused on **event impact analysis and prediction for Pune, Maharashtra**.

## What the app actually contains

### Dashboard
- Executive KPI dashboard
- Pune event directory with search and filters
- Pune-area event map/reference views
- Impact analysis and charts
- Event impact categories: **LOW / MEDIUM / HIGH**

### Data Warehousing
- Synthetic Pune event dataset generation
- ETL pipeline status/log view
- Star-schema representation with a fact table and dimensions
- OLAP-style roll-up, slice and dice views

### Data Mining / ML
- **Apriori** association-rule mining with support, confidence and lift
- **K-Means** clustering with inertia/elbow data and cluster profiles
- Classification comparison views (J48-style decision rules, Naive Bayes-style score, Random Forest-style rule reuse, KNN-style score and logistic-style score)
- Regression comparison view
- Model/evaluation tables and charts

> Important: the current front-end implements these analyses locally with JavaScript rules/calculations. The classification and regression sections are educational simulations/heuristics, not claims of a separately trained production ML model.

### Event Predictor
The predictor accepts:
- Event type
- Pune area and venue
- Expected attendance and venue capacity
- Weather/rainfall
- Weekend/peak-hour conditions
- Parking availability
- Transit feeder availability

It calculates traffic, crowd, parking, transit and noise scores, then combines them using configurable weights to produce an overall impact score and category.

### Dataset / WEKA
The app can generate a Pune event dataset and export the calculated dataset as an **ARFF** file for WEKA.

## Default impact scoring

The default weights are:

| Factor | Weight |
|---|---:|
| Traffic congestion | 30% |
| Crowd density | 25% |
| Parking demand | 20% |
| Transit impact | 15% |
| Noise level | 10% |

Default category thresholds:
- **LOW:** score < 35
- **MEDIUM:** 35–60
- **HIGH:** score ≥ 61

These thresholds and weights can be changed in the application.

## Pune scope

The application uses Pune-specific areas such as:
Shivajinagar, Baner, Balewadi, Wakad, Hinjawadi, Aundh, Kothrud, Swargate, Hadapsar, Kharadi, Viman Nagar, Koregaon Park, Camp and Pimpri-Chinchwad.

The dataset is synthetic/demo data generated in the browser. It should not be presented as official municipal statistics or real-time traffic measurements.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  App.jsx       # Main dashboard, data generation and analytics
  App.css       # Component styling
  index.css     # Tailwind/global styles
  main.jsx      # React entry point
public/
  favicon.svg
  icons.svg
```

## Technologies

- React
- Vite
- Tailwind CSS
- Recharts
- Lucide React

## Project title

**Intelligent Event Impact Analysis and Prediction Using Apriori, Classification and Clustering**

## Short description

EventPulse demonstrates how Data Warehousing and Data Mining techniques can be combined to study how large events may affect traffic, crowding, parking, transit and noise across Pune.
