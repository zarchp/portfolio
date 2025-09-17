# Anzar Syahid - Portfolio

This is the source code for my personal portfolio website.  
It serves as a central place to showcase my projects, professional experience, and achievements.

## ✨ Features

- Server-Side Rendering (**SSR**) for SEO and fast performance  
- Clean and modern design  
- Responsive across devices  
- Performance and accessibility focused  
- Easy to extend and maintain  

## 🛠️ Requirements

Make sure you have the following installed:

- **PHP** >= 8.3  
- **Composer** >= 2.7  
- **Node.js** >= 20  
- **pnpm** >= 9 (via `corepack enable`)  
- **Database**: MySQL 8 / PostgreSQL 14+ (or compatible)  
- **Git** for version control  

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/zarchp/portfolio.git
cd portfolio

# Install PHP dependencies
composer install

# Install Node.js dependencies
pnpm install

# Copy environment file and generate key
cp .env.example .env
php artisan key:generate

# Run the local development servers
pnpm run dev
php artisan serve
