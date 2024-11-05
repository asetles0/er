const carDescription = {
    modelName: "Toyota Land Cruiser", // Модель атауы
    color: "Қара",                     // Түсі
    wheelsCount: 4,                   // Дөңгелек саны
    isOffRoad: true,                  // Жолсыз аймақпен жүруге арналған ба
    rating: 4.8                       // Рейтингі
};

// Көлік сипаттамасын консольға шығару
console.log("Көлік моделі:", carDescription.modelName);
console.log("Түсі:", carDescription.color);
console.log("Дөңгелек саны:", carDescription.wheelsCount);
console.log("Жолсыз аймаққа арналған ба:", carDescription.isOffRoad ? "Иә" : "Жоқ");
console.log("Рейтингі:", carDescription.rating);