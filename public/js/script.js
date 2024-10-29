// اطلاعات اتاق‌ها و تصاویر برای اسلایدر
const rooms = [
    {
        id: 1,
        title: "اتاق ۱",
        description: "۲ تخت‌خواب، صبحانه رایگان",
        price: "۵۰۰,۰۰۰ تومان",
        images: ["download (2).jpg", "room1-2.jpg", "room1-3.jpg"]
    },
    {
        id: 2,
        title: "اتاق ۲",
        description: "۱ تخت‌خواب، نمای دریا",
        price: "۷۰۰,۰۰۰ تومان",
        images: ["room2-1.jpg", "room2-2.jpg", "room2-3.jpg"]
    }
];

// متغیرهای مودال و اسلایدر
let currentRoomIndex = 0;
let currentImageIndex = 0;
const modal = document.getElementById("modal");
const roomTitle = document.getElementById("room-title");
const roomDescription = document.getElementById("room-description");
const roomPrice = document.getElementById("room-price");
const sliderImage = document.getElementById("slider-image");

// نمایش مودال و اطلاعات اتاق
function openModal(roomId) {
    const room = rooms.find(r => r.id === roomId);
    currentRoomIndex = rooms.indexOf(room);
    currentImageIndex = 0;
    roomTitle.textContent = room.title;
    roomDescription.textContent = room.description;
    roomPrice.textContent = room.price;
    sliderImage.src = room.images[currentImageIndex];
    modal.style.display = "flex";
}

// بستن مودال
function closeModal() {
    modal.style.display = "none";
}

// تغییر به تصویر قبلی
function prevImage() {
    const room = rooms[currentRoomIndex];
    currentImageIndex = (currentImageIndex === 0) ? room.images.length - 1 : currentImageIndex - 1;
    sliderImage.src = room.images[currentImageIndex];
}

// تغییر به تصویر بعدی
function nextImage() {
    const room = rooms[currentRoomIndex];
    currentImageIndex = (currentImageIndex === room.images.length - 1) ? 0 : currentImageIndex + 1;
    sliderImage.src = room.images[currentImageIndex];
}

// فیلتر اتاق‌ها براساس ورودی
function filterRooms() {
    const filterValue = document.getElementById("searchInput").value.toLowerCase();
    const roomList = document.getElementById("roomList");
    const rooms = roomList.getElementsByClassName("room");
    
    for (let room of rooms) {
        const roomName = room.getAttribute("data-name").toLowerCase();
        if (roomName.includes(filterValue)) {
            room.style.display = "block";
        } else {
            room.style.display = "none";
        }
    }
}
