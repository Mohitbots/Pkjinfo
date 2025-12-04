export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-200 dark:border-primary-900 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-600 dark:border-primary-400 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}
