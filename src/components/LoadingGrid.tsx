
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LoadingGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} className="h-full">
          <div className="w-full h-48 bg-gray-200 animate-pulse" />
          <CardContent className="p-4 space-y-3">
            <div className="h-6 bg-gray-200 rounded animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
              <div className="h-5 bg-gray-200 rounded w-16 animate-pulse" />
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-8 bg-gray-200 rounded flex-1 animate-pulse" />
              <div className="h-8 bg-gray-200 rounded w-8 animate-pulse" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LoadingGrid;
