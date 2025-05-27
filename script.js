const carImages = {
  "Myvi 1.5 AV": "./assets/myvi.jpeg",
  "Axia 1.0 AV": "./assets/axia.jpeg",
  "Bezza 1.3 AV": "./assets/bezza.jpeg",
  "Ativa 1.0 AV": "./assets/ativa.jpeg",
  "Alza 1.5 AV": "./assets/alza.jpeg",
  "Aruz 1.5 AV": "./assets/aruz.jpeg"
};

const carPrices = {
  "Myvi 1.5 AV": "RM61,929.87",
  "Axia 1.0 AV": "RM51,202.89",
  "Bezza 1.3 AV": "RM51,686.11",
  "Ativa 1.0 AV": "RM75,571.35",
  "Alza 1.5 AV": "RM77,988.15",
  "Aruz 1.5 AV": "RM80,459.95"
};

const monthlyEstimate = {
  "Myvi 1.5 AV": "RM817",
  "Axia 1.0 AV": "RM675",
  "Bezza 1.3 AV": "RM681",
  "Ativa 1.0 AV": "RM956",
  "Alza 1.5 AV": "RM1028",
  "Aruz 1.5 AV": "RM1018"
};

function updateModelPreview(model) {
  const image = document.getElementById('carImage');
  const title = document.getElementById('modelTitle');
  const price = document.getElementById('carPrice');
  const monthly = document.getElementById('monthly');
  const card = document.getElementById('modelPreviewCard');

  image.src = carImages[model];
  title.textContent = model;
  price.textContent = carPrices[model];
  monthly.textContent = monthlyEstimate[model];
  card.classList.remove('hidden');
}
