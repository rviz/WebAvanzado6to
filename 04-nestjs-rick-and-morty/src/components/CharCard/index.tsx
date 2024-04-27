"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { CardContent, Card } from "../ui/card";

export default function CharCard({ name, description, imageUrl }) {
  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          <Card className="relative group">
            <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-100 rounded-lg transition-colors group-hover:bg-gray-800 dark:group-hover:bg-gray-200">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={imageUrl}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{name}</h3>
              <p className="text-gray-500 dark:text-gray-600 text-center">
                {description}
              </p>
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <Button
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                  size="icon"
                  variant="default"
                >
                  <StarIcon />
                  <span className="sr-only">Mark as favorite</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}
