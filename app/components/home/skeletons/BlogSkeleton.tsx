import React from 'react';

const BlogSkeleton: React.FC = () => {
    return (
        <div className="grid gap-8 col-span-1 lg:mx-32 mb-24">
            {Array.from({ length: 3 }).map((_, index) => (
                <article key={index} className="bg-slate-900 rounded-lg shadow-lg shadow-green-300 overflow-hidden animate-pulse">
                    <div className="w-full lg:h-80 bg-slate-700"></div>
                    <div className="p-6">
                        <div className="h-6 bg-slate-700 rounded mb-1"></div>
                        <div className="h-4 bg-slate-700 rounded mb-2"></div>
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                            <div className="h-4 w-4 bg-slate-700 rounded-full mr-1"></div>
                            <div className="h-4 bg-slate-700 rounded w-24 mr-4"></div>
                            <div className="h-4 w-4 bg-slate-700 rounded-full mr-1"></div>
                            <div className="h-4 bg-slate-700 rounded w-24 mr-4"></div>
                            <div className="h-4 bg-slate-700 rounded w-16"></div>
                        </div>
                        <div className="h-4 bg-slate-700 rounded w-24 mt-2"></div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default BlogSkeleton;