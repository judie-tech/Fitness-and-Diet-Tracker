document.addEventListener("DOMContentLoaded", function () {
  // Workout Minutes Chart (Bar Graph)
  const ctxWorkoutMinutes = document
    .getElementById("workoutMinutesChart")
    .getContext("2d");
  const workoutMinutesChart = new Chart(ctxWorkoutMinutes, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Workout Minutes",
          data: [30, 45, 60, 70, 80, 90, 100],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 110,
          stepSize: 10,
        },
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Daily Workout Progress",
          font: {
            size: 20,
          },
          padding: {
            top: 10,
            bottom: 30,
          },
        },
      },
    },
  });

  // Water Intake Chart (Doughnut)
  const ctxWaterIntake = document
    .getElementById("waterIntakeChart")
    .getContext("2d");
  const waterIntakeChart = new Chart(ctxWaterIntake, {
    type: "doughnut",
    data: {
      labels: ["Goal", "Current"],
      datasets: [
        {
          data: [100, 85],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Weekly Water Intake",
          font: {
            size: 20,
          },
          padding: {
            top: 10,
            bottom: 30,
          },
        },
      },
    },
  });

  // Calorie Deficit/Surplus Chart (Stacked Bar)
  const ctxCalorieDeficitSurplus = document
    .getElementById("calorieDeficitSurplusChart")
    .getContext("2d");
  const calorieDeficitSurplusChart = new Chart(ctxCalorieDeficitSurplus, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Calories Deficit",
          data: [10, 12, 15, 18, 20, 22, 25],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 1,
          stack: "calories",
        },
        {
          label: "Calories Surplus",
          data: [-5, -3, -8, -10, -12, -15, -18],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
          stack: "calories",
        },
      ],
    },
    options: {
      scales: {
        y: {
          stacked: true,
          beginAtZero: true,
          min: 0,
          max: 35,
          stepSize: 5,
        },
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
      },
      plugins: {
        tooltip: {
          intersect: false,
          mode: "index",
        },
        title: {
          display: true,
          text: "Daily Calorie Balance",
          font: {
            size: 20,
          },
          padding: {
            top: 10,
            bottom: 30,
          },
        },
      },
    },
  });
});
