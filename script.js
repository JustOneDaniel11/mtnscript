// Select elements
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const congratsPopup = document.getElementById("congratsPopup");
const startShareBtn = document.getElementById("startShareBtn");
const sharePopup = document.getElementById("sharePopup");
const shareBtn = document.getElementById("shareBtn");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const claimPopup = document.getElementById("claimPopup");
const claimBtn = document.getElementById("claimBtn");
const mtnNumber = document.getElementById("mtnNumber");

// Spin wheel
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;

  // Always land on 500GB (slice 270°–360°)
  const randomOffset = Math.floor(Math.random() * 90);
  const finalDegrees = 360 * 5 + 150 + randomOffset;

  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${finalDegrees}deg)`;

  setTimeout(() => {
    congratsPopup.classList.remove("hidden");
  }, 4200);
});

// Show share popup
startShareBtn.addEventListener("click", () => {
  congratsPopup.classList.add("hidden");
  sharePopup.classList.remove("hidden");
});

// Share counter
let shareCount = 0;
shareBtn.addEventListener("click", () => {
  shareCount++;
  let progress = Math.min((shareCount / 5) * 100, 100);

  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${Math.round(progress)}% Complete`;

  // Open WhatsApp share link
  let message = encodeURIComponent(
    "🚀 MTN is giving away FREE 500GB Data to lucky customers this month! 🎉📱\n\n" +
    "Don’t miss out on this opportunity to enjoy unlimited browsing, streaming, and downloads. Imagine what you can do with 500GB — stay connected on social media, binge your favorite movies, and chat with friends without worrying about data running out. 💛\n\n" +
    "👉 Hurry now and claim your reward before the offer ends. MTN is selecting only a limited number of winners each day!\n\n" +
    "✅ Visit here to spin the wheel and see if you are one of today’s winners:\n👉 https://yourwebsite.com\n\n" +
    "Tag your friends and family so they don’t miss this too. The more people you share with, the better! 🔥\n\n" +
    "#MTN #FreeData #Giveaway #500GB"
  );
  
  window.open(`https://api.whatsapp.com/send?text=${message}`, "_blank");
  

  if (shareCount >= 5) {
    sharePopup.classList.add("hidden");
    claimPopup.classList.remove("hidden");
  }
});

// Claim button
claimBtn.addEventListener("click", () => {
  if (mtnNumber.value.trim() === "") {
    alert("Please enter your MTN number.");
    return;
  }
  // Redirect to ad link
  window.location.href = "https://www.revenuecpmgate.com/gv7ejtkrp?key=e4474d05ae09fc96f5d9440b702ff26a";
});
