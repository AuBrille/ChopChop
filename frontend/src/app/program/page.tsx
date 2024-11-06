'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
export default function Page() {
  return (
    <div className="flex flex-col">
    <div className="mb-8 bg-green-500 py-20 text-center text-white">
      <h1 className="text-4xl font-bold">Programme</h1>
      <p className="mt-2 text-xl">Trouvez l'entraînement qui vous convient</p>
    </div>
    <div className='flex justify-center'><Card className="w-[50%]" variant="info" key="info">
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">Content</div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link href="program/intro-calisthenics"><Button variant="info">View</Button></Link>
              </CardFooter>
            </Card>
          </div>
    </div>
  );
}
