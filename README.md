# 📸 Picsum Image Gallery (React)

A simple React image gallery that fetches and displays random images using the Picsum Photos API with pagination support.

## 🚀 Features
- Fetches images dynamically using Axios
- Pagination with Next and Prev buttons
- Loading state while fetching data
- Responsive layout using Tailwind CSS
- Click any image to open the original source

## 🛠️ Tech Stack
- React
- Axios
- Tailwind CSS
- Picsum Photos API

## 📂 API Used
https://picsum.photos/v2/list?page={page}&limit=35

## 📦 Installation & Setup
1. Clone the repository
git clone https://github.com/sayantaniy/Gallery

2. Navigate to the project directory
cd Gallery

3. Install dependencies
npm install

4. Run the development server
npm run dev

## 🧠 How It Works
- userData state stores fetched images
- index state tracks the current page
- useEffect triggers API call when page changes
- Shows Loading message until data is fetched

## 📸 Screenshot
![Preview](img.png)

## 🔮 Future Improvements
- Image modal preview
- Infinite scrolling
- Skeleton loaders
- Search by author

## 👤 Author
Sayantani Manna

