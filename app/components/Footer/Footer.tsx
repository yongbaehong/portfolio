export default function Footer() {
  return (
    <footer className="py-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Yongbae. All rights reserved.</p>
      </div>
    </footer>
  );
}   